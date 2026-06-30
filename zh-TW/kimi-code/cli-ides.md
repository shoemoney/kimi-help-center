---
title: "IDE 整合"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "透過 ACP 將 Kimi Code CLI 整合到你的 IDE。"
---

<SeoMeta
  title="IDE 整合 - Kimi 說明中心"
  description="透過 Agent Client Protocol（ACP）將 Kimi Code CLI 整合到你的 IDE。內含 Zed、JetBrains IDE 與 Paseo 的設定指南及疑難排解。"
/>

# 在 IDE 中使用 Kimi Code CLI

<Callout type="info">
Kimi Code CLI 可透過 [Agent Client Protocol（ACP）](https://agentclientprotocol.com/) 整合至 IDE，讓你直接在編輯器中使用 AI 輔助撰寫程式。
</Callout>

## 前置條件

設定 IDE 前，請確認已安裝 Kimi Code CLI，並完成登入設定。

ACP 轉接器以 `kimi acp` 子命令提供。IDE 會將其作為子程序啟動，並透過 stdin/stdout 使用 JSON-RPC 通訊。每次 IDE 建立工作階段時，CLI 都會重用既有驗證狀態，無須重新登入。

<Callout type="tip">
從 macOS 上的 IDE 圖形介面啟動的子程序，通常**不會**繼承終端機 shell 的 `PATH`。如果 `kimi` 不在 `/usr/local/bin` 這類系統目錄中，請在 IDE 設定中使用絕對路徑。在終端機執行 `which kimi` 可查看目前使用的路徑。
</Callout>

## 在 Zed 中使用 Kimi Code CLI

[Zed](https://zed.dev/) 是一款現代化編輯器，原生支援 ACP。

將以下內容加入 Zed 位於 `~/.config/zed/settings.json` 的設定檔：

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

設定欄位：

- `type`：固定值 `"custom"`
- `command`：Kimi Code CLI 執行檔路徑。如果 `kimi` 不在 `PATH` 中，請使用完整路徑（例如 `/Users/you/.local/bin/kimi`）。
- `args`：啟動參數。`acp` 子命令會將 CLI 切換為 ACP 模式。
- `env`：其他環境變數；通常保持空白即可。Zed 會自動注入預設環境。

儲存後，在 Zed 的 Agent 面板開啟新對話；它會依據上述設定啟動 `Kimi Code CLI` ACP 子程序。Zed 的 `agent_servers` 區段中宣告的 MCP servers 也會透過 ACP 協定轉送到 kimi 端。

## 在 JetBrains IDE 中使用 Kimi Code CLI

JetBrains IDE（IntelliJ IDEA、PyCharm、WebStorm 等）可透過 AI chat 外掛程式支援 ACP。

如果你沒有 JetBrains AI 訂閱，可以在 Registry 中啟用 `llm.enable.mock.response`，以便在僅使用 ACP 的情境下存取 AI chat 面板。按兩下 Shift，搜尋「Registry」即可開啟。

在 AI chat 面板選單中，點擊 **設定 ACP 代理** 並新增以下設定：

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains 對 `command` 欄位要求嚴格——請一律使用**絕對路徑**；可在終端機執行 `which kimi` 取得。儲存後，`Kimi Code CLI` 會出現在 AI chat 的代理選擇器中。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## 在 Paseo 中使用 Kimi Code CLI

[Paseo](https://paseo.sh/) 是一個自託管的協調器，可從桌面、網頁與行動裝置執行並監督代理 CLI。它會像 IDE 一樣，透過 ACP 連線至 Kimi Code CLI。

從 Paseo 內建的 ACP 提供者目錄中選取 **Kimi Code CLI**，或在 `~/.paseo/config.json` 新增自訂提供者：

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Paseo 的通用 ACP 轉接器不會處理登入流程，因此請先完成終端機登入（見 [前置條件](#前置條件)），否則建立工作階段會因 `Authentication required` 而失敗。

## 疑難排解

- **工作階段立即中斷 / IDE 顯示「代理已結束」**：通常是 `command` 路徑錯誤或尚未登入。請先在終端機執行 `kimi acp` 驗證：如果它停住並等待 stdin，表示 CLI 本身正常，問題出在 IDE 設定；如果它立即結束並顯示錯誤，請依錯誤訊息處理（最常見的是需要執行 `/login`）。
- **IDE 顯示「需要驗證」**：CLI 沒有可用的驗證 token。結束 IDE，在終端機執行 `kimi` 完成登入，然後重新啟動 IDE。
- **看不到 MCP 工具**：檢查 `kimi acp` 的能力表，確認 IDE 中設定的 MCP 傳輸類型是否受支援。Kimi Code CLI ACP 轉接器目前支援 `http` 與 `stdio` 傳輸；`sse` 與 `acp` 類型會被靜默丟棄，並在記錄檔中寫入警告。
