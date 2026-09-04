---
title: "在 Kimi Code 中使用技能"
slug: "use-skills-in-code"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="在 Kimi Code 中使用技能 - Kimi 帮助中心"
  description="了解如何在 Kimi Code CLI 中创建和调用技能，统一团队编码规范，并自动化开发工作流。"
  ogType="article"
/>

# 在 Kimi Code 中使用技能

Kimi Code 是一款专为开发者打造的 AI 编程助手，可直接在终端或编辑器中运行，帮助你编写代码、修复 bug、生成文档。Kimi Code 支持通过 `SKILL.md` 文件提供基于知识的指引；AI 读取后，会遵循其中定义的标准执行任务。它适合用于定义代码风格、工作流和最佳实践。

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="使用斜杠命令调用技能"
/>

## 调用技能

Kimi Code CLI 支持使用斜杠命令调用技能：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

例如，输入 `/skill:git-commits` 后，Kimi Code 会读取对应的 `SKILL.md` 内容，并将其作为指令发送给智能体。

你也可以在斜杠命令后追加补充说明，这些内容会被添加到技能指令的末尾：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

在普通对话中，你通常无需手动调用——智能体会根据上下文自动判断是否需要读取技能内容。

## 创建你的第一个技能

创建技能只需两步：在 Skills 目录下创建一个子目录，然后在其中创建 `SKILL.md` 文件。

推荐存放位置（适用于所有项目）：

<CodePreview
  files={[
    {
      name: "目录结构",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` 使用 YAML Frontmatter 定义元数据，随后用 Markdown 编写核心规范：

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Frontmatter 中的 `name` 和 `description` 都是可选字段。省略时，系统会默认使用目录名。

### 示例

你的团队要求提交信息遵循 Conventional Commits 格式，但每次反复说明十分繁琐。把它写成一个技能后，以后只需一条命令即可调用。

**步骤 1：创建技能文件**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**步骤 2：完成代码修改后，调用该技能**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code 会读取你的规范，并结合任务描述，直接输出格式正确的提交信息，无需你重复说明格式要求。

## 流程技能：定义多步骤工作流

普通技能用于提供静态规范，而 **流程技能** 可以定义自动化的多步骤流程。

在 Frontmatter 中设置 `type: flow`，并嵌入 Mermaid 或 D2 格式的流程图，即可创建流程技能。

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

使用 `/flow:<name>` 命令执行。智能体会从 `BEGIN` 节点开始，按顺序自动完成每一步，直到到达 `END`。

## 技能加载机制

Kimi Code CLI 会按以下优先级搜索并加载技能（先匹配者优先）：

1. **内置技能**：随软件包安装，提供基础能力。
2. **用户级技能**：存放在用户主目录，适用于所有项目。
3. **项目级技能**：存放在项目目录，仅适用于该项目。

你也可以使用 `--skills-dir` 参数手动指定额外的技能目录：

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
Kimi Code CLI 内置了两个实用技能：`kimi-cli-help`（解答 CLI 使用问题）和 `skill-creator`（引导你创建新技能）。输入 `/skill:skill-creator` 即可开始。
</Callout>

如需查看完整配置选项和参数说明，请参阅 [Kimi Code CLI 技能文档](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html)。
