---
title: "Rate Limits and Higher Limits"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: true
preview_content: "API rate limit tiering rules, how to handle 429 errors, and how to request higher limits."
---

<SeoMeta
  title="Kimi API Rate Limits - Kimi Help Center"
  description="Learn about Kimi API request rate limits (RPM/TPM), limit differences across plans, and how to handle 429 errors."
/>

# Rate Limits and Higher Limits

Kimi API applies rate limits to request frequency and concurrency to keep the platform stable and ensure fair use. Your rate limit tier is tied to your account’s cumulative top-up amount.

## Rate Limit Tiers

API rate limits are tiered based on your account’s **cumulative top-up amount**. The higher your cumulative top-up amount, the higher the available rate limits. For the specific tiering criteria and the corresponding RPM (requests per minute) and TPM (token per minute) limits, see the instructions in the [platform.kimi.com/](https://platform.kimi.com/) console.

## View Your Current Limits

- Log in to the API console to view the rate limit tier for your current account.
- API response headers also include rate limit information:
  - `X-RateLimit-Limit`: current rate limit ceiling
  - `X-RateLimit-Remaining`: remaining available requests
  - `X-RateLimit-Reset`: when the limit resets

## What to Do If You Get a 429 Error

When your request rate exceeds the limit, the API returns the 429 status code. We recommend that you:

1. **Use exponential backoff for retries**: wait 1 second before the first retry, then double the wait time each time (2s, 4s, 8s...).
2. **Control concurrency**: use a request queue or semaphore to limit the number of requests sent at the same time.
3. **Batch requests**: combine multiple small requests into fewer larger requests.

## Request Higher Rate Limits

If your business needs exceed the current rate limits:

- **Top up to raise limits**: increase your cumulative top-up amount, and the system will automatically raise your rate limit tier.
- **Contact support**: for special requirements, contact platform support or the sales team via [platform.kimi.com/](https://platform.kimi.com/) to request a customized rate quota.
