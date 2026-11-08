package emuparams

import (
	"encoding/json"
	"io/fs"
	"path"
	"strings"
	"testing"
)

// LES TEXTES LIVRÉS PARLENT AUSSI FRANÇAIS (#641, le porteur, 2026-11-06) :
// chaque fiche, chacun de ses paramètres et chaque préréglage livré porte sa
// traduction, que la page prend pour sa langue. Un réglage ajouté sans elle
// s'afficherait en anglais au milieu d'une page en français.
func TestShippedTextsHaveFrench(t *testing.T) {
	for _, ref := range Shipped() {
		definition, _ := shippedDefinition(ref)
		where := ref.ConsoleID + "/" + ref.Emulator
		if definition.Translations["fr"].Description == "" {
			t.Errorf("%s : pas de description en français", where)
		}
		for _, id := range definition.Params.keys {
			p := definition.Params.values[id]
			fr, ok := p.Translations["fr"]
			if !ok || fr.Label == "" || (p.Description != "" && fr.Description == "") {
				t.Errorf("%s, %s : libellé ou description sans français", where, id)
			}
			if p.Options == nil {
				continue
			}
			for _, value := range p.Options.keys {
				if _, translated := fr.Options[value]; translated {
					continue
				}
				// Une option qui n'est qu'un nombre, une taille ou un nom propre
				// se lit pareil dans les deux langues.
				if label := p.Options.values[value]; strings.ContainsAny(label, "abcdefghijklmnopqrstuvwxyz") &&
					label != value && !untranslatable(label) {
					t.Errorf("%s, %s : l'option « %s » sans français", where, id, label)
				}
			}
		}
	}
	err := fs.WalkDir(shipped, "shipped", func(name string, entry fs.DirEntry, err error) error {
		if err != nil || entry.IsDir() || path.Base(path.Dir(name)) != "presets" {
			return err
		}
		content, err := shipped.ReadFile(name)
		if err != nil {
			return err
		}
		var p preset
		if err := json.Unmarshal(content, &p); err != nil {
			return err
		}
		if fr := p.Translations["fr"]; fr.Name == "" || (p.Description != "" && fr.Description == "") {
			t.Errorf("%s : nom ou description sans français", name)
		}

		return nil
	})
	if err != nil {
		t.Fatal(err)
	}
}

// untranslatable — un libellé qui se lit pareil dans les deux langues : un
// nom de format, de variable ou de méthode (FXAA, r.ScreenPercentage, Mega),
// une taille ou une durée (720p, 20 ms). Seul un mot ordinaire en minuscules,
// sans chiffre, de trois lettres au moins, demande une traduction.
func untranslatable(label string) bool {
	for _, word := range strings.Fields(label) {
		if len(word) >= 3 && strings.ToLower(word) == word && !strings.ContainsAny(word, ".×%0123456789") {
			return false
		}
	}

	return true
}

// CE QUE LA PAGE REÇOIT : les traductions arrivent jusqu'à l'API, pour une
// fiche installée dans la bibliothèque comme pour ses préréglages — une fiche
// posée par une version d'avant, sans elles, les reprend des textes livrés.
func TestDescribeCarriesTranslations(t *testing.T) {
	store := Store{Root: t.TempDir(), SeedOnFirstRun: true}
	if err := store.Ensure(); err != nil {
		t.Fatal(err)
	}
	ref := Ref{ConsoleID: "ps5", Emulator: "kyty"}
	// Une fiche installée sans traductions, comme celles d'avant le 2026-11-06.
	definition, _ := shippedDefinition(ref)
	definition.Translations = nil
	for _, id := range definition.Params.keys {
		p := definition.Params.values[id]
		p.Translations = nil
		definition.Params.values[id] = p
	}
	content, err := encode(definition, true)
	if err != nil {
		t.Fatal(err)
	}
	if err := store.writeFile(store.emulatorFile(ref), content); err != nil {
		t.Fatal(err)
	}

	item := store.Describe(ref, "PlayStation 5")
	if item.Translations["fr"].Description == "" {
		t.Fatal("la description de la fiche arrive sans français")
	}
	for _, p := range item.Params {
		if p.Translations["fr"].Label == "" {
			t.Errorf("%s arrive sans libellé français", p.ID)
		}
	}
	if len(item.Presets) == 0 {
		t.Fatal("aucun préréglage")
	}
	for _, p := range item.Presets {
		if p.Translations["fr"].Name == "" {
			t.Errorf("le préréglage %s arrive sans nom français", p.ID)
		}
	}
}
