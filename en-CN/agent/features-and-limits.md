---
title: "Agent Features and Limits"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: true
preview_content: "Core capabilities, usage tips, and known limits of Agent mode."
---

<SeoMeta
  title="Kimi Agent Features and Usage Limits - Kimi Help Center"
  description="Learn about the capabilities, tool-calling options, and current limits of Kimi Agent mode so you can plan Agent tasks effectively and get the best experience."
/>

# Agent Features and Usage Limits

## Tips for Using Agent

<Callout type="tip">
Before submitting a task: provide clear background information and constraints, including the project context, use case, and any special requirements, so Kimi can understand your intent more accurately.
</Callout>

<Callout type="tip">
During execution: Kimi Agent runs asynchronously in the background. If the web page appears to stop or freeze, do not click “Stop output”, as this will interrupt the task. You can leave the page; the task will continue running in the background, and the system will notify you when it is complete. For tasks expected to take longer, such as Agent Swarm, please wait patiently.
</Callout>

<Callout type="tip">
Multi-turn conversations and task adjustments: during multi-turn conversations and revisions, Agent may “forget” some early details. We recommend outlining the task structure and key points first, then making targeted adjustments.
</Callout>

<Callout type="tip">
Breaking down large tasks: for large or complex tasks, we recommend splitting them into 2–3 stages and submitting them to Kimi in batches, or using Agent Swarm.
</Callout>

<Callout type="tip">
File output limits: in general Agent scenarios, only one file, such as a document or spreadsheet, can usually be output at a time. If you need multiple files, such as both Word and PPT, use Agent Swarm.
</Callout>

<Callout type="tip">
Context limits and output balance: Agent has a 128K-token context window, which can hold roughly 100,000 Chinese characters. When working with a large number of files, balance both input and output requirements.
</Callout>

## Notes

- Execution time: in Agent mode, a single task usually takes 5–20 minutes to complete, and Agent Swarm may take longer. You can leave the current page, but do not click stop to interrupt the task.
- Credit usage: using Agent to run tasks deducts credits based on actual token consumption. Agent shares the same credit pool with other membership features. Kimi Code also deducts from this credit pool and has an additional limit of 5 hours per week, which applies only to Kimi Code.
- Simple tasks: for simple Q&A, we recommend using regular chat mode for faster responses.
- Content compliance: Agent must be used in accordance with the [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). It does not support generating non-compliant content. If non-compliant content is entered, Kimi will suspend or stop the service.

## FAQ

**Q: What can Agent do?**

Agent can call a variety of tools to support the following needs:

- **Text generation and editing**: generate articles, reports, documents, and more, with support for multiple writing styles and formats.
- **Web development**: write HTML, with support for app UI design, website deployment, data visualization, and more.
- **PPT generation**: use a dedicated web-based PPT tool to generate complete presentations.
- **Programming assistance**: write and debug code in multiple programming languages.

**Q: Why doesn’t the website created by Agent work?**

A complete website usually consists of three parts: a front-end interface, back-end services, and data storage.
In April 2026, Agent and Websites were upgraded with full-stack capabilities.
If your requirements involve back-end features such as user login, data storage, or dynamic interactions, Agent already supports them.

However, when submitting the task, you need to clearly specify which parts Agent should complete.

**Feature reference**
| Feature        | Description                                                |
|----------------|------------------------------------------------------------|
| Conversational website building | Describe your requirements in natural language, and AI automatically generates the website |
| Image/video understanding | Upload design drafts, screenshots, or screen recordings, and AI automatically interprets them and generates HTML pages |
| Full-stack preview | Supports full front-end and back-end preview; in some scenarios, the sandbox environment must be started manually |
| Persistent storage | Automatically builds a back-end database, with support for persistent data storage and management |
| User login | Built-in user authentication system, with support for Kimi account login. More login methods are coming soon |
| Version management | AI automatically commits versions and supports rolling back to any previous version |
| Multi-turn revisions | Supports multiple rounds of website version revisions and lets you view the results of different versions |
| One-click publishing | After manual publishing, the site is deployed to a publicly accessible address; before publishing, it is available for preview only |
| Code export | Supports downloading the complete project files as a package for self-managed deployment |

**Q: What are Agent’s task deliverables?**

- Complete task execution files
- Deployed web pages
- A downloadable ZIP package located in the `/mnt/okcomputer/output/` directory

**Q: What is Agent’s context length?**

The context length used by Agent is **128K tokens** (approximately 80,000–100,000 Chinese characters).

A token is the basic unit used by LLMs to process text, and it is not the same as a character or word count. One Chinese character usually corresponds to 1.5–2 tokens, while one English word corresponds to about 1–2 tokens. For an accurate estimate, you can use the [Kimi Open Platform Token Estimation API](https://platform.kimi.com/docs/pricing/chat).

The context window includes everything Agent can “see” in a single task, including your instructions, records of Agent’s tool calls, results returned by tools, and Agent’s own output. When a task involves extensive web scraping, file reading, or multi-step tool calls, the context is consumed more quickly.

<Callout type="tip">
If the task content exceeds the context limit, Agent will not be able to process the excess content. We recommend splitting long documents and processing them step by step.
</Callout>
