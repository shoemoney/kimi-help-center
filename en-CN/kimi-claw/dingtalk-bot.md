---
title: "Configure a DingTalk Bot"
slug: "dingtalk-bot"
order: 11
extract_headings: false
preview: true
preview_content: "A complete setup guide for connecting Kimi Claw to a DingTalk bot."
---

<SeoMeta
  title="How to Connect Kimi Claw to DingTalk? Setup Guide - Kimi Help Center"
  description="Learn how to configure and use the Kimi Claw DingTalk bot so you can complete tasks with Kimi AI Agent directly in DingTalk groups."
/>

# Configure a DingTalk Bot

Kimi Claw can be deployed to DingTalk. Follow these 5 steps to complete the setup.

## Create a DingTalk Application

1. Go to the [DingTalk Open Platform](https://open-dev.dingtalk.com/).
2. Click to create an **Enterprise Internal Application**.
3. Set the application name and description.
4. After creation, obtain the **ClientID** and **ClientSecret** on the application information page and keep them for later use.

## Create a Bot

1. On the application management page, click **Add Capability** and select **Bot**.
2. Configure the bot’s basic information, such as its name and avatar.
3. For message receiving mode, select **Stream mode** (long-lived connection).

## Publish the Application

1. In permission management, add the following permissions:
   - `Card.Streaming.Write`
   - `Card.Instance.Write`
   - `qyapi_robot_sendmsg`
2. Click **Create Version** and publish the application.
3. Wait for administrator approval.

## Configure in Kimi Claw

Send the DingTalk application credentials to Kimi Claw:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "ClientID: xxxxxxxxxx\nClientSecret: xxxxxxxxxx\nHere are my DingTalk bot credentials. Please help me configure them.",
    },
  ]}
/>

Kimi Claw will complete the configuration automatically. Restart is required for the configuration to take effect.

## Start Using

In a DingTalk group chat, **@mention the bot** to start a conversation. You can also chat with the bot directly in a one-to-one conversation.
