---
title: "การใช้งานร่วมกับ coding agent ของบุคคลที่สาม"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="การใช้งานร่วมกับ coding agent ของบุคคลที่สาม - Kimi Help Center"
  description="สิทธิประโยชน์ Kimi Code ใช้งานได้ร่วมกับ Claude Code และ Roo Code ช่วยให้คุณเพลิดเพลินกับความสามารถ AI ของ Kimi ในเครื่องมือเขียนโค้ดที่คุณชื่นชอบ"
/>

# การใช้งานร่วมกับ coding agent ของบุคคลที่สาม

สิทธิประโยชน์ Kimi Code ใช้งานได้ร่วมกับ Claude Code และ Roo Code ช่วยให้คุณเพลิดเพลินกับความสามารถ AI ของ Kimi ในเครื่องมือเขียนโค้ดที่คุณชื่นชอบ

## สิ่งที่ต้องเตรียม

- สมาชิก Kimi ที่ใช้งานอยู่และเปิดใช้สิทธิประโยชน์ Kimi Code แล้ว
- API Key (สร้างได้ใน [Kimi Console](https://www.kimi.com/code))

## การใช้งานร่วมกับ Claude Code

[Claude Code](https://www.docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) คือผู้ช่วยเขียนโค้ดแบบบรรทัดคำสั่งจาก Anthropic

### ขั้นตอนการตั้งค่า

1. ตั้งค่าตัวแปรสภาพแวดล้อม:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. เปิด Claude Code ด้วยโมเดล `kimi-k2.5`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> ใน Claude Code คุณสามารถกด **Tab** เพื่อสลับไปใช้โมเดล Kimi K2 Thinking ได้

> หากพบข้อผิดพลาด 400 ที่เกิดจากการเรียก `tool_search` คุณสามารถแก้ไขชั่วคราวได้โดยตั้งค่าตัวแปรสภาพแวดล้อม `ENABLE_TOOL_SEARCH=false`

## การใช้งานร่วมกับ Roo Code

[Roo Code](https://www.github.com/RooCodeInc/Roo-Code) คือส่วนขยายเขียนโค้ดด้วย AI สำหรับ VS Code

### ติดตั้ง Roo Code

1. ค้นหา **Roo Code** ใน VS Code Extensions Marketplace แล้วติดตั้ง
2. หลังติดตั้งแล้ว ไอคอน Roo Code จะปรากฏในแถบกิจกรรม หากไม่ปรากฏ ให้รีสตาร์ท VS Code

### ตั้งค่าโมเดล Kimi Code

1. เปิดแผง Roo Code แล้วไปที่หน้า **Settings**
2. ในส่วน **Providers** เลือก **OpenAI Compatible** แล้วกรอกข้อมูลต่อไปนี้:

   | การตั้งค่า | ค่า |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | API Key ของคุณ |
   | Model | `kimi-k2.5` |

3. บันทึกการตั้งค่า แล้วก็พร้อมใช้งานได้เลย

## ข้อควรทราบที่สำคัญ

- สิทธิประโยชน์ Kimi Code รองรับเฉพาะใน **Kimi Code CLI**, **Claude Code** และ **Roo Code** เท่านั้น
- การใช้ API Key ของคุณกับแพลตฟอร์มหรือเครื่องมือที่ไม่ได้รับอนุญาต อาจถือเป็นการละเมิดและอาจส่งผลให้ถูกจำกัดการเข้าถึง
- หากมีคำถาม โปรดดูที่หน้า [สิทธิประโยชน์](/kimi-code/benefits) หรือติดต่อฝ่ายสนับสนุนของ Kimi
