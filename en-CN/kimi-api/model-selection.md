---
title: "Model Selection and Performance Comparison"
slug: "api-model-selection"
order: 6
extract_headings: true
preview: true
preview_content: "A guide to choosing Kimi API models: performance dimensions and Vision billing."
---

<SeoMeta
  title="How to Choose the Right Kimi API Model? - Kimi Help Center"
  description="Choose the Kimi API model that best fits your business needs. This article compares the performance, pricing, and use cases of each model to help you make the best choice."
/>

# Model Selection and Performance Comparison

Kimi API offers multiple models for developers, each with different strengths in capability, speed, and pricing.

## Available Models

Visit [platform.kimi.com/docs/introduction](https://platform.kimi.com/docs/introduction) for the full model list and detailed parameters.

When choosing a model, we recommend evaluating the following factors:

- **Context length**: Different models support different maximum context windows. For long-document processing, choose a model with a larger context window.
- **Response speed**: Lightweight models respond faster and are better suited to latency-sensitive scenarios.
- **Generation quality**: Advanced models perform better on tasks such as complex reasoning and creative writing.
- **Pricing**: Choose the most cost-effective model based on your budget and expected call volume.

## Vision Models (Image Understanding)

Vision models support image input and can be used for image description, OCR, chart interpretation, and similar scenarios:

- Each image is billed at a fixed **1024 tokens**, regardless of image size or resolution.
- Common image formats are supported, including JPEG, PNG, and WebP.
- Images can be passed in via URL or Base64 encoding.

## Currently Unsupported Capabilities

- **Video multimodality**: Direct input and understanding of video files are not currently supported.
- **PPT generation API**: The PPT generation feature is not yet available via API.
- **Deep Research API**: The Deep Research feature is not yet available via API.

For these capabilities, please follow platform announcements for the latest updates.
