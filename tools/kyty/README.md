# KytyPS5 construit par GameFlex

Le Kyty de l'éditeur, plus ses patchs, appliqués dans l'ordre de leur numéro.

**0001 — une option de compilation** : `KYTY_COMPACT_ADDRESS_SPACE`. Elle range tout l'espace
d'adresses du jeu sous 512 Gio — la plage du jeu jusqu'à 256 Gio, la région étendue (128 Gio) juste
après au lieu de 512 Gio posés à 8 Tio, le point de pliage du GPU égal à la base étendue — pour
qu'il tienne dans les 39 bits d'un téléphone (chantier 17, `#367`). Chez Kyty ces valeurs servent
dans des contextes `constexpr` : c'est une option de compilation, pas un réglage. Le serveur peut
prendre cette construction : *Richman 11* y joue à l'identique.

**Depuis le 2026-11-05, elle tient aussi les gros jeux Unreal** (`#524`, journal 440). Leur couche PS5
réserve 512 Gio d'un seul tenant, mais n'en emploie que le bas (133 Gio pour *KH3*) et trois projections
de 32 Mio à `0x8fc0000000`, ses images d'affichage, au-delà des 39 bits d'un téléphone. La réservation
est donc plafonnée à 176 Gio sans le dire au jeu, et ces adresses repliées sur la fin de l'espace du jeu
(`CompactFoldedAddress` : `0x8fc0000000` devient `0x3fc0000000`) : à la projection, et là où le GPU les
reçoit (sortie vidéo, cibles de rendu et de profondeur, textures). Le jeu Unreal 5 met ces images à zéro
au processeur, un `memset` à l'adresse d'origine : la faute est rattrapée, les registres qui nomment
cette plage sont réécrits et l'instruction reprend (`FoldCompactAddresses`). L'option coupe aussi la
mémoire unique : le tas système prend 12 Gio de pages physiques d'un coup, Android tuerait l'application.

**0002 — l'extension barycentrique optionnelle** (`#373`). Kyty exigeait
`VK_KHR_fragment_shader_barycentric` : son recompilateur lit chaque paramètre interpolé d'un
pixel shader comme trois entrées *per-vertex* qu'il mélange lui-même avec `gl_BaryCoordKHR`. Turnip
(Mesa 26.1.6 comme `main`) n'a pas cette extension — l'Adreno 830 du S25 était refusé au choix du
périphérique. Avec le patch, l'extension est demandée si elle existe ; sinon chaque paramètre
devient une entrée interpolée par le matériel (le chemin que Kyty réservait déjà aux paramètres
*flat*, et celui de shadPS4 pour tout), et les VGPR I/J du shader lisent zéro — `v_interp_p2` ne
s'en sert pas. L'arrivée est automatique (`GraphicContext::fragment_shader_barycentric_enabled`
→ `ShaderRecompiler::SetFragmentBarycentricSupported`) ; `KYTY_NO_FRAGMENT_BARYCENTRIC=1` dans
l'environnement force ce chemin sur un GPU qui a l'extension, pour l'éprouver sur x86_64 (le banc,
avec `FORCE_NO_BARYCENTRIC=1`). Ce que ça perd : les shaders qui calculent leurs propres I/J
(interpolation personnalisée) — ils lisent l'interpolation du matériel à la place. Depuis
`KytyPS5-2026-10-22` (`890393f`), Kyty démarre seul sans l'extension, mais un shader qui en a
besoin échoue toujours : le patch ne garde que le chemin du recompilateur, la variable
`KYTY_NO_FRAGMENT_BARYCENTRIC` et la ligne de la console.

**0003 — les lignes du chargeur sur la console** (`#373`). Kyty tait ses lignes LOGF par défaut,
et le journal de l'application ne reprend que la console : sur le téléphone, on ne voyait pas quels
modules un jeu charge. `Loading: <module>` passe donc sur la console, et surtout le refus de la
libc du jeu : Kyty ne charge `sce_module/libc.prx` que si `IsFileExisting` répond oui (un
`stat()`), et l'écartait **sans rien dire** — ses imports deviennent alors des bouchons, et le
premier appel plante loin de la cause. La ligne `libc.prx not loaded: <chemin> is not a file
(errno …)` dit le chemin résolu et l'erreur.

**0004 — les choix GPU et la pile d'un planificateur utilisé trop tôt** (`#373`). Une ligne
`Vulkan device paths: mesh_shader=… subgroup=défaut/min/max wave64=… shared_int64_atomics=…
depth_feedback=… provoking_vertex_last=…` : les chemins que Kyty prend sur ce GPU (au banc,
RADV : `true 64/32/64 true true true true`). Et quand `CommandScheduler::CheckActive` échoue —
le planificateur servi avant son premier `Begin` —, les adresses de retour de la pile
(`_Unwind_Backtrace`), à retrouver par `addr2line -f -C -e kyty_emulator <adresse − base>` ; la
base sous Box64 est `BOX64_LOAD_ADDR` (`0x6800000000`).

**0005 — un défaut « lecture » sur une page lisible est une écriture** (`#373`). Kyty suit la
mémoire du GPU par défauts de page (`RenderContext::HandleFault`) : une écriture invalide ses
caches, une lecture relit le GPU. Une page n'est illisible que si un *read watcher* l'a rendue
inaccessible ; ailleurs elle reste lisible, et seule une écriture peut y faire défaut. Sous Box64,
le type d'accès est reconstruit — et une écriture rapportée en lecture partait relire le GPU,
créait un tampon avant toute commande et arrêtait Kyty. `PageManager::IsReadWatched` le dit ;
les huit premiers défauts sont tracés (`GPU page fault at … reported …, handled as …`). Au banc
(x86) : uniquement des écritures, sur trois pages qui reviennent.

**0006 — le suivi GPU garde le droit d'exécution** (`#373`). Le gestionnaire de pages protège en
`Mode::Read` puis rend en `Mode::ReadWrite` : `PROT_READ`, puis `PROT_READ|PROT_WRITE` — le droit
d'exécution disparaissait de toute page suivie. Une page où du code du jeu côtoie des données du
GPU devenait non exécutable ; Box64, qui vérifie la protection avant de traduire du x86, s'arrêtait
dessus (S25 : `GPU page fault at 0x901f9c000: reported execute`). `ProtectTransient` (son seul
appelant est le gestionnaire de pages) garde l'exécution — `ExecuteRead`, `ExecuteReadWrite` —,
seule une page inaccessible le reste. Et un défaut d'exécution sur une page lisible n'est plus
relu comme une lecture : il n'est pas du suivi, Kyty le laisse à ses autres gestionnaires. La
trace dit aussi les compteurs de la page (`read watchers`, `write watchers`).

**0007 — les lectures formatées d'un tampon choisi par le GPU, de toute largeur** (`#431`,
2026-10-24). *Final Fantasy VII Rebirth* (PPSA08668) s'arrêtait à 38 s, avant sa première image :
« shader resource tracking: … buffer descriptor is not a valid runtime value; GPU-selected access
requires a scalar, raw 8/16-bit, raw DWORD x1/x2/x3/x4, or formatted X load ». L'instruction est
`BUFFER_LOAD_FORMAT_D16_XY` (MUBUF `0x81`, à `pc 0x37c` — celle que l'issue
[#1796](https://github.com/KytyPS5/KytyPS5/issues/1796) avait vue avant que Kyty sache la
décoder), et son descripteur se calcule dans le shader. Par ce chemin (`IndirectBuffer`, l'accès
par adresse), Kyty ne savait lire qu'**une** composante formatée de 32 bits
(`LoadIndirectFormattedX`) ; un descripteur fixe, lui, lit toutes les largeurs
(`LoadFormattedPrepared`). Le patch :
- accepte les lectures formatées X, XY, XYZ, XYZW et leurs variantes D16
  (`MemoryInfo::SupportsIndirectBufferLoad`) ;
- convertit chaque composante que son `DST_SEL` choisit (mot 3 du descripteur, trois bits par
  composante), par la fonction de conversion que Kyty avait déjà pour X ;
- pour D16, range deux composantes par mot comme `LoadFormattedPrepared` : demi-flottants pour un
  format flottant ou normalisé, entiers bornés sinon. Le format n'étant connu qu'à l'exécution,
  une fonction de plus (`indirect_buffer_format_integer`) dit s'il est entier.

Une lecture X de 32 bits suit exactement l'ancien calcul. Vérifié sur le serveur (Kyty de
l'éditeur + ce seul patch, sans `KYTY_COMPACT_ADDRESS_SPACE`) : *FF7 Rebirth* atteint son écran
titre en une minute, puis le menu principal et « Nouvelle partie » — les couleurs fausses, comme
*FF7 Remake* (textures BC6H).

**0008 à 0012 — ce qu'il manquait ensuite à *FF7 Rebirth*** (2026-10-24, joué par le porteur
sur la dev, un arrêt de Kyty à chaque fois, un patch à chaque fois) :
- **0008, le compteur des « observateurs d'écriture » d'une page sur 15 bits** au lieu de 7
  (`pageManager.cpp`) : passé le menu, une page de 4 Kio portait plus de 127 tampons du GPU —
  « PageManager fatal: write-watcher overflow », sortie 66. L'état d'une page passe d'un à deux
  octets. Le diagnostic de 0006 (`WatcherCounts`) range désormais les deux compteurs sur 16 bits.
