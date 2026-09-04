---
title: "如何建立個人外掛"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "在 Kimi Work 中透過內建的 Plugin Builder 技能，把一句話想法、外部外掛儲存庫或任意網頁變成自己的外掛。"
---

<SeoMeta
  title="如何建立個人外掛 - Kimi 說明中心"
  description="在 Kimi Work 中透過內建的 Plugin Builder 技能建立個人外掛：一句話建立新外掛、匯入外部外掛儲存庫，或把任意網頁轉換成外掛。外掛登記進個人外掛市場後，安裝即可在會話中使用。"
/>

# 如何建立個人外掛

在 Kimi Work 中，你可以透過內建的 **Plugin Builder** 技能，把一句話想法、外部外掛儲存庫或任意網頁，變成屬於自己的外掛。無論用哪種方式，外掛都會經過同一條路徑到你手中：**建立 / 轉換 → 登記進個人外掛市場（「個人」頁籤）→ 點 ＋ 安裝 → 會話中使用**，安裝後當前會話立即可用，無需重啟。

開始之前，請確認你已安裝最新版 [Kimi Work](https://www.kimi.ai/products/kimi-work) 桌面端。Plugin Builder 為內建技能，無需額外安裝：在會話中輸入「/」喚起，或在外掛市場點擊「自訂外掛」進入主會話建立。

<Frames
  src="./images/create/plugin-market-entry.png"
  alt="外掛市場中的「自訂外掛」入口"
  width={2036}
  height={1164}
/>

## 如何一鍵建立新的外掛

適合「我有一個想法，但沒有現成程式碼」的情境。你只需描述想要的能力，Plugin Builder 會自動完成鷹架搭建、欄位填寫、本地驗證和登記，全程無需手寫任何檔案。

1. <strong>描述需求。</strong>在會話中喚起 Plugin Builder，用一句話說明外掛要做什麼，例如「幫我做一個能查公司工商資訊的外掛」。名稱、簡介、分類等能自動推斷的欄位都會自動填好，只有 MCP 服務位址、圖示這類無法推斷的資訊才會向你確認。

2. <strong>等待建立完成。</strong>Plugin Builder 會在本地生成外掛檔案，自動透過結構與規範驗證，隨後登記進你的個人外掛市場。

3. <strong>安裝使用。</strong>打開「外掛」→「個人」頁籤，找到剛建立的外掛，點擊 ＋ 安裝。安裝後當前會話立即可用，也可以透過「/」隨時喚起。

**一段話 Prompt：**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\n幫我建立一個文獻檢索外掛，希望涵蓋：\n1. 文獻檢索：按主題 / 作者 / 期刊檢索論文，返回題錄、摘要與原文連結\n2. 結果匯出：檢索結果匯出為 CSV，方便匯入文獻管理工具\n3. 綜述輔助：基於檢索結果整理文獻綜述初稿",
    },
  ]}
/>

## 如何從外掛市場匯入

把外掛儲存庫連結丟給 Plugin Builder，它會自動識別、轉換格式並安裝到你的「個人外掛」頁籤。匯入的外掛與官方市場互不影響，可以隨時解除安裝。

1. <strong>支援哪些外掛：</strong>Plugin Builder 能識別以下來源的外掛清單（manifest），並統一轉換為 Kimi 原生格式 `kimi.plugin.json`：

| 格式 | 說明 |
| --- | --- |
| `kimi.plugin.json` | Kimi 原生格式：校正必需欄位 |
| 其他 Agent 平台的外掛清單 | 如 `.codex-plugin/plugin.json`、`.claude-plugin/plugin.json` 等目錄形式的 plugin.json，以及各平台自帶的市場索引檔案 |
| `server.json` | MCP 官方 registry 格式：轉換為僅含 MCP 服務的外掛 |
| 通用 `plugin.json` | 位於外掛根目錄的通用清單格式 |

2. <strong>如何匯入外掛：</strong>把儲存庫連結發給 Plugin Builder，會自動識別以下幾種儲存庫形態：

- **單外掛儲存庫**：整個儲存庫轉換為一個外掛；
- **多外掛儲存庫（monorepo）**：每個子目錄各轉換為一個外掛；
- **外掛市場 / 索引儲存庫**（帶 plugins.json 或 marketplace.json 索引的儲存庫）：按索引逐條展開、批次轉換；
- **純技能儲存庫**：沒有外掛清單、只有技能檔案的儲存庫，整體打包為技能型外掛。

