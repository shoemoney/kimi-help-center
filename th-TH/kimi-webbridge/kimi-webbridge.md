---
title: "แนะนำ ส่วนขยายเบราว์เซอร์ Kimi"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="แนะนำ ส่วนขยายเบราว์เซอร์ Kimi - ศูนย์ช่วยเหลือ Kimi"
  description="ส่วนขยายเบราว์เซอร์ Kimi (เดิมคือ Kimi WebBridge) เป็นปลั๊กอินเบราว์เซอร์สำหรับ AI Agent ที่เปิดหน้าเว็บ คลิกปุ่ม กรอกแบบฟอร์ม และดึงข้อมูลได้"
  ogType="article"
/>

# แนะนำ ส่วนขยายเบราว์เซอร์ Kimi

ส่วนขยายเบราว์เซอร์ Kimi (เดิมคือ Kimi WebBridge) เป็นปลั๊กอินเบราว์เซอร์สำหรับ AI Agent ที่สามารถเปิดหน้าเว็บ คลิกปุ่ม กรอกแบบฟอร์ม และดึงข้อมูล เพื่อให้ Agent ทำงานเว็บที่น่าเบื่อได้โดยอัตโนมัติเหมือนมนุษย์ คุณยังสามารถแยกหน้าเว็บที่ใช้บ่อยให้เป็น CLI และเปลี่ยนการดำเนินการบนเว็บที่บันทึกไว้ให้เป็น Skill เพื่อให้ Agent นำกลับมาใช้ซ้ำได้ทุกเมื่อ

## สองวิธีในการใช้งาน

ส่วนขยายเบราว์เซอร์ Kimi มีวิธีการใช้งานสองรูปแบบ:

- **แถบด้านข้างของเบราว์เซอร์**: คลิกไอคอน Kimi ในแถบเครื่องมือเพื่อเปิดแถบด้านข้าง จากนั้นเข้าสู่ระบบด้วยบัญชีสมาชิก Kimi ก็สามารถสนทนาได้โดยตรงและให้ Kimi จัดการหน้าเว็บปัจจุบันแทนคุณ
- **การควบคุมจากระยะไกลโดย Local Agent**: ให้ AI Agent เช่น Kimi Work หรือ Claude Code ขับเคลื่อนส่วนขยายจากระยะไกลเพื่อทำงานเว็บโดยอัตโนมัติ

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "บทแนะนำการใช้งาน ส่วนขยายเบราว์เซอร์ Kimi",
    },
  ]}
/>

## ดาวน์โหลดและติดตั้ง

### ขั้นตอนที่ 1: ดาวน์โหลด ส่วนขยายเบราว์เซอร์ Kimi

คุณสามารถดาวน์โหลดได้ด้วยวิธีต่อไปนี้:

**วิธีที่ 1: ติดตั้งจากเว็บสโตร์**

- สำหรับผู้ใช้ Chrome: ไปที่ [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- สำหรับผู้ใช้ Edge: ไปที่ [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**วิธีที่ 2: ติดตั้งด้วยตนเอง**

หากคุณไม่สามารถเข้าถึงเว็บสโตร์ได้ คุณสามารถใช้วิธีติดตั้งด้วยตนเองได้

จากนั้นทำตามขั้นตอนสำหรับเบราว์เซอร์ของคุณ:

**Chrome:**

1. ดาวน์โหลดแพ็กเกจส่วนขยายจาก [เว็บไซต์ทางการของ ส่วนขยายเบราว์เซอร์ Kimi](https://www.kimi.com/features/webbridge)
2. แตกไฟล์ที่ดาวน์โหลดมา
3. เปิด `chrome://extensions/` ในแถบที่อยู่
4. เปิดใช้งาน "โหมดนักพัฒนา" ที่มุมขวาบน
5. คลิก "โหลดแบบแตกไฟล์แล้ว"
6. ในตัวเลือกไฟล์ ให้เลือกโฟลเดอร์ WebBridge ที่แตกไฟล์ไว้

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. ดาวน์โหลดแพ็กเกจส่วนขยายจาก [เว็บไซต์ทางการของ ส่วนขยายเบราว์เซอร์ Kimi](https://www.kimi.com/features/webbridge)
2. แตกไฟล์ที่ดาวน์โหลดมา
3. เปิด `edge://extensions/` ในแถบที่อยู่
4. เปิดใช้งาน "โหมดนักพัฒนา" ที่มุมซ้ายล่าง
5. คลิก "โหลดแบบแตกไฟล์แล้ว"
6. ในตัวเลือกไฟล์ ให้เลือกโฟลเดอร์ WebBridge ที่แตกไฟล์ไว้

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

หลังจากติดตั้งแล้ว คุณจะเห็น ส่วนขยายเบราว์เซอร์ Kimi ในรายการส่วนขยายของเบราว์เซอร์ เพื่อให้เข้าถึงได้ง่ายขึ้น เราขอแนะนำให้ปักหมุดไว้ที่แถบเครื่องมือของเบราว์เซอร์

### ขั้นตอนที่ 2: เลือกวิธีตั้งค่าและทำการกำหนดค่าให้เสร็จสมบูรณ์

#### วิธีที่ 1: ใช้งานร่วมกับ Kimi Work เดสก์ท็อป

1. ดาวน์โหลด Kimi Work จาก [เว็บไซต์ทางการ](https://www.kimi.com/products/kimi-work)

2. เมื่อติดตั้งเสร็จแล้ว คุณสามารถเปิดแถบข้างของส่วนขยายและส่งคำสั่งได้ ตัวอย่างเช่น:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "ใช้ ส่วนขยายเบราว์เซอร์ Kimi เปิด Xiaohongshu และค้นหาโพสต์เกี่ยวกับการเปิดตัว Kimi K3",
    },
  ]}
/>

#### วิธีที่ 2: จับคู่กับ Agent ในเครื่อง

รองรับ Claude Code, Codex, Cursor, Kimi Code, Hermes Claw และอื่น ๆ

1. ส่งคำสั่งต่อไปนี้ใน Agent โดยตรงเพื่อติดตั้ง ส่วนขยายเบราว์เซอร์ Kimi โดยอัตโนมัติ Agent จะดำเนินการตั้งค่าที่เหมาะสมตามระบบปฏิบัติการของคุณ

หากคุณเป็นผู้ใช้ macOS ให้ใช้คำสั่งด้านล่าง:

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

หากคุณเป็นผู้ใช้ Windows ให้ใช้คำสั่งด้านล่าง:

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. เริ่มใช้งาน

เมื่อเชื่อมต่อส่วนขยายแล้ว คุณสามารถส่งคำสั่งได้

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "ใช้ ส่วนขยายเบราว์เซอร์ Kimi เปิด X.com และค้นหาโพสต์เกี่ยวกับการเปิดตัว Kimi K3",
    },
  ]}
/>
