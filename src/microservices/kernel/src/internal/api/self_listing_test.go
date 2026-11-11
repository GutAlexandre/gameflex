package api

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/go-chi/chi/v5"

	"gameflex/kernel/internal/retro_files"
	"gameflex/storage"
	"gameflex/storage/listing"
)

// listingServer — un serveur sur une bibliothèque de test, avec son propre
// cache de listings et ses propres paramètres.
func listingServer(t *testing.T, files ...string) (*Server, string) {
	t.Helper()
	freshListing(t)
	previous := paramsRoot
	paramsRoot = t.TempDir()
	t.Cleanup(func() { paramsRoot = previous })

	root := t.TempDir()
	for _, file := range files {
		target := filepath.Join(root, filepath.FromSlash(file))
		if err := os.MkdirAll(filepath.Dir(target), 0o755); err != nil {
			t.Fatal(err)
		}
		if err := os.WriteFile(target, []byte("x"), 0o644); err != nil {
			t.Fatal(err)
		}
	}

	return &Server{storageRoot: root}, root
}

func listedRoms(t *testing.T, server *Server, consoleID string) []map[string]any {
	t.Helper()
	router := chi.NewRouter()
	router.Get("/{consoleId}/roms", server.handleRetroRoms)
	recorder := httptest.NewRecorder()
	router.ServeHTTP(recorder, httptest.NewRequest(http.MethodGet, "/"+consoleID+"/roms", nil))
	var answer struct {
		Data []map[string]any `json:"data"`
	}
	if err := json.Unmarshal(recorder.Body.Bytes(), &answer); err != nil || recorder.Code != http.StatusOK {
		t.Fatalf("liste = %d %s", recorder.Code, recorder.Body.String())
	}

	return answer.Data
}

func listedCores(t *testing.T, server *Server, consoleID string) []retro_files.CoreEntry {
	t.Helper()
	router := chi.NewRouter()
	router.Get("/{consoleId}/cores", server.handleRetroCores)
	recorder := httptest.NewRecorder()
	router.ServeHTTP(recorder, httptest.NewRequest(http.MethodGet, "/"+consoleID+"/cores", nil))
	var answer struct {
		Data []retro_files.CoreEntry `json:"data"`
	}
	if err := json.Unmarshal(recorder.Body.Bytes(), &answer); err != nil || recorder.Code != http.StatusOK {
		t.Fatalf("cœurs = %d %s", recorder.Code, recorder.Body.String())
	}

	return answer.Data
}

