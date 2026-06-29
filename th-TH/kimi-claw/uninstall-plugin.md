---
title: "ถอนการติดตั้งปลั๊กอิน Kimi"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="ถอนการติดตั้งปลั๊กอิน Kimi - ศูนย์ช่วยเหลือ Kimi"
  description="ใช้ได้เฉพาะกับอุปกรณ์ OpenClaw ที่คุณโฮสต์เองและเชื่อมต่อกับ Kimi เท่านั้น โปรดตรวจสอบให้แน่ใจว่าคุณกำลังรันคำสั่งนี้บนเครื่องของคุณเอง"
/>

# ถอนการติดตั้งปลั๊กอิน Kimi

<Callout type="warning">
**ใช้ได้เฉพาะกับอุปกรณ์ OpenClaw ที่คุณโฮสต์เอง** และเชื่อมต่อกับ Kimi เท่านั้น โปรดตรวจสอบให้แน่ใจว่าคุณกำลังรันคำสั่งนี้บนเครื่องของคุณเอง
</Callout>

## คำสั่งถอนการติดตั้ง

รันคำสั่งต่อไปนี้บนอุปกรณ์ที่ติดตั้ง OpenClaw อยู่:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash \u003c(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## คำเตือนสำคัญ

<Callout type="warning">
**ห้ามรันคำสั่งนี้บนอินสแตนซ์ Kimi Claw ที่ติดตั้งแบบคลิกเดียวเด็ดขาด**
การรันสคริปต์ถอนการติดตั้งบน Kimi Claw ที่ติดตั้งบนคลาวด์จะ**ตัดการเชื่อมต่ออย่างถาวร**โดยไม่สามารถกู้คืนได้ คำสั่งนี้มีไว้สำหรับการลบปลั๊กอิน Kimi ออกจากอุปกรณ์ OpenClaw ที่โฮสต์เองเท่านั้น
</Callout>
