---
title: "Kimi Sheets Use Cases and Prompt Library"
slug: "docs-and-sheets-sheets-cases"
order: 3
extract_headings: false
preview: true
preview_content: "Use cases and prompt templates for working with spreadsheets in Kimi Sheets."
---

<SeoMeta
  title="Kimi Sheets Generation Use Cases and Tips - Kimi Help Center"
  description="Explore practical Kimi Sheets generation use cases, from data organization and financial analysis to project scheduling, and learn how to create professional spreadsheets quickly with natural language."
/>
# Kimi Sheets Use Cases

## Financial Valuation

📊 Like a financial analyst, Kimi helps you gather real financial data, build a DCF valuation model, and run a simulated company valuation.

<Frames
  src="./images/sheets-cases/sheets-cases-01.png"
  alt="image"
/>

**Prompt reference**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Prompt reference: Use the DCF method to value XX Medical. Put the full valuation process and data into an Excel spreadsheet,\nand provide the data sources. For figures that need to be estimated, such as market size, growth rate, and market share, explain the\nestimation logic, and incorporate the broader macro context into the analysis.",
    },
  ]}
/>

## Storyboard Creation

🎥 Like a storyboard artist, Kimi helps you create an Excel-format video storyboard script, including duration, scene descriptions, voiceover, sound effects, and reference images for each shot.

<Frames
  src="./images/sheets-cases/sheets-cases-02.png"
  alt="image"
/>

**Prompt reference**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Prompt reference: Create an Excel storyboard script for a 3D animated promo video about the new upgrade to the Kimi AI product OK Computer, which supports generating and editing\nOffice documents, such as formatting long papers in Word, doing data modeling and analysis in Excel, and automatically creating PPT\npresentations.\n\nThe Excel should include Column A: Number (1-20).\n\nColumn B: Cumulative duration (seconds).\n\nColumn C: Shot duration (seconds).\n\nColumn D: Visual description (3D / camera movement).\n\nColumn E: Voiceover/text (use different background colors to distinguish voiceover from on-screen text).\n\nColumn F: Sound effects/BGM (use different font colors to distinguish them).\n\nColumn G: Storyboard images (generate an image for every shot and ensure consistency, using the black-and-white line sketch style most commonly used by storyboard artists).\n\nPlease design the creative outline, script, storyboard, and final images yourself, and present the finished script in a well-designed Excel file.",
    },
  ]}
/>

## More Scenarios and Prompt References

| Scenario | Example prompt |
|------|-----------|
| Financial modeling | Use the DCF method to value XX Company. Put the full process and data into Excel, cite data sources, and explain the estimation logic for key assumptions such as growth rate. |
| Industry data comparison | Research the top 20 domestic new energy vehicle companies, list market capitalization, 2025 sales volume, flagship models, and recent news, and output a comparison table. |
| Literature整理 into a table | Search for papers from the past three months on LLM inference optimization and organize them in Excel, including title, authors, core method, and innovations. |
| Merging multiple spreadsheets | [Upload 12 months of sales Excel files] Merge these 12 spreadsheets into an annual summary, calculate month-over-month growth for each month, and use formulas to link multiple sheets. |
| Sales lead extraction | [Upload trade show PDF/images] Extract all exhibitor information and organize it into a 1,000-row sales leads Excel file, including company name, contact details, and product category. |
| Project management sheet | Create a PMO project management Excel file for me, including task list, owner, progress status, Gantt chart, and linked sheets. |
| Data visualization | Turn this sales data Excel into a visual dashboard, including a trend line chart, regional distribution chart, and completion-rate donut chart. |
