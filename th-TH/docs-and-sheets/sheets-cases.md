---
title: "กรณีการใช้งานและคลังพรอมป์ของ Kimi Sheets"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="กรณีการใช้งานและคลังพรอมป์ของ Kimi Sheets - Kimi Help Center"
  description="ตัวอย่างกรณีการใช้งานและพรอมป์สำหรับ Kimi Sheets — ตั้งแต่การประเมินมูลค่าทางการเงินไปจนถึงการสร้างสตอรีบอร์ด"
/>

# กรณีการใช้งาน Kimi Sheets

<Callout type="info">
ตัวอย่างกรณีการใช้งานและพรอมป์สำหรับ Kimi Sheets — ตั้งแต่การประเมินมูลค่าทางการเงินไปจนถึงการสร้างสตอรีบอร์ด
</Callout>

## การประเมินมูลค่าทางการเงิน

Kimi ทำหน้าที่เสมือนนักวิเคราะห์การเงิน รวบรวมข้อมูลทางการเงินจริง สร้างแบบจำลองประเมินมูลค่าแบบ DCF และทำการประเมินมูลค่าบริษัทแบบจำลอง

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**ตัวอย่างพรอมป์**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Perform a DCF valuation of XX Healthcare. Put the entire valuation process and data\ninto an Excel spreadsheet, cite data sources, provide the reasoning behind estimated\nfigures such as market size, growth rates, and market share, and incorporate macro\nenvironment analysis.",
    },
  ]}
/>

## การสร้างสตอรีบอร์ด

Kimi ทำหน้าที่เสมือนนักออกแบบสตอรีบอร์ด สร้างสคริปต์สตอรีบอร์ดวิดีโอในรูปแบบ Excel ที่ครอบคลุมความยาว คำบรรยายช็อต เสียงบรรยาย เอฟเฟกต์เสียง และเฟรมอ้างอิง

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="Transcript"
/>

**ตัวอย่างพรอมป์**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Create a storyboard script in Excel for a 3D promotional video about Kimi AI's new\nupgrade — OK Computer — which supports generating and editing Office documents\n(e.g., long-form thesis formatting in Word, data modeling and analysis in Excel,\nautomatic slide generation).\n\nThe Excel should include:\nColumn A: Sequence number (1-20)\nColumn B: Cumulative duration (seconds)\nColumn C: Shot duration (seconds)\nColumn D: Shot description (3D / camera movement)\nColumn E: Narration/text (use different background colors to distinguish narration\nfrom on-screen text)\nColumn F: Sound effects/BGM (use different font colors to distinguish)\nColumn G: Storyboard frames (generate an image for each shot — maintain visual\nconsistency using the classic black-and-white line sketch style)\n\nPlease design the creative outline, script, and storyboards independently, then\ngenerate frames to complete this script, presented in a polished Excel format.",
    },
  ]}
/>

## สถานการณ์เพิ่มเติมและตัวอย่างพรอมป์

| สถานการณ์ | ตัวอย่างพรอมป์ |
|------|-----------|
| การสร้างแบบจำลองทางการเงิน | ทำการประเมินมูลค่าแบบ DCF ของบริษัท XX — ใส่กระบวนการและข้อมูลทั้งหมดลงใน Excel อ้างอิงแหล่งที่มา และอธิบายเหตุผลเบื้องหลังสมมติฐานสำคัญ เช่น อัตราการเติบโต |
| การเปรียบเทียบข้อมูลอุตสาหกรรม | ศึกษาบริษัทรถยนต์ไฟฟ้าในประเทศ 20 อันดับแรก — แสดงมูลค่าตลาด ยอดขายปี 2025 รุ่นเรือธง และข่าวล่าสุดในตารางเปรียบเทียบ |
| การจัดทำรายการเอกสารวิชาการ | ค้นหางานวิจัยเกี่ยวกับการเพิ่มประสิทธิภาพการอนุมานของ LLM ในช่วงสามเดือนที่ผ่านมา — จัดเรียงลงใน Excel พร้อมชื่อเรื่อง ผู้เขียน วิธีการหลัก และผลงานสำคัญ |
| การรวมหลายชีต | [อัปโหลดไฟล์ Excel ยอดขายรายเดือน 12 ไฟล์] รวม 12 ชีตนี้เป็นสรุปประจำปี คำนวณอัตราการเติบโตเทียบเดือนต่อเดือน และใช้สูตรเชื่อมโยงข้ามชีต |
| การดึงข้อมูลลูกค้าเป้าหมาย | [อัปโหลด PDF/รูปภาพงานแสดงสินค้า] ดึงข้อมูลผู้แสดงสินค้าทั้งหมดและจัดเรียงเป็นไฟล์ Excel ลูกค้าเป้าหมายฝ่ายขาย 1,000 แถว พร้อมชื่อบริษัท ข้อมูลติดต่อ และหมวดหมู่สินค้า |
| การบริหารโครงการ | สร้างไฟล์ Excel บริหารโครงการแบบ PMO พร้อมรายการงาน ผู้รับผิดชอบ สถานะความคืบหน้า แผนภูมิแกนต์ และการเชื่อมโยงข้ามชีต |
| การแสดงข้อมูลด้วยภาพ | แปลงไฟล์ Excel ข้อมูลยอดขายนี้เป็นแดชบอร์ดภาพ พร้อมกราฟเส้นแนวโน้ม กราฟการกระจายตามภูมิภาค และกราฟวงแหวนแสดงอัตราความสำเร็จ |
