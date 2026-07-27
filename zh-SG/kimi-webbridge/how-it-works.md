---
title: "Kimi WebBridge 的工作原理"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge 的工作原理 - Kimi 帮助中心"
  description="了解 Kimi WebBridge 如何在本地将你的浏览器连接到 AI Agent，安全完成网页导航、点击、截图等操作。"
  ogType="article"
/>

# Kimi WebBridge 的工作原理

## 工作流程

Kimi WebBridge 的运行方式如下：

1. **本地桥接服务**：在你的电脑上运行本地服务，用于接收来自 Agent 的指令
2. **浏览器扩展程序**：基于 Chrome DevTools Protocol，在浏览器中执行具体操作
3. **安全隔离**：所有执行过程都在本地完成——登录状态和网页内容都不会离开你的设备

<Frames
  src="./images/workflow.png"
  alt="工作流程"
/>

## 扩展程序界面

点击浏览器工具栏中的 WebBridge 图标，即可查看当前连接状态：

**已连接**：WebBridge 运行正常，可与 Agent 协同工作。

**未连接**：请检查你的配置，或重新运行连接命令。

<Frames
  src="./images/connection.png"
  alt="WebBridge 连接"
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

更多使用场景，请参阅 [Kimi WebBridge 官方网站](https://www.kimi.com/features/webbridge)。
