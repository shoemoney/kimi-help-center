---
title: "Kimi ブラウザ拡張機能の紹介"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi ブラウザ拡張機能の紹介 - Kimi ヘルプセンター"
  description="Kimi ブラウザ拡張機能（旧称 Kimi WebBridge）は AI Agent 向けのブラウザプラグインで、ページの表示、ボタンのクリック、フォーム入力、情報抽出を人間のように自動で行います。"
  ogType="article"
/>

# Kimi ブラウザ拡張機能の紹介

Kimi ブラウザ拡張機能（旧称 Kimi WebBridge）は、AI Agent 向けのブラウザプラグインです。ページを開く、ボタンをクリック、フォームへの入力、情報の抽出を通じて、人間のように面倒なウェブ操作を自動でこなします。よく使うウェブページを CLI に分解したり、録画したウェブ操作を Skill に変換したりして、Agent がいつでも再利用できます。

## 2通りの使い方

Kimi ブラウザ拡張機能には2通りの使い方があります:

- **ブラウザサイドバー**: ツールバーの Kimi アイコンをクリックしてサイドバーを開き、Kimi メンバーとしてログインすると、直接チャットでき、Kimi に現在のページの操作を任せられます。
- **ローカルエージェントによるリモート操作**: Kimi Work や Claude Code などの AI エージェントが拡張機能をリモートで駆動し、ウェブタスクを自動化します。

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi ブラウザ拡張機能のチュートリアル",
    },
  ]}
/>

## ダウンロードとインストール

### ステップ1：Kimi ブラウザ拡張機能をダウンロードする

以下の方法でダウンロードできます。

**方法1：Webストアからインストールする**

- Chromeユーザー：[Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)にアクセスします
- Edgeユーザー：[Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)にアクセスします

**方法2：手動でインストールする**

Webストアにアクセスできない場合は、手動インストールを利用できます。

お使いのブラウザに応じて、以下の手順を実行してください。

**Chrome:**

1. [Kimi ブラウザ拡張機能の公式サイト](https://www.kimi.com/features/webbridge)から拡張機能パッケージをダウンロードします。
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

1. [Kimi ブラウザ拡張機能の公式サイト](https://www.kimi.com/features/webbridge)から拡張機能パッケージをダウンロードします。
2. ダウンロードしたファイルを展開します
3. アドレスバーで`edge://extensions/`を開きます
4. 左下の「開発者モード」を有効にします
5. 「展開して読み込み」をクリックします
6. ファイル選択画面で、展開したWebBridgeフォルダを選択します

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

インストール後、ブラウザの拡張機能一覧にKimi ブラウザ拡張機能が表示されます。すぐに使えるよう、ブラウザのツールバーにピン留めしておくことをおすすめします。

### ステップ2：セットアップ方法を選び、設定を完了する

**方法1：Kimi Work Desktopで使用する**

1. [公式サイト](https://www.kimi.com/products/kimi-work)からKimi Workをダウンロードします

2. ダウンロードした Kimi Work デスクトップアプリを開き、Work モードに切り替えます。プラグインマーケットプレイスで Kimi ブラウザ拡張機能を見つけてインストールします。その後、ブラウザのサイドバーまたは Kimi Work で、以下の指示を送信してみてください：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi ブラウザ拡張機能を使ってXiaohongshuを開き、Kimi K3のリリースに関する投稿を検索してください",
    },
  ]}
/>

**方法2：ローカルエージェントと連携する**

Claude Code、Codex、Cursor、Kimi Code、Hermes Clawなどに対応しています。

1. エージェント内で以下のコマンドを直接送信すると、Kimi ブラウザ拡張機能が自動的にインストールされます。エージェントはお使いのOSに応じて適切なセットアップを実行します。

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
      content: "Kimi ブラウザ拡張機能を使ってX.comを開き、Kimi K3のリリースに関する投稿を検索してください",
    },
  ]}
/>
