# Mon Site React

Site web créé avec ReactJS et déployé sur GitHub Pages.

## Installation

```bash
npm install
```

## Développement

Démarrer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Build

Créer une version de production :

```bash
npm run build
```

## Déploiement

Le déploiement se fait automatiquement quand tu pushs sur la branche `main`.

### Configuration manuelle :

1. **Sur GitHub** : Va à Settings > Pages > Source > Deploy from a branch > Sélectionne `gh-pages`
2. **Ton site sera disponible** sur : `https://tonnom.github.io/yanis_sv`

### Pour déployer manuellement :

```bash
npm run deploy
```

## Étapes pour mettre en ligne

1. **Crée un dépôt GitHub** nommé `yanis_sv`
2. **Pousse le code** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tonnom/yanis_sv.git
   git push -u origin main
   ```
3. **Active GitHub Pages** dans les paramètres du dépôt

Voilà ! 🚀
