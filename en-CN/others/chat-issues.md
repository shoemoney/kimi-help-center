---
title: "Kimi Chat FAQ"
slug: "chat-issues"
order: 5
extract_headings: true
preview: true
preview_content: "Common Kimi chat issues: sending failures, overly long context, safety prompts, and file downloads."
---

<SeoMeta
  title="Kimi Chat FAQ and Troubleshooting - Kimi Help Center"
  description="Having trouble with Kimi chats? This article summarizes troubleshooting steps for common chat issues, including interrupted replies, abnormal content, and loading failures, to help you resolve them quickly."
/>

# Chat FAQ

## Messages won’t send / a red circle appears?

This may be caused by one of the following:

- **Frequency limit triggered**: Kimi has a conversation limit within a given period. Sending messages too frequently in a short time may prevent you from continuing. We recommend trying again after 2–3 hours and keeping your message frequency under control.
- **Poor network conditions**: If your mobile signal is weak or the network is unstable, messages may fail to send. Try switching to another network and sending again.

## What if a chat exceeds 200,000 Chinese characters?

K2.6's single-turn context is about 128K tokens (roughly 50,000–60,000 Chinese characters). Once this limit is reached, the model can no longer read in new content. What to do depends on why you hit the limit:

- **A single file you sent is too large and hits the limit on the first turn**: split the file into smaller parts and send them in batches.
- **A multi-turn chat gradually builds up to the limit**: first summarize the key conclusions so far (you can also ask Kimi to "summarize and generate a handoff document"), then paste that into a new chat as the initial context to continue.

<Callout type="info">
**Tips**:
- More fundamentally, using [Memory](/features/memory-space) and [Projects](/features/project) helps you avoid hitting the limit — Memory automatically retains key information, and a Project keeps your reference files, instructions, and memory together so every new chat carries the context.
- Deleting earlier messages in the same chat does not free up the context window — just start a new chat instead.
- Thinking consumes tokens; to save credits, set **Thinking strength** to **Standard**.
- For very long documents, K3 offers a 1M-token context (available with the top-tier membership); when composing, select **Conversation length: Extra long**.
</Callout>

## Seeing the “Let’s switch topics” prompt?

This prompt means the current content has triggered the safety policy, so the current topic cannot continue. Simply enter a new topic to restart the conversation; no waiting is needed. If you believe the content does not violate any rules, click “👎” to send feedback and help us improve the safety policy.

## Getting the reply “Kimi is a little tired”?

Too many users are online at the moment, and computing resources are under pressure. This is peak-hour rate limiting. Please wait 1–2 minutes and try again. To reduce waiting, you may consider subscribing to a membership plan, which provides priority access to a dedicated computing channel.

## Why can’t I download PPT/Word/Excel files from a chat?

The Kimi chat window itself does not generate downloadable Office files:

- To generate a PPT, go to [PPT Assistant](https://www.kimi.com/slides), where online generation and download are supported.
- To generate Word or Excel files, please use **Agent**.
