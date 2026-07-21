---
title: "Kimi chat common issues"
slug: "chat-issues"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi chat common issues - Kimi Help Center"
  description="Having trouble with Kimi chats? This article summarizes troubleshooting steps for common chat issues, including interrupted replies, abnormal content, and loading failures, to help you resolve them quickly."
/>

# Kimi chat common issues

## Can't send messages / red circle appears?

This may be caused by:

- **Rate limit triggered**: Kimi has a conversation cap within certain time windows. Sending messages too frequently may prevent further interaction. Wait 2–3 hours before trying again, and manage your conversation frequency.
- **Poor network conditions**: Weak signal or an unstable connection may prevent messages from being sent. Switch to a different network and retry.

## Conversation exceeds 200,000 words?

K2.6's single-conversation context is approximately 128K tokens (~200,000 words). Once this limit is reached, the model can no longer read in new content. What to do depends on why you hit the limit:

- **A single file you sent is too large and hits the limit on the first turn**: split the file into smaller parts and send them in batches.
- **A multi-turn conversation gradually builds up to the limit**: first summarize the key conclusions so far (you can also ask Kimi to "summarize and generate a handoff document"), then paste that into a new conversation as the initial context to continue.

<Callout type="info">
**Tips**:
- More fundamentally, using [Memory](/features/memory-space) and [Projects](/features/project) helps you avoid hitting the limit — Memory automatically retains key information, and a Project keeps your reference files, instructions, and memory together so every new conversation carries the context.
- Deleting earlier messages in the same conversation does not free up the context window — just start a new conversation instead.
- Thinking consumes tokens; to save credits, set **Thinking strength** to **Standard**.
- For very long documents, K3 offers a 1M-token context (available with the top-tier membership); when composing, select **Conversation length: Extra long**.
</Callout>

## Seeing "let's talk about something else" ?

This prompt indicates that the current content has triggered a safety policy and the topic cannot continue. Simply type a new topic to resume the conversation — no waiting required.

<Callout type="info">
If you believe the content was not in violation, click "👎" to submit feedback and help us improve our safety policies.
</Callout>

## Seeing "Kimi is a bit tired"?

This means too many users are online and compute resources are under heavy load — a peak-hour rate limit. Wait 1–2 minutes and try again.

<Callout type="tip">
To reduce wait times, consider subscribing to a membership plan for priority access to dedicated compute resources.
</Callout>

## Can't download PPT/Word/Excel?

The Kimi chat window itself does not generate downloadable Office files:

| File Type | Where to Generate |
|-----------|-------------------|
| **Slides** | Go to [Kimi Slides](https://www.kimi.com/slides) — supports online generation and download |
| **Word/Excel** | Use **Agent** mode |