- **0009, des pools de descripteurs à la taille des ensembles** (`descriptorHeap.cpp`,
  `shaders.cpp`) : un pool neuf qui ne pouvait pas tenir un seul ensemble arrêtait Kyty
  (`descriptorHeap.cpp:57`). La création d'un ensemble trop grand pour être poussé note son besoin
  par type (`RequireDescriptorPoolSize`), les pools suivants le couvrent, et la console le dit
  (« Descriptor pools grow: … »). Pas revu à l'essai suivant : non confirmé.
- **0010, DCC en blocs indépendants de 64 et de 128 octets à la fois** (`pm4Handlers.cpp`) : un
  réglage valide sur RDNA2, traité en « Not implemented ». Kyty ne garde la valeur que pour son
  vidage de débogage ; 64 octets, la contrainte la plus stricte.
- **0011, CMASK et DCC alignés différemment** (`pm4Handlers.cpp`), et trois drapeaux voisins
  (indices VRS dans CMASK, combinateur DCC désactivé, clés d'effacement DCC) dans la vérification
  des cibles (`debug.cpp`) : Kyty dessine sans ces métadonnées ; une ligne au journal au lieu d'un
  arrêt.
- **0012, une cible de format COLOR_INVALID est éteinte** (`renderDraw.cpp`) : le bloc couleur
  ignore ce que le shader y écrit ; Kyty voulait la dessiner (« unsupported render-target format
  combination: layout=0 »).

**Où *FF7 Rebirth* s'arrêtait le 2026-10-24** : à la première scène, « unknown PS5 render-target
tile mode: 0x0000000c ». La conclusion d'alors — « le jeu emploie un huitième agencement » — était
fausse : la valeur change d'un essai à l'autre au même endroit (`0x0c`, `0x0a`, `0x1e`, `0x1c`,
`0x13`), et aucune n'est celle d'une vraie cible. Voir 0018, et la suite plus bas.

**0013 — les vidéos d'un décodeur ouvert en 10 bits sortent en P010** (`#431`, 2026-10-24 ;
`videoDec2Decoder.cpp/.h`, `libVideoDec2.cpp`, `libVdecsw.cpp`). La vidéo d'ouverture de
*FF7 Remake* restait « en deux et verte ». Le jeu ouvre le décodeur VP9 (`Videodec2`) en
**profil 2** (10 bits), puis recopie chaque image dans ses propres textures (luminance R16,
chrominance R16G16) comme du **P010** : 16 bits par échantillon, des lignes de deux fois le pas
en octets, la chrominance entrelacée juste après la luminance (`pas en octets × hauteur`). Kyty
rendait toujours du NV12 8 bits : le jeu lisait la moitié de chaque image par ligne, et sa
chrominance dans une zone jamais écrite — des zéros, donc du vert. Mesuré en remplissant le reste du
tampon de pages numérotées : la ligne r de la chrominance du jeu venait de la page 1080 + r.
Avec le patch, un décodeur VP9 de profil 2 ou 3, ou HEVC Main 10 (`HighBitDepthProfile`), rend du
P010 (FFmpeg convertit, même un flux 8 bits — celui de *FF7 Remake* l'est), et
`frame_pitch_in_bytes` dit le double du pas. Les autres profils gardent le NV12. Vérifié sur la
dev : la vidéo d'ouverture en couleurs, plein écran.

**0014 — le découpeur GPU choisit ses constantes par des branches** (`#431`, 2026-10-24 ;
`gpu_tiler_standard64_3d.inc`, `gpu_tiler_prt.comp`, `gpu_tiler_prt_3d.comp`). Le menu et tout
*FF7 Remake* sortaient en aplats sarcelle cernés d'orange. Une capture RenderDoc (`--rd`) l'a
situé dans la dernière passe, et dans ses tables de couleurs 3D (32×32×32, R16G16B16A16,
« standard 64 Ko ») : leurs colonnes 16 à 31 recopiaient les colonnes 0 à 15. La même table, lue
dans la mémoire du jeu et redécoupée selon addrlib (Mesa), est propre ; texel par texel, Kyty
mettait le bit 3 de x au bit 15 de l'adresse, là où AMD met le bit 4. La source de Kyty est
juste ; c'est sa compilation : `ELEMENT_BYTES == 8 ? uvec4(3, 3, 3, 4) : … uvec4(2, 3, 3, 3)`
sur une constante de spécialisation devient un `OpSpecConstantOp Select` de vecteurs à condition
scalaire, et Mesa 26.1 ne l'applique qu'à la première composante — les trois autres prennent le
dernier cas. Touché : toute texture 3D « standard 64 Ko » de 1, 2, 4 ou 8 octets par texel (pas
16 : le BC6H était donc juste), et les deux découpeurs PRT. Le patch écrit ces choix en `if`
(plus aucun `Select` de vecteurs dans le SPIR-V). Vérifié sur la dev : le menu dans ses vraies
couleurs (l'épée bleutée, la lumière blanche au-dessus).

**0015 — les requêtes d'occlusion se demandent aussi par l'environnement** (`#445`,
2026-10-24 ; `main.cpp`). Depuis `KytyPS5-2026-10-23-6aaa533`, Kyty sait compter sur le GPU ce que
le jeu demande des objets cachés (`--occlusion-queries`) ; sans l'option, tout compte comme
visible. *FF7 Remake* en jeu (aux portillons, mode « Résolution ») : **13,5 i/s au lieu de 10**,
un tiers des appels de dessin (330 par image au lieu de ~1 070) ; rien au menu, qui ne cache rien.
La fiche des paramètres de GameFlex ne passe que des variables d'environnement : le patch fait
valoir `KYTY_OCCLUSION_QUERIES=1` (`0` l'éteint) comme l'option, que la fiche règle par
l'interrupteur « Occlusion queries » (allumé par défaut, `shipped/ps5/kyty.json`).

**Le passage à `6aaa533`** (2026-10-24) : 0001 et 0003 à 0014 s'appliquent tels quels ; **0002**
est rebasé — l'éditeur a ajouté des champs à `GraphicContext` (requêtes d'occlusion) et un
paramètre au constructeur de `PipelineCache`, ce qui déplaçait trois contextes. `build.sh` reclone
désormais un arbre qui n'est pas à la version demandée (`.gameflex-tag`) : le clone est superficiel
et ne peut pas changer d'étiquette.

**Notre construction du téléphone ne passe pas ce jeu au serveur** : avec 0001 à 0007 et
`KYTY_COMPACT_ADDRESS_SPACE`, Kyty s'arrête avant, au chargement de la libc du jeu
(`sce_module/libc.prx`, « Unhandled host exception … address=0xffffffffffffe908 »,
`runtimeLinker.cpp:716`). **Isolé le 2026-10-28 : c'est 0001, l'espace compact** — pour
*Kingdom Hearts III + Re Mind* et *Clair Obscur* au moins, qui s'arrêtent au même endroit. Les jeux
Unreal PS5 réservent 512 Gio d'un seul tenant (`sceKernelReserveVirtualRange`, `len =
0x8000000000` à partir de 64 Gio), plus que les 256 Gio du jeu en espace compact. Kyty refuse
(`0x8002000c`), et le jeu s'arrête sur son erreur fatale. Le même arbre, 0005 et 0006 compris, mais
compilé sans l'espace compact, amène ces deux jeux à leur premier écran
([rapport](../../docs/reports/2026-10-28-unreal-ps5-telephone/README.md), `#524`). *FF7 Rebirth*
s'arrête à la même adresse que *Clair Obscur* : très probablement la même cause, non vérifiée.
Le serveur prend donc sa propre construction, `build.sh --server` : l'éditeur et les
patchs 0007 et suivants, sans l'espace compact, dans `/src-server` du même conteneur. C'est elle qui
est dans `cores/ps5/` de la dev et de la release depuis le 2026-10-24.

**0013 révisé** (2026-10-24, la revue de [KytyPS5#1877](https://github.com/KytyPS5/KytyPS5/pull/1877),
où il est proposé) : `QueryDecoderMemoryInfo` annonce la taille d'image du P010 (elle restait à
16 Mio, trop peu en 4K 10 bits), et Vdecsw, qui ne décode que de l'AVC, n'est plus touché. Le
patch est identique à la PR. Les binaires de `cores/ps5/` et le paquet du téléphone portent encore
la version d'avant : rien ne change pour *FF7 Remake* (2048×1088), ils la prendront à la prochaine
livraison.

**0016 — le cache de shaders, par l'environnement et marqué de la révision de Kyty** (`#487`,
2026-10-26 ; `main.cpp`, `pipelineSerialization.cpp`). Depuis `KytyPS5-2026-10-24`, Kyty peut
garder les shaders et les pipelines d'un jeu (`_PipelineCache/<jeu>.shaders`) et les recompiler au
démarrage, avant la première image (`--shader-cache`) ; son lanceur l'allume par défaut, la ligne
de commande non. Le patch fait valoir `KYTY_SHADER_CACHE=1` (`0` l'éteint) comme l'option ; la
fiche de GameFlex a l'interrupteur « Shader cache », allumé, et le lanceur le pose quand aucun
paramètre n'en décide (`kytyAuto`). Kyty reconnaît son cache à la date de son exécutable
(`/proc/self/exe`) : sous Box64, c'est Box64, dont la date ne bouge pas quand Kyty change — un cache
écrit par un autre Kyty serait relu. Le patch ajoute à l'en-tête la révision de Kyty
(`KYTY_GIT_REVISION`). Côté serveur, `unpack-emulator.sh` recopie désormais notre construction avec
sa date (`cp -p`) : recopiée à neuf à chaque partie, elle jetait le cache. Vérifié sur la dev :
*FF7 Remake*, la première partie écrit 0,8 Mo, la seconde relit 87 programmes, 91 modules et 65
pipelines en 11 ms.

**0017 — un jeu qui sort de lui-même ne fait plus planter Kyty** (`#522`, 2026-10-28 ;
`libC.cpp`, `libKernel.cpp`). Le `exit()` du jeu appelait le `::exit()` de l'hôte, qui détruit les
objets statiques alors que les fils du jeu et la boucle de la fenêtre tournent encore. Le fil de
l'image lisait alors `Config::GetVblankFrequency()` sur un `g_config` détruit, et une sortie propre
finissait en « Unhandled host exception », exit 65. C'était le cas de *FF XVI* (`return from main
= 0`) et de *Tekken 8* au serveur ([rapport](../../docs/reports/2026-10-27-ps5-serveur/README.md)).
Le patch sort comme Kyty le fait déjà quand on ferme sa fenêtre (`Emulator::Execute`) : par
`std::quick_exit`, après avoir vidé la console, pour que les lignes qui disent pourquoi le jeu est
parti ne se perdent pas. Le code de sortie est celui du jeu, et GameFlex dit « le jeu s'est arrêté
de lui-même » (`#504`).

**0018 — seules les cibles que le dessin écrit sont vérifiées, et un dessin « mesh » de plus de
65 535 groupes part en plusieurs lancements** (2026-10-30, *FF7 Rebirth* à sa première scène ;
`debug.cpp`, `ShaderIR.h`, `Translate.cpp`, `renderDraw.cpp`). Trois arrêts de Kyty, trouvés au
banc en pilotant le jeu au clavier (écran-titre, « Nouvelle partie », jusqu'à la scène) :
- **La vérification des cibles regardait un emplacement que le dessin n'écrit pas.** Avant chaque
  dessin, `hw_check` vérifie « la première cible liée » : masque et adresse, sans le format. Une
  cible COLOR_INVALID (que 0012 éteint déjà pour le dessin) passait donc, et sans cible du tout
  (une passe de profondeur seule), Kyty vérifiait quand même l'emplacement 0 et ce qu'une passe
  précédente y avait laissé. *FF7 Rebirth* lie une cible COLOR_INVALID à `0x1000` dont les autres
  champs ne veulent rien dire (agencement `0x1c`). Une cible n'est plus liée sans format, et rien
  n'est vérifié sans cible liée ; une ligne au journal le dit, une fois.
- **Un dessin « mesh » de 89 198 à 135 747 groupes** : « mesh draw exceeds host workgroup limits:
  135747x1 ». Vulkan ne garantit que 65 535 groupes par axe, et RADV n'en donne pas plus en X.
  Le dessin part en lancements de 65 535 groupes au plus ; chacun pousse son premier groupe dans
  un sixième mot des paramètres du dessin (`MeshFirstGroupDword`), que le shader ajoute à son
  `WorkGroupID.x`. Pas de groupe de remplissage : le mode « fast launch » (un groupe = un
  meshlet, lu par son numéro) marche aussi. Le même arrêt est ouvert chez l'éditeur pour *Astro
  Bot*, sur l'axe des instances ([#624](https://github.com/KytyPS5/KytyPS5/issues/624)).
- **FMASK sur une cible à un échantillon** : un FMASK n'existe que pour le multiéchantillonnage,
  et Kyty dessine sans lui de toute façon. Une ligne au journal au lieu d'un arrêt.

*FF7 Remake* avec 0018, au banc : écran-titre, « Nouvelle partie », la vidéo d'ouverture en
couleurs, puis le jeu (« Chapitre 1 », Cloud sur le train).

**Où *FF7 Rebirth* s'arrête maintenant** (2026-10-30) : toujours à sa première scène, mais pour une
raison établie. Le bloc de registres que le jeu donne pour l'emplacement 0
(`IT_SET_CONTEXT_REG_INDIRECT`, des paires registre/valeur lues dans sa mémoire, paires 42 à 57)
porte bien les numéros de registres d'une cible (`0x318` BASE, `0x31c` INFO… `0x3b8` ATTRIB3),
mais des **valeurs qui sont des flottants** : `0x3f7c1c5e` (0,985), `0xbf260775` (−0,649),
`0x3e1b1b8a` (0,1515)… — à la place de `0x10040730` pour INFO, `0x4dc6c000` pour ATTRIB3 dans les
blocs précédents. Seule BASE vaut `0x10` (`0x1000`, l'adresse de la cible éteinte). Le pixel shader
écrit bien cet emplacement (`CB_SHADER_MASK` 0xf), et Kyty s'arrête sur l'un de ces champs, un
différent selon l'ordre des dessins : agencement, dimension, format. Mesuré au banc :
- les mêmes flottants d'un essai à l'autre, à des adresses différentes : ce sont des données du
  jeu, pas un reste au hasard ;
- aucune copie du GPU (`DMA_DATA`, `COPY_DATA`, `WRITE_DATA`) n'écrit ce bloc ;
- la mémoire n'a pas changé 550 ms plus tard, les fils du jeu tournant : ce n'est pas une lecture
  trop tôt.

C'est donc le code du jeu, sur le processeur, qui écrit ces valeurs dans le bloc.

**D'où il les prend** (2026-10-30, surveillance en écriture,
[rapport](../../docs/reports/2026-10-30-ps5-rebirth-et-comparaison/README.md)) : le jeu recopie
par `memcpy` les valeurs de l'« image de registres » de l'objet cible (128 octets désignés par
`objet + 0x28`). Pour cette cible, l'image n'est pas une description de cible : ses 8 premiers
octets sont le chaînage d'une réserve de blocs libres (`0x10_e1adaa80`, le bloc voisin), et le
reste des restes d'un autre usage. `BASE = 0x10` en est la moitié haute. Le jeu emploie donc une
description **jamais remplie, ou déjà libérée**. Ce n'est pas une fonction de Kyty qui lui rend une
mauvaise structure, comme on le supposait : aucune fonction AGC ne manque, aucune allocation
n'est refusée. Reste à trouver pourquoi le jeu la laisse vide sous Kyty. La cible éteinte, le jeu
entre dans sa cinématique (l'image reste fausse) : ce n'est pas une correction, non livré.

*(0020 est retiré au passage à `91c5820` : l'éditeur a la même chose.)* **0020 — une faute sur une page écrite par le GPU rapatrie toute la plage modifiée autour d'elle**
(2026-10-30, `#610` ; `bufferCache.cpp`). Quand le jeu touche une page que le GPU a écrite, Kyty
la rapatrie, et chaque rapatriement vide le GPU (`CommandScheduler::Wait(CurrentTick())`). Il le
faisait page par page, alors que le jeu passe ensuite aux pages voisines : un anneau qu'il
remplit, un résultat qu'il lit d'un bout à l'autre. *Expedition 33* vidait ainsi le GPU 5 000 à
8 000 fois par tranche de 10 s. Le patch rapatrie d'un coup la plage modifiée contiguë qui
contient la page, dans le même tampon, à 1 Mio au plus de chaque côté. Les fautes suivantes sur
ces pages ne font plus que lever la protection. Mesuré au banc, même binaire avec et sans, deux
fois chacun, dans la cinématique d'ouverture : 960 à 1 400 attentes par tranche de 10 s au lieu
de 4 600 à 5 700, et **2,78 et 2,82 images/s au lieu de 2,32 et 2,34** (+20 %). Rien ne change
quand la plage se réduit à la page. Livré à la dev le 2026-10-30 avec 0018 ; la release et Gamebox
attendent la validation du porteur. Le numéro 0019 n'existe pas ici : c'est celui du patch de
résolution, rangé dans le
[rapport](../../docs/reports/2026-10-30-kyty-performance/README.md).

**0021 — les copies sans PlayGo ni DLC** (2026-10-31, `#523` ; `libPlayGo.cpp`,
`additionalContent.cpp`, `emulator.cpp`). Certaines copies de jeux PS5, les rétroportages
« DUPLEX » (*FF XVI* et *FF Resonance* au serveur), remplacent PlayGo, AppContent et les droits
par leurs propres bibliothèques (`fakelib/`), que Kyty ne charge pas. Elles n'ont plus de
`sce_sys/playgo-chunk.dat`, et déclarent leurs DLC dans un `dlc_emu.ini`. *FF XVI* ouvrait PlayGo,
recevait « PlayGo non pris en charge », et s'éteignait au bout d'une seconde. Deux changements :
- **sans fichier de morceaux, PlayGo répond que le jeu est entièrement installé** (1 000
  morceaux), ce que `--playgo-hack` ne faisait que sur demande. Un paquet de console en a toujours
  un : son absence veut dire une copie ;
- **les DLC déclarés dans `dlc_emu.ini` sont enregistrés** comme ceux de `--addcont` : une section
  par DLC, avec son `content_id`, son `download_status` et, s'il est `INSTALLED`, son `mount_point`
  sous `/app0`. Ceux de `--addcont` gardent la main.

*FF XVI* lit alors ses DLC (`/addcont1/… → /game/dlc300/…`). Au banc, les jeux sans fichier de
morceaux qui démarraient déjà ne changent pas : *Tekken 8*, *Wukong* et *Expedition 33* prennent
le repli et tiennent tout le banc, *Neptunia* n'appelle pas PlayGo.

*(0022 est retiré au passage à `91c5820` : l'éditeur a la même chose.)* **0022 — `s_endpgm_ordered_ps_done` termine un pixel shader** (2026-10-31, `#523` ;
`ScalarAluOps.cpp`). Un pixel shader à sections ordonnées (POPS, les transparences rendues dans
l'ordre) finit par cette instruction, que la table de Kyty ne connaissait pas. Le décodeur la
sautait, traversait le bourrage `s_code_end`, et lisait les données collées après le programme
comme des instructions : un registre `ttmp7`, puis un codage qui n'existe pas sur RDNA2. *FF XVI*
s'arrêtait là, à 20 s. Lue comme `s_endpgm`, elle le mène à ses réglages système, avec l'aperçu en
3D. Désassemblé à part avec `llvm-objdump` (`--mcpu=gfx1030`), le shader se termine bien à cette
instruction. 0021 et 0022 sont livrés à la dev le 2026-10-31 à 17:48
([rapport](../../docs/reports/2026-10-31-ff16-playgo/README.md)) ; la release et Gamebox attendent
la validation du porteur.

**0023 — plus de 64 images par shader** (2026-10-31, `#523` ; `ShaderIR.h`). Un pixel shader de
*FF XVI* échantillonne plus de 64 images, la limite du recompilateur de Kyty
(`ShaderInfo::MaxImages`). Elle passe à 256 : rien d'autre dans Kyty ne suppose 64, et RADV en
accepte bien plus par étape.

**0024 — les tables de descripteurs de tampons lues par index** (2026-10-31, `#523` ;
`ResourceTracking.cpp`, `ResourceMaterialization.cpp`). À 128 s, un shader de copie de *FF XVI*
prend chacune de ses destinations dans une table de descripteurs. Il la lit par
`buffer_load_dwordx4`, à l'index de son numéro de groupe Y, puis la rend uniforme par
`v_readfirstlane`. Kyty savait lire ainsi des tables de descripteurs d'images (celles des matériaux
d'Unreal), pas de tampons : il refusait le shader (« GPU-selected access requires… »). Trois
changements :
- l'analyse accepte ce motif pour un tampon, quand chaque fil actif au `readfirstlane` a exécuté
  la lecture ;
- l'écriture va dans un tampon choisi parmi des candidats : un par numéro de groupe, ou celui
  qu'une valeur fixe du lancement désigne ;
- au lancement, le chargeur lit chaque candidat dans la table, au pas du descripteur de la table.

Seules les écritures prennent ce chemin : les lectures gardent le leur. Dans *FF XVI*, la table a
16 descripteurs pour 16 groupes.

**0025 — une lecture Ampr vers une zone non mappée rend une erreur** (2026-10-31, `#523` ;
`libAmpr.cpp`). *FF XVI* lit 512 Kio de texture dans des tampons dont il a démappé la fin par une
commande AMM, 0,5 s plus tôt. Kyty copiait le fichier par `memcpy` et plantait sur la première page
non mappée (« Unhandled host exception … access=2 »), dans la partie du porteur comme au banc. La
lecture vérifie maintenant sa destination, zone par zone, et rend `EFAULT`, comme le moteur DMA de
la console finirait en faute de page. Le jeu continue. Une zone seulement réservée (protection
nulle) compte comme non mappée.

Avec 0023 à 0025, *FF XVI* tient tout le banc et entre dans son introduction, où l'image se fige
(l'obstacle suivant). Au banc, sur la base de la dev, rien ne change pour *Expedition 33* (3,26
images/s dans la cinématique, l'image juste), *FF7 Remake*, *Wukong*, *Tekken 8* et *Neptunia* ;
0025 ne s'y déclenche jamais. Livrés à la dev le 2026-10-31 à 20:52
([rapport](../../docs/reports/2026-10-31-ff16-playgo/README.md)) ; la release et Gamebox attendent
la validation du porteur.

**0026 — la mémoire unique** (chantier 41 P1, porté sur 0025 le 2026-11-02 ; journaux 405 et 406).
Avec `KYTY_UNIFIED_MEMORY=1` et le tas dma-buf du noyau (`/dev/dma_heap/system`, que le kernel
donne aux parties PS5 quand la machine l'a), la mémoire directe du jeu est tirée de ce tas et importée
entière dans le GPU : les tampons de Kyty en sont des vues, sans copie ni suivi par fautes de page.
Sans le tas, ou à 0, l'ancienne mémoire. Le patch porte aussi, dans les deux modes, les dessins
indirects des mesh shaders sur le GPU (P4) et deux règles de rechargement d'images (P3). *FF7
Remake*, le même binaire éteint puis allumé : 7,6 → 11,2 images/s en régime, la même image
([rapport](../../docs/reports/2026-11-02-kyty-memoire-unique/README.md)). *Expedition 33* y avait
bloqué le GPU (chantier 41) : pas revalidé.

**0027 — les compteurs d'occlusion écrits par le GPU** (2026-11-02, journaux 410 et 411 ;
`occlusionQueries.cpp`, `bufferCache.cpp`, `graphicsRun.cpp`). Pour chaque requête d'occlusion,
Kyty vidait le GPU pour écrire le résultat avec le processeur : 99,5 % de ses attentes, ~450 vidages
par image dans *FF7 Remake*. En mémoire unique, quand les vidages en attente sont un début et sa fin
autour d'une seule requête, le GPU écrit lui-même les compteurs dans la mémoire du jeu, avant
l'étiquette de fin de tube, comme celui de la console ; la prédication attend ces écritures avant de
lire. Les autres formes et l'ancienne mémoire gardent l'ancien chemin. *FF7 Remake* : 11,2 → 21,8
images/s en régime, la même image
([rapport](../../docs/reports/2026-11-02-kyty-attentes/README.md)).

**0028 — la taille de rendu d'un jeu Unreal** (2026-11-02, journaux 416 et 417 ; `fileSystem.cpp`).
Les jeux Unreal lisent au démarrage une ligne de commande (`/app0/ue4commandline.txt` pour *FF7
Remake*, `/app0/uecommandline.txt` pour *Wukong*). Avec `KYTY_UE_SCREEN_PERCENTAGE=<n>` (10 à 200),
Kyty leur sert une copie de ce fichier qui y ajoute `r.ScreenPercentage=<n>`
(`-ini:Engine:[SystemSettings]:…` et `-dpcvars=…`) : le moteur calcule son image à <n> % de sa sortie
et la remet à la taille de l'écran ; ses menus gardent leur finesse. Les fichiers du jeu ne sont pas
touchés ; hors de 10-200, ou sans la variable, rien ne change. *FF7 Remake* en jeu : 2040×1148 à
29 images/s tout seul, **960×540 à 60 images/s** à 50 %, la même scène
([rapport](../../docs/reports/2026-11-02-kyty-apres-compteurs/README.md)). L'exécutable de *Wukong* ne
contient ni `-ini:` ni `-dpcvars` : l'option n'y agissait pas, mesuré (journal 428) ; 0035 lui ouvre un autre chemin. Depuis 0040, la variable est `KYTY_UE_RENDER_HEIGHT`, une hauteur.

**0029 — l'attente d'une commande du GPU hors de la pile du jeu** (2026-11-02, journal 418 ;
`graphicsRun.cpp`). `GuestGpu::SendCommandSync` attendait sa commande sur un `std::binary_semaphore`
posé sur la pile de l'appelant. L'appelant peut être un fil du jeu, dont la pile est la mémoire du
jeu ; en mémoire unique (0026), c'est une projection dma-buf, où le futex partagé de ce sémaphore
échoue (`EFAULT`) : libstdc++ lève `std::system_error` (« Bad address », *Tekken 8* s'arrête à
14 s) ou un réveil se perd (*FF XVI* attend pour toujours après avoir lancé ses fils de travail).
Le sémaphore vit désormais sur le tas. Les deux jeux, mémoire unique allumée, vont aussi loin que sans
elle ([rapport](../../docs/reports/2026-11-02-kyty-apres-compteurs/README.md)).

**0030 — un tampon d'affichage flottant encodé en sRGB** (2026-11-03, journal 421 ;
`swapchain.cpp`). *FF7 Remake* affiche dans un tampon RGBA 16 bits flottant
(`0xc001000622000000`) : de la lumière **linéaire**, que la sortie vidéo de la console encode pour
l'écran. Kyty la recopiait telle quelle dans sa fenêtre 8 bits : les tons moyens et les ombres
sombraient (une valeur linéaire de 0,2 affichée à 20 % au lieu de ~48 %), et le réglage de luminosité
du jeu n'y pouvait rien. Sans HDR, la trame passe désormais par une image sRGB (une copie
« blit » vers un format sRGB applique la fonction de transfert), dont les bits sont recopiés dans la
trame 8 bits ordinaire. Même scène : luminance moyenne 13,6 → 55,4 sur 255, les pixels presque noirs
75 % → 0,6 %, toujours 60 images/s ([rapport](../../docs/reports/2026-11-02-kyty-apres-compteurs/README.md)).
Le `main` de l'éditeur a le même défaut (son drapeau « source linéaire » ne sert qu'aux conversions HDR).

**0031 — une poussée bloquante d'AudioOut2 attend que la file ait de la place** (2026-11-03, journal
422 ; `libAudio2.cpp`). Sur une vraie sortie, `AudioOut2ContextPush` bloquant ne se réglait que sur la
file de SDL (40 ms) et revenait aussitôt, la file du contexte (celle que `GetQueueLevel` montre au
jeu) encore pleine. Wwise (*Wukong*) relance son mixeur juste après une poussée : le mixeur, sans
place, se rendormait, et seul le fil de secours du jeu le relançait ~140 ms plus tard — le son
tournait à 30 % du temps réel, par coupures. La poussée attend maintenant, comme sur la console, que
la file ait de nouveau de la place. Même combat : poussées par 10 s 746 → 930 (938 = temps réel),
trous dans le son 111,5 s → 3,4 s, même cadence ([rapport](../../docs/reports/2026-11-02-kyty-apres-compteurs/README.md)).
Le `main` de l'éditeur a la même poussée.

**0032 — le cache de shaders reconnu à ses sources** (2026-11-03, journal 423 ;
`generate_version.cmake`, `kytyGitVersion.h.in`, `CMakeLists.txt`, `pipelineSerialization.cpp`).
L'en-tête du cache portait la date de l'exécutable (0016 y ajoutait la révision) : chaque
construction le jetait, et le porteur reperdait ses shaders à chaque patch, même un patch du son. La
génération de `kytyGitVersion.h`, déjà refaite à chaque construction, calcule maintenant une empreinte
(SHA-256) des sources dont dépendent les enregistrements du cache : `src/graphics/shader/` (le
traducteur) et `src/graphics/host_gpu/renderer/` (les pipelines et ce qui les décrit), sans
`renderer/cache/` (les caches de mémoire). L'en-tête prend cette empreinte au lieu de la date ; la
date ne sert plus que si l'empreinte manque. 0029, 0030 et 0031 n'y touchent pas : avec 0032, ils
auraient gardé le cache.

**0033 — un jeu Unreal ne se tue plus quand son ramasse-miettes dépasse 10 s** (2026-11-03, journal
427 ; `fileSystem.cpp`). Quand un ramasse-miettes dure plus de 10 s et que des objets attendent encore
le fil de rendu, le moteur plante exprès (`UObject::AbortInsideMemberFunction`). C'est ce qui arrête
*Wukong* dans `MainThread` à l'écran du chapitre 1. Quand le jeu lit sa ligne de commande, Kyty écrit
`gc.EnableTimeoutOnPendingDestroyedObjectInShipping=0` dans sa configuration sauvegardée
(`/download0/<projet>/saved/ps5/engine.ini`), dernière couche que lit le moteur et qu'il garde en
réécrivant le fichier ; ce dossier est celui du jeu, jamais ses fichiers d'origine. Au banc, la variable
passe de 1 à 0 en mémoire. Si le fil de rendu était vraiment bloqué, le jeu resterait figé au lieu de
planter.

**0034 — une image de calcul en entiers signés 16 bits à quatre canaux** (2026-11-03, journal 428 ;
`ShaderIR.h`, `ResourceMaterialization.cpp`, `generate_version.cmake`). Le mode Performance (legacy) de
*Wukong* lie en écriture seule une image 4×3 au format `k16_16_16_16SInt` ; Kyty s'arrêtait sur
« storage image descriptor 1 uses unsupported format 70 ». Il sait déjà écrire ces images en passant
par une vue non signée (`RawSignedStorageFormat`, pour `k32SInt` et `k16SInt`) : ce format rejoint la
liste. Le patch garde aussi le cache de shaders : ces programmes s'arrêtaient, aucun enregistrement
n'en dépend. Le `generate_version.cmake` ne reprend l'ancienne empreinte que si celle des sources est
exactement celle de 0034 ; un autre changement du traducteur donne une nouvelle empreinte.

**0035 — la taille de rendu par la configuration sauvegardée** (2026-11-03, journal 428 ;
`fileSystem.cpp`). `KYTY_UE_SCREEN_PERCENTAGE` écrit aussi `r.ScreenPercentage` dans le même `engine.ini`
que 0033, seul chemin qui atteigne *Wukong*. Le dossier survit maintenant à la partie : à chaque
démarrage, Kyty retire ce qu'il y avait écrit et remet le réglage courant (éteint, plus de ligne). *Wukong*,
mode Performance (legacy), au banc : scène en 1920×1080 à 15 images/s tout seul, 1288×724 à 20-21 à 67 %,
**960×540 à 24** à 50 %, 636×360 à 26 à 33 %.

**0036 — le titre de la fenêtre nomme Kyty** (2026-11-03, journal 429 ; `kytyGitVersion.h.in`). streamex
retrouve la fenêtre de l'émulateur à son titre (`window_name` : « Kyty ») et y lit sa cadence. Les
constructions de l'éditeur s'appellent « Official build KytyPS5-… », les nôtres s'appelaient « Source
build … » : plus de fenêtre, donc plus de cadence au panneau, depuis nos premiers binaires. Au banc,
aucune fenêtre sous ce nom avant le patch, une après ; ce fichier n'entre pas dans l'empreinte du cache.

**0037 — une lecture de fichier vers le tas de Kyty n'est plus refusée** (2026-11-03, journal 431 ;
`libAmpr.cpp`). Avant de lire, Kyty vérifie que la destination est dans les projections du jeu. Celle de
*Kingdom Hearts III* n'y est pas : son `malloc` vient du tas de Kyty lui-même. La lecture de sa première vidéo
échouait, et le jeu s'arrêtait à 12 s (« Apr read failure 8002000e »). Hors des projections du jeu, Kyty regarde
maintenant si la plage est projetée (`mincore`). Au banc : 240 s sans faute, jusqu'à son menu de nouvelle partie.

**0038 — le cache de shaders se relit une fois le tas d'images créé** (2026-11-03, journal 431 ;
`renderContext.cpp`, `pipelineCache.cpp/.h`, `generate_version.cmake`). `RenderContext` construit son cache de
pipelines avant son tas d'images, et le préchauffage se faisait dans ce constructeur : la disposition du tas était
encore nulle. Un pipeline qui échantillonne le tas faisait tomber RADV (`get_sampler_desc`). *FF7 Rebirth*, le seul à
s'en servir ici, plantait donc à 3 s dès sa deuxième partie, son cache étant valable depuis 0032. Le préchauffage passe
après les constructeurs. L'empreinte reprise par 0034 suit : rien de ce qui est enregistré ne change.

**0039 — le budget des textures compte la mémoire du jeu importée** (2026-11-03, journal 432 ; `vma.cpp`). 0026 retirait
les 12,4 Gio importés de ce qui est utilisé, pas de ce qui est disponible, et RADV annonce sur un GPU intégré deux tiers de
la mémoire comme « locale », qui servait de plancher : Kyty se croyait 18 Gio pour ses textures, quand 14,6 Gio tiennent dans
une soumission. Le ménage commençait à 13,5 Gio et s'alarmait à 16,8 Gio, après le débordement. En mémoire unique, le budget
part des tas réels moins la mémoire importée : 8,8 et 12 Gio sur le 780M. Sans elle, rien ne change. *Wukong* ne bouge pas (22-24
images/s) ; *Rebirth* ne passe pas pour autant, ses images sont retenues par son tas (voir le rapport).

**0040 — une hauteur de rendu, et la configuration de ceux qui la gardent chez eux** (2026-11-04, journal 433 ;
`fileSystem.cpp`). `KYTY_UE_RENDER_HEIGHT` (540, 720) remplace `KYTY_UE_SCREEN_PERCENTAGE` : un même pourcentage ne voulait pas
dire la même chose, parce que le moteur le compte depuis la sortie du jeu (1080p pour *FF7 Remake*, 4K pour *KH3*). Kyty calcule
le pourcentage : base 1080 si le jeu déclare s'adapter à l'écran (`ATTRIBUTE3 & 4`) ou si c'est *Wukong* (`b1`, dont le mode legacy
compte depuis 1080p), 2160 sinon. `r.DynamicRes.OperationMode=0` part avec lui dans `engine.ini` : la résolution dynamique de *KH3*
reprenait la main. Et *KH3* lit sa configuration dans `/app0/<projet>/saved/config/ps5/engine.ini`, là où rien ne s'écrit : ce chemin
mène au fichier de `/download0`, dans `MountPoints::ResolvePath`, car le jeu le lit par APR et une redirection dans `KernelOpen` ne se
voit pas. La ligne de commande de 0028 reste : *FF7 Remake* ne demande jamais `engine.ini`. *KH3*, la même scène : 26,5 images/s tout seul,
49,7 à 720p, **57,2 à 540p** ; *FF7 Remake* 59,3 à 540p, *Wukong* 23,2 ([rapport](../../docs/reports/2026-11-03-kyty-cadence/README.md)).

