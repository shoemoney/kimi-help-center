# Localization Review — `ko-KR` (Korean)

Source: machine-translated from `en-US/` (identical paths). Files reviewed: 90 `ko-KR/**/*.md`.

## Counts

| Category | Count |
|---|---|
| 1. Leftover Chinese / leftover English | 1 (+2 in-path filenames, cosmetic) |
| 2. Untranslated words mid-sentence | 1 |
| 3. Fullwidth punctuation | 4 (2 [source], 2 translator-introduced) |
| 4. Broken anchor links | 2 |
| 5. Bilingual `English (中文)` leftovers | 0 |
| 6. Honorific/register switches | 0 (1 false-positive checked & cleared) |
| 7. Reversed semantics (overview "top 3.2%") | 0 (correct) |
| 8. Naturalness / awkward MT | 1 |

**Verdict:** The ko-KR translation is high quality overall — consistent 합니다체 register, natural phrasing, no Chinese-character or bilingual leftovers in body text. The only genuine defects are 2 broken in-page anchor links (English slugs that no longer match the translated Korean headings), 2 translator-introduced/source fullwidth-paren issues, and 1 untranslated word (`Thinking mode`). All are quick, low-risk fixes.

---

## 1. Leftover Chinese / leftover English

- ko-KR/getting-started/overview.md:30 — `웹 검색과 Thinking mode를 모두 끄고` — untranslated English `mode`; the same feature is rendered `Thinking 모드` at line 27. Fix: `Thinking 모드를`. (See also Category 2.)
- ko-KR/agent/use-skills-in-agent-en.md:30 — `src="./images/skills/加号-en.png"` — Chinese characters `加号` in the image filename (asset path, not visible text). [source] — only a defect if the asset must be renamed; cosmetic, leave unless assets are localized.
- ko-KR/kimi-webbridge/kimi-webbridge.md:23 — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — Chinese `用户教程` in the video filename (asset path). [source] — cosmetic, same note as above.

Note: the flagged `截图30` leftover in `kimi-claw/concepts.md:11` SeoMeta is NOT present here — it was correctly translated to `이미지: 스크린샷 30`. No action.

## 2. Untranslated words mid-sentence

- ko-KR/getting-started/overview.md:30 — `Thinking mode를 모두 끄고` — `mode` left in English; should be `모드` for consistency with the `채팅 모드` / `Thinking 모드` usage elsewhere in the file. Fix: `Thinking 모드를`.

## 3. Punctuation (fullwidth)

- ko-KR/deep-research/use-cases.md:63 — `[결과 보기]（https://www.kimi.com/...）` — fullwidth parens `（ ）` wrap the link URL, breaking the Markdown link (renders as literal text). [source] (en-US/deep-research/use-cases.md:63 has the same `（ ）`). Fix: ASCII `(` and `)`.
- ko-KR/slides/overview.md:34 — `AI Deep Research（심층 조사） + 콘텐츠 생성` — fullwidth parens around the gloss. Translator-introduced (en-US has no parenthetical here at all — `1. AI Deep Research + Content Generation`). Fix: ASCII `(심층 조사)`, or drop the gloss to match source.
- ko-KR/getting-started/search.md:10 — `title="...Agentic Search｜Kimi 도움말 센터"` — fullwidth pipe `｜` in the SeoMeta title. [source] (en-US/getting-started/search.md:10 uses `｜` too). Low priority; replace with ASCII `|` if house style requires.
- ko-KR/kimi-claw/tailscale-issue.md:18 and :28 — `## 해결 방법은？` / `## 예방 방법은？` — fullwidth question mark `？` in headings. [source] (en-US headings are `## How to fix？` / `## How to prevent？`). Fix: ASCII `?` (and ideally Korean style `## 해결 방법은?`).

## 4. Broken anchor links

- ko-KR/kimi-code/cli-ides.md:102 — `[사전 준비 사항](#prerequisites)` — anchor `#prerequisites` does not match any heading; the target heading was translated to `## 사전 준비 사항` (line 21), whose generated anchor is `#사전-준비-사항`. The link will not jump. Fix: change the anchor to match the translated heading (or add an explicit `{#prerequisites}` id to the heading). Inherited pattern across locales, but broken in ko-KR.
- ko-KR/slides/stuck.md:51 — `[버그 피드백 가이드라인](#bug-feedback-guidelines)` — anchor `#bug-feedback-guidelines` has no matching heading; the target is `## 버그 피드백 가이드라인` (line 81), anchor `#버그-피드백-가이드라인`. Fix: update anchor to the Korean heading slug or add explicit `{#bug-feedback-guidelines}` id.

## 5. Bilingual `English (中文)` leftovers

None found.

## 6. Honorific / politeness register

No reader-facing register switches found. Reader-facing prose is consistently 합니다체; imperative `~하세요 / ~보세요` forms are standard polite instruction style, not breaks. Example prompts/quoted user input in 해요체/반말 (e.g. search.md example prompts, slides/overview.md:56-61) are correctly excluded.

- Checked & cleared (false positive): ko-KR/getting-started/agentic-chat.md:73 and ko-KR/kimi-claw/usage-tips.md:36 — `... 시작한다고/설치한다고 생각하면 됩니다.` This is grammatically correct: `~ㄴ다고` is an embedded indirect-quote clause governed by the polite `됩니다`, not a plain-style sentence ending. No register break — no action.

## 7. Reversed semantics

- ko-KR/deep-research/overview.md:28 — `... 상위 3.2%의 고품질 콘텐츠만 선별합니다` — CORRECT. `선별` = select/keep the best 3.2%. No reversal. No action.

## 8. Naturalness / awkward MT

Skimmed ~12 articles (getting-started, deep-research, agent, kimi-claw, kimi-code, membership, slides, kimi-api). Quality is good; one minor note:

- ko-KR/getting-started/agentic-chat.md:38 — `데이터베이스 목록을 조회하며 데이터를 가져오기` — slightly awkward nominalized fragment in a parallel/table-style context; more natural: `데이터베이스 목록 조회 및 데이터 가져오기`. Minor / optional.

Borderline (not flagged as errors): mixed loanword consistency — `token`/`토큰`, `credit`/`크레딧`, `quota` appear in both English and Korean forms across pricing.md and slides/overview.md. Common in KR tech docs; standardize only if house glossary requires.
