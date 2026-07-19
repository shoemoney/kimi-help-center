---
title: "Tarefas agendadas"
slug: "scheduled-tasks"
order: 5
extract_headings: false
preview: true
preview_content: "As tarefas agendadas permitem que Kimi execute automaticamente uma tarefa fixa no horário definido por você — ideal para briefings diários, monitoramento semanal e limpezas regulares. Disponível em Kimi e no aplicativo desktop Kimi Work."
---

<SeoMeta
  title="Como usar as tarefas agendadas do Kimi - Central de Ajuda Kimi"
  description="Conheça as tarefas agendadas do Kimi: faça Kimi executar automaticamente uma tarefa em um horário definido, com programações diárias, semanais, mensais ou únicas, data de expiração opcional e possibilidade de combinar com Skills para trabalhos mais complexos. Ideal para briefings diários, monitoramento setorial semanal e limpezas periódicas de dados. Disponível em Kimi e no aplicativo desktop Kimi Work."
/>

# Tarefas agendadas

As tarefas agendadas permitem que Kimi execute automaticamente uma tarefa fixa no horário definido por você, sem que seja preciso iniciá-la manualmente a cada vez. Elas são ideais para trabalhos recorrentes — briefings diários, monitoramento setorial semanal, limpezas periódicas de dados e assim por diante.

As tarefas agendadas são um recurso geral, disponível em **Kimi** e no **aplicativo desktop Kimi Work**.

## Criar uma tarefa agendada

Há duas formas:

- **Pelo ponto de entrada**: clique em "Criar tarefa agendada" na barra lateral e preencha a tarefa na janela de diálogo;
- **A partir de uma conversa**: descreva sua necessidade de agendamento em linguagem natural, e Kimi criará uma tarefa agendada para você, redigindo automaticamente o título, a programação e o conteúdo da tarefa.

Uma tarefa agendada inclui:

- **Título**: resume a tarefa para que ela seja fácil de encontrar na lista de tarefas;
- **Programação**: diária, semanal, mensal ou sem repetição (única);
- **Data de expiração**: você pode definir quando a tarefa expira (selecionada por padrão ao criar);
- **Conteúdo da tarefa**: um prompt que descreve o que a tarefa deve fazer. No horário agendado, Kimi executa esse prompt fixo.

## Escrever um bom prompt de tarefa

Um bom prompt de tarefa informa três coisas de uma vez:

- **Quando**: quando executá-la (uma data específica / um horário todos os dias / um dia da semana);
- **Formato de saída**: como você quer o resultado (pontos principais, uma tabela, um modelo, contagem de palavras, idioma);
- **Restrições**: o que ela não deve fazer ou o que precisa atender (por exemplo, até 200 palavras, somente em chinês, incluir uma observação de risco, gerar apenas 3 itens).

**Modelo universal**: Em [horário], faça [tarefa], gere em [formato] e siga [restrições].

Veja alguns exemplos que você pode copiar e adaptar:

<CodePreview
  files={[
    {
      name: "market-news.txt",
      language: "text",
      content: "Todos os dias às 9:00, resuma as últimas notícias do mercado em 3 pontos principais mais 1 observação de risco, em chinês, com até 200 palavras.",
    },
    {
      name: "daily-report-reminder.txt",
      language: "text",
      content: "Daqui a 1 hora, lembre-me de concluir o relatório de trabalho de hoje e anexe o modelo de relatório (estrutura em quatro partes).",
    },
    {
      name: "bedtime-reminder.txt",
      language: "text",
      content: "Hoje às 22:30, lembre-me de: desligar o computador, me lavar e me preparar para dormir. Mantenha um tom gentil.",
    },
  ]}
/>

## Gerenciar tarefas agendadas

A **lista de tarefas** mostra todas as suas tarefas agendadas (ordenadas por horário). Em cada cartão de tarefa, você pode:

- ativar ou desativar a tarefa;
- acessar mais ações: localizar a tarefa, executá-la uma vez agora, editar e excluir.

