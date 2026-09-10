---
title: "How Kimi Browser Extension Works"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="How Kimi Browser Extension Works - Kimi Help Center"
  description="Learn how Kimi Browser Extension connects your browser to AI Agents locally, enabling secure web navigation, clicks, screenshots, and more."
  ogType="article"
/>

# How Kimi Browser Extension Works

## Workflow

Kimi Browser Extension supports two ways of use — **sidebar chat** and **remote control by a local Agent** — and works as follows:

1. **Browser Sidebar**: Click the Kimi icon in the toolbar to open the sidebar, then sign in with your Kimi account to chat directly
2. **Local Bridge Service**: A local service runs on your computer to receive instructions from the Agent
3. **Browser Extension**: Executes specific actions in the browser based on the Chrome DevTools Protocol
4. **Security Isolation**: All execution happens locally—login states and web page content never leave your device

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Extension Interface

Click the Kimi Browser Extension icon in the browser toolbar to expand the sidebar and send a task.

<Frames
  src="./images/sidebar.png"
  alt="Kimi Browser Extension sidebar"
/>

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

For more use cases, please refer to the [Kimi Browser Extension official website](https://www.kimi.com/features/webbridge).
