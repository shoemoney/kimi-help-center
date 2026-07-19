---
title: "Kimi Code 常见问题"
slug: "faq"
order: 4
extract_headings: true
preview: true
preview_content: "Kimi Code 常见问题。"
---

<SeoMeta
  title="Kimi Code 常见问题 - Kimi 帮助中心"
  description="关于 Kimi Code CLI 安装、认证、迁移、交互等内容的常见问题。"
/>

# 常见问题

## 从旧版本迁移

<Callout type="info">
Kimi Code CLI 已完成一次重要的版本升级——从 Python/uv 迁移到 Node.js，安装更简单，启动更快，并带来重新设计的终端界面。旧版本将逐步停止维护，建议你尽快升级。
</Callout>

如果你正从旧版本迁移，请按以下步骤操作——只需一条命令，即可将配置、MCP 服务器和会话历史迁移到新版本。

### 新版本有哪些变化

- **不再需要 Python / uv**：基于 Node.js 重构，无需 Python 环境，安装更简单
- **原生二进制文件，开箱即用**：启动更快，占用更轻
- **重新设计的终端界面**：交互更流畅，响应更及时
- **完整数据迁移**：配置、MCP 服务器和会话历史都能无缝带入新版本

### 如何迁移

有两种迁移方式。

安装 kimi-code 后，**首次运行 `kimi`** 时，它会自动检查 `~/.kimi/` 下是否存在 kimi-cli 数据。如果检测到数据，会显示迁移提示，你可以选择立即迁移、稍后再说，或不再提示。

你也可以**随时手动运行迁移命令**：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

你可以选择是否一并迁移聊天会话。如果暂时不需要历史记录，选择 **Config only**；如果想一次性全部迁移，选择 **Config + N sessions**。迁移结束后会打印汇总信息。

### 迁移过程中会发生什么

**会迁移的内容**：配置（`config.toml`）、MCP 服务器配置、输入历史，以及你选择迁移的聊天会话。

**不会迁移的内容**：OAuth 登录凭据和 MCP 服务授权不会被复制。因此，迁移后你需要重新运行 `/login`，并重新授权 MCP 服务器。kimi-cli 插件也不在迁移范围内。

<Callout type="tip">
迁移**绝不会修改或删除** `~/.kimi/` 下的任何旧数据。kimi-cli 仍可照常使用，二者互不影响。迁移也可以重复运行——已经迁移过的会话不会再次导入。
</Callout>

迁移完成后，从 kimi-cli 导入的会话会在会话选择器中标记为 `[imported]`，方便你将它们与新会话区分开来。

## 安装与认证

### 运行 `/login` 时没有可用模型

如果运行 `/login` 时看到“所选平台没有可用模型”，可能是以下原因导致：

- **API key 无效或已过期**：检查你输入的 API key 是否正确且仍然有效。
- **网络连接问题**：确认你可以访问 API 服务地址（例如 `api.kimi.com` 或 `api.moonshot.cn`）。

**请注意平台差异**

Kimi Code 会员权益与 [Kimi 开放平台](https://platform.kimi.com) 使用不同的 Base URL。配置时请确保 Base URL 与 API Key 匹配。

| 平台 | Base URL | 计费方式 | Key 创建入口 |
|------|---------|---------|-------------|
| **Kimi Code** | 兼容 Anthropic：`https://api.kimi.com/coding/` | Kimi 会员订阅（包含额度） | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi 开放平台** | `https://api.moonshot.cn/v1` | 按量付费 | [Kimi 开放平台](https://platform.kimi.com) |

### API key 无效

API key 无效的可能原因：

- **Key 输入有误**：检查是否多了空格或漏了字符。
- **Key 已过期或已被撤销**：在平台控制台确认 Key 状态。

### 会员已过期或额度已用尽

如果你使用的是 Kimi Code 平台，可以通过 `/usage` 命令查看当前额度和会员状态。如果额度已用尽或会员已过期，需要前往 [Kimi Code](https://kimi.com/code) 续费或升级。

## 订阅

### 如何申请发票或升级会员？

访问 [Kimi 会员页面](https://www.kimi.com/membership/pricing#pricing-faq)，按照页面说明提交发票申请或升级你的套餐。

## 交互问题

### 粘贴图片失败

使用 `Ctrl-V` 粘贴图片时，如果看到“当前模型不支持图片输入”，说明当前模型不支持图片输入。

解决方法：

- **切换到支持图片的模型**：使用具备 `image_in` 能力的模型。
- **检查剪贴板内容**：确保剪贴板中确实包含图片数据，而不是图片文件路径。

## 更新与升级

### macOS 首次启动较慢

macOS Gatekeeper 会在新程序首次运行时执行安全检查，因此启动可能较慢。解决方法：

- **等待检查完成**：首次运行请耐心等待；之后再次启动会恢复正常速度。
- **添加到 Developer Tools**：在 **System Settings → Privacy & Security → Developer Tools** 中添加你的终端应用。

### 如何升级 Kimi Code CLI

运行 `kimi upgrade` 可检查最新版本并显示更新选项。选择 `Install update now` 即可升级。你也可以通过包管理器直接升级：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## VS Code 扩展常见问题

以下是关于 Kimi Code VS Code Extension 的常见问题。

### VS Code 提示未打开工作区

请在 VS Code 中打开一个文件夹。Kimi Code VS Code 扩展需要工作区才能正常运行。

### VS Code 提示找不到 CLI

请手动安装 Kimi Code CLI，并在 VS Code 设置中配置 `kimi.executablePath`，或确认内置 CLI 存在。

### VS Code 登录失败

可以尝试跳过登录，改用 API key 模式；检查网络连接；或稍后通过 Kimi Code 扩展操作菜单重试。

### VS Code 发送消息后没有响应

请确认 Kimi Code CLI 可用、模型已配置，并且 VS Code 中已打开工作区文件夹。可通过“Kimi Code: Show Logs”查看错误日志。

### VS Code 连接超时

如果 30 秒内没有响应，将触发超时。请检查网络后重试。

### VS Code 发送消息前报错

某些错误会阻止 VS Code 发送消息，例如找不到 Kimi Code CLI、版本过低、未登录或会话繁忙。错误会以 toast 通知形式显示，你的输入会被保留，方便重试。

## 反馈与联系

### 文档没有解决我的问题

如果以上内容没有解决你的问题，欢迎通过邮件联系我们：[code@moonshot.ai](mailto:code@moonshot.ai)。请在邮件中描述你遇到的问题、已尝试的步骤，以及相关日志信息，我们会尽快回复。

如果你有任何问题或建议，也可以在 [GitHub Issues](https://github.com/MoonshotAI/kimi-cli/issues) 反馈。
