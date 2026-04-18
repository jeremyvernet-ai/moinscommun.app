# Moins Commun — projet prêt pour Codemagic

## Ce pack contient
- web/index.html
- web/podcasts.json
- package.json
- capacitor.config.ts
- codemagic.yaml

## Étapes
1. Crée un nouveau dépôt GitHub
2. Mets tout le contenu de ce dossier à la racine du dépôt
3. Push sur GitHub
4. Connecte le dépôt à Codemagic
5. Lance d'abord le workflow `android-release`

## Android
Le workflow Android :
- installe les dépendances
- copie `web/` vers `dist/`
- ajoute Android si nécessaire
- synchronise Capacitor
- génère un `.aab`

## iOS
Le workflow iOS prépare le projet mais il faudra ensuite :
- configurer ton compte Apple Developer dans Codemagic
- ajouter les certificats / profils ou l'intégration App Store Connect
- compléter le workflow pour sortir un IPA signé

## Podcasts
Pour ajouter une émission :
- modifie seulement `web/podcasts.json`
- commit/push
- relance un build si besoin
