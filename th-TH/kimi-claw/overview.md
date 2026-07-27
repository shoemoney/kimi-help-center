---
title: "ภาพรวม Kimi Claw"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "ติดตั้งและจัดการผู้ช่วย AI Kimi Claw ของคุณเองบนคลาวด์ได้ด้วยการตั้งค่าเพียงคลิกเดียว"
---

<SeoMeta
  title="ภาพรวม Kimi Claw - ศูนย์ช่วยเหลือ Kimi"
  description="ติดตั้งและจัดการผู้ช่วย AI Kimi Claw ของคุณเองบนคลาวด์ได้ด้วยการตั้งค่าเพียงคลิกเดียว"
/>

# ภาพรวมผลิตภัณฑ์

<Callout type="info">
**Kimi Claw** คือผู้ช่วย AI ที่มีบุคลิกเฉพาะตัวและความจำระยะยาวที่คงอยู่ตลอด เมื่อใช้ Kimi Claw คุณสามารถสร้าง ติดตั้ง และพูดคุยกับ OpenClaw ของคุณเองได้โดยตรงจาก Kimi
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## ติดตั้งบนคลาวด์ด้วยคลิกเดียว

ยังไม่มี OpenClaw ใช่ไหม? ไปที่ [kimi.com/bot](https://kimi.com/bot) เพื่อสร้างขึ้นมาได้เลย Kimi จะติดตั้งบนคลาวด์ให้คุณเอง ไม่ต้องซื้อเซิร์ฟเวอร์ ไม่ต้องตั้งค่าผ่านบรรทัดคำสั่ง

<Callout type="warning">

- การติดตั้งด้วยคลิกเดียวต้องใช้แพ็กเกจ **Allegretto ขึ้นไป** [แพ็กเกจสมาชิก](https://www.kimi.com/membership/pricing)

</Callout>

- Kimi จะกำหนดค่าโมเดล **Kimi K2.6** ให้โดยอัตโนมัติ และเชื่อมโยงกับ **เครดิตสิทธิประโยชน์สมาชิก Kimi** โดยไม่ต้องตั้งค่า API เพิ่มเติม พร้อมเปิดใช้งาน Kimi Web Search เพื่อให้ AI ค้นหาข้อมูลบนอินเทอร์เน็ตได้
- หากต้องการเปลี่ยนเป็นโมเดล **Kimi K3** สามารถปรับการตั้งค่าโมเดลในการตั้งค่า Kimi Claw ได้ หรือดูคำแนะนำการตั้งค่าขั้นสูง
- Kimi Claw สามารถนำไปใช้งานบน Telegram และแพลตฟอร์มแชตอื่น ๆ ได้โดยตรง

## เริ่มต้นใช้งาน

1. ลงชื่อเข้าใช้ที่ [kimi.com/bot](https://kimi.com/bot)
2. คลิก **สร้าง** เพื่อเปิดใช้งาน Kimi Claw ตัวใหม่
3. รอให้การตั้งค่าอัตโนมัติเสร็จสมบูรณ์ (โดยทั่วไปใช้เวลาไม่กี่นาที)
4. ปรับแต่งชื่อและบุคลิกของ Kimi Claw ของคุณ
5. ที่ **การตั้งค่า → ช่องทางแชต** ให้เชื่อมต่อแพลตฟอร์มที่คุณต้องการใช้งาน (เช่น Telegram)

## เชื่อมต่อ OpenClaw ที่มีอยู่เดิม

หากคุณโฮสต์ OpenClaw ไว้เองอยู่แล้ว คุณสามารถเชื่อมต่อเข้ากับ Kimi ได้โดยติดตั้งปลั๊กอิน Kimi:

1. ไปที่ [kimi.com/bot](https://kimi.com/bot) แล้วเลือก **เชื่อมต่อ OpenClaw ที่มีอยู่**
2. ทำตามคำแนะนำเพื่อติดตั้งปลั๊กอินบนอุปกรณ์ OpenClaw ของคุณ
3. เมื่อเชื่อมต่อแล้ว คุณสามารถพูดคุยกับ OpenClaw ผ่าน Kimi ได้

<a id="switch-to-k3"></a>
## เปลี่ยนเป็นโมเดล Kimi K3

Kimi Claw ใช้โมเดล Kimi K2.6 เป็นค่าเริ่มต้น หากคุณต้องการใช้งาน Kimi K3 สามารถใช้คำสั่งต่อไปนี้เพื่อแก้ไขการตั้งค่า OpenClaw ในเครื่องของคุณได้โดยอัตโนมัติ

```bash
# 1. Back up the current config
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. Add the k3 model and switch the default model (example uses jq)
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. Restart OpenClaw
openclaw gateway restart

# 4. Verify
session_status
```

หลังจากรันคำสั่ง ให้ตรวจสอบว่าในผลลัพธ์ของ `session_status` แสดง `model` เป็น `kimi-coding/k3` และขีดจำกัด `context` เป็น `1.0m`

<Callout type="warning">
เส้นทางไฟล์การตั้งค่าอาจแตกต่างกันไปขึ้นอยู่กับวิธีการติดตั้ง กรุณาแทนที่ `/root/.openclaw/openclaw.json` ตามสถานการณ์จริง โปรดสำรองข้อมูลก่อนดำเนินการแก้ไข
</Callout>
