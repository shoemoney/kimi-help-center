---
title: "Balance and Usage Lookup"
slug: "api-balance-and-usage"
order: 4
extract_headings: true
preview: true
preview_content: "How to check your API account balance, usage details, and usage estimates."
---

<SeoMeta
  title="How do I view my Kimi API balance and usage? - Kimi Help Center"
  description="Learn how to view your API account balance, historical usage, and billing details in Kimi Open Platform, keep track of your credit usage, and top up in time to avoid service interruptions."
/>

# Balance and Usage Lookup

Kimi API provides multiple ways to view your account balance and usage details, helping you stay on top of usage and costs.

## View in the console

Log in to [platform.kimi.com/](https://platform.kimi.com/). On the **fee-detail** (billing details) page in the console, you can view:

- Current account balance
- Daily usage details
- Usage and fees by model
- Historical spending trends

<Callout type="info">
**Note**: Bills for the current day are updated at **7:00 the next day**. Real-time usage data may have some delay.
</Callout>

## Token Estimation API

Before sending a request, you can use the Token Estimation API to estimate how many tokens the call will consume, making it easier to control costs.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "POST https://api.moonshot.cn/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Pass messages in the request body in the same format as Chat Completion. The API returns the estimated token count.

## Balance query API

Query the current account balance directly through the API:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "GET https://api.moonshot.cn/v1/users/me/balance",
    },
  ]}
/>

Include your API Key in the request header to get the currently available balance information.

## Usage monitoring recommendations

- Check the fee-detail page regularly to monitor usage trends.
- Integrate the balance query API into your code and set a low-balance alert threshold.
- Use the Token Estimation API to estimate costs before key calls.
