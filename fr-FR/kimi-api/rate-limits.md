---
title: "Rate limits"
slug: "api-rate-limits"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Rate limits - Centre d’aide Kimi"
  description="Kimi API applique des rate limits sur la fréquence des requêtes et la concurrency afin de garantir la stabilité de la plateforme et une utilisation équitable. Les niveaux de rate limit dépendent du montant cumulé de vos recharges..."
/>

# Rate limits

Kimi API applique des rate limits sur la fréquence des requêtes et la concurrency afin de garantir la stabilité de la plateforme et une utilisation équitable. Les niveaux de rate limit dépendent du montant cumulé des recharges de votre compte.

## Niveaux de rate limit

Les rate limits de l’API sont organisés par niveaux, selon le **montant cumulé des recharges** de votre compte : plus vous rechargez, plus les rate limits disponibles sont élevés. Pour connaître les seuils précis de chaque niveau ainsi que les limites RPM (requêtes par minute) et TPM (tokens par minute) correspondantes, consultez la console [platform.kimi.ai](https://platform.kimi.ai).

## Comment consulter vos limites actuelles ?

- Connectez-vous à la console API pour voir votre niveau de rate limit actuel.
- Les en-têtes de réponse de l’API contiennent également des informations sur les rate limits :
  - `X-RateLimit-Limit`: Plafond actuel du rate limit
  - `X-RateLimit-Remaining`: Requêtes encore disponibles
  - `X-RateLimit-Reset`: Heure de réinitialisation de la limite

## Gérer les erreurs 429

Lorsque la fréquence de vos requêtes dépasse la limite, l’API renvoie un code d’état 429. Actions recommandées :

1. **Mettre en place un backoff exponentiel** : attendez d’abord 1 seconde, puis doublez le délai à chaque nouvelle tentative (2s, 4s, 8s…).
2. **Maîtriser la concurrency** : utilisez des files de requêtes ou des sémaphores pour limiter le nombre de requêtes simultanées.
3. **Regrouper les requêtes** : combinez plusieurs petites requêtes en un nombre plus réduit de requêtes plus volumineuses.

## Demander des rate limits plus élevés

Si les besoins de votre activité dépassent les rate limits actuels :

- **Recharger pour passer au niveau supérieur** : augmentez le montant cumulé de vos recharges ; le système fera automatiquement passer votre compte au niveau de rate limit supérieur.
- **Contacter l’équipe commerciale** : pour des besoins spécifiques, contactez l’équipe commerciale de la plateforme via [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) afin de demander une quota de rate limit personnalisée.
