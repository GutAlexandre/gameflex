package storage

import (
	"encoding/json"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"gameflex/storage/installs"
)

// titleIDPattern — un identifiant de jeu : il devient un nom de fichier
// (`params/<console>/games/<identifiant>.json`).
var titleIDPattern = regexp.MustCompile(`^[A-Z]{4}[0-9]{5}$`)

// GameTitleID — L'IDENTIFIANT D'UN JEU (CUSA07010, PPSA35999), lu à ses
// fichiers : ses réglages s'y rattachent, le nom de son dossier changeant d'un
// joueur à l'autre. `path` : le dossier du jeu, son `.pkg`, ou le fichier qui le
// lance dans son dossier. "" quand il ne se lit pas — un `.zar` est compressé, et
// un jeu sans `sce_sys/` n'en dit rien : il garde les réglages communs.
func GameTitleID(path string) string {
	title := ""
	if info, err := os.Stat(path); err != nil {
		return ""
	} else if info.IsDir() {
		title = titleOfFolder(path)
	} else if strings.EqualFold(filepath.Ext(path), ".pkg") {
		title = titleOfPackage(path)
	} else {
		title = titleOfFolder(filepath.Dir(path))
	}
	if !titleIDPattern.MatchString(title) {
		return ""
	}

	return title
}

// titleOfFolder — `sce_sys/param.json` pour la PS5, `sce_sys/param.sfo` pour la
// PS4 et les jeux PS4 rangés déballés.
func titleOfFolder(dir string) string {
	if content, err := os.ReadFile(filepath.Join(dir, "sce_sys", "param.json")); err == nil {
		var param struct {
			TitleID string `json:"titleId"`
		}
		if json.Unmarshal(content, &param) == nil && param.TitleID != "" {
			return param.TitleID
		}
	}

	return installs.SFOString(filepath.Join(dir, "sce_sys", "param.sfo"), "TITLE_ID")
}

// titleOfPackage — l'identifiant de contenu d'un `.pkg` PS4 est à 0x40 de son
// en-tête : `UP0700-CUSA07010_00-…`.
func titleOfPackage(path string) string {
	file, err := os.Open(path)
	if err != nil {
		return ""
	}
	defer file.Close()
	content := make([]byte, 16)
	if _, err := io.ReadFull(io.NewSectionReader(file, 0x40, 16), content); err != nil {
		return ""
	}

	return string(content[7:16])
}
