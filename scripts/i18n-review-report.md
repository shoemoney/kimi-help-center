# Kimi Help Center i18n 翻译审校报告

- 生成时间: 2026-06-29 13:51 UTC
- 审校模型: GPT 5.5
- 已完成审校: 1362 / 1362
- 规则检测命中: 9

## 一、整体建议

### 1. 优先修复（P0）

- **全语言表格漏译**：`membership/overview.md` 中 Moderato 列的 Agent Swarm 数值在 14 个语言版本中普遍缺失，需批量修复。
- **补全缺失文章**：相对 `zh-CN` 102 篇，国际语言仅 90 篇，缺 12 篇（主要在 `agent/`、`kimi-code/` 等新增目录）。
- **建立跨语言术语表**：`credit` / `quota` / `token` / `Help Center` 等高频词在各语言中半英半译，需统一策略（保留英文 vs 全量本地化）。

### 2. 质量改进（P1）

- **区域内容隔离**：中国区（`zh-CN`/`en-CN`）与国际区（`en-US` 及衍生语言）会员体系、定价、套餐名不同，翻译流水线需严格按源 locale 分支，避免混用。
- **UI 文案对齐**：错误提示、按钮文案（如 Clarification、Include everything、Issue invoice）应核对产品界面实际翻译，不要自行意译。
- **Callout 润色**：如 “Use all credit limit for the same function” 在多数语言中表达生硬，建议改为更自然的帮助中心语气。

### 3. 流程建议（P2）

- 在 `translate-docs.js` 之后增加 `check-translations.js` + GPT 审校 gate，阻断 critical/major 问题合入。
- 扩展 `glossary/terms.json` 至全部 SEO locale，并在翻译 prompt 中注入。
- 对表格、数值、链接类字段增加 deterministic diff 校验，减少 GPT 漏检。

### 4. 全库问题分布

| 严重度 | 篇数 |
|--------|------|
| critical | 45 |
| major | 144 |
| minor | 1168 |
| ok | 5 |

| 问题类型 | 次数 |
|----------|------|
| terminology | 3230 |
| fluency | 2343 |
| accuracy | 657 |
| structure | 152 |
| tone | 89 |
| punctuation | 62 |
| localization | 50 |
| style | 43 |
| locale | 18 |
| completeness | 10 |
| consistency | 10 |
| untranslated_text | 7 |

| 语言 | 审校数 | 均分 | critical | major | minor | ok | 错误 |
|------|--------|------|----------|-------|-------|----|------|
| en-CN (中国区英文) | 102 | 4.13 | 16 | 12 | 74 | 0 | 0 |
| es-419 (拉美西语) | 90 | 4.24 | 5 | 18 | 67 | 0 | 0 |
| de-DE (德语) | 90 | 4.25 | 6 | 8 | 76 | 0 | 0 |
| fr-FR (法语) | 90 | 4.26 | 4 | 11 | 75 | 0 | 0 |
| pt-BR (巴西葡语) | 90 | 4.26 | 3 | 6 | 80 | 1 | 0 |
| id-ID (印尼语) | 90 | 4.27 | 1 | 6 | 83 | 0 | 0 |
| ru-RU (俄语) | 90 | 4.27 | 2 | 14 | 73 | 1 | 0 |
| tr-TR (土耳其语) | 90 | 4.27 | 1 | 14 | 75 | 0 | 0 |
| th-TH (泰语) | 90 | 4.28 | 0 | 6 | 84 | 0 | 0 |
| it-IT (意大利语) | 90 | 4.29 | 6 | 10 | 74 | 0 | 0 |
| vi-VN (越南语) | 90 | 4.36 | 0 | 6 | 84 | 0 | 0 |
| ja-JP (日语) | 90 | 4.37 | 0 | 7 | 82 | 1 | 0 |
| zh-TW (繁体中文) | 90 | 4.41 | 1 | 7 | 80 | 2 | 0 |
| ko-KR (韩语) | 90 | 4.44 | 0 | 11 | 79 | 0 | 0 |
| zh-SG (简体中文（海外）) | 90 | 4.54 | 0 | 8 | 82 | 0 | 0 |

## 二、按语言明细建议

### de-DE（德语）

- 审校完成: 90 篇
- 平均分: 4.25
- 分布: critical 6 / major 8 / minor 76 / ok 0

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `agent/use-skills-in-agent-en.md` — overall=3.0, severity=critical
  - 摘要: 译文整体质量较好，但末尾 ComparisonBlock 明显缺失并可能导致页面构建失败，需要优先修复。
