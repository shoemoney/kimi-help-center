---
title: "How Kimi Browser Extension Works"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Browser Extension Product Introduction - Kimi Help Center"
  description="Kimi Browser Extension is a browser extension designed for AI Agent, supporting Chrome and Edge so Agent can interact with web pages like a real person."
  ogType="article"
/>

# How Kimi Browser Extension Works

## How It Works

Kimi Browser Extension supports two ways of use — **sidebar chat** and **remote control by a local Agent** — and works as follows:

1. **Browser Sidebar**: Click the Kimi icon in the toolbar to open the sidebar, then sign in with a Kimi membership account to chat directly
2. **Local Bridge Service**: A local service runs on your computer to receive instructions from the Agent
3. **Browser Extension**: Executes specific actions in the browser based on the Chrome DevTools Protocol
4. **Security Isolation**: All execution happens locally—login states and web page content never leave your device

<Frames
  src="./images/工作原理.png"
  alt="How it works"
/>

## Extension Interface

Click the Kimi Browser Extension icon in the browser toolbar to expand the sidebar and send a task.

<Frames
  src="./images/sidebar.png"
  alt="Kimi Browser Extension sidebar"
/>

## Use Cases

| Feature | Description |
|------|------|
| Web navigation | Automatically open a specified URL |
| Element clicks | Simulate clicks on buttons, links, and other page elements |
| Form filling | Automatically enter text and select options |
| Page screenshots | Capture the current page or a specific area |
| Content extraction | Read page text, tables, and other structured data |
| Persistent login sessions | Use login states already saved in the browser |

- E-commerce price comparison: Search for products across multiple e-commerce platforms and compare prices automatically
- Information research: Browse web pages in depth and extract structured information
- Form filling: Automatically complete various online forms
- Data entry: Automatically organize web data and enter it in a specified format

For more examples, see the [Kimi Browser Extension official website](https://www.kimi.com/zh-cn/features/webbridge).
