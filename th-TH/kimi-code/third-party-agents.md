---
title: "การใช้งานร่วมกับ coding agent ของบุคคลที่สาม"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="การใช้งานร่วมกับ coding agent ของบุคคลที่สาม - ศูนย์ช่วยเหลือ Kimi"
  description="สิทธิประโยชน์ Kimi Code ใช้งานได้ร่วมกับ Claude Code และ Roo Code ช่วยให้คุณเพลิดเพลินกับความสามารถ AI ของ Kimi ในเครื่องมือเขียนโค้ดที่คุณชื่นชอบ"
/>

# การใช้งานร่วมกับ coding agent ของบุคคลที่สาม

สิทธิประโยชน์ Kimi Code ใช้งานได้ร่วมกับ Claude Code และ Roo Code ช่วยให้คุณเพลิดเพลินกับความสามารถ AI ของ Kimi ในเครื่องมือเขียนโค้ดที่คุณชื่นชอบ

## สิ่งที่ต้องเตรียม

- สมาชิก Kimi ที่ใช้งานอยู่และเปิดใช้สิทธิประโยชน์ Kimi Code แล้ว
- API Key (สร้างได้ใน [Kimi Console](https://www.kimi.com/code))

## การใช้งานร่วมกับ Claude Code

[Claude Code](https://code.claude.com/docs/en/overview) คือผู้ช่วยเขียนโค้ดแบบบรรทัดคำสั่งจาก Anthropic

### ขั้นตอนการตั้งค่า

หลังการติดตั้ง อย่าเพิ่งเริ่ม Claude โดยตรง ให้รันสคริปต์ต่อไปนี้ในเทอร์มินัลก่อนเพื่อข้ามขั้นตอนการเข้าสู่ระบบเริ่มต้นของ Anthropic:

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      content: "node --eval \"\n// enable third party model support and fast mode\nconst claudeJsonFilePath = path.join(os.homedir(), '.claude.json');\nif (fs.existsSync(claudeJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeJsonFilePath, 'utf-8'));\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ ...content, penguinModeOrgEnabled: true, hasCompletedOnboarding: true }, null, 2), 'utf-8');\n} else {\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ penguinModeOrgEnabled: true, hasCompletedOnboarding: true }), 'utf-8');\n}\n\n// delete old model id\nconst claudeSettingsJsonFilePath = path.join(os.homedir(), '.claude', 'settings.json');\nif (fs.existsSync(claudeSettingsJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeSettingsJsonFilePath, 'utf-8'));\n    if (typeof content === 'object' && typeof content.env === 'object') {\n        for (const element of [\n            'ANTHROPIC_MODEL',\n            'ANTHROPIC_SMALL_FAST_MODEL',\n            'CLAUDE_CODE_SUBAGENT_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME',\n        ]) {\n            delete content.env[element];\n        }\n        fs.writeFileSync(claudeSettingsJsonFilePath, JSON.stringify(content, null, 2), 'utf-8');\n    }\n}\n\"",
    },
  ]}
/>

จากนั้นตั้งค่าตัวแปรสภาพแวดล้อมแล้วเริ่มใช้งาน:

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

2. เปิด Claude Code ด้วยโมเดล `kimi-for-coding`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> ใน Claude Code คุณสามารถกด **Tab** เพื่อสลับไปใช้โมเดล Kimi K2 Thinking ได้

> หากพบข้อผิดพลาด 400 ที่เกิดจากการเรียก `tool_search` คุณสามารถแก้ไขชั่วคราวได้โดยตั้งค่าตัวแปรสภาพแวดล้อม `ENABLE_TOOL_SEARCH=false`

### สลับไปใช้ HighSpeed

HighSpeed ให้ความเร็วในการสร้างผลลัพธ์ราว 5–6 เท่าของ Standard โดย**ใช้เครดิตราว 3 เท่า** และต้องมีแพ็กเกจ [Allegretto](https://www.kimi.com/membership/pricing) ขึ้นไป มีสองวิธีในการเปิดใช้งานใน Claude Code:

- **วิธีที่ 1: คำสั่ง `/fast on`** — หลังเริ่ม Claude Code ให้พิมพ์ `/fast on`; ผลลัพธ์ `⚡ Fast mode ON` ยืนยันว่าเปิดใช้งานแล้ว
- **วิธีที่ 2: คำสั่ง `/config`** — พิมพ์ `/config` เพื่อเปิดแผงการตั้งค่า จากนั้นเปิด **Fast mode** (และ **Thinking mode**) ในแท็บ **Config**

## การใช้งานร่วมกับ Roo Code

[Roo Code](https://github.com/RooCodeInc/Roo-Code) คือส่วนขยายเขียนโค้ดด้วย AI สำหรับ VS Code

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
   | Model | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. บันทึกการตั้งค่า แล้วก็พร้อมใช้งานได้เลย

## ข้อควรทราบที่สำคัญ

- สิทธิประโยชน์ Kimi Code รองรับเฉพาะใน **Kimi Code CLI**, **Claude Code** และ **Roo Code** เท่านั้น
- การใช้ API Key ของคุณกับแพลตฟอร์มหรือเครื่องมือที่ไม่ได้รับอนุญาต อาจถือเป็นการละเมิดและอาจส่งผลให้ถูกจำกัดการเข้าถึง
- หากมีคำถาม โปรดดูที่หน้า [สิทธิประโยชน์](/kimi-code/benefits) หรือติดต่อฝ่ายสนับสนุนของ Kimi
