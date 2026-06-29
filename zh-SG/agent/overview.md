---
title: "K2.6 Agent 概览"
slug: "agent-overview"
order: 1
extract_headings: false
preview: true
preview_content: "了解 K2.6 Agent 的自主任务执行能力、20 多种工具以及支持的使用场景。"
---

<SeoMeta
  title="K2.6 Agent 概览 - Kimi 帮助中心"
  description="了解 Kimi K2.6 Agent 的能力、演进历程和使用场景。"
/>

# K2.6 Agent 概览

Kimi K2.6 Agent 是一款可端到端处理复杂任务的自主 AI 助手。它由 K2.6 模型驱动，可调用 20 多种工具来构建网站、生成文档、分析数据等。

## 产品演进
- **2025 年 9 月 5 日**：Kimi K2 发布 — 32B 激活参数 / 1T 总参数
- **2025 年 9 月 26 日**："OK Computer" Agent 模式上线
- **2026 年 1 月 27 日**：Kimi K2.5 发布 — Office 技能与 Agent 能力进一步增强
- **2026 年 2 月**：Kimi Claw 公开测试版上线

## 核心能力
| 功能 | 说明 |
|---------|-------------|
| **网站** | 生成并部署响应式 Web 应用 |
| **文档** | 编辑和生成 Word、PDF、Markdown |
| **表格** | Excel/CSV 数据分析与可视化 |
| **幻灯片** | 自动生成 PPT |
| **Deep Research** | 生成 10,000 字以上的研究报告 |
| **K2.6 Agent Swarm** | 最多 300 个子 Agent 并行工作 |
| **Kimi Claw** | 拥有 5,000 多项技能的云端自动化能力 |

<Frames
  src="./images/overview/agent-workflow.png"
  alt="Agent 工作流"
/>

## 工作原理
1. **任务规划**：将你的请求拆解为多个子任务
2. **工具调用**：按需使用 20 多种工具
3. **自主执行**：完成研究、设计与开发
4. **错误处理**：无需用户介入即可自行纠错
5. **交付成果**：Office 文件、Web 应用或报告

## 开始使用
- **Web**：[kimi.com/agent](https://www.kimi.com/agent)
- **移动端**：Kimi 应用 → 任务栏 → Agent 模式
清晰描述你的任务，查看执行进度，然后下载或分享结果。

## 使用场景
- 网站开发（无需编写代码）
- 多媒体内容生成
- 文档对比与翻译
- 数据分析（支持最多 1,000 行的 Excel）
- 幻灯片生成
- 文档转换

<ColumnsContent
  columns={[
    {
      title: "功能与限制",
      description: "能力与配额",
      pageUrl: "/agent/agent-features-and-limits",
      type: "document",
    },
    {
      title: "配额与计费",
      description: "价格与会员详情",
      pageUrl: "/agent/quota-and-billing",
      type: "data",
    },
    {
      title: "K2.6 Agent Swarm",
      description: "多 Agent 协作",
      pageUrl: "/agent/agent-swarm",
      type: "comment",
    },
    {
      title: "Kimi Claw",
      description: "云端自动化 Agent",
      pageUrl: "/kimi-claw/overview",
      type: "kimiclaw",
    },
  ]}
/>
