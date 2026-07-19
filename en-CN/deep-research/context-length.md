---
title: "What is the context length of Deep Research?"
slug: "deep-research-context-length"
order: 5
extract_headings: true
preview: true
preview_content: "Context length details for Deep Research and suggestions for handling over-limit inputs."
---

<SeoMeta
  title="Kimi Deep Research context length explained - Kimi Help Center"
  description="Learn the supported context length range and limits for Kimi Deep Research, and how to optimize your input to get more complete, higher-quality research reports."
/>
# Context Length Guide

## Overview

Kimi-Researcher has a context length of **128K tokens** (about 60,000–100,000 Chinese characters). This is the maximum number of tokens the model can process in a single run, including both input and output.

This means Kimi-Researcher can **refer to** a large amount of text in a single research task, enough to support complex and in-depth research analysis. However, please note: **the maximum length of generated content is usually much smaller than the context window**.

<Callout type="tip">
If your research question is too broad, we recommend breaking it into several sub-questions and researching them separately instead of submitting everything at once. This usually improves both depth and accuracy.
</Callout>

## Key Concepts

| Concept | Meaning | Notes |
|------|------|------|
| **Context window** | The maximum token limit supported by the model | 128K tokens, including input and output |
| **Input limit** | The length of reference materials + instructions that can be sent in one request | Recommended to keep within 100K tokens |
| **Output limit** | The maximum length the model can generate in one response | Usually about 8K–16K tokens, much smaller than the context window |

<Callout type="info">
**Common misconception**: A 128K context does not mean the model can output 128K tokens at once. Output length is usually around 1/8 to 1/16 of the context window.
</Callout>

## Output Truncation

### Why does the output sometimes stop before completion?

When a research report is too long, the model may:

1. **Stop proactively** — stop generating after reaching the single-response output limit
2. **Suggest continuation** — ask whether you want it to continue generating the remaining sections
3. **Output in sections** — split a long report into multiple chapters and present them one by one

**This is not a malfunction. It is normal behavior caused by output limits.**

### What can you do?

- If the report is incomplete, reply directly with “Continue” or “Please finish the remaining sections”
- For complex research, proactively ask for chapter-by-chapter generation, for example: “Write Part 1 first: background analysis”

## Best Practices

### Optimize information placement

When working with long documents, place key information at the **beginning and end** of the prompt rather than in the middle. The model may extract information from the middle of a long context less accurately (the "Lost in the Middle" effect).

### Input strategy for long documents

- Summarize very long reference materials first instead of pasting the full text
- Mark key passages in multiple documents to reduce irrelevant noise
- Use segmented processing or retrieval-augmented strategies instead of filling the context all at once

### Conversation management

- In multi-turn conversations, watch the accumulated history and start a new conversation or summarize the current one when needed
- After switching topics, start a new conversation to avoid context confusion
- Regularly summarize confirmed conclusions so that later outputs are based on accurate background information

### Model selection

Choose a suitable model for your scenario and balance context length with response efficiency. A longer context is not always better—overly long context increases processing latency and computing cost.

## Notes

- Context length determines how much information the model can “see”; it does not determine how much content it can “say”
- Prioritize effective delivery of key information and plan the content structure carefully
- For very long research tasks, proactively split them into sections instead of relying on a single generation
