---
title: "Problèmes fréquents avec le chat Kimi"
slug: "chat-issues"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Problèmes fréquents avec le chat Kimi - Centre d’aide Kimi"
  description="Vous rencontrez un problème avec les chats Kimi ? Cet article récapitule les solutions aux problèmes courants, comme les réponses interrompues, les contenus anormaux ou les échecs de chargement, afin de vous aider à les résoudre rapidement."
/>

# Problèmes fréquents avec le chat Kimi

## Impossible d’envoyer des messages / un cercle rouge apparaît ?

Cela peut être dû à :

- **Rate limit déclenché** : Kimi applique un plafond de conversations sur certaines périodes. Si vous envoyez des messages trop fréquemment, il se peut que vous ne puissiez plus interagir temporairement. Patientez 2 à 3 heures avant de réessayer, et modérez la fréquence de vos échanges.
- **Connexion réseau médiocre** : un signal faible ou une connexion instable peut empêcher l’envoi des messages. Changez de réseau, puis réessayez.

## La conversation dépasse 200 000 mots ?

Le contexte d’une conversation unique avec K2.6 est d’environ 128K tokens (~200 000 mots). Une fois cette limite atteinte, le modèle ne peut plus lire de nouveau contenu. La marche à suivre dépend de la raison pour laquelle vous avez atteint cette limite :

- **Un fichier que vous avez envoyé est trop volumineux et atteint la limite dès le premier tour** : divisez-le en parties plus petites, puis envoyez-les par lots.
- **Une conversation en plusieurs tours atteint progressivement la limite** : commencez par résumer les conclusions importantes obtenues jusqu’ici (vous pouvez aussi demander à Kimi de « résumer et générer un document de passation »), puis collez ce résumé dans une nouvelle conversation comme contexte initial afin de poursuivre.

<Callout type="info">
**Conseils** :
- Plus fondamentalement, utiliser la [mémoire](/features/memory-space) et les [projets](/features/project) vous aide à éviter d’atteindre cette limite : la mémoire conserve automatiquement les informations clés, tandis qu’un projet regroupe vos fichiers de référence, vos consignes et la mémoire afin que chaque nouvelle conversation dispose du contexte nécessaire.
- Supprimer les anciens messages dans la même conversation ne libère pas la fenêtre de contexte : créez plutôt une nouvelle conversation.
- Thinking consomme des tokens ; pour économiser des credits, réglez **l’intensité de Thinking** sur **Standard**.
- Pour les documents très longs, K3 propose un contexte de 1M tokens (disponible avec l’abonnement le plus élevé) ; lors de la rédaction, sélectionnez **Longueur de conversation : extra longue**.
</Callout>

## Le message « parlons d’autre chose » s’affiche ?

Ce message indique que le contenu actuel a déclenché une règle de sécurité et que le sujet ne peut pas être poursuivi. Saisissez simplement un nouveau sujet pour reprendre la conversation — aucune attente n’est nécessaire.

<Callout type="info">
Si vous pensez que le contenu ne contrevenait pas aux règles, cliquez sur « 👎 » pour envoyer un retour et nous aider à améliorer nos politiques de sécurité.
</Callout>

## Le message « Kimi est un peu fatigué » s’affiche ?

Cela signifie qu’un trop grand nombre d’utilisateurs sont en ligne et que les ressources de calcul sont fortement sollicitées : il s’agit d’un rate limit aux heures de pointe. Patientez 1 à 2 minutes, puis réessayez.

<Callout type="tip">
Pour réduire les temps d’attente, envisagez de souscrire un abonnement afin de bénéficier d’un accès prioritaire à des ressources de calcul dédiées.
</Callout>

## Impossible de télécharger un PPT/Word/Excel ?

La fenêtre de chat Kimi ne génère pas directement de fichiers Office téléchargeables :

| Type de fichier | Où le générer |
|-----------|-------------------|
| **Slides** | Accédez à [Kimi Slides](https://www.kimi.com/slides) — prend en charge la génération en ligne et le téléchargement |
| **Word/Excel** | Utilisez le mode **Agent** |
