---
title: "Kimi Claw Product Introduction"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "An introduction to the Kimi Claw dedicated AI assistant, including how to create one and what it can do."
---

<SeoMeta
  title="What Is Kimi Claw? Product Introduction to the AI Agent Assistant - Kimi Help Center"
  description="Learn about Kimi Claw’s product positioning, core capabilities, and supported platforms. Kimi Claw is a cross-platform AI Agent assistant that can connect to Feishu, WeChat, DingTalk, and other platforms, bringing Kimi’s intelligence to you anytime, anywhere."
/>

# Deploy OpenClaw in the cloud

OpenClaw is an AI assistant with a distinct personality and long-term memory. In Kimi, you can start a conversation with OpenClaw through Kimi Claw.

## One-click OpenClaw deployment

<Frames
  src="./images/kimi-claw/overview-01.png"
  alt="One-click OpenClaw deployment"
/>

If you don’t have your own OpenClaw yet, go to [kimi.com/bot](https://kimi.com/bot) to create a dedicated OpenClaw. Kimi will deploy OpenClaw to the cloud for you in one click—no need to buy a server or configure anything from the command line.

- One-click deployment is available only on **Allegretto and higher** plans. For details, see [Kimi membership plans](https://www.kimi.com/membership/pricing).
- Kimi automatically configures the **Kimi K2.6 model** and links it to your **Kimi membership benefit credits**, with no separate API setup required. It also automatically configures the Kimi Web Search service, giving your AI web search capabilities.
- Kimi Claw can be deployed directly to Feishu, WeCom, Weibo, and other platforms.

## Creation flow

<Frames
  src="./images/kimi-claw/overview-02.png"
  alt="Creation completed"
/>

1. Log in to [kimi.com/bot](https://kimi.com/bot).
2. Click **Create** Kimi Claw.
3. Wait for the system to complete the configuration automatically. This usually takes a few minutes.

<Frames
  src="./images/kimi-claw/overview-03.gif"
  alt="Chat channel configuration"
/>

4. Change your Kimi Claw nickname and set a personalized name.
5. Under **Settings → Chat channels**, configure the chat platforms you need, such as WeChat, Feishu, and WeCom.

## Link an existing OpenClaw

If you have already deployed your own OpenClaw, you can also chat with OpenClaw in Kimi by installing the Kimi plugin:

1. Go to the [Kimi Claw page](https://kimi.com/bot) and select **Link existing OpenClaw**.
2. Follow the instructions to install the plugin on the device running OpenClaw.
3. Once installation is complete, you can talk to your OpenClaw in Kimi.

<Frames
  src="./images/kimi-claw/overview-05.png"
  alt="Chat channel configuration"
/>

<a id="switch-to-k3"></a>
## Switch to the Kimi K3 model

Kimi Claw uses the Kimi K2.6 model by default. If you want to use Kimi K3, run the following commands to automatically update your local OpenClaw configuration.

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

After running the commands, verify that `session_status` shows `model` as `kimi-coding/k3` and the `context` limit as `1.0m`.

<Callout type="warning">
The configuration file path may vary depending on how OpenClaw was installed. Replace `/root/.openclaw/openclaw.json` with the actual path on your system. Be sure to back up the file before making changes.
</Callout>
