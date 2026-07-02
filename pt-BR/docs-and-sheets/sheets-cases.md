---
title: "Casos de uso e biblioteca de prompts do Kimi Sheets"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso e biblioteca de prompts do Kimi Sheets - Central de Ajuda Kimi"
  description="Exemplos de casos de uso e prompts para o Kimi Sheets — da avaliação financeira à criação de storyboards."
/>

# Casos de uso do Kimi Sheets

<Callout type="info">
Exemplos de casos de uso e prompts para o Kimi Sheets — da avaliação financeira à criação de storyboards.
</Callout>

## Avaliação financeira

Como um analista financeiro, o Kimi reúne dados financeiros reais, constrói um modelo de avaliação por DCF e realiza uma avaliação simulada de empresa.

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**Exemplo de prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Faça uma avaliação por DCF da XX Healthcare. Registre todo o processo de avaliação e os dados\nem uma planilha do Excel, cite as fontes de dados, explique o raciocínio por trás das estimativas\ncomo o tamanho do mercado, as taxas de crescimento e a participação de mercado, e incorpore uma análise do ambiente macroeconômico.",
    },
  ]}
/>

## Criação de storyboard

Como um storyboard artist, o Kimi cria roteiros de storyboard de vídeo em formato Excel, incluindo duração, descrição das cenas, narração, efeitos sonoros e quadros de referência.

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="Transcript"
/>

**Exemplo de prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Crie um roteiro de storyboard no Excel para um vídeo promocional em 3D sobre a nova\natualização da Kimi AI — OK Computer — que permite gerar e editar documentos do Office\n(por exemplo, formatação de teses longas no Word, modelagem e análise de dados no Excel,\ngeração automática de slides).\n\nO Excel deve incluir:\nColuna A: número de sequência (1-20)\nColuna B: duração acumulada (segundos)\nColuna C: duração da cena (segundos)\nColuna D: descrição da cena (3D / movimento de câmera)\nColuna E: narração/texto (use cores de fundo diferentes para distinguir a narração\ndo texto na tela)\nColuna F: efeitos sonoros/trilha (use cores de fonte diferentes para distingui-los)\nColuna G: quadros do storyboard (gere uma imagem para cada cena — mantenha a coerência visual\nusando o clássico estilo de esboço em traço preto e branco)\n\nCrie de forma autônoma o esquema criativo, o roteiro e os storyboards e, em seguida,\ngere os quadros para completar este roteiro, apresentado em um formato de Excel caprichado.",
    },
  ]}
/>

## Mais cenários e exemplos de prompts

| Cenário | Exemplo de prompt |
|------|-----------|
| Modelagem financeira | Faça uma avaliação por DCF da empresa XX — coloque todo o processo e os dados no Excel, cite as fontes e explique o raciocínio por trás de premissas-chave, como taxas de crescimento |
| Comparação de dados setoriais | Pesquise as 20 maiores empresas nacionais de veículos elétricos — liste o valor de mercado, o volume de vendas em 2025, os modelos principais e as notícias recentes em uma tabela comparativa |
| Catalogação de literatura | Busque artigos sobre otimização de inferência de LLM dos últimos três meses — organize em Excel com título, autores, metodologia central e principais contribuições |
| Mesclagem de múltiplas planilhas | [Faça upload de 12 arquivos Excel de vendas mensais] Mescle essas 12 planilhas em um resumo anual, calcule as taxas de crescimento mês a mês e use fórmulas para vincular as planilhas |
| Extração de leads de vendas | [Faça upload de PDF/imagens da feira] Extraia todas as informações dos expositores e organize em um arquivo Excel de leads de vendas com 1.000 linhas, contendo nome da empresa, dados de contato e categoria do produto |
| Gestão de projetos | Crie um Excel de gestão de projetos PMO com lista de tarefas, responsáveis, status de progresso, gráfico de Gantt e vínculo entre planilhas |
| Visualização de dados | Transforme este Excel de dados de vendas em um painel visual com gráficos de linha de tendência, gráficos de distribuição regional e gráficos de rosca de taxa de conclusão |
