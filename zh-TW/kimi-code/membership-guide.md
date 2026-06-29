---
title: "Kimi Code 會員指南"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code 會員指南 - Kimi 說明中心"
  description="Kimi Code 是 Kimi 會員方案中專為開發者打造的權益，提供高效能 AI 程式開發能力。你可以透過..."
/>

# Kimi Code 會員指南

<Callout type="info">
Kimi Code 是 Kimi 會員方案中專為開發者打造的權益，提供高效能 AI 程式開發能力。你可以透過 Kimi Code CLI、Claude Code、Roo Code 及其他支援工具使用這項權益。
</Callout>

## 核心優勢

| 優勢 | 說明 |
|-----------|-------------|
| **廣泛相容** | 可搭配 Kimi Code CLI、Claude Code、Roo Code 及其他主流程式開發 agents 使用 |
| **極速回應** | 生成速度最高可達 100 token/s，顯著提升程式開發效率 |
| **高頻 concurrency（併發）** | 每 5 小時時段約可發起 300–1,200 次請求（依你的方案而定），最高支援 30 路並行串流 |

## 快速開始

請依你的情況選擇適合的方式：

- **新使用者**：前往 [kimi.com/code](https://kimi.com/code)，登入並訂閱程式開發方案。
- **既有訂閱者**：進入控制台管理你的 API 金鑰，並開始使用 Kimi Code。

## 取得 API 金鑰

1. 登入 [Kimi 控制台](https://kimi.com/code)。
2. 前往 **API 金鑰** 頁面。
3. 點選 **建立新的 API 金鑰**。
4. 複製並妥善保存你的 API 金鑰（建立後只會顯示一次）。

<Callout type="warning">
請勿與他人分享你的 API 金鑰，也不要將其提交到公開程式碼儲存庫。
</Callout>

## 一鍵登入

在 Kimi Code CLI 中，你可以使用 `/login` 指令快速授權，無需手動複製 API 金鑰：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

系統會自動完成裝置授權與帳號綁定，整個流程只需數秒。

## 裝置管理

- 每個帳號可在多部裝置上使用。
- **連續 30 天未使用**的裝置授權會自動失效；你需要再次執行 `/login` 重新授權。
- 你可以在控制台查看並管理已授權的裝置。
