---
title: "Dépannage de l'API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Dépannage de l'API - Kimi Help Center"
  description="Problèmes courants et solutions pour les développeurs utilisant l'API Kimi."
/>

# Dépannage de l'API

<Callout type="info">
Problèmes courants et solutions pour les développeurs utilisant l'API Kimi.
</Callout>

## Comment gérer l'erreur 429 de rate limit ?

Une erreur 429 signifie que la fréquence de vos requêtes a dépassé le rate limit du compte actuel. Pour résoudre ce problème :

- Mettez en place une stratégie de retry avec backoff exponentiel (attendez 1 s, 2 s, 4 s… avant de réessayer).
- Contrôlez le nombre de requêtes simultanées à l'aide d'un mécanisme de file d'attente.
- Augmentez le montant cumulé de vos recharges pour passer à un palier de rate limit supérieur.
- Contactez l'équipe commerciale si vous avez besoin d'un quota plus élevé.

## Comment gérer l'erreur 401 d'authentification ?

Une erreur 401 signifie que l'authentification par API Key a échoué. Vérifiez les points suivants :

- Assurez-vous que l'API Key a été copiée correctement (attention aux espaces en début ou en fin).
- Vérifiez que le format de l'en-tête de requête est bien `Authorization: Bearer <your-api-key>`.
- Confirmez que l'API Key n'a pas été supprimée ou désactivée — vérifiez dans la console.
- Assurez-vous de ne pas utiliser une clé provenant d'une autre plateforme (les API Keys de Kimi commencent par `sk-`).

<Callout type="warning">
**Format de l'API Key** : les API Keys de Kimi commencent par `sk-`. Assurez-vous d'utiliser le bon format de clé.
</Callout>

## Le téléversement de fichiers est-il facturé ?

Le téléversement de fichiers est gratuit en lui-même. Cependant, lorsque vous référencez un fichier téléversé dans une conversation, son contenu est analysé en tokens et facturé comme tokens d'entrée. Les fichiers volumineux produisent davantage de tokens.

## Comment gérer l'erreur 403 de solde insuffisant ?

Une erreur 403 indique généralement un solde insuffisant sur le compte. Rechargez votre compte dans la console — les fonds sont disponibles immédiatement. Vous pouvez également utiliser l'API d'interrogation du solde pour vérifier votre solde actuel.

## Que faire si la réponse est tronquée ?

Si la réponse de l'API est incomplète ou tronquée :

- Vérifiez si le paramètre `max_tokens` est réglé sur une valeur trop basse et augmentez-le au besoin.
- Examinez le champ `finish_reason` dans la réponse : `length` signifie que la sortie a été tronquée en raison de la limite de tokens ; `stop` signifie qu'elle s'est terminée normalement.
- Pour la génération de textes longs, envisagez de découper la requête en segments.

<Callout type="tip">
**Vérifiez `finish_reason`** : `length` = tronquée, `stop` = terminée normalement.
</Callout>

## Puis-je téléverser des images via l'API de fichiers ?

Oui. L'API de téléversement de fichiers prend en charge les fichiers images. Une fois téléversées, les images peuvent être référencées dans les conversations. Avec les modèles Vision, vous pouvez également passer des images directement dans les messages via une URL ou un encodage Base64.

## Quelles sont les sources de la recherche web ?

La fonctionnalité de recherche web de l'API Kimi récupère en temps réel des informations publiquement accessibles sur Internet. Les résultats proviennent de pages web indexées par les principaux moteurs de recherche. Chaque appel à la recherche web entraîne des frais supplémentaires de 0,004 $.

## Existe-t-il un lien entre l'abonnement Kimi et la concurrency de l'API ?

<Callout type="warning">
Les **formules d'abonnement Kimi** (comme Allegretto) et l'**API** sont des systèmes de facturation distincts. Le parallélisme d'agents inclus dans les formules d'abonnement ne s'applique qu'aux produits grand public de Kimi et n'a aucun rapport avec les rate limits de l'API. Les limites de concurrency de l'API sont déterminées par le palier de recharges cumulées de votre compte.
</Callout>

## Différence entre l'API et l'application web Kimi

| Aspect | Application web Kimi | API Kimi |
| --- | --- | --- |
| **Cible** | Produit conversationnel grand public | Interface d'intégration pour développeurs |
| **Accès** | Via navigateur | Appels d'API programmatiques |
| **Facturation** | Système d'abonnement/quota | Paiement à l'usage par tokens |
| **Compte** | Connexion partagée | Connexion partagée |
| **Crédits** | Non transférables entre les systèmes | Non transférables entre les systèmes |

## La génération de PPT et la deep research sont-elles disponibles via l'API ?

<Callout type="warning">
La **génération de PPT** et la **deep research** ne sont **pas encore disponibles via l'API**. Ces fonctionnalités ne sont actuellement accessibles que via le produit grand public Kimi. Suivez les annonces de la plateforme pour les mises à jour.
</Callout>

## Le déploiement sur site est-il pris en charge ?

L'API Kimi propose actuellement uniquement des services d'API dans le cloud et **ne prend pas en charge le déploiement privé sur site**. Pour des besoins de déploiement privé, contactez l'équipe commerciale via [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales).

## Puis-je appeler l'API Kimi depuis l'extérieur de la Chine ?

L'API Kimi est disponible à l'international via `api.moonshot.ai`. Si vous rencontrez des problèmes de connectivité, contactez l'équipe commerciale pour trouver la meilleure solution adaptée à votre région.
