---
title: "サードパーティ製コーディングエージェントで利用する"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="サードパーティ製コーディングエージェントで利用する - Kimi ヘルプセンター"
  description="Kimi Code の特典は Claude Code や Roo Code でも利用でき、普段お使いのコーディングツール上で Kimi の AI 機能を活用できます。"
/>

# サードパーティ製コーディングエージェントで利用する

Kimi Code の特典は Claude Code や Roo Code でも利用でき、普段お使いのコーディングツール上で Kimi の AI 機能を活用できます。

## 前提条件

- Kimi Code 特典が有効な Kimi メンバーシップに加入していること。
- APIキー（[Kimi Console](https://www.kimi.com/code) で作成）。

## Claude Code で利用する

[Claude Code](https://code.claude.com/docs/en/overview) は、Anthropic が提供するコマンドライン型のコーディングアシスタントです。

### 設定手順

1. 環境変数を設定します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. `kimi-for-coding` モデルで Claude Code を起動します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> Claude Code では、**Tab** を押すと Kimi K2 Thinkingモデルに切り替えられます。

> `tool_search` 呼び出しが原因で 400 エラーが発生した場合は、環境変数 `ENABLE_TOOL_SEARCH=false` を設定することで一時的に解消できます。

### HighSpeed への切り替え

HighSpeed は Standard の約 5〜6 倍の出力速度を、**クレジット消費は約 3 倍**で提供し、[Allegretto](https://www.kimi.com/membership/pricing) 以上のプランが必要です。Claude Code では2つの方法で有効化できます：

- **方法1：`/fast on` コマンド** — Claude Code を起動後、`/fast on` と入力します。`⚡ Fast mode ON` と表示されれば有効化成功です。
- **方法2：`/config` コマンド** — `/config` と入力して設定パネルを開き、**Config** タブで **Fast mode**（および **Thinking mode**）を有効にします。

## Roo Code で利用する

[Roo Code](https://github.com/RooCodeInc/Roo-Code) は、VS Code 向けの AI コーディング拡張機能です。

### Roo Code をインストールする

1. VS Code Extensions Marketplace で **Roo Code** を検索してインストールします。
2. インストール後、アクティビティバーに Roo Code のアイコンが表示されます。表示されない場合は、VS Code を再起動してください。

### Kimi Code モデルを設定する

1. Roo Code パネルを開き、**Settings** ページに移動します。
2. **Providers** セクションで **OpenAI Compatible** を選択し、以下を入力します。

   | 設定 | 値 |
   | --- | --- |
   | エントリーポイント | `https://api.kimi.com/coding/v1` |
   | APIキー | お使いの APIキー |
   | モデル | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. 設定を保存すれば、利用を開始できます。

## 重要な注意事項

- Kimi Code の特典は、**Kimi Code CLI**、**Claude Code**、**Roo Code** でのみサポートされています。
- お使いの APIキーを未承認のプラットフォームやツールで使用すると、違反とみなされ、アクセスが制限される場合があります。
- ご不明な点は、[特典](/kimi-code/benefits)ページを参照するか、Kimiサポートまでお問い合わせください。
