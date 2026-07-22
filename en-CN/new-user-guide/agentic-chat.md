---
title: "Getting Started with Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: true
preview_content: "Get up to speed with Kimi chat, including model selection, tool use, and session management."
---

<SeoMeta
  title="How to Use Kimi: Model Selection and Chat Basics - Kimi Help Center"
  description="Learn about Kimi’s three model options (K2.6, K3, and K3 Cluster), built-in tools, and multimodal capabilities, and quickly get started with chat and task execution."
/>

# A session is where everything begins

You can type a question in the chat box, upload files, or switch between models as needed.

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

Kimi offers multiple model options. Click the model switcher above the input box to switch models.

| Model | Thinking strength | Best for |
|------|----------|----------|
| **K2.6** | Standard / Advanced | Quick conversations and Q&A, with faster responses |
| **K3** | Standard / Advanced / Max | Conversations and Agent tasks, with the strongest overall capability |
| **K3 Cluster** | Standard / Advanced / Max | Large-scale search and batch processing, completing massive tasks in one go |

<Callout type="tip">
K2.6 does not consume membership credits in chat sessions (it still consumes credits when used as a K2.6 Agent in Kimi Work); K3 and K3 Cluster are billed by credit. For details, see [Membership Benefits](https://www.kimi.com/help/membership/membership-overview).
</Callout>

### About Kimi K3

Kimi K3 is Kimi’s most powerful model to date. With 2.8 trillion parameters, it is built on Kimi Delta Attention (KDA) and Attention Residuals, and features **native vision capabilities** and a **1 million-token context window**. As the world’s first open 3T-class model, K3 is designed for frontier AI scenarios such as long-horizon coding, knowledge work, and reasoning. It delivers leading performance in coding, long-horizon execution, and a wide range of general intelligence tasks.

### Built-in official tools

Ready to use without any additional setup:

| Tool | What it does |
|------|----------|
| Web Search | Search the web in real time for the latest news and updates |
| Fetch Tool | Access a specified URL directly, including webpages, documents, images, and other online resources |
| Image Search | Search images by text or by image to quickly locate visual content |
| IPython | Run Python code for data analysis and visualization |
| Memory | Smart memory that records your personal habits and preferences |

## Vision and multimodal capabilities

Kimi K3 understands images, videos, PDF/Word/Excel office documents, and more across a wide range of scenarios. Built with a **native multimodal architecture** (not an add-on OCR module), it can parse document content directly and perform mid- to advanced-level office tasks, such as writing Excel formulas and generating PPT outlines or VBA code. Combined with native vision capabilities and a 1 million-token context window, it can handle longer and more complex multimodal materials.

### Supported multimodal inputs

- **Images**: PNG, JPEG, WebP, GIF, and more (supports URL, Base64, and local files)
- **Videos**: MP4 and more (supports `video_url` or image sequence frames + the `fps` parameter)
- **Documents**: PDF, Word, Excel, TXT, Markdown, and more
- **Online resources**: URLs (Uniform Resource Locators) and Official Account article links
- **Image-to-image search**: Upload an image and call the image retrieval tool to search for related or similar images
- **Video understanding**: Understand videos, analyze screen recordings, and reproduce interaction logic
- **Visual programming**: Upload screenshots or screen recordings to generate frontend code (HTML/Vue/React, etc.), and automatically recreate webpages from design drafts

### Session output formats

- Plain text / mixed text and images: standard chat replies
- Markdown: rich text, headings, lists, tables, and links
- Code blocks: HTML/Vue/React/Python/JSON/Mermaid, etc. (with language identifiers)
- JSON structured data: forced JSON mode output
- Mermaid diagrams: syntax for flowcharts, sequence diagrams, mind maps, and more
- LaTeX math formulas: inline and block-level mathematical expressions
- Dual-mode output (Thinking): returns both `reasoning_content` (reasoning process) and `content` (final answer)
- Tool call format: Function Calling standard format (for developers)

### Notes

1. **File generation**: K3 can produce complex, end-to-end editable documents such as `.pptx`, `.docx`, `.xlsx`, and `.pdf`; K2.6 is designed more for quick Q&A and outputs text only, such as PPT outlines, Word body text, and code.

<Callout type="tip">
Tip: To generate images, audio, or video, click “+” → Plugin, select the corresponding feature, and use it with **K3**. For complex editable documents or multi-step tasks, we recommend **K3** or **K3 Cluster** for the full experience.
</Callout>

## Sessions vs. turns

When you click “New session”, think of it as starting a long conversation with Kimi.

| Concept | Simple analogy | Technical definition |
|------|----------|----------|
| Session | An entire meeting, from the start to the end of the conversation | A complete chat process with a clear beginning and end |
| Turn | One exchange: you say something, and Kimi replies | One back-and-forth consisting of your input and Kimi’s response |

### Key differences

**Session**
- **Continuity of memory**: Kimi remembers all context within the current chat
- **Cross-turn reference**: Each reply refers to previous messages as context for the next turn
- **A clear reset point**: Clicking “New session” starts over and clears the previous context

**Turn**
- **Cumulative count**: Turn 1, Turn 2, and so on
- **Limited memory**: Too many turns (for example, more than 50) may cause earlier content to be “forgotten”, especially in scenarios such as long-form novel writing or tasks with explicit constraints and requirements
- **Constrained by context length**: Due to token (word count) limits, the earliest content may be compressed when there are too many turns

<Callout type="tip">
**Extreme case**: If the conversation ends after one question and one answer, then 1 turn = 1 session.
</Callout>

## Why the distinction matters

Within the same session, every time you enter a new question or instruction, Kimi’s reply in the current turn refers to previous turns. When there are too many turns and too much accumulated content, answer quality may decline.

### Common scenarios

**Scenario 1: Starting a new topic**

<ComparisonBlock
  wrong={"Suddenly asking “Help me calculate my IIT” in a session where you have written a 30,000-character novel"}
  correct={"Start a new session for tax questions to prevent Kimi from mixing up novel characters with tax concepts"}
/>

**Scenario 2: Processing long documents**
- After dozens of turns in one session, the AI may “forget” the rules you set at the beginning or the summary of an uploaded file
- What to do: proactively summarize midway through important tasks (“Summarize our current plan”), or start a new session

**Scenario 3: Understanding product limits**
- Context length limits are usually calculated by token (word count), but in plain terms you can think of them as “turns”
- If you see a “start a new session” prompt, it means the current session has too many turns and you need to open a new one

## Best practices

<Callout type="tip">
**Create a separate session for each task**: For each standalone task, such as writing a paper, researching information, or debugging code, start a new session to avoid context interference.
</Callout>

<Callout type="tip">
**Summarize long sessions regularly**: After more than 20 turns, ask the AI to summarize key information to prevent information loss.
</Callout>

<Callout type="tip">
**Clear sensitive information promptly**: Session history is retained. After completing any task involving private information, you can delete the entire session.
</Callout>
