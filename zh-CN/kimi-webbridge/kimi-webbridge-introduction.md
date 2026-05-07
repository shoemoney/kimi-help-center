---
title: "Kimi WebBridge 产品介绍"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge 产品介绍 - Kimi Help Center"
  description="Kimi WebBridge 是一款专为 AI Agent 设计的浏览器插件，支持 Chrome 和 Edge，让 Agent 像真人一样与网页交互。"
  ogType="article"
/>

Kimi WebBridge 是一款专为 AI Agent 设计的浏览器插件。与云端浏览器自动化方案不同，Kimi WebBridge 直接在你正在使用的 Chrome 或 Edge 浏览器中执行操作，能够自动获取你的登录态，让 Agent 像真人一样与网页交互。

<Callout type="tip">
建议在主力工作电脑上部署 Kimi WebBridge，以获得最佳的浏览器自动化体验。
</Callout>

<Callout type="info">
WebBridge 通过本地桥接服务和浏览器扩展协同工作，所有执行都在你本地完成，登录态和网页内容不会离开你的设备。
</Callout>

<Frames
  src="./images/introduction.png"
  alt="Kimi WebBridge 介绍"
/>

## 系统要求

| 项目 | 要求 |
|------|------|
| 操作系统 | macOS 或 Windows |
| 浏览器 | Chrome 或 Edge |
| 网络 | 需要稳定的网络连接 |
| 配套应用 | Kimi Claw Desktop 或其他 Local Agent |

## 下载与安装

### Step 1: 下载 Kimi WebBridge 插件

你可以通过以下方式下载：

**方式一：应用商店安装**

- Chrome 用户：前往[Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Edge 用户：前往 [Edge Add-ons 搜索](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**方式二：手动安装**

如果无法访问应用商店，可以使用手动安装方式。

前往[Kimi WebBridge 官网](https://www.kimi.com/webbridge)下载扩展包，然后根据你的浏览器操作：

**Chrome：**

1. 在地址栏打开 `chrome://extensions/`
2. 开启右上角的"开发者模式"
3. 点击"加载已解压的扩展程序"，选择解压后的文件夹

**Edge：**

1. 在地址栏打开 `edge://extensions/`
2. 开启左下角的"开发人员模式"
3. 点击"加载解压缩的扩展"，选择解压后的文件夹

### Step 2: 选择使用方式并完成配置

#### 方式一：搭配 Kimi Claw Desktop（推荐）

1. 下载 Kimi 桌面版（通过官网下载，支持 macOS / Windows）
2. 部署 Kimi Claw
   1. 打开 Kimi 桌面版，在左侧侧边栏找到 Kimi Claw，点击"添加 Claw"
   2. 选择"在我的电脑部署"
   3. 部署成功后，浏览器插件将自动连接

<Callout type="warning">
当前每个用户账号下，最多支持部署 1 个 Kimi Claw Desktop。若你在其他电脑上曾经部署过，则会和你确认是否要断开旧 Claw 的连接，你可以按需选择。
</Callout>

<Frames
  src="./images/使用步骤.png"
  alt="部署步骤"
/>

#### 开始使用

部署成功后即可在 Kimi Claw 中发送指令，例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "帮我打开小红书，搜索关于 Kimi K2.6 发布的帖子",
    },
  ]}
/>

#### 方式二：搭配其他 Local Agent

支持 Claude Code、Codex、Cursor、Kimi Code、Hermers Claw 等。

1. 在 Agent 中发送以下指令：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

2. 开始使用

插件连接成功后即可发送指令，例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "帮我打开小红书，搜索关于 Kimi K2.6 发布的帖子",
    },
  ]}
/>

## 工作原理

Kimi WebBridge 通过以下方式工作：

1. **本地桥接服务**：在你的电脑上运行一个本地服务，接收 Agent 的指令
2. **浏览器扩展**：基于 Chrome DevTools Protocol 在浏览器中执行具体操作
3. **安全隔离**：所有执行都在本地完成，登录态和网页内容不会离开你的设备

执行流程：

<Frames
  src="./images/kimi-webbridge-introduction/workflow.png"
  alt="WebBridge 执行流程"
/>

- Agent 发送指令给本地桥接服务
- 扩展在浏览器中完成导航、点击、截图、读取页面等操作
- 将执行结果回传给 Agent

## 插件界面说明

点击浏览器工具栏的 WebBridge 图标，可以查看当前连接状态：

**已连接**：WebBridge 正常工作，可以与 Agent 协同
**未连接**：需要检查配置或重新运行连接指令

## 功能说明

| 功能 | 说明 |
|------|------|
| 网页导航 | 自动打开指定 URL |
| 元素点击 | 模拟点击按钮、链接等页面元素 |
| 表单填写 | 自动输入文本、选择选项 |
| 页面截图 | 截取当前页面或指定区域 |
| 内容提取 | 读取页面文本、表格等结构化数据 |
| 登录态保持 | 直接使用浏览器中已保存的登录状态 |

使用场景：

- 电商比价：自动在多个电商平台搜索商品、对比价格
- 信息调研：深度浏览网页，提取结构化信息
- 表单填写：自动填写各类在线表单
- 数据录入：将网页数据自动整理录入到指定格式

更多使用案例请参考 [Kimi WebBridge 官网](https://www.kimi.com/webbridge)。

## 常见问题（FAQ）

### 安装与配置

**Q: 安装扩展时提示"无法从该网站添加应用"？**

A: 请确保从官方应用商店（Chrome Web Store 或 Edge Add-ons）安装。如无法访问应用商店，可使用官网提供的手动安装方式。

**Q: 运行连接指令后没有反应？**

A: 请检查网络连接是否正常，确保可以访问 `kimi-web-img.moonshot.cn` 域名。如仍有问题，尝试重启 Kimi Claw Desktop 后再次运行指令。

**Q: 可以在多台电脑上使用吗？**

A: 可以，每台电脑需要单独安装和配置 WebBridge。

**Q: 找不到 Kimi Claw Desktop？**

A: Kimi Claw Desktop 是部署在你本地电脑上的 Kimi Claw。打开 Kimi 桌面版，在左侧边栏找到 Kimi Claw，新建一个 Claw，选择部署到"我的电脑"。

### 连接与使用

**Q: 插件状态显示未连接？**

A: 请确认已成功安装 Kimi WebBridge 浏览器插件，然后根据你的使用方式操作：

- **Kimi 桌面版**：重启 Kimi 桌面版后重试
- **其他 Local Agent**：在 Agent 中重新发送以下指令，运行后重启 Agent：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

**Q: WebBridge 会泄露我的登录信息吗？**

A: 不会。所有执行都在你本地完成，登录态和网页内容不会离开你的设备。Agent 只能获取你授权的操作结果。

**Q: 为什么有时候操作会失败？**

A: 网页结构复杂或动态加载可能导致操作失败。可以尝试简化指令，或让 Agent 先截图确认页面状态后再执行操作。

**Q: 支持哪些浏览器？**

A: 目前支持 Chrome 和 Edge 浏览器，建议使用最新版本以获得最佳体验。

### 与其他 Agent 配合

**Q: 除了 Kimi，还支持哪些 Agent？**

A: WebBridge 支持所有 Local Agent，包括 Claude Code、Codex、Cursor、Kimi Code、Hermers Claw 等。

**Q: 不同 Agent 的配置方式一样吗？**

A: 配置指令相同，都是运行一条 curl 命令完成安装。具体可参考各 Agent 的 Skill 配置方式。

