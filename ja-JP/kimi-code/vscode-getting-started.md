---
title: "Kimi Code for VS Code クイックスタート"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code for VS Code クイックスタート - Kimi Help Center"
  description="Kimi Code for VS Code は Visual Studio Code に統合される拡張機能です。インストール後は、質問、コード差分の確認、変更の迅速なコミットができます..."
/>

# Kimi Code for VS Code クイックスタート

<Callout type="warning">
**VS Code 拡張機能の互換性に関するお知らせ**

Kimi Code for VS Code は現在、従来の Python CLI を利用しているユーザーの新規インストールにのみ対応しています。すでにプラグインをインストール済みの既存ユーザーは、新しい CLI へアップグレードした後も引き続き利用できます。現時点では、TS 版 CLI ユーザーのインストールには対応していません。
</Callout>

Kimi Code for VS Code は Visual Studio Code に統合される拡張機能です。インストール後は、エディター内で直接質問したり、コード差分を確認したり、変更をすばやくコミットしたりできます。 

この拡張機能は、参照したファイルの内容を読み取り、視覚的なインターフェースで変更案を表示します。実行はあなたの確認後に行われます。ワークフロー全体を自分で制御しながら、開発効率を大きく高められます。

この拡張機能は VS Code 内にネイティブのチャットパネルを提供し、次の機能に対応しています。
- `@` 記号でファイルやフォルダーを参照。
- `/` コマンドでプロジェクトスキャンとコンテキスト管理を実行。
- ファイル変更を表示する差分ビューとロールバック対応。
- MCP サーバーを統合して外部ツールを呼び出し。

---

## インストール

1.  **前提条件**: Kimi アカウントのサブスクリプション、または Kimi API キーが必要です。
2.  **マーケットプレイス**: [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code) からインストールします。

<Callout type="tip">
インストール後に拡張機能が表示されない場合は、VS Code を再起動するか、コマンドパレットで **Developer: Reload Window** を実行してください（Mac: `Cmd+Shift+P`、Win/Linux: `Ctrl+Shift+P`）。
</Callout>

---

## 認証

Kimi Code は 2 つの認証モードに対応しています。**歯車アイコン**からいつでも切り替えられます。

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="認証設定"
  width={800}
  height={450}
/>

- **Kimi アカウントモード**: ログインボタンをクリックし、ブラウザー経由で認証します。
- **API キーモード**: API キーを設定済みの場合は、クリックしてログインをスキップできます。

---

## 一般的なワークフロー

コードの読解: `@` と入力してファイルまたはフォルダーを選択し、コードの流れについて説明を依頼したうえで、続けて追加の質問ができます。

リファクタリング: `@src/feature/` などで対象コードを参照し、リファクタリング案を依頼します。差分を確認して必要な変更だけ承認し、必要に応じてロールバックします。

デバッグ: エラーメッセージやスタックトレースを貼り付け、関連ファイルを参照して、原因の診断と修正を依頼します。その後、提案された変更を承認します。

プロジェクト概要の把握: `@src/services/` などのフォルダーを参照し、モジュールマップやアーキテクチャ概要を依頼します。続けて依存関係や弱点について質問できます。

---

## コマンドとショートカット

`CodePreview` を使うと、コマンドや主要ショートカットをすばやく確認できます。

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Kimi 入力ボックスにフォーカス\nAlt+K : 現在のファイル参照を挿入\nCtrl+N : 新しい会話",
    },
  ]}
/>

| ショートカット | 機能 |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Kimi 入力ボックスにフォーカス |
| `Alt+K` | 現在のファイル参照を挿入 |
| `Ctrl+N` / `Cmd+N` | 新しい会話 |
| `↑` / `↓` | 入力履歴を閲覧 |

<Callout type="info">
コマンドパレットで **Kimi Code** と入力すると、新しいタブで開く、サイドバーで開く、セッションを管理するなど、さらに多くのコマンドにアクセスできます。
</Callout>
