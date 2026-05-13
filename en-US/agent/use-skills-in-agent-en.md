---
title: "Using Skills in Agent Mode"
slug: "use-skills-in-agent"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Using Skills in Agent Mode - Kimi Help Center"
  description="Learn what Skills are and how to invoke, discover, and create custom Skills in Kimi Agent mode to expand what Kimi can do for you."
  ogType="article"
/>

# Using Skills in Agent Mode

## How to Invoke a Skill

There are three ways to invoke a Skill from the input box in Kimi Agent mode:

**Option 1: Slash command**

Type `/` in the input box to open the Skill list. Click the Skill you want and it's automatically inserted. You can also keep typing after `/` to filter by keyword.

<Frames
  src="./images/skills/slash-command.png"
  alt="Invoking a Skill with the slash command"
/>

**Option 2: Plus menu**

Click the **＋** button next to the input box, choose a Skill from the menu, and its name is inserted as text into the input box.

<Frames
  src="./images/skills/加号-en.png"
  alt="Invoking a Skill from the plus menu"
/>

**Option 3: Let Kimi decide**

Just describe what you need — no manual selection required. Kimi reads your request and automatically picks the most suitable Skill.

### Example: Generate an SEO analysis report with a Skill

Say you're a content marketer who wants to audit your site's SEO performance:

1. Type `/` in the input box, find and select the `seo-analyzer` Skill.
2. Add your request: `Analyze the SEO performance of https://www.kimi.com/help and list the main issues with improvement suggestions.`
3. Kimi follows the workflow defined in the Skill — searching, organizing, and outputting a structured report automatically.

<Frames
  src="./images/skills/SEO.png"
  alt="SEO analyze"
/>

## Discover and Manage Skills

### Kimi's Picks

Kimi provides a set of ready-to-use official Skills — click to add any of them instantly:

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Converting a document into a Skill"
/>

## Create a Custom Skill

If the official Skills don't quite fit, you can build one tailored to your own workflow.

**When should you create a custom Skill?**

- You have a recurring task you run on a fixed schedule (like a weekly competitor report)
- You want Kimi to output content in your company's specific format
- You have a proven method you want Kimi to follow every time

A good Skill does one thing well. Resist the urge to pack all your needs into a single Skill.

### Option 1: Convert a document into a Skill

If you already have a work template, spec document, or reference file, upload it directly and let Kimi learn from it to generate a Skill.

1. In the **Skills** panel, select **Convert Office Doc to Skill**.
2. Click or drag your file into the upload area. Supported formats: `docx`, `xlsx`, `pdf`, `pptx`, and document screenshots. Up to 3 files per upload, 100 MB each.

<Frames
  src="./images/skills/document-to-skills.png"
  alt="Converting a document into a Skill"
/>

3. Write a description telling Kimi what the Skill should do — for example: "Organize my weekly sales data using the style and layout of this template."
4. Click **Create Skill**.

### Option 2: Create a Skill through conversation

No document on hand? Just describe your needs in chat and Kimi will guide you through the creation process step by step.

Type `/skill-creator` in the input box, then describe what you want the Skill to do. Kimi will turn your requirements into a complete Skill.

<Frames
  src="./images/skills/skill-creator.png"
  alt="Creating a Skill through conversation"
/>

### Manage existing Skills

Switch to the **Custom Skills** tab in the **Skills** panel to edit, update documents for, or delete any Skill you've created.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Managing custom Skills"
/>

<Callout type="info">
Skills work in both Agent mode and Kimi Claw. Skills with a `swarm` suffix are only available in Swarm (multi-agent) scenarios and won't appear anywhere else.
</Callout>


## Writing a Good Skill Description

Kimi uses the Skill description to decide when to activate it. The more precise your description, the more reliably the Skill will trigger.

A strong description covers: what the Skill does, which scenarios it's meant for, trigger keywords, and cases where a user describes a problem indirectly rather than naming the Skill explicitly.

<ComparisonBlock
  wrong={"Helps users search and discover Skills."}
  correct={"Helps users search and discover Skills. Use this when someone explicitly wants to find a Skill, or when they describe a problem and are looking for a Skill recommendation. Trigger keywords include: find a skill, search for skills, is there a skill that can do X. Also triggers when a user asks what Skills are available."}
/>