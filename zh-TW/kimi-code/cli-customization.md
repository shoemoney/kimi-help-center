---
title: "自訂與參考"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="自訂與參考 - Kimi 說明中心"
  description="Kimi Code CLI 提供豐富的自訂選項，讓你依需求調整 AI 的行為與工作流程。"
/>

# 自訂與參考

Kimi Code CLI 提供豐富的自訂選項，讓你依需求調整 AI 的行為與工作流程。

## 設定檔

Kimi Code CLI 使用 `~/.kimi/config.toml` 作為全域設定檔，支援 TOML 與 JSON 格式。你可以設定：

- **API 提供者與模型**：設定不同的模型提供者、API 端點與金鑰。
- **預設模型**：指定要使用的預設模型。
- **執行階段參數**：調整逾時、concurrency（併發）、輸出格式等執行階段設定。

> 使用 `/config` 指令可快速開啟設定檔進行編輯。

## AGENTS.md 專案設定

在專案根目錄放置 `AGENTS.md` 檔案，為 AI 提供專案層級的脈絡：

- **專案背景**：說明專案的功能、架構與技術堆疊。
- **建置步驟**：如何安裝相依套件、建置專案並執行測試。
- **程式碼慣例**：命名規範、目錄結構規則、程式碼風格偏好。
- **特別注意事項**：安全限制、效能需求，以及其他重要考量。

使用 `/init` 指令，讓 AI 自動掃描你的專案並產生初始 `AGENTS.md`。你也可以手動編輯此檔案，加入專案專屬資訊。`AGENTS.md` 檔案可放在任何子目錄中，AI 會自動載入相關設定。

## 自訂系統提示詞

你可以透過幾種方式自訂 AI 的系統提示詞：

- **全域系統提示詞**：寫入 `~/.kimi/AGENTS.md`，會套用至所有專案。
- **專案層級系統提示詞**：寫入專案根目錄的 `AGENTS.md`，只會套用至目前專案。
- **啟動參數**：啟動時使用 `--system-prompt` 旗標指定。

專案層級設定會覆寫全域設定，而啟動參數的優先順序最高。

## MCP 整合

Kimi Code CLI 支援 Model Context Protocol (MCP)，可連接外部工具與資料來源，擴充 AI 的能力：

- **MCP 伺服器設定**：在設定檔中加入 MCP 伺服器位址，讓 AI 能呼叫外部工具。
- **內建 MCP 支援**：部分常用的 MCP 工具已內建，無需額外設定。
- **自訂 MCP 伺服器**：你可以開發自己的 MCP 伺服器，提供特定領域的能力。

MCP 設定可放在 `~/.kimi/config.toml`，也可放在專案層級設定檔中。

## 環境變數

Kimi Code CLI 支援透過環境變數設定，適合用於 CI/CD 流程與腳本：

| 環境變數 | 說明 |
| --- | --- |
| `KIMI_API_KEY` | API 金鑰 |
| `KIMI_BASE_URL` | 自訂 API 端點 |
| `KIMI_MODEL` | 預設模型名稱 |
| `KIMI_MAX_TOKENS` | 最大輸出 token 數 |

環境變數的優先順序高於設定檔中的設定。

## 更多參考

- **斜線指令參考**：使用 `/help` 查看所有可用指令。
- **CLI 參數參考**：執行 `kimi --help` 查看所有啟動參數。
- **官方文件**：造訪 [Kimi Code 文件](https://www.kimi.com/code/docs/en/) 取得最新完整文件。
