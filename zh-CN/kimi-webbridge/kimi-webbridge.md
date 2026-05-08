---
title: "Kimi WebBridge产品介绍"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge 产品介绍 - Kimi Help Center"
  description="Kimi WebBridge 是一款专为 AI Agent 设计的浏览器插件，支持 Chrome 和 Edge，让 Agent 像真人一样与网页交互。"
  ogType="article"
/>

# Kimi WebBridge产品介绍

Kimi WebBridge 是一款专为 AI Agent 设计的浏览器插件。与云端浏览器自动化方案不同，Kimi WebBridge 直接在你正在使用的 Chrome 或 Edge 浏览器中执行操作，能够自动获取你的登录态，让 Agent 像真人一样与网页交互。

<Callout type="tip">
建议在主力工作电脑上部署 Kimi WebBridge，以获得最佳的浏览器自动化体验。
</Callout>

<Callout type="info">
WebBridge 通过本地桥接服务和浏览器扩展协同工作，所有执行都在你本地完成，登录态和网页内容不会离开你的设备。
</Callout>

<Frames
  src="./images/介绍图.png"
  alt="介绍图"
/>

| 项目 | 系统要求 |
|------|------|
| 操作系统 | macOS 或 Windows |
| 浏览器 | Chrome 或 Edge |
| 网络 | 需要稳定的网络连接 |
| 配套应用 | Kimi Claw Desktop 或其他 Local Agent |

## Step 1: 下载 Kimi WebBridge 插件

你可以通过以下方式下载：

**方式一：应用商店安装**

- Chrome 用户：前往 [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Edge 用户：前往 [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**方式二：手动安装**

如果无法访问应用商店，可以使用手动安装方式。

前往 [Kimi WebBridge 官网](https://www.kimi.com/zh-cn/features/webbridge)下载扩展包，然后根据你的浏览器操作：

**Chrome：**

1. 在地址栏打开 `chrome://extensions/`
2. 开启右上角的"开发者模式"
3. 点击"加载已解压的扩展程序"，选择解压后的文件夹

**Edge：**

1. 在地址栏打开 `edge://extensions/`
2. 开启左下角的"开发人员模式"
3. 点击"加载解压缩的扩展"，选择解压后的文件夹

## Step 2: 选择使用方式并完成配置

### 方式一：搭配 Kimi Claw Desktop

1. 下载 Kimi 桌面版（通过官网下载，支持 macOS / Windows）
   - Kimi Claw桌面版仅支持 **Allegretto 及以上**计划，详见 [Kimi 会员计划](https://www.kimi.com/membership/pricing)。

2. 部署 Kimi Claw
   1. 打开 Kimi 桌面版，在左侧侧边栏找到 Kimi Claw，点击"添加 Claw"
   2. 选择"在我的电脑部署"
   3. 部署成功后，浏览器插件将自动连接

<Callout type="warning">
当前每个用户账号下，最多支持部署 1 个 Kimi Claw Desktop。若你在其他电脑上曾经部署过，则会和你确认是否要断开旧 Claw 的连接，你可以按需选择。
</Callout>

<Frames
  src="./images/使用步骤.png"
  alt="部署步骤"
/>

3. 部署成功后即可在 Kimi Claw 中发送指令，例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/Kimi WebBridge 帮我打开小红书，搜索关于 Kimi K2.6 发布的帖子",
    },
  ]}
/>

### 方式二：搭配其他 Local Agent

支持 Claude Code、Codex、Cursor、Kimi Code、Hermers Claw 等。

1. 在 Agent 中发送以下指令：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

2. 开始使用

插件连接成功后即可发送指令，例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/Kimi WebBridge 帮我打开小红书，搜索关于 Kimi K2.6 发布的帖子",
    },
  ]}
/>
