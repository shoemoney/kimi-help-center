---
title: "Terminal Commands"
slug: "concepts"
order: 6
extract_headings: true
preview: true
preview_content: "A quick reference for common Kimi Claw terminal commands, covering system commands, skills, scheduled tasks, and debugging."
---

<SeoMeta
  title="Kimi Claw terminal commands - Kimi Help Center"
  description="Learn Kimi Claw terminal commands, including how to check the gateway, Bot instance status, Skill installation information, scheduled task status, and Memory Space (记忆空间), so you can better understand and use Kimi Claw features."
/>

# Common Kimi Claw terminal commands

## What is Terminal?

Terminal is required to install OpenClaw on macOS. It is a built-in Mac app that lets you control your computer directly with text commands instead of clicking icons with a mouse.

**Kimi Claw Terminal:**

<Frames
  src="./images/kimi-claw/concepts-01.gif"
  alt="Kimi Claw terminal interface"
/>

Click the “Terminal” button in the [Kimi Claw web app](https://www.kimi.com/bot) to open the CLI (命令行界面). Commands entered in Terminal are executed directly and are not affected by the chat context.

## Terminal commands and features

You can also enter commands directly in the Claw chat box to check Claw status or perform actions.

<Frames
  src="./images/kimi-claw/concepts-02.gif"
  alt="Entering a command in the chat box"
/>

<Callout type="info">
Terminal and plugins share the same interaction channel. Restarting OpenClaw Gateway will disconnect Terminal.
</Callout>

### Basic system commands

| Command | Function |
|------|------|
| `/help` | View all available commands |
| `/status` | Check system status and connection health |
| `/ping` | Test gateway response |
| `/cron` | View/manage scheduled tasks (create, read, update, delete) |
| `/cron add "<schedule>" <command>` | Add a scheduled task, for example `/cron add "0 9 * * *" /news` |
| `/cron rm <id>` | Delete the scheduled task with the specified ID |
| `/config` | View the current user configuration, such as email and notification method |
| `/config set <key> <value>` | Modify a configuration item, for example `/config set email user@example.com` |
| `/file` or `/upload` | View/manage the list of uploaded files |
| `/search <query>` | Trigger an online search, overriding the system’s default search behavior |
| `/new` | Start a new Session while preserving history |
| `/reset` | Reset the current Session and clear the context |
| `/compact [instructions]` | Compress the chat history while preserving key information |
| `/stop` | Stop the current task/output |

### Skill management

| Command | Function |
|------|------|
| `/skills` | List all installed Skills |
| `/skills info <skill_id>` | View details and configuration parameters for the specified Skill |
| `/skills install <url或id>` | Install a new Skill |
| `/skills uninstall <skill_id>` | Uninstall the specified Skill |
| `/skills update <skill_id>` | Update a Skill to the latest version |
| `/skills reload` | Reload all Skills after configuration changes |

### Scheduled tasks

| Command | Function |
|------|------|
| `/cron` | View the list of all current scheduled tasks |
| `/cron log <task_id>` | View execution logs and error details for the specified task |
| `/cron enable/disable <task_id>` | Enable or pause a scheduled task |

### Memory Space (记忆空间)

| Command | Function |
|------|------|
| `/memory` | View the number of current memory entries and capacity usage |
| `/memory search <关键词>` | Search historical memory entries |
| `/memory export` | Export a memory file for backup |

### Configuration and debugging

| Command | Function |
|------|------|
| `/config` | View the current gateway and platform configuration |
| `/config reload` | Reload the configuration file after modifying Feishu (飞书), email, or other credentials |
| `/logs` | View recent system logs |
| `/debug on/off` | Turn debug mode on or off to output detailed execution steps |

<Callout type="tip">
**快速 diagnosis:** If a Skill or scheduled task is abnormal, run `/status` → `/logs` → `/cron log <任务ID>` in order to locate the issue.
</Callout>
