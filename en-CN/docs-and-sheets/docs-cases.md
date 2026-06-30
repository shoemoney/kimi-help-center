---
title: "Kimi Docs Use Cases and Prompt Library"
slug: "docs-and-sheets-docs-cases"
order: 2
extract_headings: false
preview: true
preview_content: "Use cases and prompt templates for Kimi Docs document processing."
---

<SeoMeta
  title="Kimi Docs Generation Use Cases and Tips - Kimi Help Center"
  description="Explore practical use cases for generating documents with Kimi Docs, including report writing, proposal planning, and contract templates. Includes sample prompts to help you quickly create high-quality documents."
/>

# Kimi Docs Use Cases and Prompt Library

## Expert Reviewer

✍️ Like a rigorous expert reviewer, Kimi helps you break down revision comments, precisely locate the original text, and automatically insert detailed editing notes.

<Frames
  src="./images/docs-cases/docs-cases-01.png"
  alt="image"
/>

**Prompt reference**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "You are a senior reviewer in the field of smart cities and regional planning. Below is a specific review comment.\nPlease carefully analyze these issues, locate the corresponding paragraphs or figures/tables in the attached Word document,\nand add these issues and detailed revision suggestions as comments. Note that the issues and revision suggestions\nshould not sound AI-written; they should read as if written by a person, and should not be presented as bullet points.\n\nThe specific issues are as follows: “First, cities differ fundamentally in digital infrastructure, population mobility patterns, industrial agglomeration, and other dimensions, but the article does not clearly explain how these baseline variables affect the final evaluation scores through the 'smart-resilience coupling mechanism'. It lacks a mathematical explanation of the black-box process, making the causal logic between the 'current state of infrastructure' and the 'evaluation results' insufficiently rigorous. Second, although the evaluation system is built with reference to the national standard GB/T framework, the weighting factors rely too heavily on subjective weighting and overlook the actual contribution of soft indicators such as citizens' sense of gain and data security governance, which may weaken the explanatory power of the evaluation model. In addition, the article broadly classifies 18 cities in central and western China as a 'start-up development zone'. Within this zone, the digital divide between provincial capitals and ordinary prefecture-level cities is extremely large, so applying a unified top-level design path is clearly not operationally feasible. It is recommended to further open up the black box of the transmission paths in the 'coupling mechanism', increase the weight of objective weighting methods to correct indicator bias, and conduct more granular cluster analysis for the start-up zone to make the planning recommendations more implementable.” Please output the original manuscript with detailed comments.",
    },
  ]}
/>

## Professional Translation

📄 Like a tireless translator, Kimi can translate a 50-page English PDF into Chinese page by page, while preserving all formulas and code in the output Chinese PDF.

<Frames
  src="./images/docs-cases/docs-cases-02.png"
  alt="image"
/>

**Prompt reference**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Prompt reference: Help me find the English PDF of the first assignment for Stanford CS336, then convert it into\na Chinese PDF. Make sure the code and mathematical formulas are preserved in the Chinese PDF. The translation should be fluent, with no\ndeletions or additions.",
    },
  ]}
/>

## One-Stop PDF Planning Service

🖼️ Like a layout designer, Kimi helps you plan visual features, automatically arrange text and images, and generate a publication-ready PDF brochure directly.

<Frames
  src="./images/docs-cases/docs-cases-03.png"
  alt="image"
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Prompt reference: You are now a curatorial publishing AI focused on modern art, especially Picasso studies.\nYour task is: use a large number of images to help the audience understand why Picasso must be viewed again and again.\n\nGenerate the content directly with PDF output as the goal.\n\nI. Core mandatory requirements\nExtremely large number of images\nEvery phase, every artist, and every movement must be supported by images\nPrioritize image search\nIf image search cannot meet the requirement, generate highly faithful images\n\nII. Visual system\nUse the MAP Logo as the background texture throughout the book\nAsymmetrical layout\nClear grid, but allow local disruptions\nHigh-contrast black and white + primary-color accents\n\nIII. Content structure (generate all)\n1. Cover\nPicasso\nExhibition subtitle (Chinese and English)\nMAP Logo background texture\n\n2. Why Picasso (with images)\nPortraits of Picasso from different phases\nJuxtaposition of works from different periods\n\n3. Periods & Movements (image-led)\nEach phase must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytical / Synthetic)\nWar and politics\nLate experiments\n\nImage types:\nFull images of works\nClose-up details\nStructural breakdown diagrams (generate images if necessary)\n\n4. Key Works\nNo fewer than 25 works\nA single work may be presented on a full page\nEmphasize structure, perspective, and methods of deconstruction\n\n5. How to Look at Picasso\nExplanations through image comparisons\nSide-by-side treatment of the same theme in different ways\n\n6. Gallery layout and rhythm\nHigh-density viewing area\nReflective buffer area\n\n7. MAP's contemporary position\nWhy Shanghai needs Picasso\nWhy this moment matters",
    },
  ]}
/>

## More Scenarios and Prompt Examples

| Scenario | Sample prompt |
|------|-----------|
| Professional report generation | Write a 2026 White Paper on China's Low-Altitude Economy Industry for me. Output it as Word, in a McKinsey consulting style, covering market size, competitive landscape, policy background, and investment recommendations |
| Contract review comments | [Upload contract.docx] Review this contract from the perspective of a professional lawyer, identify potential risk clauses, and insert comments in the original document |
| Financial modeling | Build a three-year dynamic financial forecast model for a SaaS company, including revenue forecasts, cost structure, and cash flow, and output a Word document |
| Long-form extraction | Condense this 30,000-character academic paper into a 5,000-character executive summary in Word format, preserving the core data and conclusions |
| Multi-version comparison | [Upload contract V1 and V2] Compare the differences between the two versions of the contract, list all changes and explain their impact, and output a Word document for me |
