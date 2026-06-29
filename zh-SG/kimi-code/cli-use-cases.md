---
title: "常见使用场景"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="常见使用场景 - Kimi 帮助中心"
  description="下面列出日常开发中使用 Kimi Code 命令行界面（CLI）的一些典型场景，并为每个场景提供示例提示词供参考。"
/>

# 常见使用场景

下面列出日常开发中使用 Kimi Code 命令行界面（CLI）的一些典型场景，并为每个场景提供示例提示词供参考。

## 实现新功能

用自然语言描述你的需求，AI 会自动阅读相关代码、编写新代码并验证结果。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "为用户列表页添加按注册日期排序的功能——前端和后端都需要修改",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "使用 token bucket 算法实现一个速率限制中间件，将每个 IP 限制为每分钟 60 次请求",
    },
  ]}
/>

## 修复 bug

直接把错误信息粘贴给 AI，它会自动定位根因并给出修复方案。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "运行 npm test 后出现以下错误，请修复：\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "CI 流水线在 lint 阶段失败了。日志如下：... 请修复",
    },
  ]}
/>

## 理解项目

刚接手一个新项目，或需要理解某段特定代码时，直接提问即可。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "这个项目的整体架构是怎样的？主要模块有哪些？",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/auth/middleware.ts 的作用是什么？认证流程是如何运作的？",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "说明这个项目如何管理数据库迁移",
    },
  ]}
/>

## 自动化小任务

适合批量修改代码、补充文档、生成测试，以及处理其他重复性工作。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "为 src/utils/ 目录中所有导出的函数添加 JSDoc 注释",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "为 UserService 类的所有 public 方法生成单元测试",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "将项目中所有 var 声明替换为 const 或 let",
    },
  ]}
/>

## 通用任务

Kimi Code 命令行界面（CLI）不只会写代码，也能处理调研、数据分析、批量文件操作等任务。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "调研当前主流的 Node.js ORM 库，并比较它们的优缺点",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "分析 logs/ 目录中过去 7 天的访问日志，并列出请求量最高的 10 个路径",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "将 data/ 目录中的所有 CSV 文件合并为一个文件，并删除重复行",
    },
  ]}
/>
