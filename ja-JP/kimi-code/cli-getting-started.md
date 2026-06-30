---
title: "はじめに"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Kimi Code CLIのインストール、ログイン、入門ガイド。"
---

<SeoMeta
  title="Kimi Code CLIのインストールとクイックスタート - Kimi ヘルプセンター"
  description="Kimi Code CLIを始めましょう。インストールコマンド、ターミナルとブラウザでの使い方、初回ログイン、/initによるAGENTS.md生成までを説明します。"
/>

# Kimi Code CLIを始める

Kimi Code CLIは、ターミナル上で動作するAIエージェントです。コードの読み取りや変更、シェルコマンドの実行、ファイル検索、Webページの取得を行いながら、作業中のフィードバックに応じて次の手順を自律的に計画・調整し、ソフトウェア開発や日常的なターミナル操作を支援します。

次のような場面に適しています。

- **コードの作成・変更**：新機能の実装、バグ修正、リファクタリングの完了
- **プロジェクトの理解**：初めて触れるコードベースを探索し、アーキテクチャや実装に関する質問に回答
- **タスクの自動化**：ファイルの一括処理、ビルドやテストの実行、複数スクリプトの連携

CLIはTypeScriptで書かれ、npm経由で配布され、Node.js上で動作します。

## 始める前に

- **オペレーティングシステム**：macOS、Linux、またはWindows（PowerShell経由）
- **Kimiアカウント**：有効なKimiメンバーシップのサブスクリプション、または呼び出し可能なAPIキー

<Callout type="tip">
Kimi Code CLIは、完全対話型のTUIアプリケーションです。最適な表示体験のため、[Kitty](https://sw.kovidgoyal.net/kitty/)や[Ghostty](https://ghostty.org/)など、トゥルーカラーとリガチャに対応したターミナルで実行してください。
</Callout>

## インストール

インストール方法は2つあります。公式インストールスクリプト（推奨、Node.jsの事前インストール不要）と、npmによるグローバルインストールです。

### インストールスクリプト（推奨）

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Kimi Code CLIのインストール"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows（PowerShell）:

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

このスクリプトは最新リリースを自動でダウンロードし、チェックサムを検証したうえで、`kimi`実行ファイルを`PATH`上に配置します。

<Callout type="tip">
Windowsでは、初回起動前に[Git for Windows](https://gitforwindows.org/)をインストールしてください。Kimi Code CLIは同梱のGit Bashをシェル環境として使用します。Git Bashをカスタムの場所にインストールしている場合は、`KIMI_SHELL_PATH`に`bash.exe`の絶対パスを設定してください。
</Callout>

### npmでインストール

Node.js 22.19.0以降がすでにインストールされている場合は、npmから直接インストールできます。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

pnpmを使う場合は次のとおりです。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### インストールの確認

インストール後、実行ファイルが利用できることを確認します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
`kimi`コマンドが見つからない場合は、ターミナルを開き直すか、`source ~/.bashrc`（または`~/.zshrc`）を実行してください。
</Callout>

> macOS Gatekeeperの影響により、`kimi`の初回実行には通常より時間がかかることがあります。以降の起動を速くするには、使用しているターミナルアプリを**システム設定 → プライバシーとセキュリティ → デベロッパツール**に追加してください。

## アップグレードとアンインストール

**アップグレード**：`kimi upgrade`を実行します。CLIが最新バージョンを確認し、更新オプションを表示します。現在のインストール元に応じてアップグレードするには、`Install update now`を選択します。パッケージマネージャーから直接アップグレードすることもできます。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**アンインストール**：スクリプトでインストールした場合は、`kimi`実行ファイルを削除します。npmでインストールした場合は次を実行します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## 初回起動

### 対話型ターミナル

プロジェクトディレクトリに移動し、`kimi`を実行して対話型UIを起動します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### 1回だけ指示する

対話型UIに入らずに1つの指示だけ実行するには、`-p`を使用します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### セッションを再開する

前回のセッションを再開するには、`-C`を追加します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### 初回ログイン

初回起動時には、APIソースを設定する必要があります。対話型UIで`/login`を入力し、ログインフローを開始します。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login`を実行すると、2つの選択肢に対応したプラットフォーム選択画面が開きます。

- **Kimi Code（OAuth）** — デバイスコードフロー。任意のデバイスでリンクを開いてサインインし、コードを入力して認可します
- **Kimi Platform APIキー** — `platform.kimi.com`または`platform.kimi.ai`のAPIキーを入力します

サインアウトするには、`/logout`を入力して現在の認証情報を消去します。

<Callout type="tip">
Anthropic、OpenAI、Google、その他のプロバイダーに接続したい場合は、`~/.kimi-code/config.toml`を直接編集してAPIキーを設定してください。すべての設定オプションの詳細は、環境変数と設定上書きのドキュメントを参照してください。
</Callout>

## AGENTS.mdを生成する

プロジェクトディレクトリで`/init`コマンドを実行します。Kimi Code CLIがプロジェクト構造を自動でスキャンし、`AGENTS.md`ファイルを生成します。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md`は、プロジェクトの背景情報、ビルド手順、コード規約、その他のコンテキストをAIに提供し、AIがプロジェクトをより正確に理解できるようにするために使われます。

## 最初の会話

ログインしたら、自然言語でタスクを説明します。まずはKimi Code CLIにプロジェクトを把握させるのがおすすめです。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "このプロジェクトのディレクトリ構造を確認し、各ディレクトリの用途を簡潔に説明してください。",
    },
  ]}
