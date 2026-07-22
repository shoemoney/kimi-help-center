---
title: "Kimi 入門"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi 入門 - Kimi Help Center"
  description="了解 Kimi 的三種模型（K2.6、K3、K3 Swarm）、內建工具與多模態能力，快速開始聊天與執行任務。"
/>

# Kimi 入門

你可以在聊天框輸入問題、上傳檔案，也可以依需求切換不同模型。
開啟 [kimi.com](https://www.kimi.com)，試著傳送一則訊息，向 Kimi 打聲招呼：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "嗨，Kimi！",
    },
  ]}
/>

## 選擇模型

Kimi 提供多種模型。點擊輸入框上方的模型切換按鈕即可切換。

| 模型 | 思考強度 | 適合用途 |
|-------|-------------------|----------|
| **K2.6** | 標準 / 高 | 快速對話與問答，回應更迅速 |
| **K3** | 低 / 高 / Max | 聊天與 Agent 任務；整體能力最完整 |
| **K3 Swarm** | 低 / 高 / Max | 大規模搜尋與批次處理，一次完成 |

<Callout type="tip">
K2.6 在 Chat 中不消耗 credit（在 Kimi Work 中作為 K2.6 Agent 使用時，仍會消耗會員 credit）；K3 與 K3 Swarm 會依 credit 計費。詳情請參閱[會員權益](https://www.kimi.com/help/membership/membership-overview)。
</Callout>

### 關於 Kimi K3

Kimi K3 是 Kimi 目前最強大的模型，擁有 2.8 兆參數，基於 Kimi Delta Attention (KDA) 與 Attention Residuals 打造，具備**原生視覺**與**100 萬 token 脈絡視窗**。作為全球首個開放的 3T 級模型，K3 面向長程程式設計、知識工作與推理等前沿智能場景而設計，在程式設計、長程執行以及各類通用智能任務上皆達到領先表現。

### 內建工具

開箱即用，無需設定：

| 工具 | 說明 |
|------|------------|
| **Web Search** | 即時網頁搜尋，掌握最新新聞與資訊 |
| **Fetch Tool** | 直接存取特定 URL（網頁、文件、圖片及其他線上資源） |
| **Image Search** | 以文字搜圖、以圖搜圖，快速探索視覺內容 |
| **IPython** | 執行 Python 程式碼，進行資料分析與視覺化 |
| **Memory** | 智慧記憶你的個人偏好與使用習慣 |

## 視覺與多模態能力
Kimi K3 支援對圖片、影片與辦公文件（PDF/Word/Excel）的全情境理解，採用**原生多模態架構**（不是外掛式 OCR）。它能直接解析文件內容，並完成中高階辦公任務（例如撰寫 Excel 公式，或產生 PPT 大綱/VBA 程式碼）。結合原生視覺與 100 萬 token 脈絡視窗，Kimi K3 能處理更長、更複雜的多模態素材。
### 多模態輸入支援
- **圖片**：PNG、JPEG、WebP、GIF 等（透過 URL、Base64 或本機檔案上傳）
- **影片**：MP4 等（透過 video_url，或圖片影格序列 + fps 參數）
- **文件**：PDF、Word、Excel、TXT、Markdown 等
- **線上資源**：URL、文章連結
- **圖片搜尋**：上傳圖片，搜尋相關或相似圖片
- **影片理解**：支援影片理解，可分析螢幕錄影並複現互動邏輯
- **視覺程式設計**：上傳截圖或螢幕錄影以產生前端程式碼（HTML/Vue/React 等）；也能依設計稿自動重現網頁

### 輸出格式
- 純文字 / 圖文混合：標準對話回覆
- Markdown：包含標題、清單、表格與連結的豐富文字
- 程式碼區塊：HTML/Vue/React/Python/JSON/Mermaid 等（含語言標識）
- JSON 結構化資料：強制 JSON 模式輸出
- Mermaid 圖表：流程圖、時序圖、心智圖等
- LaTeX 數學公式：行內與區塊層級的數學表達式
- 雙模式輸出（Thinking）：同時返回 `reasoning_content`（思考過程）與 `content`（最終答案）
- 工具呼叫格式：Function Calling 標準格式（供開發者使用）

### 重要注意事項

1. **檔案輸出**：K3 可以端到端產出可編輯文件（例如 `.pptx`、`.docx`、`.xlsx`、`.pdf`）及其他複雜交付成果；K2.6 著重於快速問答，僅輸出文字（例如 PPT 大綱、Word 正文或程式碼）。

<Callout type="tip">
提示：若要產生圖片、音訊或影片，請點擊「+」→ 外掛，選擇對應功能，並搭配 **K3** 使用。若要建立複雜的可編輯文件，或執行多步驟任務，建議選擇 **K3** 或 **K3 Swarm**，以獲得完整體驗。
</Callout>

## Session 與對話輪次
當你點擊「New Chat」時，可以把它想成是與 Kimi 展開一段長對話。
| 概念 | 類比 | 技術定義 |
|---------|---------|---------------------|
| **Session** | 一場完整會議（從開始到結束） | 一段有明確開始與結束的完整聊天流程 |
| **Turn** | 一次往返交流（你說一句，Kimi 回一句） | 你的輸入與 Kimi 的回應構成一個來回 |

### 主要差異
**Session**
- **連續記憶**：Kimi 會記住目前聊天中的所有脈絡
- **跨輪次脈絡**：每次回覆都會參考先前的對話內容，作為下一輪的脈絡
- **邊界明確**：點擊「New Chat」= 重新開始；先前脈絡會被清除
**Turn**
- **累計計數**：Turn 1、Turn 2、…… 逐步增加
- **記憶有限**：輪次過多（例如 50+）時，Kimi 可能會「忘記」較早的內容；對長文寫作或要求嚴格的任務尤其明顯
- **脈絡長度限制**：受 token 數量限制；輪次累積後，最早的內容可能會被壓縮

<Callout type="tip">
**邊界情況**：如果一問一答就結束對話，那麼 1 turn = 1 session。
</Callout>

## 為什麼這個區分很重要
在同一個 session 中，你送出的每個新問題或指令，都會參照先前所有 turn 來回答。隨著 turn 累積、內容變長，回覆品質可能會逐漸下降。

### 常見情境
**情境 1：切換主題**
- 錯誤：在你已經寫了 30,000 字小說的 session 中，接著問「幫我計算稅金」
- 正確：針對稅務問題開啟新的 session，避免 Kimi 把小說角色與稅務概念混在一起
**情境 2：處理長文件**
- 經過數十個 turn 後，Kimi 可能會「忘記」一開始訂下的規則或檔案摘要
- 解法：在任務中途主動摘要（「請總結目前為止的計畫」），或開啟新的 session
**情境 3：理解產品限制**
- 脈絡長度限制是以 token 計算；但在日常使用中，可以把它理解為「輪次」
- 如果你看到「Start a new chat」提示，表示目前 session 的 turn 已經太多
## 最佳實務

<Callout type="tip">
**每個任務都開啟新的 session**：彼此獨立的任務——寫作、研究、除錯——都應該各自使用一個 session，避免脈絡互相干擾。
</Callout>

<Callout type="tip">
**長 session 中定期摘要**：超過 20 個 turn 後，主動請 Kimi 摘要關鍵資訊，避免資料遺失。
</Callout>

<Callout type="tip">
**及時清理敏感資訊**：聊天記錄會被保留；處理私人內容後，請刪除整個 session。
</Callout>
