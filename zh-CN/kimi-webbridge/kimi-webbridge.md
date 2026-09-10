---
title: "Kimi 浏览器扩展产品介绍"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi 浏览器扩展产品介绍 - Kimi Help Center"
  description="Kimi 浏览器扩展（原 Kimi WebBridge）是面向 AI Agent 的浏览器插件，可打开网页、点击按钮、填写表单和提取信息，由 Agent 像人一样自动完成繁琐网页操作。"
  ogType="article"
/>

# Kimi 浏览器扩展产品介绍

Kimi 浏览器扩展（原 Kimi WebBridge）是面向 AI Agent 的浏览器插件，可打开网页、点击按钮、填写表单和提取信息，由 Agent 像人一样自动完成繁琐网页操作。你还可以把常用网页拆解成 CLI、录制网页操作变成 Skill，让 Agent 随时复用这些能力。

## 产品入口

Kimi 浏览器扩展有两种用法：

- **浏览器侧边栏**：点击工具栏的 Kimi 图标打开侧边栏，登录 Kimi 账号即可直接对话，让 Kimi 帮你操作当前网页。
- **本地 Agent 远程控制**：让 Kimi Work、Claude Code 等 AI 助手远程驱动扩展，自动完成网页任务。

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_CN.mp4",
      type: "video",
      caption: "Kimi 浏览器扩展视频教程",
    },
  ]}
/>

| 项目 | 系统要求 |
|------|------|
| 操作系统 | macOS 或 Windows |
| 浏览器 | Chrome 或 Edge |
| 网络 | 需要稳定的网络连接 |
| 配套应用 | Kimi Work 或其他 Local Agent |

## 下载安装

### Step 1: 下载 Kimi 浏览器扩展

你可以通过以下方式下载：

**方式一：应用商店安装**

- Chrome 用户：前往 [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Edge 用户：前往 [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**方式二：手动安装**

如果你暂时无法访问浏览器应用商店，可以使用手动安装方式。

然后根据你使用的浏览器完成安装：

**Chrome：**

1. 前往 [Kimi 浏览器扩展官网](https://www.kimi.com/zh-cn/features/webbridge) 下载插件安装包。
2. 解压下载好的文件
3. 在浏览器地址栏输入 `chrome://extensions/`
4. 打开右上角的“开发者模式”
5. 点击“加载已解压的扩展程序”
6. 在文件选择窗口中，选中解压后的 WebBridge 文件夹

<Frames
  src="./images/installation_chrome_cn.png"
  alt="installation_chrome_cn"
/>

**Edge：**

1. 前往 [Kimi 浏览器扩展官网](https://www.kimi.com/zh-cn/features/webbridge) 下载插件安装包。
2. 解压下载好的文件
3. 在浏览器地址栏输入 `edge://extensions/`
4. 打开左下角的“开发者模式”
5. 点击“加载已解压的扩展程序”
6. 在文件选择窗口中，选中解压后的 WebBridge 文件夹

<Frames
  src="./images/installation_edge_cn.png"
  alt="installation_chrome_cn"
/>

安装完成后，你会在浏览器扩展列表中看到 Kimi 浏览器扩展。为了后续使用更方便，建议将它固定到浏览器工具栏。

### Step 2: 选择使用方式并完成配置

**方式一：搭配 Kimi Work Desktop**

1. 通过[官网](https://www.kimi.com/products/kimi-work)下载 Kimi Work

2. 打开下载的 Kimi Work 桌面端，切换到 Work 模式。在插件市场里找到并安装 Kimi 浏览器扩展插件。可以在浏览器侧边栏，或 Kimi Work 中尝试发送下方指令：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 Kimi 浏览器扩展帮我打开小红书，搜索关于 Kimi K3 发布的帖子",
    },
  ]}
/>

**方式二：搭配 Local Agent**

支持 Claude Code、Codex、Cursor、Kimi Code、Hermes Claw 等。


1. 在 Agent 中直接发送以下指令，即可自动完成 Kimi 浏览器扩展安装。Agent 会根据你的操作系统自动执行对应的安装流程。

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

插件连接成功后即可发送指令，例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 Kimi 浏览器扩展帮我打开小红书，搜索关于 Kimi K3 发布的帖子",
    },
  ]}
/>
