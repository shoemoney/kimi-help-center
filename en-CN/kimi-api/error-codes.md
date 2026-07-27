---
title: "API Errors (Error Code Reference)"
slug: "api-error-codes"
order: 2
extract_headings: true
preview: true
preview_content: "A quick reference to Kimi API error codes and troubleshooting tips."
---

<SeoMeta
  title="Kimi API Error Code Reference - Kimi Help Center"
  description="Find common Kimi API error codes and what they mean, including causes and fixes for 400, 401, 403, 429, 500, and other errors, so you can quickly locate and resolve issues."
/>

# API Error Codes

You may encounter the following error codes when calling the Kimi API. Use the code and description to troubleshoot the issue.

## Error Code Reference

| Error code | Meaning | What to do |
| --- | --- | --- |
| 400 | Invalid request parameters (Bad Request) | Check whether the request body is correctly formatted and whether parameter names and types meet the documentation requirements. Common causes include malformed JSON, missing required parameters, or parameter values outside the allowed range. |
| 401 | Authentication failed (Unauthorized) | Check whether your API Key is correct, expired, or disabled. Make sure the request header uses the correct format: `Authorization: Bearer <your-api-key>`. |
| 403 | Insufficient permissions/Insufficient Balance (Forbidden) | Your account balance may have been used up. Please top up in the console. Your account may also be restricted; contact support for help. |
| 404 | Resource not found (Not Found) | Check whether the requested URL path and model name are correct. Make sure the endpoint is `https://api.moonshot.cn/v1/...`. |
| 429 | Rate limit exceeded (Too Many Requests) | You have exceeded the current rate limit. Reduce your request frequency, implement exponential backoff retries, or contact support to request a higher rate limit. |
| 500 | Internal Server Error (Internal Server Error) | A temporary server-side error occurred. Please try again later. If the issue persists, contact  api-service@moonshot.ai and include the request_id. |

## General Troubleshooting Tips

1. **Check the full error message**: The JSON response returned by the API usually includes the `error.message` field with a more detailed error description.
2. **Check the request_id**: The `request_id` returned for each request can help support quickly locate the issue.
3. **Refer to the official documentation**: Make sure your integration matches the documentation at [platform.kimi.com](https://platform.kimi.com/docs/guide/start-using-kimi-api).
4. **Use a retry mechanism**: For 429 and 500 errors, we recommend implementing automatic retries with an exponential backoff strategy.