**0041 — les commandes de projection de la lecture rapide projettent vraiment** (2026-11-04, journal 433 ; `libAmpr.cpp`, `memory.cpp`). `AprCommandBufferMapBegin` et
`AprCommandBufferMapDirectBegin` (« projette cette zone, puis lis dedans ») n'étaient que des bouchons : Kyty ne projetait rien. *FF XVI* s'en sert pour ses textures : ses lectures tombaient dans des trous, puis ses
propres fils y écrivaient. Elles produisent maintenant la commande de projection d'AMM. Et le contrôle de 0037 ne laisse plus passer un trou de l'espace du jeu : `mincore` y compte une réservation sans droit
d'accès, et la copie plantait Kyty au lieu de rendre l'erreur que la console rendrait. *FF XVI* : 153 projections sur 330 s, plus aucun trou ni erreur de lecture.

**0042 — ce qu'un jeu déclare pour sa hauteur de rendu** (2026-11-04, journal 434 ; `fileSystem.cpp`). `KYTY_UE_RENDER_BASE` (1080, 2160) dit depuis quoi elle se compte, à la place du cas *Wukong* écrit en dur dans 0040 ; `KYTY_UE_RENDER_VARIABLE` dit quelle variable la porte (`r.ScreenPercentage`, ou `r.SecondaryScreenPercentage.GameViewport` pour *Tekken 8*). Les deux viennent du correctif du jeu (`patches/ps5/<identifiant>/settings.json`, chantier 43).

