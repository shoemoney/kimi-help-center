---
title: "Using Skills in Kimi Code"
slug: "use-skills-in-code"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Using Skills in Kimi Code - Kimi Help Center"
  description="Learn how to create and invoke Skills in Kimi Code CLI, turning your team’s coding standards and workflows into reusable AI instructions."
  ogType="article"
/>

# Using Skills in Kimi Code

Kimi Code is an AI coding assistant built for developers. It runs directly in your terminal or editor to help you write code, fix bugs, and generate documentation. Kimi Code supports knowledge-based guidance through `SKILL.md`; after reading it, the AI follows the standards defined inside. This is ideal for defining code style, workflows, and best practices.

<Frames
  src="./images/skills/code-skill-zh.png"
  alt="Invoke a Skill with a slash command"
/>

## Invoking Skills

Kimi Code CLI invokes Skills with slash commands:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

For example, if you enter `/skill:git-commits`, Kimi Code reads the corresponding `SKILL.md` and sends its contents to the Agent as instructions.

You can also add extra context after the slash command. This content is appended after the Skills instructions:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits Fix the user login issue",
    },
  ]}
/>

For normal conversations, you do not need to invoke Skills manually—the Agent will decide from context whether it should read the Skills content.

## Create your first Skills

Creating Skills takes just two steps: create a subdirectory under the Skills directory, then create a `SKILL.md` file inside it.

Recommended location, applied to all projects:

<CodePreview
  files={[
    {
      name: "Directory structure",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` uses YAML Frontmatter for metadata, followed by the standards written in Markdown:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: Coding style guidelines for my project\n---\n\n## Code style\n\n- Use 4 spaces for indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function must include a docstring\n- Keep each line to 100 characters or fewer",
    },
  ]}
/>

Both `name` and `description` in Frontmatter are optional. If omitted, the directory name is used by default.

### Example: use Skills to standardize Git commit messages

Suppose your team requires commit messages to follow the Conventional Commits format, but repeating the requirements every time is tedious. Put the rules into Skills, and you can invoke them with a single command.

**Step 1: Create the Skill file**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message guidelines using the Conventional Commits format\n---\n\n## Git commit guidelines\n\nUse the Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): add OAuth login support\n- fix(api): fix user queries returning null values",
    },
  ]}
/>

**Step 2: After completing your code changes, invoke Skills**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits Fixed a style misalignment on the login page in Safari",
    },
  ]}
/>

Kimi Code reads your guidelines, combines them with the task description, and outputs a properly formatted commit message—no need to repeat any formatting requirements.

## Flow Skills: define multi-step workflows

Regular Skills provide static guidelines. **Flow Skills** define an auto-executed, multi-step process.

Set `type: flow` in Frontmatter and embed a flowchart in Mermaid or D2 format in the content to create Flow Skills.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes and list all modified files and features]\nB --> C{Does the code meet quality standards?}\nC -->|Yes| D[Generate a code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Run it with `/flow:<name>`. The Agent starts from the `BEGIN` node and automatically completes each step in the flowchart until it reaches `END`.

## How Skills are loaded

Kimi Code CLI looks up and loads Skills in the following order. If multiple Skills share the same name, the one loaded first takes precedence:

1. **Built-in Skills**: installed with the package and provide basic capabilities
2. **User-level Skills**: stored in the home directory and available to all projects
3. **Project-level Skills**: stored in the project directory and available only within that project

You can also manually specify additional Skills directories with the `--skills-dir` parameter:

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
Kimi Code CLI includes two useful Skills: `kimi-cli-help` for answering CLI usage questions, and `skill-creator` for guiding you through creating a new Skill. Enter `/skill:skill-creator` to get started.
</Callout>

For the full list of configuration options and parameters, see the [Kimi Code CLI Skills documentation](https://www.kimi.com/code/docs/kimi-code-cli/customization/skills.html).
