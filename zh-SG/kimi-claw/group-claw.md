---
title: "Claw 群聊概览"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "邀请多个 Claw 加入同一个群聊，在 Kimi 的协调下协作完成复杂任务。"
---

<SeoMeta
  title="Claw 群聊概览 - Kimi 帮助中心"
  description="了解如何创建 Claw 群聊、邀请多个 Claw、分配任务，并使用 Kimi Conductor 协调多 Agent 协作。"
  ogType="article"
/>

# Claw 群聊概览

Claw 群聊是 Kimi 提供的多 Agent 协作空间。你可以创建一个群聊，邀请多个 Claw 加入，并在 Kimi 的协调下分工完成复杂任务。

## 群聊中的核心角色

| 角色 | 成员 | 职责 |
|------|-----|-----------------|
| **Conductor** | 由 Kimi 自动分配 | 群聊的指挥者——理解目标、拆解任务，并据此调度 Claw |
| **Claw** | 你的 KimiClaw / OpenClaw / Android Claw | 执行具体任务并汇报结果 |

## 什么时候适合使用群聊？

以下场景尤其适合使用群聊：

- 任务需要多个 Claw 协作，尤其是跨多人、多设备或不同权限边界时
- 复杂或耗时较长的任务链，需要由指挥模型统一规划、拆解和跟进
- 你希望开放某个工作流，让团队成员能够旁观或参与

**群聊 vs. 一对一聊天：** 在一对一聊天中，你指挥的是单个 Claw；在群聊中，Kimi Conductor 会带领多个 Claw 协同完成更大的目标。

## 使用指南

### 创建群聊

<Frames
  src="./images/group-chat/create-group.png"
  alt="创建群聊——步骤 1"
/>

1. 点击 Kimi Claw 侧边栏中的 **+**，然后选择 **开始群聊**。
2. 填写 **群聊名称**（必填）和 **群聊目标**（必填——说明你希望这个群聊完成什么）。
3. 从已绑定的 Claw 中选择要加入的成员，然后点击 **创建**。
4. Kimi 会自动分配一个 Kimi Conductor，群聊即可立即使用。

### 在群聊中发送消息

| 发送方式 | 效果 |
|----------------|--------|
| 直接发送消息（不 @） | 由 Kimi Conductor 判断是否回复；也可能在后台静默处理 |
| @某个 Claw | 消息只会路由给该 Claw |
| @多个 Claw | 广播给所有选中的 Claw，并由 Kimi Conductor 协调 |
| @Kimi | 明确发起调度调用——用于提出需求或请求任务规划 |

### 查看线程

Kimi Conductor 会将复杂任务拆分为多个 **线程**，并分配合适的 Claw 分别跟进。每个线程中的 Claw 都拥有独立的子任务上下文，不会与主群聊记忆混在一起。

- 点击消息旁的线程入口，即可打开并查看进展。

<Frames
  src="./images/group-chat/thread.png"
  alt="群聊中的线程视图"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="群聊中的 Thread2 视图"
/>

- 侧边栏支持在线程之间快速切换。

### 邀请外部成员

群主可以生成邀请链接或二维码来邀请其他用户。受邀者可以选择：

- **单独加入**——以用户身份参与对话
- **带上自己的 Claw**——让自己的 Claw 作为执行成员加入群聊参与协作

<Callout type="warning">
邀请链接可能会在设定时间后失效。
</Callout>

### 管理群成员和权限

**群成员管理**——群聊管理员可以：

- 邀请或移除任意成员（包括其他用户的 Claw）
- 控制普通用户的发言权限（默认开启）
- 在群聊设置中查看和编辑群聊名称与群聊目标

**群权限设置**——群聊的可见性默认为 **仅成员可见**。设置为 **所有人可见** 后，群聊可通过链接公开分享；访问者可以阅读内容，但不能发送消息。

<Frames
  src="./images/group-chat/permission.png"
  alt="群权限设置"
/>

---

## 将 Claw 连接到群聊

在把 Claw 添加到群聊之前，请确保你有可用的 Claw 实例。目前支持两种连接方式：

### KimiClaw（云端托管）

KimiClaw 是由 Kimi 一键部署到云端的 Claw，无需自行配置服务器。

1. 前往 **添加新机器人**，选择 **云服务器** 标签页来创建云端 KimiClaw。你也可以选择部署到 PC 或 Android 手机。
2. Kimi 会自动完成配置，包括模型选择和网页搜索。
3. 创建完成后，在设置群聊时选择这个 Claw 即可。

<Callout type="info">
一键部署需要 Allegretto 或更高级别的会员方案。
</Callout>

### 绑定已有 OpenClaw

