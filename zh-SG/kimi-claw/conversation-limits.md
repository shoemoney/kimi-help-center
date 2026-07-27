---
title: "对话限制"
slug: "conversation-limits"
order: 6
extract_headings: true
preview: false
---

<SeoMeta
  title="对话限制 - Kimi 帮助中心"
  description="当对话上下文过长，超出模型的 token 限制时，Kimi Claw 可能会停止响应或返回错误。"
/>

# 对话限制

当对话上下文过长，超出模型的 token 限制时，Kimi Claw 可能会停止响应或返回错误。

**解决方法：**

- 发送 `/new`，开启一段新的对话并清除当前上下文。
- 如果执行 `/new` 后错误仍然存在，可能是加载到内存中的技能过多。你可以尝试：
  - `/skills` — 查看已安装的技能，并卸载不需要的项目。
  - `/compact` — 压缩当前上下文以释放空间。
  - `/reset` — 作为最后手段，完全重置 Kimi Claw。

## 达到 API 速率限制？

这表示你已达到请求频率上限。请稍等片刻后重试。

**查看你的配额和速率限制：**

1. 前往 [kimi.com/code](https://kimi.com/code)。
2. 打开**控制台**。
3. 点击**查看配额和速率限制**，了解当前用量和上限。

如果你经常触发速率限制，可以考虑拉开任务间隔，或升级到更高会员等级以获得更高吞吐量。
