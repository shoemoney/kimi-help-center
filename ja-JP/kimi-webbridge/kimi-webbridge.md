---
title: "Kimi WebBridgeの紹介"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridgeの紹介 - Kimi ヘルプセンター"
  description="Kimi WebBridgeは、AI Agent向けに設計されたブラウザ拡張機能です。ChromeまたはEdgeブラウザ上で直接動作し、既存のログインセッションを活用して、Agentが人間のようにWebページを操作できるようにします。"
  ogType="article"
/>

# Kimi WebBridgeの紹介

Kimi WebBridgeは、AI Agent向けに設計されたブラウザ拡張機能です。クラウド型のブラウザ自動化ソリューションとは異なり、Kimi WebBridgeはお使いのChromeまたはEdgeブラウザ上で直接動作します。既存のログインセッションを自動的に活用し、Agentが人間のようにWebページを操作できるようにします。

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi WebBridgeチュートリアル",
    },
  ]}
/>

<Callout type="tip">
ブラウザ自動化を最も快適に利用するには、普段業務で使っているメインのコンピューターにKimi WebBridgeを導入することをおすすめします。
</Callout>

<Callout type="info">
WebBridgeは、ローカルブリッジサービスとブラウザ拡張機能を通じて動作します。すべての実行処理はお使いのデバイス上でローカルに行われるため、ログイン状態やWebページの内容が端末の外へ出ることはありません。
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridgeの紹介"
/>

## ステップ1：Kimi WebBridge拡張機能をダウンロードする

以下の方法でダウンロードできます。

**方法1：Webストアからインストールする**

- Chromeユーザー：[Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)にアクセスします
- Edgeユーザー：[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)にアクセスします

**方法2：手動でインストールする**

Webストアにアクセスできない場合は、手動インストールを利用できます。

お使いのブラウザに応じて、以下の手順を実行してください。

**Chrome:**

1. [Kimi WebBridge公式サイト](https://www.kimi.com/features/webbridge)から拡張機能パッケージをダウンロードします。
2. ダウンロードしたファイルを展開します
3. アドレスバーで`chrome://extensions/`を開きます
4. 右上の「デベロッパー モード」を有効にします
5. 「パッケージ化されていない拡張機能を読み込む」をクリックします
6. ファイル選択画面で、展開したWebBridgeフォルダを選択します

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. [Kimi WebBridge公式サイト](https://www.kimi.com/features/webbridge)から拡張機能パッケージをダウンロードします。
2. ダウンロードしたファイルを展開します
3. アドレスバーで`edge://extensions/`を開きます
4. 左下の「開発者モード」を有効にします
5. 「展開して読み込み」をクリックします
6. ファイル選択画面で、展開したWebBridgeフォルダを選択します

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

インストール後、ブラウザの拡張機能一覧にWebBridgeが表示されます。すぐに使えるよう、ブラウザのツールバーにピン留めしておくことをおすすめします。

## ステップ2：セットアップ方法を選び、設定を完了する

### 方法1：Kimi Work Desktopで使用する

1. [公式サイト](https://www.kimi.com/zh-cn/products/kimi-work)からKimi Workをダウンロードします

2. インストール後、Kimi Workでたとえば次のような指示を送信できます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi WebBridgeを使ってXiaohongshuを開き、Kimi K2.6のリリースに関する投稿を検索してください",
    },
  ]}
/>

### 方法2：ローカルAgentと連携する

Claude Code、Codex、Cursor、Kimi Code、Hermers Clawなどに対応しています。

1. Agent内で以下のコマンドを直接送信すると、WebBridgeが自動的にインストールされます。Agentはお使いのOSに応じて適切なセットアップを実行します。

macOSユーザーは、以下のコマンドを使用してください。

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Windowsユーザーは、以下のコマンドを使用してください。

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. 使い始める

拡張機能が接続されたら、指示を送信できます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi WebBridgeを使ってX.comを開き、Kimi K2.6のリリースに関する投稿を検索してください",
    },
  ]}
/>
