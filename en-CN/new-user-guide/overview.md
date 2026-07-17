---
title: "Kimi Overview"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "What is Kimi? Learn about Kimi’s core features, supported platforms, and product lineup."
---

<SeoMeta
  title="Kimi New User Guide - Kimi Help Center"
  description="Start using Kimi from scratch: learn the core features, sign-up and sign-in methods, chat tips, and common feature entry points to quickly get started with your AI assistant."
/>

# Kimi Overview

Kimi is an AI assistant developed in-house by Moonshot. It supports web-connected search, deep thinking, multimodal reasoning, and ultra-long text conversations.

Visit [Kimi.com](https://www.kimi.com/) or download the Kimi App to start chatting, creating, researching, and building applications. Developers can go to the [Kimi Open Platform](https://platform.kimi.com/) to get APIs and tools, and integrate Kimi capabilities into their own applications.

## Chat and models

Kimi offers multiple models. Click the model switch button above the input box to switch.

- **K2.6**: Fast conversation and Q&A, with thinking strength options of Standard / High and quicker responses.
- **K3**: Kimi's most powerful model, excelling at chat and Agent tasks.
- **K3 Swarm**: Excels at large-scale search and batch processing, completing large tasks in one go.

Whether to search online is decided by Kimi automatically based on your question—no manual toggle required.

## Agent

Kimi is more than a chat assistant. It is also an AI Agent that can carry out tasks autonomously:

- **[General Agent](https://www.kimi.com/agent)**: Automatically plans and completes tasks, including website generation, PPT creation, Deep Research, document and spreadsheet processing, and more.
- **[Agent Swarm](https://www.kimi.com/agent-swarm)**: Supports over 4,000 parallel tool calls and can autonomously orchestrate up to 300 Sub-agents to process tasks in parallel. Suitable for large-scale search, long-form writing, and batch processing tasks.
- **[Kimi Code](https://www.kimi.com/code)**: A coding assistant suite for developers, including a CLI tool and VS Code extension.
- **[Kimi Claw](https://www.kimi.com/bot)**: A zero-deployment cloud automation platform. No server or Docker is required; you can launch a continuously running AI Agent within 30 seconds. It includes a built-in library of 5,000+ skills (ClawHub), supports chained composition and multi-step autonomous planning, and makes complex research and data analysis workflows easy to complete.
- **[Kimi Work](https://www.kimi.com/products/kimi-work)**: A general-purpose local Agent for knowledge workers, launched with the latest Kimi beta desktop clients for Mac and Windows. Built on Kimi Code (the local coding Agent used daily by hundreds of thousands of developers) as its core, it provides fundamental local Agent capabilities such as installing and using skills (Skill) and running scheduled tasks. It also inherits the online Kimi Agent's professional skills such as website building and PPT, along with financial, research, and legal professional databases.

## Other core features

- **Featured tools**: Photo-based problem solving, voice calls, translation, and writing.
- **File processing**: Supports PDF, Word, Excel, PPT, images, TXT, and videos (up to 100 MB per file), with up to 50 files supported.
- **Quick prompts**: Add your frequently used quick prompts. Ideal for saving high-quality, reusable prompts as quick prompts.

<ColumnsContent
  columns={[
    {
      title: "Basic chat",
      description: "Chat is where everything starts. You can ask questions, upload files, and switch models.",
      pageUrl: "/new-user-guide/agentic-chat",
      type: "comment",
    },
    {
      title: "Search",
      description: "Search serves as the model’s real-time knowledge base, used to obtain timely, reliable, and traceable information.",
      pageUrl: "/new-user-guide/search",
      type: "browser",
    },
    {
      title: "Memory Space",
      description: "Saves your preferences over the long term and refers to past chats in future conversations.",
      pageUrl: "/new-user-guide/memory-space",
      type: "setting",
    },
    {
      title: "Agent",
      description: "Carries out tasks autonomously. Just state your goal—websites, documents, data analysis, and PPT are all supported.",
      pageUrl: "/agent/agent-overview",
      type: "okcomputer",
    },
  ]}
/>
