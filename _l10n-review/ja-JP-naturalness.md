# ja-JP Naturalness / MT-Trace Review

**Locale:** `ja-JP` (machine-translated from `en-US/`)
**Scope:** Naturalness / machine-translation traces only. Terminology (クレジット), punctuation, links, keigo (です・ます) were explicitly out of scope and are NOT re-reported here.
**Date:** 2026-06-30

## Overall Fluency Verdict: 4.5 / 5

This is a strong, professional localization. The prose reads as native-quality Japanese in the overwhelming majority of articles: particles are correct, sentence structure is idiomatic (not 翻訳調), katakana usage is measured, and technical explanations flow naturally. Overviews, FAQs, and long guides are consistently well-written. Marketing/feature copy (swarm.md, websites/overview.md, agentic-chat.md) is especially fluent and would pass as originally-authored Japanese.

MT traces are rare and minor. The dominant residual issue is a small set of **section headings phrased as literal past-tense yes/no questions** (直訳 of English "Did X happen?" / "X disconnected?"), which read like survey questions rather than natural Japanese symptom/topic headings. A native editor would convert these to `〜する場合` / `〜が…しない` topic form. Notably, most other troubleshooting articles already use the natural `？`-topic heading style, so this is an inconsistency rather than a systemic failure.

No meaning-changing mistranslations were found in the sample. No untranslated English where standard Japanese exists (English product/tech terms like Web Search, Agent, token are intentional brand/technical usage).

## Counts by Severity

| Severity | Count |
|---|---|
| High (meaning change / breaks comprehension) | 0 |
| Medium (clearly unnatural, noticeable to natives) | 2 |
| Low (mild stiffness / polish) | 4 |
| **Total** | **6** |

---

## Findings

### Medium

**1. `kimi-claw/kimi-claw-android-guide.md:453` — `#### ゲートウェイが突然切断されましたか？`**
Why unnatural: 直訳 of EN "Did the gateway suddenly disconnect?". As a troubleshooting **section heading**, a past-tense yes/no question reads like a questionnaire item, not a symptom label. Japanese help-center headings for symptoms normally use topic/conditional form. (The sibling headings in this same file at 447/459 correctly use `〜のはなぜですか？` / `〜切れますか？` which read more naturally; 453 stands out because of `突然…ましたか？`.)
Natural rewrite: `ゲートウェイが突然切断される場合` or `ゲートウェイが突然切断されるのはなぜですか？`

**2. `kimi-claw/conversation-limits.md:26` — `## API rate limitに達しましたか？`**
Why unnatural: 直訳 past-tense question as a heading. The body immediately restates it as a condition ("〜に達したことを意味します"), so the heading should be a topic, not a question directed at the reader.
Natural rewrite: `## API rate limit に達した場合` or `## API rate limit に達したとき`

### Low

**3. `getting-started/agentic-chat.md:37` — table cell `取得ツール`**
Why slightly off: `取得ツール` as a standalone tool name is a bare nominalization ("fetch tool") that reads a touch mechanical next to the other English-branded tool names (Web Search, IPython, メモリ). Not wrong, but "取得（Fetch）ツール" or keeping it as `Fetch ツール` would match the register of the surrounding rows better. Minor.
Natural rewrite: `Fetch（取得）ツール` — or leave as is; borderline.

**4. `kimi-claw/kimi-claw-android-guide.md:112` — `Kimi 会話を使用 —`**
Why slightly off: `Kimi 会話を使用` is a label calqued from EN "Use Kimi Chat" — noun+を+する-stem as a UI label is slightly stiff in Japanese, which tends to prefer `Kimi で会話する` or `Kimi 会話を開く`. Reads as a literal button-string translation.
Natural rewrite: `Kimi で会話する` / `Kimi 会話を開く`

**5. `agent/swarm.md:29` — `モデルがツールを使えるなら、なぜ自分で構成を設計できないのでしょうか。`**
Why slightly off: The rhetorical question is fine, but `構成を設計できない` is a hair ambiguous (self vs. the model as agent). The intended sense ("why can't *it* design the setup itself?") could read as "why can't *I* design it." Very minor; context resolves it. Consider `なぜ AI 自身に構成を設計させられないのか` for clarity.
Natural rewrite: `モデルがツールを使えるのなら、AI 自身に構成を設計させてもよいのではないか。`

**6. `deep-research/use-cases.md:72` — `私は…in-house 弁護士です`**
Why slightly off: Mixing raw English `in-house` into otherwise fully-Japanese prompt prose is a mild inconsistency; standard Japanese is `社内弁護士` / `企業内弁護士`. This is prompt-example content (lower stakes), but a native editor would localize it.
Natural rewrite: `私は中国のロボット企業の社内弁護士です`

---

## Notes / Non-Findings

- Question-style headings ending in `？` (e.g. chat-issues.md "メッセージを送信できない／赤い丸が表示される？", "会話が20万語を超えた？") read **naturally** as symptom topics and are NOT flagged — they use present/state form, not the awkward past-tense yes/no form of findings #1–2.
- `websites/overview.md:45` links to `kimi.com/zh/websites` (has `/zh/` path) — this is a link/source issue, out of scope, not reported as naturalness.
- `kimi-webbridge/FAQ.md:57` ("Windows … Linux 環境で実行できます") is a faithful translation of an oddly-worded EN source (the EN itself mismatches Windows/Linux); this is a source defect, not a JA MT trace.

## Articles Read (20)

1. getting-started/overview.md
2. getting-started/agentic-chat.md
3. getting-started/memory-tips.md
4. getting-started/search.md
5. getting-started/presets.md
6. agent/overview.md
7. agent/swarm.md
8. deep-research/overview.md
9. deep-research/use-cases.md
10. deep-research/stuck.md
11. kimi-api/overview.md
12. kimi-api/api-troubleshooting.md
13. kimi-claw/kimi-claw-android-guide.md (longest, 545 lines)
14. kimi-claw/troubleshooting.md
15. kimi-claw/conversation-limits.md
16. kimi-code/faq.md
17. kimi-code/cli-getting-started.md
18. websites/overview.md
19. docs-and-sheets/overview.md
20. kimi-business/kimi-business.md
21. membership/overview.md
22. membership/payment-issues.md
23. others/chat-issues.md
24. slides/stuck.md
25. kimi-webbridge/FAQ.md

(25 files opened; all 14 categories covered.)