- **[critical]** `structure` @ 末尾 ComparisonBlock
  - 源: correct={"Help users search and discover Skills. Used when users explicitly want to find a certain type of Skill or describe a problem and hope to get Skill recommendations. Trigger words include 'Find Skills', 'Search Skills', 'Is there a Skill that can do X?', etc."}
  - 译: correct={"Nutzern helfen, Skills zu suchen und zu entdecken. Wird verwendet, wenn Nut ...[truncated for review]
  - 建议: 补全该组件内容并确保 MDX 语法闭合，例如：correct={"Nutzern helfen, Skills zu suchen und zu entdecken. Wird verwendet, wenn Nutzer ausdrücklich eine bestimmte Art von Skill finden möchten oder ein Problem beschreiben und Skill-Empfehlungen erhalten möchten. Triggerwörter sind z. B. ‚Skills finden‘, ‚Skills suchen‘, ‚Gibt es einen Skill, der X kann?‘ usw."}
- `deep-research/overview.md` — overall=3.0, severity=critical
  - 摘要: Die Übersetzung ist sprachlich solide, muss aber wegen des abgeschnittenen Dokumentendes vollständig ergänzt und terminologisch konsistenter gemacht werden.
- **[critical]** `structure` @ Ab „## Wichtige Hinweise“, Punkt 4 bis Dokumentende
  - 源: 4. **Scope boundaries**: For simple Q&A, use standard chat mode for faster responses
5. **Terms**...
## Related resources...
  - 译: 4. **Umfangsgrenzen**: Für einfache Fragen und Antworten nutzen Sie den S
...[truncated for review]
  - 建议: Die Übersetzung ist abgeschnitten. Rest vollständig ergänzen, einschließlich Punkt 4, Punkt 5, „Related resources“ und abschließendem Frames-Block.
- **[major]** `terminology` @ Tabelle „Wie funktioniert Kimi-Research?“
  - 源: **Clarification** / **Iterative reasoning**
  - 译: **Clarification** / **Iterative reasoning**
  - 建议: Begriffe konsistent ins Deutsche übertragen oder bewusst als Produkt-/Fachbegriffe beibehalten. Empfohlen: „**Klärung**“ und „**Iteratives Reasoning**“ bzw. „**Iteratives Schlussfolgern**“. Danach auch im Fließtext konsistent verwenden.
- `docs-and-sheets/overview.md` — overall=3.0, severity=critical
  - 摘要: Die Übersetzung ist überwiegend solide, muss jedoch wegen des abgeschnittenen Schlusses und kleinerer Terminologie- und Stilprobleme vor Veröffentlichung korrigiert werden.
- **[critical]** `structure` @ Ende des Abschnitts „Zielgruppe“
  - 源: | **Entrepreneurs** | Rapidly produce business plans, partnership proposals, and investor materials |
| **Investment analysts** | Drive DCF modeling, financial forecasting, and valuation analysis with natural language |
| **Marketing & operations** | Aggregate multi-channel data, competitive comparisons, and campaign performance analyses |
  - 译: | **Unternehme
...[truncated for review]
  - 建议: Die Übersetzung ist am Ende abgeschnitten und mehrere Tabellenzeilen fehlen. Ergänzen Sie die fehlenden Zeilen vollständig, z. B. „Unternehmer“, „Investmentanalysten“ und „Marketing & Operations“, und stellen Sie sicher, dass die Markdown-Tabelle korrekt geschlossen ist.
- `kimi-api/api-troubleshooting.md` — overall=3.0, severity=critical
  - 摘要: Die Übersetzung ist größtenteils brauchbar, muss aber wegen des abgeschnittenen Schlussabschnitts zwingend vervollständigt und terminologisch stärker vereinheitlicht werden.
- **[critical]** `structure` @ Letzter Abschnitt: „Kann ich die Kimi API von außerhalb Chinas aufrufen?“
  - 源: Kimi API is available internationally via `api.moonshot.ai`. If you experience connectivity issues, contact the sales team to discuss the best solution for your region.
  - 译: Die Kimi API ist international über `api.mo
...[truncated for review]
  - 建议: Den abgeschnittenen Satz vollständig wiederherstellen, z. B.: „Die Kimi-API ist international über `api.moonshot.ai` verfügbar. Wenn Verbindungsprobleme auftreten, wenden Sie sich an das Vertriebsteam, um die beste Lösung für Ihre Region zu besprechen.“
- **[major]** `terminology` @ Mehrere Überschriften und Abschnitte
  - 源: Kimi API; API Key; rate limit; quota; concurrency
  - 译: Kimi API; API Key; rate limit; quota; API-concurrency
  - 建议: Terminologie eindeutiger und konsistenter lokalisieren: „Kimi-API“, „API-Schlüssel“, „Ratenlimit“, „Kontingent“ und „API-Parallelität“. Englische Begriffe nur beibehalten, wenn sie als Produkt-/API-Begriff erforderlich sind.
- **[major]** `fluency` @ Überschrift: „Wie gehe ich mit dem 429-Fehler bei rate limit um?“
  - 源: How to handle 429 rate limit error?
  - 译: Wie gehe ich mit dem 429-Fehler bei rate limit um?
  - 建议: Natürlicher formulieren: „Wie gehe ich mit einem 429-Fehler wegen Überschreitung des Ratenlimits um?“
- `kimi-business/kimi-business.md` — overall=3.2, severity=critical
  - 摘要: 译文整体质量较好，但文档结尾存在严重截断缺失，且需统一 Seats/Quota 等 SaaS 术语后再发布。
- **[critical]** `omission` @ Ablaufregeln / 文档结尾
  - 源: - **Member Removal**: Removed members immediately lose enterprise workspace access and Kimi Business benefits; new benefits stop in next cycle
- **Subscription Expiration**: All member benefits are suspended when organization subscription expires; restored upon renewal
  - 译: - **Entfernen von Mitgliedern**: Entfernte Mitglieder verlieren sofort den Zugr
...[truncated for review]
  - 建议: 补全截断内容，例如：- **Entfernen von Mitgliedern**: Entfernte Mitglieder verlieren sofort den Zugriff auf den Unternehmens-Workspace und die Kimi-Business-Vorteile; neue Vorteile werden ab dem nächsten Zyklus nicht mehr gewährt
- **Ablauf des Abonnements**: Alle Mitgliedervorteile werden ausgesetzt, wenn das Abonnement der Organisation abläuft; nach der Verlängerung werden sie wiederhergestellt
- `agent/use-skills-in-claw-en.md` — overall=3.8, severity=critical
  - 摘要: Die deutsche Fassung ist sprachlich überwiegend gelungen, muss aber wegen des abgeschnittenen letzten Abschnitts vor Veröffentlichung zwingend vervollständigt werden.
- **[critical]** `structure` @ Abschnitt „Hinweise zur mobilen Nutzung“, zweiter Aufzählungspunkt bis Dokumentende
  - 源: - If skills are not added on the web version, the plus menu on mobile won't show the skill entry.
- If the conversation history contains skill-generated content, a prompt will appear: **Skill generated, currently only supported on Kimi web platform**.

We recommend completing some skill management operations (such as creating, editing, deleting) on the web platform, with mobile primarily used for invoking existing skills.
  - 译: - Sind in der Webversion keine Skills hinzugefügt, zeigt das Plus-Menü auf dem Mobilgerä
...[truncated for review]
  - 建议: Dokumentende vollständig wiederherstellen und übersetzen, z. B.: „Sind in der Webversion keine Skills hinzugefügt, zeigt das Plus-Menü auf dem Mobilgerät keinen Skill-Eintrag an. Enthält der Gesprächsverlauf von Skills generierte Inhalte, erscheint der Hinweis: **Von Skill generiert, derzeit nur auf der Kimi-Webplattform unterstützt**. Wir empfehlen, Skill-Verwaltungsvorgänge wie Erstellen, Bearbeiten und Löschen auf der Webplattform durchzuführen und Mobilgeräte hauptsächlich zum Aufrufen vorhandener Skills zu verwenden.“
- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: Die Übersetzung ist insgesamt gut, benötigt aber eine Korrektur beim Beta-Zugang, lokalisierte Terminologie für „quota“ sowie konsistentere deutsche Agenten-Begriffe.
- **[major]** `accuracy` @ Beta Access callout
  - 源: K2.6 Agent Swarm [Beta] is currently available to Moderato, Allegretto, Allegro, and Vivace members.
  - 译: K2.6 Agent Swarm [Beta] steht derzeit Mitgliedern der Tarife Allegretto, Allegro und Vivace zur Verfügung.
  - 建议: „Moderato“ ergänzen: „... steht derzeit Mitgliedern der Tarife Moderato, Allegretto, Allegro und Vivace zur Verfügung.“
- **[major]** `terminology` @ Beta Access callout
  - 源: Tasks consume significantly more quota than standard Agent tasks.
  - 译: Aufgaben verbrauchen deutlich mehr quota als reguläre Agent-Aufgaben.
  - 建议: „quota“ lokalisieren und konsistent formulieren: „Aufgaben verbrauchen deutlich mehr Kontingent als reguläre Agent-Aufgaben.“
- `deep-research/wrong-direction.md` — overall=4.0, severity=major
  - 摘要: Die Übersetzung ist weitgehend korrekt und gut lesbar, sollte aber bei zentralen Produktbegriffen und der Überschrift terminologisch präzisiert werden.
- **[major]** `accuracy` @ SeoMeta title / H1
  - 源: Search or reasoning direction went wrong?
  - 译: Such- oder Argumentationsrichtung fehlgeschlagen?
  - 建议: „fehlgeschlagen“ ist zu stark und trifft „went wrong“/„deviated“ nicht genau. Besser: „Such- oder Schlussfolgerungsrichtung falsch gelaufen?“ oder „Suche oder Schlussfolgerung in die falsche Richtung gelaufen?“

#### 术语统一建议

- （1 次）„Konto-Kontingent“ wirkt unüblich. Besser: „das Kontingent Ihres Kontos aufgebraucht ist“.
- （1 次）Falls kein festgelegter Produktbegriff vorliegt, idiomatischer übersetzen als „reguläres Mitgliedschaftskontingent“ oder
- （1 次）Wenn „Retry“ und „Delete“ Schaltflächen sind, als UI-Bezeichnungen übersetzen und großschreiben: „Sie können für die feh
- （1 次）„quota“ einheitlich eindeutschen und großschreiben, z. B.: „Agent-Aufgaben verbrauchen Kontingent aus dem gemeinsamen Po
- （1 次）Konsistent formulieren: „Kimi Code nutzt einen separaten Kontingent-Pool. Jede Agent-Aufgabe verbraucht in der Regel 1 K

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ Heading: „Wie verbraucht das Erstellen von Skills Kontingent?“: Natürlicher formulieren: „Wie wird beim Erstellen von Skills Kontingent verbraucht?“ oder „Wie verbraucht die Erstellung von Skills Kontingent?“
- `agent/FAQ-en.md` @ Abschnitt „Warum ist die Schaltfläche … deaktiviert?“ Punkt 3: „Konto-Kontingent“ wirkt unüblich. Besser: „das Kontingent Ihres Kontos aufgebraucht ist“.
- `agent/FAQ-en.md` @ Abschnitt „Wie verbraucht … Kontingent?“: Falls kein festgelegter Produktbegriff vorliegt, idiomatischer übersetzen als „reguläres Mitgliedschaftskontingent“ oder „Mitgliedskontingent“. „offiziell“ klingt im Deutschen hier unnatürlich.
- `agent/FAQ-en.md` @ Abschnitt „Gibt es Beschränkungen …?“ Punkt 1: „Beschränkung der Parallelität“ und „in Erstellung + Fehlgeschlagen“ klingen sperrig. Vorschlag: „Parallelitätslimit: Es können maximal 3 Aufgaben gleichzeitig laufen (Wird erstellt + Fehlgeschlagen).“ Wenn es sich um UI-Status handelt, deren offizielle deutsche Bezeichnungen verwenden.
- `agent/FAQ-en.md` @ Abschnitt „Was soll ich tun, wenn …?“ erster Bullet: Wenn „Retry“ und „Delete“ Schaltflächen sind, als UI-Bezeichnungen übersetzen und großschreiben: „Sie können für die fehlgeschlagene Skill-Karte entweder **Wiederholen** oder **Löschen** wählen.“

### en-CN（中国区英文）

- 审校完成: 102 篇
- 平均分: 4.13
- 分布: critical 16 / major 12 / minor 74 / ok 0

#### 重点问题文章

- `deep-research/overview.md` — overall=2.0, severity=critical
  - 摘要: 译文前半部分质量尚可，但目标文本明显截断且缺失大量章节，需先补全内容并修正关键语义误译。
- **[critical]** `completeness` @ After overview-02.png in Steps section
  - 源: 源文从“报告成果”后仍包含报告格式说明、预览/下载/分享、使用建议、注意事项、相关介绍等完整内容。
  - 译: alt="Report o
...[truncated for review]
  - 建议: 补全缺失译文，至少包括第 4、5 步的子弹点、“Usage tips”、“Notes”、“Related resources”等后续全部章节；同时修复被截断的 alt 文本。
- **[major]** `accuracy` @ Workflow > Proactive search
  - 源: 由模型判断并筛选出信息质量最高的前 3.2% 内容
  - 译: filters out the top 3.2% of content with the highest information quality
  - 建议: “filter out”表示剔除，语义相反。建议改为：the model evaluates the results and selects the top 3.2% of content with the highest information quality。
- `new-user-guide/search.md` — overall=2.0, severity=critical
  - 摘要: 译文前半部分整体可读，但存在严重截断缺失，且专业数据库名称有明显误译，需补全全文并校准关键术语后再发布。
- **[critical]** `structure` @ Examples 之后至文末
  - 源: 从“搜索关于大语言模型推理优化的最新论文”开始，后续包含真实案例、智能搜索、图片搜索、定向访问搜索 URL、操作方式、温馨提示等大量内容
  - 译: Search for the latest papers on LLM inference opti...[truncated for review]
  - 建议: 补全缺失译文，确保源文所有章节、示例、Chat 组件、图片组件和提示条目均完整保留并翻译。当前译文截断会导致文档无法发布。
- **[major]** `accuracy` @ Professional Databases 列表
  - 源: 同花顺ifind金融数据库：中国及全球股票、期货、指数等金融数据
  - 译: Stock Finance data: financial data for China and global stocks, futures, indexes, and more
  - 建议: 改为 “Tonghuashun iFinD Financial Database: provides financial data for Chinese and global stocks, futures, indexes, and more”。当前译文漏译品牌名且与下一条“股票金融数据库”混淆。
- `websites/overview.md` — overall=2.8, severity=critical
  - 摘要: 译文前半部分整体可用，但正文后半大面积缺失且存在中英混杂的损坏表格，必须补全并修复结构后才能发布。
- **[critical]** `completeness` @ After "Create a Website Through Conversation" table
  - 源: 源文从“快速搭建标准网站”后仍包含“实际案例演示”“建站流程概览”“预览与调整”“可视化编辑”“代码部署与发布”“适用人群”“示例提示词”等大量内容。
  - 译: 译文在表格第三行处截断："| 快速 build standard websites | ...[truncated for review]"
  - 建议: 补全后续所有章节的英文翻译，确保标题、表格、图片组件、占位符如 [CodePreview]、列表层级与源文一致；不得保留截断标记。
- **[critical]** `structure` @ Steps > Create a Website Through Conversation > creation methods table
  - 源: | 快速搭建标准网站   | 选择预设模板，修改内容即可               |
  - 译: | 快速 build standard websites |
  - 建议: 修复为完整英文表格行："| Quickly build a standard website | Choose a preset template and edit the content |"，并保持 Markdown 表格列数一致。
- **[major]** `terminology` @ Method 1 > Step 4.2
  - 源: 图片/网站复刻
  - 译: Image/website remix
  - 建议: 将 "remix" 改为更准确的 "recreation" 或 "replication"，建议译为 "Image/website recreation"，以体现“复刻/还原”含义。
- `docs-and-sheets/overview.md` — overall=3.0, severity=critical
  - 摘要: 译文前半部分质量较好，但 Kimi Sheets 及后续内容出现明显截断/缺失，需补全后再发布。
- **[critical]** `omission` @ From “## Kimi Sheets” onward
  - 源: Kimi Sheets（Kimi 表格）能够系统理解 Office 的运作方式……## 适用人群
  - 译: Kimi Sheets can systematically understand how Office works... When workin
...[truncated for review]
  - 建议: 补全译文中 Kimi Sheets 后半段内容，包括表格功能列表、使用步骤以及“适用人群”表格；不要出现截断文本或占位符。
- `kimi-claw/kimiclaw-group-chat.md` — overall=3.0, severity=major
  - 摘要: 已译部分整体可读，但存在明显截断风险及少量语义偏差，需补齐全文并统一 Claw 复数和角色术语后再发布。
- **[major]** `structure` @ 译文在“Link an existing Op...”处中断
  - 源: 源文后续包含“关联已有 OpenClaw”“群聊使用技巧”“常见问题”等完整章节
  - 译: Link an existing Op...[truncated for review]
  - 建议: 如果这是实际译文文件，需要补齐 OpenClaw 接入步骤、群规、工作空间、模板、FAQ 和命令行等全部后续内容；若只是审校输入被截断，应提供完整译文后再做全量审校。
- **[major]** `accuracy` @ 发送方式表格：@ 多个 Claw
  - 源: @ 多个 Claw | 广播给全部 Claw，由 Kimi 指挥统一协调
  - 译: @ multiple Claw | Broadcasts to all selected Claw, with Kimi Conductor coordinating centrally
  - 建议: 将“all selected Claw”改为“all Claws”或“all Claws in the group”，避免把“全部 Claw”误解为“被选中的 Claw”。推荐："@ multiple Claws | Broadcasts to all Claws, with Kimi Conductor coordinating centrally"。
- `kimi-claw/usage-tips.md` — overall=3.0, severity=critical
  - 摘要: 译文整体可读性较好，但存在关键内容截断和若干术语直译问题，需先补全缺失段落并统一产品术语。
- **[critical]** `completeness` @ Set Scheduled Tasks section, after item 3
  - 源: 3. **约束条件**：不能做什么或必须满足什么（200 字以内、只用中文、要带风险提示、只输出 3 条等）

**示例：**

- “每天 9:00 汇总最新市场新闻，输出 3 条要点 + 1 条风险提示，中文，200 字以内。”
- “1 小时后提醒我继续完成今天的工作日报，并附上日报模板（四段式）。”
- “今晚 22:30 提醒我：关电脑、洗漱、准备睡觉。语气要温柔一点。”

**推荐模板（万能句式）：**

> 在【时间】执行【任务】，输出【格式】，并遵守【约束】。

把这三项一次说清楚，Kimi Claw 的执行会稳定很多，也更容易长期形成“自动化习惯”。
  - 译: 3. **Constraints**: What it
...[truncated for review]
  - 建议: 补全缺失译文。建议译为：3. **Constraints**: What it must or must not do, or requirements it must meet, such as within 200 Chinese characters, Chinese only, include a risk warning, output only three items, etc. 后续示例、推荐模板和结尾段落也需完整翻译。
- **[major]** `accuracy` @ View the Lobster Settings Document intro
  - 源: 包含以下五个模块
  - 译: contains the following five modules
  - 建议: 表格实际列出 7 个模块，应改为 “contains the following seven modules”。如需严格忠于源文，也建议回源修正中文原文中的数量错误。
- **[major]** `terminology` @ Section title and table descriptions
  - 源: 龙虾设定文档 / 你赋予龙虾 Claw 的角色定位
  - 译: Lobster Settings Document / the lobster Claw
  - 建议: “lobster”直译较生硬，且可能造成产品概念混乱。若英文产品语境中不使用 Lobster 作为固定术语，建议统一为 “Claw settings document” 或 “Kimi Claw configuration document”；表格中改为 “the role you assign to Claw”。
- `kimi-code/cli-getting-started.md` — overall=3.0, severity=critical
  - 摘要: The translation is generally usable in the completed portion, but the target text is critically truncated and the SEO title needs immediate correction.
- **[critical]** `structure` @ After “Your first conversation” section
  - 源: 对于会修改文件或执行 Shell 命令的操作，默认会在执行前征求确认。也可以直接描述更具体的任务：……## 常用命令与快捷键速查……## 常见问题……## 下一步
  - 译: Op
...[truncated for review]
  - 建议: Complete the translation for all remaining content. The current target is truncated and omits important sections including write-operation confirmation behavior, examples, commands and shortcuts, data location, FAQ, and next steps.
- **[major]** `fluency` @ SeoMeta title
  - 源: Kimi Code CLI 安装与快速入门 - Kimi 帮助中心
  - 译: Install Kimi Code CLI and 快速 Start Guide - Kimi Help Center
  - 建议: Replace the mixed-language and unnatural title with: “Kimi Code CLI Installation and Quick Start Guide - Kimi Help Center”.
- `kimi-code/cli-goals.md` — overall=3.0, severity=critical
  - 摘要: 译文前半部分质量较好，但当前版本存在严重截断，必须补全后续句子和整个“谨慎使用目标模式”章节后才能发布。
- **[critical]** `completeness` @ After “When a goal becomes `blocked` and follow-up goals exist...” and the remaining article
  - 源: 当目标进入「阻塞（`blocked`）」状态且存在后续目标时，TUI 会提醒你，这些后续目标会等待当前目标完成。

## 谨慎使用目标模式

目标模式适合能通过文件、测试、命令输出、生成产物或明确报告验证的工作。对于一次性修改或只需要一个答案的问题，普通提示词通常更合适。

在 `manual` 权限模式下，目标工作可能会停下来等待工具调用审批。无人值守工作应选择与代码库风险和可运行命令相匹配的权限模式。

在非交互式 prompt 模式中，只支持创建目标：

[CodePreview]

Prompt 模式在目标完成时以退出码 `0` 退出，在目标阻塞时以 `3` 退出，在目标暂停时以 `6` 退出。`/goal next` 和其它管理命令都是 TUI 控制命令。
  - 译: When a goal becomes `blocked` and follow-up goals exist, the TUI reminds you that those follow-up goals will wait un
...[truncated for review]
  - 建议: Restore the complete translation from this sentence onward. Suggested continuation: “When a goal becomes `blocked` and follow-up goals exist, the TUI reminds you that those follow-up goals will wait until the current goal is complete.” Then translate the full “Use goal mode carefully” section, including permission mode, non-interactive prompt mode, and exit codes.

#### 术语统一建议

- （1 次）Use the singular UI action consistently: “Why can’t I click the ‘Create Skill’ button?” unless the actual product UI lab
- （1 次）Use natural plural and avoid “official membership credit”: “Creating a Skill consumes your **tokens**, including gifted 
- （1 次）Use standard English capitalization: “with support for app interface design, website deployment, data visualization, and
- （1 次）For software/version-control terminology, use “commits changes” or “creates version commits”: “AI automatically creates 
- （1 次）Use one form consistently, preferably "sub-agent" or "sub-agent (sub-agent)" is unnecessary in English. Recommended: "su

#### 常见润色项（抽样）

- `agent/FAQ.md` @ H2: Why can’t I click the “Create Skills” button?: Use the singular UI action consistently: “Why can’t I click the ‘Create Skill’ button?” unless the actual product UI label is plural.
- `agent/FAQ.md` @ How does creating Skills consume credit?: Use natural plural and avoid “official membership credit”: “Creating a Skill consumes your **tokens**, including gifted attempts or paid membership quota. If you have tokens remaining...”
- `agent/FAQ.md` @ Deduction order: Translate “正式会员额度” as “paid membership quota” or “membership quota” rather than “official membership credit”: “If there are no gifted attempts left, your paid membership quota is deducted.”
- `agent/FAQ.md` @ Concurrent task limit: Make the status wording natural and avoid implying failed tasks are running: “You can have up to **3 tasks** at the same time in total, including tasks in the Creating or Failed state.”
- `agent/FAQ.md` @ Daily limit: Revise word order: “Each user can create Skills from Office documents up to **10 times per day** including retries.”

### es-419（拉美西语）

- 审校完成: 90 篇
- 平均分: 4.24
- 分布: critical 5 / major 18 / minor 67 / ok 0

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `getting-started/prompt basics.md` — overall=3.0, severity=critical
  - 摘要: La traducción es sólida y fluida en general, pero debe corregirse de forma prioritaria el cierre truncado del último callout y pulir algunas expresiones para mayor naturalidad y consistencia terminológica.
- **[critical]** `omission` @ Final <Callout type="info">
  - 源: Master these core concepts and techniques, and you'll collaborate with Kimi far more effectively — turning AI into a true productivity tool.
  - 译: Domina estos conceptos y técnicas clave, y colaborarás con Kimi de forma mucho más eficaz, convirtiendo la IA en una ver ...[truncated for review]
  - 建议: Completar la oración: "Domina estos conceptos y técnicas clave, y colaborarás con Kimi de forma mucho más eficaz, convirtiendo la IA en una verdadera herramienta de productividad."
- `kimi-api/api-troubleshooting.md` — overall=3.0, severity=critical
  - 摘要: La traducción es mayormente correcta, pero debe completarse la sección final truncada y normalizar la terminología técnica en español para mejorar consistencia y claridad.
- **[critical]** `omission` @ Última sección: ¿Puedo llamar a la API de Kimi desde fuera de China?
  - 源: If you experience connectivity issues, contact the sales team to discuss the best solution for your region.
  - 译: Si 
...[truncated for review]
  - 建议: Completar la oración: "Si tienes problemas de conectividad, comunícate con el equipo de ventas para analizar la mejor solución para tu región." Eliminar cualquier marcador de truncamiento.
- **[major]** `terminology` @ Sección 429 rate limit
  - 源: rate limit / rate limit tier / quota
  - 译: rate limit / subir de nivel en tu rate limit / quota mayor
  - 建议: Evitar mezcla innecesaria de inglés y español. Usar: "límite de frecuencia", "nivel de límite de frecuencia" y "cuota más alta". Ej.: "Aumenta tu monto acumulado de recarga para mejorar tu nivel de límite de frecuencia."
- **[major]** `terminology` @ Sección membresía y concurrencia de API
  - 源: API concurrency / rate limits / agent parallelism
  - 译: concurrency de la API / rate limits / paralelismo de agentes
  - 建议: Traducir consistentemente los términos técnicos: "concurrencia de la API", "límites de frecuencia" y, si aplica, "paralelismo de agentes". Título sugerido: "¿Existe alguna relación entre la membresía de Kimi y la concurrencia de la API?"
- `deep-research/overview.md` — overall=3.2, severity=critical
  - 摘要: La traducción visible es fluida, pero no está lista para publicar si el truncamiento existe en el archivo real y requiere corregir términos en inglés/Spanglish y validar etiquetas de interfaz.
- **[critical]** `structure` @ Desde «## Notas importantes», punto 2 en adelante
  - 源: 2. **Credit refunds**: Automatically refunded for tool invocation errors; submit feedback for off-direction research
3. **Input quality**...
## Related resources...
  - 译: 2. **Reembolsos de credit**: se reembolsan automáticamente ante errores en la invocación
...[truncated for review]
  - 建议: Completar la traducción de todo el contenido restante, incluidos los puntos 2-5 de «Notas importantes», «Recursos relacionados» y el bloque de imagen final. Si «[truncated for review]» aparece en el archivo real, eliminarlo.
- **[major]** `terminology` @ Tabla «¿Cómo funciona Kimi-Research?»
  - 源: Clarification; Iterative reasoning
  - 译: Clarification; Iterative reasoning
  - 建议: Traducir los encabezados de pasos que quedaron en inglés: «Aclaración» y «Razonamiento iterativo». Mantener la misma traducción en todo el artículo.
- **[major]** `terminology` @ Introducción, puntos de acceso y Notas importantes
  - 源: Agent product; Deep Research Agent mode; Credit refunds
  - 译: producto Agent; modo Agent de Deep Research; Reembolsos de credit
  - 建议: Evitar anglicismos no necesarios: usar «producto de agente», «modo Agente de Deep Research» y «Reembolsos de créditos».
- `membership/update-rules.md` — overall=3.6, severity=major
  - 摘要: 译文准确性总体可接受，但“credits、quota、deep research、concurrency”等核心术语未本地化，需统一改为自然的 es-419 表达。
- **[major]** `terminology` @ 全篇，包括 SeoMeta、标题、正文、列表
  - 源: credits / Credit update & usage rules
  - 译: credits / Reglas de actualización y uso de credits
  - 建议: 将全篇的 “credits” 统一译为西语“créditos”。标题建议改为“Reglas de renovación y uso de créditos”，SeoMeta title 改为“Reglas de renovación y uso de créditos - Centro de ayuda de Kimi”。
- **[major]** `terminology` @ SeoMeta、Callout、What are the two credit pools、Kimi Chat/Kimi Code 引用、tip
  - 源: quota / quota pool / no quota consumption
  - 译: quota / grupo de quota / no consume quota
  - 建议: 将 “quota” 统一译为“cuota”。例如“grupo de cuota independiente”“no consume cuota”“un solo grupo de cuota compartido”。避免英文和西文混用。
- **[major]** `terminology` @ 功能表格与用量示例
  - 源: Agent tasks / deep research
  - 译: Tareas de Agent / deep research
  - 建议: 若 Agent 不是固定产品名，建议译为“Tareas de agente”；“deep research”建议译为“investigación profunda”。例如“Sitios web, documentos, presentaciones, hojas de cálculo, investigación profunda”和“Ejecutar un informe de investigación profunda”。
- `agent/use-skills-in-agent-en.md` — overall=3.8, severity=critical
  - 摘要: La traducción es mayormente precisa y natural, pero el bloque final está truncado y debe corregirse antes de publicar.
- **[critical]** `completeness` @ Final <ComparisonBlock>, correct
  - 源: correct={"Help users search and discover Skills. Used when users explicitly want to find a certain type of Skill or describe a problem and hope to get Skill recommendations. Trigger words include 'Find Skills', 'Search Skills', 'Is there a Skill that can do X?', etc."}
  - 译: correct={"Ayuda a los usuarios a buscar y ...[truncated for review]
  - 建议: Restaurar y traducir el bloque completo, conservando la sintaxis JSX. Sugerencia: correct={"Ayuda a los usuarios a buscar y descubrir habilidades. Se usa cuando los usuarios quieren encontrar explícitamente un tipo específico de habilidad o describen un problema y esperan recibir recomendaciones de habilidades. Las palabras de activación incluyen 'Buscar habilidades', 'Encontrar habilidades', '¿Hay alguna habilidad que pueda hacer X?', etc."}
- `agent/FAQ-en.md` — overall=4.0, severity=major
  - 摘要: La traducción es clara y completa, pero requiere ajustes terminológicos importantes, especialmente «quota», «concurrency» y algunas expresiones poco naturales en es-419.
- **[major]** `terminology` @ SEO description; varias secciones
  - 源: quota
  - 译: quota
  - 建议: Usar el término español «cuota» de forma consistente: «tu cuota se agotó», «cuota de membresía», «no consumen cuota».
- **[major]** `terminology` @ ## ¿Hay límites en la cantidad o frecuencia de creaciones?
  - 源: Concurrency Limit
  - 译: Límite de concurrency
  - 建议: Reemplazar por «Límite de concurrencia» o «Límite de tareas simultáneas».
- `agent/features-and-limits.md` — overall=4.0, severity=major
  - 摘要: 译文整体可用，但需重点统一 Agent 与 cuota 等关键术语，并优化少量西语表达以提升专业性和本地化自然度。
- **[major]** `terminology` @ 标题、SeoMeta title、全文多处
  - 源: Agent features & limitations / Agent mode
  - 译: Funciones y limitaciones del Agent / el modo Agent / el Agent estándar
  - 建议: 如将 Agent 作为产品/功能名保留，西语中建议避免“del Agent”这种英西混搭，可统一为“Funciones y limitaciones de Agent”“modo Agent”“Agent estándar”；若要意译，则全文统一为“el agente”。建议优先统一为品牌名不加冠词的“Agent”。
- **[major]** `terminology` @ Important notes Callout 及项目符号
  - 源: Quota Usage / quota / shared pool / Quota & Billing
  - 译: Uso de quota / quota / grupo compartido / Quota y facturación
  - 建议: “quota”应译为自然西语“cuota”。建议改为：“Uso de cuota”“Las tareas de Agent consumen cuota del fondo compartido”“Kimi Code usa un fondo de cuota independiente”“Cuota y facturación”。
- **[major]** `accuracy` @ Important notes Callout
  - 源: Agent tasks consume quota from the shared pool (other membership features).
  - 译: Las tareas de Agent consumen quota del grupo compartido (otras funciones de membresía).
  - 建议: 括号内容语义不清，应明确为与其他会员功能共享。建议：“Las tareas de Agent consumen cuota del fondo compartido con otras funciones de la membresía.”
- `agent/quota-and-billing.md` — overall=4.0, severity=major
  - 摘要: La traducción es fiel y bien estructurada, pero necesita corregir de forma sistemática el término clave “quota” por “cuota” y pulir algunos calcos menores para sonar más natural en es-419.
- **[major]** `terminology` @ SeoMeta description, Callout inicial, secciones de facturación y cuota
  - 源: quota
  - 译: quota
  - 建议: Sustituir todas las apariciones de “quota” por “cuota”. Ej.: “sistema de cuota”, “bolsa de cuota”, “cuota insuficiente”, “saldo de cuota”.
- **[major]** `terminology` @ SeoMeta description y Callout inicial
  - 源: two quota pools
  - 译: dos bolsas de quota
  - 建议: Usar “dos bolsas de cuota” o, si se prefiere un término más natural para producto, “dos grupos de cuota”. Mantener la misma opción en todo el artículo.

#### 术语统一建议

- （1 次）Usar el término español «cuota» de forma consistente: «tu cuota se agotó», «cuota de membresía», «no consumen cuota».
- （1 次）Reemplazar por «Límite de concurrencia» o «Límite de tareas simultáneas».
- （1 次）Si es el nombre de una función, conservarlo como nombre propio o traducirlo con mayúsculas: «10 conversiones de “Documen
- （1 次）如将 Agent 作为产品/功能名保留，西语中建议避免“del Agent”这种英西混搭，可统一为“Funciones y limitaciones de Agent”“modo Agent”“Agent estándar”；若要意译，则全
- （1 次）“quota”应译为自然西语“cuota”。建议改为：“Uso de cuota”“Las tareas de Agent consumen cuota del fondo compartido”“Kimi Code usa un fond

#### 常见润色项（抽样）

- `agent/overview.md` @ ColumnsContent > description: Features & Limits: Corregir el anglicismo/errata: "Capacidades y cuotas".
- `agent/overview.md` @ ColumnsContent > title: Quota & Billing: Traducir "Quota" al español y mantener consistencia: "Cuota y facturación".
- `agent/overview.md` @ Evolución del producto > 27 de enero de 2026: Evitar el artículo poco natural con el nombre del producto: "mejoras en las habilidades de Office y en las capacidades de Agent" o, si se decide traducirlo, "del agente" de forma consistente.
- `agent/overview.md` @ Capacidades principales > Websites: Para reflejar mejor "deploy", usar "Genera y despliega aplicaciones web responsivas" o "Genera y publica aplicaciones web responsivas".
- `agent/overview.md` @ Primeros pasos: Usar una formulación más natural en es-419: "sigue el progreso de la ejecución" o "consulta el progreso de la ejecución".

### fr-FR（法语）

- 审校完成: 90 篇
- 平均分: 4.26
- 分布: critical 4 / major 11 / minor 75 / ok 0

#### 重点问题文章

- `agent/use-skills-in-claw-en.md` — overall=3.0, severity=major
  - 摘要: Traduction de bonne qualité dans l'ensemble, mais la section mobile est incomplète et un avertissement doit être clarifié pour éviter une perte de sens.
- **[major]** `structure` @ Section « Remarques sur l'usage mobile »
  - 源: When using skills on mobile, be aware of the following limitations: ... We recommend completing some skill management operations...
  - 译: Lorsque vous utilisez des compétences sur mobile, gardez à l'esprit les limitatio
...[truncated for review]
  - 建议: Compléter la section mobile manquante. Proposition : « Lorsque vous utilisez des compétences sur mobile, gardez à l'esprit les limitations suivantes :

- Si vous avez ajouté des compétences dans la version web, le menu “+” affichera une entrée de compétence. En cliquant dessus, la compétence sera insérée sous forme de texte dans la zone de saisie.
- Si aucune compétence n'a été ajoutée dans la version web, le menu “+” sur mobile n'affichera pas l'entrée de compétence.
- Si l'historique de la conversation contient du contenu généré par une compétence, le message suivant s'affichera : **Généré par une compétence, actuellement pris en charge uniquement sur la plateforme web Kimi**.

Nous vous recommandons d'effectuer certaines opérations de gestion des compétences, comme la création, la modification ou la suppression, sur la plateforme web, et d'utiliser principalement le mobile pour invoquer des compétences existantes. »
- **[major]** `accuracy` @ Callout warning sous « Invoquer des compétences »
  - 源: The skill entry in third-party OpenClaw, local Kimi Claw, and desktop Kimi Claw is currently unavailable.
  - 译: L'accès aux compétences n'est actuellement pas disponible dans les OpenClaw tiers, dans Kimi Claw local et dans Kimi Claw pour ordinateur de bureau.
  - 建议: Rendre explicitement « skill entry » par « entrée/point d'accès aux compétences » afin d'éviter de suggérer que toutes les compétences sont indisponibles. Exemple : « L'entrée des compétences n'est actuellement pas disponible dans les OpenClaw tiers, dans Kimi Claw local ni dans Kimi Claw pour ordinateur de bureau. »
- `kimi-business/kimi-business.md` — overall=3.0, severity=critical
  - 摘要: Traduction globalement correcte, mais la fin du document est tronquée et doit être restaurée avant publication.
- **[critical]** `structure` @ Après « Règles d'activation »
  - 源: - **Full Current-Period Quota**: Members who join with an unallocated or newly added seat receive the full quota for the current period
- **Cycle Alignment**: Enterprise benefits are settled uniformly according to subscription cycle, refreshed monthly

### Expiration Rules

- **Member Removal**: Removed members immediately lose enterprise workspace access and Kimi Business benefits; new benefits stop in next cycle
- **Subscription Expiration**: All member benefits are suspended when organization subscription expires; restored upon renewal
  - 译: - **Quota complet de la période en cours** : les m
...[truncated for review]
  - 建议: Restaurer la fin du document. Traduction proposée : « - **Quota complet de la période en cours** : les membres qui rejoignent l'organisation avec un siège non attribué ou nouvellement ajouté bénéficient du quota complet pour la période en cours
- **Alignement des cycles** : les avantages entreprise sont calculés uniformément selon le cycle d'abonnement et renouvelés chaque mois

### Règles d'expiration

- **Retrait d'un membre** : les membres retirés perdent immédiatement l'accès à l'espace de travail d'entreprise et aux avantages Kimi Business ; les nouveaux avantages cessent au cycle suivant
- **Expiration de l'abonnement** : tous les avantages des membres sont suspendus lorsque l'abonnement de l'organisation expire ; ils sont rétablis après renouvellement ».
- `kimi-api/api-troubleshooting.md` — overall=3.2, severity=critical
  - 摘要: Traduction globalement correcte, mais la dernière section est tronquée et plusieurs anglicismes techniques doivent être harmonisés en français.
- **[critical]** `structure` @ Dernière section
  - 源: ## Can I call the Kimi API from outside of China?

Kimi API is available internationally via `api.moonshot.ai`. If you experience connectivity issues, contact the sales team to discuss the best solution for your region.
  - 译: ## Puis-je appeler l'API Kimi depuis l
...[truncated for review]
  - 建议: Restaurer la section complète : « ## Puis-je appeler l’API Kimi depuis l’extérieur de la Chine ?

L’API Kimi est disponible à l’international via `api.moonshot.ai`. Si vous rencontrez des problèmes de connectivité, contactez l’équipe commerciale afin de discuter de la solution la mieux adaptée à votre région. »
- **[major]** `terminology` @ Plusieurs occurrences : 429, abonnement/API
  - 源: rate limit / API concurrency / concurrency limits
  - 译: rate limit / concurrency / limites de concurrency
  - 建议: Éviter les anglicismes non nécessaires. Utiliser de façon cohérente « limite de débit » ou « limite de fréquence » pour « rate limit », et « requêtes simultanées » ou « concurrence de l’API » pour « API concurrency ». Exemple : « limite de débit de l’API » et « limites de requêtes simultanées de l’API ».
- `agent/use-skills-in-agent-en.md` — overall=3.6, severity=critical
  - 摘要: Traduction globalement correcte, mais la fin du composant ComparisonBlock semble incomplète et doit être corrigée en priorité pour éviter une erreur MDX/JSX.
- **[critical]** `structure` @ Fin du document, composant <ComparisonBlock>
  - 源: correct={"Help users search and discover Skills. Used when users explicitly want to find a certain type of Skill or describe a problem and hope to get Skill recommendations. Trigger words include 'Find Skills', 'Search Skills', 'Is there a Skill that can do X?', etc."}
  - 译: correct={
...[truncated for review]
  - 建议: Compléter le composant et conserver une syntaxe JSX/MDX valide, par exemple : correct={"Aide les utilisateurs à rechercher et à découvrir des Skills. À utiliser lorsque les utilisateurs souhaitent explicitement trouver un type de Skill précis ou décrivent un problème et espèrent obtenir des recommandations de Skills. Les mots déclencheurs incluent « Trouver des Skills », « Rechercher des Skills », « Existe-t-il un Skill capable de faire X ? », etc."}
- `getting-started/prompt basics.md` — overall=3.6, severity=critical
  - 摘要: Traduction globalement solide, mais la fin du document est incomplète et doit être rétablie avant publication.
- **[critical]** `structure` @ Section « Modèles pour démarrer rapidement »
  - 源: **Writing**

[CodePreview]

**Analysis**

[CodePreview]

**Translation**

[CodePreview]

<Callout type="info">...
  - 译: **Rédaction
...[truncated for review]
  - 建议: Compléter la traduction manquante, fermer le gras Markdown correctement : **Rédaction**, puis ajouter **Analyse**, **Traduction**, les blocs [CodePreview] et le dernier Callout traduit.
- **[major]** `fluency` @ Table « Exploiter les fichiers et les liens »
  - 源: "Read this article at the link and extract the key takeaways"
  - 译: « Lis l'article disponible à ce lien et dégages-en les points essentiels »
  - 建议: Corriger l'impératif : « Lis l’article disponible à ce lien et dégage-en les points essentiels » ou, plus naturel : « Lis l’article à ce lien et extrais-en les points clés ».
- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: Bonne traduction dans l’ensemble, mais il faut corriger l’omission du niveau d’accès Moderato et lisser quelques choix terminologiques et typographiques.
- **[major]** `accuracy` @ Callout warning / Accès bêta
  - 源: K2.6 Agent Swarm [Beta] is currently available to Moderato, Allegretto, Allegro, and Vivace members.
  - 译: K2.6 Agent Swarm [Bêta] est actuellement réservé aux membres Allegretto, Allegro et Vivace.
  - 建议: Ajouter le niveau manquant : « ... réservé aux membres Moderato, Allegretto, Allegro et Vivace. »
- `getting-started/agentic-chat.md` — overall=4.0, severity=major
  - 摘要: Traduction globalement correcte, mais plusieurs choix terminologiques et une possible troncature de phrase doivent être corrigés avant publication.
- **[major]** `structure` @ Section « Sessions et tours de conversation », tableau
  - 源: Your input and Kimi's response form one round-trip
  - 译: Votre saisie et la réponse de Ki
  - 建议: Vérifier le fichier complet : la phrase semble tronquée. Traduction proposée : « Votre saisie et la réponse de Kimi forment un aller-retour complet. »
- **[major]** `terminology` @ Section « Propulsé par K2.6 »
  - 源: agent swarm capabilities
  - 译: capacités d'agent swarm
  - 建议: Employer une formulation française plus claire : « capacités d’essaim d’agents » ou « capacités de collaboration entre agents ». Éviter le mélange français/anglais non expliqué.
- `kimi-claw/memory-loss.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但需统一 Memory 术语，避免使用源文不存在的 Memory Space，并优化少量法语用词以减少歧义。
- **[major]** `terminology` @ Best practice paragraph
  - 源: Information stored in Memory persists across conversation resets.
  - 译: Les informations stockées dans Memory Space sont conservées d'une réinitialisation de conversation à l'autre.
  - 建议: 将“Memory Space”改为与源文一致的“Memory”，避免引入源文不存在的功能名。例如：« Les informations stockées dans Memory sont conservées d’une réinitialisation de conversation à l’autre. »
- **[major]** `terminology` @ Kimi Claw lost its memory? paragraph
  - 源: If something wasn't saved to **Memory**, it's gone.
  - 译: Si un élément n'a pas été enregistré dans **Memory Space**, il est perdu.
  - 建议: 将 **Memory Space** 改为 **Memory**，保持产品术语一致。例如：« Si un élément n’a pas été enregistré dans **Memory**, il est perdu. »

#### 术语统一建议

- （1 次）建议改为“Limite de simultanéité”或“Limite des tâches simultanées”。“concurrence”在法语中更常指竞争，技术语境下不如“simultanéité”自然。
- （1 次）如需保留产品 UI 术语，可改为“une notification toast s'affiche”或“un message toast s'affiche”。当前译文省略了 toast 类型。
- （1 次）建议改为“quota de votre abonnement”或“quota de votre abonnement officiel Kimi”。当前“abonnement officiel”略生硬，可能让读者误解为存在非官方订阅。
- （1 次）Harmoniser le nom produit : soit conserver “Agent” comme nom de fonctionnalité sans article dans les titres courts, soit
- （1 次）Préférer “Limites de sortie de fichiers” ou “Limites d’export de fichiers”, plus proche de “output” dans ce contexte.

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ Limites > Limite de concurrence: 改为“un maximum de **3 tâches** au total (en cours de création ou échouées) est autorisé simultanément.”，避免表达成“已失败任务也在并行运行”。
- `agent/FAQ-en.md` @ Limites > Limite de concurrence: 建议改为“Limite de simultanéité”或“Limite des tâches simultanées”。“concurrence”在法语中更常指竞争，技术语境下不如“simultanéité”自然。
- `agent/FAQ-en.md` @ Limites > Limite quotidienne: 如需保留产品 UI 术语，可改为“une notification toast s'affiche”或“un message toast s'affiche”。当前译文省略了 toast 类型。
- `agent/FAQ-en.md` @ Exigences de nommage > règle 2: 改为“Longueur du nom : 25 caractères maximum.”，更符合法语表达，也更准确地指技能名称长度。
- `agent/FAQ-en.md` @ Quota > paragraphe introductif: 建议改为“quota de votre abonnement”或“quota de votre abonnement officiel Kimi”。当前“abonnement officiel”略生硬，可能让读者误解为存在非官方订阅。

### id-ID（印尼语）

- 审校完成: 90 篇
- 平均分: 4.27
- 分布: critical 1 / major 6 / minor 83 / ok 0

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `deep-research/overview.md` — overall=3.2, severity=critical
  - 摘要: Terjemahan sudah cukup baik, tetapi dokumen target terpotong di bagian akhir sehingga perlu dilengkapi sebelum dipublikasikan.
- **[critical]** `structure` @ Catatan penting bagian akhir dan Related resources
  - 源: 4. **Scope boundaries**... 5. **Terms**... ## Related resources ...
  - 译: 4. **Batasan cakupan**: Untuk tanya-jawab sederhana, gunakan mode chat standar agar respons lebi
...[truncated for review]
  - 建议: Lengkapi bagian yang terpotong. Misalnya: "4. **Batasan cakupan**: Untuk tanya-jawab sederhana, gunakan mode chat standar agar respons lebih cepat\n5. **Ketentuan**: Tunduk pada [Perjanjian Layanan Pengguna Kimi](...)\n\n## Sumber daya terkait\n- Laporan teknis: ...\n- Galeri pengguna: ..."
- **[major]** `terminology` @ Tabel pipeline riset
  - 源: Clarification / Iterative reasoning
  - 译: **Clarification** / **Iterative reasoning**
  - 建议: Terjemahkan istilah tahap agar konsisten dengan istilah Indonesia: "**Klarifikasi**" dan "**Penalaran iteratif**". Jika nama fitur resmi harus berbahasa Inggris, beri padanan dalam tanda kurung pada kemunculan pertama.
- `membership/overview.md` — overall=3.8, severity=major
  - 摘要: Terjemahan sudah cukup baik, tetapi ada kesalahan hak paket Moderato pada tabel Agent Swarm yang perlu segera diperbaiki serta konsistensi istilah “kredit/kuota” yang perlu distandardisasi.
- **[major]** `accuracy` @ Plan comparison table / Agent Swarm (beta) row
  - 源: | Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses |
  - 译: | Agent Swarm (beta) | — | — | 50 penggunaan | 120 penggunaan | 240 penggunaan |
  - 建议: Ubah nilai untuk paket Moderato dari “—” menjadi “25 penggunaan”.
- **[major]** `accuracy` @ Plan comparison table / Agent Swarm concurrent subtasks row
  - 源: | Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8 |
  - 译: | Subtugas bersamaan Agent Swarm | — | — | 4 | 4 | 8 |
  - 建议: Ubah nilai untuk paket Moderato dari “—” menjadi “2”.
- `membership/pricing.md` — overall=3.8, severity=major
  - 摘要: 译文整体可用，但 Moderato 的 Agent Swarm 权益有两处关键数据错误，且需统一“kuota/kredit”等印尼语术语。
- **[major]** `accuracy` @ Plans at a glance table > Agent Swarm (beta) > Moderato
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50 penggunaan | 120 penggunaan | 240 penggunaan
  - 建议: 将 Moderato 列从 “—” 改为 “25 penggunaan”，保持与源文权益一致。
- **[major]** `accuracy` @ Plans at a glance table > Agent Swarm concurrent subtasks > Moderato
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Subtugas serentak Agent Swarm | — | — | 4 | 4 | 8
  - 建议: 将 Moderato 列从 “—” 改为 “2”。
- `agent/features-and-limits.md` — overall=4.0, severity=major
  - 摘要: Terjemahan sudah baik secara umum, tetapi perlu melokalkan metadata SEO dan menyeragamkan terminologi seperti "kuota", "situs web", serta istilah teknis agar lebih natural dalam bahasa Indonesia.
- **[major]** `localization` @ SeoMeta title/description
  - 源: Agent Features & Limitations - Kimi Help Center / Learn about Kimi Agent's capabilities, usage tips, limitations, and best practices for optimal results.
  - 译: Agent Features & Limitations - Kimi Help Center / Learn about Kimi Agent's capabilities, usage tips, limitations, and best practices for optimal results.
  - 建议: Terjemahkan metadata SEO ke bahasa Indonesia, misalnya: title="Fitur & Batasan Agent - Pusat Bantuan Kimi" dan description="Pelajari kemampuan Kimi Agent, tips penggunaan, batasan, dan praktik terbaik untuk hasil yang optimal."
- **[major]** `terminology` @ Catatan penting > Penggunaan Quota dan bullet terkait
  - 源: Quota Usage / quota / Quota & Billing
  - 译: Penggunaan Quota / quota / Quota & Penagihan
  - 建议: Gunakan istilah Indonesia yang konsisten: "Kuota", "Penggunaan Kuota", dan "Kuota & Penagihan". Hindari mencampur "quota" dan "kuota".
- `kimi-code/cli-ides.md` — overall=4.0, severity=major
  - 摘要: Terjemahan sudah baik dan siap digunakan setelah memperbaiki anchor internal yang berpotensi rusak serta beberapa pilihan istilah agar lebih alami.
- **[major]** `structure` @ Using Kimi Code CLI in Paseo
  - 源: see [Prerequisites](#prerequisites)
  - 译: lihat [Prasyarat](#prerequisites)
  - 建议: Karena judul bagian diterjemahkan menjadi “Prasyarat”, ubah anchor menjadi `#prasyarat`: `lihat [Prasyarat](#prasyarat)`. Jika sistem dokumentasi mempertahankan anchor bahasa Inggris, pastikan anchor eksplisit ditambahkan.
- `kimi-code/cli-interaction.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量良好，但需修正“List”误译为“mendaftar”以及 Thinking Mode 的 toggle 含义，以避免功能说明不准确。
- **[major]** `accuracy` @ Slash commands 表格：/sessions
  - 源: List and switch sessions
  - 译: Mendaftar dan berpindah sesi
  - 建议: 将“mendaftar”改为“menampilkan daftar”，建议译为“Menampilkan daftar sesi dan berpindah sesi”，避免误解为“注册”。
- `agent/swarm.md` — overall=4.2, severity=major
  - 摘要: 译文整体质量较好，但 Beta 权限列表遗漏 Moderato，需优先修正；另有少量术语本地化和印尼语自然度问题。
- **[major]** `accuracy` @ Beta Access callout
  - 源: K2.6 Agent Swarm [Beta] is currently available to Moderato, Allegretto, Allegro, and Vivace members.
  - 译: K2.6 Agent Swarm [Beta] saat ini tersedia untuk anggota Allegretto, Allegro, dan Vivace.
  - 建议: 补回遗漏的 Moderato："K2.6 Agent Swarm [Beta] saat ini tersedia untuk anggota Moderato, Allegretto, Allegro, dan Vivace."

#### 术语统一建议

- （1 次）建议统一改为印尼语标准拼写“kuota”，例如“kuota akun Anda”“kuota keanggotaan”。
- （1 次）“pencarian hadiah”较生硬，建议根据产品术语改为“pencarian bonus”或“jatah pencarian gratis yang diberikan”，并在全文统一。
- （1 次）建议本地化为“Batas konkurensi”或更易懂的“Batas tugas bersamaan”。
- （1 次）Gunakan istilah Indonesia yang konsisten: "Kuota", "Penggunaan Kuota", dan "Kuota & Penagihan". Hindari mencampur "quota
- （1 次）Lokalkan istilah agar lebih natural: "proses memulai sandbox, inisialisasi basis data, konfigurasi autentikasi, atau tin

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ 多处：账户额度/会员额度相关表述: 建议统一改为印尼语标准拼写“kuota”，例如“kuota akun Anda”“kuota keanggotaan”。
- `agent/FAQ-en.md` @ 标题：How creating Skills consumes quota?: 建议改为“Bagaimana pembuatan skill menggunakan kuota?”或“Bagaimana kuota digunakan saat membuat skill?”；避免“menghabiskan”带来“一次性耗尽”的误解，并统一 skill 大小写。
- `agent/FAQ-en.md` @ How creating Skills consumes quota? 段落: “pencarian hadiah”较生硬，建议根据产品术语改为“pencarian bonus”或“jatah pencarian gratis yang diberikan”，并在全文统一。
- `agent/FAQ-en.md` @ Limits section - Concurrency Limit: 建议本地化为“Batas konkurensi”或更易懂的“Batas tugas bersamaan”。
- `agent/FAQ-en.md` @ Limits section - retry prompt: “menerima petunjuk”不够自然，建议改为“Anda akan melihat pesan untuk mencoba lagi beberapa saat kemudian”。

### it-IT（意大利语）

- 审校完成: 90 篇
- 平均分: 4.29
- 分布: critical 6 / major 10 / minor 74 / ok 0

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `agent/use-skills-in-agent-en.md` — overall=3.0, severity=critical
  - 摘要: Traduzione complessivamente buona, ma il blocco finale risulta troncato e va corretto prima della pubblicazione.
- **[critical]** `structure` @ Fine del documento, ComparisonBlock correct
  - 源: correct={"Help users search and discover Skills. Used when users explicitly want to find a certain type of Skill or describe a problem and hope to get Skill recommendations. Trigger words include 'Find Skills', 'Search Skills', 'Is there a Skill that can do X?', etc."}
  - 译: correct={"Aiuta gli utenti a cercare e scoprire le Skill. Da usare quando gli utenti vogliono esplicitamente trovare un certo tipo di Skill o descrivono un problema sperando di ricevere consigli su una Skill. Le parole chiave includono 'Trova Skill', 'Cerca Skill', 'Esiste una Skil ...[truncated for review]
  - 建议: Ripristinare la parte mancante e chiudere correttamente stringa e componente. Suggerimento: correct={"Aiuta gli utenti a cercare e scoprire le Skill. Da usare quando gli utenti vogliono esplicitamente trovare un certo tipo di Skill o descrivono un problema e sperano di ricevere consigli sulle Skill. Le parole di attivazione includono 'Trova Skill', 'Cerca Skill', 'Esiste una Skill che può fare X?', ecc."}
- `deep-research/overview.md` — overall=3.0, severity=major
  - 摘要: 译文整体可用，但存在内容截断、部分术语未本地化和少数语义不精确问题，建议补齐全文并统一关键术语。
- **[major]** `structure` @ Note importanti 3 之后
  - 源: 3. **Input quality**: Concise, well-defined questions produce better results
4. **Scope boundaries**...
## Related resources...
  - 译: 3. **Qualità dell'input**: domande concise e ben definite producono risul
...[truncated for review]
  - 建议: 补齐被截断的内容，确保 Note importanti 第 3-5 条、Related resources 以及最后的 Frames 图片块完整保留。
- **[major]** `terminology` @ How Kimi-Research works 表格
  - 源: Clarification / Iterative reasoning
  - 译: **Clarification** / **Iterative reasoning**
  - 建议: 将未翻译的表格术语统一本地化为 **Chiarimento** / **Ragionamento iterativo**，保持与其他行一致。
- **[major]** `accuracy` @ How Kimi-Research works 表格 - Active search
  - 源: filters to top 3.2% highest-quality content
  - 译: filtra il 3,2% dei contenuti di qualità più elevata
  - 建议: 改为“seleziona il miglior 3,2% dei contenuti di qualità più elevata”或“filtra fino a mantenere il 3,2% migliore...”，避免误解为过滤掉 3.2%。
- `kimi-api/api-troubleshooting.md` — overall=3.0, severity=critical
  - 摘要: Traduzione generalmente buona, ma la frase finale risulta troncata e va completata prima della pubblicazione; restano alcuni anglismi da uniformare in italiano.
- **[critical]** `omission` @ Ultima sezione: “Posso chiamare l'API Kimi dall'esterno della Cina?”
  - 源: If you experience connectivity issues, contact the sales team to discuss the best solution for your region.
  - 译: Se riscontri problemi di connettività, contatta il team commerci...[truncated for review]
  - 建议: Completare la frase: “Se riscontri problemi di connettività, contatta il team commerciale per discutere la soluzione migliore per la tua area geografica.”
- `agent/use-skills-in-claw-en.md` — overall=3.4, severity=critical
  - 摘要: 译文整体质量较好，但末尾移动端说明存在截断和加粗未闭合问题，需优先补全以避免内容缺失或页面渲染错误。
- **[critical]** `structure` @ Mobile usage notes，第 3 条项目符号及后文
  - 源: If the conversation history contains skill-generated content, a prompt will appear: **Skill generated, currently only supported on Kimi web platform**.

We recommend completing some skill management operations (such as creating, editing, deleting) on the web platform, with mobile primarily used for invoking existing skills.
  - 译: Se la cronologia della conversazione contiene contenuti generati da una skill, appare il messaggio: **Contenuto generato da una skill, attualmente supportato solo sulla piattaforma web 
...[truncated for review]
  - 建议: 补全译文并闭合加粗标记，例如："Se la cronologia della conversazione contiene contenuti generati da una skill, verrà visualizzato il messaggio: **Generato da una skill, attualmente supportato solo sulla piattaforma web Kimi**.\n\nConsigliamo di completare alcune operazioni di gestione delle skill, come creazione, modifica ed eliminazione, sulla piattaforma web; su mobile è preferibile richiamare le skill esistenti."
- `docs-and-sheets/overview.md` — overall=3.4, severity=critical
  - 摘要: La traduzione italiana è complessivamente buona, ma va completata la parte finale troncata e rifinita con alcune correzioni di punteggiatura, terminologia UI e naturalezza stilistica.
- **[critical]** `structure` @ Tabella “Pubblico di riferimento”, ultime righe
  - 源: **Investment analysts** | Drive DCF modeling, financial forecasting, and valuation analysis with natural language; **Marketing & operations** | Aggregate multi-channel data, competitive comparisons, and campaign performance analyses
  - 译: **Analisti finanziari** | Guida 
...[truncated for review]
  - 建议: Ripristinare il contenuto mancante e completare le ultime righe, ad esempio: “**Analisti degli investimenti** | Esegui modellazione DCF, previsioni finanziarie e analisi di valutazione con il linguaggio naturale” e “**Marketing e operations** | Aggrega dati multicanale, confronti competitivi e analisi delle performance delle campagne”.
- `kimi-business/kimi-business.md` — overall=3.6, severity=critical
  - 摘要: Traduzione complessivamente buona, ma non pubblicabile finché non viene completata la sezione finale mancante e corretta la frase troncata.
- **[critical]** `structure` @ Regole di attivazione / fine documento
  - 源: Cycle Alignment: Enterprise benefits are settled uniformly according to subscription cycle, refreshed monthly

### Expiration Rules
- Member Removal...
- Subscription Expiration...
  - 译: **Allineamento dei cicli**: i vantaggi aziendali vengono regolati in modo uniforme in base al ciclo di abbonamen
...[truncated for review]
  - 建议: Completare la frase e ripristinare tutta la sezione mancante. Proposta: "**Allineamento dei cicli**: i vantaggi aziendali vengono calcolati in modo uniforme in base al ciclo di abbonamento e aggiornati mensilmente." Aggiungere poi "### Regole di scadenza" con i due punti su rimozione membro e scadenza abbonamento.
- `membership/update-rules.md` — overall=3.6, severity=major
  - 摘要: 译文信息基本准确，但核心术语和若干意大利语表达不够本地化，建议优先统一“crediti”等关键术语并优化生硬或夹杂英语的句子。
- **[major]** `terminology` @ 全文 / 标题 / SeoMeta
  - 源: credits
  - 译: credit
  - 建议: 将全文的“credit”统一改为意大利语复数“crediti”，例如“pool di credit”改为“pool di crediti”，“Aggiornamento dei credit”改为“Aggiornamento dei crediti”。
- **[major]** `fluency` @ ## Cosa sono i due pool di credit?
  - 源: Instead of separate quotas for each feature
  - 译: Invece di assegnare quota separate a ciascuna funzionalità
  - 建议: 改为更自然且语法正确的表达：“Invece di assegnare quote separate a ciascuna funzionalità”或“Anziché prevedere quote separate per ogni funzionalità”。
- **[major]** `terminology` @ 表格 / Limits
  - 源: 5-hour and 7-day concurrency limits
  - 译: limiti di concurrency di 5 ore e 7 giorni
  - 建议: 避免英语“concurrency”混入，可改为“limiti di esecuzione simultanea di 5 ore e 7 giorni”或“limiti di concorrenza di 5 ore e 7 giorni”，并与产品 UI 术语保持一致。
- `membership/overview.md` — overall=3.8, severity=major
  - 摘要: 译文整体可用，但表格中 Moderato 的 Agent Swarm 权益漏译属于重要准确性问题，且“credit/crediti”和“reset”相关表述需统一修正。
- **[major]** `accuracy` @ Plan comparison table / Agent Swarm (beta)
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50 utilizzi | 120 utilizzi | 240 utilizzi
  - 建议: 将 Moderato 列补回“25 utilizzi”：Agent Swarm (beta) | — | 25 utilizzi | 50 utilizzi | 120 utilizzi | 240 utilizzi
- **[major]** `accuracy` @ Plan comparison table / Agent Swarm concurrent subtasks
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Sottoattività Agent Swarm in contemporanea | — | — | 4 | 4 | 8
  - 建议: 将 Moderato 列补回“2”：Sottoattività Agent Swarm in contemporanea | — | 2 | 4 | 4 | 8

#### 术语统一建议

- （2 次）Valutare la localizzazione di “Kimi Help Center” in “Centro assistenza Kimi”, se coerente con il resto della documentazi
- （1 次）"abbonamento ufficiale" 在意大利语中略显生硬，建议改为 "quota del tuo abbonamento" 或如需品牌明确则用 "quota dell'abbonamento Kimi"。
- （1 次）"notifica toast" 可接受，但对普通用户可能不够清晰。建议改为 "una notifica temporanea"，或 "una notifica toast" 首次出现时确保产品文档术语统一。
- （1 次）Usare una formulazione più coerente con il prodotto: "La modalità Agent standard viene eseguita nel cloud".
- （1 次）Preferire un registro più naturale e tecnico: "supportando la progettazione dell'interfaccia dell'app".

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ H2: How creating Skills consumes quota?: 改为更自然的意大利语："In che modo la creazione di skill consuma la quota?" 或 "Come viene consumata la quota durante la creazione di una skill?"；同时避免英文复数 "Skills"。
- `agent/FAQ-en.md` @ Quota explanation: "abbonamento ufficiale" 在意大利语中略显生硬，建议改为 "quota del tuo abbonamento" 或如需品牌明确则用 "quota dell'abbonamento Kimi"。
- `agent/FAQ-en.md` @ Concurrency Limit: 若括号内不是界面状态名，建议小写并调整表达："È possibile eseguire in parallelo un massimo di 3 attività (in creazione + non riuscite)." 若是 UI 状态名，则保持产品界面一致。
- `agent/FAQ-en.md` @ Daily Limit: "notifica toast" 可接受，但对普通用户可能不够清晰。建议改为 "una notifica temporanea"，或 "una notifica toast" 首次出现时确保产品文档术语统一。
- `agent/FAQ-en.md` @ Naming requirements / Character length: "Lunghezza dei caratteri" 不自然，建议改为 "Lunghezza: massimo 25 caratteri." 或 "Numero massimo di caratteri: 25."

### ja-JP（日语）

- 审校完成: 90 篇
- 平均分: 4.37
- 分布: critical 0 / major 7 / minor 82 / ok 1

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `membership/pricing.md` — overall=3.0, severity=major
  - 摘要: 主要な問題は Moderato プランの Agent Swarm 関連数値の欠落で、加えて quota・credit・token などの用語を日本語版内で統一する必要があります。
- **[major]** `accuracy` @ Plans at a glance 表格 / Agent Swarm (beta)
  - 源: | Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses |
  - 译: | Agent Swarm（ベータ） | — | — | 50 回 | 120 回 | 240 回 |
  - 建议: Moderato 列の値が抜けているため、「—」を「25 回」に修正してください。
- **[major]** `accuracy` @ Plans at a glance 表格 / Agent Swarm concurrent subtasks
  - 源: | Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8 |
  - 译: | Agent Swarm の同時実行サブタスク数 | — | — | 4 | 4 | 8 |
  - 建议: Moderato 列の値が抜けているため、「—」を「2」に修正してください。
- `membership/update-rules.md` — overall=3.4, severity=major
  - 摘要: 意味は概ね正確ですが、credit/quota/token/concurrency などの未翻訳・混在が目立つため、日本語UI向けの用語統一と自然な表現への修正が必要です。
- **[major]** `terminology` @ 全文、SeoMeta title/description、各级标题
  - 源: Credit / credits / quota / tokens
  - 译: credit / quota / token
  - 建议: 避免在日文正文中直接使用小写英文术语。建议统一为「クレジット」「利用枠」或首处写作「クォータ（利用枠）」「トークン」。例如标题改为「クレジットの更新と利用ルール」、正文改为「クレジットは実際の利用量に応じて消費されます」。
- **[major]** `terminology` @ ## 2つのcreditプールとは？ / Callout
  - 源: two credit pools / separate quota pool / shared pool
  - 译: 2つのcreditプール / 専用のquotaプール / 共通のquotaプール
  - 建议: 「creditプール」「quotaプール」が混在して分かりにくいため、用語体系を整理してください。例：「メンバーシップには2種類の利用枠があります。Kimi Codeは専用の利用枠を使用し、その他のメンバーシップ機能は共通のクレジットプールを共有します。」
- `membership/overview.md` — overall=3.8, severity=major
  - 摘要: 翻訳全体の構造は良好ですが、Moderato の Agent Swarm 関連数値が欠落しているため、料金プラン情報としては重大な修正が必要です。
- **[major]** `accuracy` @ プラン比較表 / Agent Swarm (beta)
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50回 | 120回 | 240回
  - 建议: Moderato 欄の「—」を「25回」に修正してください。
- **[major]** `accuracy` @ プラン比較表 / Agent Swarm concurrent subtasks
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Agent Swarm 同時サブタスク数 | — | — | 4 | 4 | 8
  - 建议: Moderato 欄の「—」を「2」に修正してください。
- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: 訳文は全体的に良好ですが、ベータ版アクセス対象から Moderato が抜けている点は利用条件に関わるため必ず修正してください。
- **[major]** `accuracy` @ Beta Access callout
  - 源: K2.6 Agent Swarm [Beta] is currently available to Moderato, Allegretto, Allegro, and Vivace members.
  - 译: K2.6 Agent Swarm [ベータ] は現在、Allegretto、Allegro、Vivace メンバーが利用できます。
  - 建议: 対象プランから Moderato が抜けているため、「現在、Moderato、Allegretto、Allegro、Vivace メンバーが利用できます。」に修正してください。
- `kimi-api/rate-limits.md` — overall=4.0, severity=major
  - 摘要: 内容の正確性と構成は良好ですが、「rate limit」「concurrency」「rate quota」などの未訳語を日本語の標準的な技術用語に統一する必要があります。
- **[major]** `terminology` @ SeoMeta title / H1 / 全文
  - 源: Rate limits
  - 译: rate limit
  - 建议: 日本語ヘルプ文書では英語のままにせず、「レート制限」に統一してください。例：title="レート制限 - Kimi ヘルプセンター"、H1「# レート制限」。
- **[major]** `terminology` @ SeoMeta description / 第1段落 / 429対応
  - 源: concurrency
  - 译: concurrency
  - 建议: 「同時実行数」または「同時リクエスト数」に置き換えてください。例：「リクエスト頻度と同時実行数にレート制限を設けています」。
- `kimi-claw/kimi-claw-android-guide.md` — overall=4.0, severity=major
  - 摘要: 翻訳の正確性は概ね良好ですが、Markdown リンクの破損は公開前に必ず修正し、UI 用語やスマートフォン操作表現を日本語として自然に統一してください。
- **[major]** `structure` @ ダウンロードとインストール > 方法 1
  - 源: Log in to the [kimi.com](https://kimi.com), find the "Download Kimi Claw Android" entrance...
  - 译: kimi.com](https://kimi.com) にログインし、「Kimi Claw Android をダウンロード」の入口を見つけ...
  - 建议: Markdown リンクの左角括弧が欠落しています。`[kimi.com](https://kimi.com) にログインし、「Kimi Claw Android をダウンロード」の項目を見つけ...` に修正してください。また「入口」は不自然なため「項目」「リンク」「ボタン」などに置き換えると自然です。
- `membership/account-query.md` — overall=4.0, severity=major
  - 摘要: 全体として正確で読みやすい翻訳ですが、主要用語「credit」が未翻訳のため「クレジット」に統一する修正が必要です。
- **[major]** `terminology` @ SeoMeta title / H1 / H2 / 本文全体
  - 源: Account & credit query / Credits not showing after purchase? / remaining credits / credit usage breakdown
  - 译: アカウントとcreditの確認 / 購入後にcreditが表示されませんか？ / 残りのcredit / creditの利用内訳
  - 建议: 「credit」は未翻訳のままにせず、日本語UI・ヘルプ文書として自然な「クレジット」に統一してください。例：「アカウントとクレジットの確認」「購入後にクレジットが表示されませんか？」「残りのクレジット」「クレジットの利用内訳」。

#### 术语统一建议

- （1 次）日本語 UI・ヘルプ文書としては「トークン」「利用枠」または「クォータ」に統一することを推奨します。例:「トークンの使用」「アカウントの利用枠が使い切られている」
- （1 次）「スキル作成時、利用枠はどのように消費されますか？」のようにすると自然で、用語も統一できます。
- （1 次）英語のままでは不自然なため、「同時実行数の制限」または「同時実行制限」に修正してください。
- （1 次）日本語文書内では表記を統一し、「クォータ（利用枠）」または「利用枠」のいずれかに統一してください。例：見出しは「**クォータ（利用枠）の使用**」、本文は「クォータを消費します」「1クォータユニット」など。
- （1 次）製品名として英語表記を維持しており問題ありませんが、日本語助詞との接続では可読性のため「Agent モード」「Kimi Agent は」のように半角スペースを入れるスタイルに統一するか、現状の詰め表記に全体で統一してください。

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ SeoMeta description / quota・token 関連の各所: 日本語 UI・ヘルプ文書としては「トークン」「利用枠」または「クォータ」に統一することを推奨します。例:「トークンの使用」「アカウントの利用枠が使い切られている」
- `agent/FAQ-en.md` @ ## スキル作成では quota はどのように消費されますか？: 「スキル作成時、利用枠はどのように消費されますか？」のようにすると自然で、用語も統一できます。
- `agent/FAQ-en.md` @ quota 消費の説明: 「スキルを作成すると **トークン** が消費されます。トークンは、付与された検索回数または公式メンバーシップの利用枠から消費されます。」などに修正すると自然です。
- `agent/FAQ-en.md` @ 作成数・頻度制限 > 1: 英語のままでは不自然なため、「同時実行数の制限」または「同時実行制限」に修正してください。
- `agent/FAQ-en.md` @ 新しいスキル名の要件 > 1: 「既存のスキルと同じ名前は使用できません」または「既存のスキルと重複してはいけません」に修正すると自然です。

### ko-KR（韩语）

- 审校完成: 90 篇
- 平均分: 4.44
- 分布: critical 0 / major 11 / minor 79 / ok 0

#### 重点问题文章

- `agent/overview.md` — overall=4.0, severity=major
  - 摘要: 번역 품질은 전반적으로 양호하지만, "10,000+ word"의 오역과 quota 관련 용어 혼재는 수정이 필요합니다.
- **[major]** `accuracy` @ 핵심 기능 표 > Deep Research
  - 源: 10,000+ word research reports
  - 译: 10,000자 이상의 리서치 보고서
  - 建议: "word"는 "자"가 아니라 "단어"이므로 "10,000단어 이상의 리서치 보고서" 또는 "1만 단어 이상의 리서치 보고서"로 수정하세요.
- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: 전반적으로 품질은 양호하지만, 베타 이용 가능 멤버 누락은 반드시 수정해야 하며 일부 배율 표현과 용어 현지화를 다듬으면 완성도가 높아집니다.
- **[major]** `accuracy` @ Beta Access callout
  - 源: currently available to Moderato, Allegretto, Allegro, and Vivace members
  - 译: 현재 Allegretto, Allegro, Vivace 회원에게 제공됩니다
  - 建议: 누락된 등급을 보완해 “현재 Moderato, Allegretto, Allegro, Vivace 회원에게 제공됩니다.”로 수정하세요.
- **[major]** `accuracy` @ PARL paragraph
  - 源: reduces critical steps by 3×–4.5×
  - 译: 핵심 단계를 3배~4.5배 줄입니다
  - 建议: 한국어에서 ‘3배 줄이다’는 부자연스럽고 의미가 왜곡될 수 있으므로 “핵심 단계 수를 1/3~1/4.5 수준으로 줄입니다” 또는 “핵심 단계 수를 3~4.5배 감소시킵니다”로 수정하세요.
- `kimi-api/account-and-auth.md` — overall=4.0, severity=major
  - 摘要: 번역은 전반적으로 양호하지만, 지원 이메일 제목의 원문 보존과 API 용어 및 인보이스 관련 용어의 일관성 개선이 필요합니다.
- **[major]** `accuracy` @ 계정 정지 이의제기 절차 1번
  - 源: with the subject line "API Account Appeal"
  - 译: 제목을 "API 계정 이의제기"로 작성하여
  - 建议: 지원팀이 지정한 이메일 제목을 정확히 인식할 수 있도록 원문 제목을 유지하세요. 예: 제목을 "API Account Appeal"로 작성하여 **support@moonshot.ai**로 이메일을 보내세요.
- **[major]** `accuracy` @ 가입 이메일 변경 절차 1번
  - 源: with the subject line "Email Change Request"
  - 译: 제목을 "이메일 변경 요청"으로 작성하여
  - 建议: 지정된 이메일 제목은 번역하지 말고 유지하는 것이 안전합니다. 예: 제목을 "Email Change Request"로 작성하여 **support@moonshot.ai**로 이메일을 보내세요.
- `membership/overview.md` — overall=4.0, severity=major
  - 摘要: 전반적으로 구조와 문맥은 양호하지만, 요금제 표의 Moderato 항목 누락은 반드시 수정해야 하며 credit/quota/token 용어도 한국어로 일관되게 정리하는 것이 좋습니다.
- **[major]** `accuracy` @ Plan comparison table / Agent Swarm (beta)
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (베타) | — | — | 50회 | 120회 | 240회
  - 建议: Moderato 열의 값을 누락하지 말고 “25회”로 수정하세요: “Agent Swarm (베타) | — | 25회 | 50회 | 120회 | 240회”.
- **[major]** `accuracy` @ Plan comparison table / Agent Swarm concurrent subtasks
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Agent Swarm 동시 하위 작업 | — | — | 4 | 4 | 8
  - 建议: Moderato 열의 값을 “2”로 수정하세요: “Agent Swarm 동시 하위 작업 | — | 2 | 4 | 4 | 8”.
- `membership/pricing.md` — overall=4.0, severity=major
  - 摘要: 표의 Moderato 관련 혜택 2곳이 원문과 다르게 누락되어 반드시 수정해야 하며, 영문 용어 혼용은 한국어 용어로 일관화하는 것이 좋습니다.
- **[major]** `accuracy` @ 요금제 한눈에 보기 표 > Agent Swarm (베타) > Moderato
  - 源: 25 uses
  - 译: —
  - 建议: Moderato 열의 값을 원문과 일치하도록 “25회”로 수정하세요.
- **[major]** `accuracy` @ 요금제 한눈에 보기 표 > Agent Swarm concurrent subtasks > Moderato
  - 源: 2
  - 译: —
  - 建议: Moderato 열의 값을 원문과 일치하도록 “2”로 수정하세요.
- `others/chat-issues.md` — overall=4.0, severity=major
  - 摘要: 전반적으로 자연스럽고 구조도 잘 유지되었으나, 컨텍스트 한도 단위 오역과 일부 용어 미번역은 수정이 필요합니다.
- **[major]** `accuracy` @ ## 대화가 20만 자를 초과했나요?
  - 源: Conversation exceeds 200,000 words?
  - 译: 대화가 20만 자를 초과했나요?
  - 建议: 원문의 “words”를 “자”로 번역하면 문자 수로 오해될 수 있습니다. “대화가 20만 단어를 초과했나요?” 또는 한국어 사용 맥락을 고려해 “대화 분량이 20만 단어 수준을 초과했나요?”로 수정하세요.
- **[major]** `accuracy` @ 단일 대화의 컨텍스트 한도는 약 128K token(약 20만 자)입니다.
  - 源: The single-conversation context limit is approximately 128K tokens (~200,000 words).
  - 译: 단일 대화의 컨텍스트 한도는 약 128K token(약 20만 자)입니다.
  - 建议: “약 128K 토큰(약 20만 단어)”로 수정해 단위 의미를 원문과 일치시키세요. “token”도 한국어 표기인 “토큰”으로 통일하는 것이 좋습니다.
- `slides/stuck.md` — overall=4.0, severity=major
  - 摘要: 번역 품질은 전반적으로 양호하지만, 내부 앵커 링크 깨짐 가능성과 일부 용어·표현의 자연스러움을 수정하는 것이 좋습니다.
- **[major]** `structure` @ Slides 카드가 팝업되지 않는 경우 > 3번째 bullet
  - 源: please follow the [Bug Feedback Guidelines](#bug-feedback-guidelines) below
  - 译: 아래 [버그 피드백 가이드라인](#bug-feedback-guidelines)에 따라
  - 建议: 한국어 제목으로 렌더링될 경우 앵커가 달라져 링크가 깨질 수 있습니다. 실제 생성되는 slug에 맞춰 `#버그-피드백-가이드라인` 등으로 수정하거나, 제목에 명시적 anchor를 부여하세요.
- `websites/overview.md` — overall=4.0, severity=major
  - 摘要: 전반적으로 양호한 번역이지만 지원 언어 오역은 사용자 안내에 영향을 줄 수 있어 우선 수정이 필요합니다.
- **[major]** `accuracy` @ 방법 1, 2번 접속
  - 源: [kimi.com/websites](https://www.kimi.com/zh/websites) (supports Chinese and English)
  - 译: [kimi.com/websites](https://www.kimi.com/zh/websites) (한국어 및 영어 지원)
  - 建议: 지원 언어가 원문과 다르게 번역되었습니다. 원문에 맞춰 “중국어 및 영어 지원”으로 수정하거나, 실제 한국어 지원 여부가 확인된 경우 원문/링크까지 함께 현지화하세요.

#### 术语统一建议

- （1 次）한국어 문서 내 용어를 일관되게 현지화하는 것이 좋습니다. 예: “Kimi 스킬”, “토큰 사용”, “할당량”. 단, 제품 UI에서 token/quota를 영어로 고정 사용한다면 그대로 유지하되 전체 문서에서 일관성
- （1 次）영어와 한국어가 혼용되어 어색합니다. “동시 실행 제한” 또는 “동시 작업 제한”으로 수정하세요.
- （1 次）한국어 문서에서는 UI 메시지와 맞춰 “이미 사용 중”으로 번역하는 것이 자연스럽습니다. 예: “스킬 이름이 ‘이미 사용 중’으로 표시되면 어떻게 되나요?”
- （1 次）建议统一本地化为“할당량”或“쿼터”，避免英文小写 quota 与韩文混用。例如：**할당량 사용량**、할당량 풀、할당량 1단위。若产品界面固定使用英文 Quota，则应统一写作“Quota”并在首次出现时说明。
- （1 次）“등급”偏生硬，订阅/会员语境建议改为“무료 플랜: 월 6회 Agent 작업”, “유료 플랜: 요금제에 따라 월 60~720회 Agent 작업”。

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ SeoMeta description / quota 관련 문단: 한국어 문서 내 용어를 일관되게 현지화하는 것이 좋습니다. 예: “Kimi 스킬”, “토큰 사용”, “할당량”. 단, 제품 UI에서 token/quota를 영어로 고정 사용한다면 그대로 유지하되 전체 문서에서 일관성을 맞추세요.
- `agent/FAQ-en.md` @ ## 스킬을 만들 때 quota는 어떻게 사용되나요?: 자연스러운 한국어 제목으로 수정하세요. 예: “스킬 생성 시 할당량은 어떻게 차감되나요?”
- `agent/FAQ-en.md` @ 비활성화 이유 1번: “완전하지 않습니다”는 다소 직역투입니다. 예: “업로드한 파일 또는 스킬 설명이 누락되었거나 불완전합니다.”
- `agent/FAQ-en.md` @ 생성 제한 1번: 영어와 한국어가 혼용되어 어색합니다. “동시 실행 제한” 또는 “동시 작업 제한”으로 수정하세요.
- `agent/FAQ-en.md` @ ## 스킬 이름이 "already in use"로 표시되면 어떻게 되나요?: 한국어 문서에서는 UI 메시지와 맞춰 “이미 사용 중”으로 번역하는 것이 자연스럽습니다. 예: “스킬 이름이 ‘이미 사용 중’으로 표시되면 어떻게 되나요?”

### pt-BR（巴西葡语）

- 审校完成: 90 篇
- 平均分: 4.26
- 分布: critical 3 / major 6 / minor 80 / ok 1

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `agent/use-skills-in-claw-en.md` — overall=3.0, severity=critical
  - 摘要: A tradução está majoritariamente boa, mas o corte no parágrafo final é um problema crítico que precisa ser corrigido antes da publicação.
- **[critical]** `structure` @ Final paragraph
  - 源: We recommend completing some skill management operations (such as creating, editing, deleting) on the web platform, with mobile primarily used for invoking existing skills.
  - 译: Recomendamos realizar algumas opera
...[truncated for review]
  - 建议: Completar o trecho truncado. Sugestão: "Recomendamos realizar algumas operações de gerenciamento de skills, como criar, editar e excluir, na plataforma web, usando o celular principalmente para acionar skills existentes."
- `deep-research/overview.md` — overall=3.0, severity=critical
  - 摘要: A tradução é majoritariamente fluente, mas precisa corrigir a truncagem crítica no final e padronizar termos como “clarification”, “iterative reasoning” e “credit”.
- **[critical]** `structure` @ Observações importantes, item 5 em diante
  - 源: 5. **Terms**: Subject to [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2)

## Related resources
- Technical report: ...
- User gallery: ...
  - 译: 5. **
...[truncated for review]
  - 建议: Restaurar e traduzir todo o conteúdo ausente, incluindo o item de Termos, a seção Recursos relacionados, os dois links e o bloco final de imagem.
- **[major]** `terminology` @ Tabela do pipeline; passos 2; seção Dicas
  - 源: Clarification; Iterative reasoning; Respond to clarification questions; during clarification
  - 译: Clarification; Iterative reasoning; perguntas de clarification; durante a clarification
  - 建议: Traduzir de forma consistente: “Esclarecimento”, “Raciocínio iterativo”, “perguntas de esclarecimento” e “durante o esclarecimento”.
- **[major]** `terminology` @ Observações importantes, item 2
  - 源: Credit refunds
  - 译: Reembolso de credit
  - 建议: Corrigir para “Reembolso de créditos” ou “Reembolsos de créditos”.
- `kimi-business/kimi-business.md` — overall=3.0, severity=critical
  - 摘要: A tradução está majoritariamente boa, mas precisa corrigir com prioridade o trecho final truncado e padronizar alguns termos como "licenças/cotas/corporativo".
- **[critical]** `structure` @ Regras de Expiração
  - 源: - **Member Removal**: Removed members immediately lose enterprise workspace access and Kimi Business benefits; new benefits stop in next cycle
- **Subscription Expiration**: All member benefits are suspended when organization subscription expires; restored upon renewal
  - 译: - **Remoção de membro**: Os membros removidos perdem imediatamente o acesso ao espaço de trabalho corpora
...[truncated for review]
  - 建议: Completar o trecho truncado e incluir todas as regras de expiração. Sugestão: "- **Remoção de membro**: Os membros removidos perdem imediatamente o acesso ao espaço de trabalho corporativo e aos benefícios do Kimi Business; novos benefícios deixam de ser concedidos no ciclo seguinte
- **Expiração da assinatura**: Todos os benefícios dos membros são suspensos quando a assinatura da organização expira; eles são restaurados após a renovação".
- `docs-and-sheets/overview.md` — overall=4.0, severity=major
  - 摘要: A tradução está boa no geral, mas há um problema importante de completude no final da tabela e alguns ajustes terminológicos e de fluidez recomendados.
- **[major]** `completeness` @ Tabela “Público-alvo”, final do documento
  - 源: | **Investment analysts** | Drive DCF modeling, financial forecasting, and valuation analysis with natural language |
| **Marketing & operations** | Aggregate multi-channel data, competitive comparisons, and campaign performance analyses |
  - 译: | **Analistas de investimentos** | Conduzir modelagem DCF, projeções financeiras e análises de avaliação usando linguagem natu
...[truncated for review]
  - 建议: Completar o trecho truncado e incluir a última linha: “| **Analistas de investimentos** | Conduzir modelagem DCF, projeções financeiras e análises de valuation usando linguagem natural |” e “| **Marketing e operações** | Agregar dados de vários canais, comparações competitivas e análises de desempenho de campanhas |”.
- `membership/overview.md` — overall=4.0, severity=major
  - 摘要: A tradução está boa no geral, mas há erros importantes nos valores do plano Moderato na tabela e alguns ajustes recomendados de terminologia e fluidez.
- **[major]** `accuracy` @ Tabela de comparação de planos: linha “Agent Swarm (beta)”
  - 源: | Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses |
  - 译: | Agent Swarm (beta) | — | — | 50 usos | 120 usos | 240 usos |
  - 建议: Corrigir o valor do plano Moderato para “25 usos”: “| Agent Swarm (beta) | — | 25 usos | 50 usos | 120 usos | 240 usos |”.
- **[major]** `accuracy` @ Tabela de comparação de planos: linha “Subtarefas simultâneas do Agent Swarm”
  - 源: | Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8 |
  - 译: | Subtarefas simultâneas do Agent Swarm | — | — | 4 | 4 | 8 |
  - 建议: Corrigir o valor do plano Moderato para “2”: “| Subtarefas simultâneas do Agent Swarm | — | 2 | 4 | 4 | 8 |”.
- `membership/pricing.md` — overall=4.0, severity=major
  - 摘要: A tradução está boa no geral, mas há dois erros importantes na tabela de benefícios do plano Moderato que devem ser corrigidos antes da publicação.
- **[major]** `accuracy` @ Plans at a glance table / Agent Swarm (beta)
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50 usos | 120 usos | 240 usos
  - 建议: Corrigir o valor do plano Moderato para “25 usos”: | Agent Swarm (beta) | — | 25 usos | 50 usos | 120 usos | 240 usos |
- **[major]** `accuracy` @ Plans at a glance table / Agent Swarm concurrent subtasks
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Subtarefas simultâneas do Agent Swarm | — | — | 4 | 4 | 8
  - 建议: Corrigir o valor do plano Moderato para “2”: | Subtarefas simultâneas do Agent Swarm | — | 2 | 4 | 4 | 8 |
- `slides/stuck.md` — overall=4.0, severity=major
  - 摘要: A tradução está majoritariamente correta e utilizável, mas precisa revisar terminologia de “Slides”, naturalidade em pt-BR e especialmente o link de âncora possivelmente quebrado após a tradução do título.
- **[major]** `structure` @ Slides Card Failed to Pop Up > terceiro bullet
  - 源: please follow the [Bug Feedback Guidelines](#bug-feedback-guidelines) below
  - 译: siga as [Diretrizes de feedback de bugs](#bug-feedback-guidelines) abaixo
  - 建议: Verifique o âncora após traduzir o título da seção. Se o gerador criar IDs a partir do texto traduzido, altere para o slug em português, por exemplo `#diretrizes-de-feedback-de-bugs`, ou mantenha um ID explícito para evitar link quebrado.
- `agent/swarm.md` — overall=4.2, severity=major
  - 摘要: 译文质量整体较好，但需修正 Beta 权限列表遗漏 Moderato 这一主要准确性问题，并优化少量术语与自然度表达。
- **[major]** `accuracy` @ Beta Access callout
  - 源: K2.6 Agent Swarm [Beta] is currently available to Moderato, Allegretto, Allegro, and Vivace members.
  - 译: o K2.6 Agent Swarm [Beta] está atualmente disponível para os assinantes Allegretto, Allegro e Vivace.
  - 建议: 补回遗漏的“Moderato”："... disponível para assinantes Moderato, Allegretto, Allegro e Vivace."

#### 术语统一建议

- （1 次）Definir uma convenção terminológica e aplicá-la de forma consistente. Se o produto mantém “Skill” como termo de UI, use 
- （1 次）Em pt-BR, substituir “quota” por “cota”, termo mais natural e comum em documentação de produto: “Como a criação de Skill
- （1 次）Padronizar a tradução de “gifted searches”. A tradução “buscas presenteadas” soa pouco natural; considere “buscas gratui
- （1 次）Se “toast” for um tipo específico de notificação na interface, traduzir como “notificação temporária” ou “mensagem tempo
- （1 次）Traduzir ou adaptar o termo na primeira ocorrência: "modelos de linguagem grandes (LLMs)" ou "grandes modelos de linguag

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ SeoMeta title / H1 / multiple headings: Definir uma convenção terminológica e aplicá-la de forma consistente. Se o produto mantém “Skill” como termo de UI, use “Skill/Skills” de modo uniforme; se localizar, considere “habilidade(s)”. Evite alternar entre “skills”, “Kimi Skills” e “skill” sem critério.
- `agent/FAQ-en.md` @ Section: Como a criação de Skills consome quota?: Em pt-BR, substituir “quota” por “cota”, termo mais natural e comum em documentação de produto: “Como a criação de Skills consome cota?”, “cota da sua conta”, “cota da assinatura”.
- `agent/FAQ-en.md` @ Deduction Order: Padronizar a tradução de “gifted searches”. A tradução “buscas presenteadas” soa pouco natural; considere “buscas gratuitas recebidas”, “buscas concedidas” ou “buscas promocionais”, conforme a terminologia usada no produto.
- `agent/FAQ-en.md` @ Daily Limit: Ajustar a tradução para refletir melhor “to” e soar mais natural em pt-BR: “10 conversões de ‘Documento do Office para Skill’” ou manter o nome oficial da funcionalidade, se houver.
- `agent/FAQ-en.md` @ Daily Limit: Se “toast” for um tipo específico de notificação na interface, traduzir como “notificação temporária” ou “mensagem temporária”. Ex.: “Ao ultrapassar esse limite, uma notificação temporária será exibida.”

### ru-RU（俄语）

- 审校完成: 90 篇
- 平均分: 4.27
- 分布: critical 2 / major 14 / minor 73 / ok 1

#### 重点问题文章

- `deep-research/overview.md` — overall=3.0, severity=critical
  - 摘要: Перевод в целом качественный, но требует обязательного восстановления обрезанной финальной части и унификации терминов Clarification/Iterative reasoning/Web/Agent.
- **[critical]** `structure` @ После раздела «Важные замечания», пункт 5
  - 源: 5. **Terms**: Subject to [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2)

## Related resources
- Technical report: [Kimi-Researcher: End-to-End RL Training](https://moonshotai.github.io/Kimi-Researcher/)
- User gallery: [kimi.com/deep-research](https://www.kimi.com/deep-research?showGallery=true)

<Frames ... />
  - 译: 5. **Условия**: регулиру
...[truncated for review]
  - 建议: Восстановить отсутствующую часть перевода и завершить пункт: «5. **Условия**: регулируется [Пользовательским соглашением Kimi](https://www.kimi.com/user/agreement/modelUse?version=v2)». Также добавить раздел «## Связанные ресурсы» с двумя ссылками и блоком Frames, как в исходнике.
- **[major]** `terminology` @ Таблица «Как работает Kimi-Research?»
  - 源: **Clarification**; **Iterative reasoning**
  - 译: **Clarification**; **Iterative reasoning**
  - 建议: Перевести названия этапов для единообразия: «**Уточнение**» и «**Итеративное рассуждение**» или «**Итеративный анализ**». Если английские названия являются UI-терминами, можно дать вариант «**Уточнение (Clarification)**» при первом упоминании.
- `kimi-business/kimi-business.md` — overall=3.0, severity=critical
  - 摘要: Перевод в целом качественный, но из-за обрезанного финального пункта требуется критическое исправление перед публикацией.
- **[critical]** `structure` @ Правила истечения срока / последний пункт
  - 源: Subscription Expiration: All member benefits are suspended when organization subscription expires; restored upon renewal
  - 译: при истечении подписки организации преимущества всех участников приостанавл ...[truncated for review]
  - 建议: Восстановить полный перевод: «**Истечение срока подписки**: при истечении подписки организации преимущества всех участников приостанавливаются; после продления подписки они восстанавливаются».
- `agent/overview.md` — overall=4.0, severity=major
  - 摘要: Перевод в целом корректный, но требует правок терминологии и локализации отдельных интерфейсных карточек, особенно Subagent, quota/billing и числовых сокращений.
- **[major]** `terminology` @ Развитие продукта, 5 сентября 2025 г.
  - 源: 32B active / 1T total parameters
  - 译: 32B активных / 1T параметров всего
  - 建议: Локализовать числовые сокращения и улучшить порядок слов: «32 млрд активных / 1 трлн параметров всего» или «32 млрд активных параметров / 1 трлн всего».
- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但 Beta 权限名单遗漏 Moderato 属于主要准确性问题，另有少量术语和表达需本地化优化。
- **[major]** `accuracy` @ Beta Access callout
  - 源: currently available to Moderato, Allegretto, Allegro, and Vivace members
  - 译: доступен участникам Allegretto, Allegro и Vivace
  - 建议: 补回遗漏的 Moderato：«доступен участникам Moderato, Allegretto, Allegro и Vivace».
- `deep-research/wrong-direction.md` — overall=4.0, severity=major
  - 摘要: Перевод в целом понятный и структурно корректный, но требует унификации терминов «credits» и «Clarification» и небольшой стилистической правки для более естественного русского текста.
- **[major]** `terminology` @ Refund paragraph
  - 源: credits for that task will be automatically refunded
  - 译: credits, списанные за эту задачу, будут автоматически возвращены
  - 建议: Заменить англоязычное «credits» на локализованный термин, например: «кредиты, списанные за эту задачу, будут автоматически возвращены» или «списанные за эту задачу кредиты будут автоматически возвращены».
- **[major]** `terminology` @ Table row: Leverage clarification; tip callout
  - 源: clarification / clarification prompt
  - 译: Clarification
  - 建议: Использовать единый русскоязычный термин, если это не неизменяемое название UI: «уточнение», «уточняющий запрос» или «этап уточнения». Например: «Используйте уточняющий запрос» и «Отвечайте на уточняющий запрос кратко и конкретно».
- `docs-and-sheets/overview.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但末尾内容疑似截断，且部分术语和表达需要俄语本地化优化。
- **[major]** `structure` @ Target audience 表格最后一行
  - 源: **Marketing & operations** | Aggregate multi-channel data, competitive comparisons, and campaign performance analyses
  - 译: **Маркетинг и операционная деятельность** | Агрегация данных из раз
...[truncated for review]
  - 建议: 补全缺失内容，例如：**Маркетинг и операционная деятельность** | Агрегация данных из разных каналов, сравнение с конкурентами и анализ эффективности кампаний
- `getting-started/agentic-chat.md` — overall=4.0, severity=major
  - 摘要: Перевод в целом качественный, но требует унификации продуктовой терминологии и исправления термина «Turn», так как «реплика» искажает значение полного обмена в диалоге.
- **[major]** `terminology` @ ## Sessions vs. conversation turns / table and subsection
  - 源: Turn | One exchange (you speak, Kimi replies)
  - 译: Реплика | Один обмен: вы пишете, Kimi отвечает
  - 建议: Заменить «Реплика» на термин, который обозначает полный обмен, а не отдельное высказывание: например, «Раунд диалога» или «Ход диалога». Далее по разделу также заменить «реплики» на выбранный термин.
- **[major]** `terminology` @ ### Built-in tools / table
  - 源: **Web Search**, **Fetch Tool**, **Data Source**, **Image Search**, **IPython**, **Memory**
  - 译: **Web Search**, **Fetch Tool**, **Источник данных**, **Поиск изображений**, **IPython**, **Память**
  - 建议: Унифицировать названия инструментов с интерфейсом продукта. Если это UI-названия, лучше оставить все как в оригинале: Web Search, Fetch Tool, Data Source, Image Search, IPython, Memory. Если локализовать, локализовать все последовательно, включая Web Search и Fetch Tool.
- `kimi-api/account-and-auth.md` — overall=4.0, severity=major
  - 摘要: Перевод в целом корректный, но требует унификации API-терминологии и устранения англо-русских смешений вроде «Rate Limits» и «quotas».
- **[major]** `terminology` @ таблица, строка «Rate Limits»
  - 源: Rate Limits | Standard | Eligible for higher quotas
  - 译: Rate Limits | Стандартные | Возможность получить повышенные quotas
  - 建议: Заменить смешение английского и русского на единый термин: «Лимиты запросов | Стандартные | Возможность получить повышенные квоты» или «Ограничения частоты запросов | Стандартные | Доступны повышенные квоты».
- **[major]** `terminology` @ раздел «Преимущества прохождения верификации», пункт 1
  - 源: Higher Rate Limits: Verified users are eligible for higher API call rates.
  - 译: Повышенные Rate Limits: верифицированным пользователям могут быть доступны более высокие лимиты вызовов API.
  - 建议: Перевести термин полностью: «Повышенные лимиты запросов: верифицированным пользователям могут быть доступны более высокие лимиты вызовов API».

#### 术语统一建议

- （1 次）Локализовать и унифицировать термины: «токены», «квота». Например: «расход токенов», «квота аккаунта», «Токены расходуют
- （1 次）Заменить смешение языков на естественный русский вариант: «Как при создании навыков расходуется квота?»
- （1 次）Перевести технические термины или дать понятные русские эквиваленты: «Лимит одновременных задач» и «всплывающее уведомле
- （1 次）Заменить кальку на более естественный вариант: «квота вашей подписки» или «квота официальной подписки», в зависимости от
- （1 次）Заменить англоязычные термины на естественные русские: «Использование квоты», «общий пул квот», «уровни подписки/тарифы»

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ Limits section: Перевести технические термины или дать понятные русские эквиваленты: «Лимит одновременных задач» и «всплывающее уведомление» / «toast-уведомление» только если это закреплённый продуктовый термин.
- `agent/FAQ-en.md` @ Concurrency Limit item: Уточнить статусы задач, чтобы не звучало так, будто «неудачные попытки» выполняются параллельно: «Одновременно может быть не более 3 задач со статусом “Создаётся” или “Не удалось”».
- `agent/FAQ-en.md` @ Reason 2 under disabled button: Сделать фразу грамматически более гладкой: «Формат файла или количество файлов не соответствуют требованиям.»
- `agent/FAQ-en.md` @ Quota section: Заменить кальку на более естественный вариант: «квота вашей подписки» или «квота официальной подписки», в зависимости от принятой терминологии Kimi.
- `agent/features-and-limits.md` @ Важные примечания > ссылка Quota & Billing: Перевести название раздела единообразно: «[Квоты и оплата](/agent/quota-and-billing)».

### th-TH（泰语）

- 审校完成: 90 篇
- 平均分: 4.28
- 分布: critical 0 / major 6 / minor 84 / ok 0

#### 重点问题文章

- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但需修正 Beta 会员等级遗漏，并优化若干技术术语和直译标题以提升准确性与自然度。
- **[major]** `accuracy` @ Beta Access callout
  - 源: currently available to Moderato, Allegretto, Allegro, and Vivace members
  - 译: เปิดให้สมาชิก Allegretto, Allegro และ Vivace ใช้งานได้
  - 建议: 补回遗漏的 Moderato："ปัจจุบัน K2.6 Agent Swarm [Beta] เปิดให้สมาชิก Moderato, Allegretto, Allegro และ Vivace ใช้งานได้..."
- `getting-started/memory-tips.md` — overall=4.0, severity=major
  - 摘要: 译文整体准确且结构完整，但 Prompt 示例列未本地化是主要问题，另有少量术语和泰语自然度可优化。
- **[major]** `untranslated_content` @ Useful prompt references table / Prompt column
  - 源: Treat me as an expert in all subject matter; Be opinionated rather than neutral when appropriate; ...
  - 译: Treat me as an expert in all subject matter; Be opinionated rather than neutral when appropriate; ...
  - 建议: 目标语言为泰语时，建议将 Prompt 列也翻译为泰语，或采用“泰语译文（英文原文）”格式，方便泰语用户直接复制使用。例如："Treat me as an expert in all subject matter" 可译为 "ให้ถือว่าฉันเป็นผู้เชี่ยวชาญในทุกหัวข้อ"。
- `kimi-code/cli-ides.md` — overall=4.0, severity=major
  - 摘要: คำแปลโดยรวมมีคุณภาพดี แต่ควรแก้ลิงก์ anchor ภายในหน้าที่อาจเสีย และปรับศัพท์/ถ้อยคำบางจุดให้เป็นธรรมชาติและสม่ำเสมอยิ่งขึ้น
- **[major]** `structure` @ Paseo section, Prerequisites link
  - 源: see [Prerequisites](#prerequisites)
  - 译: ดู [สิ่งที่ต้องเตรียม](#prerequisites)
  - 建议: หัวข้อถูกแปลเป็น “สิ่งที่ต้องเตรียม” แต่ anchor ยังเป็น `#prerequisites` ซึ่งอาจทำให้ลิงก์ภายในหน้าเสีย ควรแก้เป็น `ดู [สิ่งที่ต้องเตรียม](#สิ่งที่ต้องเตรียม)` หรือเพิ่ม anchor คงที่ให้หัวข้อ
- `membership/overview.md` — overall=4.0, severity=major
  - 摘要: งานแปลโดยรวมดี แต่มีข้อมูลในตารางของแพ็กเกจ Moderato ขาดหาย 2 จุดที่ควรแก้ก่อนเผยแพร่
- **[major]** `accuracy` @ Plan comparison table > Agent Swarm (beta) > Moderato
  - 源: 25 uses
  - 译: —
  - 建议: แก้เป็น “ใช้ได้ 25 ครั้ง” เพื่อไม่ให้ข้อมูลสิทธิ์ของแพ็กเกจ Moderato ขาดหาย
- **[major]** `accuracy` @ Plan comparison table > Agent Swarm concurrent subtasks > Moderato
  - 源: 2
  - 译: —
  - 建议: แก้เป็น “2” ให้ตรงกับต้นฉบับ
- `membership/pricing.md` — overall=4.0, severity=major
  - 摘要: คำแปลโดยรวมใช้งานได้ แต่ต้องแก้ข้อมูลสิทธิ์ Agent Swarm ของแพ็กเกจ Moderato และปรับคำศัพท์เทคนิคให้สม่ำเสมอมากขึ้น
- **[major]** `accuracy` @ Plans at a glance table / Agent Swarm (beta)
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | ใช้ได้ 50 ครั้ง | ใช้ได้ 120 ครั้ง | ใช้ได้ 240 ครั้ง
  - 建议: แก้ค่าในคอลัมน์ Moderato จาก “—” เป็น “ใช้ได้ 25 ครั้ง” เพื่อให้ตรงกับต้นฉบับ
- **[major]** `accuracy` @ Plans at a glance table / Agent Swarm concurrent subtasks
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: งานย่อยที่ทำพร้อมกันได้ของ Agent Swarm | — | — | 4 | 4 | 8
  - 建议: แก้ค่าในคอลัมน์ Moderato จาก “—” เป็น “2” เพื่อไม่ให้ข้อมูลสิทธิ์ของแพ็กเกจคลาดเคลื่อน
- `slides/stuck.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但需重点检查内部锚点是否因标题翻译而失效，并统一少量产品术语和优化泰语自然度。
- **[major]** `structure` @ Slides Card Failed to Pop Up 第 3 条
  - 源: please follow the [Bug Feedback Guidelines](#bug-feedback-guidelines) below
  - 译: โปรดทำตาม[แนวทางการส่งความคิดเห็นเกี่ยวกับบั๊ก](#bug-feedback-guidelines)ด้านล่าง
  - 建议: 检查目标页标题翻译后生成的锚点是否仍为 #bug-feedback-guidelines；若不是，应改为对应泰文标题生成的锚点，或在标题处添加显式锚点，避免站内跳转失效。同时建议在链接前后加空格：โปรดทำตาม [แนวทาง...] ด้านล่าง

#### 术语统一建议

- （1 次）建议统一术语形式，例如使用泰文化表达“โทเค็น”和“โควตา”，或保留英文但全文一致。当前英文 token/quota 与泰语句子混用略显生硬。
- （1 次）建议避免直接夹用英文 concurrency，可改为“ข้อจำกัดการทำงานพร้อมกัน”或“ขีดจำกัดงานที่ทำพร้อมกัน”。
- （1 次）建议本地化为泰语，例如："ความสามารถและข้อจำกัดของ Agent - ศูนย์ช่วยเหลือ Kimi"，以保持页面元信息与正文语言一致。
- （1 次）建议统一技术术语为“อินเทอร์เฟซส่วนหน้า”与“บริการแบ็กเอนด์”，避免“ส่วนติดต่อหน้า”“บริการเบื้องหลัง”造成不自然或歧义。
- （1 次）建议统一术语。若面向泰语用户，可统一为“โควตา”；例如“การใช้โควตา”“พูลโควตา”。避免英文 quota 与泰语混用。

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ SeoMeta description / 多处: 建议统一术语形式，例如使用泰文化表达“โทเค็น”和“โควตา”，或保留英文但全文一致。当前英文 token/quota 与泰语句子混用略显生硬。
- `agent/FAQ-en.md` @ How creating Skills consumes quota?: “ของแถม”在泰语中偏口语且像促销赠品，建议改为“สิทธิ์การค้นหาฟรีที่ได้รับ”或“จำนวนครั้งการค้นหาที่ได้รับฟรี”，更适合帮助中心语气。
- `agent/FAQ-en.md` @ Deduction Order: “การหักใช้”不够自然，建议改为“ลำดับการหักโควตา”或“ลำดับการใช้โควตา”。
- `agent/FAQ-en.md` @ Are there limits on the number or frequency of creations?: 建议避免直接夹用英文 concurrency，可改为“ข้อจำกัดการทำงานพร้อมกัน”或“ขีดจำกัดงานที่ทำพร้อมกัน”。
- `agent/FAQ-en.md` @ Daily Limit: 如果“Office Document to Skill”是产品功能名或界面文案，建议保留英文或按实际泰语 UI 名称翻译，例如“การแปลง "Office Document to Skill" ได้สูงสุด 10 ครั้ง”。

### tr-TR（土耳其语）

- 审校完成: 90 篇
- 平均分: 4.27
- 分布: critical 1 / major 14 / minor 75 / ok 0

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `deep-research/overview.md` — overall=3.0, severity=critical
  - 摘要: Çeviri genel olarak anlaşılır ancak son bölümde olası içerik kesilmesi kritik; ayrıca bazı İngilizce terimler ve doğal olmayan Türkçe ifadeler düzeltilmeli.
- **[critical]** `structure` @ İlgili kaynaklar bölümü
  - 源: - Technical report: [Kimi-Researcher: End-to-End RL Training](https://moonshotai.github.io/Kimi-Researcher/)
- User gallery: [kimi.com/deep-research](https://www.kimi.com/deep-research?showGallery=true)

<Frames ... />
  - 译: - Teknik rapor: [Kimi-Researcher: End-to-End RL Training](https://moonshotai.github.io/Kimi-Re
...[truncated for review]
  - 建议: Çeviri dosyasında gerçekten kesilme varsa eksik bağlantıyı, kullanıcı galerisi satırını ve son <Frames> bloğunu eksiksiz geri ekleyin. Örn. "- Kullanıcı galerisi: [kimi.com/deep-research](...)".
- **[major]** `terminology` @ Araştırma süreci tablosu
  - 源: **Clarification** / **Iterative reasoning**
  - 译: **Clarification** / **Iterative reasoning**
  - 建议: Tablo başlıklarını Türkçeleştirin ve tutarlı kullanın: "**Netleştirme**" ve "**Yinelemeli akıl yürütme**".
- `membership/overview.md` — overall=3.8, severity=major
  - 摘要: 译文整体可用，但表格中 Moderato 相关权益数值有两处遗漏，且 credit/quota 术语需要统一本地化为土耳其语。
- **[major]** `accuracy` @ Plan karşılaştırması表格 / Agent Swarm (beta) 行
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50 kullanım | 120 kullanım | 240 kullanım
  - 建议: 将 Moderato 列从“—”改为“25 kullanım”，保持与源文数值一致。
- **[major]** `accuracy` @ Plan karşılaştırması表格 / Agent Swarm concurrent subtasks 行
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Eşzamanlı Agent Swarm alt görevleri | — | — | 4 | 4 | 8
  - 建议: 将 Moderato 列从“—”改为“2”，保持与源文一致。
- **[major]** `terminology` @ 全文 / credit, quota
  - 源: credit system; two credit pools; quota pool; credits
  - 译: credit sistemi; iki credit havuzu; quota havuzu; Credit'ler
  - 建议: 建议统一土耳其语术语：credit 译为“kredi”，quota 译为“kota”。例如：“kredi sistemi”“iki kredi havuzu”“kota havuzu”“Krediler”。避免同一文档中混用英文和土耳其语。
- `membership/pricing.md` — overall=3.8, severity=major
  - 摘要: Çeviri genel olarak anlaşılır ve yapısal olarak doğru, ancak Moderato planındaki iki tablo değeri hatalı eksik aktarılmış ve kredi/kota terminolojisi tutarlı Türkçeleştirilmelidir.
- **[major]** `accuracy` @ Plans at a glance table / Agent Swarm (beta)
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50 kullanım | 120 kullanım | 240 kullanım
  - 建议: Moderato sütunundaki değer eksik çevrilmiş. Satırı şu şekilde düzeltin: "Agent Swarm (beta) | — | 25 kullanım | 50 kullanım | 120 kullanım | 240 kullanım".
- **[major]** `accuracy` @ Plans at a glance table / Agent Swarm concurrent subtasks
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Agent Swarm eşzamanlı alt görevler | — | — | 4 | 4 | 8
  - 建议: Moderato sütunundaki değer eksik çevrilmiş. Satırı şu şekilde düzeltin: "Agent Swarm eşzamanlı alt görevleri | — | 2 | 4 | 4 | 8".
- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但 Beta 会员权限遗漏 Moderato 属于需优先修正的准确性问题，另有少量术语本地化和土耳其语自然度可优化。
- **[major]** `accuracy` @ Beta Access callout
  - 源: K2.6 Agent Swarm [Beta] is currently available to Moderato, Allegretto, Allegro, and Vivace members.
  - 译: K2.6 Agent Swarm [Beta] şu anda Allegretto, Allegro ve Vivace üyelerine açıktır.
  - 建议: 遗漏了 Moderato 会员层级。建议改为："K2.6 Agent Swarm [Beta] şu anda Moderato, Allegretto, Allegro ve Vivace üyelerine açıktır."
- `getting-started/agentic-chat.md` — overall=4.0, severity=major
  - 摘要: 译文整体可用且结构完整，但需重点统一 Agent、native multimodal、Thinking/Function Calling 等术语，并润色少量直译或不自然表达。
- **[major]** `terminology` @ ## K2.6 ile güçlendirildi / 第一段
  - 源: long-horizon execution, and agent swarm capabilities
  - 译: uzun vadeli görev yürütme ve agent swarm yetenekleri
  - 建议: 建议统一技术术语并避免半英半土：可译为“uzun süreli görev yürütme ve ajan sürüsü yetenekleri”；如产品文档决定保留 Agent 作为专名，则用“Agent sürüsü yetenekleri”并在全文保持一致。
- **[major]** `terminology` @ ## K2.6 ile güçlendirildi / 第一段
  - 源: native multimodal architecture
  - 译: yerel çok modlu mimarisi
  - 建议: “yerel”在土耳其语中更偏“本地/local”，容易误解；建议改为“doğal çok modlu mimarisi”或“yerleşik çok modlu mimarisi”。同文后续“yerel çok modlu mimari”也需同步修改。
- `kimi-claw/group-claw.md` — overall=4.0, severity=major
  - 摘要: Çeviri genel olarak anlaşılır ve yapısal olarak doğru, ancak “agent”, “scheduling call”, “Thread” ve “deployment” gibi temel ürün/teknik terimlerde tutarlılık ve doğallık için düzeltme önerilir.
- **[major]** `terminology` @ SeoMeta description / opening paragraph
  - 源: multi-agent collaboration space / multi-agent collaboration
  - 译: çoklu aracı iş birliği / çok aracılı bir iş birliği alanı
  - 建议: AI bağlamında “agent” için “aracı” yerine “ajan” veya ürün terminolojisine göre “akıllı ajan” kullanılmalı. Öneri: “çok ajanlı iş birliği alanı”, “çok ajanlı iş birliğini koordine etmek”.
- **[major]** `terminology` @ Send messages in group chat table
  - 源: Explicit scheduling call — use this to raise requirements or request task planning
  - 译: Açık zamanlama çağrısı — gereksinimleri belirtmek veya görev planlaması istemek için bunu kullanın
  - 建议: “Scheduling call” burada takvim/zamanlama değil, görev planlama/koordinasyon çağrısı anlamında. Öneri: “Açık bir koordinasyon çağrısı — gereksinimleri iletmek veya görev planlaması istemek için bunu kullanın.”
- `kimi-claw/troubleshooting.md` — overall=4.0, severity=major
  - 摘要: Çeviri genel olarak doğru ve kullanılabilir, ancak “Escalation path” için hatalı anlam veren başlık ve bazı İngilizce-Türkçe karışık terimler düzeltilmeli.
- **[major]** `mistranslation` @ heading: ## Escalation path
  - 源: Escalation path
  - 译: Yükseltme yolu
  - 建议: “Yükseltme yolu” ürün/plan yükseltme anlamı çağrıştırıyor. “Sorunu iletme yolu”, “Destek sürecini ilerletme” veya “Sorunu destek ekibine iletme” olarak değiştirin.
- `kimi-code/cli-ides.md` — overall=4.0, severity=major
  - 摘要: Çeviri genel olarak başarılı; en önemli düzeltme, çevrilen başlığa verilen iç bağlantının kırılmamasını sağlamak.
- **[major]** `structure` @ Paseo section
  - 源: see [Prerequisites](#prerequisites)
  - 译: ([Ön koşullar](#prerequisites) bölümüne bakın)
  - 建议: Başlık çevrildiği için bağlantı hedefi kırılabilir. Platform Türkçe başlıktan otomatik anchor üretiyorsa `#ön-koşullar` olarak güncelleyin veya başlığa sabit bir anchor ekleyin.

#### 术语统一建议

- （1 次）Metin genelinde “skill” için “beceri” kullanıldığı için burada da “Kimi becerileri oluşturmaya dair...” veya ürün adı öz
- （1 次）Türkçede İngilizce “quota” yerine “kota” kullanılmalı: “hesap kotanızın tükendiğini”, “kotayı nasıl tüketir?”, “üyelik k
- （1 次）Kod/placeholder örneğini kaynakla tutarlı bırakmak daha güvenli: “Beceri adı `/skill-name` zaten kullanımda. Karışıklığı
- （1 次）Türkçe arayüz terminolojisi için “Quota” yerine tutarlı biçimde “Kota” kullanılmalı: “Kota Kullanımı”, “kotayı tüketir”,
- （1 次）Teknik Türkçede daha doğal ve tutarlı kullanım için “ön uç arayüzleri”, “arka uç servisleri/hizmetleri” ve tercihen “ful

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ SeoMeta description: Metin genelinde “skill” için “beceri” kullanıldığı için burada da “Kimi becerileri oluşturmaya dair...” veya ürün adı özellikle korunacaksa tüm metinde “Kimi Skills” ile tutarlı kullanım tercih edin.
- `agent/FAQ-en.md` @ Multiple sections: quota: Türkçede İngilizce “quota” yerine “kota” kullanılmalı: “hesap kotanızın tükendiğini”, “kotayı nasıl tüketir?”, “üyelik kotanızdan”, “kota tüketmez”.
- `agent/FAQ-en.md` @ How creating Skills consumes quota?: “Hediye aramalar” doğal değil. Bağlama göre “hediye arama hakları”, “ücretsiz arama hakkınız” veya “hediye arama kotanız” kullanılabilir.
- `agent/FAQ-en.md` @ Deduction Order: Daha doğal bir başlık için “Kullanım Önceliği” veya “Kotadan Düşme Sırası” tercih edin.
- `agent/FAQ-en.md` @ Concurrency Limit: “Başarısız” görevlerin çalıştığı izlenimini azaltmak için “Aynı anda en fazla 3 görev (Oluşturuluyor + Başarısız durumundaki görevler) bulunabilir.” şeklinde çevirin.

### vi-VN（越南语）

- 审校完成: 90 篇
- 平均分: 4.36
- 分布: critical 0 / major 6 / minor 84 / ok 0

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `deep-research/overview.md` — overall=3.6, severity=major
  - 摘要: 译文整体可用，但需修复文末疑似截断的组件，并统一关键术语与 UI 文案的本地化处理。
- **[critical]** `structure` @ 文末 Frames 组件
  - 源: <Frames
  src="./images/overview/dr-gallery.png"
  alt="DR gallery"
/>
  - 译: <Frames
  src="./images/
...[truncated for review]
  - 建议: 如果目标文件实际如此，需要恢复完整组件：<Frames src="./images/overview/dr-gallery.png" alt="DR gallery" />，否则会导致 MDX/页面渲染失败。
- **[major]** `terminology` @ 研究流程表格
  - 源: **Clarification** / **Iterative reasoning**
  - 译: **Clarification** / **Iterative reasoning**
  - 建议: 统一翻译为越南语术语，例如：**Làm rõ yêu cầu** / **Suy luận lặp lại**，避免表格中中英混用。
- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: Bản dịch chất lượng khá tốt nhưng cần sửa lỗi thiếu gói Moderato trong phần quyền truy cập Beta và tinh chỉnh một số thuật ngữ để tự nhiên, nhất quán hơn.
- **[major]** `accuracy` @ Beta Access callout
  - 源: currently available to Moderato, Allegretto, Allegro, and Vivace members
  - 译: hiện chỉ dành cho thành viên Allegretto, Allegro và Vivace
  - 建议: Bổ sung gói bị thiếu: “hiện dành cho thành viên Moderato, Allegretto, Allegro và Vivace”.
- `getting-started/search.md` — overall=4.0, severity=major
  - 摘要: Bản dịch chất lượng tốt, nhưng cần sửa một lỗi dịch sai ở ví dụ tìm kiếm hình ảnh và chuẩn hóa một số thuật ngữ/tên riêng để nhất quán hơn.
- **[major]** `accuracy` @ Smart search > Image search > Example queries
  - 源: "Find the real McDonald's"
  - 译: "Tìm logo McDonald's chính hãng"
  - 建议: Không nên thêm ý “logo” vì nguồn không đề cập đến logo. Sửa thành: "Tìm McDonald's thật" hoặc tự nhiên hơn theo ngữ cảnh hình ảnh: "Tìm McDonald's thật sự trong ảnh".
- `membership/overview.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但表格中 Moderato 的 Agent Swarm 权益有两处关键数值错误，需优先修正。
- **[major]** `accuracy` @ Plan comparison table / Agent Swarm (beta), Moderato column
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50 lượt | 120 lượt | 240 lượt
  - 建议: 将 Moderato 列从“—”改为“25 lượt”，保持与源文一致。
- **[major]** `accuracy` @ Plan comparison table / Agent Swarm concurrent subtasks, Moderato column
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Tác vụ con đồng thời của Agent Swarm | — | — | 4 | 4 | 8
  - 建议: 将 Moderato 列从“—”改为“2”。
- `membership/pricing.md` — overall=4.0, severity=major
  - 摘要: 译文整体可用，但价格权益表中 Moderato 的 Agent Swarm 两项数据与源文不一致，属于需优先修正的重大准确性问题。
- **[major]** `accuracy` @ Plans at a glance 表格：Agent Swarm (beta) 行，Moderato 列
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50 lượt | 120 lượt | 240 lượt
  - 建议: 将 Moderato 列从“—”改为“25 lượt”，确保与源文权益一致。
- **[major]** `accuracy` @ Plans at a glance 表格：Agent Swarm concurrent subtasks 行，Moderato 列
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Số tác vụ con đồng thời của Agent Swarm | — | — | 4 | 4 | 8
  - 建议: 将 Moderato 列从“—”改为“2”。
- `slides/stuck.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但需优先修复本地化标题导致的锚点跳转问题，并对少量直译和术语表达做自然化统一。
- **[major]** `structure` @ “Thẻ Slides không bật lên”小节第 3 条
  - 源: please follow the [Bug Feedback Guidelines](#bug-feedback-guidelines) below
  - 译: vui lòng làm theo [Hướng dẫn gửi phản hồi lỗi](#bug-feedback-guidelines) bên dưới
  - 建议: 目标标题已译为“## Hướng dẫn gửi phản hồi lỗi”，但锚点仍为英文，可能导致站内跳转失效。建议改为实际生成的越南语锚点，或为标题显式添加固定 id，例如保留英文锚点：`## Hướng dẫn gửi phản hồi lỗi {#bug-feedback-guidelines}`。

#### 术语统一建议

- （1 次）建议统一术语并减少英越混用，例如改为“tạo kỹ năng Kimi”和“Việc tạo kỹ năng tiêu hao hạn mức như thế nào?”；如产品内固定使用 Skills/quota，则需全篇保持一致。
- （1 次）可改为更自然的越南语：“hạn mức tài khoản của bạn đã hết”或“hạn mức tài khoản của bạn đã được sử dụng hết”。
- （1 次）建议统一译为“hạn mức hội viên”或“hạn mức gói hội viên”，避免同一段落中 quota/token/Skills 过多英文混用。
- （1 次）Cụm này hơi không tự nhiên. Nên sửa thành "trợ lý được hỗ trợ bởi AI" hoặc "trợ lý dùng AI" để tự nhiên và sát nghĩa hơn
- （1 次）"Lưu trữ bền vững" nghe máy móc trong ngữ cảnh kỹ thuật. Nên dùng "logic lưu trữ dữ liệu lâu dài" hoặc "logic lưu trữ li

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ SEO description / H2: How creating Skills consumes quota?: 建议统一术语并减少英越混用，例如改为“tạo kỹ năng Kimi”和“Việc tạo kỹ năng tiêu hao hạn mức như thế nào?”；如产品内固定使用 Skills/quota，则需全篇保持一致。
- `agent/FAQ-en.md` @ Why is the "Create Skill" button disabled? - reason 3: 可改为更自然的越南语：“hạn mức tài khoản của bạn đã hết”或“hạn mức tài khoản của bạn đã được sử dụng hết”。
- `agent/FAQ-en.md` @ Deduction Order: 建议统一译为“hạn mức hội viên”或“hạn mức gói hội viên”，避免同一段落中 quota/token/Skills 过多英文混用。
- `agent/FAQ-en.md` @ Limits - Concurrency Limit: 建议改为“Giới hạn tác vụ đồng thời”或“Giới hạn chạy đồng thời”，更符合越南语帮助文档表达。
- `agent/FAQ-en.md` @ Limits - Daily Limit: 建议改为“Bạn sẽ thấy thông báo nhanh nếu vượt quá giới hạn này.”或“Vượt quá giới hạn này, hệ thống sẽ hiển thị thông báo dạng toast.”

### zh-SG（简体中文（海外））

- 审校完成: 90 篇
- 平均分: 4.54
- 分布: critical 0 / major 8 / minor 82 / ok 0

#### 重点问题文章

- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但需补回 Beta 权限中遗漏的 Moderato，并统一 orchestrator 等关键术语。
- **[major]** `accuracy` @ Beta Access callout
  - 源: currently available to Moderato, Allegretto, Allegro, and Vivace members
  - 译: 目前面向 Allegretto、Allegro 和 Vivace 会员开放
  - 建议: 补回遗漏的 Moderato：目前面向 Moderato、Allegretto、Allegro 和 Vivace 会员开放。
- `kimi-claw/group-claw.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但需补齐或处理 FAQ 中疑似缺失的 KimiClaw 排查内容，并进一步统一 Agent、Worker、Thread 等术语。
- **[major]** `structure` @ 常见问题 > 无法将 Claw 添加到群聊
  - 源: If you are using KimiClaw: ...
  - 译: **如果你使用的是 KimiClaw：**

**如果你在其他平台上使用 OpenClaw：**
  - 建议: 补齐 KimiClaw 场景下的排查步骤；如果源文确实没有内容，应删除空的小标题，避免读者误以为内容缺失。
- `membership/overview.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但套餐对比表中 Moderato 的 Agent Swarm 权益遗漏，需优先修正。
- **[major]** `accuracy` @ 套餐对比表 / Agent Swarm（测试版）
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm（测试版） | — | — | 50 次 | 120 次 | 240 次
  - 建议: 将 Moderato 列从“—”改为“25 次”，确保与源文权益一致。
- **[major]** `accuracy` @ 套餐对比表 / Agent Swarm 并发子任务
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Agent Swarm 并发子任务 | — | — | 4 | 4 | 8
  - 建议: 将 Moderato 列从“—”改为“2”。
- `membership/pricing.md` — overall=4.0, severity=major
  - 摘要: 译文整体质量较好，但方案速览表中 Moderato 的 Agent Swarm 权益漏译，需优先修正。
- **[major]** `accuracy` @ 方案速览表 / Agent Swarm（测试版） / Moderato 列
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm（测试版） | — | — | 50 次使用 | 120 次使用 | 240 次使用
  - 建议: 将 Moderato 列从“—”改为“25 次使用”，以保持与源文一致。
- **[major]** `accuracy` @ 方案速览表 / Agent Swarm 并发子任务 / Moderato 列
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Agent Swarm 并发子任务 | — | — | 4 | 4 | 8
  - 建议: 将 Moderato 列从“—”改为“2”。
- `websites/overview.md` — overall=4.0, severity=major
  - 摘要: 译文整体可用，但需优先统一“Kimi Websites”的产品术语，避免将网站产品误译为偏单页含义的“网页”。
- **[major]** `terminology` @ 全文标题、产品名及相关小标题
  - 源: Kimi Websites
  - 译: Kimi 网页
  - 建议: 建议统一译为“Kimi 网站”或保留“Kimi Websites”。“网页”更偏单个 page，弱化了 source 中 websites/site building 的产品含义；例如标题改为“Kimi 网站概览 - Kimi 帮助中心”，正文统一为“Kimi 网站”。
- `getting-started/search.md` — overall=4.3, severity=major
  - 摘要: 译文整体质量较好，但需修正数据源名称擅自品牌化的问题，并优化少量直译和术语表达。
- **[major]** `accuracy` @ 支持的数据源表格：Stock Finance Data
  - 源: **Stock Finance Data** | Chinese and global stock, futures, index and other financial data
  - 译: **同花顺ifind金融数据库** | 中国及全球股票、期货、指数等金融数据
  - 建议: 不要新增源文未提及的品牌名，建议改为“**股票金融数据** | 中国及全球股票、期货、指数等金融数据”。如确实为产品内数据源名称，应核对官方写法是否为“同花顺 iFinD”。
- `slides/stuck.md` — overall=4.5, severity=major
  - 摘要: 译文整体质量较高，但需重点修复“Bug 反馈指南”的站内锚点链接，并统一 App、new chat、credits 等产品术语。
- **[major]** `structure` @ “Slides 卡片未弹出”第三条中的站内锚点链接
  - 源: please follow the [Bug Feedback Guidelines](#bug-feedback-guidelines) below
  - 译: 请按照下方的 [Bug 反馈指南](#bug-feedback-guidelines) 提交反馈
  - 建议: 当前译文将标题译为“## Bug 反馈指南”，但链接仍指向英文锚点 `#bug-feedback-guidelines`，可能导致跳转失效。建议统一锚点，例如将标题保留为“## Bug Feedback Guidelines”或为标题添加显式 id；也可将链接改为实际生成的中文锚点。
- `kimi-api/error-codes.md` — overall=4.6, severity=major
  - 摘要: 译文整体质量较高，但 401 解决方法存在否定逻辑歧义，建议优先修正。
- **[major]** `accuracy` @ 错误码参考表 / 401 / 解决方法
  - 源: Verify API Key is correct, not expired or disabled.
  - 译: 确认 API 密钥正确，且未过期或被禁用。
  - 建议: 改为“确认 API 密钥正确，且未过期、未被禁用。”或“确认 API 密钥正确，并且未过期也未被禁用。”避免被理解为“未过期或已被禁用”。

#### 术语统一建议

- （1 次）建议统一产品术语大小写，例如全篇统一为“Token”或“tokens”；SEO 中可改为“Token 消耗”，正文改为“创建技能会消耗你的 **Token**”。
- （1 次）若界面中按钮呈灰色且无法点击，建议译为“为什么‘创建技能’按钮置灰/无法点击？”，比“不可用”更贴近 UI 状态。
- （1 次）建议将“免费等级/付费等级”改为“免费方案/付费方案”或“免费套餐/付费套餐”，更符合产品订阅语境。
- （1 次）建议改为“一份文档或一个电子表格文件”，避免将 spreadsheet 误解为普通表格或单张表。
- （1 次）建议统一改为“身份验证配置”或“登录鉴权配置”。若产品文档已有术语库，应保持与既有术语一致。

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ 并发限制: “失败”任务并非正在运行，建议改为“最多可同时存在 3 个任务（创建中 + 创建失败）”，避免理解为失败任务也在并行运行。
- `agent/FAQ-en.md` @ SEO description / 配额消耗段落 / Callout: 建议统一产品术语大小写，例如全篇统一为“Token”或“tokens”；SEO 中可改为“Token 消耗”，正文改为“创建技能会消耗你的 **Token**”。
- `agent/FAQ-en.md` @ 每日限制: 如“toast”不是面向用户的固定界面术语，建议改为更自然的“超出限制后，系统会显示提示”或“会显示轻提示”。
- `agent/FAQ-en.md` @ Why is the "Create Skill" button disabled?: 若界面中按钮呈灰色且无法点击，建议译为“为什么‘创建技能’按钮置灰/无法点击？”，比“不可用”更贴近 UI 状态。
- `agent/FAQ-en.md` @ FAQ 标题: 可改为“关于技能的常见问题（FAQ）”，与源文语义更完整，也更适合帮助中心标题。

### zh-TW（繁体中文）

- 审校完成: 90 篇
- 平均分: 4.41
- 分布: critical 1 / major 7 / minor 80 / ok 2

#### 规则检测（必改）

- `membership/overview.md`: Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。

#### 重点问题文章

- `kimi-claw/group-claw.md` — overall=3.6, severity=major
  - 摘要: 譯文整體可用，但需補齊疑似缺失的小節內容，並統一 UI 文案與繁中術語。
- **[major]** `structure` @ FAQ > 無法將 Claw 加入群組聊天
  - 源: If you are using KimiClaw:
  - 译: **如果你使用的是 KimiClaw：**
  - 建议: 此小節標題後沒有任何處理步驟，疑似漏譯或內容缺失。請補齊 KimiClaw 無法加入群組聊天時的排查步驟；若源文也為空，應回源文確認是否需刪除該小節。
- **[major]** `terminology` @ Create a group chat / Connect a Claw to group chat
  - 源: Start Group Chat / Create / Add New Bot / On Cloud Server / Link Existing OpenClaw
  - 译: 開始群組聊天 / 建立 / 新增 Bot / 雲端伺服器 / 連結既有 OpenClaw
  - 建议: 請核對產品介面實際顯示語言。若 UI 仍為英文，文件中的按鈕與選單名稱應保留英文；若已有繁中介面，建議統一使用實際 UI 文案，例如「新增機器人」「雲端伺服器」「連結現有 OpenClaw」等。
- `membership/update-rules.md` — overall=3.6, severity=major
  - 摘要: 譯文結構完整且內容大致準確，但「credit／quota」等核心術語中英混雜且不一致，並有「訂閱週年日」等易誤解表述，建議優先統一術語並修正關鍵說法。
- **[major]** `terminology` @ 全篇／SeoMeta、標題、各小節
  - 源: Credit update & usage rules; credits; quota pool
  - 译: credit 更新與使用規則；credit；quota 池
  - 建议: 建議統一在 zh-TW 中使用自然且一致的術語，例如將「credit」譯為「額度」或「點數」，將「quota pool」譯為「額度池」。若產品規範要求保留英文，首次出現可寫「額度（credit）」並避免全篇中英混雜。
- **[major]** `accuracy` @ ## credit 究竟如何更新？／第 1 點
  - 源: Credits refresh on your subscription anniversary date, not the calendar month
  - 译: credit 會在你的訂閱週年日更新，而不是依日曆月份
  - 建议: 「訂閱週年日」在繁中容易被理解為每年一次，與此處每月更新語境不完全吻合。建議改為「額度會在你的訂閱週期對應日更新，而不是依自然月更新」或「會在你訂閱生效日期的每月對應時間更新」。
- `membership/overview.md` — overall=3.8, severity=major
  - 摘要: 譯文整體可用，但方案比較表中 Moderato 的 Agent Swarm 欄位有兩處實質數值漏譯，需優先修正，並建議統一 credit/quota 相關術語。
- **[major]** `accuracy` @ 方案比較表：Agent Swarm (beta) / Moderato
  - 源: 25 uses
  - 译: —
  - 建议: 將 Moderato 欄位由「—」改為「25 次使用」，以符合源文。
- **[major]** `accuracy` @ 方案比較表：Agent Swarm concurrent subtasks / Moderato
  - 源: 2
  - 译: —
  - 建议: 將 Moderato 欄位由「—」改為「2」。
- `membership/pricing.md` — overall=3.8, severity=critical
  - 摘要: 譯文整體可讀且結構完整，但方案表中 Moderato 的 Agent Swarm 權益出現關鍵數值錯誤，需立即修正並統一 credit/quota 相關術語。
- **[critical]** `accuracy` @ 方案一覽表 / Agent Swarm (beta) / Moderato
  - 源: Agent Swarm (beta) | — | 25 uses | 50 uses | 120 uses | 240 uses
  - 译: Agent Swarm (beta) | — | — | 50 次使用 | 120 次使用 | 240 次使用
  - 建议: 將 Moderato 欄位由「—」改為「25 次使用」，避免會員權益資訊錯誤。
- **[critical]** `accuracy` @ 方案一覽表 / Agent Swarm concurrent subtasks / Moderato
  - 源: Agent Swarm concurrent subtasks | — | 2 | 4 | 4 | 8
  - 译: Agent Swarm 並行子任務 | — | — | 4 | 4 | 8
  - 建议: 將 Moderato 欄位由「—」改為「2」。
- `agent/swarm.md` — overall=4.0, severity=major
  - 摘要: 譯文整體品質良好，但 Beta 權限名單遺漏 Moderato 屬主要準確性問題，另有少量技術術語與繁中自然度可優化。
- **[major]** `accuracy` @ Beta Access callout
  - 源: K2.6 Agent Swarm [Beta] is currently available to Moderato, Allegretto, Allegro, and Vivace members.
  - 译: K2.6 Agent Swarm [Beta 版] 目前開放給 Allegretto、Allegro 與 Vivace 會員使用。
  - 建议: 補上遺漏的 Moderato：K2.6 Agent Swarm [Beta 版] 目前開放給 Moderato、Allegretto、Allegro 與 Vivace 會員使用。
- **[major]** `accuracy` @ The story behind / PARL paragraph
  - 源: it reduces critical steps by 3×–4.5× in large-scale search scenarios.
  - 译: 在大規模搜尋場景中可將關鍵步驟減少 3 倍至 4.5 倍。
  - 建议: 「減少 3 倍」在中文中不自然且易誤解，建議改為：在大規模搜尋場景中，關鍵步驟數可降至單 Agent 方法的約 1/3–1/4.5，或：關鍵步驟數可降低約 3–4.5 倍。
- `kimi-code/cli-ides.md` — overall=4.0, severity=major
  - 摘要: 譯文整體品質良好，但需修正可能失效的內部錨點，並統一部分技術術語與 UI 標籤處理。
- **[major]** `structure` @ Paseo 段落內部連結
  - 源: see [Prerequisites](#prerequisites)
  - 译: 見 [前置條件](#prerequisites)
  - 建议: 若標題已譯為「## 前置條件」，錨點通常會變成 `#前置條件`，建議改為 `見 [前置條件](#前置條件)`，或為標題加上固定英文錨點，避免連結失效。
- `slides/stuck.md` — overall=4.0, severity=major
  - 摘要: 譯文整體準確流暢，但需優先修正「問題回饋指南」錨點可能失效的結構問題，並統一 credit、Web/App、Office 軟體等術語。
- **[major]** `structure` @ 「Slides 卡片未彈出」第 3 個項目
  - 源: please follow the [Bug Feedback Guidelines](#bug-feedback-guidelines) below
  - 译: 請依照下方的[問題回饋指南](#bug-feedback-guidelines)提交回饋
  - 建议: 繁中標題已譯為「問題回饋指南」，但錨點仍保留英文，可能導致站內跳轉失效。建議改為實際生成的繁中錨點（如 #問題回饋指南），或為該標題保留顯式 id「bug-feedback-guidelines」。同時建議在「的」與連結、連結與「提交」之間加空格提升可讀性。
- `kimi-api/account-and-auth.md` — overall=4.4, severity=major
  - 摘要: 譯文整體品質良好，但兩處電子郵件主旨建議保留英文原文以免影響客服處理流程，並可進一步統一技術術語與繁中用語。
- **[major]** `accuracy` @ How to appeal account suspension? 步驟 1
  - 源: with the subject line "API Account Appeal"
  - 译: 主旨填寫「API 帳戶申訴」
  - 建议: 若客服流程依賴固定英文主旨，建議保留原文或採雙語：主旨填寫「API Account Appeal（API 帳戶申訴）」。
- **[major]** `accuracy` @ How to change registered email? 步驟 1
  - 源: with the subject line "Email Change Request"
  - 译: 主旨填寫「變更電子郵件申請」
  - 建议: 建議保留原文主旨或採雙語：主旨填寫「Email Change Request（變更電子郵件申請）」。

#### 术语统一建议

- （1 次）若站內繁中介面已使用「Kimi 幫助中心」，建議改為「建立技能常見問題 - Kimi 幫助中心」，以維持產品文件名稱一致。
- （1 次）建議統一術語格式，例如「Token」與「額度」：可改為「建立技能會消耗你的 **Token**，可能來自贈送的搜尋次數，或正式會員額度。」以及「帳號額度已用完」「不會消耗額度」。避免中英混用的 `quota` 降低可讀性。
- （1 次）建議翻譯為「並行限制」或「同時任務限制」：例如「**同時任務限制**：最多可同時執行 **3 個任務**（建立中 + 失敗）。」
- （1 次）建議統一術語。如產品介面未固定使用英文，可改為「配額用量」「配額池」「配額與計費」；若必須保留 quota，建議至少統一大小寫為「Quota」並避免中英混排不一致。
- （1 次）「會員 credit」中英混排且不夠自然。若對應頁面名稱未固定，建議改為「會員額度」或「會員點數」；例如：「你可以在會員額度頁面查看目前配額與使用量。」

#### 常见润色项（抽样）

- `agent/FAQ-en.md` @ SeoMeta title: 若站內繁中介面已使用「Kimi 幫助中心」，建議改為「建立技能常見問題 - Kimi 幫助中心」，以維持產品文件名稱一致。
- `agent/FAQ-en.md` @ 全文：quota / token: 建議統一術語格式，例如「Token」與「額度」：可改為「建立技能會消耗你的 **Token**，可能來自贈送的搜尋次數，或正式會員額度。」以及「帳號額度已用完」「不會消耗額度」。避免中英混用的 `quota` 降低可讀性。
- `agent/FAQ-en.md` @ 建立數量或頻率是否有限制？第 1 點: 建議翻譯為「並行限制」或「同時任務限制」：例如「**同時任務限制**：最多可同時執行 **3 個任務**（建立中 + 失敗）。」
- `agent/FAQ-en.md` @ 建立數量或頻率是否有限制？第 2 點: 建議改為更自然的繁中介面用語：「超過限制時會顯示提示訊息。」若產品術語需保留 toast，可寫作「toast 提示訊息」。
- `agent/FAQ-en.md` @ 全文稱謂: 若 Kimi 幫助中心繁中語氣偏正式，建議統一改為「您的／您」。若站內採較親切口吻，則目前「你／你的」可保留；重點是與其他文章一致。