/>

Kimi Code CLIは、応答前にファイル読み取り、検索、その他のツールを自動で呼び出し、関連コンテンツを参照します。読み取り専用の操作は、デフォルトでは確認を求めず自動で実行されます。ファイルを変更したりシェルコマンドを実行したりする操作については、実行前に確認を求めます。

より具体的なタスクを直接説明することもできます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/utilsに任意の文字列をkebab-caseへ変換する関数を追加し、そのユニットテストも追加してください。",
    },
  ]}
/>

Kimi Code CLIは手順を計画し、コードを変更し、テストを実行して、各ステップで何を行ったかを知らせます。

<Callout type="tip">
何をすればよいか分からない場合は、いつでも`/help`と入力すると、組み込みコマンドとキーボードショートカットのパネルを開けます。`↑`/`↓`で一覧を移動し、`Esc`で閉じます。終了するには、`/exit`と入力するか、`Ctrl-C`を2回押すか、入力ボックスが空の状態で`Ctrl-D`を押します。
</Callout>

## よく使うコマンドとキーボードショートカット

### セッションコマンド

| コマンド | 説明 |
| --- | --- |
| `/new` | 現在のコンテキストをクリアして、新しいセッションを開始します |
| `/sessions` | セッション履歴を参照し、再開するセッションを選びます |
| `/model` | 現在のモデルを切り替えます |
| `/compact` | コンテキストを手動で圧縮し、tokenを解放します |
| `/fork` | 現在のセッションをフォークし、履歴を保持したまま独立して続行します |

### よく使うキーボードショートカット

| ショートカット | 説明 |
| --- | --- |
| `Esc` | ストリーミング出力を中断する / ポップアップを閉じる |
| `Ctrl-C` | 出力を中断します。待機中に2回押すと終了します |
| `Shift-Tab` | Planモードを切り替えます |
| `Ctrl-S` | 現在の応答完了を待たずに、ストリーミング中にメッセージを差し込みます |
| `Ctrl-O` | ツール出力を折りたたむ / 展開する |

完全な一覧は、`/help`を入力するか、[操作と入力](/kimi-code/cli-interaction)をご覧ください。

## データの保存場所

Kimi Code CLIはデフォルトで、設定ファイル、セッション記録、ログ、更新キャッシュなどのローカルデータを`~/.kimi-code/`配下に保存します。別の場所に移動するには、`KIMI_CODE_HOME`環境変数で新しいパスを指定します。ディレクトリ構成の詳細は、環境変数のドキュメントを参照してください。

## FAQ

**APIキーを入力しましたが、認証に失敗したと表示されます。**

まず、キーとBase URLが同じプラットフォームに属していることを確認してください。`api.kimi.com`と`api.moonshot.cn`は完全に独立した2つのアカウントシステムであり、APIキーを相互に使うことはできません。

| プラットフォーム | Base URL | 課金 | キー作成 |
|------|---------|---------|-------------|
| **Kimi Code** | OpenAI互換: `https://api.kimi.com/coding/v1`<br> Anthropic互換: `https://api.kimi.com/coding/` | Kimiメンバーシップのサブスクリプション（quotaを含む） | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | 従量課金 | [Kimi Open Platform](https://platform.kimi.com) |

**インストール後に`kimi`コマンドが見つかりません。**

インストールスクリプトは`kimi`をPATHに追加しますが、反映するにはターミナルの再起動、または`source ~/.bashrc`（または`source ~/.zshrc`）の実行が必要です。それでも見つからない場合は、`~/.local/bin`がPATHに含まれているか確認してください。

**`/login`を実行してもブラウザがポップアップしませんでした。**

リモートサーバーやヘッドレス環境では、`/login`がURLを表示します。そのURLを手動でブラウザにコピーして、認可を完了してください。

問題や提案がある場合は、[GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues)でフィードバックをお寄せください。

## 次のステップ

- [操作と入力](/kimi-code/cli-interaction) — 入力ボックスの操作、承認フロー、Planモード、YOLOモードの解説
- [セッションとコンテキスト](/kimi-code/cli-sessions) — セッションの再開、コンテキストの圧縮、セッションのエクスポート
- [よくあるユースケース](/kimi-code/cli-use-cases) — 典型的なタスク向けのプロンプト例
