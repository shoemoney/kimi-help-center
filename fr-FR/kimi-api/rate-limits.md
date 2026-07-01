---
title: "Limites de débit"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Limites de débit - Centre d'aide Kimi"
  description="L'API Kimi applique des rate limits sur la fréquence des requêtes et la concurrency afin de garantir la stabilité de la plateforme et un usage équitable. Les paliers de rate limit dépendent du..."
/>

# Limites de débit

L'API Kimi applique des rate limit（limite de débit）s sur la fréquence des requêtes et la concurrency afin de garantir la stabilité de la plateforme et un usage équitable. Les paliers de rate limit dépendent du montant cumulé des recharges de votre compte.

## Paliers de rate limit

Les rate limits de l'API sont répartis en paliers selon le **montant cumulé des recharges** de votre compte : plus vous rechargez, plus vos rate limits sont élevés. Pour connaître les seuils de chaque palier ainsi que les limites RPM (requêtes par minute) et TPM (tokens par minute) correspondantes, consultez la console [platform.moonshot.ai](https://www.platform.moonshot.ai).

## Comment vérifier vos limites actuelles ?

- Connectez-vous à la console de l'API pour consulter votre palier de rate limit actuel.
- Les en-têtes de réponse de l'API contiennent également des informations sur le rate limit :
  - `X-RateLimit-Limit` : plafond du rate limit en vigueur
  - `X-RateLimit-Remaining` : requêtes encore disponibles
  - `X-RateLimit-Reset` : moment de réinitialisation de la limite

## Gérer les erreurs 429

Lorsque la fréquence de vos requêtes dépasse la limite, l'API renvoie un code de statut 429. Voici les actions recommandées :

1. **Mettre en place un backoff exponentiel** : attendez 1 seconde au départ, puis doublez le délai à chaque nouvelle tentative (2 s, 4 s, 8 s…).
2. **Maîtriser la concurrency** : utilisez des files d'attente de requêtes ou des sémaphores pour limiter le nombre de requêtes simultanées.
3. **Regrouper les requêtes** : combinez plusieurs petites requêtes en quelques requêtes plus volumineuses.

## Demander des rate limits plus élevés

Si les besoins de votre activité dépassent les rate limits actuels :

- **Recharger pour passer au niveau supérieur** : augmentez le montant cumulé de vos recharges et le système relèvera automatiquement votre palier de rate limit.
- **Contacter l'équipe commerciale** : pour des besoins particuliers, adressez-vous à l'équipe commerciale de la plateforme via [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) afin de demander un crédits personnalisé.
