package sessionstatus

import "testing"

// Cemu, Kyty, xemu et shadPS4 : titres relevés le 2026-09-11 (Eden le 2026-10-22) sur de
// vraies sessions. RPCS3 : son format de titre, « FPS: %F | %R | %V | %T [%t] ».
func TestTitleFPS(t *testing.T) {
	cases := []struct {
		emulator string
		title    string
		want     float64
		ok       bool
	}{
		{"RPCS3", "FPS: 30.02 | Vulkan | 0.0.37 | Final Fantasy XIII [BLES00783]", 30.02, true},
		{"Cemu", "Cemu 2.6 - FPS: 60.10 [Vulkan] [Generic] [TitleId: 00050000-10101e00] New SUPER MARIO BROS. U [EU v0]", 60.10, true},
		{"Kyty", "[Official build KytyPS5-2026-09-10-3da05ef | Release] Richman 11, PPSA16960, 01.000.000 [AMD Radeon Graphics (RADV PHOENIX)] [AMD Ryzen 7 255], frame: 2336, fps: 40", 40, true},
		{"Kyty, notre construction", "[KytyPS5 source build 5eab0ec-dirty | Release] Richman 11, PPSA16960, 01.000.000 [AMD Radeon Graphics (RADV PHOENIX)] [AMD Ryzen 7 255], frame: 2336, fps: 40", 40, true},
		{"Kyty, avant la première image", "[Official build KytyPS5-2026-09-10-3da05ef | Release] Richman 11, frame: 0, fps: 0", 0, false},
		{"Eden", "Eden Nightly | de7e6e01d4-master | Clang 23.1.3 | Hogwarts Legacy (64-bit) | 1.0.0 | RADV", 0, false},
		{"Eden du téléphone (tools/eden 0003)", "Eden Nightly | de7e6e01d4-master | Clang 23.1.3 | Hogwarts Legacy (64-bit) | 1.0.0 | Turnip | FPS: 24.6 | Speed: 82% | Frame: 40.7 ms", 24.6, true},
		{"xemu", "xemu | v0.8.136", 0, false},
		{"shadPS4", "shadPS4 v0.18.0 | CUSA07010 - Sonic Mania <01.00>", 0, false},
	}
	for _, c := range cases {
		got, ok := TitleFPS(c.title)
		if ok != c.ok || got != c.want {
			t.Errorf("%s : TitleFPS(%q) = %v, %v ; attendu %v, %v", c.emulator, c.title, got, ok, c.want, c.ok)
		}
	}
}

// Kyty écrit sa scène et sa sortie depuis tools/kyty 0049 ; les autres titres
// n'en portent pas, et rien ne s'invente.
func TestTitleResolution(t *testing.T) {
	cases := []struct {
		emulator       string
		title          string
		render, output string
	}{
		{"Kyty, hauteur demandée", "[KytyPS5 source build 5eab0ec | Release] Kingdom Hearts III, PPSA35999, 01.000.000 [Turnip Adreno (TM) 830] [], frame: 2336, fps: 8, render: 653x367, output: 3840x2160", "653x367", "3840x2160"},
		{"Kyty, sans hauteur", "[KytyPS5 source build 5eab0ec | Release] Richman 11, frame: 2336, fps: 40, output: 1920x1080", "", "1920x1080"},
		{"Kyty, avant 0049", "[Official build KytyPS5-2026-09-10-3da05ef | Release] Richman 11, PPSA16960, 01.000.000 [AMD Radeon Graphics (RADV PHOENIX)] [AMD Ryzen 7 255], frame: 2336, fps: 40", "", ""},
		{"une taille qui n'en est pas une", "x, render: 0x360, output: abc", "", ""},
		{"RPCS3", "FPS: 30.02 | Vulkan | 0.0.37 | Final Fantasy XIII [BLES00783]", "", ""},
		{"shadPS4", "shadPS4 v0.18.0 | CUSA07010 - Sonic Mania <01.00>", "", ""},
	}
	for _, c := range cases {
		render, output := TitleResolution(c.title)
		if render != c.render || output != c.output {
			t.Errorf("%s : TitleResolution(%q) = %q, %q ; attendu %q, %q", c.emulator, c.title, render, output, c.render, c.output)
		}
	}
}
