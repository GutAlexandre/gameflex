# Son depuis l’URL publique

Le correctif TV précédent ne suffisait pas : le transport de secours HTTPS
transportait déjà les paquets Opus, mais GatewayWebRTC rejetait tous les paquets
qui n’étaient pas vidéo (`kind !== 0`). Quand UDP/WebRTC ne passe pas, une piste
annoncée ou un compteur réseau ne prouvent donc pas un son effectivement lu.

Le lecteur décode désormais les paquets audio du même canal HTTPS et programme
leur PCM dans Web Audio. JSNES/binjgb ne sont pas impliqués dans ce chemin : le
jeu continue de tourner sur le serveur. Le décodeur Opus 0.7.12 est embarqué et
servi par GameFlex, avec licences, provenance et SHA-256 dans `public/audio/`.
Il ne dépend pas de l’API AudioDecoder, absente de certains Safari.

L’autorisation d’autoplay et le choix de couper le son restent distincts. Un
refus d’autoplay ne désactive plus le réglage de son de la partie. Une commande
« Activer le son » et les gestes de jeu reprennent la lecture. La commande est
proposée dès la réception de la piste, même si le navigateur ne déclenche jamais
l’événement `playing` sur l’élément audio initialement muet. Web Audio est
repris directement pendant le geste, avant les attentes asynchrones du décodeur.
La session audio Safari, quand cette API existe, utilise le type `playback`,
puis retrouve son type précédent à la fermeture ou à la coupure volontaire.
Voir le [suivi WebKit](https://bugs.webkit.org/show_bug.cgi?id=237322).

Le son WebRTC est coupé dès que le transport PCM prend le relais. Les sources et
le décodeur sont libérés au retour à WebRTC et à la fermeture. Les tampons de
chargement et de lecture sont bornés pour éviter l’accumulation de vieux sons.
Le service worker passe à la version 50 et met aussi le décodeur en cache.

## Reproduction et tests

Les tests utilisent uniquement une tonalité sinusoïdale originale de 440 Hz et
une mire générées avec le ffmpeg déjà présent dans l’image du runtime. Aucun
jeu, BIOS ou fichier audio tiers n’est téléchargé. Le producteur de test a une
session isolée et une clé interne limitée à cette session ; il est supprimé à
la fin. Aucune bibliothèque, préférence ni sauvegarde personnelle n’est changée.

Le navigateur de test est Chromium avec écran tactile 390 × 844, sur l’origine
HTTPS publique réelle. Les API, la passerelle et le relais HTTPS sont réels ;
seuls le point d’entrée du harnais et ses fichiers sont fournis par Playwright.
Le mode de reproduction force ICE en relais sans TURN pour empêcher WebRTC.
Ce test ne vaut pas un essai sur un iPhone physique.

L’ancien lecteur reçoit plus de 600 paquets audio sans créer de sortie Web Audio.
Le nouveau décode des échantillons d’énergie non nulle, reste suspendu avant le
geste, puis programme effectivement le son après toucher. Les contrôles couvrent
la coupure volontaire, la reprise et la fermeture des AudioContext. Le même
parcours passe sans AudioDecoder ni VideoDecoder. Les tests unitaires couvrent
les files bornées, les paquets invalides, les chargements tardifs et la restitution
du type de session audio.

Pour rejouer sur l’installation de développement autorisée :

```sh
python3 tests/pi-tv/generate-audio-probe.py
git show a6b03c6:src/webapp/src/app/gameflex/stream/shared/GatewayWebRTC.jsx > .local/audio-fix/Gateway-before.jsx
AUDIO_BEFORE=.local/audio-fix/Gateway-before.jsx node tests/pi-tv/build-audio-harness.mjs
node tests/pi-tv/build-audio-harness.mjs
node tests/pi-tv/run-playstation-tests.cjs
python3 tests/pi-tv/run-public-audio-check.py --live
```

`--live` active explicitement la source de test éphémère sur la passerelle gérée.
L’identité d’administration passe uniquement par l’entrée standard du processus
de test, jamais par une commande, une capture ou le journal. Les résultats sont
dans `.local/audio-fix/results/public-audio.json`.


Le parcours WebRTC direct passe aussi : élément audio prêt, non muet, en lecture,
volume 1, paquets reçus et énergie audio décodée non nulle. Aucun lecteur PCM de
secours n’est actif en parallèle. Un premier essai a permis de reproduire le
blocage supplémentaire de l’élément audio avant son premier événement `playing` ;
le bouton proposé dès la piste corrige ce cas.


Validation finale : quatre variantes passent (ancien lecteur reproduit, nouveau
lecteur HTTPS, sans décodeurs WebCodecs, puis WebRTC direct). Le cas HTTPS a
programmé 109 920 échantillons après le geste, sans erreur de décodage ; le cas
sans WebCodecs, 81 600. WebRTC a décodé une énergie audio non nulle, avec élément
actif, volume 1 et sans second transport audio. Les tests unitaires et la suite
console passent. Les essais utilisent Chromium ; aucun résultat sur iPhone
physique n’est affirmé.


La première publication a été annulée automatiquement par la vérification des
empreintes : le minimiseur Webpack retraitait le fichier tiers déjà minifié. Le
test sonore passait, mais l’artefact différait du manifeste épinglé. Le fichier
est maintenant marqué `minimized` dans CopyWebpackPlugin pour conserver les
octets et le crédit amont. La version précédente a été restaurée pendant la
reconstruction ; le contrôle compare désormais source, build et URL publique.

Le cache est à nouveau renouvelé après la publication annulée, pour éviter de
conserver un artefact de cette tentative.
