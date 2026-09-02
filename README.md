# Mensonges Publics

Outil **local** pour lister des mensonges de personnalités publiques (avec sources) et publier facilement un tweet prérempli sur X.

Le dépôt GitHub sert de **sauvegarde** : pas besoin d’héberger le site en ligne.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez http://localhost:4321

## Ajouter un mensonge

1. Créez un fichier Markdown dans `src/content/mensonges/` (ex. `nouveau-cas.md`).
2. Remplissez le frontmatter :

```yaml
---
title: "Titre court du mensonge"
personality: Nom de la personnalité
date: 2026-04-01
summary: Une phrase qui résume pourquoi c’est trompeur.
quote: La citation exacte (optionnel)
sources:
  - label: Nom de la source
    url: https://exemple.org/article
---
```

3. Rédigez le contexte sous le frontmatter.
4. Sauvegardez sur GitHub (voir ci-dessous).

## Bouton « Publier sur X »

Sur chaque page détail, le bouton ouvre un tweet prérempli (personnalité, titre, citation, première source). Connectez-vous à votre compte X, puis validez — **gratuit, sans clé API**.

## Sauvegarder sur GitHub

Après vos modifications :

```bash
git add .
git commit -m "Ajoute un mensonge"
git push
```

Repo : https://github.com/Kivvi59/mensonges-publics

## Scripts

| Commande          | Rôle                   |
|-------------------|------------------------|
| `npm run dev`     | Serveur de travail     |
| `npm run build`   | Build (optionnel)      |
| `npm run preview` | Prévisualiser le build |
