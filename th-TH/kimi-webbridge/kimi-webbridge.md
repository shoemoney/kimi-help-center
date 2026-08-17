---
title: "แนะนำ Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="แนะนำ Kimi WebBridge - ศูนย์ช่วยเหลือ Kimi"
  description="Kimi WebBridge คือส่วนขยายเบราว์เซอร์ที่ออกแบบมาสำหรับ AI Agent ทำงานตรงในเบราว์เซอร์ Chrome หรือ Edge ของคุณ โดยใช้เซสชันการล็อกอินที่มีอยู่เพื่อให้ Agent โต้ตอบกับหน้าเว็บได้เหมือนมนุษย์"
  ogType="article"
/>

# แนะนำ Kimi WebBridge

Kimi WebBridge คือส่วนขยายเบราว์เซอร์ที่ออกแบบมาสำหรับ AI Agent ต่างจากโซลูชันการทำงานอัตโนมัติบนเบราว์เซอร์แบบคลาวด์ Kimi WebBridge ทำงานตรงในเบราว์เซอร์ Chrome หรือ Edge ของคุณ โดยใช้เซสชันการล็อกอินที่มีอยู่โดยอัตโนมัติ เพื่อให้ Agent โต้ตอบกับหน้าเว็บได้เหมือนมนุษย์

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "บทแนะนำการใช้งาน Kimi WebBridge",
    },
  ]}
/>

<Callout type="tip">
เราขอแนะนำให้ติดตั้ง Kimi WebBridge บนคอมพิวเตอร์ทำงานหลักของคุณ เพื่อประสบการณ์การทำงานอัตโนมัติบนเบราว์เซอร์ที่ดีที่สุด
</Callout>

<Callout type="info">
WebBridge ทำงานผ่านบริการบริดจ์ในเครื่องและส่วนขยายเบราว์เซอร์ การประมวลผลทั้งหมดเกิดขึ้นภายในอุปกรณ์ของคุณ สถานะการล็อกอินและเนื้อหาหน้าเว็บไม่เคยออกจากเครื่องของคุณ
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge Introduction"
/>

## ขั้นตอนที่ 1: ดาวน์โหลดส่วนขยาย Kimi WebBridge

คุณสามารถดาวน์โหลดได้ด้วยวิธีต่อไปนี้:

**วิธีที่ 1: ติดตั้งจากเว็บสโตร์**

- สำหรับผู้ใช้ Chrome: ไปที่ [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- สำหรับผู้ใช้ Edge: ไปที่ [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**วิธีที่ 2: ติดตั้งด้วยตนเอง**

หากคุณไม่สามารถเข้าถึงเว็บสโตร์ได้ คุณสามารถใช้วิธีติดตั้งด้วยตนเองได้

จากนั้นทำตามขั้นตอนสำหรับเบราว์เซอร์ของคุณ:

**Chrome:**

1. ดาวน์โหลดแพ็กเกจส่วนขยายจาก [เว็บไซต์ทางการของ Kimi WebBridge](https://www.kimi.com/features/webbridge)
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

1. ดาวน์โหลดแพ็กเกจส่วนขยายจาก [เว็บไซต์ทางการของ Kimi WebBridge](https://www.kimi.com/features/webbridge)
2. แตกไฟล์ที่ดาวน์โหลดมา
3. เปิด `edge://extensions/` ในแถบที่อยู่
4. เปิดใช้งาน "โหมดนักพัฒนา" ที่มุมซ้ายล่าง
5. คลิก "โหลดแบบแตกไฟล์แล้ว"
6. ในตัวเลือกไฟล์ ให้เลือกโฟลเดอร์ WebBridge ที่แตกไฟล์ไว้

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

หลังจากติดตั้งแล้ว คุณจะเห็น WebBridge ในรายการส่วนขยายของเบราว์เซอร์ เพื่อให้เข้าถึงได้ง่ายขึ้น เราขอแนะนำให้ปักหมุดไว้ที่แถบเครื่องมือของเบราว์เซอร์

## ขั้นตอนที่ 2: เลือกวิธีตั้งค่าและทำการกำหนดค่าให้เสร็จสมบูรณ์

### วิธีที่ 1: ใช้งานร่วมกับ Kimi Work เดสก์ท็อป

1. ดาวน์โหลด Kimi Work จาก [เว็บไซต์ทางการ](https://www.kimi.com/products/kimi-work)

2. เมื่อติดตั้งเสร็จแล้ว คุณสามารถส่งคำสั่งใน Kimi Work ได้ ตัวอย่างเช่น:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "ใช้ Kimi WebBridge เปิด Xiaohongshu และค้นหาโพสต์เกี่ยวกับการเปิดตัว Kimi K2.6",
    },
  ]}
/>

### วิธีที่ 2: จับคู่กับ Agent ในเครื่อง

รองรับ Claude Code, Codex, Cursor, Kimi Code, Hermes Claw และอื่น ๆ

1. ส่งคำสั่งต่อไปนี้ใน Agent โดยตรงเพื่อติดตั้ง WebBridge โดยอัตโนมัติ Agent จะดำเนินการตั้งค่าที่เหมาะสมตามระบบปฏิบัติการของคุณ

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
      content: "ใช้ Kimi WebBridge เปิด X.com และค้นหาโพสต์เกี่ยวกับการเปิดตัว Kimi K2.6",
    },
  ]}
/>
