---
title: "卸载 Kimi 插件"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="卸载 Kimi 插件 - Kimi 帮助中心"
  description="这仅适用于已关联到 Kimi 的自托管 OpenClaw 设备。请确保在你自己的机器上运行此命令。"
/>

# 卸载 Kimi 插件

<Callout type="warning">
**这仅适用于自托管 OpenClaw 设备**，且该设备已关联到 Kimi。请确保在你自己的机器上运行此命令。
</Callout>

## 卸载命令

在安装了 OpenClaw 的设备上运行以下命令：

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
**切勿在一键部署的 Kimi Claw 实例上运行此命令。**
在云端部署的 Kimi Claw 上执行卸载脚本会**永久断开连接**，且无法恢复。此命令仅用于从自托管 OpenClaw 设备中移除 Kimi 插件。
</Callout>
