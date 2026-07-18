# 帮助中心更新计划 v2：K3 上线 + Chat/Agent 合并 + 新产品 + 会员改版

> 修订：2026-07-17。来源：用户背景简报 + K3 官方博客(https://www.kimi.com/blog/kimi-k3)。
> 语种策略：**先改 zh-CN + en-US(海外英文)**，确认后再铺其余 14 语种。
> 约定：直接在 master 分支修改并推送；每组 zh-CN 先交 review。
> ⚠️ 微信两篇 Kimi Work 文章(介绍/上新)被环境验证挡住抓不到，Work 详细文案待用户补贴正文。

---

## 📌 核心口径（贯穿全局，先对齐）

### 模型：三档模式并存（不是删 K2.6）
线上对话框模型选择器变为三选项：
| 模式 | 思考强度 | 定位 | 计费 |
|---|---|---|---|
| **K2.6 Fast** | 标准 / 进阶 | 快速对话 | **不收费** |
| **K3 Max** | Max | 擅长对话与 Agent 任务（新旗舰/默认） | **收费** |
| **K3 集群 Max** | Max | 擅长海量搜索、批量处理，一次性完成 | **收费** |

- K3 简介（标准表述）：Kimi K3 是现在功能最强大的模型，2.8T 参数，基于 Kimi Delta Attention 与 Attention Residuals 构建，具备原生视觉功能和 100 万 token 上下文窗口；全球首个开放式 3T 级模型，专为长程编码、知识工作与推理设计。（架构补充：Stable LatentMoE，896 专家激活 16；权重 2026-07-27 开源。）

### 计费变化（2 点）
1. 产品不再区分 Chat/Agent：**K2.6 不收费，K3 模式下均收费**。
2. 会员额度用完后：可**升级会员等级** 或 **购买加油包**（新增产品）。
3. 会员各功能（Agent、Kimi Code、PPT、深度研究等）**共享一个额度池**，可自由支配。

### Availability（各入口标准话术，供 overview/agentic-chat 落地）
- **Kimi K3 Agents**：更新至最新 Kimi App（iOS/Android/HarmonyOS）或访问 kimi.com。
- **Work with Kimi K3**：下载 Kimi Work 桌面端 v3.1.0+（Windows / Apple Silicon Mac）。
- **Code with Kimi K3**：终端运行 Kimi Code，用 `/model` 选择 Kimi K3。
- **Build with Kimi API**：平台选 `kimi-k3`。定价：cache-hit 输入 $0.30/MTok、cache-miss 输入 $3.00/MTok、输出 $15.00/MTok；Mooncake 架构，编码场景缓存命中率 >90%。
- **Kimi Enterprise**：企业级数据隐私与成员管理，个人/组织账户完全隔离。

---

## A. 模型 K3 + 三档模式落地 —— ✅ 可立即做

- [ ] A1 `new-user-guide/agentic-chat.md`：标题「默认搭载 K2.6 模型」→ 重写为**三档模式选择器**（K2.6 Fast / K3 Max / K3 集群 Max）；补 K3 简介、100 万上下文、Availability
- [ ] A2 `agent/overview.md`：发展历程**新增 2026 年 7 月 K3 段落**；页面主题由「K2.6 Agent overview」→「K3 Agent overview」
- [ ] A3 `agent/swarm.md`：① Agent 集群升级为 **K3 集群**；② **去掉标题 [Beta] 字样**；③ 增加背景说明：「[Beta] 指产品上线时仅向少部分用户开放的试用标记」；补 K3 博客链接
- [ ] A4 `websites/overview.md`：驱动模型 K2.6 → K3（2 处）
- [ ] A5 `docs-and-sheets/overview.md`：K2.6 → K3（1 处）
- [ ] A6 `ppt/overview.md`：K2.6 → K3（1 处）
- [ ] A7 `kimi-claw/overview.md`：确认 Claw 归属（见 C 组），模型表述随之更新
- [ ] A8 `kimi-webbridge/kimi-webbridge.md`：示例文案 K2.6 → K3（2 处，非必须）

## B. Chat / Agent 合并改写 —— ✅ 口径已明确，可做

- [ ] B1 `new-user-guide/overview.md`：合并「会话模式」+「Agent 智能代理」两节为统一入口叙事（一个对话框，模型选择器切换三档，自动调度）
- [ ] B2 `new-user-guide/agentic-chat.md`：框架重写，反映合并后逻辑（与 A1 一并做）
- [ ] B3 `agent/overview.md`：开篇定位同步（与 A2 一并做）

## C. 5 个新产品文档 —— 口径已给，逐个建

> 定时任务 / Plugin / Project / Goal 属**通用功能**；Kimi Work 是**新桌面端**，新建独立目录，占据原 Kimi Claw 的位置。

- [ ] **C1 定时任务**（新建，通用功能）：让 Kimi 按计划自动执行任务，并把结果定时送达。创建方式：① 手动创建 ② 对话创建。
- [ ] **C2 Plugin 插件**（新建，通用功能）：将外部工具接入 Kimi，使其可调用应用和服务完成任务。**吸收原 `search.md` 中「专业数据库」内容**（数据库现已归入 Plugin）。
- [ ] **C3 Project 项目**（新建，通用功能）：① 添加指令——让 Kimi 按你的偏好回答；② 添加文件——Kimi 在项目所有对话中参考并管理这些文件（过程中可能修改或删除）。
- [ ] **C4 目标 Goal 模式**（新建，通用功能）：核心是循环(Loop)机制——目标导向自主循环、策略自我进化、人在 Loop 中。启用：Kimi 电脑客户端左侧栏切「Work」→ 输入框左下「+」→「目标」→ 输入长任务目标。适合：目标清楚/路径不确定/需多轮尝试/结果可验证（如迁移代码、整理海量资料、复现论文、搭知识库）。
- [ ] **C5 Kimi Work**（新建 `kimi-work/` 目录）：新桌面端，介绍「什么是 Kimi Work」，占原 Kimi Claw 位置。新增功能：**Widgets、Dashboard 看板、Computer use**。
  - 待补：微信介绍/上新正文（现被验证墙挡住）
- [ ] C6 `new-user-guide/overview.md` 产品矩阵补入上述入口
- [ ] **❓决策点**：Kimi Work 取代 Kimi Claw 后，现有 `kimi-claw/`（20+ 文档）是**保留/迁移/下线**？需你定。

## D. 会员权益改版 + 加油包 —— 口径部分已给，缺新档位表

- [ ] D1 `membership/overview.md`：① 新增「**加油包**」产品功能说明；② 共享额度池表述更新；③ 套餐对比表（**待新档位/价格**）
- [ ] D2 `membership/update-rules.md`：修改**共享额度池**规则（现列 Agent/Code/深研/PPT/文档/表格/Claw，需按新产品+新计费更新；K2.6 免费、K3 收费的口径要体现）
- [ ] D3 `membership/pricing.md`：① 「额度用完了怎么办？」(l.116) **新增购买加油包章节**；② **删除**《Kimi 会员权益计费方式升级说明》链接(l.131，https://www.kimi.com/membership-credits 已过时)
- [ ] D4 全局「共享额度池」表述统一（overview / update-rules / 各产品页）
- [ ] D5 `kimi-code/membership-guide.md`：Kimi Code 权益改版（**待口径**）
- **待你给**：新会员档位名称/价格、加油包规格与价格、5 个新产品是否计入额度池、Chat(K2.6) 免费如何在表里体现

## E. Kimi API / Kimi Code 信息修改

- [ ] E1 `kimi-api/*`：新增 `kimi-k3` 模型与定价（$0.30 / $3.00 / $15.00 MTok）；model-capabilities / model-selection 补 K3（100 万上下文、原生视觉）
- [ ] E2 `kimi-code/*`：`/model` 选 Kimi K3；模型切换、思考强度相关表述

## F. 顺带修复既有问题

- [ ] F1 `kimi-api/model-selection.md:40`「视频多模态：暂不支持」——**仅记录，待你确认口径**。不擅自改动：API 的视觉/视频能力以官方为准，可能与产品端不同，需你给准确说法后再决定是否调整。
- [ ] F2 `others/chat-issues.md:34`「K2 / K2-Thinking」旧型号举例 → 更新
- [ ] F3 `new-user-guide/search.md`：专业数据库内容迁往 Plugin 后，本页做指引/精简（与 C2 联动）
- [ ] F4 `new-user-guide/memory-space.md`：更新记忆入口——个人主页 → 设置 → 记忆指令；说明「记忆指令」：对话中说「记住」即生成一条，Kimi 始终遵循，**最多 50 条**，点击「记忆指令」可逐条管理
- [ ] F5 `new-user-guide/search.md`：**搜索联网设置、操作入口需要修改**（联网已改为模型自主判断、无手动开关，本页仍写着「联网搜索」开关，需同步）
- [ ] F6 `agent/overview.md`：**「Kimi Agent 发展历程」时间线偏啰嗦**，重新梳理概述的表达逻辑（精简时间线、优化叙事结构）。预览 https://kimi.kimi.team/zh-cn/help/agent/agent-overview
- [ ] F7 **模型改名的溢出文件**（本地化时发现，A+B 7 文件之外仍有旧表述，需全语种统一）：
      - `agent/features-and-limits.md`：仍写「K2.6 Agent Swarm [Beta]」（swarm 页已去 [Beta]），zh-CN/en-CN/en-US 及各 SEO 均需改
      - `kimi-claw/overview.md`：仍写「K2.6 Thinking 模型」（与 Claw 归属决策一并处理）
      - 建议全库 grep `K2.6 Agent`、`K2.6 集群`、`Agent 模式` 收尾

---

## 执行顺序建议

1. **A + B（模型三档 + 合并）** — 口径齐全，先做
2. **F（既有问题 + 记忆入口）** — 顺带
3. **C（5 新产品）** — 逐个建；C5 Kimi Work 待微信正文
4. **E（API/Code）**
5. **D（会员+加油包）** — 待新档位表
6. 每组 zh-CN + en-US 先行 → review → 铺其余 14 语种

## 仍需你确认的决策点
- [ ] Kimi Work vs Kimi Claw：保留/迁移/下线？
- [ ] 新会员档位名称、价格、加油包规格
- [ ] 5 个新产品与额度池的对应关系
- [ ] Kimi Work 微信介绍/上新正文（贴给我）

## 🌍 海外待补（待你给 USD 口径）
- [ ] **海外版加油包文章（Extra Usage）**：国内是 ¥（¥0.03/¥1.6/¥25/¥3,000/¥10,000）+ moonshot.cn/platform.kimi.com。海外需 USD 金额 + support@moonshot.ai/platform.kimi.ai。待用户给 USD 数据后，建 en-US 源 → 铺 14 语种。（zh-CN 已有，海外暂缺）

## 🖼️ 待更新插图（文字已改，插图需设计侧/人工替换）
- [ ] `new-user-guide/overview.md`（预览 https://kimi.kimi.team/zh-cn/help/new-user-guide/overview）
      - "+"菜单插图：专业数据库→插件(Plugin)、去掉常用语/联网、新增目标
      - 移动端"切换模型"插图：反映 K2.6 Fast / K3 Max / K3 集群 Max
- [ ] `new-user-guide/agentic-chat.md`：内置工具表 Data Source→Plugin 相关插图
- [ ] `new-user-guide/search.md`：专业数据库→Plugin 迁移后的相关插图（做 search 页时一并）

