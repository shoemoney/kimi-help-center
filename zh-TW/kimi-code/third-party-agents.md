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

[Claude Code](https://code.claude.com/docs/en/overview) 是 Anthropic 推出的命令列程式開發助理。

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

2. 使用 `kimi-for-coding` 模型啟動 Claude Code：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> 在 Claude Code 中，你可以按下 **Tab** 切換到 Kimi K2 Thinking 模型。

> 如果遇到由 `tool_search` 呼叫造成的 400 錯誤，可先透過設定環境變數 `ENABLE_TOOL_SEARCH=false` 暫時解決。

### 切換至高速版

高速版輸出速度約為標準版的 5～6 倍，**額度消耗約為標準版的 3 倍**，需 [Allegretto](https://www.kimi.com/membership/pricing) 以上方案。在 Claude Code 中有兩種開啟方式：

- **方式一：`/fast on` 指令**——啟動 Claude Code 後輸入 `/fast on`，出現 `⚡ Fast mode ON` 即為開啟成功。
- **方式二：`/config` 指令**——輸入 `/config` 開啟設定面板，在 **Config** 分頁下開啟 **Fast mode**（以及 **Thinking mode**）即可。

## 搭配 Roo Code 使用

[Roo Code](https://github.com/RooCodeInc/Roo-Code) 是一款適用於 VS Code 的 AI 程式開發擴充功能。

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
   | 模型 | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. 儲存設定後即可開始使用。

## 重要注意事項

- Kimi Code 權益僅支援於 **Kimi Code CLI**、**Claude Code** 和 **Roo Code**。
- 若在未授權的平台或工具中使用你的 API Key，可能會被視為違規，並導致存取權限受限。
- 如有疑問，請參閱[權益](/kimi-code/benefits)頁面，或聯絡 Kimi 支援團隊。
