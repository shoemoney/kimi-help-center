---
title: "Kimi Claw Android 概览"
slug: "kimi-claw-android-guide"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Claw Android 概览 - Kimi 帮助中心"
  description="了解如何在 Android 手机上部署 OpenClaw，把它变成全天候 AI 远程助手。"
  ogType="article"
/>

# Kimi Claw Android 概览

本文将介绍如何将 OpenClaw 部署到 Android 手机上，把闲置手机变成全天候 AI 远程助手。你可以远程控制手机、使用应用、连接智能家居，并通过 Kimi、飞书、微信等聊天应用创建自己的个性化助手。

建议将 Kimi Claw Android 部署在闲置手机上，避免与日常使用产生权限冲突。请不要手动升级 OpenClaw 版本；官方适配后的更新会通过 App 内版本更新推送。

## Kimi Claw Android 介绍

<Frames
  src="./images/kimi-claw-android-guide/img-06.png"
/>

系统要求：

| 项目 | 要求 |
| --- | --- |
| 操作系统 | Android 8.0 及以上 |
| 可用存储空间 | 至少 5GB |
| 网络 | 需要稳定的网络连接 |
| 账号 | Kimi Allegretto 及以上订阅 |

<Callout type="info">
建议使用闲置手机，避免影响日常使用。
</Callout>

## 下载与安装
### 下载 Kimi Claw Android

你可以通过以下方式下载：

