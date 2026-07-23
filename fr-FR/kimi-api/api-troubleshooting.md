---
title: "Dépannage de l’API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Dépannage de l’API - Centre d’aide Kimi"
  description="Problèmes fréquents et solutions pour les développeurs qui utilisent l’API Kimi."
/>

# Dépannage de l’API

<Callout type="info">
Problèmes fréquents et solutions pour les développeurs qui utilisent l’API Kimi.
</Callout>

## Comment gérer une erreur 429 liée au rate limit ?

Une erreur 429 signifie que la fréquence de vos requêtes a dépassé le rate limit actuel de votre compte. Pour y remédier :

- Mettez en place une stratégie de nouvelle tentative avec backoff exponentiel (attendez 1 s, 2 s, 4 s… avant de réessayer).
- Contrôlez le nombre de requêtes concurrentes à l’aide d’un mécanisme de file d’attente.
- Augmentez le montant cumulé de vos recharges pour passer à un palier de rate limit supérieur.
- Contactez l’équipe commerciale si vous avez besoin d’un quota plus élevé.

## Comment gérer une erreur 401 Authentication Error ?

Une erreur 401 signifie que l’authentification par clé API a échoué. Vérifiez les points suivants :

- Assurez-vous que la clé API a été copiée correctement (attention aux espaces au début ou à la fin).
- Vérifiez que l’en-tête de la requête respecte le format `Authorization: Bearer <your-api-key>`.
- Confirmez que la clé API n’a pas été supprimée ni désactivée — vérifiez-le dans la console.
- Assurez-vous de ne pas utiliser une clé provenant d’une autre plateforme (les clés API Kimi commencent par `sk-`).

<Callout type="warning">
**Format de clé API** : les clés API Kimi commencent par `sk-`. Assurez-vous d’utiliser le bon format de clé.
</Callout>

## L’importation de fichiers est-elle facturée ?

L’importation de fichiers est gratuite en elle-même. En revanche, lorsque vous référencez un fichier importé dans une conversation, son contenu est analysé en tokens et facturé comme tokens d’entrée. Les fichiers volumineux génèrent davantage de tokens.

## Comment gérer une erreur 403 Insufficient Balance ?

Une erreur 403 indique généralement que le solde du compte est insuffisant. Rechargez votre compte dans la console : les fonds sont disponibles immédiatement. Vous pouvez aussi utiliser l’API de consultation du solde pour vérifier votre solde actuel.

## Que faire si la réponse est tronquée ?

Si la réponse de l’API est incomplète ou tronquée :

- Vérifiez si le paramètre `max_tokens` est réglé trop bas et augmentez-le si nécessaire.
- Examinez le champ `finish_reason` dans la réponse : `length` signifie que la sortie a été tronquée en raison de la limite de tokens ; `stop` signifie qu’elle s’est terminée normalement.
- Pour générer des textes longs, envisagez de diviser la requête en plusieurs segments.

<Callout type="tip">
**Vérifiez `finish_reason`** : `length` = tronquée, `stop` = terminée normalement.
</Callout>

## Puis-je importer des images via l’API de fichiers ?

Oui. L’API d’importation de fichiers prend en charge les fichiers image. Une fois importées, les images peuvent être référencées dans les conversations. Avec les modèles Vision, vous pouvez également transmettre des images directement dans les messages via une URL ou un encodage Base64.

## Quelles sont les sources de Web Search ?

La fonctionnalité Web Search de Kimi API récupère en temps réel des informations accessibles publiquement sur Internet. Les résultats proviennent de pages web indexées par les principaux moteurs de recherche. Chaque invocation de Web Search entraîne des frais supplémentaires de 0,004 $.

## Existe-t-il un lien entre l’abonnement Kimi et la concurrency de l’API ?

<Callout type="warning">
Les **abonnements Kimi** (comme Allegretto) et l’**API** relèvent de systèmes de facturation distincts. Le parallélisme des agents inclus dans les abonnements s’applique uniquement aux produits grand public de Kimi et n’a aucun lien avec les rate limits de l’API. Les limites de concurrency de l’API sont déterminées par le palier de recharge cumulée de votre compte.
</Callout>

## Différences entre l’API et l’application web Kimi

| Aspect | Application web Kimi | API Kimi |
| --- | --- | --- |
| **Cible** | Produit conversationnel destiné aux utilisateurs finaux | Interface d’intégration destinée aux développeurs |
| **Accès** | Depuis un navigateur | Appels API programmatiques |
| **Facturation** | Système d’abonnement/de credit | Paiement à l’usage, en fonction des tokens |
| **Compte** | Connexion partagée | Connexion partagée |
| **Credits** | Non transférables entre les systèmes | Non transférables entre les systèmes |

## La génération de PPT et Deep Research sont-elles disponibles via API ?

<Callout type="warning">
La **génération de PPT** et **Deep Research** ne sont **pas encore disponibles via API**. Ces fonctionnalités ne sont actuellement accessibles que dans le produit grand public Kimi. Suivez les annonces de la plateforme pour rester informé des mises à jour.
</Callout>

## Le déploiement sur site est-il pris en charge ?

Kimi API propose actuellement uniquement des services API dans le cloud et **ne prend pas en charge le déploiement privé sur site**. Pour tout besoin de déploiement privé, contactez l’équipe commerciale via [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales).

## Puis-je appeler l’API Kimi depuis l’extérieur de la Chine ?

Kimi API est disponible à l’international via `api.moonshot.ai`. Si vous rencontrez des problèmes de connectivité, contactez l’équipe commerciale afin d’étudier la solution la plus adaptée à votre région.
