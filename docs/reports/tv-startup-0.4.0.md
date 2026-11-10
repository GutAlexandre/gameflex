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
