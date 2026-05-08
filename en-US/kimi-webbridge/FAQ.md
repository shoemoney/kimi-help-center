---
title: "FAQ"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge FAQ - Kimi Help Center"
  description="Frequently asked questions about Kimi WebBridge installation, connection, and usage with multiple browsers and Local Agents."
  ogType="article"
/>

# FAQ

## Installation and configuration

**Q: See "Cannot add apps from this website" when installing the extension?**

A: Please make sure to install from the official web store (Chrome Web Store or Edge Add-ons). If you cannot access the web store, use the manual installation method provided on the official website.

**Q: Nothing happens after running the connection command?**

A: Please check your internet connection and ensure you can access the `kimi-web-img.moonshot.cn` domain. If the issue persists, try restarting Kimi Claw Desktop and run the command again.

**Q: Can I use it on multiple computers?**

A: Yes, but each computer needs to be installed and configured separately.

**Q: I cannot find Kimi Claw Desktop?**

A: Kimi Claw Desktop is a Kimi Claw deployed on your local computer. Open Kimi Desktop, find Kimi Claw in the left sidebar, create a new Claw, and select "Deploy on my computer".

## Connection and usage

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

## Working with other agents

**Q: Which other Agents are supported?**

A: WebBridge supports all Local Agents, including Claude Code, Codex, Cursor, Kimi Code, Hermers Claw, and more.

**Q: Is the configuration the same for different Agents?**

A: The setup command is the same for all—run a single curl command to install. Refer to each Agent's Skill configuration for details.
