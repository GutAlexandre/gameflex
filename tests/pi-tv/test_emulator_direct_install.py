import io
import json
import struct
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "tools/pi-tv"))
import emulator_assistant as assistant


class Download(io.BytesIO):
    def __init__(self, body, url):
        super().__init__(body)
        self.headers = {"Content-Length": str(len(body))}
        self.url = url

    def geturl(self):
        return self.url


def appimage(machine=62):
    body = bytearray(64)
    body[:6] = b"\x7fELF\x02\x01"
    body[8:11] = b"AI\x02"
    struct.pack_into("<HH", body, 16, 3, machine)
    return bytes(body)


class DirectInstallTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.library = SimpleNamespace(mount=self.root / "library", data=self.root / "data")
        self.library.mount.mkdir()
        assistant.JOBS.clear()

    def tearDown(self):
        self.temp.cleanup()

    def game(self, console, filename):
        folder = self.library.mount / "roms" / console
        folder.mkdir(parents=True)
        (folder / filename).write_bytes(b"fixture")

    def machine(self):
        return patch.object(assistant, "system_info", return_value={
            "os": "Linux", "architecture": "x86_64", "platform": "linux/x86_64",
            "ramGiB": 16, "execution": "server",
        })

    def test_owned_platforms_offer_direct_install(self):
        for console, filename in {
            "nes": "game.nes", "snes": "game.sfc", "gbc": "game.gbc",
            "gba": "game.gba", "n64": "game.z64", "nds": "game.nds",
            "ps1": "game.cue", "ps2": "game.iso", "gc": "game.iso",
            "wii": "game.iso", "3ds": "game.3ds", "switch": "game.nsp",
            "wiiu": "game.wud",
        }.items():
            self.game(console, filename)
        with self.machine():
            rows = {row["consoleId"]: row for row in assistant.inventory(self.library)["items"]}
        self.assertTrue(all(rows[console]["canInstall"] for console in rows))
        self.assertEqual(rows["switch"]["packageFile"], "Eden-Linux-de7e6e01d4-amd64-clang-pgo.AppImage")
        self.assertEqual(rows["wiiu"]["packageFile"], "Cemu-2.6-x86_64.AppImage")

    def test_libretro_is_verified_and_configured_atomically(self):
        self.game("nes", "game.nes")
        archive = io.BytesIO()
        with zipfile.ZipFile(archive, "w") as output:
            output.writestr("fceumm_libretro.so", b"verified core")
        response = Download(archive.getvalue(), assistant.DOWNLOADS["nes"]["linux-x86_64"])
        opener = SimpleNamespace(open=lambda *args, **kwargs: response)
        assistant.JOBS["nes"] = {}
        with self.machine(), patch.object(assistant, "validate_core"), patch.object(assistant.urllib.request, "build_opener", return_value=opener):
            assistant.install(self.library, "nes")
        self.assertEqual(assistant.JOBS["nes"]["status"], "succeeded")
        self.assertTrue((self.library.mount / "cores/nes/fceumm_libretro.so").is_file())
        record = json.loads((self.library.data / "emulator-installations/nes.json").read_text())
        self.assertTrue(record["configured"])
        self.assertEqual(record["integration"], "libretro")

    def test_standalone_appimage_is_verified_and_configured(self):
        self.game("switch", "game.nsp")
        url = assistant.DOWNLOADS["switch"]["linux-x86_64"]
        response = Download(appimage(), url)
        opener = SimpleNamespace(open=lambda *args, **kwargs: response)
        assistant.JOBS["switch"] = {}
        with self.machine(), patch.object(assistant.urllib.request, "build_opener", return_value=opener):
            assistant.install(self.library, "switch")
        target = self.library.mount / "cores/switch/Eden-Linux-de7e6e01d4-amd64-clang-pgo.AppImage"
        self.assertTrue(target.is_file())
        self.assertEqual(assistant.JOBS["switch"]["status"], "succeeded")
        record = json.loads((self.library.data / "emulator-installations/switch.json").read_text())
        self.assertEqual(record["file"], target.name)
        self.assertTrue(record["configured"])

    def test_dolphin_system_data_is_safely_integrated(self):
        archive = io.BytesIO()
        with zipfile.ZipFile(archive, "w") as output:
            output.writestr("dolphin-emu/Sys/ApprovedInis.json", "{}")
            output.writestr("dolphin-emu/Sys/GameSettings/RMCP01.ini", "[Core]")
        url = "https://buildbot.libretro.com/assets/system/Dolphin.zip"
        response = Download(archive.getvalue(), url)
        opener = SimpleNamespace(open=lambda *args, **kwargs: response)
        catalog = assistant.CATALOG_BY_CONSOLE["wii"]
        with patch.object(assistant.urllib.request, "build_opener", return_value=opener):
            records = assistant.install_assets(self.library, catalog, lambda **values: None)
        self.assertTrue((self.library.mount / "bios/dolphin-emu/Sys/ApprovedInis.json").is_file())
        self.assertTrue(assistant.assets_installed(self.library, catalog))
        self.assertEqual(records[0]["id"], "dolphin-system")

    def test_dolphin_system_data_rejects_archive_escape(self):
        archive = io.BytesIO()
        with zipfile.ZipFile(archive, "w") as output:
            output.writestr("dolphin-emu/../escape", "unsafe")
        response = Download(archive.getvalue(), "https://buildbot.libretro.com/assets/system/Dolphin.zip")
        opener = SimpleNamespace(open=lambda *args, **kwargs: response)
        with patch.object(assistant.urllib.request, "build_opener", return_value=opener):
            with self.assertRaises(assistant.EmulatorError):
                assistant.install_assets(self.library, assistant.CATALOG_BY_CONSOLE["wii"], lambda **values: None)
        self.assertFalse((self.library.mount / "escape").exists())

    def test_unapproved_redirect_is_rejected(self):
        handler = assistant.PackageRedirect()
        request = SimpleNamespace()
        with self.assertRaises(assistant.EmulatorError):
            handler.redirect_request(request, None, 302, "Found", {}, "https://127.0.0.1/emulator")


if __name__ == "__main__":
    unittest.main()