#### 方法 1：扫描网页二维码下载
登录 [kimi.com](https://kimi.com)，找到“下载 Kimi Claw Android”入口，并使用 Android 手机扫描页面上的二维码下载。

<Frames
  src="./images/kimi-claw-android-guide/img-03.png"
/>

#### 方法 2：直接从 Google Play 下载
在手机应用商店中搜索“Kimi Claw”并完成下载。

#### 方法 3：在手机端下载 Kimi App
打开 Kimi App，点击 Kimi Claw Android，也可以关联已有的 OpenClaw 实例。

### 初始配置 

首次打开 Kimi Claw Android 时，你会看到欢迎页。了解以下重要信息后，点击“开始配置”进入设置流程。

- 快速部署 OpenClaw —— 将 OpenClaw 部署到本地手机，并通过 Kimi、飞书等渠道通信。
- 建议使用闲置手机 —— Kimi Claw Android 需要稳定网络才能运行，建议使用闲置手机。
- 请安全使用 —— OpenClaw 可能涉及隐私和安全风险，请谨慎使用。

勾选同意《隐私政策》和《用户协议》后继续。

#### 步骤 1：授予权限
Kimi Claw Android 需要以下权限，才能在后台稳定运行。请逐项点击“授权”完成授权。

| 权限 | 说明 |
| --- | --- |
| 系统通知 | 显示 gateway 状态和提醒 |
| 存储空间权限 | 需要至少 5GB 可用空间 |
| 后台运行权限 | 切换到后台时保持 gateway 运行 |

不同手机品牌的设置路径可能不同，以下为通用步骤：

1. 点击“打开设置”，跳转到手机设置页
2. 进入应用管理列表，选择 Kimi Claw Android
3. 开启自启动开关
4. 在耗电管理中选择“完全允许后台行为”
5. 返回 Kimi Claw Android，点击“我已完成”继续安装

#### 步骤 2：配置 Kimi 账号

1. 点击“去配置”，跳转到 Kimi App 完成授权
2. 授权后，Kimi 会自动为 Kimi Claw Android 创建 Kimi Coding Plan API key
3. 如果你是免费用户，需要先开通会员权益。点击“去升级”即可开通会员。

#### 步骤 3：安装 OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-08.png"
/>

如果安装失败，可以点击“重新安装”再次尝试。若多次失败，请点击“遇到问题？去反馈”提交问题。

## Dashboard 使用指南

### 主界面

<Frames
  src="./images/kimi-claw-android-guide/img-14.png"
/>

完成配置后，进入 Dashboard 主界面，你可以看到以下信息：

- OpenClaw gateway 状态 —— 启动中 / 已连接 / 已停止，以及运行时长
- 聊天渠道 —— 当前已连接的通信渠道列表
- OpenClaw 日志 —— OpenClaw 运行的原始日志
- 使用 Kimi 对话 —— 打开 Kimi App，进入 Kimi Claw Android 对应的对话界面，并自动切换到对应的 Claw。

如果 Dashboard 顶部出现权限提醒，说明部分权限尚未授予或已失效。请按照提示逐项完成授权，以确保 Kimi Claw Android 正常运行。

### 聊天渠道管理

<Frames
  src="./images/kimi-claw-android-guide/img-33.png"
/>
在 Dashboard 中，你可以管理所有通信渠道：

- 查看已连接渠道及其状态（例如：Kimi - 已连接、飞书 - 已连接）
- 点击“+ 连接”添加新的聊天渠道
- 点击已有渠道，查看详情或删除

<Callout type="info">
请至少保留一个聊天渠道，以确保能与 Kimi Claw Android 正常通信。
</Callout>

### OpenClaw 日志

- 搜索 —— 按关键词搜索日志内容
- 过滤级别 —— 按日志级别过滤（Info / Warning / Error 等）
- 自动滚动到底部 —— 自动滚动到最新日志
- 刷新 —— 手动刷新日志内容

<Frames
  src="./images/kimi-claw-android-guide/img-16.png"
/>

### 设置

<Frames
  src="./images/kimi-claw-android-guide/img-21.png"
/>
点击设置进入设置页：

**功能层：**

- ClawHub 技能：自动关联 ClawHub 官网，管理 Kimi Claw Android 可用的技能
- OpenClaw 工作区：进入本地 OpenClaw 配置文件目录，编辑个人偏好

**系统层：**

<Frames
  src="./images/kimi-claw-android-guide/backup.png"
/>
- 备份与恢复：备份当前 OpenClaw 配置和历史记录，并支持恢复过去的配置与记录
- 无障碍服务：监控手机的无障碍服务权限
- 后台运行权限：监控手机的后台运行权限
- 版本升级：监控版本，点击后自动升级

**关于：**

- 帮助：基础使用建议说明
- 反馈：提交反馈
- 用户协议：阅读用户协议
- 隐私政策：阅读隐私政策

#### ClawHub 技能

自动关联 ClawHub 官网，管理 Kimi Claw Android 可用的技能。你可以下载并安装 Skills，扩展 Claw 的能力。

#### OpenClaw 工作区

<Frames
  src="./images/kimi-claw-android-guide/img-19.png"
/>

#### 备份与恢复

Kimi Claw Android 提供自动备份和手动备份功能，确保你的 OpenClaw 历史记录和配置不会丢失。

自动备份

Kimi Claw Android 会定期自动备份当前 OpenClaw 的历史记录和配置，并打包为压缩文件保存。无需手动操作，系统会在后台自动完成。

手动备份：

如果你希望记录某个特定时刻的状态，也可以主动点击备份，手动保存当前历史记录和配置快照。点击“备份”即可导出当前所有配置备份。

**恢复配置：**

Kimi Claw Android 支持恢复到之前的配置状态。同时支持恢复 Kimi Claw Android 的自动备份状态和主动备份状态。

在以下场景中，你可以使用恢复功能回到之前的状态：

- 卸载或重装 App 导致历史记录消失时，可以恢复过去的记录
- 需要切换 Claw 配置时，可以恢复到此前保存的配置状态
- 更换手机并重新部署时，只需导入备份文件即可恢复

在备份列表中点击对应的备份文件，即可自动将历史记录和配置恢复到该时间点，确保过去的记录不会被抹除。

## 配置聊天渠道

### Kimi
Kimi 是默认通信渠道，在 Onboarding 流程中完成 Kimi 账号配置后会自动连接，无需额外操作。

安装和配置完成后，你的 Kimi Claw Android 会自动出现在 Web 端（kimi.com）的 Bot 切换页。点击切换后，头像和聊天线程会同步切换。

Kimi Claw Android 在 Bot 管理中仅支持编辑 Bot 名称和删除 Bot。

### 飞书
<Frames
  src="./images/kimi-claw-android-guide/img-25.png"
/>

支持三种连接方式：

方法 1：打开飞书创建

点击“打开飞书创建”，按提示在飞书中完成应用创建，状态会自动更新为“已连接”。

方法 2：扫描二维码创建

1. 点击“扫描二维码创建”
2. 使用飞书扫描二维码
3. 在浏览器中完成飞书应用创建

**方法 3：手动输入 Bot 信息**

1. 点击“手动输入 Bot 信息”
2. 输入 App ID 和 App Secret
3. 点击“添加”完成连接

### 微信
微信渠道需要先在微信端安装 WeChat Claw，Kimi Claw Android 会通过 WeChat Claw 端进行通信。

你需要先按照微信官方指引完成 WeChat Claw 的安装。当聊天页出现 WeChat ClawBot 时，即表示安装完成。

进入 Kimi Claw Android，连接微信渠道，并使用微信扫描二维码完成流程。

### Telegram

<Frames
  src="./images/kimi-claw-android-guide/img-34.png"
/>

Kimi Claw Android 支持 Telegram 集成，用户需要先获取自己的 bot token 和用户 ID。

## 自动化

Kimi Claw Android 的核心能力之一，是控制手机上的 App 完成各种任务。你通过 Kimi、飞书、微信等聊天渠道向 Claw 发送指令后，Claw 会自动打开手机上的对应应用，像真人一样执行一系列操作，最终完成你指定的任务。

### 工作原理

当你通过聊天渠道向 Claw 发送任务指令时，Claw 会：

1. 理解你的任务需求
2. 自动打开手机上的对应 App
3. 通过模拟用户操作（点击、滑动、输入等）逐步完成任务
4. 在执行过程中截图，便于你回看执行过程
5. 完成任务后向你汇报执行结果

### 典型使用场景

#### 购物与消费

在淘宝、天猫、美团等平台上搜索商品、加入购物车、查看订单、领取优惠等。

#### 出行与导航

在 Amap 上查询打车费用、查看地铁时刻、搜索附近酒店、预订行程等。

#### 社交与内容

在微信、Rednote、Douyin 等平台上查看消息、浏览内容、搜索商品、进行互动操作等。

## 使用技巧

### 通过聊天软件控制手机

完成配置后，你可以在 Kimi、飞书和微信中向 Claw 发送命令，远程控制 Android 手机上的应用。例如：

- 帮我打开微信，查看最新消息
- 打开地图，搜索附近的餐厅
- “帮我看看日历，今天有什么安排”

### 使用 ClawHub Skills

<Frames
  src="./images/kimi-claw-android-guide/img-18.png"
/>
Kimi Claw Android 内置 ClawHub 技能库。你可以在设置中管理和安装技能，为 Claw 扩展更多能力。

适合使用 Skills 的场景：
- 信息整理：新闻聚合、竞品对比
- 数据分析：市场复盘、数据解读
- 工作流自动化：从需求拆解到产出的完整流程

### 多渠道同时在线
你可以同时连接 Kimi、飞书、微信等多个渠道，并在不同聊天应用中与 Claw 对话。只需在 Dashboard 的渠道管理中点击“+ 连接”即可添加。

## 安全与受限应用

### 安全说明

使用 Kimi Claw Android 前，请注意以下安全事项：

1. 使用闲置手机 —— Kimi Claw Android 会占用手机系统权限，可能影响日常使用。建议使用闲置手机。

2.  敏感数据隔离 —— Kimi Claw Android 会读取本地文件数据，请提前清理或隔离敏感信息。

3. 金融应用保护 —— 系统已自动屏蔽银行、支付、证券、保险类应用的访问，以保障资金安全。

### 受限应用列表

出于金融安全和隐私考虑，以下类别的 App 会被 Kimi Claw Android 自动屏蔽访问，无法远程操作：

1. 社交

| Package | 风险说明 |
| --- | --- |
| wechat | 涉及重要的私人社交和支付功能 |

2. 银行

| Package | App 名称 | 风险说明 |
| --- | --- | --- |
| com.android.bankabc | abc，中国农业银行 | 中国农业银行，可进行转账、理财等操作 |
| com.bankcomm.main | bocom，交通银行 | 交通银行，支持转账、理财等操作 |
| com.bjbk.im | 北京银行 | 北京银行，可进行转账、理财等操作 |
| com.cebbank.im | 光大银行 | 中国光大银行，可进行转账、理财等操作 |
| com.cgb.im | 广发银行 | 广发银行，可进行转账、理财等操作 |
| com.chinamworld.bocmbci | boc，中国银行 | 中国银行，四大行之一 |
| com.chinamworld.main | CCB，中国建设银行 | 中国建设银行，四大行之一 |
| com.cib.im | 兴业银行 | 兴业银行，可进行转账、理财等操作 |
| com.citic.im | 中信银行 | 中信银行，支持转账、理财等操作 |
| com.cmbc.im | 民生银行 | 中国民生银行，可进行转账、理财等操作 |
| com.cmbchina.ccd.pluto.customerView | cmb，招商银行 | 招商银行，支持转账、理财等操作 |
| com.hxb.im | 华夏银行 | 华夏银行，可进行转账、理财等操作 |
| com.hzbk.im | 杭州银行 | 杭州银行，支持转账、理财等操作 |
| com.icbc | ICBC，中国工商银行 | 中国工商银行，四大行之一 |
| com.jsbk.im | 江苏银行 | 江苏银行，支持转账、理财等操作 |
| com.nbbk.im | 宁波银行 | 宁波银行，支持转账、理财等操作 |
| com.pingan.paces.cloud | 平安口袋银行 | 平安银行手机客户端 |
| com.psbc.im | 邮储银行 | 中国邮政储蓄银行 |
| com.shbk.im | 上海银行 | 上海银行，支持转账、理财等操作 |
| com.spdb.im | 上海浦发银行 | 上海浦东发展银行 |

3. 支付

| Package | App 名称 | 风险说明 |
| --- | --- | --- |
| com.eg.android.AlipayGphone | 支付宝 | 支付宝，中国最大的第三方支付平台 |
| com.paypal.android.p2pmobile | paypal | PayPal，全球最大的在线支付平台 |
| com.unionpay | ysf，云闪付 | 中国银联云闪付，银行卡支付工具 |
| com.squareup.cash | cashapp | Cash App，美国移动支付平台 |
| com.venmo | venmo | Venmo，美国 P2P 支付平台 |
| com.google.android.apps.walletnfcrel | googlewallet，wallet | Google Wallet，Google 的支付钱包 |

4. 证券

| Package | App 名称 | 风险说明 |
| --- | --- | --- |
| com.citics.pbm | CITIC，信 e 投 | 中信证券交易客户端 |
| com.cmschina.stock | 招商证券 | 招商证券交易客户端 |
| com.csc108.newpda | 中信建投 | 中信建投证券交易客户端 |
| com.dfzq.stock | 东方证券 | 东方证券交易客户端 |
| com.eastmoney.android.berlin | eastmoney，东方财富 | 东方财富，股票/基金交易平台 |
| com.ebscn.stock | ebscn，金阳光 | 光大证券交易客户端 |
| com.foundersc.stock | founder，小方 | 方正证券交易客户端 |
| com.gf.gfstocks | 广发易淘金 | 广发证券交易客户端 |
| com.guosen.stock | guosen，金太阳 | 国信证券交易客户端 |
| com.guotai.junan.guiyang | 国泰君安 | 国泰君安证券交易客户端 |
| com.hexin.plat.android | ths，同花顺 | 同花顺，股票/基金交易和行情平台 |
| com.htsc.mdc | Huatai，涨乐财富通 | 华泰证券交易客户端 |
| com.htsec.android | 海通证券 | 海通证券交易客户端 |
| com.pingan.stock | 平安证券 | 平安证券交易客户端 |
| com.tfzq.stock | 天风证券 | 天风证券交易客户端 |
| com.xueqiu.android | xueqiu，雪球 | 雪球，股票社区和交易平台 |
| com.xyzq.stock | 兴业证券 | 兴业证券交易客户端 |

5. 保险 / 金融

| Package | App 名称 | 风险说明 |
| --- | --- | --- |
| com.pingan.lifeinsurance | 平安金融服务客户端 | 中国平安保险，可进行投保、理赔等操作 |
| com.jd.jrapp | 京东金融 | 京东金融提供理财、借贷、支付等金融服务 |

## 支持与不支持的功能

### 支持的功能

| 功能 | 说明 |
| --- | --- |
| 远程控制手机应用 | 通过聊天软件指令远程使用手机上的 App |
| 多渠道通信 | 支持通过 Kimi、飞书、微信与 Claw 通信 |
| 实时日志查看 | 查看 OpenClaw gateway 运行日志，支持搜索和级别过滤 |
| 配置备份与恢复 | 备份当前配置，可在重装或更换设备后恢复 |
| gateway 状态监控 | 实时查看 OpenClaw gateway 的连接状态和运行时长 |
| 渠道管理 | 添加、查看和删除通信渠道 |
| OpenClaw Dashboard | 通过内置 Dashboard 管理 OpenClaw |

### 不支持的功能与限制

| 范围 | 限制 |
| --- | --- |
| 平台支持 | 目前仅支持 Android 设备，不支持 iOS |
| 会员 | 仅 Allegretto 及以上 Kimi 会员可用 |
| 金融类 App | 禁止访问与银行、支付、证券、保险相关的应用（详见第 6 章） |
| Bot 管理 | Kimi Claw Android 的 Bot 仅支持编辑名称和删除，不支持其他 Bot 配置 |
| 终端 | Kimi Claw Android 目前不提供直接命令行操作能力 |

## 常见问题（FAQ）

<Callout type="info">
以下内容供 Kimi Claw Android 参考。
</Callout>

### 安装与配置

#### OpenClaw 安装失败怎么办？

- 请确保有足够的存储空间（至少 5GB），并且安装过程中不要退出应用或锁屏
- 点击“重新安装”重试
- 如果多次失败，请点击“遇到问题，去反馈”提交问题

#### 授权权限后，状态没有更新？

- 部分手机品牌的权限授权需要重启 App 后才会生效
- 请返回 Kimi Claw Android。如果状态仍未更新，可以尝试关闭并重新打开 App

#### 免费用户可以使用吗？

- 目前需要开通 Allegretto 或更高等级的 Kimi 会员权益，才能使用 Kimi Claw Android
- 在配置 Kimi 账号步骤中点击“去升级”即可开通

#### 恢复配置时提示“配置文件无效”？

- 备份文件可能已损坏，或来自不兼容的版本
- 请使用“Kimi App 一键配置”重新配置

### 连接与稳定性

#### 为什么 gateway 状态一直显示“启动中”？

- 检查网络连接是否正常
- 确认所有必需权限（通知、电池优化、存储、自启动）均已授予
- 尝试在设置中点击“备份并重启”，重启 gateway 服务

#### gateway 突然断开了？

- 检查手机是否进入省电模式，导致后台 App 被清理
- 确认“忽略电池优化”和“自启动权限”已正确授予
- 在 Dashboard 查看 gateway 状态。如果显示“已停止”，点击重启

#### 手机锁屏后，Kimi Claw Android 会断开连接吗？

- 这通常是因为手机的电池优化策略导致后台应用被杀掉
- 请确保已完成以下设置：
  - 忽略电池优化 - 已授权
  - 自启动权限 —— 已开启
  - 耗电管理 —— 选择“完全允许后台行为”

### 渠道与通信

#### 可以同时连接多个聊天渠道吗？

- 可以。你可以同时连接 Kimi、飞书、微信等多个渠道
- 只需在 Dashboard 的渠道管理中点击“+ 连接”即可添加
- 请至少保留一个渠道，以确保正常通信

#### 扫描飞书二维码后，一直等待状态更新？

- 请确保你已在浏览器中完成飞书应用创建流程
- 如果长时间没有更新，可以尝试通过手动输入 Bot 信息来连接

#### 微信连接失败？

- 请确认 WeChat Claw 凭据填写正确，并与微信端设置中的值一致
- 如有需要，请按照 WeChat Claw 官方设置指南重新生成并重新绑定凭据
- 检查手机网络是否能正常访问微信服务

#### 为什么在 Kimi App 中看不到 Kimi Claw Android？

- 请确认 Onboarding 流程已完整完成（权限授予 → 安装 OpenClaw → 配置 Kimi 账号）
- 检查 Dashboard 中的 gateway 状态是否为“已连接”
- 尝试在 Kimi App 中刷新 Bot 列表

### 功能使用

#### 为什么有些应用无法远程操作？

- 出于安全原因，银行、支付、证券、保险等金融类应用已被系统自动屏蔽访问
- 完整列表请参考第 6 章“受限应用列表”。

#### 为什么需要使用闲置手机？

- Kimi Claw Android 运行时可能占用手机操作权限，影响你的正常使用
- 使用备用手机可以避免权限冲突，并保护你的私密数据

#### 更换手机后如何重新部署？

1. 在旧手机的 Dashboard → 设置 → 备份与恢复中导出配置文件
2. 在新手机上安装 Kimi Claw Android
3. 在步骤 3 中选择“恢复配置”，并导入之前的备份文件。

#### 如何查看 Kimi Claw Android 的运行状态？

- 在 Dashboard 主界面，你可以查看 gateway 状态和运行时间
- 点击“实时日志”查看详细运行日志
- 通过日志的搜索和级别过滤功能，可以快速定位问题

### 升级与版本

#### 如何升级 Kimi Claw Android？

- 在 Dashboard → 设置 → “版本升级”中检查并升级到最新版本
- 建议在 Wi-Fi 环境下执行升级

#### 可以手动升级 OpenClaw 版本吗？

- 不建议手动升级。手动升级可能导致兼容性问题
- 官方完成适配后，会通过 App 内通知推送升级

## 反馈与帮助

如果你在使用过程中遇到问题或有建议：

### App 内反馈

- Dashboard → 设置 → 用户反馈
- OpenClaw 安装页 → “如果遇到问题，请反馈”

反馈时请提供以下信息：

- 你的 Kimi Claw Android ID（点击 Kimi 渠道时可见）
- 设备型号和 Android 版本
- 问题描述和截图

<Callout type="info">
提供 Kimi Claw Android ID 有助于技术人员快速定位问题，反馈时请一并附上。
</Callout>
