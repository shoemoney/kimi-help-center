---
title: "Codes d’erreur API"
slug: "api-error-codes"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Codes d’erreur API - Centre d’aide Kimi"
  description="Codes d’erreur courants lors des appels à l’API Kimi et solutions pour les résoudre."
/>

# Codes d’erreur API

<Callout type="info">
Codes d’erreur courants lors des appels à l’API Kimi et solutions pour les résoudre.
</Callout>

## Référence des codes d’erreur

| Code d’erreur | Signification | Solution |
| --- | --- | --- |
| 400 | Requête incorrecte | Vérifiez le format du corps de la requête, ainsi que les noms et types des paramètres. Causes fréquentes : JSON mal formé, paramètres obligatoires manquants, valeurs hors limites. |
| 401 | Non autorisé | Vérifiez que l’API Key est correcte, non expirée et non désactivée. Confirmez le format de l’en-tête : `Authorization: Bearer <your-api-key>`. |
| 403 | Accès interdit (solde insuffisant) | Le solde du compte est épuisé : rechargez-le dans la console. Le compte peut aussi être soumis à des restrictions ; contactez l’assistance si nécessaire. |
| 404 | Introuvable | Vérifiez le chemin de l’URL de requête et le nom du modèle. Assurez-vous que l’endpoint est `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | rate limit dépassée. Réduisez la fréquence, mettez en place un backoff exponentiel ou contactez l’assistance pour obtenir des limites plus élevées. |
| 500 | Internal Server Error | Problème temporaire côté serveur : réessayez plus tard. Si le problème persiste, contactez support@moonshot.ai avec `request_id`. |

## Conseils généraux de dépannage

<Callout type="tip">
1. **Consultez le message d’erreur complet** : la réponse JSON contient `error.message` avec une description détaillée.
2. **Notez le request_id** : il permet à l’assistance de localiser rapidement le problème.
3. **Consultez la documentation officielle** : assurez-vous que vos appels correspondent à la documentation sur [platform.kimi.ai](https://platform.kimi.ai).
4. **Mettez en place une logique de nouvelle tentative** : pour les erreurs 429 et 500, utilisez un backoff exponentiel.
</Callout>
