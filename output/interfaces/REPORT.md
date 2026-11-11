# GameFlex — validation des 22 interfaces

- Base validée : `bc1c143` + garde UTF-8 `021dcf3`
- Sélecteur : **22 modes actifs exactement** (9 repris + 13 nouveaux)
- Prévisualisation LAN isolée : <http://192.168.1.63:18215/>
- Production : <http://192.168.1.63:2000/gameflex/> (HTTP 200, non modifiée)
- TV : navigateur 1920×1080 uniquement ; aucune Philips 50PUS7906/12 réelle accessible.

| # | Mode | Commit | PC 1440×900 | Mobile 390×844 | TV 1920×1080 | Captures | Écart résiduel |
|---:|---|---|---|---|---|---|---|
| 01 | Horizon | `9360bc7` | PASS | PASS | PASS | `01-horizon/` | Visuels de la bibliothèque locale |
| 02 | Signal CRT | `c24db7d` | PASS | PASS | PASS | `02-signal-crt/` | Aucun bloquant |
| 03 | La collection | `f99ff25` | PASS | PASS | PASS | `03-la-collection/` | Photos absentes repliées lisiblement |
| 04 | Orbitale | `ecfc330` | PASS | PASS | PASS | `04-orbitale/` | Rail étroit horizontal sur mobile |
| 05 | Borne Arcade | `e92af8b` | PASS | PASS | PASS | `05-borne-arcade/` | Aucun bloquant |
| 06 | Minimal | `844df54` | PASS | PASS | PASS | `06-minimal/` | Aucun bloquant |
| 07 | Jaquettes | `b49736a` | PASS | PASS | PASS | `07-jaquettes/` | Aucun bloquant |
| 08 | Consoles | `2e6a856` | PASS | PASS | PASS | `08-consoles/` | Photos locales selon disponibilité |
| 09 | Tableau de bord | `cb5c470` | PASS | PASS | PASS | `09-tableau-de-bord/` | Aucun bloquant |
| 10 | Hub Canapé | `c2f9360` | PASS | PASS | PASS | `10-hub-canape/` | Aucun bloquant |
| 11 | Ligne Cinéma | `3b4a101` | PASS | PASS | PASS | `11-ligne-cinema/` | Aucun bloquant |
| 12 | Mosaïque Joy | `3a5d8d5` | PASS | PASS | PASS | `12-mosaique-joy/` | Raccourcis mobiles scrollables |
| 13 | Roue Retro | `7dcbbf7` | PASS | PASS | PASS | `13-roue-retro/` | Roue mobile convertie en rail |
| 14 | Terminal de poche | `278c5c7` | PASS | PASS | PASS | `14-terminal-de-poche/` | Visuels locaux plus texturés que la maquette |
| 15 | Cartouches | `16c0099` | PASS | PASS | PASS | `15-cartouches/` | Tiroir mobile horizontal |
| 16 | Carte des époques | `4d945d0` | PASS | PASS | PASS | `16-carte-des-epoques/` | Frise mobile horizontale |
| 17 | Double écran | `dae4b75` | PASS | PASS | PASS | `17-double-ecran/` | Aucun bloquant |
| 18 | Club Local | `c2dd7be` | PASS | PASS | PASS | `18-club-local/` | Détection manettes indiquée indisponible ; aucune promesse réseau |
| 19 | Quai des systèmes | `1f32b89` | PASS | PASS | PASS | `19-quai-des-systemes/` | Dock mobile horizontal |
| 20 | Magazine rétro | `2b22c17` | PASS | PASS | PASS | `20-magazine-retro/` | Texte éditorial seulement si présent dans les données |
| 21 | Bureau du collectionneur | `6e66fa7` | PASS | PASS | PASS | `21-bureau-du-collectionneur/` | Filtres/détails séparés sur mobile |
| 22 | Grand écran accessible | `206e189` | PASS | PASS | PASS | `22-grand-ecran-accessible/` | Aucun bloquant |

## Contrôles automatisés

- `node tests/pi-tv/run-interface-tests.cjs` : PASS dans un worktree détaché propre.
- `npm --prefix src/webapp/src run build` : PASS ; trois avertissements webpack historiques de taille uniquement.
- Matrice navigateur de la prévisualisation LAN : PC **22/22**, mobile **22/22**, TV **22/22** rendus et sélectionnables.
- Compteur DOM du sélecteur LAN : **22** cartes ; capture `final-selector-1440x900.png`.
- Encodage preview : `Content-Type` HTML/JS avec `charset=utf-8`, cache désactivé ; quatre libellés accentués vérifiés dans le DOM sans mojibake.
- 22 choix exacts, aucune 23e carte active.
- 22 modes × 7 destinations historiques : PASS.
- Migration rejouable des six anciens identifiants, anciens liens et préférences : PASS.
- Bibliothèque vide, titre long, image absente, singulier/pluriel et chargement : PASS.
- Flèches, validation, ouverture fiche, chemin de lancement et restauration du focus : PASS.
- 22 : fort contraste, focus jaune et `prefers-reduced-motion` : PASS.
- 21 : jeu logique et éditions distingués par les identifiants existants : PASS.
- 18 : compatibilité locale connue/inconnue explicitée ; aucune fausse capacité réseau : PASS.

## Commits d'intégration

- 10–13 : `965d5c9`
- 14–17 : `1bda652`
- 18–22 et total exact de 22 : `bc1c143`
