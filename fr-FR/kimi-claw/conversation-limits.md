---
title: "Limites de conversation"
slug: "conversation-limits"
order: 6
extract_headings: true
preview: false
---

<SeoMeta
  title="Limites de conversation - Centre d'aide Kimi"
  description="Lorsque le contexte de la conversation devient trop long et dépasse la limite de tokens du modèle, Kimi Claw peut cesser de répondre ou renvoyer une erreur."
/>

# Limites de conversation

Lorsque le contexte de la conversation devient trop long et dépasse la limite de tokens du modèle, Kimi Claw peut cesser de répondre ou renvoyer une erreur.

**Comment y remédier :**

- Envoyez `/new` pour démarrer une nouvelle conversation et effacer le contexte actuel.
- Si l'erreur persiste après `/new`, c'est peut-être que trop de Skills sont chargées en mémoire. Essayez :
  - `/skills` — passez en revue les skills installées et désinstallez celles dont vous n'avez pas besoin.
  - `/compact` — compressez le contexte actuel pour libérer de l'espace.
  - `/reset` — réinitialisez entièrement Kimi Claw en dernier recours.

## Rate limit de l'API atteint ?

Cela signifie que vous avez atteint le plafond de fréquence des requêtes. Patientez un instant, puis réessayez.

**Pour vérifier votre quota et vos rate limits :**

1. Rendez-vous sur [kimi.com/code](https://kimi.com/code).
2. Ouvrez la **Console**.
3. Cliquez sur **View Quota & Rate Limits** pour consulter votre utilisation actuelle et vos plafonds.

Si vous atteignez fréquemment les rate limits, envisagez d'espacer vos tâches ou de passer à un niveau d'abonnement supérieur pour bénéficier d'un débit plus élevé.
