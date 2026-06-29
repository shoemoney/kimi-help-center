---
title: "Kimi Chat FAQ"
slug: "chat-issues"
order: 4
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

The single-turn context limit is about 128K token (roughly 50,000–60,000 Chinese characters). Once the limit is reached, the model can no longer read in new content. We recommend:

1. **Start a new chat**: Copy the key conclusions or outline from the original chat into a new chat to continue.
2. **Generate a handoff document**: Ask Kimi to “summarize and generate a handoff document,” then paste it into a new chat as the initial context. This reduces the word count while preserving the key information.

<Callout type="info">
**Tip**:
- Deleting earlier messages in the same chat will not free up the context window. Please start a new chat instead.
- Because Thinking models use more token for reasoning, their context limit is smaller. When working with long documents, choose K2 instead of K2-Thinking.
</Callout>

## Seeing the “Let’s switch topics” prompt?

This prompt means the current content has triggered the safety policy, so the current topic cannot continue. Simply enter a new topic to restart the conversation; no waiting is needed. If you believe the content does not violate any rules, click “👎” to send feedback and help us improve the safety policy.

## Getting the reply “Kimi is a little tired”?

Too many users are online at the moment, and computing resources are under pressure. This is peak-hour rate limiting. Please wait 1–2 minutes and try again. To reduce waiting, you may consider subscribing to a membership plan, which provides priority access to a dedicated computing channel.

## Why can’t I download PPT/Word/Excel files from a chat?

The Kimi chat window itself does not generate downloadable Office files:

- To generate a PPT, go to [PPT Assistant](https://www.kimi.com/slides), where online generation and download are supported.
- To generate Word or Excel files, please use **Agent**.
