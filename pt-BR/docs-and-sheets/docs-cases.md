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
      content: "Você é um revisor de manuscritos sênior especializado em cidades inteligentes e planejamento regional.\nA seguir, um conjunto de comentários de revisão específicos. Analise cuidadosamente esses problemas,\nlocalize os parágrafos ou figuras correspondentes no documento do Word anexado e\ninsira os problemas junto com sugestões de revisão detalhadas na forma de comentários. Observação: os\ncomentários devem soar como se tivessem sido escritos por uma pessoa, não por uma IA — evite o formato de tópicos.\n\nEntregue o manuscrito original com os comentários detalhados.",
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
      content: "Encontre o PDF da primeira tarefa do curso CS336 de Stanford em inglês e, em seguida,\nconverta-o em um PDF em francês. Preserve todo o código e todas as fórmulas matemáticas na versão em francês.\nA tradução deve ser fluente — não omita nem acrescente nenhum conteúdo.",
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
      content: "Você é uma IA de publicação curatorial especializada em arte moderna, em particular nos estudos sobre Picasso.\nSua tarefa: usar uma ampla iconografia para ajudar o público a entender por que Picasso deve ser revisitado\nvez após vez.\n\nGere diretamente um PDF.\n\nI. Requisitos fundamentais\nIconografia abundante\nCada período, cada referência a um artista e cada movimento deve vir acompanhado de imagens\nPriorize as imagens de fontes originais\nUse imagens geradas por IA de alta fidelidade apenas quando não houver imagens de fontes disponíveis\n\nII. Sistema visual\nLogotipo da MAP como marca-d'água em página inteira\nLayout assimétrico\nGrade nítida com ruptura local controlada\nPreto e branco de alto contraste + toques de cores primárias\n\nIII. Estrutura do conteúdo (gere todas as seções)\n1. Capa\nPicasso\nSubtítulo da exposição (English & Chinese)\nMarca-d'água do logotipo da MAP\n\n2. Por que Picasso (com imagens)\nRetratos de Picasso de diferentes períodos\nObras de diferentes períodos justapostas\n\n3. Períodos e movimentos (centrado na imagem)\nCada período deve incluir de 8 a 12 imagens:\nPeríodo azul\nPeríodo rosa\nCubismo (analítico / sintético)\nGuerra e política\nExperimentos tardios\n\nTipos de imagem:\nObra completa\nRecortes de detalhe\nDiagramas de desconstrução estrutural (gerados por IA quando necessário)\n\n4. Obras principais\nNão menos que 25 obras\nAlgumas obras podem ocupar páginas inteiras\nÊnfase na estrutura, na perspectiva e na desconstrução\n\n5. Como olhar para Picasso\nExplicações comparativas baseadas em imagens\nTratamentos lado a lado de um mesmo tema\n\n6. Salão de exposição e ritmo\nZonas de visitação de alta densidade\nZonas de amortecimento para reflexão\n\n7. A posição contemporânea da MAP\nPor que Xangai precisa de Picasso\nPor que este momento é importante",
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
