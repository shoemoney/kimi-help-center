---
title: "API Billing Guide"
slug: "api-pricing"
order: 3
extract_headings: true
preview: true
preview_content: "Kimi API billing logic, token pricing, and cost optimization tips."
---

<SeoMeta
  title="Kimi API Pricing and Billing Guide - Kimi Help Center"
  description="View call pricing, token billing rules, and billing details for each Kimi API model. Learn input/output token pricing to estimate your API usage costs accurately."
/>

# API Billing Guide

Kimi API is billed based on token usage. Prices vary by model and feature.

## Billing Basics

- **Billed by token**: Each API call is charged separately based on input tokens and output tokens.
- **token unit**: 1M = 1,000,000 tokens.
- **Prices vary by model**: More capable models have higher unit prices. Choose the right model for your business needs.

## Add-on Feature Billing

- **Web search**: Each call that uses web search is charged an additional **¥0.03**, separate from token usage.

## Context Caching

Context Caching lets you cache frequently used context, such as system prompts and reference documents. tokens served from a cache hit are billed at a discounted rate, helping reduce the cost of repeated context.

For detailed Context Caching pricing, see the official documentation.

## Billing Details

For the complete model pricing table and billing rules, visit:

[https://platform.kimi.com/docs/pricing/chat](https://platform.kimi.com/docs/pricing/chat)

## Cost Optimization Tips

- Set the `max_tokens` parameter appropriately to avoid generating overly long, unnecessary content.
- Use Context Caching to cache repeated system prompts and context.
- Choose a model that matches the task complexity; lightweight models are sufficient for simple tasks.
- Streamline your prompt design to reduce unnecessary input tokens.
