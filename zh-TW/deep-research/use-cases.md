---
title: "Deep Research 使用案例與提示詞庫"
slug: "deep-research-use-cases"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Deep Research 使用案例&提示詞庫 - Kimi 說明中心"
  description="探索 Kimi Deep Research 的典型使用情境，包括產業分析、競品調查、市場趨勢與學術文獻回顧，並提供實用的提示詞範例，協助你快速上手。"
/>

# Deep Research 使用案例與提示詞庫

## 使用案例概覽

| 場景 | 範例提示詞 |
|:---|:---|
| 產業／市場研究 | 研究 2025 年國內人形機器人領域的競爭格局與主要參與者 |
| 競品分析 | 比較並分析 Notion 與 Obsidian 在產品策略上的差異 |
| 投資盡職調查 | 整理過去兩年主要 LLM 公司的融資輪次與估值變化 |
| 學術文獻綜述 | 梳理 RAG 技術的發展脈絡及目前主要最佳化方向 |
| 政策分析 | 分析最新資料安全法規對企業出海的影響 |
| 個人決策 | 我想買一台用於影片剪輯的筆電——請幫我調研主流選項 |

## 產業研究

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我是專業證券分析師。請從財務角度協助我對 Pop Mart 進行深入分析。分析內容應包括但不限於：1. 公司概況：商業模式、競爭護城河與產業地位；2. 產業概況、上下游動態與未來發展；3. 財務資料：營收與利潤趨勢、影響因素、資產負債表與現金流；4. 合規記錄——是否曾受監管處罰、具體事由及相關風險；5. 技術分析：價格走勢、指標與支撐／壓力位；6. 市場情緒：評級、公眾情緒與新聞影響；7. 競爭比較：主要競爭對手、各自市占率與財務指標；8. 估值與健康度：PE/PB/DCF 估值及合理性評估；9. 主要風險：產業競爭、政策、地緣政治等。",
    },
  ]}
/>

## 競品分析

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "比較並分析 Notion 與 Obsidian 在產品策略上的差異",
    },
  ]}
/>

## 投資盡職調查

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "對 [公司名稱] 進行深度調研：\n1. 商業模式與核心護城河（競爭優勢、技術／通路優勢、競爭格局）；\n2. 財務健康度（營收結構、獲利能力、現金流、主要風險領域）；\n3. 團隊與治理（創辦人背景、股權結構、核心人才）；\n4. 市場與政策（TAM/SAM/SOM、產業成長率、監管環境）；\n5. 風險識別（商業、法律、退出障礙）；\n6. 估值參考（可比公司、歷史融資輪次、合理區間）。\n要求：引用資料來源，以 ⭐ 標示重點結論，爭議點請另行列出。",
    },
  ]}
/>

[查看結果](https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b)

## 法律與監管研究

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我是一家中國機器人公司的 in-house 法務，管理層正在考慮拓展東南亞市場。不過，我對這些國家的資料與隱私要求還不太有把握。能否請你按國家逐一列出東南亞各國資料與隱私相關法律的名稱，並最好附上這些法律的簡要摘要與重點提醒？",
    },
  ]}
/>

## 學術綜述 

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我是傳播學研究生，正在進行關於「數位落差」的學術研究。請做一次系統性的深度調研。我需要至少 15 篇中英文核心期刊論文。請提供這一概念的定義、過去 3–5 年的相關文獻，以及 3 個可供後續研究的潛在子題。請聚焦 2020 年以來的最新研究與政策文件，並特別關注 2023 年 AI 熱潮之後的新研究動態。",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "為七年級學生設計一份「春」的教案",
    },
  ]}
/>

<Frames
  src="./images/use-cases/academic-review.png"
  alt="學術綜述"
/>

## 政策分析

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "作為政策分析師，請對 [政策名稱/文件] 進行深度分析，涵蓋政策背景與核心目標。\n請列出適用主體、關鍵條款的實質變化、企業需遵循的具體合規要求與時程，並預測未來政策走向。\n要求：引用官方文本並標註來源，突出關鍵變化，對爭議條款另行討論，全文控制在 2,000 字以內。",
    },
  ]}
/>

## 個人決策（旅行規劃／產品比較）

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我想自駕遊北疆。請規劃一份 5 天 4 夜的行程，涵蓋美食、活動與住宿。我們一家四口出行，包括我、我的配偶、一名 6 歲男孩和一名 4 歲女孩。孩子們精力充沛，也喜歡走路，但請避開特別危險的路線。",
    },
  ]}
/>

## 其他提示詞範例

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "整理 2025 年機器人產業融資事件，按月份排序，註明領投方與融資趨勢，並提供引用連結。",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "比較 iPhone 16 與 iPhone 17 在拍照、效能與電池續航方面的優缺點，並引用過去一年真實使用者的回饋。",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我是一名大學生，正在找工作，想從零開始學習 LLM 開發。請幫我規劃這個領域的學習路徑，並提供相應的知識點。",
    },
  ]}
/>
