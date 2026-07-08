# zh-SG Naturalness / MT-Trace Review

**Locale:** zh-SG (overseas Simplified Chinese), machine-translated from `en-US/`
**Scope:** NATURALNESS / machine-translation traces only. Terminology (额度), punctuation, links, and the Agent Mode→Agent 模式 fix are OUT of scope and not re-reported here.

## Overall fluency verdict: 4.5 / 5

The zh-SG corpus reads like competently written native Simplified Chinese, not raw MT output. Sentence structure is reorganized into idiomatic Chinese order (not English word-order calques), collocations are natural (自主规划、逐步迭代、开箱即用、耐心等待), em-dashes and 破折号 are used well, and product/marketing prose (overviews, FAQs) is genuinely fluent. There is **no untranslated English prose** — the `agent/*-en.md` files, despite their filenames, are fully translated to Chinese. The residual issues are minor and mostly inherited from odd English source text rather than introduced by translation.

### Counts by severity
- **High (meaning-changing mistranslation):** 0
- **Medium (clear MT trace / unnatural enough to notice):** 2
- **Low (mild stylistic / source-inherited oddity):** 5
- **Total findings:** 7

The biggest recurring pattern is a **light over-retention of the English possessive "your" as 你的** (≈165 occurrences tree-wide), where natural Chinese would often drop it. It is a tendency, not an error — the vast majority of instances are idiomatic — so it is logged once as a systemic Low note rather than per-line.

---

## Findings

### Medium

1. **kimi-claw/kimi-claw-android-guide.md:419** — 「以下内容供 Kimi Claw Android 参考。」
   - Why unnatural: Nonsensical in context — this Callout precedes the user-facing FAQ, so the content is *for the user*, not "a reference to Kimi Claw Android." It faithfully renders an already-broken English source ("The following is a reference to Kimi Claw Android." at en-US:419), producing a meaning-empty sentence.
   - Natural rewrite: 「以下是 Kimi Claw Android 的常见问题解答，供你参考。」 (or simply delete the callout).

2. **getting-started/search.md:11 & SeoMeta title** — 「指南与答案的 Agentic Search」(SeoMeta title) and mixed use of untranslated **Agentic Search / Explorer Search / Kimi Search** as headings/body terms.
   - Why unnatural: The SeoMeta title「指南与答案的 Agentic Search」is a literal calque of an English "... for guides and answers" pattern and reads awkwardly/ungrammatically in Chinese. Feature names left in English mid-sentence (Agentic Search, Kimi Search) add to the machine-y feel where a gloss would read better.
   - Natural rewrite (title): 「Agentic Search 智能搜索：获取答案与指引」or 「Kimi 智能搜索（Agentic Search）」; on first mention give a Chinese gloss, e.g. 「Agentic Search（智能体搜索）」.

### Low

3. **getting-started/search.md:102** — 「找到真正的 McDonald's」
   - Why unnatural: Literal rendering of the source example "Find the real McDonald's"; out of context (an image-search meme reference) it reads oddly to a zh reader. Source-inherited.
   - Natural rewrite: keep only if the source keeps the joke; otherwise 「找出图中真正的麦当劳」or replace with a clearer image-search example.

4. **kimi-webbridge/kimi-webbridge.md:108** — 「支持 Claude Code、Codex、Cursor、Kimi Code、Hermers Claw 等。」
   - Why unnatural/wrong: "Hermers Claw" is a garbled name (likely "Kimi Claw" / a typo in source). Not a naturalness issue per se but reads as an MT/source artifact.
   - Natural rewrite: verify against en-US and correct the product name.

5. **agent/features-and-limits.md:419-style Callout usage & getting-started/agentic-chat.md:36** — retention of English UI/tool labels inline (Web Search, IPython) alongside Chinese ones (抓取工具、图片搜索).
   - Why mildly unnatural: inconsistent — some tools glossed to Chinese, others left English within the same table, giving an uneven MT feel.
   - Natural rewrite: gloss consistently, e.g. 「网页搜索（Web Search）」.

6. **Systemic — 你的 over-retention (English "your")** — ≈165 occurrences tree-wide (e.g. cli-getting-started.md:71「放到你的 PATH 中」, :220「在你的项目目录中」).
   - Why mildly unnatural: Chinese frequently drops the possessive; "放到 PATH 中" / "在项目目录中" read more natively. Most instances are acceptable; only a fraction are worth trimming.
   - Natural rewrite: drop 你的 where the referent is obvious from context.

7. **Systemic — 「当…时，」 when-clause openings** — ≈21 occurrences.
   - Why mildly unnatural: occasionally mirrors English "When X, Y" order; Chinese often prefers 「X 后，Y」or 「一旦 X」. Usage here is mostly fine, flagged only as a light tendency.
   - Natural rewrite: e.g. 「当你通过聊天渠道向 Claw 发送任务指令时」→「你通过聊天渠道向 Claw 发送指令后」.

---

## Articles read (18, across all 13 categories)
- getting-started/overview.md
- getting-started/agentic-chat.md
- getting-started/prompt basics.md
- getting-started/search.md
- agent/overview.md
- agent/features-and-limits.md
- agent/swarm.md
- agent/FAQ-en.md
- agent/what-are-skills-en.md
- kimi-code/faq.md
- kimi-code/cli-getting-started.md
- deep-research/overview.md
- websites/overview.md
- kimi-webbridge/kimi-webbridge.md
- slides/stuck.md
- kimi-api/overview.md
- kimi-api/api-troubleshooting.md
- kimi-business/kimi-business.md
- docs-and-sheets/overview.md
- others/chat-issues.md
- kimi-claw/kimi-claw-android-guide.md

Plus tree-wide pattern scans for a/an calques (是一款/是一种), when-clause calques (当…时), possessive over-retention (你的), stacked passives (被…被), and leftover English prose lines.
