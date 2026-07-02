---
title: "解除安裝 Kimi 外掛"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="解除安裝 Kimi 外掛 - Kimi 說明中心"
  description="這僅適用於你已連結至 Kimi 的自行託管 OpenClaw 裝置。請確認是在你自己的機器上執行此操作。"
/>

# 解除安裝 Kimi 外掛

<Callout type="warning">
**這僅適用於自行託管的 OpenClaw 裝置**，且該裝置已連結至 Kimi。請確認是在你自己的機器上執行此操作。
</Callout>

## 解除安裝指令

請在已安裝 OpenClaw 的裝置上執行以下指令：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## 重要警告

<Callout type="warning">
**切勿在一鍵部署的 Kimi Claw 執行個體上執行此指令。**
若在雲端部署的 Kimi Claw 上執行解除安裝指令碼，將會**永久中斷連線**，且無法復原。此指令僅用於從自行託管的 OpenClaw 裝置移除 Kimi 外掛。
</Callout>
