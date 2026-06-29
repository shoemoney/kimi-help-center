---
title: "FAQ"
slug: "kimi-webbridge-faq"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge Product Introduction - Kimi Help Center"
  description="Kimi WebBridge is a browser extension built for AI Agents. It supports Chrome and Edge, enabling Agents to interact with web pages like a real person."
  ogType="article"
/>

# FAQ

## Installation and Setup

### When installing the extension, it says "Cannot add app from this website"?

Please make sure you install it from an official app store (Chrome Web Store or Edge Add-ons). If you cannot access the app store, use the manual installation method provided on the official website.

### Nothing happens after running the connection command?

Check whether your network connection is working properly. If the issue persists, restart Kimi Claw Desktop and run the command again.

### Can I use it on multiple computers?

Yes. WebBridge needs to be installed and configured separately on each computer.

### Can’t find Kimi Claw Desktop?

Kimi Claw Desktop is Kimi Claw deployed on your local computer. Open Kimi Desktop, find Kimi Claw in the left sidebar, create a new Claw, and choose to deploy it to "My Computer".

## Connection and Usage

### The extension status shows not connected?

Please confirm that the Kimi WebBridge browser extension has been installed successfully, then follow the steps for your setup:

- **Kimi Desktop**: Restart Kimi Desktop and try again
- **Other Local Agents**: Send the following command again in your Agent, then restart the Agent after running it:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Installing WebBridge on Windows reports: installation failed
Kimi WebBridge supports Windows. You can run the installation command in a Linux environment:
<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### I’ve completed the installation steps, but it says it’s incompatible with Chrome when I use it. What’s going on?

If WebBridge can open web pages normally, but operations such as `snapshot`, `evaluate`, `screenshot`, and `click` keep failing, the more common cause is **a conflict with other browser extensions**.

Crawler, website assistant, screen recording, and AI assistant extensions are especially likely to affect WebBridge.

Try the following troubleshooting steps:

1. Open your browser’s extensions management page
2. Temporarily disable other extensions
3. Keep only Kimi WebBridge enabled
4. Restart the browser and try again
5. If everything works again, re-enable the other extensions one by one to identify the conflicting extension

### Will WebBridge leak my login information?

No. Everything runs locally on your device. Your login state and web page content do not leave your device. The Agent can only access the operation results you authorize.

### Why do operations sometimes fail?

Complex page structures or dynamic loading may cause operations to fail. Try simplifying your instructions, or ask the Agent to take a screenshot first to confirm the page state before performing the operation.

### Which browsers are supported?

Chrome and Edge are currently supported. We recommend using the latest version for the best experience.

## Working with Other Agents

### Besides Kimi, which Agents are supported?

WebBridge supports all Local Agents, including Claude Code, Codex, Cursor, Kimi Code, Hermers Claw, and more.

### Is the setup the same for different Agents?

The configuration command is the same: run a single curl command to complete the installation. For details, refer to the Skill configuration method for each Agent.

## Feedback and Help

If you encounter any issues or have suggestions, feel free to send us feedback.

<Callout type="tip">
The more complete your feedback, the faster we can locate and resolve the issue.
</Callout>

<Frames
  src="./images/FAQ/用户群.png"
  alt="Kimi WebBridge user group"
/>

When sending feedback, please include:

- **Browser version**: for example, Chrome 124.0.6367.82
- **WebBridge extension version**: available on the browser extensions management page
- **The AI Agent you use**: for example, Kimi Desktop, Claude Code, Cursor, etc.
- **Issue description and screenshots**: please describe the steps to reproduce the issue as clearly as possible
- **Relevant logs (if any)**: available in the extension UI or the browser console
