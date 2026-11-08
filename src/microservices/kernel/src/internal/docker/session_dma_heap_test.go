package docker

import (
	"os"
	"path/filepath"
	"testing"
)

// LE TAS DE MÉMOIRE DE LA MÉMOIRE UNIQUE (chantier 41) : donné quand la
// machine l'a, et jamais sinon — un périphérique absent de l'hôte empêcherait
// le conteneur de démarrer.
func TestSessionDmaHeapDevicesOnlyWhenTheHostHasIt(t *testing.T) {
	sys := t.TempDir()
	if devices := sessionDmaHeapDevices(sys); len(devices) != 0 {
		t.Fatalf("sans tas, aucun périphérique attendu : %v", devices)
	}
	if err := os.MkdirAll(filepath.Join(sys, "class", "dma_heap", "system"), 0o755); err != nil {
		t.Fatal(err)
	}
	devices := sessionDmaHeapDevices(sys)
	if len(devices) != 1 || devices[0].PathOnHost != "/dev/dma_heap/system" ||
		devices[0].PathInContainer != "/dev/dma_heap/system" {
		t.Fatalf("le tas system attendu, reçu %v", devices)
	}
}
