---
title: "Kimi Code 常見問題"
slug: "faq"
order: 4
extract_headings: false
preview: true
preview_content: "Kimi Code 常見問題。"
---

<SeoMeta
  title="Kimi Code 常見問題 - Kimi 說明中心"
  description="關於 Kimi Code CLI 安裝、驗證、遷移、互動等主題的常見問題。"
/>

# 常見問題

## 從舊版遷移

<Callout type="info">
Kimi Code CLI 已完成一次重大版本升級——從 Python/uv 遷移到 Node.js，帶來更簡單的安裝體驗、更快的啟動速度，以及重新設計的終端機 UI。舊版將逐步淘汰，建議你儘早升級。
</Callout>

如果你要從舊版遷移，請依照以下步驟操作——只需一條指令，即可將設定、MCP 伺服器與工作階段紀錄遷移到新版。

### 新版有哪些變化

- **不再需要 Python / uv**：基於 Node.js 重構——無需 Python 環境，安裝更簡單
- **原生二進位檔，開箱即用**：啟動更快，佔用更輕
- **重新設計的終端機 UI**：操作更流暢、回應更靈敏
- **完整資料遷移**：設定、MCP 伺服器與工作階段紀錄都能順暢沿用

### 如何遷移

有兩種遷移方式。

安裝 kimi-code 後，**第一次執行 `kimi`** 時，它會自動檢查 `~/.kimi/` 下是否存在 kimi-cli 資料。若找到資料，就會顯示遷移提示，你可以選擇立即遷移、稍後處理，或不再詢問。

你也可以**隨時手動執行**：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

你可以選擇是否一併遷移聊天工作階段。若暫時不需要歷史紀錄，請選擇**僅設定**；否則選擇**設定 + N 個工作階段**，一次將所有內容帶到新版。遷移結束後會列印摘要。

### 遷移時會發生什麼事

**會遷移的內容**：設定（`config.toml`）、MCP 伺服器設定、輸入歷史紀錄，以及你選擇遷移的聊天工作階段。

**不會遷移的內容**：OAuth 登入憑證與 MCP 服務授權不會被複製，因此遷移後需要重新執行 `/login`，並重新授權 MCP 伺服器。kimi-cli 外掛也不在遷移範圍內。

<Callout type="tip">
遷移**絕不會修改或刪除** `~/.kimi/` 下的任何舊資料。kimi-cli 仍會照常運作，兩者互不影響。遷移也可以重複執行——已遷移過的工作階段不會再次匯入。
</Callout>

遷移完成後，從 kimi-cli 匯入的工作階段會在工作階段選擇器中標記為 `[imported]`，方便你與新的工作階段區分。

## 安裝與驗證

### 執行 `/login` 時沒有可用模型

如果執行 `/login` 時看到「所選平台沒有可用模型」，可能原因如下：

- **API key 無效或已過期**：請檢查你輸入的 API key 是否正確且仍然有效。
- **網路連線問題**：確認你可以存取 API 服務位址（例如 `api.kimi.com` 或 `api.moonshot.cn`）。

**請注意平台差異**

Kimi Code 會員權益與 [Kimi 開放平台](https://platform.kimi.com) 使用不同的 Base URL。設定時請確認 Base URL 與 API Key 相符。

| 平台 | Base URL | 計費方式 | 建立 Key |
|------|---------|---------|-------------|
| **Kimi Code** | Anthropic 相容：`https://api.kimi.com/coding/` | Kimi 會員訂閱（包含 quota） | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi 開放平台** | `https://api.moonshot.cn/v1` | 按量付費 | [Kimi 開放平台](https://platform.kimi.com) |

### API key 無效

API key 無效可能有以下原因：

- **Key 輸入錯誤**：請檢查是否有多餘空格或遺漏字元。
- **Key 已過期或已撤銷**：請在平台主控台確認 Key 狀態。

### 會員已到期或 quota 已用完

如果你使用的是 Kimi Code 平台，可以透過 `/usage` 指令查看目前的 quota 與會員狀態。若 quota 已用完或會員已到期，需要前往 [Kimi Code](https://kimi.com/code) 續訂或升級。

## 訂閱

### 如何申請發票或升級會員？

請前往 [Kimi 會員頁面](https://www.kimi.com/membership/pricing?from=kfc_docs_faq#pricing-faq)，依照說明提交發票申請或升級方案。

## 互動問題

### 貼上圖片失敗

使用 `Ctrl-V` 貼上圖片時，若看到「目前模型不支援圖片輸入」，表示目前模型不支援圖片輸入。

解決方式：

- **切換到支援圖片的模型**：使用具備 `image_in` 能力的模型。
- **檢查剪貼簿內容**：確認剪貼簿中確實包含圖片資料，而不是圖片檔案的路徑。

## 更新與升級

### macOS 首次啟動較慢

macOS Gatekeeper 會在新程式首次執行時進行安全檢查，因此啟動會比較慢。解決方式：

- **等待檢查完成**：首次執行時請耐心等待；之後啟動速度會恢復正常。
- **加入開發者工具**：在**系統設定 → 隱私權與安全性 → 開發者工具**中加入你的終端機應用程式。

### 如何升級 Kimi Code CLI

執行 `kimi upgrade` 可檢查最新版本並顯示更新選項。選擇 `Install update now` 即可升級。你也可以直接透過套件管理器升級：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## VS Code 擴充功能常見問題

以下是關於 Kimi Code VS Code Extension 的常見問題。

### VS Code 顯示沒有開啟工作區

請在 VS Code 中開啟資料夾。Kimi Code VS Code 擴充功能需要工作區才能正常運作。

### VS Code 顯示找不到 CLI

請手動安裝 Kimi Code CLI，並在 VS Code 設定中設定 `kimi.executablePath`，或確認內建 CLI 存在。

### VS Code 登入失敗

可嘗試略過登入，改用 API key 模式；檢查網路連線；或稍後透過 Kimi Code 擴充功能的操作選單重試。

### VS Code 傳送訊息後沒有回應

請確認 Kimi Code CLI 可用、模型已設定，且 VS Code 中已開啟工作區資料夾。可透過「Kimi Code: Show Logs」查看錯誤記錄。

### VS Code 連線逾時

若 30 秒內沒有回應，就會逾時。請檢查網路後重試。

### VS Code 在傳送訊息前發生錯誤

某些錯誤會阻止 VS Code 傳送訊息，例如找不到 Kimi Code CLI、版本過低、尚未登入，或工作階段忙碌。錯誤會以快顯通知顯示，你輸入的內容會保留，以便重試。

## 意見回饋與聯絡

### 文件沒有解決我的問題

如果以上內容仍無法解決你的問題，歡迎透過電子郵件聯絡我們：[code@moonshot.ai](mailto:code@moonshot.ai)。請在信中描述你遇到的問題、已嘗試的步驟，以及任何相關記錄資訊，我們會盡快回覆。

如果你有任何問題或建議，也可以在 [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues) 提供回饋。
