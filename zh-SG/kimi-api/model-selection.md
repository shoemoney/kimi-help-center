---
title: "模型选择与对比"
slug: "api-model-selection"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="模型选择与对比 - Kimi 帮助中心"
  description="根据能力、速度和价格，选择合适的 Kimi API 模型。"
/>

# 模型选择与对比

<Callout type="info">
根据能力、速度和价格，选择合适的 Kimi API 模型。
</Callout>

Kimi API 提供多种模型，供开发者按需选择。
## 可用模型
访问 [platform.kimi.ai/docs/models](https://platform.kimi.ai/docs/models)，查看完整模型列表和详细规格。
选择模型时，可参考以下维度：
| 维度 | 考量因素 |
| --- | --- |
| **上下文长度** | 处理长文档时，建议选择大上下文模型 |
| **响应速度** | 对延迟敏感的场景，适合使用轻量模型 |
| **生成质量** | 复杂推理和创意写作，建议选择更高阶的模型 |
| **价格** | 根据预算和调用量，选择更具性价比的模型 |

## 视觉模型
视觉模型支持图片输入，可用于生成图片说明、OCR、图表解读等场景：

<Callout type="info">
- 每张图片统一按 **1,024 tokens** 计费，不受尺寸或分辨率影响
- 支持格式：JPEG、PNG、WebP 等
- 图片可通过 URL 或 Base64 编码传入
</Callout>

## 当前暂不支持的能力

<Callout type="warning">
- **视频多模态**：暂不支持直接输入视频
- **PPT 生成 API**：暂未通过 API 提供
- **深度研究（Deep Research）API**：暂未通过 API 提供
</Callout>

如需了解这些能力的最新进展，请关注平台公告。
