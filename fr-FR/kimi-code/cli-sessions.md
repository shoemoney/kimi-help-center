---
title: "Sessions et contexte"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Sessions \u0026 context - Centre d'aide Kimi"
  description="Kimi Code CLI supports multi-session management and context persistence, allowing you to pause and resume work at any time."
/>

# Sessions et contexte

Kimi Code CLI prend en charge la gestion multi-sessions et la persistance du contexte, ce qui vous permet de suspendre puis de reprendre votre travail à tout moment.

## Reprise de session

Vous pouvez reprendre une session précédente de plusieurs manières :

### Poursuivre la session la plus récente

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

Utilisez l'option `--continue` (ou `-c`) pour reprendre la dernière conversation.
### Spécifier un identifiant de session

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session \u003csession-id\u003e",
    },
  ]}
/>

Utilisez l'option `--session` pour restaurer une session précise.

### Parcourir et changer de session

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

Exécutez `/sessions` (ou `/resume`) pour afficher la liste des sessions et en sélectionner une à restaurer.
## Relecture au démarrage

Lors de la reprise d'une session, Kimi Code CLI rejoue automatiquement l'historique de la conversation, ce qui vous aide à retrouver rapidement le contexte et l'avancement précédents.

## Persistance de l'état

L'état suivant est automatiquement sauvegardé et restauré d'une session à l'autre :

- **Décisions d'approbation** : les décisions telles que « Autoriser pour la session » sont mémorisées.
- **Sous-agents dynamiques** : les configurations de sous-agents créées au cours d'une session sont conservées.
- **Répertoires supplémentaires** : les répertoires de travail ajoutés via des commandes sont également conservés.

Vous pouvez ainsi poursuivre votre travail en toute fluidité après avoir repris une session.

## Effacer et compacter

Kimi Code CLI compresse automatiquement le contexte lorsque c'est nécessaire afin que la conversation puisse se poursuivre. Vous pouvez aussi gérer le contexte manuellement à l'aide de commandes slash :

### Effacer le contexte

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

Saisissez `/clear` (ou `/reset`) pour effacer tout le contexte de la session en cours et démarrer une nouvelle conversation :

### Compacter le contexte

Saisissez `/compact` pour compresser le contexte — en conservant les informations essentielles tout en réduisant la consommation de tokens :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

Vous pouvez également ajouter des instructions lors du compactage pour indiquer à l'IA les informations à privilégier :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### État du contexte

La barre d'état en bas de la CLI affiche en temps réel le taux d'utilisation du contexte, ce qui vous aide à surveiller sa consommation. Lorsque le taux d'utilisation est élevé, utilisez `/compact` pour compresser le contexte et éviter de perdre des informations importantes.
