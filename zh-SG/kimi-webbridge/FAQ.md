---
title: "常见问题"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi 浏览器扩展常见问题 - Kimi 帮助中心"
  description="关于 Kimi 浏览器扩展安装、连接，以及在多个浏览器和本地 Agent 中使用的常见问题。"
  ogType="article"
/>

# 常见问题

## 产品版本

### Kimi WebBridge 和 Kimi 浏览器扩展是什么关系？

Kimi WebBridge 更名为 Kimi 浏览器扩展，并新增了浏览器侧边栏入口、录制网页操作、拆解网页生成指令等功能。通过本地 Agent 调用扩展的方式保持不变，可继续使用；新增的侧边栏入口需登录 Kimi 账号后使用。

## 安装与配置

### 安装扩展程序时看到“无法从此网站添加应用”？

请确保从官方应用商店（Chrome Web Store 或 Edge Add-ons）安装。如果你无法访问应用商店，请使用官网提供的手动安装方法。

### 运行连接命令后没有任何反应？

请检查你的网络连接。如果问题仍然存在，请尝试重启 Kimi Claw Desktop，然后再次运行该命令。

### 可以在多台电脑上使用吗？

可以，但每台电脑都需要分别安装和配置。

### 找不到 Kimi Claw Desktop？

Kimi Claw Desktop 是部署在你本地电脑上的 Kimi Claw。打开 Kimi Desktop，在左侧边栏找到 Kimi Claw，新建一个 Claw，并选择“部署在我的电脑上”。

## 连接与使用

### 扩展程序状态显示“已断开连接”？

请确认 Kimi 浏览器扩展程序已成功安装，然后根据你的设置方式按以下步骤操作：

- **Kimi Desktop**：重启 Kimi Desktop 后再试

- **其他本地 Agent**：在你的 Agent 中重新发送以下命令，命令运行完成后重启该 Agent：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### 在 Windows 中安装 Kimi 浏览器扩展，报错：安装失败

Kimi 浏览器扩展支持 Windows 操作系统，安装命令可以在 Linux 环境中运行：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### Kimi 浏览器扩展安装后显示 Chrome 兼容性警告。这是什么意思？

如果 Kimi 浏览器扩展可以正常打开页面，但 `snapshot`、`evaluate`、`screenshot` 或 `click` 等操作一直失败，更常见的原因是**与其他浏览器扩展程序发生冲突**。

这种情况在网页抓取工具、网站辅助扩展、录屏扩展和 AI 助手扩展中尤其常见。

建议按以下步骤排查：

1. 打开浏览器的扩展程序管理页面
2. 暂时停用其他扩展程序
3. 仅保留 Kimi 浏览器扩展启用
4. 重启浏览器后再试
5. 如果 Kimi 浏览器扩展可以正常使用，再逐个重新启用其他扩展程序，找出发生冲突的扩展程序


### Kimi 浏览器扩展会泄露我的登录信息吗？

不会。所有执行都在你的设备本地完成——登录状态和网页内容都不会离开你的电脑。Agent 只能访问你授权的操作结果。

### 为什么操作会失败？

复杂的页面结构或动态加载可能会导致操作失败。你可以尝试简化指令，或先让 Agent 截图确认页面状态，再执行操作。

### 支持哪些浏览器？

目前支持 Chrome 和 Edge。建议使用最新版本，以获得最佳体验。

## 与其他 Agent 配合使用

### 支持哪些其他 Agent？

Kimi 浏览器扩展支持所有本地 Agent，包括 Claude Code、Codex、Cursor、Kimi Code、Hermes Claw 等。

### 不同 Agent 的配置是否相同？

所有 Agent 的设置命令都相同——只需运行一条 curl 命令即可安装。详情请参考各 Agent 的 Skill 配置。
