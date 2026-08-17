---
title: "Kimi WebBridge 简介"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge 简介 - Kimi 帮助中心"
  description="Kimi WebBridge 是一款为 AI Agent 设计的浏览器扩展。它直接运行在你的 Chrome 或 Edge 浏览器中，并利用你现有的登录状态，让 Agent 像真人一样与网页交互。"
  ogType="article"
/>

# Kimi WebBridge 简介

Kimi WebBridge 是一款为 AI Agent 设计的浏览器扩展。不同于基于云端的浏览器自动化方案，Kimi WebBridge 直接运行在你的 Chrome 或 Edge 浏览器中，并会自动利用你现有的登录状态，让 Agent 像真人一样与网页交互。

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi WebBridge 教程",
    },
  ]}
/>

<Callout type="tip">
为获得最佳浏览器自动化体验，我们建议将 Kimi WebBridge 部署在你的主要工作电脑上。
</Callout>

<Callout type="info">
WebBridge 通过本地桥接服务和浏览器扩展运行。所有执行过程都在你的设备本地完成——登录状态和网页内容都不会离开你的电脑。
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge 简介"
/>

## 第 1 步：下载 Kimi WebBridge 扩展

你可以通过以下方式下载：

**方式 1：从应用商店安装**

- Chrome 用户：前往 [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Edge 用户：前往 [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**方式 2：手动安装**

如果你无法访问应用商店，可以使用手动安装方式。

然后按你的浏览器完成以下步骤：

**Chrome：**

1. 从 [Kimi WebBridge 官方网站](https://www.kimi.com/features/webbridge)下载扩展安装包。
2. 解压下载的文件
3. 在地址栏中打开 `chrome://extensions/`
4. 在右上角启用“Developer mode”
5. 点击“Load unpacked”
6. 在文件选择器中，选择解压后的 WebBridge 文件夹

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge：**

1. 从 [Kimi WebBridge 官方网站](https://www.kimi.com/features/webbridge)下载扩展安装包。
2. 解压下载的文件
3. 在地址栏中打开 `edge://extensions/`
4. 在左下角启用“Developer mode”
5. 点击“Load unpacked”
6. 在文件选择器中，选择解压后的 WebBridge 文件夹

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

安装完成后，你应该能在浏览器的扩展列表中看到 WebBridge。为方便使用，建议将它固定到浏览器工具栏。

## 第 2 步：选择安装方式并完成配置

### 方式 1：配合 Kimi Work 桌面端使用

1. 从<a href="https://www.kimi.com/products/kimi-work">官方网站</a>下载 Kimi Work

2. 安装完成后，你可以在 Kimi Work 中发送指令，例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 Kimi Webbridge 打开 Xiaohongshu，搜索关于 Kimi K2.6 发布的帖子",
    },
  ]}
/>

### 方式 2：与本地 Agent 配对

支持 Claude Code、Codex、Cursor、Kimi Code、Hermes Claw 等。

1. 直接在 Agent 中发送以下命令，即可自动安装 WebBridge。Agent 会根据你的操作系统运行相应的安装流程。

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
      content: "使用 Kimi WebBridge 打开 X.com，并搜索关于 Kimi K2.6 发布的帖子",
    },
  ]}
/>
