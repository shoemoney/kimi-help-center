---
title: "FAQ"
slug: "kimi-webbridge-introduction"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge 产品介绍 - Kimi Help Center"
  description="Kimi WebBridge 是一款专为 AI Agent 设计的浏览器插件，支持 Chrome 和 Edge，让 Agent 像真人一样与网页交互。"
  ogType="article"
/>

# 常见问题（FAQ）

## 安装与配置

**Q: 安装扩展时提示"无法从该网站添加应用"？**

A: 请确保从官方应用商店（Chrome Web Store 或 Edge Add-ons）安装。如无法访问应用商店，可使用官网提供的手动安装方式。

**Q: 运行连接指令后没有反应？**

A: 请检查网络连接是否正常，确保可以访问 `kimi-web-img.moonshot.cn` 域名。如仍有问题，尝试重启 Kimi Claw Desktop 后再次运行指令。

**Q: 可以在多台电脑上使用吗？**

A: 可以，每台电脑需要单独安装和配置 WebBridge。

**Q: 找不到 Kimi Claw Desktop？**

A: Kimi Claw Desktop 是部署在你本地电脑上的 Kimi Claw。打开 Kimi 桌面版，在左侧边栏找到 Kimi Claw，新建一个 Claw，选择部署到"我的电脑"。

## 连接与使用

**Q: 插件状态显示未连接？**

A: 请确认已成功安装 Kimi WebBridge 浏览器插件，然后根据你的使用方式操作：

- **Kimi 桌面版**：重启 Kimi 桌面版后重试
- **其他 Local Agent**：在 Agent 中重新发送以下指令，运行后重启 Agent：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

**Q: WebBridge 会泄露我的登录信息吗？**

A: 不会。所有执行都在你本地完成，登录态和网页内容不会离开你的设备。Agent 只能获取你授权的操作结果。

**Q: 为什么有时候操作会失败？**

A: 网页结构复杂或动态加载可能导致操作失败。可以尝试简化指令，或让 Agent 先截图确认页面状态后再执行操作。

**Q: 支持哪些浏览器？**

A: 目前支持 Chrome 和 Edge 浏览器，建议使用最新版本以获得最佳体验。

## 与其他 Agent 配合

**Q: 除了 Kimi，还支持哪些 Agent？**

A: WebBridge 支持所有 Local Agent，包括 Claude Code、Codex、Cursor、Kimi Code、Hermers Claw 等。

**Q: 不同 Agent 的配置方式一样吗？**

A: 配置指令相同，都是运行一条 curl 命令完成安装。具体可参考各 Agent 的 Skill 配置方式。

