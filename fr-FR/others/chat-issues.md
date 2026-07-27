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

## Comment supprimer une conversation individuelle ?

Dans l’application Kimi ou sur la version web, recherchez la conversation concernée, puis cliquez sur Supprimer. Après suppression, cette conversation n’apparaît plus sur votre appareil ; les données associées entrent dans le processus de traitement prévu par la section 5 de la [Politique de confidentialité de Kimi](https://www.kimi.com/user/agreement/userPrivacy?version=v2).

## Après la suppression d’une conversation, le lien de partage reste-t-il accessible ?

Non. L’accès au lien de partage est directement lié à l’état de la conversation : une fois la conversation supprimée, le lien de partage externe qu’elle a généré devient simultanément invalide, et personne ne peut plus accéder au contenu via ce lien. La plateforme ne conserve aucune copie accessible de ce lien.

## Que faire en cas de téléversement accidentel d’informations sensibles ?

Nous vous recommandons de supprimer immédiatement la conversation concernée dans le client. S’il s’agit d’informations sensibles telles qu’une carte d’identité, une carte bancaire ou des documents juridiques, vous pouvez, après suppression, contacter le service client à l’adresse [support@moonshot.ai](mailto:support@moonshot.ai), en indiquant dans l’objet de l’e-mail le type d’information sensible concerné (par exemple « carte d’identité », « carte bancaire » ou « documents juridiques »), afin que nous puissions traiter votre demande en priorité.

## Des données sont-elles encore conservées après la suppression ?

Conformément aux exigences de la Loi sur la cybersécurité et d’autres lois et réglementations, la plateforme doit conserver certains journaux réseau (comme les horaires des opérations et les identifiants de compte) pendant une durée déterminée, uniquement à des fins de conformité en matière de sécurité et de contrôles réglementaires ; ils ne seront pas utilisés à d’autres fins sans votre consentement.

Pour supprimer votre compte et l’ensemble de vos données, consultez [Suppression du compte et effacement des données](/others/account-deletion).
