---
title: "目标"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "使用目标，让 Kimi Code 在多轮对话中持续朝着明确结果推进。"
---

<SeoMeta
  title="目标 - Kimi 帮助中心"
  description="使用 /goal，让 Kimi Code 在多轮对话中持续朝着明确结果推进。了解何时使用目标、如何管理目标生命周期，以及如何排队后续目标。"
/>

# 目标

目标能让 Kimi Code 在多轮对话中持续朝着明确结果推进。普通提示通常说明下一步要做什么，而目标说明最终必须达成什么状态。当任务有清晰的终点，但下一步该怎么做取决于智能体在执行过程中发现的信息时，可以使用 `/goal`。例如，批量修复失败的测试，或追查构建失败的根因。

## 启动目标

在 `/goal` 后写下目标：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 修复 issue tracker 中列出的 bug。",
    },
  ]}
/>

Kimi Code 会保存该目标，把它作为下一条用户消息发送，并进入目标模式。每一轮结束后，它都会检查目标是已完成、受阻、已暂停，还是仍在进行。

目标最好同时写明终点，以及能够证明目标达成的依据：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 修复所有标记为 checkout-regression 的 bug，为每个修复新增或更新测试，并运行 checkout 测试套件",
    },
  ]}
/>

避免只写一个宽泛方向作为目标：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 找出这个代码库里的所有 bug。",
    },
  ]}
/>

这个目标没有说明怎样算成功、要检查什么，或何时停止。智能体可能会立即受阻，也可能会比你预期工作更久。

### 何时使用目标

适合把目标用于有明确终点、且结果可验证的工作。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 修复所有失败的 checkout 测试，并成功运行 checkout 测试套件。",
    },
  ]}
/>

Kimi Code 可以检查测试输出、修改文件、重新运行检查，并判断目标是否完成。

当任务可能需要多轮排查和修复时，也适合使用目标。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 找出 release build 失败的原因，修复根因，并验证构建可以通过。",
    },
  ]}
/>

目标描述的是结果，因此当第一个线索并非根因时，智能体也能灵活调整方向。

对于需要按顺序完成、且不希望每一步都再次提示的工作，也可以使用目标。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 更新功能实现，补充文档，运行测试，并总结变更过的文件。",
    },
  ]}
/>

当你已经知道工作完成前必须通过哪些检查或产出哪些内容时，这种方式很有用。

### 何时不该使用目标

不要把目标用于宽泛主题或开放式讨论。

**反例：**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 你好！",
    },
  ]}
/>

<Callout type="warning">
对于不构成目标的内容，智能体会立即将目标标记为已完成。
</Callout>

不要把目标用于已知不可能完成或无法解决的任务。

**反例：**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 证明 1 + 1 = 3。",
    },
  ]}
/>

<Callout type="warning">
如果目标看起来不可能完成或无法解决，智能体会将其标记为受阻。
</Callout>

不要使用含糊或过于复杂的目标。

**反例：**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 在单个 HTML 文件中创建一个电子游戏。",
    },
  ]}
/>

<Callout type="warning">
智能体可能会完成目标，但也可能在很长时间后产出意料之外的结果。
</Callout>

## 管理生命周期

使用同一组命令来查看或控制当前目标：

| 命令 | 操作 |
| --- | --- |
| `/goal` or `/goal status` | 显示当前目标及其进度 |
| `/goal pause` | 暂停当前活动目标，但不删除它 |
| `/goal resume` | 继续已暂停或受阻的目标 |
| `/goal cancel` | 移除当前目标 |
| `/goal replace <objective>` | 用新目标替换当前目标 |

目标可能以三种方式停止：

- **complete**：目标已完成，Kimi Code 会清除目标，智能体会总结它是如何完成工作的
- **paused**：你暂停了目标、中断了当前轮次、恢复了一个带有活动目标的会话，或遇到了模型、服务提供方或运行时错误
- **blocked**：Kimi Code 需要输入，无法按当前表述完成目标，或达到了预算上限。当智能体使目标受阻时，会写一条简短消息说明原因。

请把停止条件写进目标中。`/goal` 没有单独的停止限制标志。

## 排队后续目标

有时智能体会很快完成目标。用户可能会因为一次只能分配一个目标而感到不便。很多人其实已经知道接下来想继续推进哪些目标。过去，他们必须等当前目标完成，打开 TUI，然后手动提交下一个目标。

当你已经准备好更多工作，但不想打断当前目标时，可以使用 `/goal next`：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next 测试通过后更新 release notes",
    },
  ]}
/>

当前目标运行时，智能体看不到后续目标。当前目标完成后，Kimi Code 会像用户输入 `/goal <objective>` 一样，启动第一个后续目标。

如果当前没有活动目标，`/goal next <objective>` 会立即启动该目标。它的行为与 `/goal <objective>` 相同，并会在目标启动前显示一条状态消息。

你可以通过交互方式管理后续目标：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

在管理器中，使用 <kbd>↑</kbd> / <kbd>↓</kbd> 浏览，按 <kbd>Space</kbd> 选择要移动的目标，再用 <kbd>↑</kbd> / <kbd>↓</kbd> 调整顺序；按 <kbd>E</kbd> 编辑，按 <kbd>D</kbd> 删除，按 <kbd>Esc</kbd> 取消。编辑时，使用 <kbd>Shift-Enter</kbd> 或 <kbd>Ctrl-J</kbd> 添加新行，按 <kbd>Enter</kbd> 保存。

如果当前目标已暂停、已取消或受阻，Kimi Code 不会启动下一个后续目标。当目标受阻且存在后续目标时，TUI 会提醒你这些目标仍在等待当前目标完成。

## 谨慎使用目标模式

目标模式适合那些可以通过文件、测试、命令输出、生成产物或清晰书面报告来验证的工作。对于一次性编辑，或只需要一个答案的问题，它的作用相对有限。

在 `manual` 权限模式下，目标执行可能会因工具调用审批而暂停。对于无人值守的工作，请根据仓库风险和智能体可能运行的命令，选择合适的权限模式。

在非交互式提示模式下，仅支持创建目标：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal 修复失败的 checkout 测试\"",
    },
  ]}
/>

目标完成时，提示模式会以代码 `0` 退出；目标受阻时以 `3` 退出；目标暂停时以 `6` 退出。`/goal next` 和其他管理命令属于 TUI 控件。
