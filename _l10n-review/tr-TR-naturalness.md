# tr-TR Naturalness / MT-Trace Review

**Scope:** Naturalness and machine-translation traces only. Terminology (kredi), fullwidth punctuation, links, and register (siz) are explicitly out of scope and NOT re-reported here.

**Reviewer:** Native Turkish editor
**Locale:** `tr-TR/` (machine-translated from `en-US/`)

---

## Overall fluency verdict: 4.5 / 5

The Turkish localization is **excellent and largely indistinguishable from human-written prose**. Across a broad sample the translation reads idiomatically: correct vowel harmony throughout, correct case endings, natural SOV word order (no English SVO forced onto Turkish), fluent Callouts and tables, and well-handled long guides. Idioms are generally re-expressed rather than calqued. Findings are few, minor, and mostly cosmetic — there are **no meaning-changing mistranslations** and **no grammatical (suffix/case) errors** in the sampled prose. The score is not a perfect 5 only because of a handful of untranslated English UI strings, one slightly awkward recurring page title, and two borderline-literal idioms.

## Counts by severity

| Severity | Count |
|---|---|
| High (meaning change / grammar error) | 0 |
| Medium (untranslated term where standard TR exists; awkward but understandable) | 4 |
| Low (borderline-literal idiom; stylistic nitpick) | 4 |
| Source defect (present in en-US too; not a TR naturalness fault) | 1 |

**Biggest recurring MT pattern:** Untranslated English UI/legal labels left inline in otherwise-Turkish prose — most notably **"Privacy Policy"** (appears untranslated 3× in the Android guide + once as link text elsewhere), where standard Turkish **"Gizlilik Politikası"** exists and is expected. This is the only pattern that recurs.

---

## Findings

### Medium

1. **`kimi-claw/kimi-claw-android-guide.md:66`** — "Privacy Policy ve Kullanıcı Sözleşmesi'ni kabul etmeyi seçtikten sonra devam edin."
   *Why:* "Privacy Policy" left in English while the adjacent legal term ("Kullanıcı Sözleşmesi") is translated — inconsistent and unnatural in Turkish body text. Standard Turkish exists.
   *Rewrite:* "Gizlilik Politikası ve Kullanıcı Sözleşmesi'ni kabul ettikten sonra devam edin."

2. **`kimi-claw/kimi-claw-android-guide.md:169`** — "Privacy Policy: Privacy Policy'yi okuyun"
   *Why:* Both label and body English; reads as an untranslated string. (Also affects line 66.)
   *Rewrite:* "Gizlilik Politikası: Gizlilik Politikası'nı okuyun"

3. **`others/account-deletion.md:30`** — "[Kimi Privacy Policy](...)" as link text.
   *Why:* Same untranslated legal term; a Turkish user expects "Gizlilik Politikası." (Link/URL itself is out of scope; only the visible term is flagged.)
   *Rewrite:* "[Kimi Gizlilik Politikası](...)"

4. **`getting-started/agentic-chat.md:2,10,14`** — Title "Kimi'ye başlangıç" (= "getting started" rendered with dative -ye).
   *Why:* Slightly awkward/non-idiomatic as a page title; the dative + noun "başlangıç" collocation is not how Turkish phrases "getting started." Note the CLI guide correctly uses the idiomatic "…ile başlarken" (`cli-getting-started.md:15`), so this is also an internal inconsistency.
   *Rewrite:* "Kimi'ye giriş" or "Kimi ile başlarken".

### Low

5. **`kimi-code/faq.md:28`** & **`getting-started/agentic-chat.md:33`** & **`slides/overview.md:38`** — "kutudan çıkar çıkmaz / kutudan çıktığı gibi" (calque of English "out of the box").
   *Why:* Understandable but a borderline-literal loan idiom; more natural Turkish tech usage would drop the metaphor.
   *Rewrite:* e.g. "hiçbir kurulum gerektirmeden hemen kullanılabilir" / "ek yapılandırma olmadan doğrudan çalışır".

6. **`websites/overview.md` (throughout, e.g. lines 29, 130–135)** — "yayına alma" used repeatedly for "deploy/publish."
   *Why:* Not wrong, but "yayına alma" collocates more with broadcast/media; for web deployment "yayımlama" or "dağıtma" reads more naturally and the doc mixes all three ("yayına alma", "yayımlama", "dağıtın") inconsistently within the same tables.
   *Rewrite:* Standardize on "yayımlama" (publish) / "dağıtma" (deploy) consistently.

7. **`getting-started/prompt basics.md` (title & body) / `getting-started/search.md`** — Heavy retention of English nouns ("prompt", "few-shot", "Web search", "Agentic Search") where Turkish equivalents or at least Turkish inflection could smooth reading.
   *Why:* Acceptable as domain jargon and consistently inflected ("prompt'unuzu", "prompt'ların"), so only a Low stylistic note — the density of raw English terms is slightly higher than natural Turkish tech writing, but comprehension is fine.
   *Rewrite:* Optional; current form is defensible.

8. **`kimi-claw/kimi-claw-android-guide.md:191`** — "mevcut geçmiş ve yapılandırma anlık görüntüsünü elle kaydetmek için Yedekle'ye etkin biçimde dokunabilirsiniz."
   *Why:* "etkin biçimde dokunabilirsiniz" is a slightly stiff rendering of English "actively/proactively tap"; the adverb is redundant in Turkish.
   *Rewrite:* Drop "etkin biçimde": "…anlık görüntüsünü elle kaydetmek için Yedekle'ye dokunabilirsiniz."

### Source defect (not a tr-TR naturalness fault — noted for completeness)

- **`getting-started/memory-tips.md:11`** — SeoMeta description is a leaked placeholder template: "Ben isim/takma ad, şu anda şehir'de yaşıyorum. meslek/rol alanında bir geçmişim var…". The identical placeholder leak exists in `en-US/getting-started/memory-tips.md:11` ("I'm name/nickname, currently based in city…"), so this is an upstream content defect, not a mistranslation. The Turkish rendering of the template is itself grammatically fine.

---

## Articles read (18, across all 13 categories)

1. `getting-started/agentic-chat.md`
2. `getting-started/prompt basics.md`
3. `getting-started/search.md`
4. `getting-started/memory-tips.md` (partial)
5. `deep-research/overview.md`
6. `deep-research/use-cases.md`
7. `kimi-code/faq.md`
8. `kimi-code/cli-getting-started.md` (partial)
9. `kimi-api/api-troubleshooting.md`
10. `kimi-claw/kimi-claw-android-guide.md` (longest guide, full)
11. `kimi-claw/group-claw.md` (partial)
12. `agent/swarm.md`
13. `websites/overview.md`
14. `docs-and-sheets/overview.md`
15. `slides/stuck.md`
16. `slides/adaptive-vs-visual.md`
17. `membership/overview.md`
18. `membership/payment-issues.md`
19. `kimi-business/faq.md`
20. `kimi-webbridge/FAQ.md`
21. `others/chat-issues.md`
22. `others/account-deletion.md`
