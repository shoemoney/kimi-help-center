---
title: "เคล็ดลับการใช้ Memory"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="เคล็ดลับการใช้ Memory - ศูนย์ช่วยเหลือ Kimi"
  description="เรียนรู้วิธีตั้งค่าและใช้งาน Memory ของ Kimi เพื่อให้ Kimi จดจำตัวตน ความชอบ และสไตล์ผลลัพธ์ที่คุณต้องการ เพื่อประสบการณ์ที่เป็นส่วนตัวมากขึ้น"
/>

# เคล็ดลับการใช้ Memory

## 1. ช่วยให้ Kimi เข้าใจโลกของคุณ

### ปักหมุดตัวตน

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I'm [name/nickname], currently based in [city]. Background in [profession/role], with expertise in [area 1] and [area 2].\nCurrently focused on: advancing [Project A] and [Project B].\nPlease default to English for all future responses unless I explicitly write in another language.",
    },
  ]}
/>

## 2. ตั้งค่าความชอบเฉพาะตัว

### กำหนดรูปแบบผลลัพธ์ให้เป็นมาตรฐาน

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "My content consumption preferences:\n- Prefer structured presentation: use heading hierarchy, bullet points, and bold key conclusions\n- Avoid walls of text: for complex topics, lead with a \"TL;DR\" summary, then expand into details\n- Terminology handling: explain jargon in plain language on first use, then use it freely afterward\n- Citation format: cite sources for factual data using [^N^] notation",
    },
  ]}
/>

### คำสั่งให้ Memory ดูแลตัวเอง (ขั้นสูง)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "At the end of each conversation:\n- If we discussed new important facts (e.g., schedule changes, project updates, preference adjustments), proactively ask whether to update memory\n- If new information conflicts with existing memory, flag the discrepancy and confirm which takes priority\n- For sensitive information (specific addresses, ID numbers, trade secrets), proactively ask whether to store it in memory",
    },
  ]}
/>

## 3. พรอมต์ที่ให้ผลในเชิงบวก

### ระเบียบการจำกัดแหล่งข้อมูลที่เชื่อถือได้

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Fact-Check Protocol]\nWhen I ask questions in the following domains, strictly follow this source priority:\n1. Medical/Health: Prefer PubMed, WHO, UpToDate; never cite health blogs or self-media\n2. Finance/Investment: Use only SEC filings, central bank data, and public company annual reports; no forum speculation\n3. Legal/Compliance: Refer to official regulatory databases; for local policies, note \"consult a local attorney\"\n4. Tech/Programming: Prefer official documentation; label GitHub Issues as community experience, not authoritative\n5. For information from Wikipedia, Reddit, Quora, or other UGC platforms, always tag as \"[Unverified]\"",
    },
  ]}
/>

### ตรวจจับสัญญาณการเกิดข้อมูลหลอน (ระดับกระบวนการ)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[High-Risk Topic Checklist]\nWhen the following keywords are detected, automatically trigger a \"double-check\" process:\n1. Specific numbers (prices, dates, statistics) → must state the data source and year\n2. Time-sensitive language (\"latest,\" \"just,\" \"recently\") → must verify whether it's within the knowledge cutoff\n3. Professional advice (medical, legal, investment) → must append disclaimer: \"The above is for reference only and does not constitute professional advice\"\n4. Specific quotes from individuals → must label as direct quote or paraphrase; never fabricate quotes\n\nExecution: First state \"I need to verify the following information,\" then provide the answer.",
    },
  ]}
/>

