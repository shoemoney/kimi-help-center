---
title: "How do I uninstall the Kimi plugin?"
slug: "uninstall-plugin"
order: 18
extract_headings: false
preview: true
preview_content: "How to safely uninstall plugins in Kimi Claw."
---

<SeoMeta
  title="How do I uninstall the Kimi Claw plugin? - Kimi Help Center"
  description="Learn the exact steps for uninstalling the Kimi Claw plugin on different platforms, including complete removal methods and precautions for Feishu, browsers, and other environments."
/>

# Uninstall the Kimi plugin

<Callout type="warning">
**This operation applies only to devices linked to OpenClaw**. Make sure you are uninstalling on an OpenClaw device that you deployed yourself.
</Callout>

## Uninstall command

Run the following command on a device linked to OpenClaw to uninstall the Kimi plugin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Critical warning

**Do not run this command on a one-click deployed Kimi Claw device!**

Running the uninstall command on a one-click deployed Kimi Claw device will cause your connection to Kimi Claw to be **permanently disconnected and impossible to restore**. This command is intended only for removing the Kimi plugin from an OpenClaw device that you deployed yourself.
