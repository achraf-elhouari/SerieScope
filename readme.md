# SérieScope

Application web sur une seule page qui permet de parcourir un catalogue de séries et de documentaires, de chercher une série par son nom, de filtrer par genre et d'ajouter une nouvelle série.

Projet réalisé pour une médiathèque, en travail individuel (du 09 au 13 novembre 2026).

## Fonctionnalités

- Affichage du catalogue sous forme de cartes (affiche, titre, genres, description)
- Récupération des 20 premières séries depuis l'API TVmaze avec `fetch()`
- Recherche par nom (partiel, sans tenir compte des majuscules/minuscules)
- Filtre par genre (liste construite à partir des genres du catalogue, option « Tous les genres »)
- Recherche et filtre combinés
- Bouton « Réinitialiser » qui rétablit le catalogue complet
- Message « Aucune série trouvée » quand il n'y a aucun résultat
- Formulaire d'ajout d'une série (nom et au moins un genre obligatoires)
- Mise à jour de la page sans rechargement après chaque ajout ou changement de filtre
- Affiche de remplacement quand une série n'a pas d'image
- Interface responsive (mobile, tablette, ordinateur)

Les séries ajoutées sont gardées dans un tableau JavaScript : elles disparaissent quand on recharge la page.

## Technologies

- HTML5
- Tailwind CSS
- JavaScript Vanilla (modules ES)

## API utilisée

[TVmaze API](https://www.tvmaze.com/api) : API publique et gratuite, sans clé.

Requête utilisée au chargement de la page :

```
GET https://api.tvmaze.com/shows?page=0
```

Propriétés de la réponse utilisées pour les cartes :

| Donnée | Propriété |
|---|---|
| Titre | `name` |
| Langue | `language` |
| Statut | `status` |
| Genres | `genres` (tableau) |
| Affiche | `image.medium` (objet imbriqué) |
| Description | `summary` |

Seules les 20 premières séries de la réponse sont gardées.

## Structure du projet

```
SerieScope/
├── index.html
├── README.md
├── css/
│   └── output.css        (fichier généré par Tailwind)
├── script/
│   ├── main.js           (événements, recherche, filtre, formulaire)
│   ├── affichage.js      (création des cartes et des options)
│   ├── data.js           (tableau des séries et liste des genres)
│   └── fetch.js          (appel à l'API)
└── assets/
    └── (images, affiche de remplacement)
```

## Lancer le projet

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/VOTRE-NOM/SerieScope.git
   cd SerieScope
   ```
2. Installer les dépendances (si le projet utilise Tailwind en local) :
   ```bash
   npm install
   ```
3. Générer le CSS avec Tailwind (à laisser tourner pendant le développement) :
   ```bash
   npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css --watch
   ```
4. Ouvrir `index.html` avec un serveur local, par exemple l'extension **Live Server** de VS Code (clic droit sur `index.html` puis « Open with Live Server »).

Il faut passer par un serveur local : le navigateur bloque les modules JavaScript quand on ouvre le fichier directement.

Une connexion internet est nécessaire pour récupérer les séries depuis l'API.

## Organisation du travail

- **GitFlow** : branches `main` et `develop`, avec des branches de fonctionnalités (`feature/layout`, `feature/fetch-shows`, `feature/filter-by-genre`, `feature/add-show`). Les fonctionnalités sont intégrées par Pull Request, sans commit direct sur `main` ni `develop`.
- **Jira** : tâches organisées dans le projet SER avec les statuts À faire, En cours, En revue et Terminé.
- **Figma** : zoning et maquettes desktop et mobile.

## Auteur

[Achraf El Houari]