---
title: "Casos de uso do Kimi Docs e biblioteca de prompts"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso do Kimi Docs e biblioteca de prompts - Central de Ajuda Kimi"
  description="Exemplos de casos de uso e prompts para o Kimi Docs — da revisão de manuscritos à tradução profissional e ao design de PDF."
/>

# Casos de uso do Kimi Docs e biblioteca de prompts

<Callout type="info">
Exemplos de casos de uso e prompts para o Kimi Docs — da revisão de manuscritos à tradução profissional e ao design de PDF.
</Callout>

## Especialista em revisão

Como um revisor de manuscritos meticuloso, o Kimi analisa os comentários de revisão, identifica os trechos relevantes no seu documento e insere automaticamente comentários e sugestões detalhados.

**Exemplo de prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
    },
  ]}
/>

## Tradução profissional

Como um tradutor incansável, o Kimi traduz um PDF de 50 páginas do inglês para o francês, página por página, preservando todas as fórmulas e códigos no resultado.

**Exemplo de prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Find the first assignment PDF for Stanford's CS336 course in English, then convert\nit to a French PDF. Preserve all code and mathematical formulas in the French version.\nThe translation should be fluent — do not omit or add any content.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="Traduzir"
/>

## Design e serviço de publicação de PDF

Como um designer de layout, o Kimi ajuda você a planejar recursos visuais, organiza automaticamente textos e imagens e gera portfólios em PDF com qualidade de publicação.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black \u0026 white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English \u0026 Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods \u0026 Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar \u0026 Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall \u0026 Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
    },
  ]}
/>

## Mais cenários e exemplos de prompts

| Cenário | Exemplo de prompt |
|------|-----------|
| **Relatório profissional** | Escreva um "Livro Branco da Indústria de Economia de Baixa Altitude da China em 2026" no Word, no estilo McKinsey, abordando tamanho de mercado, cenário competitivo, contexto regulatório e recomendações de investimento |
| **Revisão de contratos** | [Faça upload de contract.docx] Revise este contrato sob a ótica de um advogado, identifique cláusulas de risco e insira comentários |
| **Modelagem financeira** | Crie um modelo de previsão financeira de três anos para SaaS no Word, incluindo projeções de receita, estrutura de custos e fluxo de caixa |
| **Síntese de textos longos** | Condense este artigo acadêmico de 30.000 palavras em um resumo executivo de 5.000 palavras em formato Word |
| **Comparação de versões** | [Faça upload do Contrato V1 e V2] Compare as versões, liste todas as alterações com descrições de impacto e gere o resultado em Word |
