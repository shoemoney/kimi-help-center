---
title: "Configure Weibo Lobster Assistant"
slug: "weibo-bot"
order: 10
extract_headings: false
preview: true
preview_content: "Installation and configuration instructions for connecting Kimi Claw to Weibo Lobster Assistant."
---

<SeoMeta
  title="How to Connect Kimi Claw to Weibo: Configuration Tutorial - Kimi Help Center"
  description="Learn how to configure the Kimi Claw Weibo bot to bring Kimi AI capabilities into Weibo for intelligent interactions and content creation."
/>
# Configure Weibo Lobster Assistant

Weibo supports chatting with Kimi Claw through Weibo Lobster Assistant. For the official Weibo setup guide, see: [Weibo Lobster Assistant Configuration Guide](https://weibo.com/6808810981/QvjZpiZVn).

## Step 1: Install the Weibo Lobster Assistant plugin

- Kimi Claw instances created **after March 9, 2025** already include the plugin, so you can skip this step.
- For Kimi Claw instances created earlier, install the plugin manually by sending the following in the chat:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "- First, download the Weibo Lobster plugin (git clone https://gitee.com/wecode-ai/openclaw-weibo.git)\n- Then go to the corresponding directory and install the plugin (openclaw plugins install .)\n- Finally, restart openclaw gateway",
    },
  ]}
/>

## Step 2: Configure Weibo Lobster Assistant

1. Open Weibo, send a private message to **@微博龙虾助手**, and send **"连接龙虾"**.
2. Lobster Assistant will reply with an **appKey** and an **appSecret**.
3. Send the appKey and appSecret you received to Kimi Claw.
4. After Kimi Claw completes the configuration, go to **Settings** and click **Restart Kimi Claw**.
5. After the restart, you will see the "Your Lobster is online" message in Weibo Lobster Assistant. You can then chat with Lobster in Weibo.

<Frames
  src="./images/kimi-claw/weibo-bot-01.png"
  alt="Connect Lobster"
/>

<Frames
  src="./images/kimi-claw/weibo-bot-02.png"
  alt="Connected successfully"
/>

## Limitations

- Currently, Weibo Lobster Assistant is supported only on the mainland China version of Weibo. The overseas version cannot connect properly yet.
