---
title: "API Billing Guide"
slug: "api-pricing"
order: 3
extract_headings: false
preview: true
preview_content: "Kimi API billing logic, token pricing, and cost optimization tips."
---

<SeoMeta
  title="Kimi API Pricing and Billing Guide - Kimi Help Center"
  description="View call prices, token billing rules, and billing details for each Kimi API model. Learn input/output token pricing and estimate API usage costs more accurately."
/>
# API Billing Guide

Kimi API is billed by token usage. Prices vary by model and feature.

## Billing Basics

- **Billed by token**: Each API call is billed separately for input token and output token usage.
- **token unit**: 1M = 1,000,000 tokens.
- **Prices vary by model**: More capable models have higher unit prices. Choose the right model based on your business needs.

## Add-on Feature Billing

- **Online search**: Each call to the online search feature incurs an additional **¥0.03** charge, independent of token usage.

## Context Caching

Context Caching lets you cache frequently used context, such as system prompts and reference documents. token usage for cache hits is billed at a discounted rate, helping reduce the cost of repeated context.

For detailed Context Caching pricing, please refer to the official documentation.

## Billing Details

For the complete model price list and billing rules, visit:

[https://platform.kimi.com/docs/pricing/chat](https://platform.kimi.com/docs/pricing/chat)

## Cost Optimization Tips

- Set the `max_tokens` parameter appropriately to avoid generating long, unnecessary content.
- Use Context Caching to cache repeated system prompts and context.
- Choose a model based on task complexity. Lightweight models are enough for simple tasks.
- Keep prompt design concise to reduce unnecessary input token usage.
