# Android TV 0.4.0 — préparation et validation

La version propose au démarrage un serveur GameFlex ou un mode hors ligne NES,
Game Boy et Game Boy Color. Le serveur mémorisé est conservé si le mode local est
choisi. Aucun jeu ni BIOS n’est fourni ou téléchargé. Les fichiers d’émulation sont
embarqués avec leurs licences et empreintes. Voir `tools/android-tv/README.md`.

## Son

Cause reproduite dans le code : GatewayWebRTC imposait le mode muet quand
`navigator.userActivation.hasBeenActive` était faux. Les commandes natives de la
TV sont transmises en JavaScript et ne donnent pas cette activation. La WebView
Android autorise pourtant explicitement la lecture sans geste. La correction
respecte cette permission dans l’application TV, tout en conservant la coupure
volontaire du son et les protections d’autoplay des navigateurs ordinaires.

L’audit en lecture seule de la Philips n’a pas relevé de coupure du flux musique :
sortie haut-parleur, volume 78/100, non muet. Cela ne prouve pas une sortie audible
pendant une partie : aucun jeu ni son de test n’a été lancé sur la TV occupée.

## Vérifications

- Chromium : configuration du serveur mémorisé, refus d’une adresse vide,
  navigation directionnelle, choix du mode local et bibliothèque vide.
- Moteurs réels JSNES et binjgb : trois programmes de test originaux générés dans
  les tests, un pour NES, GB et GBC. Aucun jeu tiers utilisé.
- Pour chaque moteur : plus de 40 images, AudioContext actif, échantillons audio
  d’énergie non nulle, pause libérant les touches, sauvegarde puis restauration
  exacte de l’état vérifié, sans requête distante.
- LocalRomTest : formats NES/GB/GBC, fichiers tronqués, taille maximale, identité
  par contenu et identifiants de sauvegarde bornés.
- Six tests du contrôle d’occupation : une application silencieuse au premier
  plan bloque aussi l’installation ; accueil inactif et veille sans média permis.
- Suite console existante : migrations des 22 anciens modes, rubriques,
  chargement et titres ; 74 icônes ; reconnexion manette HTTP ; QR et préremplissage ;
  nouvelle régression d’autoplay TV et protection des navigateurs.
- Cinq empreintes des moteurs et licences vérifiées.
- Build web de production réussi en 275 secondes (avertissements de taille des
  bundles et de configuration ESM, aucune erreur). Compilation de validation
  effectuée avant le commit : métadonnées du parent ; reconstruire avec le SHA
  final avant tout déploiement. Aucun bundle de validation publié.
- APK 0.4.0 / code 7 compilée, signature identique à l’installation précédente.
- 416 fichiers de travail d’origine, 20 fichiers natifs d’origine et 68 fichiers
  d’interfaces archivées : empreintes inchangées.

## Déploiement et limites

La Philips est éveillée avec une autre application au premier plan. Installation,
lancement et déploiement sont différés à la demande de l’utilisateur. Aucun volume,
routage audio, application ou réglage Android n’a été changé.

Le sélecteur de fichiers Android, les performances sur la Philips et le résultat
sonore physique doivent être vérifiés une fois la TV libre. Les tests Chromium
valident les moteurs et les signaux logiciels, pas les haut-parleurs physiques.
Le correctif web de streaming doit également être déployé pour bénéficier du
nouveau comportement GatewayWebRTC. La production reste sur la version précédente.


## Mise en service après confirmation de disponibilité

L’utilisateur a confirmé que la TV était disponible. L’autre lecteur était en
pause (aucune lecture active) ; retour à l’accueil puis installation de la 0.4.0
par `pm install -r`, signature contrôlée et ancienne APK sauvegardée. Le contrôle
d’occupation reconnaît désormais les activités d’un même paquet déclaré HOME,
ce qui prend en compte l’accueil LoutreTV ; huit tests passent.

Sur la Philips : lancement à froid, fenêtre de configuration, navigation par la
croix et OK, choix local, retour au serveur avec son adresse conservée. Session
existante conservée lors de la connexion au serveur. Pas de fichier personnel
importé et pas de modification du volume.

Le web 0.4.0, révision 5f52b2348333be38da0769c89772c500d0d1e3c4, a été reconstruit
avec les métadonnées correctes, vérifié sur un conteneur de contrôle puis déployé.
Vérification publique : accueil, paramètres avancés, Archives, bundle et service
worker ; 74 icônes vérifiées. Kernel, credential, gateway et experience : mêmes
conteneurs et mêmes démarrages. Ancien web conservé pour retour arrière.

Essai de lancement sur TV : piste audio reçue, compteur d’octets audio croissant,
élément audio prêt et actif sans mute, sortie AudioTrack démarrée par Android.
L’audibilité physique reste à confirmer par l’utilisateur. Le test révèle aussi
un blocage vidéo H264 distinct : paquets reçus mais « No PPS with id 0 received »
et aucune image décodée. Le serveur LAN HTTP n’active pas le secours WebCodecs.
Ce blocage n’est pas déclaré résolu. Retour à la bibliothèque après l’essai.
