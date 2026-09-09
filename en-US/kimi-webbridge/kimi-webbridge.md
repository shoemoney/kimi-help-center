---
title: "Kimi Browser Extension Introduction"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Browser Extension Introduction - Kimi Help Center"
  description="Kimi Browser Extension (formerly Kimi WebBridge) is a browser extension built for AI agents. It can open pages, click buttons, fill out forms, and extract information, letting agents handle tedious web tasks like a human."
  ogType="article"
/>

# Kimi Browser Extension Introduction

Kimi Browser Extension (formerly Kimi WebBridge) is a browser extension built for AI agents. It can open pages, click buttons, fill out forms, and extract information, letting an agent handle tedious web tasks just like a person would. You can also break down frequently used websites into CLIs and turn recorded web operations into Skills for your agent to reuse.

## Two ways to use

Kimi Browser Extension offers two ways to use it:

- **Browser sidebar**: Click the Kimi icon in the toolbar to open the sidebar, then sign in with a Kimi membership account to chat directly and let Kimi operate the current page for you.
- **Remote control by a local Agent**: Let AI agents like Kimi Work or Claude Code drive the extension remotely to automate web tasks.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi Browser Extension tutorial",
    },
  ]}
/>

## Download and install

### Step 1: download Kimi Browser Extension

You can download it through the following methods:

**Method 1: install from web store**

- For Chrome users: Go to [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- For Edge users: Go to [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Method 2: manual installation**

If you cannot access the web store, you can use the manual installation method.

Then follow the steps for your browser:

**Chrome:**

1. Download the extension package from the [Kimi Browser Extension official website](https://www.kimi.com/features/webbridge).
2. Extract the downloaded file
3. Open `chrome://extensions/` in the address bar
4. Enable "Developer mode" in the top-right corner
5. Click "Load unpacked"
6. In the file picker, select the extracted WebBridge folder

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Download the extension package from the [Kimi Browser Extension official website](https://www.kimi.com/features/webbridge).
2. Extract the downloaded file
3. Open `edge://extensions/` in the address bar
4. Enable "Developer mode" in the bottom-left corner
5. Click "Load unpacked"
6. In the file picker, select the extracted WebBridge folder

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

After installation, you should see Kimi Browser Extension in your browser's extensions list. For easier access, we recommend pinning it to the browser toolbar.

### Step 2: Choose your setup method and complete configuration

#### Method 1: Using with Kimi Work Desktop

1. Download Kimi Work from the [official website](https://www.kimi.com/products/kimi-work)

2. Once installed, you can open the extension sidebar and send instructions, for example:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use Kimi Browser Extension and open Xiaohongshu, search for posts about the Kimi K3 release",
    },
  ]}
/>

#### Method 2: Pair with Local Agents

Supports Claude Code, Codex, Cursor, Kimi Code, Hermes Claw, and more.

1. Send the following command directly in the Agent to automatically install Kimi Browser Extension. The Agent will run the appropriate setup based on your operating system.

If you are a macOS user, use the command below:

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

If you are a Windows user, use the command below:

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

2. Start Using

Once the extension is connected, you can send instructions.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use Kimi Browser Extension open X.com and search for posts about the Kimi K3 release",
    },
  ]}
/>
