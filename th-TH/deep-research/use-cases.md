---
title: "กรณีการใช้งานและคลังพรอมต์ Deep Research"
slug: "deep-research-use-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="กรณีการใช้งานและคลังพรอมต์ Deep Research - ศูนย์ช่วยเหลือ Kimi"
  description="ผมเป็นนักวิเคราะห์หลักทรัพย์มืออาชีพ กรุณาช่วยวิเคราะห์เชิงลึกเกี่ยวกับ Pop Mart ในมุมมองด้านการเงิน การวิเคราะห์ควรครอบคลุมแต่ไม่จำกัดเพียง..."
/>

# กรณีการใช้งานและคลังพรอมต์ Deep Research

## ภาพรวมกรณีการใช้งาน

| สถานการณ์ | ตัวอย่างพรอมต์ |
|:---|:---|
| การวิจัยอุตสาหกรรม / ตลาด | วิจัยภูมิทัศน์การแข่งขันและผู้เล่นรายสำคัญในอุตสาหกรรมหุ่นยนต์ฮิวแมนนอยด์ภายในประเทศปี 2025 |
| การวิเคราะห์คู่แข่ง | เปรียบเทียบและวิเคราะห์ความแตกต่างด้านกลยุทธ์ผลิตภัณฑ์ระหว่าง Notion กับ Obsidian |
| การตรวจสอบการลงทุน | รวบรวมรอบการระดมทุนและการเปลี่ยนแปลงมูลค่ากิจการของบริษัท LLM รายสำคัญในช่วงสองปีที่ผ่านมา |
| การทบทวนวรรณกรรมวิชาการ | สืบค้นพัฒนาการของเทคโนโลยี RAG และทิศทางการปรับปรุงหลักในปัจจุบัน |
| การวิเคราะห์นโยบาย | วิเคราะห์ผลกระทบของระเบียบความปลอดภัยข้อมูลฉบับล่าสุดต่อบริษัทที่ขยายธุรกิจไปต่างประเทศ |
| การตัดสินใจส่วนตัว | อยากซื้อแล็ปท็อปสำหรับตัดต่อวิดีโอ — ช่วยวิจัยตัวเลือกชั้นนำให้หน่อย |

## การวิจัยอุตสาหกรรม

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I am a professional securities analyst. Please help me conduct an in-depth analysis of Pop Mart from a financial perspective. The analysis should include but not be limited to: 1. Company overview: business model, competitive moat, and industry position; 2. Industry overview, upstream/downstream dynamics, and future development; 3. Financial data: revenue and profit trends, influencing factors, balance sheet and cash flow; 4. Compliance record — any regulatory penalties, specific grounds, and associated risks; 5. Technical analysis: price trends, indicators, and support/resistance levels; 6. Market sentiment: ratings, public sentiment, and news impact; 7. Competitive comparison: key competitors, respective market shares and financial metrics; 8. Valuation and health: PE/PB/DCF valuation and reasonableness assessment; 9. Key risks: industry competition, policy, geopolitical, etc.",
    },
  ]}
/>

## การวิเคราะห์คู่แข่ง

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Compare and analyze the product strategy differences between Notion and Obsidian",
    },
  ]}
/>

## การตรวจสอบการลงทุน

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Conduct deep research on [Company Name]:\n1. Business model \u0026 core moat (competitive advantages, technology/channel edge, competitive landscape);\n2. Financial health (revenue structure, profitability, cash flow, key risk areas);\n3. Team \u0026 governance (founder background, equity structure, key talent);\n4. Market \u0026 policy (TAM/SAM/SOM, industry growth rate, regulatory environment);\n5. Risk identification (business, legal, exit barriers);\n6. Valuation reference (comparable companies, historical funding rounds, reasonable range).\nRequirements: Cite data sources, mark key conclusions with ⭐, list disputed points separately.",
    },
  ]}
/>

[ดูผลลัพธ์]（https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b）

## การวิจัยด้านกฎหมายและระเบียบข้อบังคับ

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I'm an in-house lawyer in a Chinese robotic company, and the management is considering expanding into Southeast Asian countries. However, I'm not quite confident about the data and privacy requirements in those countries. Could you help me list the names of the data and privacy laws of Southeast Asian countries (on a country-by-country basis), and preferably provide a brief summary and key takeaways of those laws?",
    },
  ]}
/>

## การทบทวนวิชาการ 

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I am a graduate student in communications conducting academic research on the \"digital divide.\" Please perform a systematic deep research. I need at least 15 core journal articles in both Chinese and English. Provide the definition of this concept, literature from the past 3–5 years, and 3 potential sub-topics for further research. Focus on the latest studies and policy documents since 2020, with particular attention to new research dynamics following the AI boom in 2023.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Create a lesson plan for \"Spring\" for 7th-grade students",
    },
  ]}
/>

<Frames
  src="./images/use-cases/academic-review.png"
  alt="การทบทวนวิชาการ"
/>

## การวิเคราะห์นโยบาย

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "As a policy analyst, conduct a deep analysis of [policy name/document], covering the background and core objectives.\nList the applicable entities and substantive changes of key provisions, the specific compliance requirements and timelines for enterprises, and a forecast of future policy direction.\nRequirements: Cite official text with sources, highlight key changes, discuss controversial clauses separately, and keep the total under 2,000 words.",
    },
  ]}
/>

## การตัดสินใจส่วนตัว (การวางแผนการเดินทาง / การเปรียบเทียบสินค้า)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I want to take a road trip through northern Xinjiang. Please create a 5-day, 4-night itinerary covering food, activities, and lodging. Our family of four includes myself, my spouse, a 6-year-old boy, and a 4-year-old girl. The kids are active and enjoy walking, but please avoid any particularly dangerous routes.",
    },
  ]}
/>

## ตัวอย่างพรอมต์เพิ่มเติม

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Compile 2025 funding events in the robotics industry, sorted by month, noting lead investors and funding trends. Provide citation links.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Compare the pros and cons of iPhone 16 vs. iPhone 17 across photography, performance, and battery life, citing real user feedback from the past year.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I'm a college student looking for a job and starting from scratch in LLM development. Help me plan a learning path for this field and provide the corresponding knowledge points.",
    },
  ]}
/>
