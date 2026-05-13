---
title: "Using Skills in Kimi Code"
slug: "use-skills-in-code"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Using Skills in Kimi Code - Kimi Help Center"
  description="Learn how to create and invoke Skills in Kimi Code CLI to lock in your team's coding standards and workflows as reusable AI instructions."
  ogType="article"
/>

# Using Skills in Kimi Code

## What are Skills in Kimi Code?

Kimi Code is an AI coding assistant built for developers — it runs in your terminal or editor and helps you write code, fix bugs, and generate documentation.

In Kimi Code, Skills act as **reusable specification guides**. Write your team's coding style, commit conventions, or review standards into a Skill once, and Kimi Code will follow them automatically every time — no need to repeat yourself.

Kimi Code supports two extension mechanisms with different purposes:

- **Skills**: Provide guidance through a `SKILL.md` file. The AI reads it and follows the rules inside. Best for defining code style, workflows, and best practices.
- **Plugins**: Declare executable tools via `plugin.json`. The AI can call them directly to get results. Best for wrapping scripts, API calls, and database queries.

This article covers Skills.

## Invoke a Skill

Use a slash command to invoke a Skill in Kimi Code CLI:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

For example, typing `/skill:git-commits` tells Kimi Code to read the corresponding `SKILL.md` and send its contents as instructions to the agent.

You can also append extra context after the command — it gets added after the Skill's instructions:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix the Safari layout issue on the login page",
    },
  ]}
/>

In a regular conversation, you don't need to invoke Skills manually — the agent reads context and decides on its own whether to load a Skill.

## Create Your First Skill

Creating a Skill takes two steps: create a subdirectory under your Skills folder, then add a `SKILL.md` file inside it.

Recommended location (applies to all your projects):

<CodePreview
  files={[
    {
      name: "Directory structure",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` uses a YAML frontmatter block for metadata, followed by Markdown content with your rules:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: Code style guide for my project\n---\n\n## Code Style\n\n- 4-space indentation\n- camelCase for variable names\n- snake_case for function names\n- Every function must have a docstring\n- Max line length: 100 characters",
    },
  ]}
/>

Both `name` and `description` in the frontmatter are optional — if omitted, the directory name is used as the Skill name.

### Example: Lock in your Git commit convention

Your team requires Conventional Commits format, but re-explaining the rules every session gets tedious. Turn the convention into a Skill and invoke it with a single command.

**Step 1: Create the Skill file**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message convention using Conventional Commits format\n---\n\n## Git Commit Convention\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): add OAuth login support\n- fix(api): fix empty response on user query",
    },
  ]}
/>

**Step 2: After making your changes, invoke the Skill**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix Safari layout misalignment on the login page",
    },
  ]}
/>

Kimi Code reads your convention, combines it with the task description, and outputs a properly formatted commit message — no further explanation needed on your part.

## Flow Skills: Define Multi-Step Workflows

A standard Skill provides static guidance. A **Flow Skill** goes further — it defines an automated, multi-step workflow that the agent executes sequentially.

To create a Flow Skill, set `type: flow` in the frontmatter and embed a Mermaid or D2 flowchart in the body:

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes and list all modified files and functions]\nB --> C{Does the code meet quality standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Run it with `/flow:<name>`. The agent starts at `BEGIN`, works through each node in order, and stops when it reaches `END`.

## How Skills Are Loaded

Kimi Code CLI discovers and loads Skills in priority order — if two Skills share the same name, the one loaded first wins:

1. **Built-in Skills** — installed with the package, provide core capabilities
2. **User-level Skills** — stored in your home directory, apply to all projects
3. **Project-level Skills** — stored inside a project directory, apply only to that project

You can also specify additional Skills directories manually with `--skills-dir`:

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
Kimi Code CLI ships with two built-in Skills: `kimi-cli-help` (answers questions about the CLI itself) and `skill-creator` (guides you through creating a new Skill). Type `/skill:skill-creator` to get started.
</Callout>

For the full list of configuration options and parameters, see the [Kimi Code CLI Skills documentation](https://www.kimi.com/code/docs/kimi-code-cli/customization/skills.html).