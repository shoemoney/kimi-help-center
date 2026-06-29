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