3. <strong>去個人外掛頁安裝：</strong>處理完後，Plugin Builder 會告訴你哪些可用，進入「外掛 → 個人」頁，點擊對應卡片的「安裝」，即可在會話中使用。

<Frames
  src="./images/create/import-plugin-done.png"
  alt="匯入外掛完成"
  width={2230}
  height={1884}
/>

**一段話 Prompt：**

匯入單個儲存庫：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\n把 https://github.com/owner/example 這個儲存庫裡的外掛匯入成個人外掛。轉換後先檢查結構和依賴是否可用，確認可用後登記到我的個人外掛市場；如果轉換失敗，告訴我失敗原因。",
    },
  ]}
/>

批次匯入外掛市場：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\n把 https://github.com/hashgraph-online/awesome-ai-plugins 這個外掛合集批次轉換成個人外掛。先只轉換前 5 個讓我確認效果；我確認後把剩下的全部轉換，逐個登記到我的個人外掛市場，最後給我一份按「可用 / 依賴不可用 / 失敗」分類的完整報告。",
    },
  ]}
/>

只轉指定子目錄：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\n只轉換 https://github.com/owner/repo/tree/main/plugins/example 這個目錄下的外掛。轉換並檢查通過後，登記到我的個人外掛市場。",
    },
  ]}
/>

**匯入後的管理：**

- **更新外掛**：來源儲存庫有更新，或想改名、改簡介，直接告訴 Plugin Builder，它會重新轉換或修改後重新登記。
- **解除安裝 / 移除**：在「個人」頁籤解除安裝即可停用；解除安裝後條目仍保留在頁籤內，想徹底移除可以刪除條目。
- **來源目錄**：轉換產物保留在本地工作區的 plugins/ 目錄，是外掛的「原始檔」，Plugin Builder 後續更新都基於它，請不要手動刪除。

## 如何把網頁轉換成外掛

適合「常用網站沒有公開 API，但想讓 Kimi 直接幫你查資料、操作」的情境。把網址發給 Plugin Builder 並說明需求，例如「把 XX 網站做成外掛，我要能搜 XX」。分析和執行外掛用的瀏覽器有兩種選擇：

| 方式 | 適合情境 | 需要準備 |
| --- | --- | --- |
| **內建瀏覽器（預設）** | 大多數網站；用 Kimi Work 自帶的瀏覽器分析網站、執行外掛 | 無需安裝任何東西；需要登入時在內建瀏覽器裡登入一次 |
| **WebBridge（wb）** | 想直接複用你 Chrome 裡已登入的帳號 | 先安裝 WebBridge 瀏覽器擴充功能，透過它操作你的 Chrome |

1. <strong>分析網站。</strong>Plugin Builder 會用你選的瀏覽器打開該網址。如果頁面需要登入，會請你在瀏覽器裡登入一次——全程不會向你索要密碼、Cookie 或任何憑證。
2. <strong>反推介面並生成外掛。</strong>它會在頁面上實際操作一遍核心功能、擷取網路請求，分析出網站內部的資料介面，然後生成一個自帶查詢腳本的技能型外掛。
3. <strong>驗證、登記、安裝。</strong>與前兩種方式相同：外掛通過驗證後登記進「個人」頁籤，點 ＋ 安裝即可使用。

之後你只要說「幫我查一下 XX」，Kimi 就會透過該外掛在瀏覽器裡直接取數並整理好結果。如果網站介面變動導致外掛失效，可以讓 Plugin Builder 重新分析並更新外掛。

**一段話 Prompt：**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\n幫我把 Hacker News（https://news.ycombinator.com）做成一個外掛，涵蓋：\n1. 搜貼文：輸入關鍵字，返回貼文的標題、連結、分數和留言數\n2. 看熱門榜：擷取當前首頁的前 30 條熱門貼文\n3. 讀留言：打開指定貼文，整理熱門留言的要點",
    },
  ]}
/>

<Frames
  src="./images/create/webpage-plugin-build.png"
  alt="把網頁轉換成外掛的建構過程"
  width={1622}
  height={1478}
/>

<Frames
  src="./images/create/webpage-plugin-review.png"
  alt="網頁外掛提交前的資訊確認"
  width={1702}
  height={1416}
/>

<Frames
  src="./images/create/webpage-plugin-registered.png"
  alt="網頁外掛登記成功"
  width={1672}
  height={1494}
/>

<Callout type="warning">
內建瀏覽器方式依賴 Kimi Work 的內建瀏覽器能力，如果提示需要升級，請將用戶端更新到最新版本；WebBridge 方式需要先在電腦上和 Chrome 中裝好 WebBridge。
</Callout>
