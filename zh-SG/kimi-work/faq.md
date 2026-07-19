---
title: "常见问题"
slug: "kimi-work-faq"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Work 常见问题 - Kimi 帮助中心"
  description="Kimi Work 常见问题解答：与网页版的区别、访问本地文件的权限控制、WebBridge 浏览器自动化能做什么、定时任务如何运行。"
/>

# Kimi Work 常见问题

## Kimi Work 和网页版有什么区别？

Kimi 网页版适合快速对话和查询；Kimi Work 是为深度工作流设计的本地 Agent。它能读取并处理你的本地文件夹、通过 WebBridge 自主浏览网页、在后台运行 Python 代码、执行定时任务，是一个系统级的「数字员工」。

## 访问本地文件时，Kimi Work 如何保护我的隐私？

你对自己的文件拥有绝对控制权。Kimi Work 提供权限控制，由你自行选择授权方式：

- **请求权限**：操作前先请求授权，Kimi 在修改、覆盖本地文件或运行代码前会请求你的明确授权；
- **全部允许**：无需授权直接执行。

选择「请求权限」时，未经你同意不会发生任何操作。

## WebBridge（浏览器自动化）具体能做什么？

WebBridge 让 Kimi 能像人一样使用浏览器。你可以让它查看某个网站的最新资讯并总结，或把历史股票数据抓取到本地 Excel。它会自主点击、滚动、提取数据，为你节省大量手动操作时间。

## 定时任务能做什么？电脑休眠时还会运行吗？

内置的 Cron 调度器支持 LLM Agent 调用、Python/Shell 执行等，可按天、按小时或按条件触发。为确保任务在夜间也能顺利运行，只需在设置中开启「保持电脑唤醒」（Keep Computer Awake）选项即可。
