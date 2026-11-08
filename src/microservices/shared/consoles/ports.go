package consoles

import "sort"

// LES PORTS PC (chantier 40, #609).
//
// Un port est un jeu recompilé pour le PC par sa communauté : il ne lit de la
// ROM du joueur que ses données. La console `ports` n'a donc pas de dossier à
// elle — le porteur, 2026-10-29 : ses jeux sont « trouvés dans roms/n64 ».
// Une ROM y est un jeu de `ports` quand un port l'accepte, et c'est cette
// table qui le dit : la console dont le port lit les ROM, et les ROM exactes
// qu'il connaît. Un port n'accepte qu'une version précise d'un jeu (Zelda 64:
// Recompiled refuse tout ce qui n'est pas Majora's Mask US 1.0).

// PortsID — l'identifiant de la console des ports.
const PortsID = "ports"

// PortROM — une ROM qu'un port accepte. La taille d'abord : un `stat` écarte
// presque tout sans rien lire ; le SHA-1 ensuite, sur le fichier tel qu'il est
// rangé.
type PortROM struct {
	Size int64
	SHA1 string
}

// Port — un port : son cœur dans la console `ports` (le nom du registre), la
// console dont il lit les ROM, et celles qu'il accepte.
type Port struct {
	Core string
	From string
	ROMs []PortROM
}

var ports = []Port{
	// Majora's Mask US 1.0, en ordre .z64 : la seule ROM que son
	// N64ModernRuntime range (recomp::select_rom).
	{Core: "Zelda 64: Recompiled (streamex)", From: "n64", ROMs: []PortROM{
		{Size: 33554432, SHA1: "d6133ace5afaa0882cf214cf88daba39e266c078"},
	}},
}

// Ports — les ports connus, dans l'ordre du registre.
func Ports() []Port {
	return append([]Port(nil), ports...)
}

// PortSources — les consoles dont des ports lisent les ROM, triées.
func PortSources() []string {
	seen := map[string]bool{}
	sources := []string{}
	for _, port := range ports {
		if !seen[port.From] {
			seen[port.From] = true
			sources = append(sources, port.From)
		}
	}
	sort.Strings(sources)

	return sources
}

// PortByCore — le port de ce cœur.
func PortByCore(core string) (Port, bool) {
	for _, port := range ports {
		if port.Core == core {
			return port, true
		}
	}

	return Port{}, false
}
