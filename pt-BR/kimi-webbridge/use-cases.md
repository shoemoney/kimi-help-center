---
title: "Demonstração de casos de uso do Kimi WebBridge"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Demonstração de casos de uso do Kimi WebBridge - Central de Ajuda Kimi"
  description="Conheça casos de uso típicos do Kimi WebBridge, incluindo exemplos de Skill e CLI para planejamento de viagens, busca de imóveis para aluguel, pesquisa bibliográfica e muito mais."
  ogType="article"
/>

# Demonstração de casos de uso do Kimi WebBridge

O Kimi WebBridge permite que um Agente opere o navegador como uma pessoa real, usando sites nos quais você já está conectado para navegar, extrair e organizar informações automaticamente.

<Callout type="tip">
Ao usar o WebBridge, quanto mais específica for a descrição da sua tarefa, mais precisão o Agente terá para concluí-la. Recomendamos informar o site de destino, os filtros e o formato de saída desejado. Se a estrutura da página for complexa, você também pode pedir ao Agente que primeiro faça uma captura de tela para confirmar o estado da página antes de prosseguir.
</Callout>

Na prática, o WebBridge costuma ser usado junto com Skill e CLI: a Skill registra a experiência da tarefa — quais sites visitar, quais etapas seguir para coletar informações e como organizar os resultados; a CLI oferece recursos concretos, como pesquisar, ler páginas, baixar arquivos e consultar dados estruturados.

Diga ao AI Agent, em uma frase, o que você faz repetidamente na web. Ele pode gerar uma CLI para você que usa diretamente sua sessão real de login no Chrome — sem API e sem precisar configurar nem gerenciar token de API.

As Skills e CLIs usadas nos cenários abaixo foram criadas dessa forma. Você pode instalá-las e usá-las diretamente ou tratá-las como exemplos de referência.

<Callout type="warning">
As Skills e CLIs fornecidas nesta página servem apenas para fins didáticos e intercâmbio técnico. Em caso de dúvidas ou preocupações, entre em contato pelo <a href="mailto:support@moonshot.ai">support@moonshot.ai</a>.
</Callout>

## Busca e organização de informações

Quando você precisa pesquisar em vários sites, o WebBridge pode permitir que o Agente abra automaticamente as páginas de destino, extraia o conteúdo principal e organize tudo em uma saída estruturada, poupando o trabalho tedioso de abrir páginas uma a uma e copiar e colar manualmente.

### Planejamento de viagens

Alterne entre plataformas de voos, sites de reserva de hotéis e comunidades de viagem para comparar preços e horários; depois, organize roteiros, tabelas de orçamento e sugestões de hospedagem.

Ferramentas relacionadas:

- Skill: [travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI: [ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli), [booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Estou planejando uma viagem de 5 dias e 4 noites para Kyoto em novembro, para duas pessoas, com orçamento em torno de RMB 8.000. Verifique voos, hotéis e horários de funcionamento das atrações, e organize os resultados em um roteiro dia a dia e uma tabela de orçamento.",
    },
  ]}
/>

Instalação e uso:

1. Baixe ctrip-cli e booking-cli em [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Execute `npx skills add better-world-ai/x-cli --skill travel-planning`
3. Abra um Agente local, como um cliente compatível com Skill, por exemplo Kimi Code, Claude Code, Codex CLI ou Cursor, e envie o prompt acima

### Triagem de imóveis para aluguel

Pesquise em várias plataformas de aluguel ao mesmo tempo, filtre anúncios por valor do aluguel, deslocamento, tipo de unidade e outros critérios, consolide as informações e ranqueie as recomendações.

Ferramentas relacionadas:

- Skill: [rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI: [58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli), [anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli), [apartments-cli](https://github.com/better-world-ai/x-cli/tree/main/apartments-cli), [rightmove-cli](https://github.com/better-world-ai/x-cli/tree/main/rightmove-cli), [idealista-cli](https://github.com/better-world-ai/x-cli/tree/main/idealista-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ajude-me a encontrar imóveis para alugar perto da estação Zhangjiang Hi-Tech Park, em Xangai. Meu orçamento é de até RMB 4.500, o tempo de deslocamento deve ser inferior a 40 minutos e prefiro um apartamento inteiro de um quarto. Abra várias plataformas, organize links dos anúncios, preços, áreas e tempos de deslocamento, e forneça uma lista de contatos por prioridade.",
    },
  ]}
/>

Instalação e uso:

1. Baixe 58-cli, anjuke-cli, apartments-cli, rightmove-cli e idealista-cli em [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Execute `npx skills add better-world-ai/x-cli --skill rental-assistant`
3. Abra um Agente local, como um cliente compatível com Skill, por exemplo Kimi Code, Claude Code, Codex CLI ou Cursor, e envie o prompt acima

## Pesquisa e análise de conteúdo

O WebBridge pode ajudar o Agente a navegar automaticamente pelos resultados de busca, abrir páginas de detalhes, extrair títulos, dados, comentários e outras informações, e então analisá-las e resumi-las. Ele é especialmente indicado para tarefas de pesquisa que exigem navegar por muitas páginas da web.

### Pesquisa bibliográfica

Pesquise literatura acadêmica, extraia resumos de artigos, métodos centrais, conclusões experimentais e relações de citação, e gere uma revisão estruturada.

Ferramentas relacionadas:

- Skill: [paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI: [scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Pesquise artigos representativos dos últimos dois anos sobre memória de agentes de IA, organize títulos, autores, resumos, métodos centrais e links de código aberto, e resuma a trajetória da pesquisa.",
    },
  ]}
/>

Instalação e uso:

1. Baixe scholar-cli em [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Execute `npx skills add better-world-ai/x-cli --skill paper-research`
3. Abra um Agente local, como um cliente compatível com Skill, por exemplo Kimi Code, Claude Code, Codex CLI ou Cursor, e envie o prompt acima

### Pesquisa aprofundada de temas

Quando você quer entender um tema desconhecido, o jeito antigo é abrir um mecanismo de busca, clicar em cada resultado e ler tudo, copiar os pontos principais e organizá-los em notas — meio dia vai embora.

Deixe a IA executar esse processo por você: ela pesquisa automaticamente, acessa os resultados para capturar o texto completo e pode sintetizar um resumo ou manter o texto original para você ler. Para temas de pesquisa, acompanhamento de novidades em uma área ou coleta de material para escrita, use esse recurso primeiro para reunir as informações em um só lugar.

Ferramentas relacionadas:

- CLI: [google-cli](https://github.com/better-world-ai/x-cli/tree/main/google-cli), [baidu-cli](https://github.com/better-world-ai/x-cli/tree/main/baidu-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Pesquise modelos de IA locais que valem a pena usar em 2025 e recupere o texto completo dos 10 principais resultados.",
    },
  ]}
/>

Instalação e uso:

1. Baixe google-cli ou baidu-cli em [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Abra um Agente local, como um cliente compatível com Skill, por exemplo Kimi Code, Claude Code, Codex CLI ou Cursor, e envie o prompt acima

## Apoio ao trabalho cotidiano

Use os recursos de automação do WebBridge para lidar com operações repetitivas na web e aumentar a eficiência do trabalho.

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

Para ver mais casos de uso, consulte o [site oficial do Kimi WebBridge](https://www.kimi.com/zh-cn/features/webbridge).
