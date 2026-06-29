---
title: "Usando Skills no Modo Agent"
slug: "use-skills-in-agent"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Usando Skills no Modo Agent - Central de Ajuda da Kimi"
  description="Aprenda a invocar skills, criar skills personalizadas, descobrir skills recomendadas e expandir as capacidades da Kimi no Modo Agent."
  ogType="article"
/>

# Usando Skills no Modo Agent

## Como invocar Skills?

Na caixa de entrada do Modo Agent da Kimi, há três maneiras de invocar Skills:

**Método 1: usar o comando `/`**

Digite `/` na caixa de entrada para exibir a lista de Skills. Clique no nome de uma Skill para inseri-la. Você também pode digitar palavras-chave após o `/` para filtrar a lista.

**Método 2: usar o menu "➕"**

Clique no botão **➕** ao lado da caixa de entrada. Selecione uma Skill no menu, e o nome dela será inserido como texto na caixa de entrada.

<Frames
  src="./images/skills/加号-en.png"
  alt="Invocar skills pelo menu de adição"
/>

**Método 3: deixar a Kimi decidir**

Apenas descreva o que você precisa. A Kimi identificará e acionará automaticamente a Skill mais adequada com base no conteúdo da sua tarefa.

### Exemplo: usando Skills para gerar um relatório de análise de SEO

Suponha que você seja um gerente de conteúdo que deseja analisar o desempenho de SEO do seu site:

1. Digite `/` na caixa de entrada, encontre e selecione a Skill `seo-analyzer`.
2. Continue digitando: `Por favor, analise o desempenho de SEO de https://help.com/zh-cn/help, liste os principais problemas e sugestões de otimização.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="Análise de SEO"
/>

3. Após o envio, a Kimi vai automaticamente pesquisar, organizar e gerar um relatório estruturado seguindo o fluxo de trabalho de análise de SEO.

Você não precisa dizer à Kimi como fazer a análise — o fluxo de trabalho já está definido na Skill.

## Descubra e gerencie Skills

### Escolhas da Kimi

A Kimi oferece um conjunto de skills recomendadas prontas para uso, disponíveis para adição com um clique:

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Skills recomendadas"
/>

## Personalize Skills

Se as skills recomendadas pela Kimi não atenderem às suas necessidades, você pode criar skills personalizadas, ajustadas ao seu fluxo de trabalho específico.

**Quando você deve criar uma skill personalizada?**

- Você tem uma tarefa recorrente que precisa ser executada repetidamente (por exemplo, relatórios semanais de concorrentes).
- Você quer que a Kimi gere conteúdo no formato específico da sua empresa.
- Você tem um conjunto de métodos de trabalho que deseja que a Kimi siga diretamente.

Uma boa skill deve fazer uma única coisa e fazê-la bem. Não tente colocar todos os requisitos em uma única skill.

### Opção 1: documento para skills

Se você já tem modelos prontos, documentos padrão ou arquivos de exemplo, pode enviá-los diretamente e deixar a Kimi aprender e gerar a skill correspondente.

1. Selecione **Documento do Office para Skill** no painel de **Skills**.
2. Clique ou arraste arquivos para a área de upload. Formatos suportados: `docx`, `xlsx`, `pdf`, `pptx` e capturas de tela de documentos. No máximo 3 arquivos por upload, cada um não excedendo 100 MB.

<Frames
  src="./images/skills/document.png"
  alt="Enviar documentos para gerar skills"
/>

3. Preencha a descrição da skill, dizendo à Kimi o que essa skill deve fazer. Por exemplo: "Me ajude a organizar os dados de vendas semanais seguindo o estilo e o formato deste modelo."
4. Clique em **Criar Skill**.

### Opção 2: criar com a Kimi

Se você não tem documentos prontos, pode descrever seus requisitos diretamente por meio de uma conversa, e a Kimi vai guiá-lo passo a passo na criação da skill.

Digite `/skill-creator` na caixa de entrada e descreva que Skill você deseja criar. A Kimi vai ajudá-lo a organizar os requisitos em uma Skill completa.

<Frames
  src="./images/skills/create-skill-en.png"
  alt="Criar Skills por meio de conversa"
/>

### Gerenciar Skills existentes

No painel de **Skills**, vá até a aba **Skills Personalizadas** para editar, atualizar documentos ou excluir Skills que você criou.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Gerenciar Skills personalizadas"
/>

<Callout type="info">
As Skills são suportadas no Modo Agent e no Kimi Claw. Skills com o sufixo `swarm` estão disponíveis apenas em cenários de Swarm (cluster de Agent) e não serão exibidas em outros contextos.
</Callout>

## Escrevendo descrições de Skill eficazes

A Kimi se baseia nas descrições das Skills para determinar "quando usar esta Skill". Quanto mais clara for a sua descrição, com mais precisão a Skill será acionada.

Uma descrição completa de Skill deve incluir:
- A função principal da Skill.
- Para quais cenários ela é adequada.
- As palavras-chave às quais ela responde.
- O reconhecimento de menções indiretas ao requisito.

<ComparisonBlock
  wrong={"Ajudar os usuários a pesquisar e descobrir Skills."}
  correct={"Ajudar os usuários a pesquisar e descobrir Skills. Usada quando os usuários querem explicitamente encontrar um determinado tipo de Skill ou descrevem um problema na esperança de receber recomendações de Skills. As palavras-chave incluem 'Encontrar Skills', 'Pesquisar Skills', 'Existe uma Skill que faça X?', etc."}
/>
