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

## Download and installation

### Step 1: download the Kimi WebBridge extension

You can download it through the following methods:

**Method 1: install from web store**

- For Chrome users: Go to the Chrome Web Store and search for "Kimi WebBridge"
- For Edge users: Go to Edge Add-ons and search for "Kimi WebBridge"

**Method 2: manual installation**

If you cannot access the web store, you can use the manual installation method.

Download the extension package from the [Kimi WebBridge official website](https://www.kimi.com/webbridge), then follow the steps for your browser:

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

Once the extension is connected, you can send instructions, for example:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Open Xiaohongshu and search for posts about the Kimi K2.6 release",
    },
  ]}
/>

## How it works？

Kimi WebBridge operates as follows:

1. **Local Bridge Service**: A local service runs on your computer to receive instructions from the Agent
2. **Browser Extension**: Executes specific actions in the browser based on the Chrome DevTools Protocol
3. **Security Isolation**: All execution happens locally—login states and web page content never leave your device

Execution flow:

- The Agent sends instructions to the local bridge service
- The extension performs navigation, clicks, screenshots, page reading, and other operations in the browser
- Execution results are returned to the Agent

## Extension Interface

Click the WebBridge icon in the browser toolbar to check the current connection status:

**Connected**: WebBridge is working properly and can collaborate with the Agent>
**Disconnected**: Check your configuration or re-run the connection command

## Features

| Feature | Description |
|---------|-------------|
| Web Navigation | Automatically open specified URLs |
| Element Clicking | Simulate clicks on buttons, links, and other page elements |
| Form Filling | Automatically input text and select options |
| Page Screenshots | Capture the current page or a specific area |
| Content Extraction | Read page text, tables, and other structured data |
| Login Session Persistence | Use existing login states saved in the browser |

Use cases:

- E-commerce price comparison: Automatically search for products and compare prices across multiple platforms
- Information research: Deeply browse web pages and extract structured information
- Form filling: Automatically fill out various online forms
- Data entry: Automatically organize and enter web data into a specified format

For more use cases, please refer to the [Kimi WebBridge official website](https://www.kimi.com/webbridge).

## FAQ

### Installation and configuration

**Q: See "Cannot add apps from this website" when installing the extension?**

A: Please make sure to install from the official web store (Chrome Web Store or Edge Add-ons). If you cannot access the web store, use the manual installation method provided on the official website.

**Q: Nothing happens after running the connection command?**

A: Please check your internet connection and ensure you can access the `kimi-web-img.moonshot.cn` domain. If the issue persists, try restarting Kimi Claw Desktop and run the command again.

**Q: Can I use it on multiple computers?**

A: Yes, but each computer needs to be installed and configured separately.

**Q: I cannot find Kimi Claw Desktop?**

A: Kimi Claw Desktop is a Kimi Claw deployed on your local computer. Open Kimi Desktop, find Kimi Claw in the left sidebar, create a new Claw, and select "Deploy on my computer".

### Connection and usage

**Q: The extension status shows "Disconnected"?**

A: Please confirm that the Kimi WebBridge browser extension is successfully installed, then follow the steps for your setup method:

- **Kimi Desktop**: Restart Kimi Desktop and try again
- **Other Local Agents**: Resend the following command in your Agent, then restart the Agent after it runs:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

**Q: Will WebBridge leak my login information?**

A: No. All execution happens locally on your device—login states and web page content never leave your machine. The Agent can only access the operation results you authorize.

**Q: Why do operations fail?**

A: Complex page structures or dynamic loading may cause operations to fail. Try simplifying your instructions, or ask the Agent to take a screenshot first to confirm the page state before executing.

**Q: Which browsers are supported?**

A: Currently supports Chrome and Edge. We recommend using the latest version for the best experience.

### Working with other agents

**Q: Which other Agents are supported?**

A: WebBridge supports all Local Agents, including Claude Code, Codex, Cursor, Kimi Code, Hermers Claw, and more.

**Q: Is the configuration the same for different Agents?**

A: The setup command is the same for all—run a single curl command to install. Refer to each Agent's Skill configuration for details.
