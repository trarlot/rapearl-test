# Installation et démarrage de l'application avec Docker

Ce guide vous explique comment installer et démarrer une application provenant de GitHub en utilisant Docker.

1. **Clonez le dépôt GitHub** : Utilisez la commande suivante pour cloner le dépôt GitHub contenant l'application :

    git clone <URL_du_dépôt>

2. **Construisez l'image Docker** : Utilisez la commande suivante pour construire l'image Docker à partir du Dockerfile :

    docker build -t nom_de_votre_image .

3. **Exécutez le conteneur Docker** : Une fois que l'image Docker est construite, exécutez un conteneur à partir de cette image en utilisant la commande suivante :

    docker run -p 3000:3001 nom_de_votre_image

4. **Accédez à votre application** : Ouvrez un navigateur Web et accédez à `http://localhost:3000` pour utiliser votre application.
