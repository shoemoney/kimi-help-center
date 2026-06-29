---
title: "Get Started with Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: true
preview_content: "快速 get started with Kimi Chat and learn about model selection, tool calling, and session management."
---

<SeoMeta
  title="What Is Kimi Agent Chat Mode? - Kimi Help Center"
  description="Learn how Kimi Agent chat mode differs from regular chat. Agent mode supports tool calling, file generation, and multi-step task execution, making it suitable for complex requests."
/>

# Every session starts with a conversation

You can type questions in the chat box, upload files, or switch models as needed.

Open [kimi.com](https://kimi.com), send a message, and say hello to Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "hi, kimi!",
    },
  ]}
/>

## Powered by K2.6 by default

The Kimi K2.6 open-source model is a comprehensive upgrade over Kimi K2.5, with a focus on long-horizon coding, Agent Swarm, and proactive agent capabilities. It reaches state-of-the-art performance among open-source models in coding, long-horizon execution, and a wide range of general intelligence tasks. Kimi K2.6 is also Kimi’s most capable model to date. Designed with a native multimodal architecture, it supports both visual and text input, Thinking and non-thinking modes, and both chat and Agent tasks.

This means Kimi is not only good at Q&A and conversation. It can also plan tasks independently, call tools, and complete multi-step reasoning, supporting deep thinking and execution for complex tasks.

### Official tools built into K2.6

No additional setup is required:

| Tool | What it does |
|------|----------|
| Web Search | Searches the web in real time to retrieve the latest information and updates |
| Fetch Tool | Accesses a specified URL, such as web pages, documents, images, and other online resources |
| Data Source | Connects to professional databases, supporting database list queries and data retrieval |
| Image Search | Searches by text or image to 快速 find visual content |
| IPython | Runs Python code for data analysis and visualization |
| Memory | Provides intelligent memory, recording your personal habits and preferences |

## Vision and multimodal capabilities

K2.6 supports full-scenario understanding of images, videos, PDF/Word/Excel office documents, and more. With a **native multimodal architecture** rather than an external OCR add-on, it can directly parse document content and perform intermediate to advanced office tasks, such as writing Excel formulas or generating PPT outlines/VBA code.

### Supported multimodal inputs

- **Images**: PNG, JPEG, WebP, GIF, and more (supports URL, Base64, and local files)
- **Videos**: MP4 and more (supports video_url or image sequence frames + fps parameter)
- **Documents**: PDF, Word, Excel, TXT, Markdown, and more
- **Online resources**: URL (Uniform Resource Locator), WeChat official account article links
- **Image-based image search**: Upload an image and call the image retrieval tool to search for related or similar images
- **Video understanding**: Supports video understanding, can analyze screen recordings and reproduce interaction logic
- **Visual programming**: Supports uploading screenshots or screen recordings to generate frontend code (HTML/Vue/React, etc.), and can automatically recreate web pages from design drafts

### Session output formats

- Plain text / mixed text and images: standard chat replies
- Markdown: rich text, headings, lists, tables, links
- Code blocks: HTML/Vue/React/Python/JSON/Mermaid, and more (with language identifiers)
- JSON structured data: forced JSON mode output
- Mermaid diagrams: syntax for flowcharts, sequence diagrams, mind maps, and more
- LaTeX math formulas: inline and block-level mathematical expressions
- Dual-mode output (Thinking): returns both `reasoning_content` (thinking process) and `content` (final answer)
- Tool call format: Function Calling standard format for developers

### Notes

1. **Image generation limitation**: Standard chat mode only supports searching for images and does not support directly generating images. To generate images, use Agent mode.
2. **File output limitation**: Only text output is supported, such as PPT outlines, Word body text, or code. Direct binary file output, such as `.pptx`, `.docx`, `.xlsx`, or `.pdf`, is not supported.
3. To generate images or create complex editable documents, use [Agent mode](https://www.kimi.com/agent) or combine it with a code execution tool.

## Session vs. chat turn

When you click “New chat”, imagine you’re starting a long conversation with Kimi.

| Concept | Everyday analogy | Technical definition |
|------|----------|----------|
| Session | The entire meeting, from the start of the conversation to the end | A complete chat process with a clear beginning and end |
| Turn | One exchange: you say something, Kimi replies | A back-and-forth made up of your input and Kimi’s response |

### Key differences

**Session**
- **Continuous memory**: Kimi remembers all context within the current chat
- **Cross-turn context**: Each reply refers to the previous conversation as context for the next turn
- **A clear reset point**: Clicking “New chat” starts over and clears the historical context

**Turn**
- **Cumulative count**: Turn 1, Turn 2, and so on
- **Limited memory**: If there are too many turns, such as more than 50, earlier content may be “forgotten”, especially in scenarios like long-form fiction writing or tasks with clear constraints and requirements
- **Limited by context length**: Due to token (word count) limits, the earliest content may be compressed when there are too many turns

<Callout type="tip">
**Edge case**: If a chat ends after one question and one answer, then 1 turn = 1 session.
</Callout>

## Why this distinction matters

Within the same session, every new question or instruction you enter becomes part of the context Kimi refers to in the current turn. When a conversation has too many turns and the accumulated content becomes too long, response quality may decline.

### Typical scenarios

**Scenario 1: Starting a new topic**

<ComparisonBlock
  wrong={"Suddenly asking “Help me calculate my individual income tax” inside a session where you have written a 30,000-character novel"}
  correct={"Create a new session for the tax question so Kimi does not confuse novel characters with tax-law concepts"}
/>

**Scenario 2: Processing long documents**
- After dozens of turns in one session, the AI may “forget” the rules set at the beginning or the summary of files you uploaded
- Suggested approach: actively summarize during important tasks, for example, “Summarize our current plan,” or start a new session

**Scenario 3: Understanding product limits**
- Context length limits are usually calculated by token (word count), but in everyday terms you can think of them as “turns”
- If you see a prompt to “start a new session”, it means the current session has too many turns and you need to start a new one

## Best practices

1. **Create a new session for each task**: For each independent task, such as writing a paper, researching information, or debugging code, create a separate session to avoid context interference
2. **Summarize long sessions regularly**: After more than 20 turns, ask the AI to summarize key information to prevent information loss
3. **Clear sensitive information promptly**: Chat history is retained. After finishing content involving privacy, you can delete the entire session
