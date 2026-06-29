---
title: "Objectifs"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "Utilisez les objectifs pour maintenir Kimi Code orienté vers un résultat défini d'un tour à l'autre."
---

<SeoMeta
  title="Objectifs - Centre d'aide Kimi"
  description="Utilisez /goal pour maintenir Kimi Code orienté vers un résultat défini d'un tour à l'autre. Découvrez quand recourir aux objectifs, comment gérer leur cycle de vie et comment mettre en file d'attente les objectifs à venir."
/>

# Objectifs

Les objectifs maintiennent Kimi Code orienté vers un résultat défini d'un tour à l'autre. Contrairement à une invite classique qui indique l'étape suivante à réaliser, un objectif précise ce qui doit devenir vrai. Utilisez `/goal` lorsque la tâche comporte une ligne d'arrivée claire, mais que l'étape utile suivante dépend de ce que l'agent découvre en cours de travail — par exemple, corriger un lot de tests en échec ou remonter à la cause profonde d'une compilation défectueuse.

## Démarrer un objectif

Indiquez l'objectif après `/goal` :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix bugs listed in the issue tracker.",
    },
  ]}
/>

Kimi Code enregistre l'objectif, l'envoie comme message utilisateur suivant et active le mode objectif. Après chaque tour, il vérifie si l'objectif est atteint, bloqué, en pause ou toujours actif.

Les objectifs donnent les meilleurs résultats lorsqu'ils nomment la ligne d'arrivée ainsi que la preuve qui l'atteste :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix every bug labeled checkout-regression, add or update tests for each fix, and run the checkout test suite",
    },
  ]}
/>

Évitez les objectifs qui ne désignent qu'une direction générale :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find all bugs in this codebase.",
    },
  ]}
/>

Cet objectif ne précise ni ce qui constitue une réussite, ni ce qu'il faut examiner, ni quand s'arrêter. L'agent peut se bloquer immédiatement, ou travailler bien plus longtemps que prévu.

### Quand utiliser les objectifs

Utilisez les objectifs pour un travail doté d'une ligne d'arrivée claire et d'une preuve vérifiable.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix every failing checkout test and run the checkout test suite successfully.",
    },
  ]}
/>

Kimi Code peut examiner la sortie des tests, modifier des fichiers, relancer des vérifications et décider du moment où l'objectif est atteint.

Utilisez les objectifs lorsque la tâche peut nécessiter plusieurs tours d'investigation et de réparation.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find why the release build fails, fix the root cause, and verify the build passes.",
    },
  ]}
/>

L'objectif décrit le résultat, ce qui permet à l'agent de s'adapter lorsque le premier indice ne correspond pas à la cause profonde.

Utilisez les objectifs pour un travail séquencé qui doit se poursuivre sans nouvelle invite.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Update the feature implementation, add docs, run tests, and summarize the changed files.",
    },
  ]}
/>

C'est utile lorsque vous connaissez déjà les vérifications ou les artefacts qui doivent exister avant que le travail soit terminé.

### Quand ne pas utiliser les objectifs

N'utilisez pas les objectifs pour des sujets trop vastes ou des discussions ouvertes.

**Contre-exemple :**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Greetings!",
    },
  ]}
/>

<Callout type="warning">
Les agents marqueront immédiatement l'objectif comme atteint pour les non-objectifs.
</Callout>

N'utilisez pas les objectifs pour des tâches reconnues comme impossibles ou insolubles.

**Contre-exemple :**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Prove 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
Les agents marqueront l'objectif comme bloqué s'il paraît impossible ou insoluble.
</Callout>

N'utilisez pas les objectifs avec des intentions ambiguës ou trop complexes.

**Contre-exemple :**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Create a videogame in a single HTML file.",
    },
  ]}
/>

<Callout type="warning">
Les agents peuvent atteindre l'objectif, mais aussi produire des résultats inattendus ou surprenants après un long délai.
</Callout>

## Gérer le cycle de vie

Utilisez le même jeu de commandes pour inspecter ou contrôler l'objectif en cours :

