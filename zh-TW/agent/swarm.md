---
title: "K2.6 Agent Swarm [Beta 版]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [Beta 版] - Kimi 說明中心"
  description="K2.6 Agent Swarm Beta 版是一種 &quot;水平擴展&quot; 架構，可協調多達 300 個子 Agent 並行工作——無須預先定義角色或手工設計..."
/>

# K2.6 Agent Swarm [Beta 版]

<Callout type="info">
**K2.6 Agent Swarm [Beta 版]** 是一種「水平擴展」架構，可協調多達 300 個子 Agent 並行工作——無須預先定義角色，也不需要人工編排流程。相較於單 Agent 執行，任務完成速度約可提升 **4.5 倍**。
</Callout>

2026 年 1 月 27 日，Moonshot AI 發布 Kimi K2.5，首次引入 Agent Swarm [Beta]。2026 年 4 月 20 日，Moonshot AI 發布並開源 Kimi K2.6，為 Agent Swarm 架構帶來重大升級：
- 最多 **300 個子 Agent** 同時工作
- 單一任務可進行超過 **4,000 次工具呼叫**
- 比單 Agent 順序執行快 **4.5 倍**

## 背後的故事

2025 年，AI 產業的主流敘事聚焦於垂直擴展——更大的模型、更多的參數。但這條路會撞上結構性的天花板：單一順序執行瓶頸。

Agent Swarm 源自一個真實場景：一位團隊成員嘗試自動化每日股票資訊蒐集，卻寫到了 100 行 if-else 程式碼。她忽然意識到：「我正在手寫一套多 Agent 系統。」既然模型能使用工具，為什麼不能自行設計組織架構？

Agent Swarm 是一種自我設計的組織結構——由 AI 設計，而不是由人類設計。主 Agent（協調器）可自主指揮多達 300 個子 Agent，並執行多達 4,000 個並行工作流程步驟。

<Frames
  src="./images/swarm/swarm.png"
  alt="群體"
/>

K2.6 Agent Swarm [Beta 版] 採用 PARL（Parallel-Agent Reinforcement Learning）訓練方法。相較於單 Agent 方法，在大規模搜尋場景中可將關鍵步驟減少 3 倍至 4.5 倍。

## 如何使用？

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="截圖 8"
/>

**入口：**
- **Web**：[kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Mobile**：Kimi app → 切換模式 → 選擇 K2.6 Agent Swarm [Beta 版]

<Callout type="warning">
**Beta 版權限**：K2.6 Agent Swarm [Beta 版] 目前開放給 Moderato、Allegretto、Allegro 與 Vivace 會員使用。此類任務消耗的額度（配額）明顯高於標準 Agent 任務。
</Callout>

**步驟：**
1. 描述你的任務並送出（例如：「收集 200+ 篇 Paul Graham 文章」）
2. 即時查看進度：建立任務清單、生成子 Agent、並行執行
3. 取得交付成果：程式碼專案、檔案資料夾、資料分析、Office 文件
4. 預覽、下載或分享結果
5. 切換至單一 K2.6 Agent，在後續回合中繼續處理

## 使用案例

### 大規模探索

**案例 1：100 個 YouTube 細分領域中的前 3 名創作者**

K2.6 Agent Swarm [Beta 版] 建立了 300 個子 Agent 進行並行搜尋，產出包含頻道名稱、訂閱者數與描述的結構化表格。

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="查看結果" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**案例 2：收集 200+ 篇 Paul Graham 文章**

Agent Swarm 部署子 Agent 進行搜尋、下載、分類與摘要，將 200+ 篇文章整理到主題資料夾中。

<Chat title="查看結果" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### 大規模輸出

**案例：從 40 份 PDF 生成 100 頁文獻綜述**

K2.6 Agent Swarm [Beta 版] 部署多個聚焦寫作的子 Agent，各自負責一個章節。最終輸出：一份 100 頁的學術文件，包含引用、方法論圖表與引用網路分析。

<Frames
  src="./images/swarm/literature-review.png"
  alt="文獻綜述"
/>

### 大規模視角

**案例：產品上市策略專家審查**
Agent Swarm 部署具備不同視角的專家子 Agent（產品經理、投資人、客戶成功），共同審查一項上市策略。

<Frames
  src="./images/swarm/expert-review.png"
  alt="專家審查"
/>

<Chat title="查看結果" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**案例：以 20 種文學風格改寫《三體》**
20 個「作家」子 Agent 以各自不同的風格獨立創作——從 Virginia Woolf、Borges 到 Kafka。

<Chat title="查看結果" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## 技術深潛

**核心架構：指揮官 + 專家**

- **協調器** = 教練／指揮官：掌握全局，制定策略
- **子 Agent** = 球員：各自專注於特定角色

**關鍵設計：凍結球員，只訓練教練**

所有子 Agent 保留既有能力；只有協調器透過強化學習持續改進。這樣能帶來清晰的責任歸屬，也讓訓練更穩定。

**防止「偷懶」：**
- **串行坍縮**：協調器把所有工作都交給同一個子 Agent
- **假並行**：為了衝高指標而切出無意義的子任務

**解法：三維獎勵機制**
1. 最終結果品質
2. 是否實現真正的並行
3. 子任務完成率

**關鍵步驟指標**

Agent Swarm 會計算每個階段中最慢子 Agent 所花費的時間。這會迫使系統進行真正的流程優化，而不是盲目拆分任務。

**Context Sharding（上下文分片）**

每個子 Agent 都專注於自己的「筆記本」，獨立記錄相關細節。只有關鍵結論會回報給協調器——既保留推理脈絡，又避免記憶負載過重。

**真實世界成果**

在 BrowseComp 基準測試上：
- 準確率：15.9%（單 Agent）→ 33.3%
- 關鍵步驟減少約 40%

## 應用場景

K2.6 Agent Swarm [Beta 版] 特別適合：
1. **大規模資訊檢索**：海量網路資料蒐集
2. **批次下載**：大規模檔案與資源蒐集
3. **廣範圍閱讀**：處理 100+ 份文件
4. **長篇寫作**：產出超過 100,000 字的內容
5. **複雜程式設計**：前端開發、程式碼審查、重構
6. **Office 自動化**：專業文件、試算表、簡報

**延伸閱讀：**
- [Kimi Agent Swarm：100 個 Sub-Agent 的規模化實踐](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5：視覺 Agentic 智慧](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6：推進開源 Coding](https://www.kimi.com/blog/kimi-k2-6)
