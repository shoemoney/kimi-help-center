---
title: "What are Skills?"
slug: "what-are-skills"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="What are Skills? - Kimi Help Center"
  description="Learn about the working principles, types, and usage of Kimi Skills. Skills are resource packages containing instructions and tools that expand Kimi's capabilities for specific tasks."
  ogType="article"
/>

# What are Skills?

Skills are reusable knowledge packages designed to extend the boundaries of an AI agent's capabilities. Each skill includes:

- **Logic & Operational Guidance** — Methodologies tailored for specific task types.
- **Best Practices & Standards** — Industry standards and internal protocols to be followed.
- **Scripts & Reference Resources** — Optional tools and materials to assist in execution.

## How to Use?

At the start of a conversation, the Agent will see a list of available skills with their names and brief descriptions. If a skill is relevant to the current task, the Agent will load the full instructions and execute accordingly.

## User Journey

From discovering skills to creating your own, the complete path is as follows:

1. **Discover Skills** — Browse official and recommended skills in the Skills panel to find one that fits your scenario.
2. **Install Skills** — Click the "+" button to add a skill instantly.
3. **Invoke Skills** — Type `/` in the chat box to select a skill, or let Kimi trigger one automatically based on your query.
4. **Create Your Own** — If existing skills don't meet your needs, upload documents or describe your requirements to generate a custom skill, or use `/skill-creator` to build one through dialogue.

## How Skills work?

When you send a request, Kimi determines if the task involves a specific skill. If so, it automatically loads the skill and follows its instructions to complete the task. 

Skills are only loaded when relevant, ensuring they do not interfere with the context of other conversations.

## Skills vs. Direct Prompting: What’s the difference?

When you prompt Kimi directly, every conversation starts from scratch; Kimi uses its general capabilities without personal settings. A Skill acts like a set of "pre-installed" rules on top of those general capabilities that trigger automatically.

For example, when writing a weekly report:
- **Direct Prompting**: Kimi writes based on its general understanding of formats.
- **Using a Skill**: Kimi follows your specific structure, tone, and length every time without needing repeated instructions.

| | Direct Prompting | Using Skills |
|---|---|---|
| **Need to explain requirements every time?** | Yes | No, applied automatically |
| **Output format stability** | Variable | Consistent as defined |
| **Best Use Case** | One-off, temporary tasks | Repetitive, fixed workflows |
| **Setup required?** | No | Requires creation or installation |

## Skill Types

### Kimi‘s picks
Kimi provides recommended skills that can be added with one click, covering scenarios like investment research, document formatting, and SEO analysis. These are maintained by Moonshot AI and are available to all users.

Common recommended skills include:
- `docx`: Create and edit Word documents (Markdown conversion, TOC, etc.).
- `deep-research`: Conduct in-depth research requiring recursive search and visualization.
- `sop-writer`: Turn business processes into structured SOP documents.

### Customize Skills
Created by you for personal workflows and specific domain tasks, such as:
- Applying specific style guides to documents.
- Generating emails or content based on fixed templates.
- Organizing meeting minutes in a specific format.