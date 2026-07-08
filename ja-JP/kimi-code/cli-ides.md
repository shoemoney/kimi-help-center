---
title: "IDE連携"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "ACPを介してKimi Code CLIをIDEに統合します。"
---

<SeoMeta
  title="IDE連携 - Kimi ヘルプセンター"
  description="Agent Client Protocol (ACP) を介して Kimi Code CLI を IDE に統合します。Zed、JetBrains IDE、Paseo のセットアップ手順とトラブルシューティングを紹介します。"
/>

# IDEでKimi Code CLIを使う

<Callout type="info">
Kimi Code CLI は [Agent Client Protocol (ACP)](https://agentclientprotocol.com/get-started/introduction) による IDE 連携に対応しており、エディタ内でそのまま AI 支援コーディングを利用できます。
</Callout>

## 前提条件

IDE を設定する前に、Kimi Code CLI がインストール済みで、ログイン設定が完了していることを確認してください。

ACP アダプタは `kimi acp` サブコマンドとして提供されています。IDE はこれを子プロセスとして起動し、JSON-RPC を使って stdin/stdout 経由で通信します。IDE がセッションを作成するたびに、CLI は既存の認証状態を再利用するため、再ログインは不要です。

<Callout type="tip">
macOS の IDE GUI から起動された子プロセスは、通常、ターミナルシェルの `PATH` を**継承しません**。`kimi` が `/usr/local/bin` などのシステムディレクトリにない場合は、IDE 設定で絶対パスを指定してください。有効なパスを確認するには、ターミナルで `which kimi` を実行します。
</Callout>

## ZedでKimi Code CLIを使う

[Zed](https://zed.dev/) は、ACP をネイティブにサポートするモダンなエディタです。

Zed の設定ファイル `~/.config/zed/settings.json` に、次の内容を追加します。

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

設定項目:

- `type`: 固定値 `"custom"`
- `command`: Kimi Code CLI 実行ファイルへのパス。`kimi` が `PATH` 上にない場合は、フルパス（例: `/Users/you/.local/bin/kimi`）を指定します。
- `args`: 起動時の引数。`acp` サブコマンドにより、CLI は ACP モードに切り替わります。
- `env`: 追加の環境変数。通常は空のままで構いません。Zed がデフォルトの環境を自動的に注入します。

保存後、Zed の Agent パネルで新しい会話を開くと、上記の設定を使って `Kimi Code CLI` の ACP サブプロセスが起動します。Zed の `agent_servers` セクションで宣言された MCP サーバーも、ACP プロトコルを通じて kimi 側へ転送されます。

## JetBrains IDEでKimi Code CLIを使う

JetBrains IDE（IntelliJ IDEA、PyCharm、WebStorm など）は、AI チャットプラグインを通じて ACP に対応しています。

JetBrains AI サブスクリプションをお持ちでない場合でも、Registry で `llm.enable.mock.response` を有効にすると、ACP のみのシナリオで AI チャットパネルにアクセスできます。Shift を 2 回押し、「Registry」を検索して開きます。

AI チャットパネルのメニューで **ACPエージェントを設定** をクリックし、次の設定を追加します。

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains は `command` フィールドを厳密に扱うため、必ず**絶対パス**を使用してください。絶対パスはターミナルで `which kimi` を実行すると取得できます。保存後、AI チャットのエージェントセレクタに `Kimi Code CLI` が表示されます。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## PaseoでKimi Code CLIを使う

[Paseo](https://paseo.sh/) は、デスクトップ、Web、モバイルから agent CLI を実行・監視できるセルフホスト型オーケストレータです。IDE と同じように、ACP 経由で Kimi Code CLI に接続します。

Paseo に組み込まれている ACP プロバイダカタログから **Kimi Code CLI** を選択するか、`~/.paseo/config.json` にカスタムプロバイダを追加します。

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Paseo の汎用 ACP アダプタはログインフローを起動しないため、先にターミナルでログインを完了してください（[前提条件](#前提条件)を参照）。完了していない場合、セッション作成は `Authentication required` で失敗します。

## トラブルシューティング

- **セッションがすぐに切断される / IDE に "agent exited" と表示される**: 多くの場合、`command` のパスが誤っているか、ログインが未完了です。まずターミナルで `kimi acp` を実行して確認してください。stdin 待ちで停止する場合、CLI 自体は正常で、問題は IDE 設定にあります。すぐにエラーで終了する場合は、エラーメッセージに従ってください（最も多いのは `/login` の実行が必要なケースです）。
- **IDE に "auth required" と表示される**: CLI に利用可能な認証 token がありません。IDE を終了し、ターミナルで `kimi` を実行してログインを完了してから、IDE を再起動してください。
- **MCP ツールが表示されない**: IDE で設定した MCP トランスポートタイプがサポートされているか、`kimi acp` の機能テーブルで確認してください。Kimi Code CLI の ACP アダプタは現在、`http` と `stdio` トランスポートに対応しています。`sse` と `acp` タイプは黙って除外され、警告がログに書き込まれます。
