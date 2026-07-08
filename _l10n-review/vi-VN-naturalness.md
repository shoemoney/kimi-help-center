# vi-VN Naturalness Review — Kimi Help Center

**Scope:** Machine-translation naturalness / fluency of `vi-VN/` (translated from `en-US/` at the same paths). Terminology (tín dụng), punctuation, links, and pronoun (bạn) are handled elsewhere and are **not** re-reported here.

## Overall fluency verdict: **5 / 5**

This locale reads as near-native, professionally post-edited Vietnamese. Sentence rhythm, connectives (nhờ đó, thay vào đó, chẳng hạn), classifier/particle usage, and register (formal-but-friendly help-center tone) are consistently idiomatic. There is almost no raw MT residue: no unnatural word order, no robotic subject-verb calques, no mistranslations that change meaning. The few findings below are minor collocation/lexical-choice nits and one calque that borders on terminology. The overwhelming majority of paragraphs, Callouts, tables, and SeoMeta descriptions are indistinguishable from human-authored copy.

## Counts by severity

| Severity | Count |
|---|---|
| High (meaning-changing / clearly wrong) | 0 |
| Medium (awkward calque / wrong collocation, noticeable) | 1 pattern (`chỗ ngồi` = seats, 6 hits) |
| Low (mild anglicism / slightly literal, still understandable) | 3 (1 pattern + 2 one-offs) |

---

## Medium

### 1. `chỗ ngồi` used for SaaS "seats" — calque (6 occurrences)

- `kimi-business/faq.md:18` — "cần quản lý **chỗ ngồi**, giới hạn sử dụng cao hơn"
- `kimi-business/faq.md:22` — "chiếm **chỗ ngồi** độc lập tại từng tổ chức"
- `kimi-business/faq.md:26` — "Thành viên tham gia bằng **chỗ ngồi** chưa được phân bổ"
- `kimi-business/faq.md:28` (heading) — "Có thể thêm **chỗ ngồi** trong thời gian đăng ký không?"
- `kimi-business/faq.md:30` — "thêm **chỗ ngồi** bất cứ lúc nào… **Chỗ ngồi** mới thêm…"
- `kimi-business/faq.md:11,76` — SeoMeta + agreement list

**Why unnatural:** `chỗ ngồi` literally means a physical seat/chair (as in a cinema or on a bus). For enterprise-license "seats" Vietnamese business users say **số lượng người dùng**, **suất người dùng**, **giấy phép người dùng**, or keep the borrowed **seat**. As prose ("chiếm chỗ ngồi độc lập") it reads oddly literal.

**Natural rewrite:** "quản lý **số lượng người dùng / suất sử dụng**", "chiếm **một suất người dùng** độc lập", "Thành viên dùng **suất chưa được phân bổ**", "Có thể thêm **suất người dùng** trong thời gian đăng ký không?". (Note: partly a terminology decision — flagged here because it degrades naturalness of running text.)

---

## Low

### 2. `và nhiều hơn nữa` — literal calque of English "…and more" (6 occurrences)

- `_config.json:3`, `kimi-code/faq.md:12`, `kimi-webbridge/how-it-works.md:11`,
  `kimi-webbridge/FAQ.md:100`, `kimi-webbridge/kimi-webbridge.md:108`, `kimi-claw/concepts.md:25`

**Why unnatural:** `và nhiều hơn nữa` mirrors "and more" word-for-word. It is understandable but slightly stiff/translated-sounding in a list.

**Natural rewrite:** **cùng nhiều nội dung khác** / **và nhiều thứ khác** / **v.v.** — e.g. "Claude Code, Codex, Cursor, Kimi Code, Hermes Claw **cùng nhiều công cụ khác**."

### 3. SeoMeta description is a raw placeholder-prompt translation (reads oddly as a page description)

- `getting-started/memory-tips.md:11` — description = "Tôi là tên/biệt danh, hiện sống tại thành phố. Có nền tảng về nghề nghiệp/vai trò, chuyên sâu trong lĩnh vực 1 và lĩnh vực 2."
- `deep-research/use-cases.md:11` — description = "Tôi là một nhà phân tích chứng khoán chuyên nghiệp. Hãy giúp tôi phân tích chuyên sâu về Pop Mart… bao gồm nhưng…"

**Why unnatural:** These are literal renderings of a sample prompt / template placeholder used as the meta description (the same quirk exists in en-US, so it is faithful, not a translation error — but it reads as a fragment, not a description). Low priority; a human-written summary would read better. No rewrite needed for translation quality.

### 4. Minor: `chiếm chỗ ngồi` collocation

- `kimi-business/faq.md:22` — subsumed under Finding 1; "chiếm chỗ ngồi" ("occupy a seat") is the most literal instance of the seat calque.

---

## Notes (checked, NOT findings — these are correct/idiomatic)

- `một cách + adj` (một cách liền mạch, một cách độc lập, một cách mù quáng) — idiomatic Vietnamese adverbial, not an MT trace.
- Retained English product/technical terms (Web Search, Fetch Tool, sandbox, rate limit, concurrency, full-stack, commit, tech stack) are appropriate for the technical audience and are used naturally.
- Analogy passages (swarm.md "Huấn luyện viên/Chỉ huy … Cầu thủ") read fluently and creatively, not literally.
- `Hermers Claw` (kimi-webbridge) is a proper-noun typo (should be Hermes) — a source/spelling issue, out of scope for naturalness.

---

## Articles read (20, across all 13 categories)

1. getting-started/overview.md
2. getting-started/agentic-chat.md
3. getting-started/search.md
4. getting-started/memory-tips.md
5. kimi-code/faq.md
6. kimi-code/cli-getting-started.md
7. kimi-business/faq.md
8. deep-research/overview.md
9. deep-research/use-cases.md
10. websites/overview.md
11. websites/why-not-working.md
12. agent/swarm.md
13. agent/features-and-limits.md
14. agent/what-are-skills-en.md
15. slides/stuck.md
16. docs-and-sheets/overview.md
17. membership/update-rules.md
18. others/chat-issues.md
19. kimi-api/api-troubleshooting.md
20. kimi-webbridge/kimi-webbridge.md
21. kimi-claw/desktop-deployment-guide.md
22. kimi-claw/kimi-claw-android-guide.md (partial, longest guide)

Cross-checked against en-US at: kimi-business/faq.md.