Em uma conversa, uma tarefa agendada aparece como um **cartão de tarefa** que mostra título, frequência, próximo horário de execução e conteúdo — ali também é possível executá-la agora, pausar, editar ou excluir.

## Execução e notificações

- No horário agendado, Kimi executa o prompt fixo definido na tarefa;
- Cada execução cria uma notificação marcada como não lida; você pode ver o resultado de cada execução e ir para a conversa correspondente;
- O status de leitura é sincronizado entre web e dispositivos móveis;
- Depois que uma tarefa é executada, você pode **escolher um modelo para continuar fazendo perguntas de acompanhamento** na conversa de resultado e digitar "/" para **invocar plugins e Skills**.

## Combinar com Skills

As tarefas agendadas podem ser combinadas com **Skills** para lidar com trabalhos mais complexos — especialmente as Skills de **finanças** do Kimi (dados de mercado, análise de resultados e assim por diante).

Antes de usar uma, **instale e teste a Skill primeiro**, confirmando que ela funciona como esperado, e então use-a em uma tarefa agendada.

## Expiração

Uma data de expiração é selecionada por padrão quando você cria uma tarefa, para evitar que tarefas desatualizadas fiquem acumuladas. As expirações padrão são:

- Diária: +7 dias;
- Semanal: +1 mês;
- Mensal: +3 meses.

<Callout type="info">
As tarefas agendadas executadas localmente no aplicativo desktop Kimi Work não estão sujeitas às regras de expiração acima; tarefas locais são executadas em seu ciclo enquanto o aplicativo estiver aberto, e acionamentos perdidos enquanto o aplicativo estava fechado não são executados depois.
</Callout>

## Quotas e planos

As tarefas agendadas limitam a quantidade de **tarefas que você pode manter ativas ao mesmo tempo** (não há limite para quantas você cria). O número de tarefas ativas varia conforme seu plano de assinatura:

| Plano | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Tarefas agendadas | 2 | 6 | 15 | 20 | 25 |

- Quando você atinge o limite de tarefas ativas e cria outra tarefa, a nova tarefa é **salva como inativa**, com um aviso para fazer upgrade ou desativar algumas tarefas;
- Se seu limite de tarefas ativas diminuir (downgrade de plano ou benefícios expirados), as tarefas acima do limite serão pausadas automaticamente.

Para ver as quotas mais recentes, consulte a [página de planos de assinatura](/membership/membership-pricing).

<Callout type="tip">
**Dica**: Antes de agendar uma tarefa, teste o conteúdo uma vez em uma conversa normal ou use "Executar uma vez agora" para verificá-la — confirme que a redação está clara e que o resultado é o esperado antes de confiar na programação. Se a tarefa depender de uma Skill, instale e teste essa Skill primeiro.
</Callout>

## Perguntas frequentes

### Há limite para a quantidade de tarefas agendadas que posso criar?
Não há limite para quantas você cria, mas a quantidade que pode ficar **ativa ao mesmo tempo** varia conforme seu plano. Ao exceder o limite de tarefas ativas, uma nova tarefa é salva como inativa; você pode fazer upgrade ou desativar algumas tarefas para ativá-la.

### Preciso manter meu computador ou aplicativo aberto para as tarefas serem executadas?
Tarefas agendadas criadas no Kimi são executadas na nuvem — você não precisa manter um cliente aberto. Tarefas executadas localmente no aplicativo desktop Kimi Work exigem que o aplicativo esteja aberto; acionamentos perdidos enquanto ele estiver fechado não são executados depois.

### Posso escolher um modelo quando uma tarefa agendada é executada?
Você não pode escolher um modelo ao criar uma tarefa. Depois que ela for executada, você pode escolher um modelo para continuar fazendo perguntas de acompanhamento na conversa de resultado e digitar "/" para invocar plugins e Skills.

### E se eu atingir o limite de tarefas ativas?
Desative as tarefas de que não precisa mais ou faça upgrade do plano para ter um limite maior de tarefas ativas. Consulte a [página de planos de assinatura](/membership/membership-pricing) para ver os detalhes.
