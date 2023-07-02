# Web Site Builder

[This page in english.](README.md) [Accueil](../LISEZMOI.md)

Ce dossier contient le programme de génération du site depuis la base de données locale.

WSBuilder est disponible pour Windows et Mac. Il doit être exécuté depuis ce dossier sur votre ordinateur en conservant l'arborescence du dépôt de code.

Le programme sert pour alimenter le site delphi-books.com mais peut aussi servir en local pour tester des modifications sur la base de données ou les modèles de pages.

**Attention** : si vous faites un PULL REQUEST, les modifications issues de ce programme seront rejetées. Si vous modifiez la base de données envoyez les changements sans passer par WSBuilder !

## Pour Windows

Exécutez simplement le fichier DelphiBooksWebSiteBuilder.exe

## Pour Mac

Décompressez le fichier DelphiBooksWebSiteBuilder-Mac.zip dans le même dossier pour obtenir l'application, puis cliquez dessus pour la lancer.

## Mode d'emploi

!(WSBuilder main screen)[images/main-screen.jpg]

### A propos du programme

Le bouton "about" affiche les informations de version et de copyright du programme.

### Construire le site

!(WSBuilder build screen)[images/builder-screen.jpg]

Le bouton "build" déclenche la mise à jour (locale) du site web.

Il charge :
- la base de données depuis le dossier /database/datas
- les modèles de pages depuis le dossier /site-templates/templates

Il contrôle et complète la base de données.

Il enregistre :
- les fichiers du site (html, json, xml, jpg, ...) dans le dossier /docs (pour l'hébergement sur GitHub Pages)
- les éléments modifiés de la base de données

### Sortir du programme

Utilisez le bouton "Close" pour quitter ce programme.
