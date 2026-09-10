---
title: "Kimi 浏览器扩展简介"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi 浏览器扩展简介 - Kimi 帮助中心"
  description="Kimi 浏览器扩展（原 Kimi WebBridge）是面向 AI Agent 的浏览器插件，可打开网页、点击按钮、填写表单和提取信息，由 Agent 像人一样自动完成繁琐网页操作。"
  ogType="article"
/>

# Kimi 浏览器扩展简介

Kimi 浏览器扩展（原 Kimi WebBridge）是面向 AI Agent 的浏览器插件，可打开网页、点击按钮、填写表单和提取信息，由 Agent 像人一样自动完成繁琐网页操作。你还可以把常用网页拆解成 CLI、录制网页操作变成 Skill，让 Agent 随时复用这些能力。

## 产品入口

Kimi 浏览器扩展有两种用法：

- **浏览器侧边栏**：点击工具栏的 Kimi 图标打开侧边栏，登录 Kimi 账号即可直接对话，让 Kimi 帮你操作当前网页。
- **本地 Agent 远程控制**：让 Kimi Work、Claude Code 等 AI 助手远程驱动扩展，自动完成网页任务。

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi 浏览器扩展教程",
    },
  ]}
/>

## 下载安装

### 第 1 步：下载 Kimi 浏览器扩展

你可以通过以下方式下载：

**方式 1：从应用商店安装**

- Chrome 用户：前往 [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Edge 用户：前往 [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**方式 2：手动安装**

如果你无法访问应用商店，可以使用手动安装方式。Chrome 和 Edge 的流程一致：

1. 前往 [Kimi 浏览器扩展官网](https://www.kimi.com/features/webbridge) 下载插件安装包，并解压下载好的文件
2. 在浏览器地址栏输入扩展管理页地址：
   - Chrome：`chrome://extensions/`
   - Edge：`edge://extensions/`
3. 打开「开发者模式」（Chrome 在页面右上角，Edge 在页面左下角）
4. 点击「加载已解压的扩展程序」
5. 在文件选择窗口中，选中解压后的 WebBridge 文件夹

<Frames
  src="./images/installation_chrome_en.png"
  alt="以 Chrome 为例的手动安装流程；Edge 界面基本一致"
/>

安装完成后，你应该能在浏览器的扩展列表中看到 Kimi 浏览器扩展。为方便使用，建议将它固定到浏览器工具栏。

### 第 2 步：选择安装方式并完成配置

**方式 1：配合 Kimi Work 桌面端使用**

1. 从[官方网站](https://www.kimi.com/products/kimi-work)下载 Kimi Work

2. 打开下载的 Kimi Work 桌面端，切换到 Work 模式。在插件市场里找到并安装 Kimi 浏览器扩展插件。可以在浏览器侧边栏，或 Kimi Work 中尝试发送下方指令：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 Kimi 浏览器扩展打开 Xiaohongshu，搜索关于 Kimi K3 发布的帖子",
    },
  ]}
/>

**方式 2：与本地 Agent 配对**

支持 Claude Code、Codex、Cursor、Kimi Code、Hermes Claw 等。

1. 直接在 Agent 中发送以下命令，即可自动安装 Kimi 浏览器扩展。Agent 会根据你的操作系统运行相应的安装流程。

如果你是 macOS 用户，请使用以下命令：

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

如果你是 Windows 用户，请使用以下命令：

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. 开始使用

扩展连接成功后，你就可以发送指令了。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 Kimi 浏览器扩展打开 X.com，并搜索关于 Kimi K3 发布的帖子",
    },
  ]}
/>
