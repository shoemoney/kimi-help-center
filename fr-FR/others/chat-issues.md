---
title: "Problèmes courants avec le chat Kimi"
slug: "chat-issues"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Problèmes courants avec le chat Kimi - Centre d'aide Kimi"
  description="Cela peut être dû à :"
/>

# Problèmes courants avec le chat Kimi

## Impossible d'envoyer des messages / un cercle rouge apparaît ?

Cela peut être dû à :

- **Déclenchement du rate limit** : Kimi limite le nombre de conversations sur certaines plages horaires. Envoyer des messages trop fréquemment peut bloquer toute interaction supplémentaire. Patientez 2 à 3 heures avant de réessayer et espacez davantage vos messages.
- **Mauvaise connexion réseau** : un signal faible ou une connexion instable peut empêcher l'envoi des messages. Changez de réseau et réessayez.

## La conversation dépasse 200 000 mots ?

La limite de contexte d'une seule conversation est d'environ 128 K tokens (soit ~200 000 mots). Une fois cette limite atteinte, le modèle ne peut plus accepter de nouvelle saisie.

<Callout type="tip">
**Actions recommandées** :

1. **Démarrez une nouvelle conversation** : copiez les conclusions clés ou le plan de la conversation initiale dans une nouvelle pour poursuivre.
2. **Générez un document de transition** : demandez à Kimi de « résumer et générer un document de transition », puis collez-le dans une nouvelle conversation comme contexte de départ — cela économise des tokens tout en préservant l'information.

**Remarque** : supprimer des messages au sein d'une même conversation ne libère **pas** la fenêtre de contexte. Démarrez plutôt une nouvelle conversation.
</Callout>

<Callout type="info">
Les modèles de raisonnement consomment davantage de tokens pour réfléchir, ce qui réduit la limite de contexte effective. Pour traiter de longs documents, privilégiez K2 plutôt que K2-Thinking.
</Callout>

## Le message « parlons d'autre chose » s'affiche ?

Ce message indique que le contenu actuel a déclenché une règle de sécurité et que le sujet ne peut pas se poursuivre. Saisissez simplement un nouveau sujet pour reprendre la conversation — aucune attente nécessaire.

<Callout type="info">
Si vous estimez que le contenu n'était pas en infraction, cliquez sur « 👎 » pour nous transmettre votre avis et nous aider à améliorer nos règles de sécurité.
</Callout>

## Le message « Kimi est un peu fatigué » s'affiche ?

Cela signifie qu'un trop grand nombre d'utilisateurs sont connectés et que les ressources de calcul sont fortement sollicitées — un rate limit lié aux heures de pointe. Patientez 1 à 2 minutes et réessayez.

<Callout type="tip">
Pour réduire les temps d'attente, envisagez de souscrire à une formule d'abonnement afin de bénéficier d'un accès prioritaire à des ressources de calcul dédiées.
</Callout>

## Impossible de télécharger un fichier PPT/Word/Excel ?

La fenêtre de chat Kimi ne génère pas elle-même de fichiers Office téléchargeables :

| Type de fichier | Où le générer |
|-----------|-------------------|
| **Présentations** | Rendez-vous sur [Kimi Slides](https://www.kimi.com/slides) — prend en charge la génération et le téléchargement en ligne |
| **Word/Excel** | Utilisez le mode **Agent** |
