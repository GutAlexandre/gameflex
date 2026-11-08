#!/usr/bin/env bash
# Construit KytyPS5 — l'étiquette que le serveur emploie (consoles/ps5/Dockerfile,
# KYTY_RELEASE) — avec les patchs de ce dossier, dans l'ordre de leur numéro :
# 0001, l'option CMake `KYTY_COMPACT_ADDRESS_SPACE`, qui range tout l'espace
# d'adresses du jeu sous 512 Gio pour qu'il tienne dans les 39 bits d'un
# téléphone (chantier 17, #367) ; 0002, l'extension Vulkan barycentrique rendue
# optionnelle, parce que Turnip ne l'a pas (#373) ; 0003, les modules chargés et
# le refus de la libc du jeu dits sur la console (#373) ; 0004, les choix GPU et
# la pile d'appels d'un planificateur utilisé trop tôt, sur la console (#373) ;
# 0005, un défaut « lecture » sur une page lisible traité en écriture (#373) ;
# 0006, le suivi GPU garde le droit d'exécution des pages (#373) ; 0007, les
# lectures formatées d'un tampon choisi par le GPU, de toute largeur (#431) ;
# 0008 à 0012, ce qui arrêtait ensuite Final Fantasy VII Rebirth (#431, README) ;
# 0013, le P010 d'un décodeur vidéo ouvert en 10 bits (FF7 Remake, #431).
# 0014, les constantes du découpeur GPU choisies par des branches (les tables
# de couleurs 3D de FF7 Remake, #431).
# 0015, `KYTY_OCCLUSION_QUERIES` dans l'environnement vaut `--occlusion-queries`
# (l'interrupteur de la fiche de Kyty, #445).
# 0016, `KYTY_SHADER_CACHE` vaut `--shader-cache`, et le cache porte la révision de
# Kyty (sous Box64, la date de /proc/self/exe est celle de Box64 — #487).
# 0017, le exit() d'un jeu sort par quick_exit : les fils du jeu tournent
# encore, et les destructeurs statiques faisaient planter Kyty (#522).
# 0018, seules les cibles que le dessin écrit sont vérifiées, et un dessin mesh
# de plus de 65 535 groupes part en plusieurs lancements (FF7 Rebirth, README).
# Pas de 0020 ni de 0022 : l'éditeur les a depuis 91c5820 (README.md).
# 0020, une faute sur une page écrite par le GPU rapatrie toute la plage modifiée
# autour d'elle : les pages voisines ne vident plus le GPU chacune (#610). Pas de
# 0019 : ce numéro est le patch de résolution, rangé dans le rapport du 2026-10-30.
# 0021, les copies sans PlayGo ni DLC : sans playgo-chunk.dat le jeu est installé,
# et les DLC déclarés dans son dlc_emu.ini sont enregistrés (FF XVI, #523).
# 0022, s_endpgm_ordered_ps_done termine un pixel shader : le décodeur ne lit plus
# les données d'après le programme comme du code (FF XVI, #523).
# 0026, la mémoire unique (KYTY_UNIFIED_MEMORY=1 et /dev/dma_heap/system) ; 0027, les
# compteurs d'occlusion écrits par le GPU en mémoire unique (journaux 405 à 411) ; 0028, la
# taille de rendu d'un jeu Unreal (KYTY_UE_SCREEN_PERCENTAGE, journaux 416 et 417) ; 0029,
# l'attente d'une commande du GPU hors de la pile du jeu (journal 418).
# 0030, un tampon d'affichage flottant encodé en sRGB pour l'écran (journal 421).
# 0031, une poussée bloquante d'AudioOut2 attend que la file ait de la place (journal 422).
# 0032, le cache de shaders reconnu à ses sources, plus à la date de l'exécutable (journal 423).
# 0033, un jeu Unreal ne se tue plus quand son ramasse-miettes dépasse 10 s (journal 427).
# 0034, une image de calcul en entiers signés 16 bits à quatre canaux, seulement écrite (le mode
# Performance (legacy) de Wukong) ; le cache de shaders reste valable (journal 428).
# 0035, la taille de rendu passe aussi par la configuration sauvegardée d'un jeu Unreal (journal 428).
# 0036, le titre de la fenêtre nomme Kyty : streamex y retrouve la fenêtre et la cadence (journal 429).
# 0037, une lecture de fichier vers le tas de Kyty n'est plus refusée (Kingdom Hearts III, journal 431).
# 0038, le cache de shaders se relit une fois le tas d'images créé (FF7 Rebirth, journal 431).
# 0039, le budget des textures compte la mémoire du jeu importée (journal 432).
# 0040, une hauteur de rendu au lieu d'un pourcentage ; elle atteint aussi les jeux qui gardent leur configuration dans leur dossier (journal 433).
# 0041, les commandes de projection de la lecture rapide projettent vraiment (FF XVI, journal 433).
# 0042, ce qu'un jeu déclare pour sa hauteur de rendu : sa base, sa variable (réglages par jeu, journal 434).
# 0043, la poussée d'AudioOut2 garde son rythme : le son de FF7 Remake ne coupe plus (journal 437).
# 0044, les réglages du moteur d'un jeu Unreal, par KYTY_UE_ENGINE_SETTINGS (journal 438).
# 0045, les shaders compilés à côté (KYTY_COMPILE_ASIDE) et le toast de compilation (journal 440).
# 0046, un GPU sans mesh shaders (Turnip) abandonne leurs dessins au lieu d'arrêter le jeu, et l'écran le dit (#628) ;
# KYTY_NO_MESH_SHADER prend ce chemin sur un GPU qui les a, pour le banc.
# 0047, sans mesh shaders, la table de couleurs d'un jeu Unreal reste dessinée, par un vertex shader intégré (#628).
# 0048, les images VP9 restent en NV12 8 bits, ce que l'éditeur annonce désormais au jeu : la vidéo de FF7 Remake n'est plus rose (#631).
# 0049, le titre de la fenêtre dit la scène demandée à un jeu Unreal et l'image qu'il sort (« render: 653x367, output: 3840x2160 ») : la ligne « Résolution du jeu » du panneau de performances.
# 0051, le fil de commandes ne demande plus au pilote où en est le GPU à chaque dessin (un ioctl : 9 % de ce fil dans KH3), seulement quand une opération en attente l'exige, une fois sur seize.
# 0053, un fil du jeu qui rend la main en boucle (scePthreadYield) dort 50 µs après 64 appels de suite : le fil de rendu d'Unreal ne garde plus un cœur entier (KYTY_YIELD_SPIN=0 rend le yield d'origine).
# 0054, la résolution de sortie de la console devient un réglage (KYTY_OUTPUT_RESOLUTION, 1080 par défaut, ou 2160) : annoncée à chaque jeu, et donnée aux jeux Unreal comme taille de leurs images (PS5.DefaultBackBufferWidth/Height) ; la hauteur de rendu compte depuis elle.
# 0055, un plafond de cadence qui suit le flux (KYTY_FRAME_RATE_CAP, auto par défaut : STREAMEX_FPS ou GAMEFLEX_STREAM_FPS) : un jeu plus rapide que le flux donnait ses images par paires, une sur deux jamais vue.
# 0056, un correctif de code au format GoldHEN donné par KYTY_GAME_PATCH (le JSON sur une ligne), comme --game-patch : les correctifs de jeu de GameFlex le remplissent (Astro Bot sort en 1080p).
# 0057, le guetteur : après 10 s sans nouvelle image, la console dit ce que chaque fil attend (jeu, présentation, GPU) et d'où, dans le code du jeu, puis ce que chaque fil a fait (processeur, appels des bibliothèques de la console, l'appel où il reste coincé, l'endroit où tourne un fil qui n'appelle rien) ; KYTY_WATCHDOG=0 le coupe.
# 0058, l'avis de compilation devient une roue en haut à gauche, le nombre de shaders au centre ; l'avis et celui des mesh shaders sont passifs : ils passent sur les images du jeu au lieu d'en faire présenter une à chaque vblank libre.
#
#   tools/kyty/build.sh [--server] [dossier de sortie]     (défaut : ./kyty-out)
#
# --server : la construction du serveur (cores/ps5/) — l'éditeur et les patchs
# 0007 et suivants, sans KYTY_COMPACT_ADDRESS_SPACE, dans /src-server. Avec les
# treize et l'espace compact, Kyty s'arrête sur la libc de FF7 Rebirth : les
# jeux Unreal PS5 réservent 512 Gio, plus que l'espace compact (README, #524).
# Sans option, le téléphone : les patchs du serveur, puis 0001 à 0006 rebasés
# par-dessus (depuis 2026-11-05, les deux suivent la même pile).
#
# Même principe que tools/shadps4/build.sh : un conteneur Debian trixie gardé
# entre deux lancements, clang + lld comme la CI de Kyty, ses dépendances en
# submodules superficiels, pas de lanceur Qt (le serveur n'emploie que
# `kyty_emulator --game`). Le résultat est un x86_64 lié dynamiquement à trixie.
set -euo pipefail

