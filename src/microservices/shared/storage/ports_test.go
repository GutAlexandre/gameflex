package storage

import (
	"crypto/sha1"
	"encoding/hex"
	"os"
	"path/filepath"
	"testing"
	"time"

	"gameflex/consoles"
)

// UNE ROM EST À UN PORT PAR SA TAILLE PUIS SON SHA-1 : la bonne taille ne
// suffit pas, la console d'origine compte, et une ROM réécrite se relit.
func TestPortOfMatchesSizeThenSHA1(t *testing.T) {
	dir := t.TempDir()
	rom := []byte("a port's rom")
	sum := sha1.Sum(rom)
	port := consoles.Port{Core: "Test (streamex)", From: "n64", ROMs: []consoles.PortROM{
		{Size: int64(len(rom)), SHA1: hex.EncodeToString(sum[:])},
	}}
	previous := knownPorts
	knownPorts = func() []consoles.Port { return []consoles.Port{port} }
	t.Cleanup(func() { knownPorts = previous })

	good := filepath.Join(dir, "good.z64")
	sameSize := filepath.Join(dir, "same-size.z64")
	other := filepath.Join(dir, "other.z64")
	for path, content := range map[string][]byte{good: rom, sameSize: []byte("another rom!"), other: []byte("short")} {
		if err := os.WriteFile(path, content, 0o644); err != nil {
			t.Fatal(err)
		}
	}

	if found, ok := PortOf("n64", good); !ok || found.Core != port.Core {
		t.Errorf("la bonne ROM : %v, %v", found, ok)
	}
	if _, ok := PortOf("snes", good); ok {
		t.Error("la bonne ROM rangée chez une autre console a été acceptée")
	}
	if _, ok := PortOf("n64", sameSize); ok {
		t.Error("une ROM de la même taille mais d'un autre SHA-1 a été acceptée")
	}
	if _, ok := PortOf("n64", other); ok {
		t.Error("une ROM d'une autre taille a été acceptée")
	}
	if _, ok := PortOf("n64", dir); ok {
		t.Error("un dossier a été accepté")
	}

	// Réécrite (même taille, autre contenu, autre date) : relue.
	if err := os.WriteFile(good, []byte("another rom!"), 0o644); err != nil {
		t.Fatal(err)
	}
	later := time.Now().Add(time.Minute)
	if err := os.Chtimes(good, later, later); err != nil {
		t.Fatal(err)
	}
	if _, ok := PortOf("n64", good); ok {
		t.Error("une ROM réécrite a gardé le SHA-1 de l'ancienne")
	}
}