**0043 — la poussée d'AudioOut2 garde son rythme** (2026-11-04, journal 437 ; `libAudio2.cpp`). Quand la file du contexte se vidait, son horloge repartait de l'instant présent et oubliait le retard du réveil. Depuis 0031, ce réveil en retard allonge chaque poussée bloquante : un peu plus lente que le temps réel, jusqu'à ce que la file de SDL se vide et que le son coupe. *FF7 Remake* au banc, même passage, toujours à 60 images/s : 0030 une coupure en 4 minutes, 0031 et 0042 environ 16 toutes les 10 s, 0043 une en 3 min 20. L'horloge garde maintenant ce retard ; seule une pause de plus de 4 grains la relance. *Wukong*, pour qui 0031 a été écrit, ne régresse pas : 355 → 75 ms de manques sur le même parcours ([rapport](../../docs/reports/2026-11-04-kh3-brulures-son-ff7/README.md)).

**0044 — les réglages du moteur d'un jeu** (2026-11-04, journal 438 ; `fileSystem.cpp`). `KYTY_UE_ENGINE_SETTINGS` (« a=1;b=2 ») s'écrit dans le même `engine.ini` que 0033. Le moteur peut réécrire ce fichier sans commentaires : les noms écrits la dernière fois restent à côté (`gameflex-engine-settings.txt`), et un réglage retiré du préréglage quitte le fichier au démarrage suivant. Sans « = », une entrée est ignorée : « none » veut dire aucun. *Wukong* 22 → 31-32 images/s, *KH3* 30 → 35-36 ([rapport](../../docs/reports/2026-11-04-kyty-shadps4-maj-30-images/README.md)).

