---
title: "Member Credit Updates and Usage Rules"
slug: "membership-update-rules"
order: 3
extract_headings: true
preview: true
preview_content: "Learn about membership credit refresh cycles, usage priority, and how the shared credit pool works."
---

<SeoMeta
  title="Kimi Membership Benefit Update Rules - Kimi Help Center"
  description="Learn how Kimi membership benefits are updated, including credit refresh cycles and historical changes, so you can stay up to date with the latest membership policy."
/>

# Member Credit Updates and Usage Rules

The Agent series, Deep Research, PPT, Docs, Sheets, Kimi Claw, and more share a single credit pool, with credits deducted based on actual token consumption; Kimi Code has its own separate credit pool.

## How does the shared credit pool work?

Kimi membership features share a single credit pool and draw from the same pool by token consumption. You can allocate it flexibly across features:

- **Agent series**: website generation, document processing, PPT creation, spreadsheet processing, Deep Research, and more
- **Kimi Claw**: a dedicated assistant that can be deployed with one click
- **Other membership benefits**: image generation and more

**Kimi Code** has its own separate credit pool, not shared with the Kimi credits above.

> **K2.6**: chatting with the K2.6 model does not consume credits

## How are credits calculated?

Credit consumption mainly depends on the amount of token used to process a task. Tasks with longer input or output content will consume credits based on token usage.

<Callout type="info">
Using a free user as an example:
- Generating a simple PPT may consume 1-2% of credits
- Running one Deep Research task may consume 5-10% of credits
- Writing a piece of code may consume 0.5-2% of credits
</Callout>

## Credit refresh rules

- Credits for both monthly and annual memberships **refresh monthly**
- Unused credits in the current period are automatically cleared after expiry; they do not roll over and cannot be redeemed for cash
- A single conversation or task may be subject to concurrency limits over 5-hour and 7-day windows. Please refer to the in-page prompts for the specific rules

## What happens when credits run out

<Callout type="warning">
- Tasks that are already in progress can be completed as usual
- New tasks will show an insufficient credit prompt. You can:
  - Wait for credits to refresh automatically each month
  - Upgrade to a higher-tier membership
</Callout>

### How are membership credits updated?

1. **Refresh schedule**: membership credits refresh monthly according to the “subscription cycle”, not the calendar month
2. **No accumulation**: unused credits in the current period are cleared at the end of the cycle, and the full credit amount is issued again
3. **Example**: if Xiaoming subscribes to Andante (¥49/month) at 15:00 on December 1, the credits will refresh at that time every month
