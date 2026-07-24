---
title: "Kimi Claw 概览"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "一键在云端部署并管理你自己的 Kimi Claw AI 助手。"
---

<SeoMeta
  title="Kimi Claw 概览 - Kimi 帮助中心"
  description="一键在云端部署并管理你自己的 Kimi Claw AI 助手。"
/>

# 产品概览

<Callout type="info">
**Kimi Claw** 是一款拥有独特个性与持久长期记忆的 AI 助手。借助 Kimi Claw，你可以直接在 Kimi 中创建、部署你自己的 OpenClaw 实例，并与之对话。
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## 一键云端部署

还没有 OpenClaw？前往 [kimi.com/bot](https://kimi.com/bot) 即可创建。Kimi 会为你部署到云端——无需购买服务器，也无需使用命令行配置。

<Callout type="warning">

- 一键部署需要 **Allegretto 或更高** 会员方案。[会员方案](https://www.kimi.com/membership/pricing)。

</Callout>

- Kimi 会自动为你配置 **Kimi K2.6 模型**，并关联你的 **[Kimi 会员权益额度](https://www.kimi.com/membership/pricing)**，同时启用 Kimi 网页搜索——无需单独配置 API。
- Kimi Claw 可直接部署到 Telegram 等聊天平台。

## 快速开始

1. 登录 [kimi.com/bot](https://kimi.com/bot)
2. 点击 **创建**，启动新的 Kimi Claw
3. 等待自动配置完成（通常需要几分钟）
4. 自定义 Kimi Claw 的名称与人设
5. 在 **设置 → 聊天渠道** 中，连接你想使用的平台（例如 Telegram）

## 关联已有 OpenClaw

如果你已经自行托管了 OpenClaw 实例，可以安装 Kimi 插件，将它连接到 Kimi：

1. 前往 [kimi.com/bot](https://kimi.com/bot)，选择 **关联已有 OpenClaw**
2. 按照说明在你的 OpenClaw 设备上安装插件
3. 连接成功后，你就可以通过 Kimi 与你的 OpenClaw 对话

<a id="switch-to-k3"></a>
## 切换为 Kimi K3 模型

Kimi Claw 默认使用 Kimi K2.6 模型。如果你希望使用 Kimi K3，可以通过以下命令自动修改本地 OpenClaw 配置。

```bash
# 1. 备份当前配置
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. 新增 k3 模型并切换默认模型（示例使用 jq）
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. 重启 OpenClaw
openclaw gateway restart

# 4. 验证
session_status
```

执行后请确认 `session_status` 输出中 `model` 显示为 `kimi-coding/k3`，且 `context` 上限为 `1.0m`。

<Callout type="warning">
配置文件路径可能因安装方式不同而有所差异，请根据实际情况替换 `/root/.openclaw/openclaw.json`。修改前务必先备份。
</Callout>
