---
title: "模型选择与性能对比"
slug: "api-model-selection"
order: 6
extract_headings: true
preview: true
preview_content: "Kimi API 模型选择指南：性能维度与 Vision 计费说明。"
---

<SeoMeta
  title="如何选择合适的 Kimi API 模型？ - Kimi 帮助中心"
  description="根据你的使用需求，选择最合适的 Kimi API 模型。本文将对比各模型的性能、价格与适用场景，帮助你做出更合适的选择。"
/>

# 模型选择与性能对比

Kimi API 提供多种模型供开发者选择。不同模型在能力、速度与价格上各有侧重。

## 可用模型

请访问 [platform.kimi.ai/docs/introduction](https://platform.kimi.ai/docs/introduction) 查看完整的模型列表与详细参数。

选择模型时，建议从以下维度进行评估：

- **上下文长度**：不同模型支持的最大上下文窗口不同；处理长文档时，建议选择大上下文模型。
- **响应速度**：轻量模型响应更快，更适合对延迟敏感的场景。
- **生成质量**：高阶模型在复杂推理、创作等任务中表现更佳。
- **价格**：结合预算与调用量，选择性价比更高的模型。

## Vision 模型（图片理解）

Vision 模型支持图片输入，适用于图片描述、OCR、图表解读等场景：

- 每张图片按固定 **1024 tokens** 计费，不受图片尺寸与分辨率影响。
- 支持常见图片格式（JPEG、PNG、WebP 等）。
- 图片可通过 URL 或 Base64 编码方式传入。

## 当前不支持的能力

- **视频多模态**：暂不支持直接输入和理解视频文件。
- **PPT 生成 API**：PPT 生成功能暂未开放 API 接口。
- **深度研究 API**：深度研究功能暂未开放 API 接口。

如需使用以上能力，请关注平台公告，获取最新动态。