**0045 — les shaders compilés à côté, et un toast** (2026-11-05, journal 440, `#623` ; `pipelineCache.cpp/.h`, `renderDraw.cpp`, `systemOverlay.cpp/.h`). `KYTY_COMPILE_ASIDE=1` : pour un dessin de géométrie dans une passe avec profondeur (indexé, `z_enable`, pas une liste de rectangles), un shader nouveau attend son tour, au plus un quart du temps du fil de commandes, et son pipeline se construit sur un autre fil ; le dessin est sauté en attendant. Le calcul reste immédiat, parce que les jeux lisent ce qu'il écrit. **Les autres dessins ne se sautent pas** : sauter tout rendait le décor de *Wukong* rose, pour toute la partie, une passe qui ne tourne qu'une fois laissant sa cible telle quelle ([comparaison](../../docs/reports/2026-11-05-compilation-a-cote-telephone/mesure/a-cote-rose.jpg)). *Wukong*, caches vides, une fois en jeu : 30-33 images/s sans chute pendant 100 s, au lieu de chutes à 0-1 ; image identique. Les pipelines passent d'un `vector` à un `deque` de modules : un module construit à côté garde son adresse. `KYTY_SHADER_TOAST=0` retire le toast, « Compilation des shaders : N » en bas à gauche, dans l'image, donc dans le flux et sur le téléphone ([capture](../../docs/reports/2026-11-05-compilation-a-cote-telephone/mesure/toast.jpg)).

