---
title: "Kimi WebBridge Product Introduction"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge Product Introduction - Kimi Help Center"
  description="Kimi WebBridge is a browser extension designed for AI Agent. It supports Chrome and Edge, enabling Agent to interact with web pages just like a real person."
  ogType="article"
/>

# Kimi WebBridge Product Introduction

Kimi WebBridge is a browser extension designed for AI Agent. Unlike cloud-based browser automation solutions, Kimi WebBridge runs directly in the Chrome or Edge browser you are already using. It can automatically access your signed-in sessions, enabling Agent to interact with web pages just like a real person.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_CN.mp4",
      type: "video",
      caption: "Kimi WebBridge Video Tutorial",
    },
  ]}
/>

<Frames
  src="./images/introduction-cn.png"
  alt="introduction-cn"
/>

<Callout type="tip">
For the best browser automation experience, we recommend deploying Kimi WebBridge on your primary work computer.
</Callout>

<Callout type="info">
WebBridge works through a local bridge service and a browser extension. All execution happens locally, and your signed-in sessions and web page content never leave your device.
</Callout>


| Item | System Requirement |
|------|------|
| Operating system | macOS or Windows |
| Browser | Chrome or Edge |
| Network | A stable network connection is required |
| Companion app | Kimi Work or another Local Agent |

## Step 1: Download the Kimi WebBridge Extension

You can download it in either of the following ways:

**Option 1: Install from the browser store**

- Chrome users: go to the [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Edge users: go to [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Option 2: Install manually**

If you cannot access the browser store for the time being, you can install it manually.

Then complete the installation according to the browser you use:

**Chrome:**

1. Go to the [Kimi WebBridge official website](https://www.kimi.com/zh-cn/features/webbridge) to download the extension installation package.
2. Extract the downloaded file.
3. Enter `chrome://extensions/` in the browser address bar.
4. Turn on “Developer mode” in the upper-right corner.
5. Click “Load unpacked”.
6. In the file selection window, select the extracted WebBridge folder.

<Frames
  src="./images/installation_chrome_cn.png"
  alt="installation_chrome_cn"
/>

**Edge:**

1. Go to the [Kimi WebBridge official website](https://www.kimi.com/zh-cn/features/webbridge) to download the extension installation package.
2. Extract the downloaded file.
3. Enter `edge://extensions/` in the browser address bar.
4. Turn on “Developer mode” in the lower-left corner.
5. Click “Load unpacked”.
6. In the file selection window, select the extracted WebBridge folder.

<Frames
  src="./images/installation_edge_cn.png"
  alt="installation_chrome_cn"
/>

After installation, you will see WebBridge in your browser’s extension list. For easier access later, we recommend pinning it to the browser toolbar.

## Step 2: Choose a Usage Method and Complete Setup

### Option 1: Use with Kimi Work Desktop

1. Download Kimi Work from the [official website](https://www.kimi.com/products/kimi-work)

2. After installation, you can send instructions in Kimi Work, for example:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use Kimi WebBridge to open Xiaohongshu and search for posts about the Kimi K2.6 release",
    },
  ]}
/>

### Option 2: Use with a Local Agent

Supports Claude Code, Codex, Cursor, Kimi Code, Hermes Claw, and more.


1. Send the following instruction directly in Agent to automatically complete the WebBridge installation. Agent will run the appropriate installation process based on your operating system.

If you are a macOS user, use the following command:

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

If you are a Windows user, use the following command:

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

2. Start using it

After the extension is connected, you can send instructions such as:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use Kimi WebBridge to open Xiaohongshu and search for posts about the Kimi K2.6 release",
    },
  ]}
/>
