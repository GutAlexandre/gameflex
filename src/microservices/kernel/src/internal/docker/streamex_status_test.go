package docker

import (
	"net"
	"net/http"
	"net/http/httptest"
	"strconv"
	"testing"
)

// « Emulation FPS » est la cadence de l'émulateur, jamais celle du flux : sans
// FPS dans le titre de la fenêtre, le champ reste vide et le panneau affiche un
// tiret (2026-09-11 : Citron à 17 FPS, panneau à 61).
func TestStatusStreamex_EmulationFPS(t *testing.T) {
	cases := []struct {
		name string
		body string
		want float64
	}{
		{"titre sans FPS (Eden)", `{"fps":{"captured":60.1,"encoded":60.1}}`, 0},
		{"titre avec FPS (RPCS3)", `{"fps":{"emulator_window":30.02,"encoded":60.1}}`, 30.02},
	}
	for _, c := range cases {
		t.Run(c.name, func(t *testing.T) {
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
				_, _ = w.Write([]byte(c.body))
			}))
			defer server.Close()
			host, portText, err := net.SplitHostPort(server.Listener.Addr().String())
			if err != nil {
				t.Fatal(err)
			}
			port, err := strconv.Atoi(portText)
			if err != nil {
				t.Fatal(err)
			}

			got, err := (&Client{}).StatusStreamex(host, port)
			if err != nil {
				t.Fatal(err)
			}
			if got.EmulationFPS != c.want {
				t.Fatalf("EmulationFPS = %v, attendu %v", got.EmulationFPS, c.want)
			}
		})
	}
}

// La lecture disque de l'émulateur passe au panneau ; un disque au repos dit
// 0, et un streamex qui ne la mesure pas laisse le champ vide (un tiret).
func TestStatusStreamex_DiskRead(t *testing.T) {
	cases := []struct {
		name string
		body string
		want *float64
	}{
		{"pas mesurée", `{"rates":{"ws_down_bytes_per_sec":0}}`, nil},
		{"au repos", `{"rates":{"emulator_disk_read_bytes_per_sec":0}}`, new(float64)},
		{"en lecture", `{"rates":{"emulator_disk_read_bytes_per_sec":2836888.5}}`, func() *float64 { v := 2836888.5; return &v }()},
	}
	for _, c := range cases {
		t.Run(c.name, func(t *testing.T) {
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
				_, _ = w.Write([]byte(c.body))
			}))
			defer server.Close()
			host, portText, err := net.SplitHostPort(server.Listener.Addr().String())
			if err != nil {
				t.Fatal(err)
			}
			port, err := strconv.Atoi(portText)
			if err != nil {
				t.Fatal(err)
			}

			got, err := (&Client{}).StatusStreamex(host, port)
			if err != nil {
				t.Fatal(err)
			}
			if (got.DiskReadBytesPerSec == nil) != (c.want == nil) ||
				(c.want != nil && *got.DiskReadBytesPerSec != *c.want) {
				t.Fatalf("DiskReadBytesPerSec = %v, attendu %v", got.DiskReadBytesPerSec, c.want)
			}
		})
	}
}

// « Résolution du jeu » et « Résolution de l'émulateur » : ce que l'émulateur
// dit, jamais le flux. La sortie du jeu et la scène réduite de Kyty ; sa sortie
// seule pour un jeu qui n'est pas Unreal ; rien quand le titre ne dit rien (le
// flux `encoded` ne s'y substitue pas).
func TestStatusStreamex_GameResolution(t *testing.T) {
	cases := []struct {
		name           string
		body           string
		game, emulator string
	}{
		{"Kyty, hauteur demandée", `{"resolution":{"encoded":"1280x720","emulator_render":"653x367","emulator_output":"3840x2160"}}`, "3840x2160", "653x367"},
		{"Kyty, sortie seule", `{"resolution":{"encoded":"1280x720","emulator_output":"1920x1080"}}`, "1920x1080", ""},
		{"titre muet (RPCS3)", `{"resolution":{"encoded":"1280x720","capture":"1280x720"}}`, "", ""},
	}
	for _, c := range cases {
		t.Run(c.name, func(t *testing.T) {
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
				_, _ = w.Write([]byte(c.body))
			}))
			defer server.Close()
			host, portText, err := net.SplitHostPort(server.Listener.Addr().String())
			if err != nil {
				t.Fatal(err)
			}
			port, err := strconv.Atoi(portText)
			if err != nil {
				t.Fatal(err)
			}

			got, err := (&Client{}).StatusStreamex(host, port)
			if err != nil {
				t.Fatal(err)
			}
			if got.GameResolution != c.game || got.EmulatorResolution != c.emulator {
				t.Fatalf("résolution = %q, %q ; attendu %q, %q", got.GameResolution, got.EmulatorResolution, c.game, c.emulator)
			}
		})
	}
}
