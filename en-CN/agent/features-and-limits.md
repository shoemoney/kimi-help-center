---
title: "Agent Features and Limits"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: true
preview_content: "Core features, usage tips, and known limitations of Agent mode."
---

<SeoMeta
  title="Kimi Agent Features and Usage Limits - Kimi Help Center"
  description="Learn in detail what Kimi Agent mode can do, how it calls tools, and its current usage limits, so you can plan Agent tasks effectively and get the best experience."
/>

# Agent Features and Usage Limits

## Tips for Using Agent

<Callout type="tip">
Before submitting a task: provide clear background information and constraints, including the project context, usage scenario, and any special requirements, so Kimi can understand your intent more accurately.
</Callout>

<Callout type="tip">
During execution: Kimi Agent runs asynchronously in the background. If the web page appears to stop or freeze, do not click “Stop generating,” as this will interrupt the task. You can leave the page; the task will continue running in the background, and the system will notify you when it is complete. For tasks that are expected to take longer, such as Agent Swarm, please wait patiently.
</Callout>

<Callout type="tip">
Multi-turn conversations and task adjustments: during multi-turn conversations and revisions, Agent may “forget” some details from the early stages. We recommend first organizing the task framework and key points, then making local adjustments.
</Callout>

<Callout type="tip">
Splitting large tasks: for large and complex tasks, we recommend splitting them into 2–3 stages and submitting them to Kimi in batches, or using Agent Swarm.
</Callout>

<Callout type="tip">
File output limit: in general Agent scenarios, usually only one file can be output at a time, such as a document or spreadsheet. If you need multiple files, for example both Word and PPT, use Agent Swarm.
</Callout>

<Callout type="tip">
Context limits and output balance: Agent has a context window of 128K tokens, which can hold about 100,000 Chinese characters. When processing many files, you need to balance both input and output.
</Callout>

## Notes

- Execution time: in Agent mode, a single task usually takes 5–20 minutes to execute, and Agent Swarm may take longer. You can leave the current page, but do not click Stop, as this will interrupt the task.
- Credit usage: using Agent to execute tasks will deduct credits based on the actual token consumption. Agent shares one credit pool with other membership features, while Kimi Code uses a separate credit pool.
- Simple tasks: for simple Q&A, we recommend using regular chat mode for a faster response.
- Content compliance: Agent features must comply with the [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2) and do not support generating non-compliant content. If non-compliant content is entered, Kimi will suspend or stop the service.

## FAQ

**Q: What can Agent do?**

Agent can call multiple tools to meet the following needs:

- **Text generation and editing**: generate articles, reports, documents, and more, with support for various writing styles and formats.
- **Web development**: write HTML, with support for APP interface design, web deployment, data visualization, and more.
- **PPT generation**: provides a standalone web-based PPT tool that can generate complete presentations.
- **Programming assistance**: supports code writing and debugging in multiple programming languages.

**Q: Why doesn’t the web page created by Agent work?**

A complete web page usually consists of three parts: the frontend interface, backend services, and data storage.
In April 2026, Agent and website capabilities were upgraded to full-stack.
If your requirements involve backend features such as user login, data storage, or dynamic interactions, Agent now supports them.

However, when executing a task, you need to clearly specify which parts you want Agent to complete.

**Feature reference**
| Feature        | Description                                                |
|----------------|------------------------------------------------------------|
| Conversational website building | Describe your needs in natural language, and AI automatically generates the website |
| Image/video understanding | Upload design drafts, screenshots, or screen recordings, and AI automatically parses them and generates HTML pages |
| Full-stack preview | Supports complete frontend and backend preview; some scenarios require manually starting the sandbox environment |
| Persistent storage | Automatically builds a backend database and supports persistent data storage and management |
| User login | Built-in user authentication system with Kimi account login support; more login methods are coming soon |
| Version control | AI automatically commits versions and supports rolling back to any previous version |
| Multi-turn revisions | Supports multiple rounds of web page version revisions and lets you view the effects of different versions |
| One-click publishing | After manual publishing, deploys to a publicly accessible address; before publishing, access is limited to preview only |
| Code export | Supports downloading the complete project files as a package for self-managed deployment |

**Q: What are the deliverables for an Agent task?**

- Complete task execution files
- A deployed web page
- A downloadable Zip package, located in the `/mnt/okcomputer/output/` directory

**Q: What is Agent’s context length?**

The context length used by Agent is **128K tokens** (about 80,000–100,000 Chinese characters).

A token is the basic unit an LLM uses to process text; it is not the same as a character or word count. One Chinese character usually corresponds to 1.5–2 tokens, while one English word corresponds to about 1–2 tokens. For precise estimation, use the [Kimi Open Platform Token Estimation API](https://platform.kimi.com/docs/pricing/chat).

The context window contains everything Agent can “see” in a single task, including your instructions, the process logs of Agent calling tools, the results returned by tools, and Agent’s own output. When a task involves extensive web page scraping, file reading, or multi-step tool calls, the context is consumed more quickly.

<Callout type="tip">
If the task content exceeds the context limit, Agent will not be able to process the excess content. We recommend splitting long documents and processing them step by step.
</Callout>
