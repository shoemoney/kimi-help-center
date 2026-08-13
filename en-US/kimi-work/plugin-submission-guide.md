---
title: "List a Plugin in the Official Marketplace"
slug: "plugin-submission-guide"
order: 4
extract_headings: true
preview: true
preview_content: "Turn your product or service into a Kimi plugin, test it, and apply for listing in the official marketplace."
---

<SeoMeta
  title="Kimi Plugin Submission Guide - Kimi Help Center"
  description="Learn how to create and test a plugin in Kimi Work and apply for listing in the official Kimi plugin marketplace."
/>

# List a Plugin in the Official Marketplace

If you want to connect your product or service to Kimi so users can access its capabilities in conversation, follow this guide to create, test, and submit a plugin for the official Kimi plugin marketplace.

## What is a Kimi plugin?

A Kimi plugin connects your product to Kimi. It helps Kimi understand when your product is useful and gives Kimi the workflows or tools needed to help users. A plugin can contain:

- **Skills only**: reusable workflows tailored to your product or use case.
- **MCP only**: tools and services exposed to Kimi through an MCP server.
- **Skills and MCP**: product tools combined with workflows that help Kimi use them effectively.

## Before you begin

First, [download and install Kimi Work](https://www.kimi.com/products/kimi-work). Prepare the following:

- A plugin name, description, and logo
- The core tasks users should be able to complete in natural language
- An MCP server URL, if applicable

<Callout type="warning">
If the plugin logo includes a third-party product, brand, or trademark, contact the relevant rights holder and obtain the necessary written authorization before submitting.
</Callout>

## Step 1: Create and test the plugin

1. Open Kimi Work, type "/" in a conversation, and select **Plugin Builder**.
2. Describe the plugin and provide the information you prepared. If you already have a Codex, Claude, or another platform's plugin, provide its files or project URL and follow the instructions to convert it.
3. Go to **Plugins** → **Personal**, find the plugin, and install it.
4. Test the core capabilities in a new conversation, including normal and edge cases. Keep at least three representative test prompts.
5. Follow Plugin Builder's instructions to obtain the complete plugin ZIP file.

For an MCP-backed plugin, also test its authentication flow:

- **No authentication**: users can use the plugin immediately after installation.
- **OAuth**: the third-party authorization page should open during the first installation.
- **CLI authentication**: installation does not start authorization. The first time users invoke the plugin, they complete authorization in the conversation. After successful authorization, they should generally not need to authorize again in other conversations.

## Step 2: Submit your application

After creating and testing the plugin, complete the [Kimi plugin submission form](https://moonshot.feishu.cn/share/base/form/shrcnDS1PumNxPTZ1SNXtMn1YDD) and upload the plugin ZIP file.

The form asks for:

| Item | Requirement |
| --- | --- |
| Plugin name, description, and ZIP file | Required |
| Plugin type | Skills only, MCP only, or hybrid |
| MCP authentication | Required for MCP-only and hybrid plugins |
| Intended regions | Mainland China, overseas, or both |
| Highlights and recommended test prompts | At least three test prompts |
| Co-marketing interest and materials | Materials are optional and only needed if you want to discuss co-marketing |
| Authorization and compliance status | Disclose items that require further discussion |
| Contact email | Used for review updates and requests for additional information |
| Company or team, related website, and notes | Optional |

<Callout type="warning">
Do not include passwords, tokens, API keys, private keys, or other secrets in the form or plugin ZIP. If users need their own key, explain only how they obtain and configure it.
</Callout>

## What happens next

The Kimi team will review the application and plugin ZIP. If the plugin passes review, or if we need more information or changes, we will contact you at the email address provided and share the next steps.

## FAQ

### Can I submit a plugin without an MCP server?

Yes. Skills-only plugins are supported. Select **Skills only** as the plugin type.

### Can I submit a Codex, Claude, or another platform's plugin?

Yes. In Step 1, provide the existing plugin files or project URL to Plugin Builder and follow the instructions to convert it. Install and test the converted plugin in Kimi Work before submitting the generated ZIP file.

### What is the difference between OAuth and CLI authentication?

OAuth opens the third-party authorization page during the first installation, as with Canva. CLI authentication begins the first time a user invokes the plugin in a conversation, as with Feishu. After successful authorization, users generally do not need to authorize again in other conversations.

### What if I want to explore a broader partnership with Kimi?

First complete the plugin creation, testing, and submission process in this guide. If you would like to explore other forms of collaboration beyond listing the plugin, briefly describe your proposal in **Additional notes**. The Kimi team may contact you based on the circumstances.

### Does submitting an application guarantee listing?

No. The Kimi team evaluates the plugin's functionality, user experience, security, service reliability, and relevant authorization status.
