---
title: "Solde et utilisation"
slug: "api-balance-and-usage"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Solde et utilisation - Centre d’aide Kimi"
  description="Kimi API propose plusieurs moyens de consulter le solde de votre compte et le détail de votre utilisation, afin de vous aider à suivre votre consommation et vos coûts."
/>

# Solde et utilisation

Kimi API propose plusieurs moyens de consulter le solde de votre compte et le détail de votre utilisation, afin de vous aider à suivre votre consommation et vos coûts.

## Tableau de bord de la console

Connectez-vous à [platform.kimi.ai](https://platform.kimi.ai), puis accédez à la page **fee-detail** (détails de facturation) dans la console pour consulter :

- Le solde actuel du compte
- Le détail de l’utilisation quotidienne
- L’utilisation et les coûts par modèle
- L’évolution historique des dépenses

<Callout type="info">
La facturation quotidienne est mise à jour au plus tard à **7 h 00 le lendemain**. Les données d’utilisation en temps réel peuvent présenter un léger décalage.
</Callout>

> **Remarque** : la facturation quotidienne est mise à jour au plus tard à **7 h 00 le lendemain**. Les données d’utilisation en temps réel peuvent présenter un léger décalage.

## API Token Estimation

Avant d’envoyer une requête, vous pouvez utiliser l’API Token Estimation pour estimer le nombre de tokens que l’appel consommera — pratique pour maîtriser les coûts.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Transmettez le même format `messages` que pour une requête Chat Completion ; l’API renverra le nombre estimé de tokens.

## API de consultation du solde

Consultez directement le solde actuel de votre compte via l’API :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Incluez votre clé API dans l’en-tête de la requête pour récupérer votre solde disponible.

## Conseils de suivi de l’utilisation

<Callout type="tip">
**Bonnes pratiques** :
- Consultez régulièrement la page fee-detail pour suivre l’évolution de vos dépenses
- Intégrez l’API de consultation du solde et définissez des seuils d’alerte
- Utilisez l’API Token Estimation avant les appels critiques afin d’estimer les coûts
</Callout>
