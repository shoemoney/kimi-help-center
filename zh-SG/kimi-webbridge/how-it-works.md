---
title: "Kimi 浏览器扩展的工作原理"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi 浏览器扩展的工作原理 - Kimi 帮助中心"
  description="了解 Kimi 浏览器扩展如何在本地将你的浏览器连接到 AI Agent，安全完成网页导航、点击、截图等操作。"
  ogType="article"
/>

# Kimi 浏览器扩展的工作原理

## 工作流程

Kimi 浏览器扩展支持**侧边栏对话**和**本地 Agent 远程控制**两种用法，通过以下方式工作：

1. **浏览器侧边栏**：点击工具栏的 Kimi 图标打开侧边栏，登录 Kimi 会员即可直接对话
2. **本地桥接服务**：在你的电脑上运行本地服务，用于接收来自 Agent 的指令
3. **浏览器扩展程序**：基于 Chrome DevTools Protocol，在浏览器中执行具体操作
4. **安全隔离**：所有执行过程都在本地完成——登录状态和网页内容都不会离开你的设备

<Frames
  src="./images/workflow.png"
  alt="工作流程"
/>

## 扩展程序界面

点击浏览器工具栏的 Kimi 浏览器扩展图标，即可展开侧边栏并发送任务。

<Frames
  src="./images/sidebar.png"
  alt="Kimi 浏览器扩展侧边栏"
/>

## 功能

| 功能 | 说明 |
|---------|-------------|
| 网页导航 | 自动打开指定 URL |
| 元素点击 | 模拟点击按钮、链接等页面元素 |
| 表单填写 | 自动输入文本并选择选项 |
| 页面截图 | 截取当前页面或指定区域 |
| 内容提取 | 读取页面文本、表格及其他结构化数据 |
| 登录会话保持 | 使用浏览器中已保存的登录状态 |

使用场景：

- 电商比价：自动搜索商品，并在多个平台之间比较价格
- 信息调研：深入浏览网页，提取结构化信息
- 表单填写：自动填写各类在线表单
- 数据录入：自动整理网页数据，并按指定格式录入

更多使用场景，请参阅 [Kimi 浏览器扩展官方网站](https://www.kimi.com/features/webbridge)。
