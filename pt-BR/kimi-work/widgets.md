---
title: "Widgets"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Widgets do Kimi Work - Central de Ajuda Kimi"
  description="Conheça os Widgets do Kimi Work: páginas interativas geradas pelo modelo diretamente em uma conversa. Vincule uma Widget Task para criar um Live Widget que se atualiza continuamente e salve widgets no seu Dashboard."
/>

# Widgets

Um widget é uma página interativa gerada pelo modelo e apresentada instantaneamente em uma conversa. Você não precisa dar instruções explícitas sobre o entregável — o modelo cria um widget quando isso se adequa ao cenário (por exemplo, mostrar um mapa, redigir um e-mail, organizar uma receita ou visualizar dados), ajudando você a entender a resposta de forma mais rápida e intuitiva.

Os widgets podem se conectar a dados locais ou plugins externos para atualizações contínuas e podem ser salvos no seu [Dashboard](/kimi-work/dashboard) para visualização e gerenciamento de longo prazo.

## Gerando um widget

1. Descreva o que você precisa em linguagem natural em uma conversa, por exemplo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crie para mim um widget de resumo diário de notícias de tecnologia dos EUA, atualizado todos os dias às 9h",
    },
  ]}
/>

2. Durante a geração, você pode acompanhar a página do widget tomando forma passo a passo;
3. Depois de gerado, o widget já está pronto para interagir diretamente na conversa.

## Widget Tasks e Live Widgets

- **Widget Task**: uma tarefa que é executada automaticamente quando condições específicas são atendidas — ela pode ser acionada por um agendamento ou por um evento.
- **Live Widget**: um widget vinculado a uma Widget Task, cujo conteúdo é atualizado automaticamente a cada execução da tarefa. Por exemplo, quando o widget "Resumo diário de notícias de tecnologia dos EUA" é vinculado a uma tarefa executada todas as manhãs, seu conteúdo é atualizado automaticamente todos os dias.

<Callout type="info">
Há um limite para a quantidade de Widget Tasks que podem ser executadas ao mesmo tempo, e ele varia conforme o plano. Ao atingir o limite, pause algumas tarefas na página do Dashboard antes de criar novas.
</Callout>

## Salvando no Dashboard

Depois que um widget é gerado, passe o mouse sobre ele e selecione "Save to Dashboard" para salvá-lo em um dashboard. Um mesmo widget pode existir em vários dashboards ao mesmo tempo.

No Dashboard, você também pode visualizar a tarefa vinculada a um Live Widget, ativá-la ou desativá-la e conferir suas 10 execuções mais recentes. Consulte [Dashboard](/kimi-work/dashboard).
