---
title: "Dépannage général"
slug: "troubleshooting"
order: 12
extract_headings: false
preview: false
---

<SeoMeta
  title="Dépannage général - Centre d'aide Kimi"
  description="Cette page présente les codes d'erreur courants et les options de réparation automatique pour Kimi Claw."
/>

# Dépannage général

Cette page présente les codes d'erreur courants et les options de réparation automatique pour Kimi Claw.

## Codes d'erreur courants

| Code | Signification | Que faire |
|------|---------|------------|
| **400** | Bad Request — Saisie mal formée ou paramètres invalides | Vérifiez votre message pour repérer tout contenu non pris en charge, puis réessayez. |
| **401** | Unauthorized — Échec de l'authentification | Déconnectez-vous de Kimi puis reconnectez-vous. Si le problème persiste, vérifiez vos identifiants API dans les paramètres de Kimi Claw. |
| **403** | Forbidden — Permissions insuffisantes | Vérifiez que votre niveau d'abonnement prend en charge la fonctionnalité que vous utilisez. Assurez-vous que votre compte n'est pas restreint. |
| **429** | Too Many Requests — Rate limit dépassé | Patientez quelques minutes puis réessayez. Consultez [Limites de conversation](/kimi-claw/conversation-limits) pour savoir comment vérifier votre quota. |
| **500** | Internal Server Error — Une erreur est survenue côté serveur | Réessayez après un court instant. En cas de récurrence, utilisez les options de réparation automatique ci-dessous ou contactez l'assistance. |

## Options de réparation automatique

Kimi Claw propose des outils de réparation intégrés, accessibles depuis les **Paramètres** sur le web :

| Option | Ce qu'elle fait |
|--------|--------------|
| **Redémarrer Kimi Claw** | Redémarre la connexion à la passerelle. Corrige la plupart des problèmes passagers (déconnexions du pont, blocages temporaires). |
| **Réparer Kimi Claw** | Lance un diagnostic automatisé qui détecte et corrige les problèmes de configuration. Essayez cette option lorsqu'un simple redémarrage ne suffit pas. |
| **Restaurer les paramètres initiaux** | Réinitialise Kimi Claw à son état par défaut. Les fichiers de l'espace de travail et la mémoire sont conservés, mais les connexions aux plateformes de discussion (Telegram, etc.) devront être reconfigurées. À utiliser en dernier recours. |

## Procédure d'escalade

Si les options de réparation automatique ne résolvent pas le problème :

1. Exécutez `/logs` dans le Terminal pour capturer les dernières erreurs.
2. Exécutez `/debug` pour activer les diagnostics détaillés.
3. Contactez **support@moonshot.ai** en indiquant les détails de l'erreur et tous les journaux pertinents.
