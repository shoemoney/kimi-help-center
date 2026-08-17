---
title: "Kimi WebBridge 介紹"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge 介紹 - Kimi 說明中心"
  description="Kimi WebBridge 是專為 AI Agent 設計的瀏覽器擴充功能。它直接在你的 Chrome 或 Edge 瀏覽器中執行，並利用你現有的登入工作階段，讓 Agent 像真人一樣與網頁互動。"
  ogType="article"
/>

# Kimi WebBridge 介紹

Kimi WebBridge 是專為 AI Agent 設計的瀏覽器擴充功能。不同於雲端瀏覽器自動化方案，Kimi WebBridge 會直接在你的 Chrome 或 Edge 瀏覽器中執行，自動利用你現有的登入工作階段，讓 Agent 像真人一樣與網頁互動。

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi WebBridge 教學",
    },
  ]}
/>

<Callout type="tip">
為獲得最佳瀏覽器自動化體驗，建議將 Kimi WebBridge 部署在你的主要工作電腦上。
</Callout>

<Callout type="info">
WebBridge 透過本機橋接服務與瀏覽器擴充功能運作。所有執行都在你的裝置本機完成——登入狀態與網頁內容都不會離開你的電腦。
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge 介紹"
/>

## 步驟 1：下載 Kimi WebBridge 擴充功能

你可以透過以下方式下載：

**方法 1：從線上商店安裝**

- Chrome 使用者：前往 [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Edge 使用者：前往 [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**方法 2：手動安裝**

如果無法存取線上商店，可以使用手動安裝方式。

接著依照你的瀏覽器完成以下步驟：

**Chrome：**

1. 從 [Kimi WebBridge 官方網站](https://www.kimi.com/features/webbridge)下載擴充功能套件。
2. 解壓縮下載的檔案
3. 在網址列開啟 `chrome://extensions/`
4. 在右上角啟用「Developer mode」
5. 按一下「Load unpacked」
6. 在檔案選擇器中，選取解壓縮後的 WebBridge 資料夾

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge：**

1. 從 [Kimi WebBridge 官方網站](https://www.kimi.com/features/webbridge)下載擴充功能套件。
2. 解壓縮下載的檔案
3. 在網址列開啟 `edge://extensions/`
4. 在左下角啟用「Developer mode」
5. 按一下「Load unpacked」
6. 在檔案選擇器中，選取解壓縮後的 WebBridge 資料夾

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

安裝完成後，你應該會在瀏覽器的擴充功能清單中看到 WebBridge。為了方便使用，建議將它釘選到瀏覽器工具列。

## 步驟 2：選擇設定方式並完成設定

### 方法 1：搭配 Kimi Work Desktop 使用

1. 從<a href="https://www.kimi.com/products/kimi-work">官方網站</a>下載 Kimi Work

2. 安裝完成後，你可以在 Kimi Work 中傳送指令，例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 Kimi Webbridge 開啟 Xiaohongshu，搜尋關於 Kimi K2.6 發布的貼文",
    },
  ]}
/>

### 方法 2：搭配本機 Agent

支援 Claude Code、Codex、Cursor、Kimi Code、Hermes Claw 等。

1. 直接在 Agent 中傳送以下指令，即可自動安裝 WebBridge。Agent 會依據你的作業系統執行對應的設定。

如果你是 macOS 使用者，請使用以下指令：

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

如果你是 Windows 使用者，請使用以下指令：

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

2. 開始使用

擴充功能連線後，你就可以傳送指令。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 Kimi WebBridge 開啟 X.com，並搜尋關於 Kimi K2.6 發布的貼文",
    },
  ]}
/>
