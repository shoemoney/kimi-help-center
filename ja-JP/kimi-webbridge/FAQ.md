---
title: "FAQ"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge FAQ - Kimi ヘルプセンター"
  description="Kimi WebBridge のインストール、接続、複数ブラウザやローカルAgentでの利用に関するよくある質問です。"
  ogType="article"
/>

# FAQ

## インストールと設定

### 拡張機能のインストール時に「このウェブサイトからアプリを追加できません」と表示される場合

公式のウェブストア（Chrome Web Store または Edge Add-ons）からインストールしていることを確認してください。ウェブストアにアクセスできない場合は、公式サイトで案内している手動インストール方法を利用してください。

### 接続コマンドを実行しても何も起きない場合

インターネット接続を確認してください。問題が続く場合は、Kimi Claw Desktop を再起動してから、もう一度コマンドを実行してください。

### 複数のコンピューターで使えますか？

はい。ただし、各コンピューターで個別にインストールと設定を行う必要があります。

### Kimi Claw Desktop が見つからない場合

Kimi Claw Desktop は、お使いのローカルコンピューター上にデプロイされた Kimi Claw です。Kimi Desktop を開き、左側のサイドバーで Kimi Claw を見つけて新しい Claw を作成し、「自分のコンピューターにデプロイ」を選択してください。

## 接続と利用

### 拡張機能のステータスが「切断」と表示される場合

Kimi WebBridge ブラウザ拡張機能が正常にインストールされていることを確認したうえで、設定方法に応じて次の手順を実行してください。

- **Kimi Desktop**: Kimi Desktop を再起動して、もう一度お試しください

- **その他のローカルAgent**: Agent で次のコマンドを再送信し、実行後に Agent を再起動してください。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Windows で WebBridge をインストールすると「Installation failed」エラーが出る場合

Kimi WebBridge は Windows オペレーティングシステムに対応しています。インストールコマンドは Linux 環境で実行できます。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### インストール後に WebBridge で Chrome 互換性の警告が表示される場合、それは何を意味しますか？

WebBridge でページは正常に開けるものの、`snapshot`、`evaluate`、`screenshot`、`click` などの操作が失敗し続ける場合、よくある原因は **他のブラウザ拡張機能との競合** です。

特に、スクレイピングツール、ウェブサイト支援系の拡張機能、画面録画拡張機能、AI アシスタント拡張機能でよく発生します。

次の手順で切り分けることをおすすめします。

1. ブラウザの拡張機能管理ページを開く
2. 他の拡張機能を一時的に無効にする
3. Kimi WebBridge だけを有効にする
4. ブラウザを再起動して、もう一度試す
5. WebBridge が正常に動作する場合は、他の拡張機能を 1 つずつ有効に戻し、競合している拡張機能を特定する


### WebBridge からログイン情報が漏れることはありますか？

いいえ。すべての実行処理はお使いのデバイス上でローカルに行われます。ログイン状態やウェブページの内容が端末の外へ送信されることはありません。Agent がアクセスできるのは、あなたが許可した操作結果だけです。

### 操作が失敗するのはなぜですか？

ページ構造が複雑だったり、動的読み込みが行われていたりすると、操作に失敗することがあります。指示を簡潔にするか、実行前にまず Agent にスクリーンショットを撮らせて、ページの状態を確認してください。

### 対応しているブラウザは？

現在は Chrome と Edge に対応しています。最適な体験のため、最新バージョンの利用をおすすめします。

## 他のAgentとの連携

### 対応している他のAgentは？

WebBridge は、Claude Code、Codex、Cursor、Kimi Code、Hermes Claw など、すべてのローカルAgentに対応しています。

### Agent によって設定方法は異なりますか？

設定コマンドはすべて共通です。1 つの curl コマンドを実行するだけでインストールできます。詳細は各 Agent の Skill 設定を参照してください。