| Commande | Action |
| --- | --- |
| `/goal` ou `/goal status` | Affiche l'objectif en cours et sa progression |
| `/goal pause` | Met en pause l'objectif actif sans le supprimer |
| `/goal resume` | Reprend un objectif en pause ou bloqué |
| `/goal cancel` | Supprime l'objectif en cours |
| `/goal replace <objective>` | Remplace l'objectif en cours par un nouvel objectif |

Un objectif peut s'arrêter de trois façons :

- **atteint** : l'objectif est accompli, Kimi Code l'efface et l'agent résume la façon dont il a mené le travail à bien
- **en pause** : vous l'avez mis en pause, vous avez interrompu le tour, vous avez repris une session comportant un objectif actif, ou une erreur de modèle, de fournisseur ou d'exécution est survenue
- **bloqué** : Kimi Code a besoin d'une entrée, ne peut pas atteindre l'objectif tel qu'énoncé, ou a atteint une limite de budget. Lorsque l'agent bloque un objectif, il rédige un bref message en expliquant la raison.

Intégrez les conditions d'arrêt dans l'objectif. `/goal` ne dispose pas d'option distincte de limite d'arrêt.

## Mettre en file d'attente les objectifs à venir

Les agents atteignent parfois un objectif trop rapidement. Certains utilisateurs sont déçus de ne pouvoir attribuer qu'un seul objectif à la fois. Beaucoup connaissent déjà les objectifs suivants qu'ils souhaitent poursuivre. Ils devaient attendre que l'objectif en cours soit atteint, ouvrir la TUI et soumettre manuellement l'objectif suivant.

Utilisez `/goal next` lorsque vous avez d'autres tâches prêtes mais ne souhaitez pas interrompre l'objectif en cours :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Update the release notes after the tests pass",
    },
  ]}
/>

Les objectifs à venir ne sont pas visibles par l'agent tant que l'objectif en cours s'exécute. Lorsque l'objectif en cours est atteint, Kimi Code démarre le premier objectif à venir de la même manière que lorsque les utilisateurs saisissent `/goal <objective>`.

Si aucun objectif n'est actif, `/goal next <objective>` démarre cet objectif immédiatement. Il se comporte comme `/goal <objective>` et affiche un message d'état avant le lancement de l'objectif.

Gérez les objectifs à venir de manière interactive :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

Dans le gestionnaire, utilisez <kbd>↑</kbd> / <kbd>↓</kbd> pour naviguer, <kbd>Espace</kbd> pour sélectionner un objectif à déplacer, <kbd>↑</kbd> / <kbd>↓</kbd> pour le réordonner, <kbd>E</kbd> pour modifier, <kbd>D</kbd> pour supprimer et <kbd>Échap</kbd> pour annuler. En mode modification, utilisez <kbd>Maj-Entrée</kbd> ou <kbd>Ctrl-J</kbd> pour ajouter une nouvelle ligne, et <kbd>Entrée</kbd> pour enregistrer.

Si l'objectif en cours est en pause, annulé ou bloqué, Kimi Code ne démarre pas l'objectif à venir suivant. Lorsqu'un objectif se bloque alors que des objectifs à venir existent, la TUI vous rappelle qu'ils attendent l'achèvement.

## Utiliser le mode objectif avec discernement

Le mode objectif est utile pour un travail qui peut être vérifié à l'aide de fichiers, de tests, de sorties de commande, d'artefacts générés ou d'un rapport écrit clair. Il l'est moins pour une modification ponctuelle ou une question n'appelant qu'une seule réponse.

En mode d'autorisation `manual`, le travail sur objectif peut s'interrompre en attendant l'approbation d'un appel d'outil. Pour un travail sans surveillance, choisissez un mode d'autorisation adapté au risque du dépôt et aux commandes que l'agent peut exécuter.

En mode d'invite non interactif, seule la création d'objectifs est prise en charge :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Fix the failing checkout test\"",
    },
  ]}
/>

Le mode invite se termine avec le code `0` lorsque l'objectif est atteint, `3` lorsqu'il se bloque, et `6` lorsqu'il se met en pause. `/goal next` et les autres commandes de gestion sont des contrôles de la TUI.
