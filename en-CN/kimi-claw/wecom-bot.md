---
title: "Configure a WeCom Bot"
slug: "wecom-bot"
order: 9
extract_headings: false
preview: true
preview_content: "Steps to connect Kimi Claw to a WeCom bot."
---

<SeoMeta
  title="How to Connect Kimi Claw to WeCom: Configuration Guide - Kimi Help Center"
  description="Learn how to configure a Kimi Claw WeCom bot and integrate an AI Agent into your WeCom workflow to improve team collaboration."
/>

# Configure a WeCom Bot

Kimi Claw can be deployed to WeCom.
Currently, both WeCom enterprise administrators and members can create Smart Bots. Smart Bots can proactively push messages to users in one-on-one chats and internal group chats. Follow the steps below to configure a WeCom bot based on Kimi Claw, or refer to the official documentation [Connect to OpenClaw over a Long Connection](https://open.work.weixin.qq.com/help2/pc/cat?doc_id=21658).

<Callout type="info">
Please install the **latest desktop client** of [WeCom](https://work.weixin.qq.com/). Smart Bots cannot be created from the mobile app for now.
</Callout>

## Step 1: Create a WeCom Bot

1. In the desktop client, go to “Workbench”, then click “Smart Bot” → “Create Bot” → “Create Manually”
2. Scroll to the bottom of the page and select **API mode** to create it

<Frames
  src="./images/kimi-claw/wecom-bot-01.png"
  alt="Workbench entry"
/>

<Frames
  src="./images/kimi-claw/wecom-bot-02.png"
  alt="Create bot"
/>

<Frames
  src="./images/kimi-claw/wecom-bot-03.png"
  alt="API mode"
/>

3. Choose to create it via “Long Connection”, then obtain the **Bot ID** and **Secret**
4. After copying the Bot ID and Secret, save the Smart Bot

<Frames
  src="./images/kimi-claw/wecom-bot-04.png"
  alt="Long Connection method"
/>

## Step 2: Install the WeCom Plugin

Kimi Claw instances created after March 9, 2025 have the WeCom plugin installed by default, so you can skip directly to Step 3. For Kimi Claw instances created earlier, install the plugin first:

1. Send the following to Kimi Claw in the chat:

> "Help me run `openclaw plugins install @wecom/wecom-openclaw-plugin` to install the WeCom plugin"

2. After it runs successfully, click “Settings” → “Restart Kimi Claw” to complete the plugin installation

## Step 3: Configure the Bot in Kimi Claw

Open Kimi Claw and tell it the bot’s Bot ID and Secret. Kimi Claw will complete the configuration for you. For command-line configuration, see the official documentation [Connect to OpenClaw over a Long Connection](https://open.work.weixin.qq.com/help2/pc/cat?doc_id=21658).

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "botId: xxxxxxxxxx\nsecret: xxxxxxxxxx\nHere is my WeCom bot information. Please help me configure it.",
    },
  ]}
/>

<Frames
  src="./images/kimi-claw/wecom-bot-07.png"
  alt="Configure the bot"
/>

## Step 4: Complete Pairing

1. Go to WeCom, open the bot, and start a conversation with it
2. The first time, it will send you a **pairing message**. Send this message to Kimi Claw
3. Kimi Claw will complete the pairing for you. Once done, you can chat normally with the bot in WeCom DMs or groups

<Frames
  src="./images/kimi-claw/wecom-bot-08.png"
  alt="Pairing message"
/>

<Frames
  src="./images/kimi-claw/wecom-bot-09.png"
  alt="Send pairing message"
/>

<Frames
  src="./images/kimi-claw/wecom-bot-11.png"
  alt="Group chat example"
/>

## Limitations

- WeCom’s “WeChat plugin” currently does not support Smart Bots, so Smart Bot information cannot be viewed in WeChat for now
- Kimi Claw does not yet support configuring smart replies in the form of a “self-built mini program”. If this changes in a future update, the documentation will be updated accordingly