HERE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$HERE/../.." && pwd)
SERVER=0
if [ "${1:-}" = --server ]; then SERVER=1; shift; fi
OUT=${1:-$PWD/kyty-out}
CONTAINER=${KYTY_BUILD_CONTAINER:-gameflex-kyty-build}
# Le serveur prend 0007 et suivants ; le téléphone les mêmes, puis 0001 à 0006, rebasés par-dessus.
SERVER_PATCHES=() PHONE_PATCHES=()
for patch in "$HERE"/[0-9][0-9][0-9][0-9]-*.patch; do
    number=$(basename "$patch"); number=${number%%-*}
    if [ $((10#$number)) -ge 7 ]; then SERVER_PATCHES+=("$patch"); else PHONE_PATCHES+=("$patch"); fi
done
SRC=/src COMPACT=ON
PATCHES=("${SERVER_PATCHES[@]}" "${PHONE_PATCHES[@]}")
if [ "$SERVER" = 1 ]; then
    SRC=/src-server COMPACT=OFF
    PATCHES=("${SERVER_PATCHES[@]}")
fi
TAG=$(sed -n 's/^ARG KYTY_RELEASE=//p' "$ROOT/src/microservices/runtimes/streamex/consoles/ps5/Dockerfile")
JOBS=${JOBS:-$(( $(nproc) > 4 ? $(nproc) - 4 : 2 ))}

[ -n "$TAG" ] || { echo "✗ KYTY_RELEASE introuvable dans le Dockerfile de la PS5" >&2; exit 1; }
mkdir -p "$OUT"

if ! docker ps -a --format '{{.Names}}' | grep -qx "$CONTAINER"; then
    docker run -d --name "$CONTAINER" debian:trixie sleep infinity > /dev/null
fi
docker start "$CONTAINER" > /dev/null
docker exec "$CONTAINER" sh -c 'rm -rf /tmp/gameflex-patches && mkdir -p /tmp/gameflex-patches'
# Un rang devant le nom : le conteneur les applique dans l'ordre alphabétique.
rank=100
for patch in "${PATCHES[@]}"; do
    rank=$((rank + 1))
    docker cp "$patch" "$CONTAINER:/tmp/gameflex-patches/$rank-$(basename "$patch")"
done

echo "KytyPS5 $TAG + $(basename -a "${PATCHES[@]}" | tr '\n' ' '), $JOBS tâches, dans $CONTAINER"
# -i : le script passe par l'entrée standard.
docker exec -i -e TAG="$TAG" -e JOBS="$JOBS" -e SRC="$SRC" -e COMPACT="$COMPACT" "$CONTAINER" bash -s <<'EOF'
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive

if ! command -v clang > /dev/null; then
    apt-get update -qq
    apt-get install -y -qq --no-install-recommends build-essential clang lld git ca-certificates \
        cmake ninja-build pkg-config glslang-tools libasound2-dev libdbus-1-dev libgl1-mesa-dev \
        libpulse-dev libudev-dev libwayland-dev wayland-protocols libx11-dev libxcursor-dev \
        libxext-dev libxfixes-dev libxi-dev libxkbcommon-dev libxrandr-dev libxss-dev libxtst-dev \
        libvulkan-dev > /tmp/apt.log 2>&1 || { tail -5 /tmp/apt.log; exit 1; }
fi

# Un arbre d'une autre version se reclone : le clone est superficiel, il n'a pas de quoi
# changer d'étiquette (et ses sous-modules non plus).
if [ -d "$SRC/.git" ] && [ "$(cat "$SRC/.gameflex-tag" 2>/dev/null)" != "$TAG" ]; then
    echo "→ $SRC n'est pas à $TAG : nouveau clone"
    rm -rf "$SRC"
fi
if [ ! -d "$SRC/.git" ]; then
    git clone -q --depth 1 --branch "$TAG" --recurse-submodules --shallow-submodules \
        https://github.com/KytyPS5/KytyPS5.git "$SRC"
    echo "$TAG" > "$SRC/.gameflex-tag"
fi

cd "$SRC"
git checkout -q -- src CMakeLists.txt
# Les fichiers qu'un patch crée partent aussi, ou il ne
# s'appliquerait plus à la construction suivante.
git clean -fdq -- src
# Une nouvelle version de l'amont peut déplacer le contexte d'un patch : on tente
# alors la fusion à trois voies, et on le dit — ou on s'arrête, en le disant.
for patch in /tmp/gameflex-patches/*.patch; do
    if ! git apply "$patch" 2> /tmp/apply.err; then
        if git apply --3way "$patch" 2>> /tmp/apply.err; then
            echo "⚠ $(basename "$patch") appliqué par fusion à trois voies sur $TAG : relire (docker exec <conteneur> git -C $SRC diff)" >&2
        else
            echo "✗ $(basename "$patch") ne s'applique plus sur $TAG — à rebaser (README.md) :" >&2
            cat /tmp/apply.err >&2
            exit 1
        fi
    fi
done
mkdir -p build
cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ \
    -DKYTY_BUILD_LAUNCHER=OFF -DKYTY_COMPACT_ADDRESS_SPACE="$COMPACT" \
    > build/configure.log 2>&1 || { tail -20 build/configure.log; exit 1; }
cmake --build build --parallel "$JOBS" --target kyty_emulator
found=$(find build -maxdepth 3 -type f -name kyty_emulator | head -1)
[ -n "$found" ] || { echo "✗ kyty_emulator introuvable dans build/" >&2; exit 1; }
cp "$found" /tmp/kyty_emulator
EOF

docker cp "$CONTAINER:/tmp/kyty_emulator" "$OUT/kyty_emulator"
echo "→ $OUT/kyty_emulator ($(du -h "$OUT/kyty_emulator" | cut -f1) — KytyPS5 $TAG, KYTY_COMPACT_ADDRESS_SPACE=$COMPACT, ${#PATCHES[@]} patchs)"
