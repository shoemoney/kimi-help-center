---
title: "การหลุดการเชื่อมต่อของ Tailscale"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="การหลุดการเชื่อมต่อของ Tailscale - ศูนย์ช่วยเหลือ Kimi"
  description="หาก Kimi Claw เชื่อมต่อไม่ได้หลังจากที่คุณตั้งค่า Tailscale สาเหตุมักมาจากการ override ค่า DNS เสมอ — Tailscale จะแทนที่การตั้งค่า DNS ของระบบ ซึ่ง..."
/>

# การหลุดการเชื่อมต่อของ Tailscale

หาก Kimi Claw เชื่อมต่อไม่ได้หลังจากที่คุณตั้งค่า Tailscale สาเหตุมักมาจากการ override ค่า DNS เสมอ — Tailscale จะแทนที่การตั้งค่า DNS ของระบบ ทำให้ Kimi Claw ไม่สามารถ resolve ชื่อโฮสต์ได้

## วิธีแก้ไข？

1. เปิด[หน้าตั้งค่า DNS ของ Tailscale](https://login.tailscale.com/admin/dns)
2. ที่หัวข้อ **Nameservers → Global nameservers** ให้คลิก **Add nameserver**
3. เพิ่มเซิร์ฟเวอร์ DNS สาธารณะเหล่านี้:
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. เปิดสวิตช์ **Override DNS Servers** ที่มุมขวาบน
5. รอประมาณ **30 วินาที** เพื่อให้การเชื่อมต่อกลับมาทำงานอีกครั้ง

## วิธีป้องกัน？

หากคุณกำลังจะตั้งค่า Tailscale ให้กำหนดค่า DNS ตามด้านบน**ก่อน**เปิดใช้งาน Tailscale วิธีนี้จะช่วยหลีกเลี่ยงการสะดุดของการเชื่อมต่อ
