---
title: "Use in IDEs"
slug: "cli-ides"
order: 9
extract_headings: false
preview: true
preview_content: "Integrate Kimi Code CLI into Zed, JetBrains IDE, and Paseo via ACP."
---

<SeoMeta
  title="Use in IDEs - Kimi Help Center"
  description="Integrate Kimi Code CLI into your IDE via the ACP protocol. Configuration guides for Zed, JetBrains IDE, and Paseo, plus troubleshooting tips."
/>

# Use in IDEs

<Callout type="info">
Kimi Code CLI can be integrated into IDEs through [Agent Client Protocol (ACP)](https://agentclientprotocol.com/), so you can use AI-assisted coding directly inside your editor.
</Callout>

## Prerequisites

Before configuring your IDE, make sure Kimi Code CLI is installed and that you have completed sign-in setup.

The ACP adapter exposes the `kimi acp` subcommand. The IDE starts it as a subprocess and runs JSON-RPC over standard input/output. Each time the IDE creates a session, the CLI reuses its authentication state—no need to sign in again.

<Callout type="tip">
On macOS, subprocesses launched from an IDE GUI usually **do not** inherit the terminal shell’s `PATH`. If `kimi` is not in a system directory such as `/usr/local/bin`, use an absolute path in your IDE configuration. Run `which kimi` in the terminal to find the currently active path.
</Callout>

## Use in Zed

[Zed](https://zed.dev/) is a modern editor with native ACP support.

Add the following to Zed’s configuration file `~/.config/zed/settings.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Configuration notes:

- `type`: fixed value `"custom"`
- `command`: the executable path of Kimi Code CLI. If `kimi` is not in PATH, use the full path, such as `/Users/you/.local/bin/kimi`.
- `args`: startup arguments. The `acp` subcommand switches to ACP mode.
- `env`: additional environment variables. Usually you can leave this empty. Zed automatically injects a default environment.

After saving the configuration, create a new chat in Zed’s Agent panel. Zed will start an ACP subprocess using the `Kimi Code CLI` configuration you just added. MCP services declared by Zed under `agent_servers` are also forwarded to the kimi side through the ACP protocol.

## Use in JetBrains IDE

JetBrains IDEs, including IntelliJ IDEA, PyCharm, and WebStorm, support ACP through the AI chat plugin.

If you do not have a JetBrains AI subscription, you can enable `llm.enable.mock.response` in Registry to access the AI chat panel when you only need ACP. Press Shift twice and search for "Registry / 注册表" to open it.

In the AI chat panel menu, click **Configure ACP agents** and add the following configuration:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains handles the `command` field strictly—be sure to enter an **absolute path**. You can get it by running `which kimi` in the terminal.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

After saving, `Kimi Code CLI` will appear in the Agent selector of AI chat.

## Use in Paseo

[Paseo](https://paseo.sh/) is a self-hosted orchestrator that can launch and manage various agent CLIs across desktop, web, and mobile. Like IDEs, it connects to Kimi Code CLI through ACP.

Select **Kimi Code CLI** from Paseo’s built-in ACP provider catalog, or add a custom provider in `~/.paseo/config.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Paseo’s generic ACP adapter does not handle sign-in for you, so complete terminal sign-in first. See [Prerequisites](#prerequisites). Otherwise, session creation will fail with `Authentication required`.

## Troubleshooting

- **The session is interrupted immediately / the IDE says "agent exited"**: This is usually caused by an incorrect `command` path or by kimi not being signed in. First run `kimi acp` once in the terminal to verify it: if it blocks and waits for standard input, the CLI itself is fine and the issue is in the IDE configuration; if it errors out immediately, follow the error message, which is most often due to missing `/login`.
- **The IDE shows "auth required"**: The CLI has no usable authentication token. Quit the IDE, run `kimi` in the terminal to complete sign-in, then start the IDE again.
- **MCP tools are not visible**: Check the capability table in `kimi acp` to confirm whether the MCP transport type configured in the IDE is supported. The current Kimi Code CLI ACP adapter supports the `http` and `stdio` transport modes. `sse` and `acp` types are silently discarded, with a warn entry written to the logs.
