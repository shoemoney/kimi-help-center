---
title: "การผสานรวมกับ IDE"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "ผสานรวม Kimi Code CLI เข้ากับ IDE ของคุณผ่าน ACP"
---

<SeoMeta
  title="การผสานรวมกับ IDE - Kimi Help Center"
  description="ผสานรวม Kimi Code CLI เข้ากับ IDE ของคุณผ่าน Agent Client Protocol (ACP) พร้อมคู่มือการตั้งค่าสำหรับ Zed, JetBrains IDE และ Paseo รวมถึงวิธีแก้ปัญหา"
/>

# การใช้ Kimi Code CLI ใน IDE

<Callout type="info">
Kimi Code CLI รองรับการผสานรวมเข้ากับ IDE ผ่าน [Agent Client Protocol (ACP)](https://agentclientprotocol.com/) ช่วยให้คุณใช้การเขียนโค้ดด้วยความช่วยเหลือจาก AI ได้โดยตรงภายในเอดิเตอร์ของคุณ
</Callout>

## สิ่งที่ต้องเตรียม

ก่อนตั้งค่า IDE ของคุณ ตรวจสอบให้แน่ใจว่าได้ติดตั้ง Kimi Code CLI และตั้งค่าการเข้าสู่ระบบเรียบร้อยแล้ว

อะแดปเตอร์ ACP จะเปิดให้ใช้งานในรูปแบบคำสั่งย่อย `kimi acp` โดย IDE จะเปิดมันขึ้นมาเป็นโปรเซสลูกและสื่อสารผ่าน stdin/stdout ด้วย JSON-RPC ทุกครั้งที่ IDE สร้างเซสชัน CLI จะนำสถานะการยืนยันตัวตนที่มีอยู่กลับมาใช้ใหม่ — ไม่จำเป็นต้องเข้าสู่ระบบซ้ำอีก

<Callout type="tip">
โปรเซสลูกที่เปิดขึ้นจาก GUI ของ IDE บน macOS โดยทั่วไปจะ**ไม่**สืบทอด `PATH` ของเชลล์เทอร์มินัล หาก `kimi` ไม่ได้อยู่ในไดเรกทอรีของระบบอย่าง `/usr/local/bin` ให้ใช้พาธแบบเต็มในการตั้งค่า IDE ของคุณ รันคำสั่ง `which kimi` ในเทอร์มินัลเพื่อค้นหาพาธที่ใช้งานอยู่
</Callout>

## การใช้ Kimi Code CLI ใน Zed

[Zed](https://zed.dev/) เป็นเอดิเตอร์รุ่นใหม่ที่รองรับ ACP มาในตัว

เพิ่มข้อความต่อไปนี้ลงในไฟล์ตั้งค่าของ Zed ที่ `~/.config/zed/settings.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

ฟิลด์การตั้งค่า:

- `type`: ค่าคงที่คือ `"custom"`
- `command`: พาธไปยังไฟล์ปฏิบัติการของ Kimi Code CLI หาก `kimi` ไม่ได้อยู่ใน `PATH` ให้ใช้พาธแบบเต็ม (เช่น `/Users/you/.local/bin/kimi`)
- `args`: อาร์กิวเมนต์สำหรับการเริ่มต้น คำสั่งย่อย `acp` จะสลับ CLI ให้เข้าสู่โหมด ACP
- `env`: ตัวแปรสภาพแวดล้อมเพิ่มเติม โดยปกติให้เว้นว่างไว้ Zed จะใส่สภาพแวดล้อมเริ่มต้นให้โดยอัตโนมัติ

หลังจากบันทึกแล้ว ให้เปิดการสนทนาใหม่ในแผง Agent ของ Zed แล้วมันจะเปิดโปรเซสย่อย ACP ของ `Kimi Code CLI` ขึ้นมาโดยใช้การตั้งค่าข้างต้น เซิร์ฟเวอร์ MCP ที่ประกาศไว้ในส่วน `agent_servers` ของ Zed จะถูกส่งต่อไปยังฝั่ง kimi ผ่านโปรโตคอล ACP ด้วยเช่นกัน

## การใช้ Kimi Code CLI ใน JetBrains IDE

JetBrains IDE (IntelliJ IDEA, PyCharm, WebStorm และอื่น ๆ) รองรับ ACP ผ่านปลั๊กอิน AI chat

หากคุณไม่มีการสมัครสมาชิก JetBrains AI คุณสามารถเปิดใช้งาน `llm.enable.mock.response` ใน Registry เพื่อเข้าถึงแผง AI chat ในกรณีที่ใช้เฉพาะ ACP ได้ กด Shift สองครั้งแล้วค้นหา "Registry" เพื่อเปิดมันขึ้นมา

ในเมนูของแผง AI chat ให้คลิก **Configure ACP agents** แล้วเพิ่มการตั้งค่าต่อไปนี้:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains เข้มงวดกับฟิลด์ `command` — ให้ใช้**พาธแบบเต็ม**เสมอ ซึ่งคุณสามารถหาได้โดยรันคำสั่ง `which kimi` ในเทอร์มินัล หลังจากบันทึกแล้ว `Kimi Code CLI` จะปรากฏในตัวเลือก agent ของ AI chat

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## การใช้ Kimi Code CLI ใน Paseo

[Paseo](https://paseo.sh/) เป็นตัวจัดการ (orchestrator) แบบโฮสต์เองที่รันและควบคุมดูแล agent CLI จากเดสก์ท็อป เว็บ และมือถือของคุณ มันเชื่อมต่อกับ Kimi Code CLI ผ่าน ACP เช่นเดียวกับที่ IDE ทำ

เลือก **Kimi Code CLI** จากแคตตาล็อกผู้ให้บริการ ACP ที่มีมาในตัวของ Paseo หรือเพิ่มผู้ให้บริการแบบกำหนดเองใน `~/.paseo/config.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

อะแดปเตอร์ ACP ทั่วไปของ Paseo จะไม่ดำเนินการตามขั้นตอนการเข้าสู่ระบบ ดังนั้นให้เข้าสู่ระบบผ่านเทอร์มินัลให้เสร็จก่อน (ดู [สิ่งที่ต้องเตรียม](#prerequisites)) — มิฉะนั้นการสร้างเซสชันจะล้มเหลวพร้อมข้อความ `Authentication required`

## การแก้ปัญหา

- **เซสชันหลุดในทันที / IDE แสดง "agent exited"**: โดยทั่วไปมักเกิดจากพาธ `command` ที่ผิดหรือยังไม่ได้เข้าสู่ระบบ ให้รัน `kimi acp` ในเทอร์มินัลก่อนเพื่อตรวจสอบ — หากมันค้างรอ stdin แสดงว่าตัว CLI เองไม่มีปัญหาและปัญหาอยู่ที่การตั้งค่า IDE แต่หากมันออกในทันทีพร้อมข้อผิดพลาด ให้ทำตามข้อความแสดงข้อผิดพลาดนั้น (ส่วนใหญ่มักต้องรัน `/login`)
- **IDE แสดง "auth required"**: CLI ไม่มี token การยืนยันตัวตนที่ใช้งานได้ ให้ออกจาก IDE รัน `kimi` ในเทอร์มินัลเพื่อเข้าสู่ระบบให้เสร็จ จากนั้นรีสตาร์ท IDE
- **มองไม่เห็นเครื่องมือ MCP**: ตรวจสอบตารางความสามารถของ `kimi acp` เพื่อยืนยันว่าประเภทการรับส่งข้อมูล (transport) ของ MCP ที่ตั้งค่าไว้ใน IDE ของคุณได้รับการรองรับ ปัจจุบันอะแดปเตอร์ ACP ของ Kimi Code CLI รองรับการรับส่งข้อมูลแบบ `http` และ `stdio` ส่วนประเภท `sse` และ `acp` จะถูกตัดทิ้งไปอย่างเงียบ ๆ และจะมีการเขียนคำเตือนลงในล็อก
