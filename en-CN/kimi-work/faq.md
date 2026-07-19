---
title: "FAQ"
slug: "kimi-work-faq"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Work FAQ - Kimi Help Center"
  description="Kimi Work FAQ: how it differs from the web version, permission control when accessing local files, what WebBridge browser automation can do, and how scheduled tasks run."
/>

# Kimi Work FAQ

## What's the difference between Kimi Work and the web version?

While the Kimi web app is perfect for quick chat and queries, Kimi Work is a local Agent designed for deep workflows. It reads and handles your local folders, navigates the web autonomously via WebBridge, runs Python code in the background, and executes scheduled tasks. It's a system-level digital employee.

## How does Kimi Work protect my privacy when accessing local files?

You have absolute control over your files. Kimi Work provides permission control, and you choose how to authorize:

- **Request permission**: ask for authorization before acting — Kimi prompts you for explicit authorization before it modifies, overwrites, or runs code within your local files;
- **Allow all**: run directly without asking for authorization.

When you choose "Request permission", nothing happens without your consent.

## What exactly can WebBridge (browser automation) do for me?

WebBridge gives Kimi the ability to use a browser like a human. You can tell it to check the latest news on a website and summarize it, or scrape historical stock data to your local Excel. It clicks, scrolls, and extracts data autonomously, saving you hours of manual work.

## What can I do with scheduled tasks? Do they run if my computer is asleep?

The built-in Cron scheduler supports LLM Agent calls, Python/Shell executions, and more. You can trigger tasks daily, hourly, or conditionally. To ensure tasks run seamlessly overnight, simply toggle the "Keep Computer Awake" option in your settings.
