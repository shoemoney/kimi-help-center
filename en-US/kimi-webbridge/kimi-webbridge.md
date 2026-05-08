---
title: "Kimi WebBridge Introduction"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge Introduction - Kimi Help Center"
  description="Kimi WebBridge is a browser extension designed for AI Agents. It runs directly in your Chrome or Edge browser, leveraging your existing login sessions to let Agents interact with web pages like a human."
  ogType="article"
/>

Kimi WebBridge is a browser extension designed for AI Agents. Unlike cloud-based browser automation solutions, Kimi WebBridge runs directly in your Chrome or Edge browser, automatically leveraging your existing login sessions to let Agents interact with web pages like a human.

<Callout type="tip">
We recommend deploying Kimi WebBridge on your primary work computer for the best browser automation experience.
</Callout>

<Callout type="info">
WebBridge works through a local bridge service and a browser extension. All execution happens locally on your device—login states and web page content never leave your machine.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge Introduction"
/>

## Download and installation

### Step 1: download the Kimi WebBridge extension

You can download it through the following methods:

**Method 1: install from web store**

- For Chrome users: Go to [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- For Edge users: Go to [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Method 2: manual installation**

If you cannot access the web store, you can use the manual installation method.

Download the extension package from the [Kimi WebBridge official website](https://www.kimi.com/features/webbridge), then follow the steps for your browser:

**Chrome:**

1. Open `chrome://extensions/` in the address bar
2. Enable "Developer mode" in the top-right corner
3. Click "Load unpacked" and select the extracted folder

**Edge:**

1. Open `edge://extensions/` in the address bar
2. Enable "Developer mode" in the bottom-left corner
3. Click "Load unpacked" and select the extracted folder

### Step 2: Choose your setup method and complete configuration

#### Method 1: pair with Kimi Claw Desktop (Recommended)

1. Download Kimi Desktop (available for macOS / Windows from the official website)
2. Deploy Kimi Claw
   1. Open Kimi Desktop, find Kimi Claw in the left sidebar, and click "Add Claw"
   2. Select "Deploy on my computer"
   3. Once deployed, the browser extension will connect automatically

<Callout type="warning">
Each user account currently supports up to 1 Kimi Claw Desktop deployment. If you have previously deployed on another computer, you will be prompted to disconnect the old Claw. You can choose according to your needs.
</Callout>

<Frames
  src="./images/deploy-step.png"
  alt="Deployment Step"
/>

#### Start Using

Once deployed, you can send instructions in Kimi Claw, for example:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Open Xiaohongshu and search for posts about the Kimi K2.6 release",
    },
  ]}
/>

#### Method 2: Pair with Other Local Agents

Supports Claude Code, Codex, Cursor, Kimi Code, Hermers Claw, and more.

1. Send the following command in your Agent:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

2. Start Using

Once the extension is connected, you can send instructions.