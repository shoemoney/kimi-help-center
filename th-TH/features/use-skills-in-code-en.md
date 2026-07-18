---
title: "การใช้ Skills ใน Kimi Code"
slug: "use-skills-in-code"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="การใช้ Skills ใน Kimi Code - ศูนย์ช่วยเหลือ Kimi"
  description="เรียนรู้วิธีสร้างและเรียกใช้ Skills ใน Kimi Code CLI เพื่อกำหนดมาตรฐานการเขียนโค้ดของทีมและทำให้เวิร์กโฟลว์การพัฒนาเป็นอัตโนมัติ"
  ogType="article"
/>

# การใช้ Skills ใน Kimi Code

Kimi Code คือผู้ช่วยเขียนโปรแกรมด้วย AI ที่ออกแบบมาเพื่อนักพัฒนาโดยเฉพาะ ทำงานได้โดยตรงในเทอร์มินัลหรือเอดิเตอร์ เพื่อช่วยเขียนโค้ด แก้บั๊ก และสร้างเอกสาร Kimi Code รองรับการให้คำแนะนำที่อิงความรู้ผ่านไฟล์ `SKILL.md` เมื่ออ่านไฟล์เหล่านี้แล้ว AI จะปฏิบัติตามมาตรฐานที่กำหนดไว้ภายใน เหมาะสำหรับการกำหนดสไตล์โค้ด เวิร์กโฟลว์ และแนวทางปฏิบัติที่ดีที่สุด

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Invoke skills using slash command"
/>

## การเรียกใช้ Skills

Kimi Code CLI ช่วยให้คุณเรียกใช้ Skills ได้ด้วยคำสั่งสแลช:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

ตัวอย่างเช่น การป้อน `/skill:git-commits` จะทำให้ Kimi Code อ่านเนื้อหา `SKILL.md` ที่เกี่ยวข้องและส่งเป็นคำสั่งไปยัง Agent

คุณยังสามารถเพิ่มคำอธิบายต่อท้ายคำสั่งสแลชได้ ซึ่งจะถูกเพิ่มเข้าไปท้ายคำสั่งของ Skill:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

สำหรับการสนทนาทั่วไป ไม่จำเป็นต้องเรียกใช้ด้วยตนเอง เพราะ Agent จะพิจารณาจากบริบทโดยอัตโนมัติว่าจะอ่านเนื้อหาของ Skill หรือไม่

## การสร้าง Skill แรกของคุณ

การสร้าง Skill ใช้เพียงสองขั้นตอน: สร้างไดเรกทอรีย่อยในไดเรกทอรี Skills แล้วสร้างไฟล์ `SKILL.md` ไว้ภายใน

ตำแหน่งจัดเก็บที่แนะนำ (ใช้ได้กับทุกโปรเจกต์):

<CodePreview
  files={[
    {
      name: "Directory Structure",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` ใช้ YAML Frontmatter ในการกำหนดเมตาดาตา ตามด้วย Markdown สำหรับข้อกำหนดหลัก:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

ทั้ง `name` และ `description` ใน Frontmatter เป็นฟิลด์ที่ไม่บังคับ หากไม่ระบุ จะใช้ชื่อไดเรกทอรีเป็นค่าเริ่มต้น

### ตัวอย่าง

ทีมของคุณกำหนดให้ข้อความ commit ต้องเป็นไปตามรูปแบบ Conventional Commits แต่การต้องอธิบายซ้ำ ๆ นั้นน่าเบื่อ เมื่อเขียนเป็น Skill แล้ว คุณเพียงใช้คำสั่งเดียวก็เรียกใช้ได้ในอนาคต

**ขั้นตอนที่ 1: สร้างไฟล์ Skill**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**ขั้นตอนที่ 2: เมื่อแก้ไขโค้ดเสร็จแล้ว ให้เรียกใช้ Skill**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code จะอ่านมาตรฐานของคุณ ผสานเข้ากับคำอธิบายงาน แล้วแสดงข้อความ commit ในรูปแบบที่ถูกต้องโดยตรง โดยที่คุณไม่ต้องระบุข้อกำหนดด้านรูปแบบซ้ำอีก

## Flow Skills: การกำหนดเวิร์กโฟลว์หลายขั้นตอน

ในขณะที่ Skills ทั่วไปให้มาตรฐานแบบคงที่ **Flow Skills** สามารถกำหนดกระบวนการหลายขั้นตอนแบบอัตโนมัติได้

ตั้งค่า `type: flow` ใน Frontmatter และฝังผังงานในรูปแบบ Mermaid หรือ D2 เพื่อสร้าง Flow Skill

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

สั่งรันด้วยคำสั่ง `/flow:<name>` Agent จะเริ่มจากโหนด `BEGIN` และทำแต่ละขั้นตอนให้เสร็จตามลำดับโดยอัตโนมัติจนถึง `END`

## กลไกการโหลด Skill

Kimi Code CLI ค้นหาและโหลด Skills ตามลำดับความสำคัญต่อไปนี้ (รายการที่ตรงกันอันแรกจะมีความสำคัญสูงสุด):

1. **Skills ในตัว**: ติดตั้งมาพร้อมกับแพ็กเกจซอฟต์แวร์ ให้ความสามารถพื้นฐาน
2. **Skills ระดับผู้ใช้**: จัดเก็บในไดเรกทอรี home ใช้ได้กับทุกโปรเจกต์
3. **Skills ระดับโปรเจกต์**: จัดเก็บในไดเรกทอรีโปรเจกต์ ใช้ได้เฉพาะกับโปรเจกต์นั้นเท่านั้น

คุณยังสามารถระบุไดเรกทอรี Skills เพิ่มเติมด้วยตนเองได้โดยใช้พารามิเตอร์ `--skills-dir`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
Kimi Code CLI มี Skills ในตัวที่มีประโยชน์สองรายการ: `kimi-cli-help` (ตอบคำถามการใช้งาน CLI) และ `skill-creator` (แนะนำคุณในการสร้าง Skills ใหม่) ป้อน `/skill:skill-creator` เพื่อเริ่มต้น
</Callout>

สำหรับตัวเลือกการตั้งค่าและคำอธิบายพารามิเตอร์ทั้งหมด โปรดดู [เอกสาร Skills ของ Kimi Code CLI](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html)
