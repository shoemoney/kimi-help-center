---
title: "API Call Errors (Error Code Reference)"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: true
preview_content: "A quick reference to Kimi API error codes and troubleshooting tips."
---

<SeoMeta
  title="Kimi API Error Codes Reference - Kimi Help Center"
  description="Look up common Kimi API error codes and what they mean, including causes and fixes for 400, 401, 403, 429, 500, and more, so you can quickly locate and resolve issues."
/>

# API Error Codes

When calling the Kimi API, you may encounter the following error codes. Use the code and description to troubleshoot the issue.

## Error Code Reference

| Error code | Meaning | How to handle it |
| --- | --- | --- |
| 400 | Invalid request parameters (Bad Request) | Check whether the request body is correctly formatted and whether parameter names and types meet the documentation requirements. Common causes include malformed JSON, missing required parameters, and parameter values outside the allowed range. |
| 401 | Authentication failed (Unauthorized) | Check whether the API Key is correct, expired, or disabled. Make sure the request header uses the correct format: `Authorization: Bearer <your-api-key>`. |
| 403 | Insufficient Permissions / Insufficient Balance (Forbidden) | Your account balance may have been used up. Please top up your account in the console. The account may also be restricted; if so, contact customer support. |
| 404 | Resource not found (Not Found) | Check whether the requested URL path and model name are correct. Make sure the endpoint is `https://api.moonshot.cn/v1/...`. |
| 429 | Rate limit exceeded (Too Many Requests) | You have exceeded the current rate limit. Reduce the request frequency, implement an exponential backoff retry strategy, or contact customer support to request a higher rate limit. |
| 500 | Internal Server Error | A temporary server-side exception occurred. Please try again later. If the issue persists, contact api-service@moonshot.ai and include the request_id. |

## General Troubleshooting Tips

1. **Check the full error message**: The JSON response returned by the API usually includes an `error.message` field with a more detailed error description.
2. **Check request_id**: The `request_id` returned for each request can help customer support quickly locate the issue.
3. **Refer to the official documentation**: Make sure your implementation matches the documentation at [platform.kimi.com](https://platform.kimi.com/docs/overview).
4. **Use a retry mechanism**: For 429 and 500 errors, we recommend implementing automatic retries with an exponential backoff strategy.
