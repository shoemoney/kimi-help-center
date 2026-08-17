---
title: "上架插件到官方市场"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "将你的产品或服务制作成 Kimi 插件，完成基础测试并提交官方市场上架申请。"
---

<SeoMeta
  title="Kimi 插件上架指南 - Kimi 帮助中心"
  description="了解如何在 Kimi Work 中创建和测试插件，并提交 Kimi 官方插件市场上架申请。"
/>

# 上架插件到官方市场

如果你希望将自己的产品或服务接入 Kimi，让用户能够在与 Kimi 对话时直接使用相关能力，并以插件形式展示在 Kimi 官方插件市场，可以按照本文完成插件创建、基础测试和上架申请。

## 什么是 Kimi 插件

Kimi 插件是连接产品与 Kimi 的能力载体。通过插件，Kimi 可以理解产品适合解决哪些问题，并在用户需要时使用相应的工作流程或工具。一个插件可以包含：

- **仅技能**：将适合产品或业务场景的工作流程封装为技能。
- **仅 MCP**：通过 MCP Server 将产品工具和服务接入 Kimi。
- **技能与 MCP 结合**：在接入产品工具的同时，通过技能提供更完整的使用方法和任务流程。

## 准备工作

请先<a class="leading-7 text-(--Colors-KMBlue) decoration-(--hc-pill-border) decoration-2 transition-colors hover:text-(--Colors-KMBlue-hover)" href="https://www.kimi.com/products/kimi-work">下载并安装 Kimi Work</a>。创建插件前，建议准备：

- 插件名称、简介和 Logo；
- 用户可以通过自然语言完成的核心任务；
- MCP Server 地址（如有）。

<Callout type="warning">
如果插件 Logo 涉及第三方产品、品牌或商标，请在提交前与相关权利方完成沟通，并取得必要的书面授权。
</Callout>

## 第一步：创建插件并完成基础测试

1. 打开 Kimi Work，在会话中输入「/」并选择 **Plugin Builder**。
2. 描述希望创建的插件，并提供已经准备好的信息。已有 Codex、Claude 或其他平台插件时，也可以将插件文件或项目链接提供给 Plugin Builder，按照引导转换为 Kimi 插件。

<Frames
  src="./images/plugin-submission-guide/plugin-builder-chat.png"
  alt="在 Kimi Work 中使用 Plugin Builder 创建插件"
  width={1336}
  height={258}
/>

3. 创建完成后，进入「插件」→「个人」，找到并安装插件。

<Frames
  src="./images/plugin-submission-guide/personal-plugin-install.jpg"
  alt="在个人插件中找到并安装创建好的插件"
  width={1396}
  height={478}
/>

4. 在新会话中测试插件的核心能力，同时覆盖正常功能和异常或边界情况。请保留至少 3 条具有代表性的测试请求。
5. 按照 Plugin Builder 的引导获取完整的插件 ZIP 文件。

<Frames
  src="./images/plugin-submission-guide/export-zip.png"
  alt="通过 Plugin Builder 导出完整的插件 ZIP 文件"
  width={1338}
  height={1044}
/>

如果插件包含 MCP，请同时测试对应的授权流程：

- **无授权**：安装后可直接使用。
- **OAuth 授权**：首次安装时应自动进入第三方产品的授权页面。
- **CLI 授权**：安装时不触发授权；首次在会话中唤起插件时，用户按照会话内提示完成授权。成功授权后，后续跨会话使用通常无需重复授权。

## 第二步：提交上架申请

完成创建和测试后，请填写 [Kimi 插件上架申请表](https://moonshot.feishu.cn/share/base/form/shrcnDS1PumNxPTZ1SNXtMn1YDD)，并上传插件 ZIP 文件。

申请表需要提供：

| 填写项 | 要求 |
| --- | --- |
| 插件名称、简介和 ZIP 文件 | 必填 |
| 插件形态 | 选择「仅技能」「仅 MCP」或「混合」 |
| MCP 认证方式 | 选择「仅 MCP」或「混合」时填写 |
| 期望上架地区 | 中国大陆、海外，可多选 |
| 插件亮点和推荐测试用例 | 测试用例至少 3 条 |
| 联合宣发意向及素材 | 宣发素材仅在希望进一步沟通时提供 |
| 授权与合规说明 | 如有待确认事项，请选择「需要进一步沟通」并补充说明 |
| 联系邮箱 | 用于接收审核进度和补充材料通知 |
| 公司或团队、相关网站、其他说明 | 选填 |

<Callout type="warning">
请勿在申请表或插件 ZIP 中提交密码、Token、API Key、私钥等敏感信息。插件需要用户个人 Key 时，只需说明用户获取和配置 Key 的方式。
</Callout>

## 提交后

Kimi 团队会审核申请材料和插件 ZIP。如果插件审核通过，或审核过程中需要补充信息、调整插件，我们会通过申请表中填写的邮箱与你联系，并同步后续流程。

## 常见问题

### 没有 MCP Server，可以提交插件吗？

可以。仅包含技能的插件也可以提交，请在「插件形态」中选择「仅技能」。

### 可以提交 Codex、Claude 或其他平台的插件吗？

可以。在第一步中，将已有插件的文件或项目链接提供给 Plugin Builder，按照引导转换为 Kimi 插件。转换完成后，请在 Kimi Work 中安装并完成基础测试，再提交生成的插件 ZIP 文件。

### 目前支持哪些 MCP 授权方式？

目前支持以下三种方式：

- **无授权**：用户安装后即可使用，无需登录或完成其他身份验证。
- **OAuth 授权**：用户首次安装插件时会自动跳转至第三方产品的授权页面。完成授权后即可使用插件。
- **CLI 授权**：安装插件时不会触发授权流程；用户首次在会话中唤起插件时，需要按照会话内的提示完成授权。用户成功授权后，后续在其他会话中使用该插件时，通常无需重复授权。

请根据插件的实际授权方式完成测试。如果 OAuth 插件首次安装时未跳转，或 CLI 授权完成后仍被重复要求授权，请在提交申请前检查 MCP Server 的认证配置，并在「其他补充说明」中描述问题。

### OAuth 授权流程是什么样的？

对于支持 OAuth 的 MCP Server，Plugin Builder 会根据 MCP Server 地址识别相关授权信息。插件创建完成后，用户首次安装时会进入第三方产品的授权页面。

<Frames
  src="./images/plugin-submission-guide/oauth-browser-authorization.jpg"
  alt="安装插件后在浏览器中完成 OAuth 授权"
  width={1630}
  height={1568}
/>

### 如果希望与 Kimi 探索进一步的合作，可以如何申请？

请先按照本文完成插件创建、自测和上架申请。如果希望在插件上架之外进一步探索其他合作模式，请在申请表的「其他补充说明」中简要介绍合作设想。Kimi 团队会结合实际情况与你联系。

### 提交申请是否代表插件一定会上架？

不代表。Kimi 团队会结合插件功能、使用体验、安全性、服务稳定性及相关授权情况进行评估。
