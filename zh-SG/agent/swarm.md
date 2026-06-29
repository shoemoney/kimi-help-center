---
title: "K2.6 Agent Swarm [测试版]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [测试版] - Kimi 帮助中心"
  description="K2.6 Agent Swarm 测试版采用一种“横向扩展”架构，可协调最多 300 个子 Agent 并行工作——无需预设角色或手工编排工作流..."
/>

# K2.6 Agent Swarm [测试版]

<Callout type="info">
**K2.6 Agent Swarm [测试版]** 采用一种“横向扩展”架构，可协调最多 300 个子 Agent 并行工作——无需预设角色，也不必手工编排工作流。相比单 Agent 执行，任务完成速度约提升 **4.5 倍**。
</Callout>

2026 年 1 月 27 日，Moonshot AI 发布 Kimi K2.5，并推出 Agent Swarm [测试版]。2026 年 4 月 20 日，Moonshot AI 发布并开源 Kimi K2.6，对 Agent Swarm 架构进行了重大升级：
- 最多 **300 个子 Agent** 同时工作
- 单个任务可完成超过 **4,000 次工具调用**
- 相比单 Agent 顺序执行，速度提升 **4.5 倍**

## 背后的故事

2025 年，AI 行业的主流叙事聚焦于纵向扩展——更大的模型、更多的参数。但这条路会遇到一个结构性瓶颈：单线程顺序执行。

Agent Swarm 源自一个真实场景：一位团队成员尝试自动化收集每日股票资讯，当 if-else 代码写到 100 行时，她意识到：“我正在手写一个多 Agent 系统。”既然模型能使用工具，为什么不能让它们自己搭建架构？

Agent Swarm 是一种自设计的组织结构——由 AI 设计，而不是由人来设计。主 Agent（orchestrator）可自主调度最多 300 个子 Agent，执行多达 4,000 个并行工作流步骤。

<Frames
  src="./images/swarm/swarm.png"
  alt="群体"
/>

K2.6 Agent Swarm [测试版] 采用 PARL（Parallel-Agent Reinforcement Learning）训练方法。在大规模搜索场景中，相比单 Agent 方案，它可将关键步骤减少 3–4.5 倍。

## 如何使用？

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="截图 8"
/>

**入口：**
- **Web**：[kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **移动端**：Kimi app → 切换模式 → 选择 K2.6 Agent Swarm [测试版]

<Callout type="warning">
**测试版权限**：K2.6 Agent Swarm [测试版] 目前面向 Allegretto、Allegro 和 Vivace 会员开放。相比标准 Agent 任务，此类任务会消耗显著更多配额。
</Callout>

**步骤：**
1. 描述并发送你的任务（例如：“收集 200+ 篇 Paul Graham 文章”）
2. 实时查看进展：任务列表创建、子 Agent 生成、并行执行
3. 接收交付物：代码项目、文件夹、数据分析、Office 文档
4. 预览、下载或分享结果
5. 后续轮次可切换到单个 K2.6 Agent 继续处理

## 使用场景

### 大规模发现

**案例 1：100 个 YouTube 细分领域中的 Top 3 创作者**

K2.6 Agent Swarm [测试版] 创建了 300 个子 Agent 进行并行搜索，并生成包含频道名称、订阅者数量和简介的结构化表格。

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="查看结果" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**案例 2：收集 200+ 篇 Paul Graham 文章**

Agent Swarm 调度子 Agent 对 200+ 篇文章进行搜索、下载、分类和总结，并整理到主题文件夹中。

<Chat title="查看结果" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### 大规模输出

**案例：基于 40 份 PDF 生成 100 页文献综述**

K2.6 Agent Swarm [测试版] 调度多个专注写作的子 Agent，每个子 Agent 负责一个章节。最终输出：一份 100 页的学术文档，包含引文、方法论图表和引文网络分析。

<Frames
  src="./images/swarm/literature-review.png"
  alt="文献综述"
/>

### 大规模视角

**案例：产品发布策略专家评审**
Agent Swarm 调度具有不同视角的专家子 Agent（产品经理、投资人、客户成功）来评审一份发布策略。

<Frames
  src="./images/swarm/expert-review.png"
  alt="专家评审"
/>

<Chat title="查看结果" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**案例：以 20 种文学风格改写《三体》**
20 个“写手”子 Agent 以不同风格独立创作——从 Virginia Woolf 到 Borges，再到 Kafka。

<Chat title="查看结果" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## 技术深度解析

**核心架构：指挥官 + 专家**

- **Orchestrator** = 教练/指挥官：把握全局，制定策略
- **子 Agent** = 队员：各自专注于特定角色

**关键设计：固定队员，只训练教练**

所有子 Agent 保留原有能力；只有 orchestrator 通过强化学习获得提升。这带来了清晰的责任归因和稳定的训练过程。

**防止“偷懒”：**
- **串行坍缩**：orchestrator 把所有事情都交给一个子 Agent
- **伪并行**：为了刷指标而拆出没有意义的子任务

**解决方案：三维奖励机制**
1. 最终结果质量
2. 实现真正并行
3. 子任务完成率

**关键步骤指标**

Agent Swarm 会计算每个阶段中最慢子 Agent 的耗时。这会促使系统真正优化流程，而不是盲目拆分任务。

**上下文分片**

每个子 Agent 专注于自己的“笔记本”，独立记录相关细节。只有关键结论会汇报给 orchestrator——既保留推理过程，又避免记忆负担过重。

**真实世界结果**

在 BrowseComp 基准测试中：
- 准确率：15.9%（单 Agent）→ 33.3%
- 关键步骤减少约 40%

## 应用场景

K2.6 Agent Swarm [测试版] 尤其适合：
1. **大规模信息检索**：海量互联网数据收集
2. **批量下载**：大规模文件与资源收集
3. **广范围阅读**：处理 100+ 份文档
4. **长篇写作**：生成超过 100,000 字的内容
5. **复杂编程**：前端开发、代码审查、重构
6. **Office 自动化**：专业文档、电子表格、演示文稿

**延伸阅读：**
- [Kimi Agent Swarm：100 个子 Agent 的规模化协作](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5：Visual Agentic Intelligence](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6：推进开源编程能力](https://www.kimi.com/blog/kimi-k2-6)
