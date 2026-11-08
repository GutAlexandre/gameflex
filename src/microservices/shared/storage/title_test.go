package storage

import (
	"encoding/binary"
	"os"
	"path/filepath"
	"testing"
)

// sfoWith — un PARAM.SFO qui ne contient que cette clé.
func sfoWith(key, value string) []byte {
	keys := append([]byte(key), 0)
	values := append([]byte(value), 0)
	data := make([]byte, 20+16)
	copy(data, "\x00PSF")
	binary.LittleEndian.PutUint32(data[8:], 36)
	binary.LittleEndian.PutUint32(data[12:], uint32(36+len(keys)))
	binary.LittleEndian.PutUint32(data[16:], 1)
	binary.LittleEndian.PutUint32(data[24:], uint32(len(values)))
	data = append(data, keys...)

	return append(data, values...)
}

func writeFile(t *testing.T, path string, content []byte) {
	t.Helper()
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(path, content, 0o644); err != nil {
		t.Fatal(err)
	}
}

func TestAGameIsKnownByItsTitleID(t *testing.T) {
	root := t.TempDir()

	ps5 := filepath.Join(root, "ps5")
	writeFile(t, filepath.Join(ps5, "sce_sys", "param.json"), []byte(`{"titleId":"PPSA35999"}`))
	if got := GameTitleID(ps5); got != "PPSA35999" {
		t.Fatalf("param.json : %q", got)
	}

	ps4 := filepath.Join(root, "ps4")
	writeFile(t, filepath.Join(ps4, "sce_sys", "param.sfo"), sfoWith("TITLE_ID", "CUSA07010"))
	if got := GameTitleID(ps4); got != "CUSA07010" {
		t.Fatalf("param.sfo : %q", got)
	}

	pkg := filepath.Join(root, "Sonic.pkg")
	header := make([]byte, 0x80)
	copy(header[0x40:], "UP0700-CUSA07010_00-SONICMANIA000000")
	writeFile(t, pkg, header)
	if got := GameTitleID(pkg); got != "CUSA07010" {
		t.Fatalf(".pkg : %q", got)
	}
}

// Il devient un nom de fichier : ce qui n'a pas sa forme ne passe pas, et ce
// qui ne se lit pas ne dit rien.
func TestATitleIDThatCannotBeTrustedIsIgnored(t *testing.T) {
	root := t.TempDir()

	bad := filepath.Join(root, "bad")
	writeFile(t, filepath.Join(bad, "sce_sys", "param.json"), []byte(`{"titleId":"../../etc"}`))
	if got := GameTitleID(bad); got != "" {
		t.Fatalf("identifiant hors forme : %q", got)
	}

	archive := filepath.Join(root, "FF7.zar")
	writeFile(t, archive, []byte("archive"))
	if got := GameTitleID(archive); got != "" {
		t.Fatalf(".zar : %q", got)
	}

	if got := GameTitleID(filepath.Join(root, "absent")); got != "" {
		t.Fatalf("absent : %q", got)
	}
}
