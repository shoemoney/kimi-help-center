---
title: "Get Started with Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: true
preview_content: "Quickly get started with Kimi Chat and learn about model selection, tool calling, and session management."
---

<SeoMeta
  title="How to Use Kimi? Model Selection & Getting Started - Kimi Help Center"
  description="Learn about Kimi's three models (K2.6, K3, K3 Swarm), built-in tools, and multimodal capabilities to quickly get started with chat and task execution."
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

## Choose a model

Kimi offers multiple models. Click the model switch button above the input box to switch.

| Model | Thinking strength | Best for |
|-------|-------------------|----------|
| **K2.6** | Standard / High | Fast conversation and Q&A with quicker responses |
| **K3** | Low / High / Max | Chat and Agent tasks; the most capable overall |
| **K3 Swarm** | Low / High / Max | Large-scale search and batch processing, completed in one go |

<Callout type="tip">
K2.6 does not consume credits; K3 and K3 Swarm are billed by credits. See the [membership benefits](https://www.kimi.com/help/membership/membership-overview) for details.
</Callout>

### About Kimi K3

Kimi K3 is currently Kimi's most powerful model, with 2.8 trillion parameters, built on Kimi Delta Attention (KDA) and Attention Residuals, featuring **native vision** and a **1-million-token context window**. As the world's first open 3T-class model, K3 is designed for frontier intelligence across long-horizon coding, knowledge work, and reasoning, reaching leading performance in coding, long-horizon execution, and a wide range of general intelligence tasks.

### Built-in official tools

No additional setup is required:

| Tool | What it does |
|------|----------|
| Web Search | Searches the web in real time to retrieve the latest information and updates |
| Fetch Tool | Accesses a specified URL, such as web pages, documents, images, and other online resources |
| Image Search | Searches by text or image to quickly find visual content |
| IPython | Runs Python code for data analysis and visualization |
| Memory | Provides intelligent memory, recording your personal habits and preferences |

## Vision and multimodal capabilities

Kimi K3 supports full-scenario understanding of images, videos, PDF/Word/Excel office documents, and more. With a **native multimodal architecture** rather than an external OCR add-on, it can directly parse document content and perform intermediate to advanced office tasks, such as writing Excel formulas or generating PPT outlines/VBA code. Combined with native vision and a 1-million-token context window, it can handle longer and more complex multimodal materials.

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

1. **File output**: K3 can produce editable documents end-to-end (such as `.pptx`, `.docx`, `.xlsx`, `.pdf`) and other complex deliverables; K2.6 focuses on fast Q&A and only outputs text (such as PPT outlines, Word body text, or code).

<Callout type="tip">
Tip: To generate images, audio, or video, click "+" → Plugin, select the corresponding feature, and use it with **K3**. To create complex editable documents or run multi-step tasks, we recommend choosing **K3** or **K3 Swarm** for the full experience.
</Callout>

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

<Callout type="tip">
**Create a new session for each task**: For each independent task, such as writing a paper, researching information, or debugging code, create a separate session to avoid context interference.
</Callout>

<Callout type="tip">
**Summarize long sessions regularly**: After more than 20 turns, ask the AI to summarize key information to prevent information loss.
</Callout>

<Callout type="tip">
**Clear sensitive information promptly**: Chat history is retained. After finishing content involving privacy, you can delete the entire session.
</Callout>
