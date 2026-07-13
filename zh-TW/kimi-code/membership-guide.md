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
| **標準版 / 高速版雙檔** | 同一模型提供兩種速度——高速版輸出速度約為標準版的 5～6 倍，可依需求切換 |
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

## 如何切換模型

**高速版模型現已上線。** Kimi Code 提供**標準版**與**高速版**兩檔，兩者基於同一模型、程式開發能力完全一致，並共用同一組 Base URL、API Key 與會員權益。高速版**輸出速度約為標準版的 5～6 倍**，在追求即時回應、快速迭代的情境下，一鍵切換即可獲得更順暢的程式開發體驗。主要差異如下：

| 項目 | 標準版 | 高速版 |
| --- | --- | --- |
| 模型 ID | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| 輸出速度 | 基準 | 約為標準版的 5～6 倍 |
| 額度消耗 | 基準 | 約為標準版的 3 倍 |
| 程式開發能力 | 完整 | 與標準版一致 |
| 適用情境 | 日常程式開發任務 | 即時回應、快速迭代 |
| 會員資格 | 所有 Kimi Code 會員皆可使用 | 需 [Allegretto](https://www.kimi.com/membership/pricing) 以上方案 |

切換至目標模型的方式：

- **官方 Kimi Code CLI**：在工作階段中輸入 `/model`，即可在標準版與高速版之間直接切換，無需修改設定。
- **Kimi Code for VS Code**：在輸入列的下拉選單中選擇目標模型；若高速版尚未出現，重新啟動 VS Code 或重新安裝擴充功能即可。
- **第三方工具**：將工具的 Model ID 設為目標模型即可，其餘設定不變。各工具的位置請見 [在第三方 Coding Agent 中使用](/kimi-code/third-party-agents)。

<Callout type="info">
- **模型 ID 固定**：兩個 ID 均為固定識別碼，後端會隨模型升級自動更新對應模型，無需變更用戶端設定。
- **務必填對**：高速版 ID 必須為 `kimi-for-coding-highspeed`；若填錯或設為其他值，請求會靜默回退至標準版 `kimi-for-coding`——不會報錯，但也不會加速。
- **無權限回傳 401**：若方案未含高速版存取權，呼叫會回傳 `401`；請升級至 Allegretto 以上。
</Callout>

<Callout type="tip">
**為什麼整體耗時沒感覺快 5～6 倍？** 「5～6×」指的是**模型輸出速度**（生成文字／程式碼的速度）。一次程式開發任務的總耗時由「模型輸出 + 工具呼叫（讀寫檔案、執行命令、聯網檢索等）+ 指令碼執行」共同構成——工具呼叫與指令碼執行的耗時取決於你的專案與命令本身，高速版並不改變這部分。因此若整體感覺未達 5～6 倍，通常是這一輪工具呼叫／指令碼執行占了較大比重，而非模型生成變慢。
</Callout>
