# syntax=docker/dockerfile:1
# ════════════════════════════════════════════════════════════════
#  streamex-switch2: Eglantine (Nintendo Switch 2, an Eden fork)
#                    streamed over WebRTC by streamex
#
#  Stage 1: build streamex (generic WebRTC server in Go,
#           pion + cgo openh264/opus/pulse).
#  Stage 2: minimal runtime (weston + xwayland + pulseaudio + eglantine).
# ════════════════════════════════════════════════════════════════

# Squelette pré-compilé (streamex/sessreg/sdiag-guid).
# Le squelette : streamex-bin en développement, l'image versionnée pour une
# installation publique (--build-arg STREAMEX_BIN=<espace>/streamex-bin:<version>).
ARG STREAMEX_BIN=streamex-bin
FROM ${STREAMEX_BIN} AS skeleton

# ────────────────────────── Runtime ──────────────────────────
# Trixie (Debian 13): recent Mesa, needed for Xwayland glamor/DRI3
# and RDNA3 (Radeon 780M) support for Eglantine's Vulkan presentation.
FROM debian:trixie-slim

# GARDÉE À L'ABRI DE `docker system prune -a`.
#
# Une image de session n'a pas de conteneur permanent : entre deux parties,
# rien ne la référence, et un élagage la considère donc comme inutilisée. Elle
# part, et la partie suivante répond « l'image de cette console est en cours de
# reconstruction » — le kernel la rebâtit tout seul, mais il y en a pour
# plusieurs minutes, à chaque fois (vécu le 2026-09-07, et déjà le 2026-08-17).
#
# Cette étiquette est ce qu'un élagage peut filtrer :
#
#     docker system prune -a --filter "label!=gameflex.prune=keep"
#
# Voir `tools/prune.sh`, qui l'écrit pour ne pas avoir à s'en souvenir.
LABEL gameflex.prune=keep


ENV DEBIAN_FRONTEND=noninteractive

# Eglantine (#644, 2026-11-06), l'émulateur de la Nintendo Switch 2 : un fork
# d'Eden (GPL-3.0), qui en garde les dossiers (~/.config/eden, ~/.local/share/eden)
# et la ligne de commande (-f -g <jeu>). Sa construction quotidienne du
# 2026-11-05 (daily-20261105), en AppImage : l'archive tar.gz du même jour est
# liée aux bibliothèques d'Ubuntu 24.04 (FFmpeg 6), que trixie n'a pas.
# L'éditeur publie un nom SANS version (eglantine-linux-x86_64-pgo.AppImage) :
# celui rangé dans cores/switch2/ la porte, comme pour Xenia.
# Même valeur que emulator_file switch2 (consoles/emulators.sh) : ce build le
# PREND là, et nulle part ailleurs (#145).
ARG EGLANTINE_FILE=Eglantine-daily-20261105-x86_64-pgo.AppImage

