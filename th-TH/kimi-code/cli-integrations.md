---
title: "การผสานรวมเครื่องมือ"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="การผสานรวมเครื่องมือ - ศูนย์ช่วยเหลือ Kimi"
  description="นอกเหนือจากการผสานรวมกับ IDE แล้ว Kimi Code CLI ยังสามารถผสานรวมเข้ากับเครื่องมืออื่น ๆ เพื่อยกระดับเวิร์กโฟลว์บนเทอร์มินัลของคุณได้"
/>

# การผสานรวมเครื่องมือ

<Callout type="info">
นอกเหนือจากการผสานรวมกับ IDE แล้ว Kimi Code CLI ยังสามารถผสานรวมเข้ากับเครื่องมืออื่น ๆ เพื่อยกระดับเวิร์กโฟลว์บนเทอร์มินัลของคุณได้
</Callout>

## ปลั๊กอิน Zsh

[zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli) คือปลั๊กอิน Zsh ที่ช่วยให้คุณสลับไปยัง Kimi Code CLI ได้อย่างรวดเร็วจากเชลล์ของคุณ

### การติดตั้งผ่าน Oh My Zsh

หากคุณใช้ Oh My Zsh ให้ทำตามขั้นตอนต่อไปนี้เพื่อติดตั้ง:

1. โคลนรีโพซิทอรีไปยังไดเรกทอรีปลั๊กอินแบบกำหนดเองของ Oh My Zsh:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. เพิ่ม `kimi-cli` ลงในรายการปลั๊กอินใน `~/.zshrc`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. โหลดการตั้งค่าใหม่:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### การใช้งาน

เมื่อติดตั้งเสร็จแล้ว ให้กด **Ctrl-X** ในเทอร์มินัลของคุณเพื่อสลับไปยัง Kimi Code CLI ได้อย่างรวดเร็ว โดยไม่ต้องพิมพ์คำสั่ง `kimi` ด้วยตนเอง
