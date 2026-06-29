---
title: "Kimi Code for VS Code 快速上手"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code for VS Code 快速上手 - Kimi 帮助中心"
  description="Kimi Code for VS Code 是集成在 Visual Studio Code 中的扩展。安装后，你可以提问、查看代码差异，并快速提交更改……"
/>

# Kimi Code for VS Code 快速上手

<Callout type="warning">
**VS Code 扩展兼容性说明**

Kimi Code for VS Code 目前仅支持旧版 Python 命令行界面（CLI）用户进行全新安装。已安装该插件的现有用户，在升级到新版命令行界面（CLI）后仍可继续使用。暂不支持 TS 版本命令行界面（CLI）用户安装。
</Callout>

Kimi Code for VS Code 是集成在 Visual Studio Code 中的扩展。安装后，你可以直接在编辑器内提问、查看代码差异，并快速提交更改。

该扩展可以读取你引用的文件内容，并通过可视化界面展示修改建议；在你确认后，才会执行这些修改。整个流程始终由你掌控，同时能显著提升开发效率。

该扩展在 VS Code 中提供原生聊天面板，支持：
- 通过 `@` 符号引用文件或文件夹。
- 通过 `/` 命令执行项目扫描和上下文管理。
- 以 diff 视图展示文件变更，并支持回滚。
- 集成 MCP servers 以调用外部工具。

---

## 安装

1.  **前提条件**：你需要拥有 Kimi 账号订阅或 Kimi API key。
2.  **Marketplace**：通过 [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code) 安装。

<Callout type="tip">
如果安装后没有看到扩展，请重启 VS Code，或在命令面板中执行 **Developer: Reload Window**（Mac：`Cmd+Shift+P`，Win/Linux：`Ctrl+Shift+P`）。
</Callout>

---

## 认证

Kimi Code 支持两种认证模式。你可以随时通过**齿轮图标**切换模式。

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="认证设置"
  width={800}
  height={450}
/>

- **Kimi 账号模式**：点击登录按钮，通过浏览器完成授权。
- **API Key 模式**：如果你已配置 API key，可点击跳过登录。

---

## 典型工作流

代码阅读：输入`@`选择文件或文件夹，请求解释代码流程，并继续追问。

重构：引用目标代码，例如 `@src/feature/`，请求重构方案，查看 diff 并选择性批准，必要时使用回滚。

调试：粘贴错误信息或堆栈跟踪，引用相关文件，请求诊断和修复，然后批准建议的更改。

项目概览：引用文件夹，例如 `@src/services/`，请求模块图或架构摘要，并继续询问依赖关系或薄弱点。

---

## 命令与快捷键

使用 `CodePreview` 快速测试命令或查看常用快捷键：

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : 聚焦 Kimi 输入框\nAlt+K : 插入当前文件引用\nCtrl+N : 新建会话",
    },
  ]}
/>

| 快捷键 | 功能 |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | 聚焦 Kimi 输入框 |
| `Alt+K` | 插入当前文件引用 |
| `Ctrl+N` / `Cmd+N` | 新建会话 |
| `↑` / `↓` | 浏览输入历史 |

<Callout type="info">
在命令面板中输入 **Kimi Code**，可访问更多命令：在新标签页打开、在侧边栏打开，或管理会话。
</Callout>
