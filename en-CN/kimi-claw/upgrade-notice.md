---
title: "Upgrade Precautions"
slug: "upgrade-notice"
order: 20
extract_headings: true
preview: true
preview_content: "Kimi Claw upgrade precautions: do not manually upgrade OpenClaw or the Feishu plugin."
---

<SeoMeta
  title="Kimi Claw Upgrade Precautions - Kimi Help Center"
  description="Important: Do not manually upgrade the OpenClaw version or the Feishu plugin, as this may cause the plugin to stop working. Learn the correct upgrade method and how to recover after an accidental upgrade."
/>

# Upgrade Precautions

## Do not manually upgrade OpenClaw

OpenClaw currently does not support updates to versions dated after 3.22. If you upgrade manually or enable automatic updates, the Kimi plugin will stop working, and other installed plugins (such as WeChat, Feishu, WeCom, and Weibo) may also become unavailable.

<Callout type="warning">
**Do not upgrade manually or enable automatic updates.** Please wait for the official upgrade push.
</Callout>

**How to recover after an accidental upgrade:**

If an accidental upgrade has caused the plugin to stop working, go to Settings and select “Restore initial settings” to roll back to a usable version.

- Workspaces and memory will be retained
- Chatbots (WeChat, Feishu, WeCom, etc.) need to be configured again

After adaptation is complete, the official upgrade will be pushed to all users. A prompt will appear on the Kimi Claw page at that time.

## Do not manually upgrade the Feishu plugin

Upgrading the Feishu plugin will also upgrade the OpenClaw version, which will cause incompatibility with the current environment.

<Callout type="warning">
**Manually upgrading the Feishu plugin is not recommended.** Newly installed Kimi Claw instances already include the latest compatible plugin version.
</Callout>

After upgrading the Feishu plugin, the latest plugin version may be incompatible with the current OpenClaw version, causing the Feishu bot to stop working properly.

## Common Feishu diagnostic commands and fixes

### Method 1: Diagnose with chat commands

Send the following commands in your conversation with the AI:

| Command | Description |
|------|------|
| `/feishu start` | Confirm whether the Feishu plugin is installed successfully |
| `/feishu doctor` | Check whether the configuration is normal |
| `/feishu auth` | Complete user authorization in batches |

<Callout type="tip">
The plugin includes built-in solutions to common issues. If you run into a problem, try asking Kimi Claw first.
</Callout>

### Method 2: Diagnose and fix with npx commands

If the chat commands do not resolve the issue, run the following diagnostic command in the terminal:

**View issues:**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npx https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8ab6e7a04c17db1becfcbda8ca35f091_1rCCFRWlRV.tgz doctor",
    },
  ]}
/>

<Frames
  src="./images/kimi-claw/upgrade-notice-01.png"
  alt="Feishu diagnostic results"
/>

**Try automatic repair:**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npx https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8ab6e7a04c17db1becfcbda8ca35f091_1rCCFRWlRV.tgz doctor --fix",
    },
  ]}
/>

<Frames
  src="./images/kimi-claw/upgrade-notice-02.png"
  alt="Feishu automatic repair"
/>

### Method 3: Report the issue

If the issue still cannot be fixed, report the information in the feedback group. Run the following command to view version information, and include it when reporting the issue to help with troubleshooting:

**View version information:**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npx https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8ab6e7a04c17db1becfcbda8ca35f091_1rCCFRWlRV.tgz info",
    },
  ]}
/>

<Frames
  src="./images/kimi-claw/upgrade-notice-03.png"
  alt="Version information"
/>

**View detailed configuration information:**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npx https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8ab6e7a04c17db1becfcbda8ca35f091_1rCCFRWlRV.tgz info --all",
    },
  ]}
/>

You can join the feedback group by scanning the QR code in Feishu.

<Frames
  src="./images/kimi-claw/upgrade-notice-04.png"
  alt="KimiClaw Feishu group"
/>
