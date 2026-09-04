---
title: "Utiliser les Skills dans Kimi Code"
slug: "use-skills-in-code"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Utiliser les Skills dans Kimi Code - Centre d'aide Kimi"
  description="Découvrez comment créer et invoquer des Skills dans le CLI Kimi Code afin de standardiser les conventions de code de votre équipe et d'automatiser vos workflows de développement."
  ogType="article"
/>

# Utiliser les Skills dans Kimi Code

Kimi Code est un assistant de programmation IA conçu spécialement pour les développeurs. Il s'exécute directement dans le terminal ou l'éditeur pour vous aider à écrire du code, corriger des bugs et générer de la documentation. Kimi Code permet de fournir des consignes basées sur des connaissances via des fichiers `SKILL.md` : une fois ceux-ci lus, l'IA applique les règles qui y sont définies. Idéal pour décrire des styles de code, des workflows et des bonnes pratiques.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Invoquer des skills à l'aide d'une commande slash"
/>

## Invoquer des Skills

Le CLI Kimi Code vous permet d'invoquer des Skills à l'aide de commandes slash :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Par exemple, saisir `/skill:git-commits` amènera Kimi Code à lire le contenu du `SKILL.md` correspondant et à l'envoyer comme instruction à l'Agent.

Vous pouvez également ajouter une description supplémentaire après la commande slash : celle-ci sera ajoutée à la fin de l'instruction du Skill :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

Pour les conversations ordinaires, l'invocation manuelle n'est pas nécessaire : l'Agent détermine automatiquement, en fonction du contexte, s'il doit lire le contenu d'un Skill.

## Créer votre premier Skill

Créer un Skill ne demande que deux étapes : créer un sous-répertoire dans le répertoire des Skills, puis y créer un fichier `SKILL.md`.

Emplacement de stockage recommandé (valable pour tous les projets) :

<CodePreview
  files={[
    {
      name: "Structure du répertoire",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` utilise un Frontmatter YAML pour définir les métadonnées, suivi de Markdown pour les spécifications principales :

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Les champs `name` et `description` du Frontmatter sont tous deux facultatifs. S'ils sont omis, le nom du répertoire est utilisé par défaut.

### Exemple

Votre équipe exige que les messages de commit respectent le format Conventional Commits, mais devoir l'expliquer à chaque fois devient fastidieux. En l'écrivant sous forme de Skill, il vous suffira désormais d'une seule commande pour l'invoquer.

**Étape 1 : créer le fichier de Skill**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**Étape 2 : après avoir terminé vos modifications de code, invoquez le Skill**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code lira vos règles, les combinera avec la description de la tâche et produira directement un message de commit correctement formaté, sans que vous ayez à répéter la moindre exigence de format.

## Flow Skills : définir des workflows en plusieurs étapes

Là où les Skills ordinaires fournissent des règles statiques, les **Flow Skills** permettent de définir des processus automatisés en plusieurs étapes.

Définissez `type: flow` dans le Frontmatter et intégrez un diagramme au format Mermaid ou D2 pour créer un Flow Skill.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Exécutez-le avec la commande `/flow:<name>`. L'Agent démarrera depuis le nœud `BEGIN` et accomplira automatiquement chaque étape dans l'ordre jusqu'à atteindre `END`.

## Mécanisme de chargement des Skills

Le CLI Kimi Code recherche et charge les Skills selon la priorité suivante (le premier trouvé l'emporte) :

1. **Skills intégrés** : installés avec le paquet logiciel, ils fournissent les fonctionnalités de base.
2. **Skills au niveau utilisateur** : stockés dans le répertoire personnel, applicables à tous les projets.
3. **Skills au niveau projet** : stockés dans le répertoire du projet, applicables uniquement à ce projet.

Vous pouvez également indiquer manuellement des répertoires de Skills supplémentaires à l'aide du paramètre `--skills-dir` :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
Le CLI Kimi Code intègre deux Skills pratiques : `kimi-cli-help` (répond aux questions d'utilisation du CLI) et `skill-creator` (vous guide dans la création de nouveaux Skills). Saisissez `/skill:skill-creator` pour commencer.
</Callout>

Pour l'ensemble des options de configuration et l'explication des paramètres, veuillez consulter la [documentation des Skills du CLI Kimi Code](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).
