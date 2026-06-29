---
title: "Slides 生成卡住怎么办？"
slug: "ppt-stuck"
order: 3
extract_headings: false
preview: false
preview_content: "Slides 故障排查与反馈指南：功能入口找不到、无法打开或预览异常。"
---

<SeoMeta
  title="Slides 生成卡住怎么办？ - Kimi 帮助中心"
  description="如果生成过程停滞，文件一直无法完成，通常是 Slides 生成失败所致。"
/>

# 常见问题与排查

如果你找不到 Slides 功能入口、无法打开已生成的演示文稿，或发现下载后的文件异常，可以按以下步骤排查。

## Kimi Slides 入口

1. **网页端**：打开 [kimi.com](https://www.kimi.com/)，点击聊天输入框下方的 Slides 快捷入口，或直接访问 [Kimi Slides](https://www.kimi.com/slides)。
2. **App**：打开 Kimi app，点击输入框下方工具栏中的 Slides 按钮。
3. **Agent 模式**：在通用 Agent 模式中直接描述你的演示文稿需求，Kimi 会自动调用 Slides 生成能力。

## 自适应模式下 Slides 生成卡住怎么办

Kimi Slides 生成可能会在以下情况下卡住：

- **生成过程中任务中断**：点击右下角按钮继续任务，模型会接着完成你的演示文稿。
- **任务被取消**：这通常是 Kimi Slides 生成失败导致的。你可以直接开启新的聊天，输入相同的任务指令后重试。

<Callout type="info">
如需进一步协助，请通过产品内的 👎 反馈渠道联系我们的团队，或发送邮件至 [support@moonshot.cn](mailto:support@moonshot.cn)。
</Callout>

## 自适应模式下 Slides 弹出卡片与预览问题

模型完成演示文稿创建后，对话末尾会提示你“点击下方卡片预览”，并弹出 Slides 卡片。点击卡片即可进入 Slides 编辑页。

<Frames
  src="./images/pptcard.png"
  alt="pptcard"
/>

如果点击 Slides 卡片后无法打开编辑页，请尝试刷新并重新打开页面。如果问题仍然存在，请清除浏览器缓存后再试。

### Slides 卡片未弹出

- 在其他浏览器（如 Chrome、Safari、Firefox）中打开同一段对话，检查 Slides 卡片是否正常显示。
- 在移动端 App 或另一台电脑上登录同一账号，检查该对话中是否包含 Slides 结果。
- 如果在多个浏览器和设备上 Slides 卡片仍无法出现，请按照下方的 [Bug 反馈指南](#bug-feedback-guidelines) 提交反馈，并开启新的聊天重新生成。

<Callout type="info">
如果你已确认该问题在多个设备和浏览器上均存在，请发送邮件至 [support@moonshot.cn](mailto:support@moonshot.cn) 进行反馈，并附上对话链接和问题截图。经核实为 bug 后，我们会为你补偿相应额度。
</Callout>

### Slides 预览为空白或样式错乱

- 使用最新版的主流浏览器，例如 Chrome、Edge 或 Safari。
- 检查网络连接是否稳定，因为 Slides 预览需要加载在线资源。
- 尝试切换浏览器，或使用无痕/隐私模式，以排除浏览器扩展的干扰。

## 如何下载 Slides

- **网页端**：在 Slides 编辑器中，点击右上角的 **[下载]** 按钮，然后点击 **确认** 开始下载文件。如果下载时遇到问题，请检查网络连接是否稳定，或尝试切换浏览器。
- **App**：Slides 生成完成后，点击 **[导出]** 分享到其他应用。


## 下载后无法打开 Slides

- **网页端**：尝试刷新页面并重新打开；如果仍无法打开，请清除浏览器缓存后再试。
- **下载后无法打开**：请确保使用支持 `.pptx` 格式的软件，例如 Microsoft PowerPoint 或 Keynote。部分较旧版本的办公软件可能不兼容。
- **文件为 0 KB 或已损坏**：这通常是生成过程中出现问题导致的。请开启新的聊天并重新生成。

<Callout type="info">
部分较旧版本的办公软件可能不兼容。如果下载后无法打开文件，建议下载最新版办公软件。
</Callout>



## Bug 反馈指南

如果以上方法仍未解决问题，请通过产品内的 👎 反馈渠道提交反馈，或发送邮件至 [support@moonshot.cn](mailto:support@moonshot.cn)。为了帮助我们更快定位问题，请尽可能提供以下信息：

| 信息类型 | 详情 |
|------------------|---------|
| **浏览器信息** | 浏览器名称和版本（例如 Chrome 126、Safari 18.1、Edge 126） |
| **系统信息** | 电脑：操作系统和版本（例如 macOS 15.4、Windows 11 24H2）；移动设备：系统和版本（例如 iOS 18.4、Android 15、HarmonyOS 5.0）以及手机型号 |
| **截图** | 截取显示异常页面的完整浏览器窗口或 App 界面 |
| **复现步骤** | 简要说明复现该问题的步骤 |

<Callout type="info">
**如何查看浏览器版本：** Chrome：点击右上角 ⋮ 图标 → 帮助 → 关于 Google Chrome；Safari：点击菜单栏中的“Safari” → 关于 Safari；Edge：点击右上角 ⋯ 图标 → 帮助和反馈 → 关于 Microsoft Edge。
</Callout>

## 反馈入口

**网页端：** 官网左下角：账号 → 用户反馈 → 帮助与反馈

<Frames
  src="./images/feedback1.png"
  alt="feedback1"
/>

**Slides 结果页：** 点击 Slides 结果页右下角的「☰」菜单按钮 → 「用户反馈」 → 「Slides 专属反馈入口」，进入 Slides 反馈页面并填写信息。

<Frames
  src="./images/feedback2.png"
  alt="feedback2"
/>