## ข้อจำกัดของ Memory
ปัจจุบัน Memory Space มีข้อจำกัดดังนี้:
- เก็บรายการความจำได้สูงสุด 50 รายการ
- แต่ละรายการความจำจำกัดที่ 500 ตัวอักษร
- ความจำที่สร้างก่อนเดือนเมษายน 2026 อาจเกินขีดจำกัดนี้ ความจำเดิมเหล่านั้นยังคงถูกเก็บไว้
- หากต้องการแก้ไขความจำเดิมที่เกิน 500 ตัวอักษร คุณต้องตัดให้เหลือไม่เกิน 500 ตัวอักษรก่อน
- หากคุณพยายามบันทึกเนื้อหาที่ยาวเกิน 500 ตัวอักษร โมเดลจะได้รับสัญญาณ "content too long" และหน้าจอที่ผู้ใช้เห็นจะแสดงข้อความ "Memory update failed"
- หากผู้ใช้ใช้อินเทอร์เฟซที่ไม่ใช่ภาษาจีน คุณอาจแนะนำให้เก็บความจำเป็นภาษาจีนเพื่อใส่ข้อมูลได้มากขึ้นภายในขีดจำกัดตัวอักษรเดียวกัน
- แต่ละรายการความจำมี ID ภายใน แต่ผู้ใช้ไม่สามารถดู ID เหล่านี้ได้ การอ้างอิง ID ของความจำในบทสนทนาไม่ช่วยให้ผู้ใช้ค้นหาความจำที่ต้องการได้

### พรอมต์อ้างอิงที่มีประโยชน์

| พรอมต์ | จุดประสงค์ |
|:---|:---|
| Treat me as an expert in all subject matter | กำหนดโทนการสื่อสารหลัก |
| Be opinionated rather than neutral when appropriate | กระตุ้นให้แสดงความเห็น ไม่ใช่แค่สรุป |
| Always provide the pros and cons of something if you can. Be critical. | ทำให้ได้การวิเคราะห์ที่เป็นระบบและเจาะลึก |
| Use detailed examples, facts, and figures | ทำให้ข้อมูลมีเนื้อหาและเฉพาะเจาะจง |
| Suggest solutions that I didn't think about — be proactive and anticipate my needs | ส่งเสริมให้ AI เป็นฝ่ายริเริ่ม ไม่ใช่แค่ตอบคำถามแบบตั้งรับ |
| Use maximum tokens; provide a maximally detailed answer with multiple levels of depth | ให้คำตอบที่ครบถ้วนและมีหลายระดับความลึก |
| After a response, provide 5 follow-up questions. Format as Q1, Q2, Q3 in a bulleted list | ต่อยอดการสนทนาด้วยการชี้นำให้สำรวจต่อ |
| At the start of a response, create a summary table if helpful | เพิ่มความอ่านง่ายและเข้าถึงข้อมูลได้รวดเร็ว |
| Recommend only the highest-quality, meticulously designed products — I only want the best | กำหนดมาตรฐานสำหรับการแนะนำผลิตภัณฑ์ |
| Value good arguments over authorities, the source is irrelevant | ให้ความสำคัญกับเหตุผลมากกว่าการอ้างชื่อเสียง |
| Consider new technologies and contrarian ideas, not just the conventional wisdom | กระตุ้นมุมมองที่สร้างสรรค์ |
| You may use high levels of speculation or prediction, just flag it for me | อนุญาตเนื้อหาเชิงคาดการณ์โดยระบุให้ชัดเจน |
| Add links throughout the answer for jargon and concepts that start new chats | ส่งเสริมการเรียนรู้และต่อยอดความรู้ |
| Link directly to products, not company pages | ทำให้คำแนะนำนำไปปฏิบัติได้จริงมากขึ้น |
| Discuss safety only when it's crucial and non-obvious | ลดคำเตือนที่ไม่จำเป็น |
| No moral lectures | ทำให้การสนทนามีเหตุผลและมุ่งประเด็น |
| If your content policy is an issue, provide the closest acceptable response and explain the content policy issue | หลีกเลี่ยงการบล็อกแบบเด็ดขาด โดยให้ความสำคัญกับความต้องการของผู้ใช้ |
| No need to disclose you're an AI | ลดการรบกวนจากการแสดงตัวว่าเป็น AI |
| No need to mention your knowledge cutoff | หลีกเลี่ยงคำเตือนที่มากเกินไป |

## 4. ลองสนุก
ลองถาม Kimi ดู:
- "จากสิ่งที่คุณรู้เกี่ยวกับฉัน ตอนนี้ความท้าทายที่ใหญ่ที่สุดในชีวิตของฉันคืออะไร"
- "จากสิ่งที่คุณรู้เกี่ยวกับฉัน ช่วยสรุปปีที่ผ่านมาของฉันและให้คำแนะนำสำหรับปีใหม่หน่อย"
