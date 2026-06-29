---
title: "Kimi 表格 (Kimi Sheets) 使用场景与提示词库"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi 表格 (Kimi Sheets) 使用场景与提示词库 - Kimi 帮助中心"
  description="Kimi 表格 (Kimi Sheets) 示例使用场景与提示词，涵盖金融估值到分镜脚本创作等任务。"
/>

# Kimi 表格 (Kimi Sheets) 使用场景

<Callout type="info">
Kimi 表格 (Kimi Sheets) 示例使用场景与提示词，涵盖金融估值到分镜脚本创作等任务。
</Callout>

## 金融估值

Kimi 可以像金融分析师一样，收集真实财务数据，搭建 DCF 估值模型，并对公司进行模拟估值。

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**示例提示词**：

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "对 XX Healthcare 进行 DCF 估值。请将完整估值过程和数据\n整理到 Excel 电子表格中，注明数据来源，说明市场规模、增长率、\n市场份额等估算数据背后的推理依据，并纳入宏观环境分析。",
    },
  ]}
/>

## 分镜脚本创作

Kimi 可以像分镜师一样，创建 Excel 格式的视频分镜脚本，包含时长、镜头描述、旁白、音效和参考画面。

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="转写稿"
/>

**示例提示词**：

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "为 Kimi AI 的全新升级 — OK Computer — 制作一份 3D 宣传视频的 Excel 分镜脚本。\n它支持生成和编辑 Office 文档（例如 Word 长篇论文排版、Excel 数据建模与分析、\n自动生成幻灯片）。\n\nExcel 应包含：\nA 列：序号（1-20）\nB 列：累计时长（秒）\nC 列：镜头时长（秒）\nD 列：镜头描述（3D / 运镜）\nE 列：旁白/文字（使用不同背景色区分旁白与画面文字）\nF 列：音效/BGM（使用不同字体颜色区分）\nG 列：分镜画面（为每个镜头生成一张图片 — 使用经典黑白线稿风格保持视觉一致性）\n\n请独立设计创意大纲、脚本和分镜，然后生成画面以完成这份脚本，并以精美的 Excel 格式呈现。",
    },
  ]}
/>

## 更多场景与示例提示词

| 场景 | 示例提示词 |
|------|-----------|
| 金融建模 | 对 XX Company 进行 DCF 估值 — 将完整过程和数据整理到 Excel 中，注明来源，并解释增长率等关键假设背后的推理依据 |
| 行业数据对比 | 研究国内排名前 20 的新能源汽车公司 — 以对比表列出市值、2025 年销量、旗舰车型和近期新闻 |
| 文献整理 | 搜索过去三个月关于 LLM 推理优化的论文 — 按标题、作者、核心方法和主要贡献整理到 Excel 中 |
| 多表合并 | [上传 12 个月度销售 Excel 文件] 将这 12 张表合并为年度汇总，计算环比增长率，并使用公式实现跨表关联 |
| 销售线索提取 | [上传展会 PDF/图片] 提取全部参展商信息，并整理成一份 1,000 行的销售线索 Excel 文件，包含公司名称、联系方式和产品类别 |
| 项目管理 | 创建一份 PMO 项目管理 Excel，包含任务清单、负责人、进度状态、甘特图和跨表关联 |
| 数据可视化 | 将这份销售数据 Excel 转换为可视化仪表板，包含趋势折线图、区域分布图和完成率环形图 |
