---
title: "Configure a Feishu Bot"
slug: "feishu-bot"
order: 8
extract_headings: false
preview: true
preview_content: "How to connect Kimi Claw to a Feishu bot, plus answers to common questions."
---

<SeoMeta
  title="How to Connect Kimi Claw to Feishu: Setup Guide - Kimi Help Center"
  description="A step-by-step guide to connecting Kimi Claw to a Feishu bot. Use the quick QR-code setup to access all Kimi AI Agent capabilities in Feishu group chats or direct messages."
/>

# Configure a Feishu Bot

## Quick setup

1. Click https://www.kimi.com/bot 
2. Open **Settings** in Kimi Claw.
3. Go to **Chat channels**.
4. Follow the on-page instructions to scan the Feishu QR code and complete the connection.

<Frames
  src="./images/kimi-claw/feishu-bot-01.gif"
  alt="Feishu setup flow"
/>

## Manually configure a Feishu bot

Kimi Claw has a built-in Skill that can help you configure a Feishu bot. You can simply tell it, “I want to configure a Feishu bot,” and it will give you a step-by-step plan. You can also follow the steps below to configure it manually.

## Detailed steps

1. Go to the [Feishu Developer Platform](https://open.feishu.cn/), click **Create enterprise self-built app**, and set the App name and description.
2. In the app, click **Add bot** to create the bot service.
3. Go to **Permission settings** and add the required permissions via **Batch import/export permissions**.
4. Go to **Credentials & Basic Info**, copy the **App ID** and **App Secret**, send them to Kimi Claw, and specify that they are the application credentials for the Feishu bot.
5. After Kimi Claw finishes the configuration, restart it for the settings to take effect. You can let Kimi Claw restart itself, or manually click **Restart Kimi Claw** in Settings.
6. After the restart, switch to **Events & Callbacks** in the Feishu Developer Platform, select **Long connection** to receive events, click Save, and then add the event `im.message.receive_v1`.
7. Switch to **Version Management & Release** and publish the app. In Feishu, search for the bot name to start chatting.

## Diagnostic commands

If you run into issues when configuring the Feishu bot, use the following commands for diagnosis:

| Command | Description |
|------|------|
| `/feishu start` | Check whether the Feishu plugin is installed and running |
| `/feishu doctor` | Check whether the Feishu bot configuration is correct |
| `/feishu auth` | Grant Feishu bot permissions in batches |

## Fix commands

For further troubleshooting and fixes, run the following commands in your terminal:

| Command | Description |
|------|------|
| `npx doctor` | Diagnose the Feishu plugin runtime status |
| `npx fix` | Automatically fix common configuration issues |
| `npx info` | View detailed Feishu plugin information |

## Related docs

- [What should I do if the Feishu bot does not respond?](/kimi-claw/feishu-no-response)
- [Upgrade notes, including detailed Feishu plugin diagnostic commands](/kimi-claw/upgrade-notice)
