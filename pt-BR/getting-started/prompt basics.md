---
title: "Fundamentos dos prompts"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Fundamentos dos prompts - Central de Ajuda Kimi"
  description="Um prompt é a instrução de texto que você envia ao Kimi — pode ser uma pergunta, uma descrição, um conjunto de requisitos ou até mesmo um briefing completo de tarefa. O Kimi usa seu..."
/>

# Fundamentos dos prompts

<Callout type="info">
Um prompt é a instrução de texto que você envia ao Kimi — pode ser uma pergunta, uma descrição, um conjunto de requisitos ou até mesmo um briefing completo de tarefa. O Kimi usa seu prompt para entender sua intenção, estruturar uma resposta e executar tarefas.

Em resumo: **a forma como você pergunta determina a forma como o Kimi responde.** Um prompt claro e específico quase sempre leva a uma resposta mais precisa e valiosa.
</Callout>

## Quatro elementos essenciais de um bom prompt

### 1. Defina papel e contexto

Dizer ao Kimi quem você é e em que situação se encontra ajuda a ajustar a profundidade e o tom certos.

| Prompt vago | Prompt melhor |
|-------------|--------------|
| Escreva um artigo sobre IA | Sou editor de mídia de tecnologia. Preciso de um artigo explicativo de 2.000 palavras sobre IA para um público geral, escrito em um estilo acessível e envolvente |
| Ajude-me a analisar dados | Sou analista de mercado. Analise as taxas de conversão por canal neste arquivo Excel, com foco nas variações mês a mês |

### 2. Descreva a tarefa de forma específica

Quanto mais específica for sua descrição, menos ciclos de revisão você precisará. Uma boa descrição de tarefa normalmente inclui:

- **O que fazer**: uma ação clara (analisar, resumir, traduzir, gerar, comparar…)
- **Formato de saída**: tabela, lista, parágrafo, código, Markdown…
- **Escopo e restrições**: número de palavras, número de itens, intervalo de tempo, abrangência geográfica…
- **Requisitos de qualidade**: tom acadêmico, conversacional, conciso, detalhado…

<ComparisonBlock
  wrong={"Resuma este artigo"}
  correct={"Resuma este artigo em 3 tópicos, cada um com no máximo 50 palavras, em português"}
/>

### 3. Forneça exemplos ou referências

Quando você tem expectativas específicas de formatação, dar um exemplo ao Kimi (few-shot) é altamente eficaz:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Organize as anotações da reunião neste formato:\n\nTópico da reunião: xxx\nParticipantes: xxx\nDecisões principais:\nxxx\nxxxItens de ação:\n[ ] xxx (Responsável: xxx, Prazo: xxx)",
    },
  ]}
/>

### 4. Divida tarefas complexas em etapas
Para tarefas complexas, separe o trabalho em etapas menores e conduza o Kimi por elas:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Preciso de um relatório de análise competitiva. Siga estas etapas:\nListe os 3 principais concorrentes nacionais e seus recursos principais\nCompare suas estratégias de preços\nAnalise os pontos fortes e fracos de cada produto\nApresente recomendações de diferenciação para o nosso produto",
    },
  ]}
/>

## Dicas práticas
### Use perguntas de acompanhamento e iteração
Não ficou satisfeito com a primeira resposta? É só dar continuidade — não precisa repetir todo o contexto:
- "Detalhe melhor o ponto 2"
- "Deixe o tom mais formal"
- "Adicione fontes de dados"
- "Refaça a análise sob outro ângulo"
### Aproveite arquivos e links
O Kimi permite enviar PDFs, documentos Word, arquivos Excel, imagens e muito mais. Você também pode colar URLs diretamente. Combinar arquivos com seu prompt aumenta drasticamente a eficiência:
| Tarefa | Exemplo de prompt |
|------|---------------|
| Resumir PDF | "Resuma os pontos principais deste PDF" |
| Analisar dados | "Analise as tendências de vendas com base nestes dados do Excel" |
| Extrair de URL | "Leia este artigo no link e extraia as principais conclusões" |

### Especifique o formato de saída
Diga ao Kimi exatamente que formato você deseja:
| Necessidade | Exemplo de prompt |
|------|---------------|
| Tabela comparativa | "Compare os prós e contras de A e B em uma tabela" |
| Saída de código | "Implemente isso em Python com comentários" |
| Lista estruturada | "Organize como uma lista numerada, com cada item em até 20 palavras" |
| Markdown | "Gere a saída em formato Markdown com hierarquia de títulos" |

### Use a memória para preferências persistentes
Se você tem preferências e requisitos recorrentes, use o recurso de **Memória** do Kimi para lembrá-los a longo prazo:
- "Lembre-se de que sou engenheiro de frontend e prefiro a stack React"
- "Sempre responda em português usando formato Markdown"
- "Inclua exemplos de código ao responder perguntas técnicas"

<Callout type="tip">
Dessa forma, você não precisa se repetir — o Kimi aplicará automaticamente essas preferências em conversas futuras.
</Callout>

## Erros comuns
| Erro | Abordagem melhor |
|---------|----------------|
| Amontoar várias tarefas não relacionadas em uma única mensagem | Inicie uma nova sessão para cada tarefa independente, mantendo o contexto limpo |
| Prompts excessivamente vagos (por exemplo, "escreva algo para mim") | Especifique o que escrever, para quem, em que estilo e com que extensão |
| Esperar uma saída perfeita na primeira tentativa | Gere um rascunho primeiro e depois refine com perguntas de acompanhamento |
| Não verificar os fatos da saída da IA | Confira sempre datas, dados e afirmações factuais |

## Modelos para começar rápido
Aqui estão alguns modelos de prompt prontos para usar — copie, personalize e mãos à obra:
**Escrita**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Escreva um [article type] sobre [topic] para [target audience], com aproximadamente [xxx] palavras.\nRequisitos: [style/format/focus areas]",
    },
  ]}
/>

**Análise**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analise [subject], com foco em [key dimensions].\nFormato de saída: [table/chart/report]\nInclua conclusões e recomendações.",
    },
  ]}
/>

**Tradução**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Traduza o texto a seguir para [target language], mantendo um tom [academic/conversational/business].\nPara a terminologia especializada, inclua o termo original entre parênteses.",
    },
  ]}
/>

<Callout type="info">
Domine esses conceitos e técnicas essenciais e você colaborará com o Kimi de forma muito mais eficaz — transformando a IA em uma verdadeira ferramenta de produtividade.
</Callout>
