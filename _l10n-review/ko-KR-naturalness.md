# ko-KR Naturalness / MT-Trace Review

Locale: `ko-KR` (machine-translated from `en-US/`)
Scope: NATURALNESS / machine-translation traces only. Terminology (크레딧), punctuation, links, honorifics (합니다체) are excluded per instructions.

## Overall Fluency Verdict

**Score: 5 / 5** — Publication-grade, near-human fluency.

This is one of the cleanest MT-derived locales I have reviewed. The prose reads as native Korean technical documentation: particles are correct, clause order is naturally re-ordered into Korean SOV structure (not left in English order), sentence-final endings are consistent 합니다체, and loanword vs. native-word choices are idiomatic (e.g., 원클릭, 매끄럽게, 즉시 사용 가능, 반응성이 뛰어난). Callouts, tables, and SeoMeta descriptions read naturally. There is no robotic 번역투 rhythm across the ~21 articles sampled. The handful of findings below are isolated, not systemic.

## Counts by Severity

| Severity | Count |
| --- | --- |
| High (meaning-changing / broken) | 1 |
| Medium (calque / clearly unnatural) | 2 |
| Low (minor polish) | 3 |
| **Total** | **6** |

Note: Several odd phrasings I initially flagged were traced to source-side problems in `en-US/` (the English original is itself awkward or wrong), and the Korean is a faithful rendering. Those are NOT counted as MT traces (see "Source-side, not MT" at the end).

---

## Findings

### High

1. **`agent/features-and-limits.md:96`** — `[멤버십 크레딧](https://www.kimi.com/membership-크레딧)`
   - Why: The glossary/term-replacement pass injected the Korean word 크레딧 *inside the URL slug*, producing a broken link (`membership-크레딧`). The source is `.../membership-credits`. This is an over-eager automated substitution artifact.
   - Fix: Restore the English URL, e.g. `https://www.kimi.com/membership-credits` (verify exact slug against en-US).

### Medium

2. **`websites/overview.md:162`** — `이미지 벽돌형 레이아웃`
   - Source: "image masonry layout"
   - Why: Literal calque. "벽돌형" (brick-shaped) is not how Korean describes a masonry/Pinterest-style layout; it reads as confusing on first pass.
   - Fix: `벽돌 쌓기형(매스너리) 레이아웃` or simply `매스너리(벽돌형) 레이아웃`.

3. **`kimi-code/faq.md:108`** — `클립보드에 실제 이미지 데이터가 들어 있는지 확인하세요. 이미지 파일 경로가 아니라요.`
   - Source: "Make sure the clipboard actually contains image data, not a path to an image file."
   - Why: The "not X" tail was split off into a separate colloquial sentence ending in `-라요`, a spoken afterthought register that clashes with the surrounding written 합니다체 documentation tone.
   - Fix: Merge into one clause: `클립보드에 이미지 파일 경로가 아니라 실제 이미지 데이터가 들어 있는지 확인하세요.`

### Low

4. **`getting-started/overview.md:34`** — `Kimi는 단순한 채팅 어시스턴트를 넘어, 작업을 스스로 계획하고 실행할 수 있는 AI 에이전트입니다.`
   - Why: `단순한 ~를 넘어` is a mild 번역투 of "beyond a simple ~". Understandable and acceptable, but `단순한 채팅 어시스턴트를 넘어서` (verb form) or a restructure reads slightly more natural.
   - Fix (optional): `Kimi는 단순한 채팅 어시스턴트가 아니라, 작업을 스스로 계획하고 실행하는 AI 에이전트입니다.`

5. **`agent/swarm.md:118`** — `핵심 설계: 선수는 고정하고, 코치만 훈련하기`
   - Why: The sports metaphor ("Keep players fixed, train only the coach") is rendered literally. It parses, but `선수는 그대로 두고, 코치만 훈련한다` flows a touch more naturally than the noun-heavy `고정하고`.
   - Fix (optional): `선수는 그대로 두고 코치만 훈련하기`.

6. **`kimi-api/api-troubleshooting.md:73` (also membership overview line 36 Callout)** — a few Callout one-liners are terse to the point of reading like UI-string fragments rather than sentences.
   - Why: Minor; these mirror equally terse English source strings. Reads slightly robotic but not wrong.
   - Fix (optional): expand into full sentences where the source allows.

---

## Source-side, NOT counted as MT traces

These looked suspicious but the `en-US/` original is itself the problem; the Korean faithfully reproduces it:

- **`kimi-webbridge/FAQ.md:57`** — `Kimi WebBridge는 Windows 운영 체제를 지원하며, 설치 명령은 Linux 환경에서 실행할 수 있습니다.` The Windows question is answered with "Linux". Source `en-US/kimi-webbridge/FAQ.md:57` literally says "...the installation command can be run in a Linux environment". Source content bug, not a KO mistranslation.
- **`membership/overview.md:36`** — Callout `모든 크레딧 한도를 동일한 기능에 사용하세요`. Source `en-US/membership/overview.md:36` is "Use all credit limit for the same function" — the English itself is broken/unclear.

---

## Articles Read (21)

1. getting-started/overview.md
2. getting-started/search.md
3. getting-started/agentic-chat.md
4. getting-started/memory-tips.md
5. getting-started/presets.md
6. deep-research/overview.md
7. deep-research/use-cases.md
8. deep-research/stuck.md
9. agent/overview.md
10. agent/swarm.md
11. agent/features-and-limits.md
12. kimi-code/faq.md
13. kimi-code/cli-getting-started.md
14. kimi-claw/kimi-claw-android-guide.md (longest, 545 lines)
15. kimi-webbridge/kimi-webbridge.md
16. kimi-webbridge/FAQ.md
17. kimi-api/overview.md
18. kimi-api/api-troubleshooting.md
19. membership/overview.md
20. docs-and-sheets/overview.md
21. docs-and-sheets/docs-cases.md
22. websites/overview.md
23. slides/overview.md
24. slides/stuck.md
25. kimi-business/kimi-business.md
26. others/chat-issues.md
27. others/account-ban.md

(Sample spans all 13 top-level categories; prioritized overviews, FAQs, and the longest guides.)
