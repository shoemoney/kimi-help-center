---
title: "Benefits"
slug: "benefits"
order: 3
extract_headings: false
preview: true
preview_content: "Kimi Code benefits: billing, refresh cycle, and supported tools."
---

<SeoMeta
  title="Kimi Code Benefits and Billing - Kimi Help Center"
  description="Learn how Kimi Code is billed (included in your subscription with no extra fees), how credits refresh every 7 days, and which tools are supported (Kimi Code CLI/Claude Code/Roo Code)."
/>

# Kimi Code Benefits

Kimi Code is a service included with Kimi membership. It provides programming-related support and features to help members complete coding tasks more efficiently during personal development.

Kimi Code credits are based on your subscription date and **refresh automatically every 7 days**. Unused credits do not carry over. In addition to the weekly credit limit, there is also a **5-hour rolling rate-limit window**. Even if you still have enough total credits, too many requests in a short period may trigger rate limiting; access will recover automatically once the window rolls forward.

All signed-in devices and API Key share the same quota: whether requests are made from CLI, VS Code, or a third-party tool, they all consume credits from the same account. Devices inactive for more than 30 days will be automatically unlinked; run `/login` again to restore access.

Log in to the [Kimi Code Console](https://www.kimi.com/code/console) at any time to check your remaining credits and rate-limit status, and to manage API Key and signed-in devices.

<Frames
  src="./images/benefits/benefits-01.png"
  alt="Console credits overview"
/>

> Kimi Code uses a separate credit pool and does not share credits with other Kimi membership features. If your Kimi Code credits reach the limit, you need to wait for the credits to reset or upgrade your subscription. You can view credit usage in the [Kimi Code Console](https://www.kimi.com/code/console).

<Frames
  src="./images/benefits/benefits-02.png"
  alt="Console credit details"
/>

After you sign in to the relevant device with your Kimi account, it will share the credits included in your plan. If you are inactive for more than 30 days, we will automatically sign you out.
You can log in to the [Kimi Code Console](https://www.kimi.com/code/console) at any time to view signed-in devices and usage records (only 100 detail entries are shown).


## Credit refresh

Credits refresh on a **7-day** cycle:

- Starting from the subscription date D1, credits refresh once every 7 days.
- The refresh cycles are: D1–D7, D8–D14, D15–D21, D22–D28.
- Unused credits **do not** carry over to the next cycle.

<Callout type="tip">
Plan your weekly usage reasonably to make full use of your credits.
</Callout>

## Supported tools

Kimi Code benefits apply to the following tools:

| Tool | Description |
| --- | --- |
| **Kimi Code CLI** | Kimi official CLI AI Agent |
| **Claude Code** | Anthropic's CLI coding assistant |
| **Roo Code** | AI coding plugin for VS Code |

Using the Kimi Code API Key on platforms or tools not listed above may be considered abuse and may result in restricted benefits. Please use the supported tools above for the best experience and protection.

<Callout type="info">
Please note that this benefit is for personal development only, not for enterprise development scenarios. For enterprise needs, please follow [Kimi Open Platform](https://platform.kimi.com/).
</Callout>

## Billing

- Kimi Code usage is **included in your subscription fee** with no extra payment required.
- Each call consumes Kimi Code dedicated credits, and the amount of credits included varies by plan.
- The system uses gifted credits first, then subscription credits.
