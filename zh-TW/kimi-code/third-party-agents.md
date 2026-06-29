---
title: "搭配第三方程式開發代理使用"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="搭配第三方程式開發代理使用 - Kimi 說明中心"
  description="Kimi Code 權益可用於 Claude Code 和 Roo Code，讓你在偏好的程式開發工具中享受 Kimi 的 AI 能力。"
/>

# 搭配第三方程式開發代理使用

Kimi Code 權益可用於 Claude Code 和 Roo Code，讓你在偏好的程式開發工具中享受 Kimi 的 AI 能力。

## 事前準備

- 已啟用 Kimi Code 權益的有效 Kimi 會員資格。
- 一組 API Key（在 [Kimi Console](https://www.kimi.com/code) 建立）。

## 搭配 Claude Code 使用

[Claude Code](https://www.docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) 是 Anthropic 推出的命令列程式開發助理。

### 設定步驟

1. 設定環境變數：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. 使用 `kimi-k2.5` 模型啟動 Claude Code：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> 在 Claude Code 中，你可以按下 **Tab** 切換到 Kimi K2 Thinking 模型。

> 如果遇到由 `tool_search` 呼叫造成的 400 錯誤，可先透過設定環境變數 `ENABLE_TOOL_SEARCH=false` 暫時解決。

## 搭配 Roo Code 使用

[Roo Code](https://www.github.com/RooCodeInc/Roo-Code) 是一款適用於 VS Code 的 AI 程式開發擴充功能。

### 安裝 Roo Code

1. 在 VS Code Extensions Marketplace 搜尋 **Roo Code** 並安裝。
2. 安裝完成後，Roo Code 圖示會出現在活動列；若未出現，請重新啟動 VS Code。

### 設定 Kimi Code 模型

1. 開啟 Roo Code 面板，前往 **設定** 頁面。
2. 在 **提供者** 區段中，選擇 **OpenAI 相容**，並填寫以下內容：

   | 設定 | 值 |
   | --- | --- |
   | 進入點 | `https://api.kimi.com/coding/v1` |
   | API Key | 你的 API Key |
   | 模型 | `kimi-k2.5` |

3. 儲存設定後即可開始使用。

## 重要注意事項

- Kimi Code 權益僅支援於 **Kimi Code CLI**、**Claude Code** 和 **Roo Code**。
- 若在未授權的平台或工具中使用你的 API Key，可能會被視為違規，並導致存取權限受限。
- 如有疑問，請參閱[權益](/kimi-code/benefits)頁面，或聯絡 Kimi 支援團隊。
