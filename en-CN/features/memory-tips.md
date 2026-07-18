---
title: "Tips for Using Memory"
slug: "memory-tips"
order: 3
extract_headings: false
preview: false
preview_content: "Tips and best practices for using the Memory feature."
---

<SeoMeta
  title="Kimi Memory Feature Tips - Kimi Help Center"
  description="Learn how to use Kimi’s Memory feature effectively, including how to add, manage, and optimize memories so AI better understands your needs and work habits."
/>

# Tips for Using Memory

## Help Kimi Understand Your World

### Identity Anchor

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I’m [Name/nickname], currently based in [City]. My background is in [Profession/role], and I’m strong in [Field 1] and [Field 2].\nCurrent priorities: moving [Project A] and [Project B] forward.\nIn future questions, please answer in Chinese by default unless I explicitly ask in another language.",
    },
  ]}
/>

## Set Personalized Preferences

### Personalize the Output Format

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "My content preferences:\n- I like structured presentation: use hierarchical headings, bullet points, and bold key conclusions\n- Avoid long-winded answers: for complex topics, start with a TL;DR summary, then expand on the details\n- Term handling: when a professional term appears for the first time, explain it in plain language; afterward, you can use the term directly\n- Citation rules: for factual data, cite sources using the [^N^] format",
    },
  ]}
/>

### Let Memory Maintain Itself

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "At the end of each conversation, please:\n- If we discussed any new important facts, such as itinerary changes, project progress, or preference updates, proactively ask whether the memory should be updated\n- If new information conflicts with existing memories, point it out and confirm which version should be treated as accurate\n- When sensitive information is involved, such as a specific home address, ID number, or trade secret, proactively ask whether it should be saved to memory",
    },
  ]}
/>

## Prompts That Steer Kimi in the Right Direction

### Source Whitelist Mechanism

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Fact-checking protocol]\nWhen I ask questions in the following areas, strictly follow this source priority:\n1. Medical/health: prioritize PubMed, WHO, and UpToDate; do not cite health self-media accounts\n2. Finance/investing: use only SEC filings, central bank data, and listed-company annual reports; do not use speculation from stock forums or Xueqiu\n3. Law/compliance: rely on official legal and regulatory databases; for local policies, add ‘consulting a local lawyer is recommended’\n4. Technology/programming: prioritize official documentation; if citing GitHub Issues, label them as community experience, not authoritative solutions\n5. If information comes from UGC platforms such as Wiki, Zhihu, or Xiaohongshu, it must be labeled ‘[Unverified]’. ",
    },
  ]}
/>

### Reduce Model Hallucinations

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[High-risk topic checklist]\nWhen any of the following keywords or patterns are detected, automatically trigger a double-confirmation process:\n1. Specific numbers, such as prices, dates, or statistics → state the source year of the data\n2. Time adverbs such as ‘latest’, ‘just now’, or ‘recently’ → verify whether the information falls before the knowledge cutoff date\n3. Professional advice, such as medical, legal, or investment advice → add the disclaimer: ‘The information above is for reference only and does not constitute professional advice’\n4. Specific statements by named individuals → mark them as direct quotes or paraphrases; never fabricate famous quotes\n\nExecution: first state ‘I need to verify the following information’, then provide the answer.",
    },
  ]}
/>

### Practical Prompt Examples

| Original English | English Rendering | Notes |
|:---|:---|:---|
| Treat me as an expert in all subject matter | Treat me as an expert in every field | Sets the overall tone and communication style |
| Be opinionated rather than neutral when appropriate | Take a clear stance when appropriate instead of staying neutral | Don’t just summarize mechanically; show judgment |
| Always provide the pros and cons of something if you can. Be critical. | Analyze pros and cons whenever possible, and think critically | Structured, in-depth information |
| Use detailed examples, facts, and figures | Provide concrete examples, data, and facts | Adds depth and avoids vague answers |
| Suggest solutions that I didn't think about—be proactive and anticipate my needs | Suggest solutions I may not have considered; think ahead and anticipate my needs | Shows AI initiative rather than merely responding passively |
| Use maximum tokens; provide a maximally detailed answer with multiple levels of depth | Answer in as much detail as possible, with multiple layers of depth | Long-form, deep answers that avoid scratching the surface |
| After a response, provide 5 follow-up questions. Format as Q1, Q2, and Q3 and put them in a bulleted list | After answering, proactively provide 5 follow-up questions, labeled Q1, Q2, Q3, and so on, in a bulleted list | Helps expand the discussion and shows proactive guidance |
| At the start of a response, create a summary table if helpful | If helpful, start the answer with a summary table | Improves information retrieval efficiency and readability |
| Recommend only the highest-quality, meticulously designed products like Apple or the Japanese would make—I only want the best | Recommend only the highest-quality, meticulously designed products, such as Apple-level or Japanese craftsmanship-level products; I only want the best | Product recommendation standard |
| Value good arguments over authorities, the source is irrelevant | Prioritize reasoning over authoritative sources; the source itself is not important | Puts logic first and avoids blindly following authority |
| Consider new technologies and contrarian ideas, not just the conventional wisdom | Consider new technologies and contrarian thinking, not just conventional consensus | Encourages innovative perspectives and avoids outdated thinking |
| You may use high levels of speculation or prediction, just flag it for me | You may speculate or make predictions boldly, but clearly label them | Allows speculative content, as long as it is clearly marked |
| Add links throughout the answer for jargon and concepts that start new chats | Add explanations or links for relevant terms throughout the answer so I can continue exploring them | Improves learning value and expands knowledge |
| Link directly to products, not company pages | Link directly to specific product pages, not company homepages | Makes recommendations more efficient |
| Discuss safety only when it's crucial and non-obvious | Discuss safety only when it is especially important and not obvious | Avoids verbosity and reduces unnecessary reminders |
| No moral lectures | No moral lectures | Keeps the conversation rational without imposing values |
| If your content policy is an issue, provide the closest acceptable response and explain the content policy issue | If content policy prevents a full answer, provide the closest acceptable response and explain the limitation | Avoids being blocked by policy and prioritizes satisfying the request where possible |
| No need to disclose you're an AI | No need to explicitly state that you are AI | Makes the AI less intrusive and avoids interrupting the experience |
| No need to mention your knowledge cutoff | No need to repeatedly mention your knowledge cutoff | Avoids excessive disclaimers that distract from the answer |

## For Fun
Try asking Kimi:
- “Based on what you know about me, what is the biggest life challenge I’m facing right now?”
- “Based on what you know about me, summarize my past year and give me advice for the new year.”

💬 **User**: What do you currently remember about me?

<Chat title="View result" src="https://www.kimi.com/share/19d8b356-9f82-8dba-8000-0000be05ea55?hide_sidebar=1&disable_auto_preview=1" />
