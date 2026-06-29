---
title: "セッションとコンテキスト"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="セッションとコンテキスト - Kimi ヘルプセンター"
  description="Kimi Code CLI は、複数セッションの管理とコンテキストの永続化に対応しているため、作業をいつでも中断し、再開できます。"
/>

# セッションとコンテキスト

Kimi Code CLI は、複数セッションの管理とコンテキストの永続化に対応しているため、作業をいつでも中断し、再開できます。

## セッションの再開

以前のセッションは、いくつかの方法で再開できます。

### 最新のセッションを続ける

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

最後の会話を続けるには、`--continue`（または `-c`）フラグを使います。
### セッション ID を指定する

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session \u003csession-id\u003e",
    },
  ]}
/>

特定のセッションを復元するには、`--session` フラグを使います。

### 一覧から選んで切り替える

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

`/sessions`（または `/resume`）を実行するとセッション一覧が表示され、復元するセッションを選択できます。
## 起動時の再生

セッションを再開すると、Kimi Code CLI は会話履歴を自動的に再生します。これにより、以前のコンテキストや進捗をすばやく思い出せます。

## 状態の永続化

次の状態は、セッションをまたいで自動的に保存・復元されます。

- **承認の判断**: 「このセッションで許可」などの判断が記憶されます。
- **動的サブエージェント**: セッション中に作成したサブエージェント設定が保持されます。
- **追加ディレクトリ**: コマンドで追加した作業ディレクトリも保持されます。

つまり、セッションを再開すれば、前回の作業をそのままスムーズに続けられます。

## クリアと圧縮

Kimi Code CLI は、会話を継続できるよう、必要に応じてコンテキストを自動的に圧縮します。スラッシュコマンドを使って、コンテキストを手動で管理することもできます。

### コンテキストをクリアする

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

現在のセッション内のすべてのコンテキストをクリアし、新しい会話を始めるには、`/clear`（または `/reset`）を入力します。

### コンテキストを圧縮する

重要な情報を残しつつ token 使用量を減らすには、`/compact` を入力してコンテキストを圧縮します。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

圧縮時に指示を添えて、どの情報を優先すべきかを AI に伝えることもできます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact データベース移行に関する議論を優先して残す",
    },
  ]}
/>

### コンテキストの状態

CLI の下部にあるステータスバーには、現在のコンテキスト使用率がリアルタイムで表示されるため、コンテキストの消費状況を確認できます。使用率が高い場合は、`/compact` でコンテキストを圧縮し、重要な情報が失われないようにしてください。
