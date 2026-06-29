---
title: "Fonctionnement de Kimi WebBridge"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Fonctionnement de Kimi WebBridge - Centre d'aide Kimi"
  description="Découvrez comment Kimi WebBridge connecte votre navigateur aux agents IA en local, permettant une navigation web sécurisée, des clics, des captures d'écran et bien plus."
  ogType="article"
/>

# Fonctionnement de Kimi WebBridge

## Déroulement

Kimi WebBridge fonctionne de la manière suivante :

1. **Service de pont local** : un service local s'exécute sur votre ordinateur pour recevoir les instructions de l'Agent
2. **Extension de navigateur** : exécute des actions précises dans le navigateur via le Chrome DevTools Protocol
3. **Isolation de sécurité** : toute l'exécution se déroule en local — vos sessions de connexion et le contenu des pages web ne quittent jamais votre appareil

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Interface de l'extension

Cliquez sur l'icône WebBridge dans la barre d'outils du navigateur pour vérifier l'état actuel de la connexion :

**Connecté** : WebBridge fonctionne correctement et peut collaborer avec l'Agent.

**Déconnecté** : vérifiez votre configuration ou relancez la commande de connexion.

<Frames
  src="./images/connection.png"
  alt="WebBridge Connection"
/>

## Fonctionnalités

| Fonctionnalité | Description |
|---------|-------------|
| Navigation web | Ouvre automatiquement les URL indiquées |
| Clic sur les éléments | Simule des clics sur les boutons, liens et autres éléments d'une page |
| Remplissage de formulaires | Saisit automatiquement du texte et sélectionne des options |
| Captures d'écran | Capture la page actuelle ou une zone précise |
| Extraction de contenu | Lit le texte, les tableaux et d'autres données structurées d'une page |
| Maintien des sessions de connexion | Réutilise les sessions de connexion déjà enregistrées dans le navigateur |

Cas d'usage :

- Comparaison de prix en e-commerce : recherche automatiquement des produits et compare les prix sur plusieurs plateformes
- Recherche d'informations : explore les pages web en profondeur et en extrait des informations structurées
- Remplissage de formulaires : remplit automatiquement divers formulaires en ligne
- Saisie de données : organise et saisit automatiquement les données web dans un format défini

Pour découvrir d'autres cas d'usage, consultez le [site officiel de Kimi WebBridge](https://www.kimi.com/features/webbridge).
