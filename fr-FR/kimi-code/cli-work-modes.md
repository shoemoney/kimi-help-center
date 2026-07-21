---
title: "Modes de travail"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "Comment utiliser le mode Plan et Thinking mode dans Kimi Code CLI, et dans quels cas les employer."
---

<SeoMeta
  title="Modes de travail de Kimi Code CLI - Centre d’aide Kimi"
  description="Découvrez comment utiliser le mode Plan et Thinking mode dans Kimi Code CLI, et dans quels cas les employer."
/>

# Modes de travail

## Mode Plan

Le mode Plan est un mode de planification en lecture seule qui permet à l’IA d’élaborer un plan de mise en œuvre avant de commencer à coder, afin d’éviter de partir dans la mauvaise direction.

En mode Plan, l’IA ne peut utiliser que des outils en lecture seule (`Glob`, `Grep`, `ReadFile`) pour explorer la base de code. Elle ne peut ni modifier des fichiers ni exécuter de commandes. L’IA rédige le plan dans un fichier dédié, puis vous le soumet pour approbation. Vous pouvez l’approuver, le rejeter ou ajouter des commentaires de révision.

### Activer le mode Plan

Vous pouvez activer le mode Plan de quatre façons :

- **Option de démarrage** : utilisez `kimi --plan` pour lancer une nouvelle session directement en mode Plan
- **Raccourci clavier** : appuyez sur `Shift-Tab` pour activer ou désactiver le mode Plan
- **Commande slash** : saisissez `/plan` ou `/plan on`
- **À l’initiative de l’IA** : pour les tâches complexes, l’IA peut demander à passer en mode Plan via l’outil `EnterPlanMode`. Vous pouvez accepter ou refuser

Vous pouvez également définir `default_plan_mode = true` dans le fichier de configuration afin que chaque nouvelle session démarre par défaut en mode Plan.

Une fois le mode Plan activé, l’invite devient `📋` et la barre d’état inférieure affiche un indicateur bleu `plan`.

### Examiner et approuver les plans

Lorsque l’IA a terminé le plan, elle le soumet pour approbation via `ExitPlanMode`. Le panneau d’approbation affiche le plan complet. Vous pouvez :

- **Approuver l’exécution** : si le plan propose plusieurs pistes de mise en œuvre, l’IA affiche 2 à 3 options libellées (par exemple « Plan A » ou « Plan B (recommandé) ») parmi lesquelles choisir. Une fois votre choix effectué, l’IA quitte le mode Plan et exécute cette piste. S’il n’y a qu’une seule piste, un bouton **Approuver** s’affiche
- **Rejeter** : rejeter le plan et rester en mode Plan. Vous pouvez donner votre avis dans la conversation
- **Rejeter et quitter** : rejeter le plan et quitter le mode Plan en une seule étape
- **Réviser** : saisir des commentaires de révision. L’IA mettra le plan à jour en conséquence et le soumettra à nouveau

Appuyez sur `Ctrl-E` pour consulter le plan complet dans la visionneuse plein écran.

### Gérer le mode Plan

Utilisez la commande `/plan` pour gérer le mode Plan :

- `/plan` : activer ou désactiver le mode Plan
- `/plan on` : activer le mode Plan
- `/plan off` : désactiver le mode Plan
- `/plan view` : afficher le plan actuel
- `/plan clear` : effacer le fichier de plan actuel

## Thinking mode

Thinking mode permet à l’IA de réfléchir plus en profondeur avant de répondre, ce qui le rend adapté aux problèmes complexes.

Vous pouvez utiliser la commande `/model` pour changer de modèle et de Thinking mode. Après sélection d’un modèle, si celui-ci prend en charge Thinking mode, le système vous demandera si vous souhaitez l’activer. Vous pouvez également l’activer au démarrage avec l’option `--thinking` :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> Astuce : Thinking mode doit être pris en charge par le modèle actuel. Certains modèles, comme `kimi-k2-thinking-turbo`, utilisent toujours Thinking mode et ne permettent pas de le désactiver.
