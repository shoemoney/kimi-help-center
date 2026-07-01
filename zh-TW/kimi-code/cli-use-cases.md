---
title: "常見使用情境"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="常見使用情境 - Kimi 說明中心"
  description="以下整理了在日常開發中使用 Kimi Code CLI 的幾個典型情境，並附上範例提示詞供參考。"
/>

# 常見使用情境

以下整理了在日常開發中使用 Kimi Code CLI 的幾個典型情境，並附上範例提示詞供參考。

## 實作新功能

用自然語言描述需求，AI 會自動閱讀相關程式碼、撰寫新程式碼，並驗證結果。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "在使用者清單頁面新增依註冊日期排序的功能，前端和後端都需要調整",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 token bucket 演算法實作 rate limiter 中介軟體，限制每個 IP 每分鐘最多 60 個請求",
    },
  ]}
/>

## 修復錯誤

直接把錯誤訊息貼給 AI，它會自動找出根本原因並提供修復方案。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "執行 npm test 後出現以下錯誤，請修復：\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "CI pipeline 在 lint 階段失敗。以下是 log：... 請修復",
    },
  ]}
/>

## 了解專案

剛加入新專案，或需要理解某段特定程式碼時，直接提問即可。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "這個專案的整體架構是什麼？主要有哪些模組？",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/auth/middleware.ts 的作用是什麼？身分驗證流程如何運作？",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "說明這個專案如何管理 database migrations",
    },
  ]}
/>

## 自動化瑣碎工作

非常適合批次修改程式碼、補充文件、產生測試，以及其他重複性工作。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "為 src/utils/ 目錄中所有 exported functions 新增 JSDoc 註解",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "為 UserService 類別的所有 public methods 產生 unit tests",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "將專案中所有 var 宣告替換為 const 或 let",
    },
  ]}
/>

## 一般任務

Kimi Code CLI 不只用於寫程式，也能處理研究、資料分析、批次檔案操作等工作。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "研究目前主流的 Node.js ORM 函式庫，並比較它們的優缺點",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "分析 logs/ 目錄中過去 7 天的存取日誌，列出請求次數最高的前 10 個路徑",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "將 data/ 目錄中的所有 CSV 檔案合併為一個檔案，並移除重複列",
    },
  ]}
/>
