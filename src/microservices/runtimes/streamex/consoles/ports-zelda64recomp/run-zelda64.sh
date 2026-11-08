#!/bin/sh
# LANCER ZELDA 64: RECOMPILED SUR LA ROM DE LA PARTIE (chantier 40).
#
#   run-zelda64.sh <ROM>        (l'adaptateur passe le jeu en dernier)
#
# Le port ne prend pas de ROM sur sa ligne de commande : son menu la fait
# choisir dans un sélecteur de fichier, la vérifie, puis la range dans son
# dossier sous `mm.n64.us.1.0.z64` (N64ModernRuntime, recomp::select_rom). Ce
# qu'il range est la ROM elle-même, sans décompression — seulement remise dans
# l'ordre .z64. Un lien vers la ROM .z64 de la partie suffit donc, et le menu
# s'ouvre sur « Start Game ».
#
# Le lien vit dans le dossier du joueur, qui est le dossier du port : il pointe
# vers /opt/game, et n'a de sens que dans le conteneur. Les copies de
# sauvegardes (chantier 38) ne prennent que des dossiers connus, jamais lui.
set -eu

rom=${1:?usage: run-zelda64.sh <ROM>}
app=${APP_FOLDER_PATH:?set by the entrypoint}

# LA SEULE ROM QUE LE PORT CONNAÎT : Majora's Mask US 1.0. Une autre version
# ferait s'ouvrir son sélecteur de fichier, qu'on ne pilote pas d'ici : on le
# dit tout de suite, dans le journal de la partie.
expected=d6133ace5afaa0882cf214cf88daba39e266c078
actual=$(sha1sum "$rom" | cut -d' ' -f1)
if [ "$actual" != "$expected" ]; then
    echo "[zelda64] ERROR: $(basename "$rom") is not Majora's Mask US 1.0 (SHA-1 $actual, expected $expected)" >&2
    exit 1
fi
ln -sfn "$rom" "$app/mm.n64.us.1.0.z64"

# TOUJOURS EN PLEIN ÉCRAN : la capture découpe la fenêtre dans l'écran X, et
# une fenêtre de 1600×960 (sa taille par défaut) déborderait d'un écran de
# 1280×720. Le reste des réglages graphiques reste au joueur, dans le menu du
# port.
graphics="$app/graphics.json"
if [ -f "$graphics" ]; then
    sed -i 's/"wm_option": *"Windowed"/"wm_option": "Fullscreen"/' "$graphics"
else
    printf '{\n    "wm_option": "Fullscreen"\n}\n' > "$graphics"
fi

exec /opt/zelda64/Zelda64Recompiled
