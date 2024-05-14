# Delphi-Books.com

[This page in english.](README.md)

Source et service d'hébergement du site [Delphi-Books.com](https://delphi-books.com).

Le site propose une [API REST très simple](https://delphi-books.com/opendata.html) en tant que données ouvertes (open data). Vous pouvez l'utiliser à des fins éducatives (utilisation d'API REST) ou l'inclure dans vos projets autour des langages de programmation Delphi et Pascal.

[Delphi-Books.com](https://delphi-books.com) est un projet communautaire. Son contenu dépend de vous.

## Mises à jour de la base de données

Pour ajouter ou éditer des livres sur Delphi, Free Pascal, Lazarus, Code Typhon, d'autres environnements de programmation ou le langage Pascal, faites un fork de ce dépôt de code et utilisez [ce programme](database/LISEZMOI.md) pour en modifier la base de données. Il permet d'ajouter, modifier ou supprimer des livres, éditeurs et auteurs. Une fois vos modifications effectuées transmettez un PULL REQUEST des changements. Merci de faire un COMMIT par modification (par livre ajouté ou par auteur, livre, éditeur modifié).

Si vous ajoutez des traductions des textes à l'aide de logiciels ou services en ligne, indiquez leurs références et leur copyright car certains n'autorisent pas la diffusion des textes traduits.

Quoi que vous fassiez, assurez-vous que vous avez le droit d'utiliser et publier les données que vous saisissez.

Toute donnée (textes, images, ...) ajoutée au projet devient publique et réutilisable par le site Internet [Delphi-Books.com](https://delphi-books.com) mais aussi tout utilisateur de son API ou de la base de données NoSQL depuis le dépôt conformément à sa licence d'utilisation.

## Génération du site web

Le site Internet est généré par [ce programme](site-builder/LISEZMOI.md). Utilisez-le pour tester d'éventuelles modifications dans les [templates du site](site-templates/LISEZMOI.md).

Toute modification des templates doit avoir fait l'objet d'[un ticket](https://github.com/DeveloppeurPascal/DelphiBooks-WebSite/issues) ou d'[une discussion](https://github.com/DeveloppeurPascal/DelphiBooks-WebSite/discussions) et avoir été approuvée au préalable. Sans ça vos demandes de PULL REQUEST seront rejetées.

Aucune modification du dossier "docs" ne sera prise en compte en dehors de la génération automatique du site par un membre de l'équipe de maintenance du dépôt.

## Comment demander une nouvelle fonctionnalité, signaler un bogue ou une faille de sécurité ?

Si vous voulez une réponse du propriétaire de ce dépôt la meilleure façon de procéder pour demander une nouvelle fonctionnalité ou signaler une anomalie est d'aller sur [le dépôt de code sur GitHub](https://github.com/DeveloppeurPascal/DelphiBooks-WebSite) et [d'ouvrir un ticket](https://github.com/DeveloppeurPascal/DelphiBooks-WebSite/issues).

Si vous avez trouvé une faille de sécurité n'en parlez pas en public avant qu'un correctif n'ait été déployé ou soit disponible. [Contactez l'auteur du dépôt en privé](https://developpeur-pascal.fr/nous-contacter.php) pour expliquer votre trouvaille.

Vous pouvez aussi cloner ce dépôt de code et participer à ses évolutions en soumettant vos modifications si vous le désirez. Lisez les explications dans le fichier [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Ce projet est distribué sous licence [MIT license](https://choosealicense.com/licenses/mit/).

Les données fournies sont des données publiques. Elles peuvent être utilisées en direct (en spécifiant la provenance "delphi-books.com") ou par l'intermédiaire de l'[API du site Internet](https://delphi-books.com/opendata.html).

Les couvertures de livres sont la propriété des éditeurs (et/ou des auteurs des livres selon les cas). Elles ne doivent être utilisées que dans le cadre de la promotion des livres ou pour illustrer un article ou un commentaire sur le livre dont la couverture est utilisée.

Pour signaler une infraction au droit d'auteur (DMCA), merci de passer par [ce formulaire de contact](https://developpeur-pascal.fr/nous-contacter.php).

## Supportez ce projet et son auteur

Si vous trouvez ce dépôt de code utile et voulez le montrer, merci de faire une donation [à son auteur](https://github.com/DeveloppeurPascal). Ca aidera à maintenir le projet (codes sources et binaires).

Vous pouvez utiliser l'un de ces services :

* [GitHub Sponsors](https://github.com/sponsors/DeveloppeurPascal)
* [Liberapay](https://liberapay.com/PatrickPremartin)
* [Patreon](https://www.patreon.com/patrickpremartin)
* [Paypal](https://www.paypal.com/paypalme/patrickpremartin)

ou si vous parlez français vous pouvez [vous abonner à Zone Abo](https://zone-abo.fr/nos-abonnements.php) sur une base mensuelle ou annuelle et avoir en plus accès à de nombreuses ressources en ligne (vidéos et articles).

## Langues du projet et traduction des textes

Par défaut le projet est géré en français et en anglais. Si vous désirez intervenir, merci d'utiliser l'une de ces langues.

Si vous avez besoin de traduire quelque chose, nous recommandons l'utilisation de [DeepL](https://www.deepl.com) (pour sa qualité) ou [Libre Translate](https://libretranslate.com) (projet libre et open source).

Pour tout document traduit par un système automatisé à destination de la base de données du site, veuillez faire une relecture par quelqu'un connaissant la langue concernée.
