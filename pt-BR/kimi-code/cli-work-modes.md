---
title: "Modos de trabalho"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "Como usar o modo Plan e o Thinking mode no Kimi Code CLI, e quando usar cada um."
---

<SeoMeta
  title="Modos de trabalho do Kimi Code CLI - Central de Ajuda Kimi"
  description="Aprenda a usar o modo Plan e o Thinking mode no Kimi Code CLI, e saiba quando usar cada um."
/>

# Modos de trabalho

## Modo Plan

O modo Plan é um modo de planejamento somente leitura que permite à IA criar um plano de implementação antes de começar a programar, ajudando a evitar esforço desperdiçado na direção errada.

No modo Plan, a IA só pode usar ferramentas somente leitura (`Glob`, `Grep`, `ReadFile`) para explorar a base de código. Ela não pode modificar arquivos nem executar comandos. A IA grava o plano em um arquivo de plano dedicado e, em seguida, envia-o para sua aprovação. Você pode aprová-lo, rejeitá-lo ou enviar comentários de revisão.

### Entrar no modo Plan

Você pode entrar no modo Plan de quatro maneiras:

- **Opção de inicialização**: Use `kimi --plan` para iniciar uma nova sessão diretamente no modo Plan
- **Atalho de teclado**: Pressione `Shift-Tab` para ativar ou desativar o modo Plan
- **Comando de barra**: Digite `/plan` ou `/plan on`
- **Iniciado pela IA**: Em tarefas complexas, a IA pode solicitar a entrada no modo Plan por meio da ferramenta `EnterPlanMode`. Você pode aceitar ou recusar

Você também pode definir `default_plan_mode = true` no arquivo de configuração para que toda nova sessão comece no modo Plan por padrão.

Depois de entrar no modo Plan, o prompt muda para `📋`, e a barra de status inferior mostra um indicador azul `plan`.

### Revisar e aprovar planos

Quando a IA conclui o plano, ela o envia para aprovação por meio de `ExitPlanMode`. O painel de aprovação exibe o plano completo. Você pode:

- **Aprovar execução**: Se o plano incluir vários caminhos de implementação, a IA lista 2–3 opções identificadas (como "Plano A" ou "Plano B (recomendado)") para você escolher. Depois que você seleciona uma delas, a IA sai do modo Plan e executa esse caminho. Se houver apenas um caminho, um botão **Aprovar** será exibido
- **Rejeitar**: Rejeite o plano e permaneça no modo Plan. Você pode enviar feedback na conversa
- **Rejeitar e sair**: Rejeite o plano e saia do modo Plan em uma única etapa
- **Revisar**: Insira comentários de revisão. A IA atualizará o plano de acordo e o enviará novamente

Pressione `Ctrl-E` para ver o plano completo no paginador em tela cheia.

### Gerenciar o modo Plan

Use o comando `/plan` para gerenciar o modo Plan:

- `/plan`: Ativar ou desativar o modo Plan
- `/plan on`: Ativar o modo Plan
- `/plan off`: Desativar o modo Plan
- `/plan view`: Ver o plano atual
- `/plan clear`: Limpar o arquivo do plano atual

## Thinking mode

O Thinking mode permite que a IA pense com mais profundidade antes de responder, sendo indicado para problemas complexos.

Você pode usar o comando `/model` para alternar modelos e o Thinking mode. Depois que você seleciona um modelo, se ele for compatível com o Thinking mode, o sistema perguntará se deseja ativá-lo. Você também pode ativá-lo na inicialização com a opção `--thinking`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> Dica: o Thinking mode precisa ser compatível com o modelo atual. Alguns modelos, como `kimi-k2-thinking-turbo`, sempre usam o Thinking mode e não permitem desativá-lo.
