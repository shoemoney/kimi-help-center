---
title: "กรณีการใช้งานและคลังพรอมต์ Kimi Docs"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="กรณีการใช้งานและคลังพรอมต์ Kimi Docs - ศูนย์ช่วยเหลือ Kimi"
  description="ตัวอย่างกรณีการใช้งานและพรอมต์สำหรับ Kimi Docs — ตั้งแต่การตรวจทานต้นฉบับ ไปจนถึงการแปลระดับมืออาชีพและการออกแบบ PDF"
/>

# กรณีการใช้งานและคลังพรอมต์ Kimi Docs

<Callout type="info">
ตัวอย่างกรณีการใช้งานและพรอมต์สำหรับ Kimi Docs — ตั้งแต่การตรวจทานต้นฉบับ ไปจนถึงการแปลระดับมืออาชีพและการออกแบบ PDF
</Callout>

## ผู้เชี่ยวชาญด้านการตรวจทาน

เปรียบเสมือนนักตรวจทานต้นฉบับที่พิถีพิถัน Kimi จะแยกย่อยข้อเสนอแนะในการแก้ไข ระบุตำแหน่งย่อหน้าที่เกี่ยวข้องในเอกสารของคุณ และแทรกความคิดเห็นพร้อมข้อเสนอแนะอย่างละเอียดโดยอัตโนมัติ

**ตัวอย่างพรอมต์**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
    },
  ]}
/>

## การแปลระดับมืออาชีพ

เปรียบเสมือนนักแปลที่ไม่รู้จักเหน็ดเหนื่อย Kimi จะแปล PDF ภาษาอังกฤษ 50 หน้าเป็นภาษาฝรั่งเศสทีละหน้า โดยคงสูตรและโค้ดทั้งหมดไว้ในผลลัพธ์

**ตัวอย่างพรอมต์**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Find the first assignment PDF for Stanford's CS336 course in English, then convert\nit to a French PDF. Preserve all code and mathematical formulas in the French version.\nThe translation should be fluent — do not omit or add any content.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="แปลภาษา"
/>

## บริการออกแบบและจัดพิมพ์ PDF

เปรียบเสมือนนักออกแบบเลย์เอาต์ Kimi ช่วยคุณวางแผนองค์ประกอบภาพ จัดเรียงข้อความและรูปภาพโดยอัตโนมัติ และสร้างพอร์ตโฟลิโอ PDF คุณภาพระดับสิ่งพิมพ์

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black & white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English & Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods & Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar & Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall & Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
    },
  ]}
/>

## สถานการณ์และตัวอย่างพรอมต์เพิ่มเติม

| สถานการณ์ | ตัวอย่างพรอมต์ |
|------|-----------|
| **รายงานระดับมืออาชีพ** | เขียน "สมุดปกขาวอุตสาหกรรมเศรษฐกิจการบินระดับต่ำของจีนปี 2026" ในรูปแบบ Word สไตล์ McKinsey ครอบคลุมขนาดตลาด ภูมิทัศน์การแข่งขัน บริบทเชิงนโยบาย และข้อเสนอแนะด้านการลงทุน |
| **การตรวจสอบสัญญา** | [อัปโหลด contract.docx] ตรวจสอบสัญญานี้จากมุมมองของทนายความ ระบุข้อความเสี่ยง และแทรกความคิดเห็น |
| **การสร้างแบบจำลองทางการเงิน** | สร้างแบบจำลองพยากรณ์การเงิน SaaS สามปีในรูปแบบ Word รวมถึงการคาดการณ์รายได้ โครงสร้างต้นทุน และกระแสเงินสด |
| **การสรุปเนื้อหายาว** | สรุปบทความวิชาการ 30,000 คำนี้ให้เหลือบทสรุปสำหรับผู้บริหาร 5,000 คำในรูปแบบ Word |
| **การเปรียบเทียบหลายเวอร์ชัน** | [อัปโหลดสัญญา V1 และ V2] เปรียบเทียบเวอร์ชัน แสดงรายการการเปลี่ยนแปลงทั้งหมดพร้อมคำอธิบายผลกระทบ และส่งออกเป็น Word |