# MESA VIENT DE trixie-backports (26.1.2), comme pour la PS3.
#
# Le RADV 25.0.7 de trixie a fait planter RPCS3 au passage en combat de Final
# Fantasy XIII (segfault DANS libvulkan_radeon.so, 2026-09-11 — le détail est
# dans consoles/ps3/Dockerfile). Toutes les consoles streamex tournent sur le
# même APU et le même pilote : elles s'alignent, plutôt que d'attendre leur
# propre crash. Simulé image par image avant l'écriture : aucun paquet issu de
# Mesa ne reste en 25.0.7.
#
# MESA D'ABORD, le reste ensuite — Weston et Xwayland tirent Mesa en
# dépendance, et dans l'ordre inverse apt poserait la 25.0.7 pour la remplacer
# aussitôt. libglx-mesa0 fait partie du lot : libgl1/libglx0 le tirent, et
# venu de trixie il réclamerait une autre version exacte de libgallium.
RUN echo "deb http://deb.debian.org/debian trixie-backports main" \
        > /etc/apt/sources.list.d/backports.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends -t trixie-backports \
        libgl1-mesa-dri mesa-vulkan-drivers libegl-mesa0 libgbm1 libglx-mesa0 mesa-va-drivers \
    && apt-get install -y --no-install-recommends \
        openbox pulseaudio pulseaudio-utils dbus dbus-x11 \
        weston xwayland \
        fontconfig fonts-dejavu-core \
        # System Mesa: glamor/DRI3 for Xwayland + Vulkan/GL fallback
        x11-xserver-utils xauth xdotool procps imagemagick \
        # streamex runtime: VA-API (encodage GPU) + openh264 (repli) + opus + pulse
        libpulse0 libopenh264-8 libopus0 libva2 libva-drm2 libxcb-cursor0 libc++1 libc++abi1 \
        # Les deux bibliothèques qu'Eglantine attend du système, et que son
        # AppImage n'emporte pas (ldd, 2026-11-06) : sans elles, il ne
        # démarre même pas (« libusb-1.0.so.0: cannot open shared object file »).
        libusb-1.0-0 libopengl0 \
        # Bus d'accessibilité : streamex y lit la barre d'état d'Eglantine (FPS)
        at-spi2-core \
        ca-certificates curl \
    && rm -rf /var/lib/apt/lists/*

# The "pulse" system user is required by PulseAudio in --system mode
RUN id pulse >/dev/null 2>&1 || useradd -r -d /var/run/pulse -s /usr/sbin/nologin pulse
# In system mode, module-native-protocol-unix only accepts the pulse-access group
RUN groupadd -f pulse-access && usermod -aG pulse-access root && usermod -aG pulse-access pulse

# ── Eglantine : l'AppImage officielle, DÉBALLÉE AU LANCEMENT ──
# L'image ne la porte pas : on ne redistribue pas un émulateur (#145), et
# c'est ce qui permet de publier l'image (chantier 29). Elle dit comment
# reconnaître ses versions — un motif de nom —, et laquelle a été testée avec
# elle : celle de consoles/emulators.sh, que l'écran Émulateurs propose de
# télécharger quand le dossier n'en a aucune. Le kernel monte `cores/` à
# l'exécution, et l'entrypoint déballe la DERNIÈRE DÉPOSÉE dans /opt/eglantine
# (voir consoles/unpack-emulator.sh). Son fichier se range sous cores/switch2/.
ARG EGLANTINE_URL=https://github.com/Djihads80/Eglantine/releases/download/daily-20261105/eglantine-linux-x86_64-pgo.AppImage
# Les versions éprouvées avec cette image (emulator_tested) : la liste informe,
# elle ne bloque pas — toute version que reconnaît le motif se lance.
#
# LA VERSION D'ESSAI D'UNE BRANCHE AUSSI (2026-11-06). Eglantine publie, à côté de
# ses constructions quotidiennes, celles de ses branches de correction, sans
# profil PGO (eglantine-linux-x86_64.AppImage). Celle de `fix/oot-blackscreen`
# (743d5bb) est la seule qui affiche *Zelda Ocarina of Time* sur la puce AMD du
# serveur : avec la quotidienne du 5, l'image est noire en 540p, le son et les
# sous-titres passent (« SPIR-V Instruction is not implemented » à la
# cinématique ; banc du 2026-11-06). Le motif couvre donc les deux formes de nom,
# et la plus récente déposée gagne. Son adresse n'est pas celle d'emulators.sh :
# une branche la remplace à chaque poussée.
ARG EGLANTINE_TESTED="${EGLANTINE_FILE} Eglantine-branch-fix-oot-743d5bb-x86_64.AppImage"
ENV GAMEFLEX_EMULATOR_FILE=${EGLANTINE_FILE} GAMEFLEX_EMULATOR_DIR=/gameflex/cores/switch2 \
    GAMEFLEX_EMULATOR_PATTERN="Eglantine-*.AppImage" GAMEFLEX_EMULATOR_NAME="Eglantine nightly" \
    GAMEFLEX_EMULATOR_TESTED="${EGLANTINE_TESTED}"
LABEL gameflex.emulator.file=${EGLANTINE_FILE} gameflex.emulator.url=${EGLANTINE_URL} \
    gameflex.emulator.pattern="Eglantine-*.AppImage" \
    gameflex.emulator.tested="${EGLANTINE_TESTED}"
COPY src/microservices/runtimes/streamex/consoles/unpack-emulator.sh /usr/local/bin/unpack-emulator

COPY --from=skeleton /streamex /usr/local/bin/streamex
# FFmpeg, que streamex charge — en bibliothèques partagées, sa licence (la
# LGPL) le veut ainsi — et sa source (voir streamex/src/Dockerfile).
COPY --from=skeleton /ffmpeg/lib/ /usr/local/lib/
COPY --from=skeleton /ffmpeg/*.tar.xz /usr/share/doc/gameflex/sources/
RUN ldconfig
COPY src/microservices/runtimes/streamex/consoles/switch2/entrypoint.sh /entrypoint.sh
COPY src/microservices/runtimes/streamex/consoles/switch2/qt-config.ini /opt/eden-config/qt-config.ini
COPY src/microservices/runtimes/streamex/consoles/switch2/system.pa /opt/pulse/system.pa
# L'adaptateur lance usr/bin/eglantine, PAS AppRun. Dans cette AppImage, AppRun
# n'est qu'un lien vers ce binaire : lancé par lui, le processus s'appelle
# « AppRun », et l'arrêt (`pkill -x eglantine`) ne le trouvait pas (vérifié le
# 2026-11-06). Le binaire trouve seul ses bibliothèques (RUNPATH $ORIGIN/../lib)
# et ses modules Qt (usr/bin/qt.conf).
COPY src/microservices/runtimes/streamex/consoles/switch2/adapter.json /opt/adapter.json

# Pad identity (Switch Pro ids). Eglantine reads the pad through cemuhook, fed from
# streamex's own pad state; the uinput device itself is only visible in this
# container, streamex creating its node (gamepad.createNode).
ENV STREAMEX_PAD_VENDOR=0x057e STREAMEX_PAD_PRODUCT=0x2009
# Contrat data-driven : games/launch/stop/gamepad/tools de CETTE console —
# streamex (le squelette) ne les connaît pas, il lit ce fichier (voir
# internal/adapter/config.go).
ENV STREAMEX_ADAPTER_CONFIG=/opt/adapter.json
# Accessibilité Qt allumée d'office : Eglantine n'écrit sa cadence que dans sa
# barre d'état, et c'est par le bus d'accessibilité (at-spi2-core, ci-dessus)
# que streamex peut la lire.
ENV QT_LINUX_ACCESSIBILITY_ALWAYS_ON=1
# Une AppImage d'Eden sait se mettre à jour elle-même : jamais dans une image,
# qui épingle sa version.
ENV DISABLE_AUTO_UPDATES=1

RUN chmod +x /entrypoint.sh /usr/local/bin/streamex /usr/local/bin/unpack-emulator

EXPOSE 8080

# Liveness binaire (healthy/unhealthy) : Docker ne connaît que ces deux
# états, pas de "caution" — la nuance "en service mais dégradé" (fallback
# clavier actif faute de pad uinput) vit dans /status.input.degraded, pas
# ici. start-period large : weston + Xwayland + l'émulateur peuvent prendre
# du temps à booter, un HEALTHCHECK qui tire trop tôt marquerait le
# conteneur unhealthy pendant un démarrage parfaitement normal.
HEALTHCHECK --interval=15s --timeout=5s --start-period=45s --retries=3 \
    CMD ["/bin/sh", "-c", "curl -fsS http://127.0.0.1:${STREAMEX_PORT}/status >/dev/null || exit 1"]

# JAMAIS DE RENDU LOGICIEL : llvmpipe est retiré du chargeur Vulkan.
#
# mesa-vulkan-drivers installe aussi llvmpipe (lavapipe), un moteur Vulkan qui
# rend sur le PROCESSEUR. Un émulateur qui le choisit tourne quand même —
# lentement, ou sur un écran noir — sans rien signaler. shadPS4 0.18.0 le
# choisissait à chaque partie (2026-09-11) : il départage deux GPU « non
# dédiés » à la taille du tas mémoire, et llvmpipe annonce toute la RAM de
# l'hôte contre la seule VRAM de l'APU. RPCS3 et Kyty choisissent RADV (mesuré),
# mais rien ne le garantit pour les autres : le chargeur l'écarte pour tous.
# Vérifié : avec cette variable, vulkaninfo ne liste plus que RADV.
ENV VK_LOADER_DRIVERS_DISABLE="*lvp*"

ENTRYPOINT ["/entrypoint.sh"]
