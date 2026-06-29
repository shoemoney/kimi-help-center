---
title: "資料處理與安全性"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="資料處理與安全性 - Kimi 說明中心"
  description="Kimi API 的使用者資料安全與隱私保護常見問題。"
/>

# 資料處理與安全性

<Callout type="info">
Kimi API 的使用者資料安全與隱私保護常見問題。
</Callout>

Kimi API 非常重視使用者資料安全與隱私保護。
## 使用者資料會用於模型訓練嗎？

<Callout type="warning">
**不會。** 透過 API 提交的使用者資料（包括輸入內容與模型輸出）**不會用於訓練或改進 Kimi 的模型**。你的資料僅用於完成當前的 API 請求，不會為了訓練目的而持久儲存。
</Callout>

## 如何確保私密資料安全？
Kimi API 採取多重措施保護你的私密資料：
| 措施 | 說明 |
| --- | --- |
| **傳輸加密** | 所有 API 通訊均使用 HTTPS/TLS |
| **資料隔離** | 不同使用者的資料會被嚴格隔離 |
| **不用於訓練** | API 資料不會用於模型訓練 |
| **存取控制** | 透過 API Key 驗證，僅允許授權存取 |
| **合規認證** | 平台已取得相關安全認證 |

<Callout type="tip">
如有更高的安全需求，請聯絡銷售團隊了解企業級安全解決方案。
</Callout>

## 內容安全審核
Kimi API 內建內容安全審核機制：
- 系統會自動偵測並過濾禁止內容（非法活動、暴力、露骨內容等）
- 觸發審核時，API 會返回相應的錯誤回應
- 內容審核不會儲存或暴露你的原始資料
- 如果你認為審核被誤觸，請攜帶 `request_id` 聯絡支援團隊
## 如何刪除已上傳的檔案？
透過檔案 API 上傳的檔案可隨時刪除：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

請在請求標頭中包含你的 API Key，並提供檔案 ID 以刪除該檔案。刪除後，該檔案將無法再被引用，其資料也會從伺服器移除。

<Callout type="info">
你也可以在控制台的檔案管理頁面查看並刪除已上傳的檔案。
</Callout>
