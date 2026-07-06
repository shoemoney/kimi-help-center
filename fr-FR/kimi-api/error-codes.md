---
title: "Codes d'erreur de l'API"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Codes d'erreur de l'API - Centre d'aide Kimi"
  description="Codes d'erreur courants lors de l'appel de l'API Kimi et comment les résoudre."
/>

# Codes d'erreur de l'API

<Callout type="info">
Codes d'erreur courants lors de l'appel de l'API Kimi et comment les résoudre.
</Callout>

## Référence des codes d'erreur

| Code d'erreur | Signification | Résolution |
| --- | --- | --- |
| 400 | Requête incorrecte | Vérifiez le format du corps de la requête, les noms et types de paramètres. Causes fréquentes : JSON mal formé, paramètres obligatoires manquants, valeurs hors plage. |
| 401 | Non autorisé | Vérifiez que la clé API est correcte, qu'elle n'est ni expirée ni désactivée. Confirmez le format de l'en-tête : `Authorization: Bearer <your-api-key>`. |
| 403 | Interdit (solde insuffisant) | Solde du compte épuisé — rechargez-le dans la console. Le compte peut aussi être restreint ; contactez le support si nécessaire. |
| 404 | Introuvable | Vérifiez le chemin de l'URL de la requête et le nom du modèle. Confirmez que le point de terminaison est `https://api.moonshot.ai/v1/...`. |
| 429 | Trop de requêtes | Limite de débit (rate limit) dépassée. Réduisez la fréquence, mettez en place un backoff exponentiel, ou contactez le support pour des limites plus élevées. |
| 500 | Erreur interne du serveur | Problème temporaire du serveur — réessayez plus tard. Si le problème persiste, contactez support@moonshot.ai en précisant le `request_id`. |

## Conseils de dépannage généraux

<Callout type="tip">
1. **Consultez le message d'erreur complet** : le JSON de réponse inclut `error.message` avec une description détaillée.
2. **Notez le request_id** : il aide le support à localiser rapidement le problème.
3. **Reportez-vous à la documentation officielle** : assurez-vous que vos appels correspondent à la documentation sur [platform.kimi.ai](https://platform.kimi.ai).
4. **Mettez en place une logique de réessai** : pour les erreurs 429 et 500, utilisez un backoff exponentiel.
</Callout>
