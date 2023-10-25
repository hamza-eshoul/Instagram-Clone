## Projet Instagram Clone

[![en](https://img.shields.io/badge/lang-en-red)](README.md)

Ce dépôt comprend le Full Stack projet final Javascript créé pour [Odin Project](https://www.theodinproject.com/).

L'objectif du projet est de reproduire au plus près notre site web préféré en utilisant le framework React JS pour la partie frontend et la plateforme Firebase de développement d'applications mobiles et web pour la partie backend.

Le site Web que j’ai choisi de reproduire est le site Web de la plateforme de médias sociaux Instagram.

- Lien du projet - https://skynter-instagram-clone.onrender.com/

## Page d'accueil

![Homepage Screenshot](/screenshots//Homepage-screenshot.png)

## Post Instagram

![Article's Page Screenshot](/screenshots//Instagram-post-screenshot.png)

## Version Mobile

![Mobile Version Screenshot](/screenshots/Mobile-Version%20screenshot.png)

## Technologies Utilisées

- Cloud Firestore
- Firebase Storage
- Firebase Authentication
- ReactJS
- Tailwind CSS

## Principales Fonctionnalités

- Authentification à travers le service Firebase Authentication.
- Création / Suppression de Posts
- Création de commentaires associés aux posts
- Interface de recherche d'utilisateurs en temps réel
- Interface Utilisateur Responsive

## Installation

Pour exécuter le projet localement sur votre machine :

- Accédez au dossier du projet et exécutez la commande suivante pour générer un serveur local de développement :

```
npm start
```

- Ouvrez http://localhost:3000 avec votre navigateur pour accéder à la version locale du frontend de votre projet

- L'essentiel des fonctionnalités backend de Firebase sont comprises dans des hooks React JS personnalisés figurant au niveau du dossier hooks qui se trouve dans le dossier src du projet.

- Les principaux hooks personnalisés de Firebase sont les hooks useFirestore et useCollection.

- Le hook useFirestore inclut des fonctions réutilisables pour ajouter, mettre à jour et supprimer des documents dans la base de données Cloud Firestore.

- Le hook useCollection récupère, en temps réel, tous les documents d'une collection de la base de donnée Cloud Firestore.
