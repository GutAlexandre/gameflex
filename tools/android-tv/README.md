# GameFlex TV 0.4.0

Les sources de l'application TV existante ont été copiées depuis le travail local
sans modifier les originaux. L'identité de signature doit être celle de l'installation
existante (`GAMEFLEX_TV_SIGNING_DIR`), sinon la mise à jour est refusée par Android.
Aucune clé, aucun mot de passe et aucun jeton ne doivent être ajoutés au dépôt.

Après l'association ou la restauration de sa session, la TV ouvre désormais
l'interface commune du serveur en mode TV (`/?tv=1`). Elle bénéficie donc des
consoles, des icônes et de la manette téléphone de la version web, sans garder une
seconde bibliothèque différente dans l'APK. L'ancienne page locale reste disponible
pour l'association initiale et les erreurs de connexion.

Le pont JavaScript traduit seulement la télécommande vers les commandes de l'interface.
Il n'expose aucune commande système. Le contrôle de l'origine et la vérification TLS
restent actifs. Le lecteur et les entrées de jeu existants sont conservés.
Le retour de la partie utilise la navigation de l'application commune et ses réglages
habituels de session/sauvegarde.

`build.py` utilise le SDK déjà présent, sans téléchargement ni installation système.
`device.py install --tv-free` exige l'identité physique épinglée, sauvegarde l'APK
installée et vérifie la signature avant une mise à jour `pm install -r` (données conservées).
Ne lancer l'application qu'à la demande de l'utilisateur et si aucune lecture n'est en cours.

MENU ouvre le centre de contrôle de l'interface commune. Les fenêtres standard
reçoivent une navigation directionnelle de repli, limitée à la fenêtre visible.
Sur la page locale d'association, MENU conserve l'accès à la configuration serveur.


Au démarrage, une fenêtre propose le serveur mémorisé ou **Sur cette TV**.
L’option « mémoriser » permet de ne plus présenter cette fenêtre ; la configuration
reste accessible ensuite. Passer en local conserve l’adresse du serveur.
La connexion n’est enregistrée qu’après vérification de l’API du serveur.

Sans serveur, trois machines sont disponibles : NES, Game Boy et Game Boy Color.
L’import passe par le sélecteur Android (clé USB ou stockage choisi par la personne).
Les fichiers .nes, .gb et .gbc non compressés sont vérifiés et copiés dans le stockage
privé de l’application (8 Mio maximum). Aucun jeu, BIOS ou firmware n’est fourni,
cherché ou téléchargé. Réimporter le même fichier ne crée pas de doublon.
Les points de sauvegarde sont locaux, enregistrés à la pause et toutes les 30 secondes.
Une nouvelle partie garde une copie du précédent point. Désinstaller l’application
efface ces données ; une mise à jour conserve le stockage Android.
Une manette USB/Bluetooth est recommandée. La manette téléphone et les autres
consoles nécessitent le serveur ; ils ne sont pas simulés dans le mode hors ligne.

Les moteurs embarqués sont JSNES 2.1.0 (Apache-2.0) et binjgb, révision
16621111ed0ee73bcc45c912a823bcebedcffc0f (MIT). Leurs licences et les empreintes
des ressources sont dans `assets/local/vendor/`. La compatibilité dépend du moteur
et de la cartouche, en particulier pour la Game Boy Color ; le sélecteur ne promet
pas une compatibilité universelle. Aucun téléchargement au lancement du moteur.
Le logo provient de l’application et les trois icônes du pack de 74 fourni par
l’utilisateur, sans retouche ; leur provenance reste décrite dans
`assets/console-icons-pack/` et le manifeste du pack.

Le mode local utilise une WebView isolée : seul le domaine virtuel gameflex.local
sert les ressources de l’APK. Les autres requêtes sont refusées. Le pont d’import
et de sauvegarde n’est jamais attaché à une page du serveur.

Le son en streaming ne force plus le mode muet dans la WebView TV lorsqu’une
commande de télécommande n’a pas créé de geste tactile JavaScript. Le choix
volontaire de couper le son et les restrictions des navigateurs ordinaires restent
respectés.

Avant installation ou lancement, `device.py` vérifie aussi l’occupation de la TV.
Une application au premier plan est considérée occupée même sans session média.
Le drapeau `--tv-free` ne contourne pas cette vérification.
