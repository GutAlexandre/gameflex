package storage

import (
	"crypto/sha1"
	"encoding/hex"
	"io"
	"os"
	"sync"
	"time"

	"gameflex/consoles"
)

// QUEL PORT JOUE CETTE ROM ? (chantier 40)
//
// Les jeux de la console `ports` sont des ROM rangées chez d'autres consoles
// (`roms/n64`) : un port les reconnaît à leur taille, puis à leur SHA-1
// (consoles.Port). La taille se lit d'un `stat` et écarte presque tout ; le
// SHA-1 ne se calcule que pour les fichiers de la bonne taille, et se garde :
// le catalogue se reconstruit à chaque jeu déposé, et une ROM de 32 Mo ne se
// relit pas pour autant. Un fichier réécrit change de date ou de taille, et
// se relit.

type portHash struct {
	size    int64
	modTime time.Time
	sha1    string
}

var (
	portHashesMu sync.Mutex
	portHashes   = map[string]portHash{}
	// knownPorts — la table du registre ; un test y met la sienne.
	knownPorts = consoles.Ports
)

// PortOf — le port qui joue la ROM `path`, rangée chez la console `from`.
// Faux pour une ROM qu'aucun port n'accepte, ou illisible.
func PortOf(from, path string) (consoles.Port, bool) {
	info, err := os.Stat(path)
	if err != nil || !info.Mode().IsRegular() {
		return consoles.Port{}, false
	}

	candidates := []consoles.Port{}
	for _, port := range knownPorts() {
		if port.From != from {
			continue
		}
		for _, rom := range port.ROMs {
			if rom.Size == info.Size() {
				candidates = append(candidates, port)

				break
			}
		}
	}
	if len(candidates) == 0 {
		return consoles.Port{}, false
	}

	sum, ok := portSHA1(path, info)
	if !ok {
		return consoles.Port{}, false
	}
	for _, port := range candidates {
		for _, rom := range port.ROMs {
			if rom.Size == info.Size() && rom.SHA1 == sum {
				return port, true
			}
		}
	}

	return consoles.Port{}, false
}

// portSHA1 — le SHA-1 du fichier, gardé tant que sa taille et sa date ne
// bougent pas.
func portSHA1(path string, info os.FileInfo) (string, bool) {
	portHashesMu.Lock()
	known, ok := portHashes[path]
	portHashesMu.Unlock()
	if ok && known.size == info.Size() && known.modTime.Equal(info.ModTime()) {
		return known.sha1, true
	}

	file, err := os.Open(path)
	if err != nil {
		return "", false
	}
	defer file.Close()
	hash := sha1.New()
	if _, err := io.Copy(hash, file); err != nil {
		return "", false
	}
	sum := hex.EncodeToString(hash.Sum(nil))

	portHashesMu.Lock()
	portHashes[path] = portHash{size: info.Size(), modTime: info.ModTime(), sha1: sum}
	portHashesMu.Unlock()

	return sum, true
}
