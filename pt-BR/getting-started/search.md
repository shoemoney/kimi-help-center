---
title: "Busca agentiva"
slug: "search"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Busca agentiva para guias e respostas｜Central de Ajuda da Kimi"
  description="A Busca Agentiva da Kimi é construída sobre uma arquitetura de aprendizado por reforço agentivo ponta a ponta. Diferente das abordagens tradicionais de orquestração de ferramentas, ela permite que a IA..."
/>

# Busca agentiva

<Callout type="info">
A Busca Agentiva da Kimi é construída sobre uma arquitetura de aprendizado por reforço agentivo ponta a ponta. Diferente das abordagens tradicionais de orquestração de ferramentas, ela permite que a IA decida de forma autônoma quando buscar, quais ferramentas acionar e como ajustar a estratégia — viabilizando tarefas complexas de coleta e processamento de informações.
</Callout>

Em comparação com a busca tradicional por correspondência de palavras-chave, os recursos de busca da Kimi passaram por duas grandes evoluções:
- A **Explorer Search** (outubro de 2024) combinou a compreensão semântica de grandes modelos de linguagem com a recuperação de informações em tempo real, decompondo automaticamente perguntas complexas e rastreando as fontes.
- A **Agentic Search** vai além, com planejamento autônomo e acionamento de ferramentas, oferecendo suporte a consultas de dados financeiros, recuperação de literatura acadêmica, busca por imagens e outras tarefas multimodais.

## Configurações da Web Search

<Frames
  src="./images/search/web-search.png"
  alt="Web search"
/>

A Web Search (Automática/Desativada) supera os limites da atualidade do conhecimento para entregar informações em tempo real, confiáveis e rastreáveis.

Clique no botão "Web search" abaixo da caixa de entrada do chat. Quando ativada, a Kimi determina de forma autônoma se a pergunta atual exige dados em tempo real e aciona de maneira inteligente motores de busca e bancos de dados especializados para recuperar e sintetizar informações.

## Recursos principais

### 1. Atualidade aliada à autoridade
Recuperação de conteúdo da web em tempo real, abrangendo mais de 100 fontes verificadas e confiáveis (grandes veículos de imprensa, comunicados oficiais do governo, plataformas de dados financeiros, bancos de dados de periódicos acadêmicos) — garantindo informações ao mesmo tempo atuais e autorizadas.

### 2. Atribuição de fontes
Todas as respostas baseadas em busca incluem links para as fontes de referência. Basta clicar para visualizar a página original e verificar plenamente a precisão e o contexto.

### 3. Acesso global à informação
Oferece suporte a conversas em linguagem natural em vários idiomas. A Kimi pode buscar proativamente fontes em outros idiomas além do inglês (por exemplo, documentação técnica em japonês, notícias em francês) e sintetizar automaticamente informações multilíngues.

## Casos de uso recomendados

- Notícias e atualizações em tempo real (últimas notícias, dados do mercado de ações, mudanças de políticas)
- Verificação de fatos (boatos da internet, dados históricos, metodologias estatísticas)
- Pesquisa profissional (inteligência competitiva, fronteiras acadêmicas, padrões do setor)

## Selos de fontes autorizadas

A Web Search da Kimi filtra as fontes em três dimensões — relevância, autoridade e atualidade — removendo automaticamente sites de risco, conteúdo replicado em duplicidade, conteúdo web de baixa qualidade e informações alucinadas, para garantir resultados confiáveis.

As fontes de alta qualidade que passam pela rigorosa triagem da Kimi recebem selos de autoridade nas respostas (por exemplo, ícones de certificação de site oficial, certificação acadêmica e certificação de mídia), ajudando você a identificar rapidamente as informações mais confiáveis.

**Mecanismo de triagem de fontes**:
- **Removidas**: sites agregadores de baixa qualidade, mídias independentes não verificadas, páginas em cache expiradas
- **Priorizadas**: sites de órgãos governamentais, mídia autorizada, periódicos acadêmicos, canais oficiais de divulgação financeira

## Fontes de dados financeiros e acadêmicos

<Frames
  src="./images/search/screenshot-5.png"
  alt="screenshot 5"
/>

Em cenários profissionais, a Kimi oferece suporte a consultas em bancos de dados de domínios especializados, retornando dados profissionais estruturados e rastreáveis.

<Frames
  src="./images/search/screenshot-6.png"
  alt="screenshot 6"
/>

Basta descrever sua solicitação na conversa, e a Kimi selecionará automaticamente a fonte de dados apropriada.

### Exemplos de consultas

- "Consulte os dados de receita da Apple nos últimos cinco anos"
- "Busque os artigos mais recentes sobre otimização de inferência em grandes modelos de linguagem"
- "Compare o PIB, o PIB per capita e as taxas de desemprego das três maiores economias do mundo"

### Fontes de dados suportadas

| Fonte | Descrição |
|--------|-------------|
| **Global Finance Data** | Dados financeiros globais de ações, futuros, índices e outros |
| **Academic Data** | Periódicos, artigos, preprints, dissertações, patentes etc. |
| **Stock Finance Data** | Dados financeiros chineses e globais de ações, futuros, índices e outros |
| **World Bank Data** | PIB, população, emprego, comércio de países etc. |

## Busca inteligente

### Busca por imagem

A Kimi oferece suporte a busca e compreensão baseadas em imagens. Após enviar uma imagem, a Kimi pode acionar automaticamente ferramentas de busca por imagem para identificar o conteúdo e recuperar informações relacionadas.

**Exemplos de consultas**:
- "Onde fica este lugar?"
- "O que está acontecendo neste meme / o que esta pessoa está dizendo?"
- "Encontre o McDonald's verdadeiro"

**Como usar**:
- Envie uma imagem diretamente (oferece suporte a JPG, PNG e outros formatos)
- Descreva o conteúdo da imagem ou faça perguntas relacionadas a ela no seu prompt
- A Kimi combinará reconhecimento de imagem com busca na web para fornecer a origem da imagem, imagens semelhantes e informações relacionadas

**Cenários típicos**:
- Identificar objetos desconhecidos, pontos de referência ou modelos de produtos
- Encontrar a origem ou a procedência de uma imagem
- Analisar dados em gráficos ou capturas de tela e recuperar informações de contexto relevantes

### Acesso direto por URL

A Busca da Kimi oferece suporte a acesso direto por URL para obter recursos da internet.

<Frames
  src="./images/search/screenshot-22.png"
  alt="screenshot 22"
/>

**Cole uma URL diretamente na conversa**, e a Kimi obterá e analisará automaticamente o conteúdo da página.

**Exemplos de uso**:
- Resuma os pontos principais deste artigo
- Extraia os dados essenciais deste PDF de balanço financeiro
- Busque informações de imagem a partir da URL

## Dicas

<Callout type="warning">
- Dê preferência a links **de acesso público** (por exemplo, páginas de notícias, documentos PDF públicos)
- Algumas páginas **protegidas por senha** ou com acesso restrito a rastreadores podem não ser acessíveis
- No caso de páginas **carregadas dinamicamente**, a Kimi pode recuperar apenas o conteúdo HTML inicial
- A Kimi **não consegue reler links de conversas compartilhadas** (ou seja, links para outros chats da Kimi)
</Callout>
