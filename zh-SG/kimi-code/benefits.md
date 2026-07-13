---
title: "权益"
slug: "benefits"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="权益 - Kimi 帮助中心"
  description="Kimi Code 是 Kimi 会员套餐包含的一项服务，提供与编程相关的支持和功能，帮助会员在个人开发流程中更高效..."
/>

# Kimi Code 权益

Kimi Code 是 Kimi 会员套餐包含的一项服务，提供与编程相关的支持和功能，帮助会员在个人开发流程中更高效地完成编程任务。

> 请注意，此权益仅限个人开发使用，不适用于企业开发场景。如有企业需求，请访问 [Kimi 开放平台](https://platform.kimi.ai/)。

## 计费

- Kimi Code 的使用费用**已包含在订阅费用中**，无需额外付费。
- Kimi Code **与 Kimi 会员套餐共享同一套额度**——来自 CLI、VS Code 及第三方工具的请求都会计入该额度；不同套餐包含的额度不同。
- 系统会优先消耗赠送额度，再消耗套餐额度。

<Callout type="warning">
**全新会员体系即将上线。** 届时 Kimi 会员权益将与 Kimi Code 权益拆分，可按需分别购买、更加灵活。**当前订阅中的用户不受影响。** 如需继续使用合并权益，可在新体系上线前购买你当前的套餐。
</Callout>

## 额度刷新

额度按 **7 天**为一个周期刷新：

- 从你的订阅日期（D1）开始，每 7 天刷新一次额度。
- 刷新周期：D1–D7、D8–D14、D15–D21、D22–D28。
- 未使用的额度**不会**结转到下一个周期。

> 建议合理规划每周用量，充分利用你的额度。

## 支持的工具

Kimi Code 权益可用于以下工具：

| 工具 | 说明 |
| --- | --- |
| **Kimi Code CLI** | Kimi 官方命令行 AI 智能体 |
| **Claude Code** | Anthropic 的命令行编程助手 |
| **Roo Code** | 适用于 VS Code 的 AI 编程扩展 |

将你的 Kimi Code API Key 用于上述列表之外的平台或工具，可能会被视为滥用，并可能导致访问受限。为获得最佳体验与保障，请使用上方列出的受支持工具。

## Extra Usage

当订阅额度用尽后，你可以使用「加油包（Extra Usage）」余额继续发送请求，无需等待刷新。仅订阅会员可开启，且**网页版 Kimi 与 Kimi Code 共享同一份 Extra Usage 余额**（充值一次，两端通用）。完整条款请见 [Extra Usage 条款](https://www.kimi.com/user/agreement/extra-usage-rules-cn)。

### 充值入口

- **从主站充值**：打开 Kimi [订阅页面](https://www.kimi.com/membership/subscription?tab=quota)，滚动至页面底部的「Extra Usage」模块 → 选择充值金额 → 完成支付。
- **从 Kimi Code Console 充值**：当你的周额度或 5 小时额度任意一项使用量超过 **80%** 时，进度卡片会出现「购买 Extra Usage」按钮，点击即可跳转到订阅页完成购买。

### 开启与管理

打开「Extra Usage」开关后，当订阅额度用尽时，系统会自动从 Extra Usage 余额中扣除。点击模块的「设置」可开启**每月消费上限**、设定本月最多可花费的金额；进度条会实时显示本月 Extra Usage 的消耗情况。

### 计费与规则

- **计费**：按实际用量计费——读取与生成的内容越多、任务越复杂，花费越高。余额以人民币（RMB）显示，费率以平台显示为准。Extra Usage 价格接近 [Kimi Open Platform](https://platform.kimi.com) 的官方 API 价格；用量较大时，升级订阅通常更划算。
- **扣除优先级**：先扣除订阅等限时额度，**Extra Usage 最后扣除**，作为兜底。开启后即使订阅额度用尽，Extra Usage 也能无缝消耗，任务不中断、不报错。
- **消费上限**：可在设置中开启「每月消费上限」，限制本月可花费的 Extra Usage 金额；未开启则不限额。
- **有效期与叠加**：余额不过期，并可跨充值叠加；订阅失效后余额仍可使用，但失效期间无法充值——需重新订阅后才能再次充值。
- **退款**：一般不可退款、转让或兑现。

<Callout type="info">
计费示例（仅供感受量级，实际费率以平台为准）：一次简单请求（如「推荐一首摇滚歌曲」）约 **¥0.03**；一次复杂的多步任务（如「规划一周从成都到川西的自驾行程」）约 **¥1.6**。充值限制：单次最低 ¥25，每日最多 10 次、¥3,000，余额上限 ¥10,000。
</Callout>

### 查询用量

- **Kimi 网页 / App**：设置 → 订阅与发票 → [我的额度](https://www.kimi.com/membership/subscription?tab=quota)。
- **Kimi Code Console**：开启 Extra Usage 后，登录 [Console](https://www.kimi.com/code/console) 即可查看余额与用量。
- **Kimi Code CLI**：在命令行输入 `/usage` 即可直接查询。

### Extra Usage 常见问题

- **网页版 Kimi 和 Kimi Code 的 Extra Usage 是同一个钱包吗？** 是的——余额在两端共享，充值一次即可通用。
- **Extra Usage 和订阅额度谁先扣？** 先扣订阅等限时额度；Extra Usage 只有在所有限时额度耗尽后才作为兜底扣除。
- **达到上限或被限流时还能继续吗？** 可以。开启 Extra Usage 后即不受订阅上限影响：任一额度触顶时会无缝切换至 Extra Usage 余额，任务不中断，且只扣 Extra Usage，不影响会员额度刷新。
- **未用完的余额可以留到下个月并叠加吗？** 可以——不过期且可叠加；订阅失效后仍可使用，但失效期间无法充值。
- **Extra Usage 支持企业版吗？** 暂不支持。
- **注销账号后余额会退回吗？** 请发邮件至 [membership@moonshot.cn](mailto:membership@moonshot.cn) 申请退款。