**0046 — un GPU sans mesh shaders abandonne leurs dessins** (2026-11-05, journal 442, `#628` ; `pipelineCache.cpp`, `vulkanWindow.cpp`, `systemOverlay.cpp/.h`). Turnip n'a pas de mesh shaders, et `EXIT_NOT_IMPLEMENTED` arrêtait *KH3* et *FF7 Remake* sur le S25 à leur premier dessin de ce type. Ces dessins sont désormais abandonnés, par le chemin que Kyty prend déjà quand un dessin dépasse les limites du GPU. Le journal dit le premier, puis le compte tous les 100 000, et l'écran dit « des objets manquent » pendant 20 s. `KYTY_NO_MESH_SHADER=1` prend ce chemin sur un GPU qui les a, pour le banc ; aucun effet sur le serveur sans cette variable. Corrige aussi un défaut de 0045 : un dessin abandonné laissait `m_defer_translation` allumé pour le shader de calcul suivant. **C'est un essai** : des objets manquent, la vraie traduction reste à faire si ces jeux en valent la peine.

**0047 — la table de couleurs sans mesh shaders** (2026-11-05, journal 442, `#628` ; `gpu_layered_quad.vert`, `pipelineCache.cpp/.h`, `renderDraw.cpp`, `CMakeLists.txt`). Avec 0046 seul, *KH3* est noir : le dessin abandonné remplit sa table de couleurs (`32×32×32`, un quad par tranche). Un vertex shader intégré couvre la cible et écrit `gl_Layer`, et le pixel shader du jeu calcule la vraie table. Seulement pour un quad de 4 sommets, instancié autant de fois que le côté d'une cible cubique, une couleur, sans profondeur, avec un pixel shader qui lit la tranche et au plus un paramètre ; le reste est abandonné. Sans effet sur un GPU qui a les mesh shaders.

**0048 — les images VP9 restent en NV12** (2026-11-05, journal 443, `#631` ; `videoDec2Decoder.cpp`). L'éditeur a ajouté `MakeVp9PictureInfo` dans `91c5820` (`56b01bcd`) : le jeu reçoit désormais `bit_depth = 8` et copie chaque image en conséquence. Notre 0013 continuait d'écrire du P010 pour un décodeur VP9 de profil 2 : la vidéo d'ouverture de *FF7 Remake* est devenue rose, puis verte, avec une bande à droite, sur le serveur comme au téléphone. Annoncer 10 bits ne convient pas (image blanche) : le VP9 repasse donc en NV12, comme le code de l'éditeur le prévoit, et 0013 ne garde le P010 que pour le HEVC Main 10.

**0049 — le titre de la fenêtre dit la taille d'image** (2026-11-05, journal 446 ; `window.cpp`, `swapchain.cpp`, `fileSystem.cpp`, `common/gameflexStatus.h`). Le porteur : « rajouter dans performance panel la résolution du jeu depuis l'émulateur. Car actuellement on a que le Gateway Résolution ». Le titre porte déjà la cadence, que le serveur et le téléphone lisent (`sessionstatus.TitleFPS`) ; il porte maintenant `render: LxH`, la scène que Kyty demande à un jeu Unreal (le pourcentage de 0040 appliqué à sa base, 16:9), et `output: LxH`, l'image que le jeu rend à la console (`PrepareFrame`). `sessionstatus.TitleResolution` les lit. Un jeu qui n'est pas Unreal n'a que sa sortie.

**0051 — demander moins souvent au pilote où en est le GPU** (2026-11-05, journal 449 ; `commandScheduler.cpp`). `PopPendingOperations` tourne à chaque dessin et appelait `MasterSemaphore::Refresh`, donc `vkGetSemaphoreCounterValue`, donc un `ioctl` : 9 % du fil de commandes dans *KH3* à l'échiquier (profil `perf`, binaire à symboles). Il ne le fait plus que si l'opération en attente la plus ancienne n'est pas déjà connue comme finie, et une fois sur seize. Au banc, réglages du téléphone : ce fil passe de 7,9 à 7,1 ms par image, sa part dans le noyau de 16 à 11 %, la même image. Au téléphone, chaque appel traverse en plus Box64 et KGSL.