// L'assistant d'expérience écrit dans la bibliothèque partagée, pas par une
// route d'administration du kernel. La fiche doit donc voir le cœur tout de
// suite, même si le listing fédéré avait été construit avant l'installation.
func TestCoreRouteSeesAssistantInstallWithoutAdminRescan(t *testing.T) {
	server, root := listingServer(t)
	server.ensureSelf()
	for _, core := range listedCores(t, server, "wii") {
		if core.Name == "dolphin" && core.Installed {
			t.Fatal("Dolphin ne doit pas être présent avant le dépôt de test")
		}
	}
	target := filepath.Join(root, "cores", "wii", "dolphin_libretro.so")
	if err := os.MkdirAll(filepath.Dir(target), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(target, []byte("core"), 0o644); err != nil {
		t.Fatal(err)
	}
	for _, core := range listedCores(t, server, "wii") {
		if core.Name == "dolphin" && core.Installed {
			return
		}
	}
	t.Fatal("Dolphin déposé par l'assistant reste absent de la route de lancement")
}

// LES ÉCRANS D'ICI LISENT LE LISTING DE CE SERVEUR (chantier 15) : construit à
// la première lecture, avec l'UUID de chaque jeu ; un fichier déposé à la main
// n'y entre qu'au parcours — l'icône, qui ne refait que sa section.
func TestTheServerListsItsOwnListing(t *testing.T) {
	server, root := listingServer(t, "roms/nes/Metroid.nes", "cores/nes/fceumm_libretro.so")

	roms := listedRoms(t, server, "nes")
	if len(roms) != 1 || roms[0]["reference"] != storage.RomID("nes", "Metroid.nes") || roms[0]["title"] != "Metroid" {
		t.Fatalf("jeux = %+v", roms)
	}
	header, err := listing.LoadHeader(listingCacheDir, listing.SelfKey)
	if err != nil || header.Source != listing.SelfSource || header.Machine == nil || header.Sections[listing.Cores].Consoles["nes"] != 1 {
		t.Fatalf("en-tête = %+v (%v)", header, err)
	}

	if err := os.WriteFile(filepath.Join(root, "roms", "nes", "Zelda.nes"), []byte("x"), 0o644); err != nil {
		t.Fatal(err)
	}
	if roms := listedRoms(t, server, "nes"); len(roms) != 1 {
		t.Fatalf("un fichier déposé à la main est entré sans parcours : %+v", roms)
	}

	rescan := httptest.NewRecorder()
	server.handleSelfRescan(rescan, httptest.NewRequest(http.MethodPost, "/listing/rescan?section=roms", nil))
	if rescan.Code != http.StatusOK {
		t.Fatalf("parcours = %d %s", rescan.Code, rescan.Body.String())
	}
	if roms := listedRoms(t, server, "nes"); len(roms) != 2 {
		t.Fatalf("après le parcours : %+v", roms)
	}
	refused := httptest.NewRecorder()
	server.handleSelfRescan(refused, httptest.NewRequest(http.MethodPost, "/listing/rescan?section=jeux", nil))
	if refused.Code != http.StatusBadRequest {
		t.Fatalf("section inconnue = %d", refused.Code)
	}
}

// CE QUE GAMEFLEX ÉCRIT, LE LISTING LE SUIT : une route qui réussit refait sa
// section avant de répondre ; une route qui échoue n'y touche pas.
func TestTheListingFollowsWhatGameFlexWrites(t *testing.T) {
	server, root := listingServer(t, "roms/nes/Metroid.nes")
	server.ensureSelf()

	write := func(status int) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			_ = os.WriteFile(filepath.Join(root, "roms", "nes", "Zelda.nes"), []byte("x"), 0o644)
			w.WriteHeader(status)
		}
	}
	server.refreshing(sectionNamed(listing.Roms), write(http.StatusConflict))(httptest.NewRecorder(), httptest.NewRequest(http.MethodPost, "/", nil))
	if roms := listedRoms(t, server, "nes"); len(roms) != 1 {
		t.Fatalf("un échec a refait la section : %+v", roms)
	}
	server.refreshing(sectionNamed(listing.Roms), write(http.StatusOK))(httptest.NewRecorder(), httptest.NewRequest(http.MethodPost, "/", nil))
	if roms := listedRoms(t, server, "nes"); len(roms) != 2 {
		t.Fatalf("une réussite n'a pas refait la section : %+v", roms)
	}

	// Les paramètres enregistrés : la section des paramètres suit.
	router := chi.NewRouter()
	router.Put("/storage/params/{consoleId}/{emulator}", server.refreshing(sectionNamed(listing.Params), server.handleStorageParamsWrite))
	recorder := httptest.NewRecorder()
	router.ServeHTTP(recorder, httptest.NewRequest(http.MethodPut, "/storage/params/ps3/rpcs3",
		strings.NewReader(`{"values":{"spuBlockSize":"Giga"},"preset":"Mon réglage"}`)))
	if recorder.Code != http.StatusOK {
		t.Fatalf("enregistrer = %d %s", recorder.Code, recorder.Body.String())
	}
	params, err := listing.LoadSection(listingCacheDir, listing.SelfKey, "ps3", listing.Params)
	if err != nil || len(params) != 1 || params[0].Name != "rpcs3" || !params[0].Values ||
		len(params[0].Presets) != 1 || params[0].Presets[0].ID != "mon-reglage" {
		t.Fatalf("paramètres listés = %+v (%v)", params, err)
	}
}
