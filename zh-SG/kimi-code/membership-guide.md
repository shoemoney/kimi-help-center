---
title: "Kimi Code 会员指南"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code 会员指南 - Kimi 帮助中心"
  description="Kimi Code 是 Kimi 会员计划中面向开发者的权益，提供高性能 AI 编程能力。你可以通过 Kimi Code CLI、Claude Code、Roo Code 等支持的工具使用此权益。"
/>

# Kimi Code 会员指南

<Callout type="info">
Kimi Code 是 Kimi 会员计划中面向开发者的权益，提供高性能 AI 编程能力。你可以通过 Kimi Code CLI、Claude Code、Roo Code 等支持的工具使用此权益。
</Callout>

## 核心优势

| 优势 | 说明 |
|-----------|-------------|
| **广泛兼容** | 支持 Kimi Code CLI、Claude Code、Roo Code 等主流编程 Agent |
| **标准版 / 高速版双档** | 同一模型提供两种速度——高速版输出速度约为标准版的 5–6 倍，可按需切换 |
| **极速响应** | 生成速度最高可达 100 tokens/s，显著提升编程效率 |
| **高频并发** | 每 5 小时窗口约可发起 300–1,200 次请求（视你的套餐而定），最高支持 30 路并发流 |

## 快速开始

请选择适合你的使用路径：

- **新用户**：前往 [kimi.com/code](https://kimi.com/code)，登录并订阅 Coding 套餐。
- **现有订阅用户**：进入控制台管理你的 API 密钥，并开始使用 Kimi Code。

## 获取 API 密钥

1. 登录 [Kimi 控制台](https://kimi.com/code)。
2. 前往 **API 密钥**页面。
3. 点击 **创建新的 API 密钥**。
4. 复制并妥善保存你的 API 密钥（创建后仅显示一次）。

<Callout type="warning">
请勿与他人分享你的 API 密钥，也不要将其提交到公开代码仓库。
</Callout>

## 一键登录

在 Kimi Code CLI 中，你可以使用 `/login` 命令快速完成授权，无需手动复制 API 密钥：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

系统会自动完成设备授权与账号绑定——整个过程只需几秒。

## 设备管理

- 每个账号可在多台设备上使用。
- **连续 30 天未使用**的设备授权会自动过期；你需要再次运行 `/login` 重新授权。
- 你可以在控制台查看和管理已授权设备。

## 如何切换模型

**高速版模型现已上线。** Kimi Code 提供**标准版**与**高速版**两档，两者基于同一模型、编程能力完全一致，并共享同一组 Base URL、API Key 与会员权益。高速版**输出速度约为标准版的 5–6 倍**，在追求即时响应、快速迭代的场景下，一键切换即可获得更流畅的编程体验。主要区别如下：

| 项目 | 标准版 | 高速版 |
| --- | --- | --- |
| 模型 ID | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| 输出速度 | 基准 | 约为标准版的 5–6 倍 |
| 额度消耗 | 基准 | 约为标准版的 3 倍 |
| 编程能力 | 完整 | 与标准版一致 |
| 适用场景 | 日常编程任务 | 即时响应、快速迭代 |
| 会员资格 | 所有 Kimi Code 会员均可使用 | 需 [Allegretto](https://www.kimi.com/membership/pricing) 及以上套餐 |

切换到目标模型的方式：

- **官方 Kimi Code CLI**：在会话中输入 `/model`，即可在标准版与高速版之间直接切换，无需修改配置。
- **Kimi Code for VS Code**：在输入栏的下拉菜单中选择目标模型；若高速版尚未出现，重启 VS Code 或重新安装扩展即可。
- **第三方工具**：将工具的 Model ID 设为目标模型即可，其余配置不变。各工具的位置请见 [在第三方 Coding Agent 中使用](/kimi-code/third-party-agents)。

<Callout type="info">
- **模型 ID 固定**：两个 ID 均为固定标识，后端会随模型升级自动更新对应模型，无需变更客户端配置。
- **务必填对**：高速版 ID 必须为 `kimi-for-coding-highspeed`；若填错或设为其他值，请求会静默回退至标准版 `kimi-for-coding`——不会报错，但也不会加速。
- **无权限返回 401**：若套餐未含高速版访问权限，调用会返回 `401`；请升级至 Allegretto 及以上。
</Callout>

<Callout type="tip">
**为什么整体耗时没感觉快 5–6 倍？** 「5–6×」指的是**模型输出速度**（生成文字／代码的速度）。一次编程任务的总耗时由「模型输出 + 工具调用（读写文件、执行命令、联网检索等）+ 脚本执行」共同构成——工具调用与脚本执行的耗时取决于你的项目与命令本身，高速版并不改变这部分。因此若整体感觉未达 5–6 倍，通常是这一轮工具调用／脚本执行占了较大比重，而非模型生成变慢。
</Callout>
