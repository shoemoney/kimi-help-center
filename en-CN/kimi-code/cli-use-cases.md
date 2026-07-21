---
title: "Common Use Cases"
slug: "cli-use-cases"
order: 2
extract_headings: false
preview: true
preview_content: "Common Kimi Code use cases and sample prompts."
---

<SeoMeta
  title="Common Kimi Code CLI Use Cases - Kimi Help Center"
  description="Explore five typical Kimi Code CLI scenarios: building new features, fixing bugs, understanding project architecture, automating batch tasks, and general research and analysis, with practical sample prompts."
/>

# Common Use Cases

Below are several typical ways to use Kimi Code CLI in day-to-day development. Each scenario includes sample prompts for reference.

## Build New Features

Describe what you need in natural language, and AI will read the relevant code, write new code, and verify the changes.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Add sorting by registration time to the user list page. Both the frontend and backend need changes.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Implement a rate limiter middleware using the token bucket algorithm to limit each IP to 60 requests per minute.",
    },
  ]}
/>

## Fix Bugs

Paste the error message directly to AI. It will identify the root cause and provide a fix.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "After running npm test, I got this error. Help me fix it:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "The CI pipeline failed at the lint stage. Here are the logs: ... Help me fix it.",
    },
  ]}
/>

## Understand a Project

When you take over a new project or need to understand the logic in a piece of code, just ask directly.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "What is the overall architecture of this project? What are the main modules?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "What does src/auth/middleware.ts do? How does the authentication flow work?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Explain how database migrations are managed in this project.",
    },
  ]}
/>

## Automate Small Tasks

Ideal for repetitive work such as modifying code in bulk, adding documentation, and generating tests.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Add JSDoc comments to all exported functions under src/utils/.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Generate unit tests for all public methods in the UserService class.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Change all var declarations in the project to const or let.",
    },
  ]}
/>

## General Tasks

Kimi Code CLI is not limited to programming. It can also handle research, data analysis, batch file operations, and more.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Research the current mainstream Node.js ORM libraries and compare their strengths and weaknesses.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analyze access logs from the last 7 days under logs/ and list the Top 10 request paths.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Merge all CSV files under data/ into one file and remove duplicate rows.",
    },
  ]}
/>
