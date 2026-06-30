---
title: "กรณีการใช้งานทั่วไป"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="กรณีการใช้งานทั่วไป - ศูนย์ช่วยเหลือ Kimi"
  description="นี่คือสถานการณ์ทั่วไปสำหรับการใช้ Kimi Code CLI ในการพัฒนาประจำวัน พร้อมตัวอย่างพรอมต์สำหรับอ้างอิงในแต่ละกรณี"
/>

# กรณีการใช้งานทั่วไป

นี่คือสถานการณ์ทั่วไปสำหรับการใช้ Kimi Code CLI ในการพัฒนาประจำวัน พร้อมตัวอย่างพรอมต์สำหรับอ้างอิงในแต่ละกรณี

## พัฒนาฟีเจอร์ใหม่

อธิบายความต้องการของคุณด้วยภาษาธรรมชาติ แล้ว AI จะอ่านโค้ดที่เกี่ยวข้อง เขียนโค้ดใหม่ และตรวจสอบผลลัพธ์ให้โดยอัตโนมัติ

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "เพิ่มฟีเจอร์เรียงลำดับตามวันที่ลงทะเบียนในหน้ารายชื่อผู้ใช้ โดยต้องแก้ไขทั้งฝั่งหน้าบ้านและหลังบ้าน",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "สร้างมิดเดิลแวร์จำกัดอัตราการเรียกใช้ด้วยอัลกอริทึม token bucket โดยจำกัดให้แต่ละ IP เรียกได้ไม่เกิน 60 ครั้งต่อนาที",
    },
  ]}
/>

## แก้ไขบั๊ก

วางข้อความข้อผิดพลาดให้ AI โดยตรง แล้วระบบจะระบุต้นตอของปัญหาและเสนอวิธีแก้ไขให้อัตโนมัติ

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "หลังจากรัน npm test ฉันเจอข้อผิดพลาดนี้ ช่วยแก้ให้หน่อย:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "ไปป์ไลน์ CI ล้มเหลวที่ขั้นตอน lint นี่คือล็อก: ... ช่วยแก้ให้หน่อย",
    },
  ]}
/>

## ทำความเข้าใจโปรเจกต์

เมื่อคุณเพิ่งเริ่มต้นกับโปรเจกต์ใหม่หรือต้องการทำความเข้าใจโค้ดส่วนใดส่วนหนึ่ง ก็แค่ถามได้เลย

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "สถาปัตยกรรมโดยรวมของโปรเจกต์นี้เป็นอย่างไร มีโมดูลหลักอะไรบ้าง",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/auth/middleware.ts ทำหน้าที่อะไร และกระบวนการยืนยันตัวตนทำงานอย่างไร",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "อธิบายวิธีจัดการ database migration ในโปรเจกต์นี้",
    },
  ]}
/>

## ทำงานเล็ก ๆ ให้เป็นอัตโนมัติ

เหมาะสำหรับการแก้ไขโค้ดเป็นชุด เพิ่มเอกสารประกอบ สร้างเทสต์ และงานที่ต้องทำซ้ำ ๆ อื่น ๆ

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "เพิ่มคอมเมนต์ JSDoc ให้กับฟังก์ชันที่ export ทั้งหมดในไดเรกทอรี src/utils/",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "สร้าง unit test สำหรับเมธอด public ทั้งหมดของคลาส UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "แทนที่การประกาศ var ทั้งหมดในโปรเจกต์ด้วย const หรือ let",
    },
  ]}
/>

## งานทั่วไป

Kimi Code CLI ไม่ได้จำกัดอยู่แค่การเขียนโค้ด แต่ยังรับมือกับการค้นคว้าวิจัย การวิเคราะห์ข้อมูล การจัดการไฟล์จำนวนมาก และอื่น ๆ ได้อีกด้วย

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "ค้นคว้าไลบรารี ORM ของ Node.js ที่เป็นกระแสหลักในปัจจุบัน และเปรียบเทียบข้อดีข้อเสีย",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "วิเคราะห์ access log ในช่วง 7 วันที่ผ่านมาในไดเรกทอรี logs/ และแสดงเส้นทางคำขอ 10 อันดับแรก",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "รวมไฟล์ CSV ทั้งหมดในไดเรกทอรี data/ เป็นไฟล์เดียวและลบแถวที่ซ้ำกันออก",
    },
  ]}
/>
