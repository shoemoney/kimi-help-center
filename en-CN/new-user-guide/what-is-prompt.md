---
title: "Prompt Basics"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: true
preview_content: "Learn how to write effective prompts and use structured questions to help AI produce more accurate outputs."
---

<SeoMeta
  title="What Is a Prompt? How Do You Write a Good Prompt? - Kimi Help Center"
  description="Learn the basics of prompts and how to write them effectively. A good prompt can significantly improve Kimi’s answer quality. This guide shows you how to create efficient prompts with a structured approach."
/>

# Prompt Basics Guide

## What Is a Prompt?

A prompt is the text instruction you send to Kimi. It can be a question, a description, a set of requirements, or even a full task brief. Kimi uses your prompt to understand your intent, structure its response, and complete the task.

In simple terms: **the way you ask shapes the way Kimi answers.** A clear, specific prompt often leads to a more accurate and useful response.

## Four Essentials of a Good Prompt

### 1. Clarify Your Role and Context

Tell Kimi who you are and the scenario you’re working in. This helps it match the depth and style of its answer to your needs.

<ComparisonBlock
  wrong={"Write an article about AI"}
  correct={"I’m a technology media editor. I need to write a popular science article about AI for general readers, around 2,000 words, in a clear and accessible style"}
/>

<ComparisonBlock
  wrong={"Help me analyze the data"}
  correct={"I’m a market analyst. Please analyze the conversion rates by channel in this Excel file, with a focus on month-over-month changes"}
/>

### 2. Describe the Task Specifically

The more specific your description, the fewer rounds of revision you’ll need. A good task description usually includes:

- **What to do**: clear actions, such as analyze, summarize, translate, generate, compare…
- **Output format**: table, list, paragraph, code, Markdown…
- **Quantity and scope**: word count, number of items, time range, region…
- **Quality requirements**: academic, conversational, concise, detailed…

<ComparisonBlock
  wrong={"Help me summarize this article"}
  correct={"Please summarize the main points of this article in 3 bullets. Keep each bullet under 50 Chinese characters and answer in Chinese"}
/>

### 3. Provide Examples or References

When you have a clear expectation for the output format, giving Kimi an example (Few-shot) can be very effective:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Please organize the meeting minutes in the following format:\n\n【Meeting topic】xxx\n【Attendees】xxx\n【Key decisions】\n1. xxx\n2. xxx\n【Action items】\n- [ ] xxx (Owner: xxx, due date: xxx)",
    },
  ]}
/>

### 4. Break Down Complex Tasks Step by Step

For complex tasks, split the larger task into smaller steps and guide Kimi through them progressively:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I need to create a competitor analysis report. Please proceed as follows:\n1. First list 3 mainstream competitors in China and their core features\n2. Compare each product’s pricing strategy\n3. Analyze each product’s strengths and weaknesses\n4. Provide recommendations on how our product can differentiate itself",
    },
  ]}
/>

## Practical Tips

### Make Good Use of Follow-ups and Iteration

Not satisfied with the first answer? Ask a follow-up directly. You don’t need to repeat all the background:

- “Please expand on point 2 in more detail”
- “Make the tone more formal”
- “Please add data sources”
- “Analyze it again from a different angle”

### Use Files and Links Effectively

Kimi supports uploads of PDF, Word, Excel, images, and other files. You can also paste a URL directly. Asking questions with files can greatly improve efficiency:

- “Summarize the key points of this PDF”
- “Analyze sales trends based on this Excel data”
- “Read the article at this link and extract the key information”

### Specify the Output Format

Tell Kimi exactly what output format you want:

| Need | Example prompt |
|-----|-----------|
| Table comparison | “Please compare the strengths and weaknesses of A and B in a table” |
| Code output | “Please implement it in Python, with comments included” |
| Structured list | “Please organize it as a numbered list, with each item under 20 words” |
| Markdown | “Please output in Markdown format, including heading levels” |

### Use System Prompts and Memory

If you have fixed preferences or requirements, you can use Kimi’s **memory feature** so Kimi remembers them over the long term:

- “Remember that I’m a frontend engineer and prefer the React tech stack”
- “Use Simplified Chinese for future replies and format them in Markdown”
- “When answering technical questions, please include code examples”

This way, you don’t need to repeat the same instructions every time. Kimi will automatically refer to these preferences in future conversations.

## Common Pitfalls

| Pitfall | Better approach |
|-----|---------|
| Putting too many unrelated tasks into one prompt | Start a new conversation for each independent task to keep the context clear |
| Being too vague, such as “Help me write something” | Explain what to write, who it is for, the desired style, and the length |
| Expecting a perfect output in one try | Generate a first draft, then refine it through follow-up questions |
| Not checking the factual accuracy of AI output | Always verify factual information such as data and dates |

## Quick-Start Templates

Here are several ready-to-use prompt templates. Copy and adapt them as needed:

**Writing**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Please write a [article type] about [topic] for [target audience], around [xxx] words.\nRequirements: [style/format/key points]",
    },
  ]}
/>

**Analysis**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Please analyze [object of analysis], focusing on [dimensions of interest].\nOutput format: [table/chart/report]\nPlease provide conclusions and recommendations.",
    },
  ]}
/>

**Translation**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Please translate the following content into [target language] while maintaining a [style requirement: academic/conversational/business] style.\nFor specialized terms, please include the original wording.",
    },
  ]}
/>

Once you master these core concepts and techniques, you can work with Kimi more efficiently and turn AI into a true productivity tool.
