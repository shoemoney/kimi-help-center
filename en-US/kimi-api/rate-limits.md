---
title: "Rate limits"
slug: "api-rate-limits"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Rate limits - Kimi Help Center"
  description="Kimi API rate limit dimensions, calculation logic, 429 handling, and how to request higher limits."
/>

# Rate limits

Kimi API enforces rate limits on request frequency and concurrency to ensure platform stability and fair usage. Rate limit tiers are based on your account's cumulative top-up amount.

## Rate limit dimensions

Rate limits are enforced across four dimensions:

- **Concurrency**: Number of requests processed at the same time.
- **RPM** (Requests Per Minute): Number of requests per minute.
- **TPM** (Tokens Per Minute): Number of tokens per minute.
- **TPD** (Tokens Per Day): Number of tokens per day.

A request may hit any of these limits depending on which threshold is reached first. For example, if you send 20 requests each containing only 100 tokens, you could reach the RPM limit (if RPM is 20) even though you have not consumed 200k tokens (if TPM is 200k).

## How rate limits are calculated

For gateway convenience, we calculate rate limits based on the `max_completion_tokens` parameter in the request:

- If your request includes `max_completion_tokens`, we use that value for rate-limit calculation.
- If your request does not include `max_completion_tokens`, we use the default value for calculation.

After you send a request, we determine whether you have hit a rate limit based on the request token count plus the `max_completion_tokens` value, regardless of the actual number of tokens generated.

For billing, charges are based on the request token count plus the actual number of tokens generated.

<Callout type="info">
- Rate limits are enforced at the user level, not the API key level.
- Rate limits are currently shared across all models.
</Callout>

## Rate limit tiers

API rate limits are tiered based on your account's **cumulative top-up amount** — the more you've topped up, the higher your available rate limits. For specific tier thresholds and corresponding RPM, TPM, and TPD limits, refer to the [platform.kimi.ai](https://platform.kimi.ai) console.

## How to check current limits?

- Log in to the API console to view your current rate limit tier.
- API response headers also include rate limit information:
  - `X-RateLimit-Limit`: Current rate limit cap
  - `X-RateLimit-Remaining`: Remaining available requests
  - `X-RateLimit-Reset`: Time when the limit resets

## Handle 429 errors

When your request frequency exceeds the limit, the API returns a 429 status code. Recommended actions:

1. **Implement exponential backoff**: Wait 1 second initially, then double the wait time with each retry (2s, 4s, 8s…).
2. **Control concurrency**: Use request queues or semaphores to limit the number of simultaneous requests.
3. **Batch requests**: Combine multiple small requests into fewer, larger ones.

For more details on 429 troubleshooting, see [API Troubleshooting](https://platform.kimi.ai/docs/troubleshooting/api-troubleshooting).

## Request higher rate limits

If your business needs exceed the current rate limits:

- **Top up to upgrade**: Increase your cumulative top-up amount and the system will automatically upgrade your rate limit tier.
- **Contact sales**: For special requirements, reach out to the platform sales team via [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) to request a custom rate quota.
