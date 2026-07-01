---
title: "Kimi Sheets 使用案例與提示詞庫"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Sheets 使用案例與提示詞庫 - Kimi 說明中心"
  description="Kimi Sheets 範例使用案例與提示詞——從財務估值到分鏡腳本創作。"
/>

# Kimi Sheets 使用案例

<Callout type="info">
Kimi Sheets 範例使用案例與提示詞——從財務估值到分鏡腳本創作。
</Callout>

## 財務估值

Kimi 能像財務分析師一樣，蒐集真實財務資料、建立 DCF 估值模型，並進行模擬公司估值。

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**範例提示詞**：

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "請對 XX Healthcare 進行 DCF 估值。將完整估值流程與資料\n整理到 Excel 試算表中，註明資料來源，說明市場規模、成長率、\n市占率等估算數值背後的推理依據，並納入總體環境分析。",
    },
  ]}
/>

## 分鏡腳本創作

Kimi 能像分鏡師一樣，建立 Excel 格式的影片分鏡腳本，內容包含時長、鏡頭描述、旁白、音效與參考畫面。

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="逐字稿"
/>

**範例提示詞**：

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "請為 Kimi AI 全新升級功能 OK Computer 製作一支 3D 宣傳影片的 Excel 分鏡腳本。\nOK Computer 支援生成與編輯 Office 文件\n（例如 Word 長篇論文排版、Excel 資料建模與分析、\n自動生成簡報）。\n\nExcel 需包含：\nA 欄：序號（1-20）\nB 欄：累計時長（秒）\nC 欄：單鏡頭時長（秒）\nD 欄：鏡頭描述（3D／攝影機運動）\nE 欄：旁白／文字（以不同背景色區分旁白\n與畫面文字）\nF 欄：音效／BGM（以不同字體顏色區分）\nG 欄：分鏡畫面（為每個鏡頭生成一張圖片——使用經典黑白線稿風格\n維持視覺一致性）\n\n請自行設計創意大綱、腳本與分鏡，接著\n生成畫面以完成此腳本，並以精緻的 Excel 格式呈現。",
    },
  ]}
/>

## 更多情境與範例提示詞

| 情境 | 範例提示詞 |
|------|-----------|
| 財務建模 | 對 XX Company 進行 DCF 估值——將完整流程與資料整理到 Excel，註明來源，並說明成長率等關鍵假設背後的推理依據 |
| 產業資料比較 | 研究國內前 20 大 NEV 公司——以比較表列出市值、2025 年銷量、旗艦車型與近期新聞 |
| 文獻整理 | 搜尋過去三個月關於 LLM 推論最佳化的論文——整理到 Excel，包含標題、作者、核心方法與主要貢獻 |
| 多工作表合併 | [上傳 12 份月度銷售 Excel 檔案] 將這 12 個工作表合併為年度摘要，計算月增率，並使用公式進行跨工作表連結 |
| 銷售線索擷取 | [上傳展會 PDF／圖片] 擷取所有參展商資訊，並整理成一份 1,000 列的銷售線索 Excel 檔，包含公司名稱、聯絡資訊與產品類別 |
| 專案管理 | 建立一份 PMO 專案管理 Excel，包含任務清單、負責人、進度狀態、甘特圖與跨工作表連結 |
| 資料視覺化 | 將這份銷售資料 Excel 轉換為視覺化儀表板，包含趨勢折線圖、區域分布圖與完成率環圈圖 |
