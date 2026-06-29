---
title: "Guide de l'abonnement Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Guide de l'abonnement Kimi Code - Centre d'aide Kimi"
  description="Kimi Code est un avantage destiné aux développeurs, inclus dans l'abonnement Kimi, qui offre des capacités de codage par IA hautes performances. Vous pouvez en profiter via..."
/>

# Guide de l'abonnement Kimi Code

<Callout type="info">
Kimi Code est un avantage destiné aux développeurs, inclus dans l'abonnement Kimi, qui offre des capacités de codage par IA hautes performances. Vous pouvez en profiter via Kimi Code CLI, Claude Code, Roo Code et d'autres outils compatibles.
</Callout>

## Principaux atouts

| Atout | Description |
|-----------|-------------|
| **Large compatibilité** | Fonctionne avec Kimi Code CLI, Claude Code, Roo Code et d'autres agents de codage courants |
| **Réponses ultra-rapides** | Des vitesses de génération atteignant 100 tokens/s, pour un gain de productivité considérable |
| **Forte concurrency** | Environ 300 à 1 200 requêtes par fenêtre de 5 heures (selon votre formule), avec jusqu'à 30 flux simultanés |

## Démarrage rapide

Choisissez la voie adaptée à votre situation :

- **Nouveaux utilisateurs** : rendez-vous sur [kimi.com/code](https://kimi.com/code), connectez-vous et souscrivez à une formule Coding.
- **Abonnés existants** : accédez à la console pour gérer vos API Keys et commencer à utiliser Kimi Code.

## Obtenir une clé API

1. Connectez-vous à la [console Kimi](https://kimi.com/code).
2. Accédez à la page **API Keys**.
3. Cliquez sur **Créer une nouvelle clé API**.
4. Copiez votre API Key et conservez-la en lieu sûr (elle ne s'affiche qu'une seule fois, à sa création).

<Callout type="warning">
Ne partagez pas votre API Key avec autrui et ne la déposez jamais dans un dépôt de code public.
</Callout>

## Connexion en un clic

Dans Kimi Code CLI, la commande `/login` permet une autorisation rapide sans avoir à copier manuellement une API Key :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

Le système effectue automatiquement l'autorisation de l'appareil et la liaison du compte — l'ensemble du processus ne prend que quelques secondes.

## Gestion des appareils

- Chaque compte peut être utilisé sur plusieurs appareils.
- Les autorisations d'appareils **inactives depuis 30 jours** expirent automatiquement ; vous devrez alors exécuter à nouveau `/login` pour vous réautoriser.
- Vous pouvez consulter et gérer les appareils autorisés depuis la console.
