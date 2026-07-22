---
title: "Agent 功能與限制"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Agent 功能與限制

<SeoMeta
  title="Agent 功能與限制 - Kimi 說明中心"
  description="了解 Kimi Agent 的能力、使用技巧、限制與最佳實務，幫助你取得最佳成果。"
/>

<Callout type="info">
**Kimi Agent** 是一款 AI 助理，能透過多步推理與工具整合，自主執行複雜任務。本指南整理了最佳實務、限制與常見問題，幫助你更有效地使用 Agent 模式。
</Callout>

## 使用技巧

**(1) 提交任務前**

請清楚說明背景資訊與限制條件，例如專案脈絡、使用情境與特殊需求，讓 Kimi 更準確理解你的意圖。

**(2) 執行期間**

Kimi Agent 會在背景非同步執行。若網頁看起來凍結或停滯，**請不要點擊「停止」**，否則會中斷任務。你可以離開頁面；任務會繼續在背景執行，完成後你會收到通知。若是預期耗時較長的任務（例如 Agent Swarm），請耐心等候。

**(3) 網站情境**

Agent 可以生成全端內容，包括前端介面、後端服務與持久化儲存邏輯。若專案未如預期執行，通常與沙盒啟動、資料庫初始化、身分驗證設定，或未執行發布動作有關。標準 Agent 在雲端執行，無法直接存取本機檔案或企業內網系統。如需存取本機檔案或內網，請使用 Kimi Claw。

<Callout type="tip">
**需要存取本機檔案嗎？** 使用 Kimi Claw，即可安全存取本機檔案與企業內網系統。詳情請參閱 [Kimi Claw 文件](/kimi-claw/overview)。
</Callout>

**(4) 多輪對話與任務調整**
經過多輪對話與修訂後，Agent 可能會「忘記」部分早期細節。建議先確立任務框架與重點，再逐步進行調整。

**(5) 大型任務拆解**
對於龐大且複雜的任務，請拆成 2–3 個階段分批提交給 Kimi，或使用 Agent Swarm。

**(6) 檔案輸出限制**
在標準 Agent 模式下，每個任務通常只能輸出一個檔案（例如文件或試算表）。若需要多個檔案（例如同時輸出 Word 文件與 PPT），請使用 Agent Swarm。

**(7) 上下文限制與輸出平衡**
受大型語言模型 256K 字元上下文限制影響（約 40,000–50,000 個中文字 / 約 100,000 個英文單字），處理大量檔案時需要在輸入量與輸出量之間取得平衡。

<Callout type="warning">
**上下文限制提醒**：Agent 使用 256K 字元的上下文視窗。為獲得最佳結果，請提供精簡的上下文，避免加入不必要的檔案造成負擔。
</Callout>

## 重要注意事項

<Callout type="warning">
**credit（額度）用量**：Agent 任務會消耗共享池中的 credit。Kimi Code 也會使用同一個共享池，但 Kimi Code 另有僅適用於自身的 5 小時 / 每週 rate limit。每個 Agent 任務通常消耗 1 個 credit 單位。各會員等級的 credit 詳細資訊，請參閱 [Credits & Billing](/agent/quota-and-billing)。

- 依方案不同，每月可執行 60–720 個 Agent 任務
</Callout>

- **執行時間**：在 Agent 模式下，單一任務通常需要 5–20 分鐘。Agent Swarm 任務可能需要更久。你可以離開頁面——只要不要點擊「停止」中斷任務即可。
- **credit（額度）用量**：Agent 任務會消耗共享池中的 credit，Kimi Code 也會使用同一個共享池（Kimi Code 另有自己的 5 小時 / 每週 rate limit）。
- **簡單任務**：若只是簡單問答，建議使用標準聊天模式，以獲得更快回應。

<Callout type="warning">
**內容合規**：Agent 功能受 [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2) 約束。不支援生成違規內容；提交違規內容可能導致服務暫停。
</Callout>

## FAQ

**Q: Agent 可以做什麼？**

Agent 可透過多次工具呼叫滿足以下需求：
- **文字生成與編輯**：生成文章、報告、文件等，並支援多種寫作風格與格式。
- **網頁開發**：建立全端專案介面與服務，支援應用程式介面設計、後端整合、資料持久化與資料視覺化。
- **簡報生成**：提供專用的網頁式 PPT 工具，用於生成完整簡報。
- **程式開發輔助**：支援多種程式語言的程式碼撰寫與除錯。

**Q: 為什麼 Agent 建立的網站無法運作？**

完整專案通常由三個部分組成：前端介面、後端服務與資料儲存。Agent 可以在這三層生成全端專案內容。若你的專案未如預期執行，通常與沙盒啟動、資料庫初始化、身分驗證設定，或未執行發布動作有關。

**Q: Agent 的交付成果有哪些？**

- 完整的任務執行檔案
- 已部署的專案預覽與發布版本
- 可下載的 Zip 壓縮檔（位於 `/mnt/okcomputer/output/`）

**Q: Agent 的上下文長度是多少？**

Agent 使用 **256K 字元** 的上下文長度（約 40,000–50,000 個中文字 / 約 100,000 個英文單字）。

**Q: Agent 的 credit 如何計算？**

所有會員功能，包括 Kimi Code，都共用同一個 credit 池。每個 Agent 任務通常計為一個 credit 單位。
