---
title: "API Usage FAQ"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: true
preview_content: "API call FAQs: 429 rate limits, 401 authentication failures, truncated output, and more."
---

<SeoMeta
  title="Kimi API FAQ and Troubleshooting - Kimi Help Center"
  description="Having issues with Kimi API calls? This article summarizes troubleshooting steps for common scenarios such as authentication failures, timeouts, and abnormal responses, helping you resolve problems quickly."
/>
# API Usage FAQ

Here are the issues developers most often encounter when using Kimi API, along with recommended solutions.

## What should I do if I receive a 429 rate limit error?

A 429 error means your request frequency has exceeded the current account’s rate limit. To resolve it:

- Implement an exponential backoff retry strategy (wait 1s, 2s, 4s, and so on before retrying).
- Limit the number of concurrent requests and use a queue mechanism.
- Increase your cumulative top-up amount to raise your rate limit tier.
- If you need a higher quota, contact the sales team.

## What should I do if I receive a 401 authentication failure error?

A 401 error means API Key authentication failed. Please check:

- Whether the API Key was copied correctly (watch for leading or trailing spaces).
- Whether the request header format is `Authorization: Bearer <your-api-key>`.
- Whether the API Key has been deleted or disabled. You can confirm this in the console.
- Whether you are using a Key from another platform (Kimi API Key starts with `sk-`).

## Is file upload billed?

File upload itself does not incur any fees. However, when you reference an uploaded file in a conversation, the file content is parsed into token and counted as input token for billing. The larger the file, the more token are generated during parsing.

## What should I do if I receive a 403 Insufficient Balance error?

A 403 error usually means the account balance is insufficient. Please top up in the console. You can continue using the service immediately after the top-up is completed. You can also confirm your current balance through the balance query API.

## What should I do if the returned content is truncated?

If the content returned by the API is incomplete or truncated:

- Check whether the `max_tokens` parameter is set too low, and increase it as appropriate.
- Check the `finish_reason` field in the response: `length` means the output was truncated due to a token limit, while `stop` means it ended normally.
- For long-form generation, consider splitting the task into multiple requests.

## Can I upload images through the file API?

Yes. The file upload API supports uploading image files, which can then be referenced in conversations. If you use a Vision model, you can also pass images directly in messages via URL or Base64.

## What are the sources for online search?

Kimi API’s online search feature retrieves publicly available information from the internet in real time. Search results come from web content indexed by mainstream search engines. Each online search costs an additional ¥0.03.

## Is Allegretto membership related to API concurrency?

Kimi membership plans (such as Allegretto) and API use separate billing systems. The Agent parallel capability included in membership plans applies only to Kimi products and is unrelated to API rate limits. API concurrency limits depend on the account’s cumulative top-up amount tier.

## What is the difference between the API and the web version of Kimi?

- **Web version of Kimi**: A conversation product for general users, available directly in the browser.
- **Kimi API**: An API service for developers to integrate AI capabilities into their own products.
- They use separate billing systems. The same account can be used, but credits are not shared.

## Is there an API for PPT generation and Deep Research?

Currently, PPT generation and Deep Research are **not yet available via API**. These features are only available in Kimi products. Please follow platform announcements for the latest updates.

## Is localized deployment supported?

Kimi API currently provides cloud API services only and **does not support localized private deployment at this time**. If you need private deployment, please contact the sales team through [platform.kimi.com/contact-sales](https://platform.kimi.com/contact-sales) for consultation.

## Can Kimi API be called from outside China?

Kimi API is primarily provided for users in mainland China. Access from overseas regions may be affected by the network environment, and stability cannot be fully guaranteed. If you need to use it overseas, we recommend contacting the sales team to discuss feasible options.