**0053 — un fil qui rend la main en boucle dort** (2026-11-07, journal 468, `#645` ; `pthread.cpp`). Le fil de rendu d'Unreal appelle `scePthreadYield` 900 000 à 1 040 000 fois par seconde pour attendre (*FF7 Remake*, *KH3*, journal 467) : sur la console, il a un cœur à lui ; sous Kyty, il en garde un entier sur l'hôte, à 100 %, dont un tiers dans le noyau. Après `KYTY_YIELD_SPIN` appels de suite (64 par défaut ; 0 rend le `yield` d'origine), le fil dort `KYTY_YIELD_SLEEP_US` microsecondes (50). La série repart quand plus de 200 µs passent au-delà de ce sommeil entre deux appels : le fil a travaillé entre-temps. Au banc, même parcours : *KH3* en 3D 25-26 images/s avant comme après, son fil de rendu de 99 à 13 % d'un cœur ; *FF7 Remake* 57-58 → 55-56 images/s, son fil de rendu de 100 à 29 %, tout le jeu ≈ 265 → 200 % de processeur. 20 µs, une marge de minuteur d'une microseconde ou 512 appels avant de dormir donnent la même chose : la perte de *FF7 Remake* ne tient pas à la durée du sommeil. *FF7 Remake* est limité par le GPU (98 %) sur un processeur qui partage son énergie avec lui : une piste, pas une mesure. Livré le 2026-11-07 : Kyty du serveur de dev, paquet `r7` du téléphone. Le téléphone, où ce cœur manque, reste à mesurer.

**0054 — la résolution de la console est un réglage** (2026-11-07, journal 469, `#645` ; `gameflexStatus.h`, `videoOut.cpp`, `fileSystem.cpp`). La console de Kyty annonçait une télé 4K à tout jeu qui ne déclare pas la détection de la résolution (règle de l'éditeur, `61761b65`), et la « télé » 1080p restait sans effet : aucun jeu Unreal ne la consulte (journal 468). `KYTY_OUTPUT_RESOLUTION` (1080 par défaut, la plus petite qu'offre une PS5, ou 2160) devient la réponse de `sceVideoOutGetOutputStatus` pour tous les jeux (code 1 ou 2), et, pour un jeu Unreal, la taille des images qu'il rend à la console : `PS5.DefaultBackBufferWidth/Height` = 1920×1080 dans son `engine.ini`, sauf si son correctif donne sa propre taille. La hauteur de rendu (0040, 0042) compte désormais depuis cette résolution, au lieu de la règle de `attribute3` ; `KYTY_UE_RENDER_BASE` accepte 540, 1080 ou 2160 pour un jeu qui dessine en dessous de sa sortie ; cette base s'écrit pour une console 1080p et suit la résolution de la console (×2 en 4K), sauf si le correctif fixe lui-même la taille de sortie. Le journal de la partie le dit (« console output 1080p »).

**0055 — le plafond de cadence suit le flux** (2026-11-07, journal 469, `#645` ; `videoOut.cpp`). Au-dessus de 30 images/s, *Wukong* donne ses images par paires : deux à 2-5 ms d'écart, puis rien pendant ~55 ms (écart moyen 30 ms, médian 55 ms, `diag_rythme.py`). Le flux, à 30 images/s, n'en voit qu'une sur deux : environ 17 images distinctes par seconde, les « gros sauts » que voit le porteur. `KYTY_FRAME_RATE_CAP` montre au plus une image tous les n vblanks, comme si le jeu avait demandé `sceVideoOutSetFlipRate` (le mécanisme de `diag_fliprate.py`, journal 467) : `auto`, le défaut, prend la cadence du flux (`STREAMEX_FPS` au serveur, `GAMEFLEX_STREAM_FPS` au téléphone), un nombre fixe la sienne, `0` n'en met aucune. Au banc, *Wukong* plafonné à 30 : écart médian 33,3 ms, moyen 33,8, une quinzaine d'écarts sur 300 au-delà de 50 ms (la moitié sans plafond). Le journal de la partie dit le plafond retenu (« Frame rate cap: »).

**0056 — un correctif de code par l'environnement** (2026-11-07, journal 469, `#645` ; `emulator.cpp`). Kyty applique déjà les correctifs de code au format GoldHEN/ETAHen (`--game-patch <json>`, `gamePatch.cpp` : retrouvés par leur contenu dans le module chargé, refusés pour un autre titre ou une autre version). Sans option sur la ligne de commande, `KYTY_GAME_PATCH` en donne un, son JSON sur une ligne ; tout ce qui n'est pas du JSON (`none`) est ignoré. Les correctifs de jeu de GameFlex le remplissent par le réglage texte « Correctif de code du jeu », sans rien changer au lanceur du serveur ni du téléphone. Le premier : *Astro Bot* (01.019.000), dont le code range sa sortie 3840×2160 en dur (`0x2b2deb`) ; il sort en 1920×1080 avec, son image propre, sa cadence presque inchangée (limité ailleurs que par ses pixels).

**0057 — le guetteur dit qui attend quoi** (2026-11-07, journal 470, `#632` ; nouveau `gameflexWatchdog.h`, `videoOut.cpp`, `swapchain.cpp`, `graphicsRun.cpp`, `commandScheduler.cpp`, `pthread.cpp`, `eventQueue.cpp`, `eventFlag.cpp`, `semaphore.cpp`). Un jeu figé sur un écran noir n'écrit rien (*KH3* au téléphone, juste après sa vidéo des logos). Chaque point où un fil peut attendre note ce qu'il attend (`WaitNote` : trois écritures, sans horloge) : les attentes du jeu (`scePthreadMutexLock`, `scePthreadCondWait`/`Timedwait`, `scePthreadJoin`, `sceKernelWaitEqueue`, `sceKernelWaitEventFlag`, `sceKernelWaitSema`, `sceKernelUsleep`/`Nanosleep`), celles de la présentation (acquérir une image de la swapchain, la présenter, la recréer, attendre la dernière présentation d'une image préparée), celles du fil GPU (sans travail, une commande synchrone, une soumission à l'hôte) et ce qu'une commande suspendue du GPU invité attend (`wait_reg_mem` : l'adresse, la valeur lue, la fonction, la référence, le masque). Un fil guetteur (« GF watchdog ») les écrit sur la console après 10 s sans nouvelle image présentée, puis toutes les 30 s, cinq fois au plus : les fils qui attendent depuis 3 s ou plus, avec leur nom, et ce que le fil de présentation a trouvé dans la file des flips. `KYTY_WATCHDOG=0` le coupe. Son inclusion dans `commandScheduler.cpp` suit l'en-tête du fichier : le bloc d'inclusions d'après est le contexte de 0004, appliqué après. **Le 2026-11-07 au soir** (paquet `r10`) : chaque attente du jeu note aussi d'où le jeu l'appelle (`__builtin_return_address(0)`, nommé par le chargeur « eboot.bin+0x… »), et les fils qui dorment en boucle sont écrits un par un, avec leur nom ; deux relevés au plus (à 10 s puis 30 s plus tard), douze attentes longues au plus, pour tenir dans les 200 lignes que le téléphone relaie. Au téléphone, `r9` avait montré *KH3* figé sans flip en attente, GPU au repos, six fils en boucle de `sceKernelUsleep`. **Le 2026-11-07 dans la nuit** (paquet `r11`) : `r10` a montré, au téléphone, que le fil principal du jeu n'est dans aucune attente notée pendant l'écran noir. Le guetteur dit maintenant ce que fait chaque fil depuis la dernière image : son temps de processeur (lu dans `/proc/self/task`), ses appels des bibliothèques de la console (`PRINT_NAME`, en tête de chaque fonction de Kyty, pose un `CallNote` : la fonction, le code du jeu qui l'appelle, les seize derniers appels, la profondeur), l'appel où il reste coincé depuis 3 s ou plus, et, pour un fil occupé à 30 % ou plus, l'endroit où il tourne : huit regards par un signal (`SIGRTMIN + 6`, sur la pile de secours), dont le gestionnaire lit l'adresse interrompue (sous Box64, l'adresse x86 de l'invité). Essayé sur un faux blocage : le fil qui tourne sans rien appeler, celui qui interroge en boucle et celui coincé dans un appel sont nommés, avec leurs adresses.