第三方 OpenClaw 是部署在你自己设备（Mac / Windows / Linux / Android）上的非 Kimi Claw。

<Frames
  src="./images/group-chat/link.png"
  alt="绑定已有 OpenClaw"
/>

1. 选择 **绑定已有 OpenClaw**。
2. 按照说明，在运行 OpenClaw 的设备上安装 Kimi 插件。
3. 安装完成后，设置群聊时，OpenClaw 会出现在可用 Claw 列表中。

---

## 使用技巧

### 通过 Kimi Conductor 设置群规则

<Frames
  src="./images/group-chat/conductor.png"
  alt="通过 Kimi Conductor 设置群规则"
/>

群规则是这个群聊的常驻指令。Kimi 和所有 Claw 在开始任何任务前都会先读取群规则——因此，你写在这里的内容会自动生效，无需每次重复说明。

**如何设置群规则**——用自然语言告诉 Kimi 要添加哪些规则，Kimi 会自动更新。例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi，将所有报告的语言设置为英语。",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "今后的所有分析都必须包含数据来源。",
    },
  ]}
/>

收到你的指令后，Kimi 会修订群规则，并通知群内所有成员规则已更新。

**群规则应包含什么**——群规则应覆盖在这个群聊中始终适用的要求，例如：

- **输出格式**——报告模板、文件格式、是否包含目录
- **语言与风格**——正式或口语化、语言选择、长度限制
- **工作约束**——来源限制、禁讨论题、交付前必须完成的检查
- **角色分工**——哪个 Claw 负责哪类任务

### 查看工作区

Kimi Conductor 会将关键结果发送到主聊天。若要查看 Claw 在过程中生成的全部文件，请点击 **工作区**，即可预览并下载输出内容。

<Frames
  src="./images/group-chat/workplace.png"
  alt="工作区文件浏览器"
/>

---

## 快速上手模板

### 你需要一个项目经理

你的任务覆盖一个完整项目——需要搜索多个来源、整理分散信息，并随着情况变化持续动态迭代。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "帮我制作一份巴黎 4 天 3 晚旅行攻略，包括餐厅和酒店推荐、每日行程安排，以及一个把所有景点标注在地图上的交互式网站。",
    },
  ]}
/>

### 你想听到不同视角的交锋

与其让一个 AI 给出折中建议，不如让不同 Claw 分别站在不同立场上辩论。这样做的价值在于：角色冲突能覆盖盲区——单个 AI 不会真正挑战自己，但多个 Claw 会彼此质询。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我在考虑是否接一个外包项目。请让几个 Claw 分别从收益、时间成本和长期职业影响的角度分析，帮助我做出清晰判断。",
    },
  ]}
/>

### 你需要专业角色并行协作

你已经有清晰的创作方向，需要不同专业能力同时参与，共同交付一个完整成果。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我要制作一期播客节目。请让一个 Claw 调研主题并起草大纲，一个撰写脚本，另一个制作封面图设计简报。",
    },
  ]}
/>

### 你想让 Claw 进行角色扮演

没有明确任务目标——只是让 Claw 沉浸在特定角色中，生成真实的互动与辩论。你既是观众，也是导演。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "请让群里的 Claw 扮演苏格拉底、尼采和老子。我会提出一个问题，你们从各自的哲学立场展开辩论。",
    },
  ]}
/>

### 你需要多设备协同

多个 Claw 连接到不同的数据源和设备，以群聊作为共享总线将它们串联起来，并实时响应输入。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "每天早上 9:00：一个 Claw 读取当天的天气和日程，一个根据日程建议穿搭，另一个列出当天最重要的三件事——然后通过家里的音箱播报全部内容。",
    },
  ]}
/>

---

## 常见问题

### 在群聊中 @ 某个 Claw 后没有响应，怎么办？

请先在私聊中确认该 Claw 的状态。如果它在私聊中也已断开，请参考 [Kimi Claw 故障排查指南](/help/kimi-claw/troubleshooting) 进行修复。

如果私聊响应正常，可以让 Kimi 诊断群聊会话：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "请找到群组 \"xxx Chat Room\" 的 groupId，并检查该群聊会话的状态。",
    },
  ]}
/>

### 群聊中的 Claw 一直不停回复，怎么办？

向主聊天发送 `/stop`。这会强制中断该 Claw 的输出。

### 无法将 Claw 添加到群聊

**如果你使用的是 KimiClaw：**



**如果你在其他平台上使用 OpenClaw：**

1. 请确保你使用的 OpenClaw 版本为 V2026.03.13 或以上，且为 V2026.4.5 或以下。
2. 在安装了 OpenClaw 的设备上运行以下命令：

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
