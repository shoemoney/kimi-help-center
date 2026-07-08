# Glossary 迭代记录 / Iteration Log

本文件记录 `glossary/terms.yaml` · `terms.json` 的迭代流程与历史。
配合 [`../TRANSLATION.md`](../TRANSLATION.md)（翻译原则）、[`../AGENTS.md`](../AGENTS.md)（写作规范）一起使用。

---

## 迭代前置检查清单（每次改词条 / 翻译前必做）

1. **对齐 Lokalise 翻译标准**
   前往 <https://app.lokalise.com/projects> 查看各产品语言的既有翻译标准，
   核对专业词汇，确保 glossary 与 Lokalise **不分叉**（同一术语两处标准必须一致）。
   若发现冲突：以经过调研确认的更专业者为准，并同步回 Lokalise。

2. **对齐权威厂商术语（LLM / AI 专业词汇）**
   对 **OpenAI** 与 **Claude Code（Anthropic）** 关于大语言模型 / AI 的专业词汇做一轮调研与校对，
   以其**各语言官方本地化文档**为参照。重点词：
   `token` · `context window` · `agent` · `tokenizer` · `prompt` ·
   `inference` · `fine-tuning` · `embedding` · `hallucination` ·
   `system prompt` · `reasoning` · `MCP` 等。
   每个词确定：是否本地化、各语言标准形、保留英文的例外（代码标识符/参数名等）。

## 维护规范（摘自 TRANSLATION.md）

- `terms.yaml` 与 `terms.json` **手工并行维护**：两个文件都要改。
- 改动后 **bump** `meta.last_updated`（新增词条再 bump `meta.total_terms`）。
- `translation_strategy`：`keep_original` | `keep_original_with_note` | `localize`。
- `localize` / `keep_original_with_note` 词条的 per-locale 形式放 `localized_forms` 映射；
  语言级注意事项可加 `ja_note` 等 `<locale>_note` 字段。

---

## 迭代日志

### 2026-07-08 · M2-001 `token` 多语言本地化

- **起因**：ja-JP 帮助中心正文里裸英文 `token` 与日语直连（`tokenを`）不自然；
  原 glossary 标注 `keep_original`（"绝对不可译"），与实际惯例不符。
- **调研**（新闻 / 学界 / 业界 / 官方厂商文档）：
  - 官方本地化：Microsoft Learn、Google Cloud、OpenAI Help Center 各语言版。
  - **结论：按文字体系分野** —— 非拉丁文字**音译**，拉丁文字**保留英文**。
- **各语言标准形**：
  | 音译（非拉丁） | 保留英文（拉丁） |
  |---|---|
  | ja `トークン` · ko `토큰` · ru `токен` · th `โทเค็น` | de/fr/it/es/pt/id/vi/tr = `token`（fr 可选 `jeton`、tr 可选 `belirteç`，仅见于部分官方本地化） |
- **落地**：ja/ko/ru/th 四语言文档正文统一为音译；glossary M2-001
  改 `keep_original` → `keep_original_with_note`，加 `localized_forms`（ja/ko/ru/th）。
- **全程保留英文（所有语言一致）**：代码标识符/参数（`max_tokens`、`KIMI_MAX_TOKENS`、`TPM`）、
  API 端点 URL（`estimate-token-count`）、认证 / bot token、固有名（`Token Estimation`、`token bucket`）、`tiktoken`。
- **提示 / 待办**：
  - 俄语格变化（`токенов` 属格 / `токены` 宾格 / `токенах` 前置格 / `токен-лимит` 复合词）系机器逐句判定，**上线前建议俄语母语复核**。
  - 本次仅完成 `token` 一词；其余 LLM/AI 专业词（见上方 checklist 第 2 条）**待下一轮调研校对**。
  - 尚**未**对齐 Lokalise（checklist 第 1 条），下轮补齐。
