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

> Kimi Code shares the same credits as your Kimi membership plan — requests from the CLI, VS Code, and third-party tools all count toward them. If your Kimi membership's monthly total is reached, Kimi Code credits are frozen until the monthly credits reset or you upgrade; monthly usage can be viewed on the [Subscription](https://www.kimi.com/membership/subscription) page.

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

## Extra Usage

When your subscription credits run out, you can keep making requests using your **Extra Usage** balance without waiting for a refresh. Only subscribed members can enable it, and **Kimi on the web and Kimi Code share the same Extra Usage balance** (top up once, use it in both). See the full terms in the [Extra Usage Agreement](https://www.kimi.com/user/agreement/extra-usage-rules-cn).

### Top-up entry points

- **From the main site**: go to the Kimi [Subscription page](https://www.kimi.com/membership/subscription?tab=quota), scroll to the "Extra Usage" module at the bottom, choose an amount, and complete payment.
- **From the Kimi Code Console**: once your weekly or 5-hour usage exceeds **80%**, the progress card shows a **Buy Extra Usage** button that takes you to the subscription page to purchase.

### Enabling and managing

Turn on the "Extra Usage" toggle, and when your subscription credits run out, the system automatically deducts from your Extra Usage balance. Click **Settings** in the module to enable a **monthly spending cap** and set the maximum you can spend this month; the progress bar shows this month's Extra Usage consumption in real time.

### Billing and rules

- **Billing**: charged by actual usage — the more content read and generated, and the more complex the task, the higher the cost. The balance is shown in RMB, with rates as displayed on the platform. Extra Usage pricing is close to the official API pricing of the [Kimi Open Platform](https://platform.kimi.com); for heavy usage, upgrading your subscription is usually more cost-effective.
- **Deduction priority**: time-limited credits such as your subscription are deducted first; **Extra Usage is deducted last** as a fallback. Once enabled, even if your subscription credits are maxed out, Extra Usage is consumed seamlessly and tasks don't stop or error out.
- **Spending cap**: enable a "monthly spending cap" in settings to limit how much Extra Usage can be spent this month; without it, there is no cap.
- **Validity and stacking**: the balance does not expire and stacks across top-ups; it remains usable after your subscription lapses, but you can't top up during the lapse — re-subscribe first to top up again.
- **Refunds**: generally non-refundable, non-transferable, and non-redeemable.

<Callout type="info">
Billing example (for a rough sense of scale; actual rates per the platform): a simple request (e.g. "recommend a rock song") costs about **¥0.03**; a complex multi-step task (e.g. "plan a week-long road trip from Chengdu to western Sichuan") costs about **¥1.6**. Top-up limits: minimum ¥25 per top-up, up to 10 times and ¥3,000 per day, with a balance cap of ¥10,000.
</Callout>

### Checking your usage

- **Kimi web / app**: Settings → Subscription & Invoices → [My Quota](https://www.kimi.com/membership/subscription?tab=quota).
- **Kimi Code Console**: once Extra Usage is enabled, log in to the [Console](https://www.kimi.com/code/console) to view your balance and usage.
- **Kimi Code CLI**: type `/usage` on the command line to check directly.

### Extra Usage FAQ

- **Do Kimi on the web and Kimi Code use the same Extra Usage wallet?** Yes — the balance is shared between both; top up once and use it in either.
- **Which is deducted first, Extra Usage or subscription credits?** Time-limited credits such as your subscription are deducted first; Extra Usage is only used as a fallback once all time-limited credits are exhausted.
- **When I hit a limit or get rate-limited, can I keep going?** Yes. Once Extra Usage is enabled you're not affected by subscription limits — it seamlessly switches to the Extra Usage balance, so tasks don't stop, and only Extra Usage is deducted without affecting your membership credit refresh.
- **Can unused balance roll over and stack?** Yes — it doesn't expire and stacks; it stays usable after the subscription lapses, but you can't top up during the lapse.
- **Is Extra Usage available for Enterprise?** Not yet supported.
- **After I close my account, is the balance refunded?** Please email [membership@moonshot.cn](mailto:membership@moonshot.cn) to request a refund.
