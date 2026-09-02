# Mensonges Publics

Site statique listant des mensonges de personnalités publiques, avec sources et bouton pour publier un tweet prérempli sur X.

Stack : **Astro** · hébergement gratuit : **Cloudflare Pages**.

## Développement local

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
4. Committez et poussez : Cloudflare republie le site.

## Bouton « Publier sur X »

Sur chaque page détail, le bouton ouvre [l’intent tweet](https://developer.x.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent) avec un texte prérempli + le lien de la page. Connectez-vous à votre compte X, puis validez — **gratuit, sans clé API**.

Mettez à jour `site` dans `astro.config.mjs` avec votre vraie URL Cloudflare pour que les liens du tweet soient corrects.

## Déployer sur Cloudflare Pages (gratuit)

1. Poussez ce dépôt sur GitHub (ou GitLab).
2. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → connectez le dépôt.
3. Réglages de build :
   - **Framework preset** : Astro
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Node version** : `22` (variable d’environnement `NODE_VERSION=22` si besoin)
4. Déployez. L’URL ressemblera à `https://mensonges-publics.pages.dev`.
5. Remplacez `site` dans `astro.config.mjs` par cette URL (ou votre domaine custom), puis redéployez.

## Scripts

| Commande        | Rôle                |
|-----------------|---------------------|
| `npm run dev`   | Serveur de dev      |
| `npm run build` | Build production    |
| `npm run preview` | Prévisualiser le build |
