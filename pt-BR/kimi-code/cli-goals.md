---
title: "Metas"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "Use metas para manter o Kimi Code trabalhando em direção a um resultado definido ao longo de várias interações."
---

<SeoMeta
  title="Metas - Central de Ajuda do Kimi"
  description="Use /goal para manter o Kimi Code trabalhando em direção a um resultado definido ao longo de várias interações. Aprenda quando usar metas, como gerenciar seu ciclo de vida e como enfileirar metas futuras."
/>

# Metas

As metas mantêm o Kimi Code trabalhando em direção a um resultado definido ao longo de várias interações. Diferentemente de um prompt comum, que diz o que fazer em seguida, uma meta define o que precisa se tornar verdadeiro. Use `/goal` quando a tarefa tem uma linha de chegada clara, mas o próximo passo útil depende do que o agente descobre enquanto trabalha — por exemplo, corrigir um lote de testes que falham ou rastrear a causa raiz de um build quebrado.

## Iniciar uma meta

Escreva o objetivo após `/goal`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix bugs listed in the issue tracker.",
    },
  ]}
/>

O Kimi Code salva o objetivo, envia-o como a próxima mensagem do usuário e inicia o modo de meta. Após cada interação, ele verifica se a meta está concluída, bloqueada, pausada ou ainda ativa.

As metas funcionam melhor quando o objetivo indica a linha de chegada e a evidência que a comprova:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix every bug labeled checkout-regression, add or update tests for each fix, and run the checkout test suite",
    },
  ]}
/>

Evite metas que apenas indicam uma direção genérica:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find all bugs in this codebase.",
    },
  ]}
/>

Essa meta não diz o que conta como sucesso, o que inspecionar ou quando parar. O agente pode bloquear imediatamente ou continuar trabalhando por muito mais tempo do que você esperava.

### Quando usar metas

Use metas para trabalhos com uma linha de chegada clara e evidências verificáveis.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix every failing checkout test and run the checkout test suite successfully.",
    },
  ]}
/>

O Kimi Code pode inspecionar a saída dos testes, alterar arquivos, reexecutar verificações e decidir quando a meta está concluída.

Use metas quando a tarefa pode exigir várias interações de investigação e correção.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find why the release build fails, fix the root cause, and verify the build passes.",
    },
  ]}
/>

A meta descreve o resultado, então o agente consegue se adaptar quando a primeira pista não é a causa raiz.

Use metas para trabalhos sequenciais que devem continuar sem um novo prompt.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Update the feature implementation, add docs, run tests, and summarize the changed files.",
    },
  ]}
/>

Isso é útil quando você já sabe quais verificações ou artefatos precisam existir antes de o trabalho estar concluído.

### Quando não usar metas

Não use metas para tópicos amplos ou discussões abertas.

**Contraexemplo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Greetings!",
    },
  ]}
/>

<Callout type="warning">
Os agentes marcarão a meta como concluída imediatamente para o que não for uma meta.
</Callout>

Não use metas para tarefas que se sabem impossíveis ou irresolúveis.

**Contraexemplo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Prove 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
Os agentes marcarão a meta como bloqueada se ela parecer impossível ou irresolúvel.
</Callout>

Não use metas com objetivos ambíguos ou complicados.

**Contraexemplo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Create a videogame in a single HTML file.",
    },
  ]}
/>

<Callout type="warning">
Os agentes podem concluir as metas, mas também podem produzir resultados inesperados ou surpreendentes depois de muito tempo.
</Callout>

## Gerenciar o ciclo de vida

Use o mesmo conjunto de comandos para inspecionar ou controlar a meta atual:

| Comando | Ação |
| --- | --- |
| `/goal` ou `/goal status` | Exibe a meta atual e seu progresso |
| `/goal pause` | Pausa a meta ativa sem excluí-la |
| `/goal resume` | Retoma uma meta pausada ou bloqueada |
| `/goal cancel` | Remove a meta atual |
| `/goal replace <objective>` | Substitui a meta atual por um novo objetivo |

Uma meta pode parar de três formas:

- **concluída**: o objetivo foi cumprido, o Kimi Code limpa a meta e o agente resume como concluiu o trabalho
- **pausada**: você a pausou, interrompeu a interação, retomou uma sessão que tinha uma meta ativa ou encontrou um erro de modelo, provedor ou runtime
- **bloqueada**: o Kimi Code precisa de uma entrada, não consegue concluir a meta como descrita ou atingiu um limite de orçamento. Quando o agente bloqueia uma meta, ele escreve uma breve mensagem explicando o motivo.

Escreva as condições de parada no próprio objetivo. O `/goal` não tem uma flag separada de limite de parada.

## Enfileirar metas futuras

Às vezes, os agentes concluem uma meta rápido demais. Os usuários podem se frustrar por só conseguir atribuir uma meta de cada vez. Muitas pessoas já sabem quais metas futuras querem perseguir. Antes, elas tinham que esperar a meta atual concluir, abrir a TUI e enviar a próxima meta manualmente.

Use `/goal next` quando você já tem mais trabalho pronto, mas não quer interromper a meta atual:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Update the release notes after the tests pass",
    },
  ]}
/>

As metas futuras não ficam visíveis para o agente enquanto a meta atual está em execução. Quando a meta atual é concluída, o Kimi Code inicia a primeira meta futura da mesma forma que os usuários inserem `/goal <objective>`.

Se nenhuma meta estiver ativa, `/goal next <objective>` inicia esse objetivo imediatamente. Ele se comporta como `/goal <objective>` e exibe uma mensagem de status antes de a meta começar.

Gerencie as metas futuras de forma interativa:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

No gerenciador, use <kbd>↑</kbd> / <kbd>↓</kbd> para navegar, <kbd>Space</kbd> para selecionar uma meta a mover, <kbd>↑</kbd> / <kbd>↓</kbd> para reordená-la, <kbd>E</kbd> para editar, <kbd>D</kbd> para excluir e <kbd>Esc</kbd> para cancelar. Ao editar, use <kbd>Shift-Enter</kbd> ou <kbd>Ctrl-J</kbd> para adicionar uma nova linha e <kbd>Enter</kbd> para salvar.

Se a meta atual estiver pausada, cancelada ou bloqueada, o Kimi Code não inicia a próxima meta futura. Quando uma meta é bloqueada e existem metas futuras, a TUI lembra você de que elas estão aguardando a conclusão.

## Use o modo de meta com cuidado

O modo de meta é útil para trabalhos que podem ser verificados por arquivos, testes, saída de comandos, artefatos gerados ou um relatório escrito de forma clara. Ele é menos útil para uma edição pontual ou uma pergunta que precisa de apenas uma resposta.

No modo de permissão `manual`, o trabalho da meta pode pausar para aprovação de chamadas de ferramentas. Para trabalho não supervisionado, use um modo de permissão compatível com o risco do repositório e com os comandos que o agente pode executar.

No modo de prompt não interativo, apenas a criação de metas é suportada:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Fix the failing checkout test\"",
    },
  ]}
/>

O modo de prompt encerra com o código `0` quando a meta é concluída, `3` quando ela é bloqueada e `6` quando é pausada. Os comandos `/goal next` e outros comandos de gerenciamento são controles da TUI.
