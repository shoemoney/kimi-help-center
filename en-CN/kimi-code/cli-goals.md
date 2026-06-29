---
title: "Use goal mode"
slug: "cli-goals"
order: 9
extract_headings: false
preview: true
preview_content: "Use goal mode to keep Kimi Code working toward a clearly defined outcome across multiple turns."
---

<SeoMeta
  title="Use goal mode - Kimi Help Center"
  description="Use the /goal command to keep Kimi Code working toward a clearly defined outcome across multiple turns. Learn when to use goal mode, how to manage its lifecycle, and how to queue follow-up goals."
/>

# Use goal mode

A goal lets Kimi Code keep working toward a clearly defined outcome across multiple turns. Unlike a normal prompt, which tells it “what to do next,” a goal describes “what final state to reach.” Use `/goal` when the task has a clear endpoint but the next step depends on what the Agent discovers along the way—for example, fixing a batch of failing tests or tracing and resolving the root cause of a build failure.

## Start a goal

Write the goal after the `/goal` command:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix the bugs listed in the project's GitHub issues",
    },
  ]}
/>

Kimi Code saves the goal, sends it as the next user message, and enters goal mode. At the end of each turn, it checks whether the goal is `complete`, `blocked`, `paused`, or still `active`.

A good goal clearly states the conditions for completion:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix all tagged regression bugs in the billing system, add or update tests for each fix, and finally run all billing-related test suites",
    },
  ]}
/>

Avoid broad, vague directions:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find all bugs in this codebase",
    },
  ]}
/>

This goal does not say what counts as success, what should be checked, or what other stop conditions apply. The Agent may immediately become `blocked` on some issue, or it may keep working much longer than expected.

### When to use goal mode

Use goal mode for work with a clear endpoint and verifiable evidence.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix all failing billing tests and make sure the billing-related test suite runs successfully",
    },
  ]}
/>

Kimi Code can inspect test output, modify files, rerun checks, and decide when the goal can be marked `complete`.

Use goal mode for tasks that may require multiple turns of investigation and fixes.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find out why the release build is failing, fix the underlying cause, and confirm the build passes",
    },
  ]}
/>

Because the goal describes the outcome, the Agent can change direction if the first lead is not the root cause.

Use goal mode for work that should proceed step by step without further prompting.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Update the feature implementation, add documentation, run tests, and summarize the changed files",
    },
  ]}
/>

This style is useful when you already know which checks or deliverables must exist before the work is done.

### When not to use goal mode

Do not use goal mode for broad topics or open-ended discussions.

**Counterexample:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Hello!",
    },
  ]}
/>

<Callout type="warning">
If the content does not constitute a goal, the Agent will immediately mark the goal as `complete`.
</Callout>

Do not use goal mode for tasks that are known to be impossible or unsolvable.

**Counterexample:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Prove that 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
If a goal appears impossible or unsolvable, the Agent will mark it as `blocked`.
</Callout>

Do not use vague or overly complex goals.

**Counterexample:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Create a video game in a single HTML file.",
    },
  ]}
/>

<Callout type="warning">
The Agent may complete this goal, but it may also produce unexpected results after a long wait.
</Callout>

## Manage the lifecycle

Use the following commands to view or control the current goal:

| Command | Description |
| --- | --- |
| `/goal` or `/goal status` | Show the current goal and its progress |
| `/goal pause` | Pause the current goal without deleting it |
| `/goal resume` | Resume a paused or blocked goal |
| `/goal cancel` | Remove the current goal |
| `/goal replace <objective>` | Replace the current goal with a new one |

A goal can stop in three ways:

- **`complete`**: The goal is complete. Kimi Code clears the goal, and the Agent summarizes how it completed the work.
- **`paused`**: You paused it, interrupted the current turn, restored a session that originally had a goal, or encountered a model, provider, or runtime error.
- **`blocked`**: Kimi Code needs input, cannot complete the goal as currently written, or has reached the budget limit. When the Agent marks a goal as blocked, it writes a short message explaining why.

Stop conditions must be written into the goal itself. `/goal` has no separate syntax for specifying stop limits.

## Queue follow-up goals

The Agent may sometimes finish a goal quickly. If only one goal can be queued at a time, users can be left waiting. Many people already know which follow-up goals they want to complete next, but previously they had to wait for the current goal to finish, open the TUI, and manually submit the next goal.

If you have more work ready but do not want to interrupt the current goal, use `/goal next`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Update the release notes after the tests pass",
    },
  ]}
/>

Queued follow-up goals are not visible to the Agent while the current goal is running. After the current goal completes, Kimi Code starts the first follow-up goal with the same effect as `/goal <objective>`.

If there is no current goal, `/goal next <objective>` starts that goal immediately. It has the same effect as `/goal <objective>` and shows a status message before the goal starts.

Manage follow-up goals interactively:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

In the manager, use <kbd>↑</kbd> / <kbd>↓</kbd> to browse, <kbd>Space</kbd> to select a goal for moving, then <kbd>↑</kbd> / <kbd>↓</kbd> to reorder it after selection. Use <kbd>E</kbd> to edit, <kbd>D</kbd> to delete, and <kbd>Esc</kbd> to cancel. While editing, use <kbd>Shift-Enter</kbd> or <kbd>Ctrl-J</kbd> to add a new line, and <kbd>Enter</kbd> to save.

If the current goal is paused, canceled, or blocked, Kimi Code will not start the next follow-up goal. When a goal becomes `blocked` and follow-up goals exist, the TUI reminds you that those follow-up goals will wait until the current goal is complete.

## Use goal mode with care

Goal mode works best for tasks that can be verified through files, tests, command output, generated artifacts, or a clear report. For one-off changes or questions that only need a single answer, a normal prompt is usually more appropriate.

In `manual` permission mode, goal work may stop to wait for tool-call approval. For unattended work, choose a permission mode that matches the risk level of the codebase and the commands that may be run.

In non-interactive prompt mode, only goal creation is supported:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Fix the failing checkout tests\"",
    },
  ]}
/>

Prompt mode exits with code `0` when the goal completes, `3` when the goal is blocked, and `6` when the goal is paused. `/goal next` and the other management commands are TUI control commands.
