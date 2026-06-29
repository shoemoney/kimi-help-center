---
title: "Casos de uso e biblioteca de prompts do Deep Research"
slug: "deep-research-use-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso e biblioteca de prompts do Deep Research - Central de Ajuda da Kimi"
  description="Sou analista profissional de valores mobiliários. Por favor, ajude-me a realizar uma análise aprofundada da Pop Mart sob a perspectiva financeira. A análise deve incluir, mas..."
/>

# Casos de uso e biblioteca de prompts do Deep Research

## Visão geral dos casos de uso

| Cenário | Exemplo de prompt |
|:---|:---|
| Pesquisa de setor / mercado | Pesquise o cenário competitivo e os principais players do setor nacional de robótica humanoide em 2025 |
| Análise competitiva | Compare e analise as diferenças de estratégia de produto entre Notion e Obsidian |
| Due diligence de investimentos | Reúna as rodadas de captação e as variações de valuation das principais empresas de LLM nos últimos dois anos |
| Revisão de literatura acadêmica | Trace a evolução da tecnologia RAG e suas principais direções de otimização atuais |
| Análise de políticas | Analise o impacto das novas regulamentações de segurança de dados sobre empresas em expansão internacional |
| Tomada de decisão pessoal | Quero comprar um notebook para edição de vídeo — me ajude a pesquisar as melhores opções |

## Pesquisa de setor

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sou analista profissional de valores mobiliários. Por favor, ajude-me a realizar uma análise aprofundada da Pop Mart sob a perspectiva financeira. A análise deve incluir, mas não se limitar a: 1. Visão geral da empresa: modelo de negócio, vantagem competitiva (moat) e posição no setor; 2. Visão geral do setor, dinâmica de fornecedores/clientes e desenvolvimento futuro; 3. Dados financeiros: tendências de receita e lucro, fatores de influência, balanço patrimonial e fluxo de caixa; 4. Histórico de conformidade — eventuais penalidades regulatórias, fundamentos específicos e riscos associados; 5. Análise técnica: tendências de preço, indicadores e níveis de suporte/resistência; 6. Sentimento de mercado: classificações, opinião pública e impacto de notícias; 7. Comparação competitiva: principais concorrentes, suas respectivas participações de mercado e métricas financeiras; 8. Valuation e saúde financeira: avaliação por PE/PB/DCF e análise de razoabilidade; 9. Principais riscos: concorrência setorial, política, geopolítica etc.",
    },
  ]}
/>

## Análise competitiva

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Compare e analise as diferenças de estratégia de produto entre Notion e Obsidian",
    },
  ]}
/>

## Due diligence de investimentos

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Realize uma pesquisa aprofundada sobre [Nome da Empresa]:\n1. Modelo de negócio e principal vantagem competitiva (moat) (vantagens competitivas, diferencial tecnológico/de canal, cenário competitivo);\n2. Saúde financeira (estrutura de receita, lucratividade, fluxo de caixa, principais áreas de risco);\n3. Equipe e governança (perfil dos fundadores, estrutura societária, talentos-chave);\n4. Mercado e políticas (TAM/SAM/SOM, taxa de crescimento do setor, ambiente regulatório);\n5. Identificação de riscos (negócio, jurídico, barreiras de saída);\n6. Referência de valuation (empresas comparáveis, rodadas históricas de captação, faixa razoável).\nRequisitos: Cite as fontes dos dados, marque as conclusões principais com ⭐ e liste separadamente os pontos controversos.",
    },
  ]}
/>

[Ver resultado]（https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b）

## Pesquisa jurídica e regulatória

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sou advogado in-house de uma empresa chinesa de robótica, e a diretoria está considerando expandir para países do Sudeste Asiático. Porém, não tenho muita segurança quanto aos requisitos de dados e privacidade nesses países. Você poderia me ajudar a listar os nomes das leis de dados e privacidade dos países do Sudeste Asiático (país por país) e, de preferência, fornecer um breve resumo e os principais pontos dessas leis?",
    },
  ]}
/>

## Revisão acadêmica 

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sou mestrando em comunicação e realizo pesquisa acadêmica sobre o \"divisor digital\". Por favor, realize uma pesquisa aprofundada e sistemática. Preciso de pelo menos 15 artigos de periódicos de referência, tanto em chinês quanto em inglês. Forneça a definição desse conceito, literatura dos últimos 3 a 5 anos e 3 possíveis subtemas para aprofundamento. Concentre-se nos estudos e documentos de políticas mais recentes desde 2020, com atenção especial às novas dinâmicas de pesquisa após o boom da IA em 2023.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crie um plano de aula sobre \"Primavera\" para alunos do 7º ano",
    },
  ]}
/>

<Frames
  src="./images/use-cases/academic-review.png"
  alt="Revisão acadêmica"
/>

## Análise de políticas

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Como analista de políticas, realize uma análise aprofundada de [nome da política/documento], abordando o contexto e os objetivos centrais.\nListe as entidades aplicáveis e as mudanças substantivas das principais disposições, os requisitos específicos de conformidade e os prazos para as empresas, além de uma previsão da direção futura da política.\nRequisitos: Cite o texto oficial com fontes, destaque as principais mudanças, discuta separadamente as cláusulas controversas e mantenha o total abaixo de 2.000 palavras.",
    },
  ]}
/>

## Decisões pessoais (planejamento de viagens / comparação de produtos)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Quero fazer uma viagem de carro pelo norte de Xinjiang. Por favor, crie um roteiro de 5 dias e 4 noites incluindo comida, passeios e hospedagem. Nossa família de quatro é formada por mim, meu cônjuge, um menino de 6 anos e uma menina de 4 anos. As crianças são ativas e gostam de caminhar, mas evite rotas particularmente perigosas.",
    },
  ]}
/>

## Exemplos adicionais de prompts

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Reúna os eventos de captação de 2025 no setor de robótica, ordenados por mês, indicando os investidores líderes e as tendências de captação. Forneça links de citação.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Compare os prós e contras do iPhone 16 vs. iPhone 17 em fotografia, desempenho e duração de bateria, citando feedback real de usuários do último ano.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sou universitário em busca de emprego e estou começando do zero em desenvolvimento de LLM. Me ajude a planejar um percurso de aprendizado para essa área e forneça os pontos de conhecimento correspondentes.",
    },
  ]}
/>
