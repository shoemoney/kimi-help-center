---
title: "Solde et utilisation"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Solde et utilisation - Centre d'aide Kimi"
  description="L'API Kimi propose plusieurs moyens de consulter le solde de votre compte et le détail de votre utilisation, pour vous aider à suivre votre consommation et vos coûts."
/>

# Solde et utilisation

L'API Kimi propose plusieurs moyens de consulter le solde de votre compte et le détail de votre utilisation, pour vous aider à suivre votre consommation et vos coûts.

## Tableau de bord de la console

Connectez-vous à [platform.moonshot.ai](https://platform.moonshot.ai) et rendez-vous sur la page **fee-detail** (détails de facturation) de la console pour consulter :

- Le solde actuel du compte
- La répartition quotidienne de l'utilisation
- L'utilisation et les coûts par modèle
- L'historique des tendances de dépenses

<Callout type="info">
La facturation quotidienne est mise à jour avant **7 h 00 le lendemain**. Les données d'utilisation en temps réel peuvent présenter un léger décalage.
</Callout>

> **Remarque** : la facturation quotidienne est mise à jour avant **7 h 00 le lendemain**. Les données d'utilisation en temps réel peuvent présenter un léger décalage.

## API d'estimation des tokens

Avant d'envoyer une requête, vous pouvez utiliser l'API Token Estimation pour estimer le nombre de tokens que l'appel consommera — pratique pour maîtriser vos coûts.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Transmettez le même format `messages` qu'une requête Chat Completion, et l'API renverra le nombre de tokens estimé.

## API de consultation du solde

Consultez directement le solde actuel de votre compte via l'API :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Incluez votre clé API dans l'en-tête de la requête pour récupérer votre solde disponible.

## Conseils pour suivre votre utilisation

<Callout type="tip">
**Bonnes pratiques** :
- Consultez régulièrement la page fee-detail pour suivre les tendances de vos dépenses
- Intégrez l'API de consultation du solde et configurez des seuils d'alerte de solde
- Utilisez l'API Token Estimation avant les appels critiques pour estimer les coûts
</Callout>
