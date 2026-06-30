---
title: "Kimi WebBridge 的運作方式"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge 的運作方式 - Kimi 說明中心"
  description="了解 Kimi WebBridge 如何在本機將你的瀏覽器連接至 AI Agent，安全地進行網頁瀏覽、點擊、截圖等操作。"
  ogType="article"
/>

# Kimi WebBridge 的運作方式

## 工作流程

Kimi WebBridge 的運作流程如下：

1. **本機橋接服務**：在你的電腦上執行本機服務，用來接收 Agent 的指令
2. **瀏覽器擴充功能**：基於 Chrome DevTools Protocol，在瀏覽器中執行指定操作
3. **安全隔離**：所有執行都在本機完成——登入狀態與網頁內容絕不會離開你的裝置

<Frames
  src="./images/workflow.png"
  alt="工作流程"
/>

## 擴充功能介面

點擊瀏覽器工具列中的 WebBridge 圖示，即可查看目前連線狀態：

**已連線**：WebBridge 運作正常，可與 Agent 協作。

**未連線**：請檢查你的設定，或重新執行連線指令。

<Frames
  src="./images/connection.png"
  alt="WebBridge 連線"
/>

## 功能

| 功能 | 說明 |
|---------|-------------|
| 網頁導覽 | 自動開啟指定 URL |
| 元素點擊 | 模擬點擊按鈕、連結與其他頁面元素 |
| 表單填寫 | 自動輸入文字並選取選項 |
| 頁面截圖 | 擷取目前頁面或特定區域 |
| 內容擷取 | 讀取頁面文字、表格與其他結構化資料 |
| 登入工作階段保留 | 使用瀏覽器中已儲存的既有登入狀態 |

使用情境：

- 電商比價：自動搜尋商品，並在多個平台間比較價格
- 資訊研究：深入瀏覽網頁並擷取結構化資訊
- 表單填寫：自動填寫各類線上表單
- 資料輸入：自動整理網頁資料，並依指定格式輸入

更多使用情境，請參閱 [Kimi WebBridge 官方網站](https://www.kimi.com/features/webbridge)。
