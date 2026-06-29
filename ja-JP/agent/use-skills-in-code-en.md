---
title: "Kimi Code で Skill を使う"
slug: "use-skills-in-code"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code で Skill を使う - Kimi Help Center"
  description="Kimi Code CLI で Skill を作成・呼び出し、チームのコーディング規約を標準化し、開発ワークフローを自動化する方法を説明します。"
  ogType="article"
/>

# Kimi Code で Skill を使う

Kimi Code は開発者のために設計された AI プログラミングアシスタントです。ターミナルやエディタ上で直接動作し、コードの作成、バグ修正、ドキュメント生成を支援します。Kimi Code では、`SKILL.md` ファイルを通じて知識ベースのガイドラインを提供できます。AI はそれを読み込み、定義された基準に沿って動作します。コードスタイル、ワークフロー、ベストプラクティスの定義に適しています。

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="スラッシュコマンドで Skill を呼び出す"
/>

## Skill を呼び出す

Kimi Code CLI では、スラッシュコマンドで Skill を呼び出せます。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

たとえば `/skill:git-commits` と入力すると、Kimi Code は対応する `SKILL.md` の内容を読み取り、Agent への指示として送信します。

スラッシュコマンドの後ろに追加の説明を書くこともできます。その説明は Skill の指示の末尾に追加されます。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

通常の会話では手動で呼び出す必要はありません。Agent が文脈に応じて、Skill の内容を読むべきかどうかを自動的に判断します。

## 最初の Skill を作成する

Skill の作成は 2 ステップだけです。Skills ディレクトリ内にサブディレクトリを作成し、その中に `SKILL.md` ファイルを作成します。

推奨される保存場所（すべてのプロジェクトで有効）:

<CodePreview
  files={[
    {
      name: "ディレクトリ構成",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` では YAML Frontmatter でメタデータを定義し、その後に Markdown で主要な仕様を記述します。

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: 自分のプロジェクトのコードスタイル標準\n---\n\n## コードスタイル\n\n- インデントはスペース 4 つにする\n- 変数名には camelCase を使う\n- 関数名には snake_case を使う\n- すべての関数に docstring を付ける\n- 1 行は 100 文字以内にする",
    },
  ]}
/>

Frontmatter の `name` と `description` はどちらも任意項目です。省略した場合は、ディレクトリ名がデフォルトとして使われます。

### 例

チームでコミットメッセージを Conventional Commits 形式にそろえる必要があるものの、毎回説明するのは手間がかかります。これを Skill として書いておけば、以後は 1 つのコマンドで呼び出せます。

**ステップ 1: Skill ファイルを作成する**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Conventional Commits 形式を使った Git コミットメッセージ標準\n---\n\n## Git コミット標準\n\nConventional Commits 形式を使う: type(scope): description\n\n使用できる type: feat, fix, docs, style, refactor, test, chore\n\n例:\n- feat(auth): OAuth ログイン対応を追加\n- fix(api): ユーザークエリが空の値を返す問題を修正",
    },
  ]}
/>

**ステップ 2: コード変更が完了したら Skill を呼び出す**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code はあなたの標準を読み取り、タスクの説明と組み合わせて、形式要件を繰り返し伝えなくても、適切な形式のコミットメッセージをそのまま出力します。

## Flow Skill: 複数ステップのワークフローを定義する

通常の Skill が静的な標準を提供するのに対し、**Flow Skill** では複数ステップの自動化プロセスを定義できます。

Frontmatter で `type: flow` を設定し、Mermaid または D2 形式のフローチャートを埋め込むことで、Flow Skill を作成できます。

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: コードレビューのワークフロー\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

`/flow:<name>` コマンドで実行します。Agent は `BEGIN` ノードから開始し、`END` に到達するまで各ステップを順番に自動実行します。

## Skill の読み込みのしくみ

Kimi Code CLI は、次の優先順位で Skill を検索して読み込みます（最初に一致したものが優先されます）。

1. **内蔵 Skill**: ソフトウェアパッケージと一緒にインストールされ、基本的な機能を提供します。
2. **ユーザーレベルの Skill**: ホームディレクトリに保存され、すべてのプロジェクトに適用されます。
3. **プロジェクトレベルの Skill**: プロジェクトディレクトリに保存され、そのプロジェクトにのみ適用されます。

`--skills-dir` パラメータを使って、追加の Skills ディレクトリを手動で指定することもできます。

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
Kimi Code CLI には便利な内蔵 Skill が 2 つあります。`kimi-cli-help`（CLI の使い方に関する質問に回答）と `skill-creator`（新しい Skill の作成をガイド）です。始めるには `/skill:skill-creator` と入力してください。
</Callout>

設定オプションとパラメータの詳しい説明については、[Kimi Code CLI Skills ドキュメント](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html)を参照してください。
