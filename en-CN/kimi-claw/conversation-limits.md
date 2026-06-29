---
title: "Conversation Limits and API Rate Limits"
slug: "conversation-limits"
order: 13
extract_headings: true
preview: true
preview_content: "How to handle Kimi Claw conversation token limits and API rate limits."
---

<SeoMeta
  title="Kimi Claw Conversation Limits - Kimi Help Center"
  description="Learn about Kimi Claw's limits on conversation turns, message length, and session timeouts, so you can plan your conversations effectively and get the best experience."
/>

# Conversation Limits and API Rate Limits

## What if the token limit is exceeded?

When the conversation context becomes too long and exceeds the model's token limit, Kimi Claw may not be able to respond properly.

<Frames
  src="./images/kimi-claw/conversation-limits-01.png"
  alt="Send /new to start a new conversation"
/>

**What to do**:

- Send the `/new` command to start a new conversation and clear the current context.
- If you still see a context limit warning after using `/new`, the model may have loaded too much Skill content by mistake. You can try the following:
  - Use `/skills` to view the currently loaded skills and unload any you do not need.
  - Use `/compact` to compress the current context.
  - Use `/reset` to reset Kimi Claw.

## API rate limit reached message

This message means you have triggered an API rate limit. Please try again later.

**Check your credit and request frequency**:

1. Go to [kimi.com/code](https://kimi.com/code).
2. Open **Console**.
3. Click **View Credit and Frequency** to see your current usage and limits.

If you often encounter rate limits, we recommend spacing out your tasks appropriately or upgrading your membership plan for a higher call credit.