**0058 — l'avis de compilation : une roue, et passif** (2026-11-08, journal 476, `#650` ; `systemOverlay.cpp/.h`, `window/swapchain.cpp`, après 0057). Le porteur : « mettre le toast de la compilation shaders en haut à gauche et au lieu d'écrire du texte […] seulement un spinner avec à l'intérieur le nombre de shaders ». L'avis de 0045 (« Compilation des shaders : N », en bas à gauche) devient une roue de 48 px en haut à gauche (le panneau de performances est en haut à droite), le nombre au centre, réduit à trois et quatre chiffres. **Et il ne fait plus présenter d'images** : actif (`visual.active`), il demandait au fil de présentation de remontrer la dernière image à chaque vblank que le jeu laissait libre, et chaque shader changeait la révision : un jeu à 30 images/s en présentait jusqu'à 60 pendant les compilations (*Astro Bot* : 43 comptées ; *Clair Obscur* : 25,7 pour 9 vraies), deux fois le travail du GPU et de l'écran X. L'avis et celui des mesh shaders de 0046 sont désormais *passifs* (`SystemOverlayVisualState::passive`) : dessinés sur chaque image présentée, ils n'apparaissent et ne disparaissent que par la révision, et `NeedsSystemOverlayRefresh` ne les remontre que si rien n'a été présenté depuis 250 ms (la roue tourne encore, quatre fois par seconde, pendant un blocage). Au banc, *KH3* cache vide : la roue en haut à gauche (98, puis 162 shaders), 30 images/s présentées pendant les compilations. Kyty du serveur de dev reconstruit avec 0057 et 0058 (l'ancien binaire sur Gamebox, `-avant-0058`).

0026 à 0045 sont éprouvés sur le serveur, et au banc par le chemin du téléphone : le téléphone n'a pas le tas dma-buf (0001 coupe la mémoire unique).

**Le passage à `597137e`** (2026-10-26, `#487`) : 57 commits de l'éditeur. 0002 est rebasé
(le constructeur de `PipelineCache` préchauffe désormais le cache de shaders : le drapeau
barycentrique arrive avant), 0006 aussi (`ProtectTransient` prend un verrou partagé), et 0012
suit son code, passé de `renderDraw.cpp` à `PipelineCache::GetGraphicsPrograms`. Les autres
s'appliquent tels quels. *FF7 Remake* jusqu'à son écran-titre sur la dev ; au banc, par le chemin du
téléphone, *Neptunia ReVerse* jusqu'à son menu.

**Le passage à `91c5820`** (2026-11-04, journal 438) : 117 commits de l'éditeur. Un vrai `git rebase` de la pile, sept étapes à résoudre à la main sur 36 correctifs.

- **0020 tombe** : l'éditeur fait la même chose (« read back GPU-modified buffer memory in 512 KiB windows »).
- **0022 tombe** : `s_endpgm_ordered_ps_done` est chez lui.
- **Notre conversion indirecte des dessins mesh tombe** (`gpu_mesh_indirect.comp`, dans 0026) : son task shader (`gpu_mesh_indirect.task`) la remplace. 0018 y ajoute le groupe de départ du lancement (`MeshFirstGroupDword`), la charge utile passe à 7 mots. Une différence : un dessin mesh indirect dont le nombre est écrit par le GPU repasse par le processeur (`ResolveDrawEmit` rend `nullopt`).
- **0013** garde la taille exacte de l'éditeur pour l'AVC 8 bits (`MaxFrameBufferSize`), et la nôtre pour le 10 bits.
- **`ImageUsage::storage`**, retiré par l'éditeur, revient : `IsAliasedBufferWrite` s'en sert.
- **Le téléphone est porté le 2026-11-05** (journal 440) : `build.sh` sans option applique les patchs du serveur, puis 0001 à 0006, rebasés par-dessus. Paquet `kyty-2026-11-04+box64-d653d0ebe-forky-r1`.

Au banc sur la nouvelle base, sans plantage : *FF7 Remake* 60 images/s, *KH3* 30 à Thèbes (27-28 avant), *Tekken 8* Arena 14-15 (14), *Wukong* 22, *Clair Obscur* 7-8. Les caches de shaders repartent à zéro une fois.

**Le passage à `5eab0ec`** (2026-10-30) : 100 commits de l'éditeur. Il a mis en commun ses lectures
par un tampon choisi par le GPU : une fonction SPIR-V par sorte de lecture (bits, composantes,
cohérence, formatée), appelée par chaque instruction (« share formatted indirect buffer load
emission »), et sa lecture formatée n'y lit toujours qu'une composante. **0007 est rebasé** : la
conversion de chaque composante choisie et l'empaquetage D16 passent dans cette fonction, et le
nombre de composantes D16 entre dans sa clé (`IndirectBufferLoadKey`) — `D16_X` et `D16_XY`
remplissent le même DWORD. Les seize autres s'appliquent tels quels. *FF7 Remake* jusqu'à son
écran-titre sur la dev ; au banc, par le chemin du téléphone, *Neptunia ReVerse* et son intro.

**Le téléphone, à `6aaa533`** (2026-10-24) : `build.sh` sans option — les quinze patchs et
l'espace compact, appliqués tels quels. Au banc, par le chemin du téléphone
(`FORCE_NO_BARYCENTRIC=1`), *Neptunia ReVerse* arrive à son premier écran. Le bundle est
`kyty-2026-10-23+box64-d653d0ebe-forky-r1` : la même construction de Box64 qu'avant, seul
`kyty_emulator` change. `tools/box64/bundle.sh` copie quelques bibliothèques x86_64 d'un trixie
(`SHADPS4_BUILD_CONTAINER`) : le conteneur de construction de Kyty en est un.

| Fichier | Rôle |
|---|---|
| `0001-compact-address-space.patch` | l'option (27 lignes : `CMakeLists.txt`, `src/kernel/memory.h`, `src/kernel/memoryAddressSpace.inc`, `src/graphics/host_gpu/regionDefinitions.h`) |
| `0002-fragment-barycentric-optional.patch` | le chemin sans l'extension (56 lignes : `vulkanWindow.cpp`, `graphicContext.h`, `pipelineCache.cpp`, `ShaderRecompiler.h/.cpp`, `ShaderInfoCollection.cpp`) |
| `0003-loader-console-lines.patch` | les lignes du chargeur sur la console (13 lignes : `runtimeLinker.cpp`) |
| `0004-gpu-console-diagnostics.patch` | les choix GPU et la pile du planificateur inactif (38 lignes : `vulkanWindow.cpp`, `commandScheduler.cpp`) |
| `0005-fault-read-on-write-watched-page.patch` | le défaut « lecture » sur une page lisible traité en écriture (35 lignes : `pageManager.h/.cpp`, `renderContext.cpp`) |
| `0006-gpu-tracking-keeps-execute.patch` | le suivi GPU garde le droit d'exécution (31 lignes : `memoryAddressSpace.inc`, `pageManager.h/.cpp`, `renderContext.cpp`) |
| `0007-indirect-formatted-buffer-loads.patch` | les lectures formatées d'un tampon choisi par le GPU, de toute largeur (191 lignes : `ShaderIR.h`, `spirvEmitterInternal.h`, `spirvEmitterMemory.cpp`) |
| `0008-page-watchers-16-bits.patch` | le compteur d'observateurs d'une page sur 15 bits (`pageManager.cpp`) |
| `0009-descriptor-pools-fit-layouts.patch` | les pools de descripteurs à la taille des ensembles (`descriptorHeap.h/.cpp`, `shaders.cpp`) |
| `0010-dcc-both-independent-blocks.patch` | DCC en blocs indépendants de 64 et 128 octets (`pm4Handlers.cpp`) |
| `0011-color-metadata-flags-accepted.patch` | les drapeaux CMASK/DCC que Kyty n'émule pas, acceptés (`pm4Handlers.cpp`, `debug.cpp`) |
| `0012-invalid-color-targets-off.patch` | une cible COLOR_INVALID éteinte (`renderDraw.cpp`) |
| `0013-videodec-p010-for-10-bit-profiles.patch` | P010 pour un décodeur vidéo ouvert en 10 bits (`videoDec2Decoder.cpp/.h`, `libVideoDec2.cpp`, `libVdecsw.cpp`) |
| `0014-tiler-no-vector-selects-on-spec-constants.patch` | les constantes du découpeur GPU choisies par des branches (`gpu_tiler_standard64_3d.inc`, `gpu_tiler_prt.comp`, `gpu_tiler_prt_3d.comp`) |
| `0015-occlusion-queries-from-environment.patch` | `KYTY_OCCLUSION_QUERIES` dans l'environnement vaut `--occlusion-queries` (`main.cpp`) |
| `0016-shader-cache-from-environment.patch` | `KYTY_SHADER_CACHE` dans l'environnement vaut `--shader-cache`, et l'en-tête du cache porte la révision de Kyty (`main.cpp`, `pipelineSerialization.cpp`) |
| `0017-guest-exit-without-static-destructors.patch` | le `exit()` d'un jeu sort par `quick_exit`, comme une fenêtre fermée : les fils du jeu tournent encore (`libC.cpp`, `libKernel.cpp`, `#522`) |
| `0018-bound-color-targets-and-split-mesh-draws.patch` | seules les cibles que le dessin écrit sont vérifiées ; FMASK à un échantillon accepté ; un dessin mesh de plus de 65 535 groupes en plusieurs lancements (`debug.cpp`, `ShaderIR.h`, `Translate.cpp`, `renderDraw.cpp`) |
| `0020-readback-whole-gpu-modified-runs.patch` | une faute sur une page écrite par le GPU rapatrie la plage modifiée contiguë autour d'elle, 1 Mio au plus de chaque côté (`bufferCache.cpp`, `#610`) |
| `build.sh` | construit `kyty_emulator` à la version du serveur, avec les patchs, sans lanceur Qt, dans un conteneur trixie gardé ; `--server` : la construction du serveur (0007 et suivants, sans l'espace compact) |
| `bench.sh`, `bench/` | l'essai sur x86_64 dans l'image PS5 du serveur : notre construction contre le Kyty officiel |

## Mettre à jour quand l'éditeur publie une version

1. **La version** : `ARG KYTY_RELEASE=…` dans
   `src/microservices/runtimes/streamex/consoles/ps5/Dockerfile` (le script la lit là).
2. **Construire** : `tools/kyty/build.sh <sortie>`. Si un patch ne s'applique plus, le script
   tente une fusion à trois voies et le dit ; s'il s'arrête, rebaser ce patch-là (un clone à la
   version, les autres patchs appliqués avant lui, `git diff > <son nom>.patch`) :
   - 0001 : les quatre constantes (`kExtendedMemoryBase`/`Size`, `HOST_USER_MAX`,
     `TRACKER_ADDRESS_SIZE`, `LOWER_ADDRESS_SIZE`) gardent leur règle — **base étendue = point de
     pliage**, tout sous 2³⁹ ;
   - 0002 : le drapeau (`graphics.fragment_shader_barycentric_enabled`, la valeur que Kyty
     calcule déjà dans `VulkanCreateDevice`) arrive au recompilateur avant le premier shader ;
     sans lui `CollectPixelInputs` ne marque aucun paramètre *per-vertex*, et la boucle des
     entrées intégrées n'ajoute pas `gl_BaryCoord*` ;
3. **Essayer** : `tools/kyty/bench.sh <sortie>/kyty_emulator "<bibliothèque>/roms/ps5/Richman 11"`
   — même écran que le Kyty officiel. Puis `FORCE_NO_BARYCENTRIC=1 tools/kyty/bench.sh …` : le
   même écran encore, par le chemin du téléphone (le parcours `compact` seul). Pour lire les lignes
   LOGF de Kyty (« Select device », « Vulkan fragment shader barycentric: … »), muettes par défaut :
   `KYTY_ARGS="--printf-direction Console"` (le nom de l'énumération, majuscule comprise).
4. **Livrer au serveur** : `tools/kyty/build.sh --server <sortie>`, copier `<sortie>/kyty_emulator`
   dans `<bibliothèque>/cores/ps5/` sous le nom `kyty_emulator-gameflex-<KYTY_RELEASE>`, puis
   relancer une partie : l'image le pose au lancement par-dessus celui de l'éditeur s'il est là
   (`consoles/unpack-emulator.sh`), et le journal de la partie le dit. Aucune reconstruction.
5. **Sa source** : une ligne dans `tools/gpl-sources/manifest.tsv` (le commit amont, celui de ce
   dépôt qui l'a construit). Le registre et ces correctifs partent dans le dépôt public `gameflex`,
   le seul endroit de leur code : pas de `src/` dans les bibliothèques (chantier 34, `#640`).
