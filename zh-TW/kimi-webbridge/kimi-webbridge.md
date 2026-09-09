---
title: "Kimi 瀏覽器擴充功能介紹"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi 瀏覽器擴充功能介紹 - Kimi 說明中心"
  description="Kimi 瀏覽器擴充功能（原 Kimi WebBridge）是為 AI Agent 設計的瀏覽器外掛，可開啟網頁、點擊按鈕、填寫表單和擷取資訊，由 Agent 像真人一樣自動完成繁瑣的網頁操作。"
  ogType="article"
/>

# Kimi 瀏覽器擴充功能介紹

Kimi 瀏覽器擴充功能（原 Kimi WebBridge）是為 AI Agent 設計的瀏覽器外掛，可開啟網頁、點擊按鈕、填寫表單和擷取資訊，由 Agent 像真人一樣自動完成繁瑣的網頁操作。你還可以把常用網頁拆解成 CLI、將錄製的網頁操作變成 Skill，讓 Agent 隨時重複使用這些能力。

## 產品入口

Kimi 瀏覽器擴充功能有兩種用法：

- **瀏覽器側邊欄**：點擊工具列的 Kimi 圖示開啟側邊欄，登入 Kimi 會員即可直接對話，讓 Kimi 幫你操作當前網頁。
- **本機 Agent 遠端控制**：讓 Kimi Work、Claude Code 等 AI 助手遠端驅動擴充功能，自動完成網頁任務。

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi 瀏覽器擴充功能教學",
    },
  ]}
/>

## 下載安裝

### 步驟 1：下載 Kimi 瀏覽器擴充功能

你可以透過以下方式下載：

**方法 1：從線上商店安裝**

- Chrome 使用者：前往 [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Edge 使用者：前往 [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**方法 2：手動安裝**

如果無法存取線上商店，可以使用手動安裝方式。

接著依照你的瀏覽器完成以下步驟：

**Chrome：**

1. 從 [Kimi 瀏覽器擴充功能官方網站](https://www.kimi.com/features/webbridge)下載擴充功能套件。
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

1. 從 [Kimi 瀏覽器擴充功能官方網站](https://www.kimi.com/features/webbridge)下載擴充功能套件。
2. 解壓縮下載的檔案
3. 在網址列開啟 `edge://extensions/`
4. 在左下角啟用「Developer mode」
5. 按一下「Load unpacked」
6. 在檔案選擇器中，選取解壓縮後的 WebBridge 資料夾

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

安裝完成後，你應該會在瀏覽器的擴充功能清單中看到 Kimi 瀏覽器擴充功能。為了方便使用，建議將它釘選到瀏覽器工具列。

### 步驟 2：選擇設定方式並完成設定

#### 方法 1：搭配 Kimi Work Desktop 使用

1. 從[官方網站](https://www.kimi.com/products/kimi-work)下載 Kimi Work

2. 安裝成功後即可開啟擴充功能側邊欄傳送指令，例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 Kimi 瀏覽器擴充功能開啟 Xiaohongshu，搜尋關於 Kimi K3 發布的貼文",
    },
  ]}
/>

#### 方法 2：搭配本機 Agent

支援 Claude Code、Codex、Cursor、Kimi Code、Hermes Claw 等。

1. 直接在 Agent 中傳送以下指令，即可自動安裝 Kimi 瀏覽器擴充功能。Agent 會依據你的作業系統執行對應的設定。

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
      content: "使用 Kimi 瀏覽器擴充功能開啟 X.com，並搜尋關於 Kimi K3 發布的貼文",
    },
  ]}
/>
