---
title: "工作模式"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "了解如何在 Kimi Code CLI 中使用 Plan 模式與 Thinking mode，以及適合的使用時機。"
---

<SeoMeta
  title="Kimi Code CLI 工作模式 - Kimi 說明中心"
  description="了解如何在 Kimi Code CLI 中使用 Plan 模式與 Thinking mode，以及適合的使用時機。"
/>

# 工作模式

## Plan 模式

Plan 模式是一種唯讀的規劃模式，讓 AI 在開始寫程式前先制定實作計畫，避免朝錯誤方向白費工夫。

在 Plan 模式中，AI 只能使用唯讀工具（`Glob`、`Grep`、`ReadFile`）探索程式碼庫；它無法修改任何檔案，也不能執行命令。AI 會將計畫寫入專用的計畫檔，然後提交給你審核。你可以核准、拒絕，或提供修改意見。

### 進入 Plan 模式

你可以透過以下四種方式進入 Plan 模式：

- **啟動選項**：使用 `kimi --plan`，直接以 Plan 模式開始新的工作階段
- **鍵盤快捷鍵**：按下 `Shift-Tab`，即可開啟或關閉 Plan 模式
- **斜線命令**：輸入 `/plan` 或 `/plan on`
- **AI 主動發起**：對於複雜任務，AI 可能會透過 `EnterPlanMode` 工具請求進入 Plan 模式。你可以接受或拒絕

你也可以在設定檔中設定 `default_plan_mode = true`，讓每個新的工作階段預設以 Plan 模式開始。

進入 Plan 模式後，提示符會變成 `📋`，底部狀態列會顯示藍色的 `plan` 指示。

### 審閱並核准計畫

當 AI 完成計畫後，會透過 `ExitPlanMode` 提交給你核准。核准面板會顯示完整計畫。你可以：

- **核准執行**：如果計畫包含多條實作路徑，AI 會列出 2–3 個帶標籤的選項（例如「計畫 A」或「計畫 B（建議）」）供你選擇。選定其中一項後，AI 會退出 Plan 模式並執行該路徑。若只有一條路徑，則會顯示 **核准** 按鈕
- **拒絕**：拒絕計畫並留在 Plan 模式。你可以在對話中提供回饋
- **拒絕並退出**：一次完成拒絕計畫並退出 Plan 模式
- **修改**：輸入修改意見。AI 會據此更新計畫，並再次提交

按下 `Ctrl-E` 可在全螢幕分頁檢視器中查看完整計畫。

### 管理 Plan 模式

使用 `/plan` 命令管理 Plan 模式：

- `/plan`：開啟或關閉 Plan 模式
- `/plan on`：開啟 Plan 模式
- `/plan off`：關閉 Plan 模式
- `/plan view`：查看目前計畫
- `/plan clear`：清除目前的計畫檔

## Thinking mode

Thinking mode 讓 AI 在回應前進行更深入的思考，適合用來處理複雜問題。

你可以使用 `/model` 命令切換模型與 Thinking mode。選擇模型後，若該模型支援 Thinking mode，系統會詢問是否啟用。你也可以在啟動時透過 `--thinking` 選項啟用：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> 提示：Thinking mode 必須由目前模型支援。某些模型（例如 `kimi-k2-thinking-turbo`）一律使用 Thinking mode，且無法關閉。
