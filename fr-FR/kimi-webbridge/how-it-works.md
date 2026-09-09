---
title: "Fonctionnement de l'Extension de navigateur Kimi"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Fonctionnement de l'Extension de navigateur Kimi - Centre d'aide Kimi"
  description="Découvrez comment l'Extension de navigateur Kimi connecte votre navigateur aux agents IA en local, permettant une navigation web sécurisée, des clics, des captures d'écran et bien plus."
  ogType="article"
/>

# Fonctionnement de l'Extension de navigateur Kimi

## Déroulement

L'Extension de navigateur Kimi prend en charge deux modes d'utilisation — la **discussion dans la barre latérale** et le **contrôle à distance par un Agent local** — et fonctionne de la manière suivante :

1. **Barre latérale du navigateur** : cliquez sur l'icône Kimi dans la barre d'outils pour ouvrir la barre latérale, puis connectez-vous avec un compte membre Kimi pour discuter directement
2. **Service de pont local** : un service local s'exécute sur votre ordinateur pour recevoir les instructions de l'Agent
3. **Extension de navigateur** : exécute des actions précises dans le navigateur via le Chrome DevTools Protocol
4. **Isolation de sécurité** : toute l'exécution se déroule en local — vos sessions de connexion et le contenu des pages web ne quittent jamais votre appareil

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Interface de l'extension

Cliquez sur l'icône de l'Extension de navigateur Kimi dans la barre d'outils du navigateur pour déplier la barre latérale et envoyer une tâche.

<Frames
  src="./images/sidebar.png"
  alt="Kimi Browser Extension sidebar"
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

Pour découvrir d'autres cas d'usage, consultez le [site officiel de l'Extension de navigateur Kimi](https://www.kimi.com/features/webbridge).
