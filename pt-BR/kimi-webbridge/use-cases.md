---
title: "Demonstração de casos de uso da Extensão de navegador Kimi"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Demonstração de casos de uso da Extensão de navegador Kimi - Central de Ajuda Kimi"
  description="Conheça casos de uso típicos da Extensão de navegador Kimi: planejamento de viagens, busca de imóveis para aluguel, pesquisa bibliográfica, comparação de preços e muito mais, com exemplos de prompts prontos para copiar."
  ogType="article"
/>

# Demonstração de casos de uso da Extensão de navegador Kimi

Todas as tarefas abaixo podem ser entregues diretamente ao Kimi: converse na barra lateral ou deixe um Agent local executá-las.

## Busca e organização de informações

Quando você precisa pesquisar em vários sites, a Extensão de navegador Kimi pode permitir que o Agente abra automaticamente as páginas de destino, extraia o conteúdo principal e organize tudo em uma saída estruturada, poupando o trabalho tedioso de abrir páginas uma a uma e copiar e colar manualmente.

### Planejamento de viagens

Alterne entre plataformas de voos, sites de reserva de hotéis e comunidades de viagem para comparar preços e horários; depois, organize roteiros, tabelas de orçamento e sugestões de hospedagem.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Estou planejando uma viagem de 5 dias e 4 noites para Kyoto em novembro, para duas pessoas, com orçamento em torno de RMB 8.000. Verifique voos, hotéis e horários de funcionamento das atrações, e organize os resultados em um roteiro dia a dia e uma tabela de orçamento.",
    },
  ]}
/>

### Triagem de imóveis para aluguel

Pesquise em várias plataformas de aluguel ao mesmo tempo, filtre anúncios por valor do aluguel, deslocamento, tipo de unidade e outros critérios, consolide as informações e ranqueie as recomendações.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ajude-me a encontrar imóveis para alugar perto da estação Zhangjiang Hi-Tech Park, em Xangai. Meu orçamento é de até RMB 4.500, o tempo de deslocamento deve ser inferior a 40 minutos e prefiro um apartamento inteiro de um quarto. Abra várias plataformas, organize links dos anúncios, preços, áreas e tempos de deslocamento, e forneça uma lista de contatos por prioridade.",
    },
  ]}
/>

## Pesquisa e análise de conteúdo

A Extensão de navegador Kimi pode ajudar o Agente a navegar automaticamente pelos resultados de busca, abrir páginas de detalhes, extrair títulos, dados, comentários e outras informações, e então analisá-las e resumi-las. Ela é especialmente indicada para tarefas de pesquisa que exigem navegar por muitas páginas da web.

### Pesquisa bibliográfica

Pesquise literatura acadêmica, extraia resumos de artigos, métodos centrais, conclusões experimentais e relações de citação, e gere uma revisão estruturada.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Pesquise artigos representativos dos últimos dois anos sobre memória de agentes de IA, organize títulos, autores, resumos, métodos centrais e links de código aberto, e resuma a trajetória da pesquisa.",
    },
  ]}
/>

### Pesquisa aprofundada de temas

Quer entender um tema com o qual você não está familiarizado? Deixe o Kimi pesquisar automaticamente, ler os resultados um por um e reunir tudo em um resumo.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Pesquise modelos de IA locais que valem a pena usar em 2025 e recupere o texto completo dos 10 principais resultados.",
    },
  ]}
/>

## Apoio ao trabalho cotidiano

Use os recursos de automação da Extensão de navegador Kimi para lidar com operações repetitivas na web e aumentar a eficiência do trabalho.

### Comparação de preços em e-commerce

Pesquise o mesmo produto em várias plataformas de e-commerce, compare preços, especificações e avaliações de usuários, e organize as melhores opções de compra.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Quero comprar um monitor 4K de 27 polegadas com orçamento em torno de RMB 2.000. Pesquise e compare opções nas principais plataformas de e-commerce, organize preços, marcas e avaliações de usuários, e recomende as opções com melhor custo-benefício.",
    },
  ]}
/>

### Extração de dados da web

Extraia dados estruturados, como tabelas e listas, de páginas da web e organize-os automaticamente no formato especificado, evitando o trabalho de copiar e colar manualmente.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ajude-me a abrir esta página da web, extrair a tabela de preços de produtos na página e gerar a saída como uma lista clara.",
    },
  ]}
/>

## Transforme fluxos de trabalho repetidos em Skills

Quando o mesmo fluxo de trabalho precisa ser executado repetidamente, você não precisa reenviar a instrução todas as vezes. O Kimi pode "aprender" o processo e salvá-lo como uma Skill — depois disso, basta digitar `/` para invocá-la a qualquer momento.

### Grave operações como uma Skill

Ideal para rotinas web com passos fixos, como abrir um painel para exportar dados todos os dias ou preencher o mesmo formulário.

1. Digite `/` na barra lateral e escolha "Gravar operações como uma Skill"
2. Execute os passos uma vez como de costume — o Kimi registra cada ação
3. Clique em "Parar e gerar" e o Kimi transformará essa execução em uma Skill
4. Confirme o nome, os passos e os parâmetros da Skill e salve (informações sensíveis, como senhas, podem ser definidas como parâmetros confidenciais e preenchidas no momento da reprodução)

Depois, digite `/` e escolha a Skill para que o Kimi a repita por você. Você pode editar os passos e o conteúdo da Skill a qualquer momento.

### Transforme uma página em uma Skill

Ideal para sites que você usa com frequência, como um painel de dados fixo ou um sistema interno.

Digite `/` na barra lateral e escolha "Transformar página em Skill". O Kimi analisa automaticamente a estrutura e o funcionamento do site, empacota tudo em uma Skill pronta para uso e, depois de salva, você pode invocá-la a qualquer momento com `/`.

### Salve esta sessão como uma Skill

Se o Kimi já concluiu um bom fluxo na conversa atual, você também pode salvá-lo diretamente para reutilizar: digite `/` e escolha "Salvar sessão como uma Skill".

Para ver mais casos de uso, consulte o [site oficial da Extensão de navegador Kimi](https://www.kimi.com/zh-cn/features/webbridge).
