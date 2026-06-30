---
title: "Sessões e contexto"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Sessões e contexto - Central de Ajuda Kimi"
  description="O Kimi Code CLI oferece gerenciamento de múltiplas sessões e persistência de contexto, permitindo pausar e retomar o trabalho a qualquer momento."
/>

# Sessões e contexto

O Kimi Code CLI oferece gerenciamento de múltiplas sessões e persistência de contexto, permitindo pausar e retomar o trabalho a qualquer momento.

## Retomada de sessão

Você pode retomar uma sessão anterior de várias formas:

### Continuar a sessão mais recente

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

Use a flag `--continue` (ou `-c`) para continuar a última conversa.
### Especificar um ID de sessão

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session \u003csession-id\u003e",
    },
  ]}
/>

Use a flag `--session` para restaurar uma sessão específica.

### Navegar e alternar

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

Execute `/sessions` (ou `/resume`) para ver a lista de sessões e selecionar uma para restaurar.
## Replay na inicialização

Ao retomar uma sessão, o Kimi Code CLI reproduz automaticamente o histórico da conversa, ajudando você a relembrar rapidamente o contexto e o progresso anteriores.

## Persistência de estado

O seguinte estado é salvo e restaurado automaticamente entre sessões:

- **Decisões de aprovação**: decisões como "Permitir durante a sessão" são lembradas.
- **Subagentes dinâmicos**: as configurações de subagentes criadas durante uma sessão são preservadas.
- **Diretórios adicionais**: diretórios de trabalho extras adicionados via comandos também são mantidos.

Isso significa que você pode continuar seu trabalho anterior sem interrupções após retomar uma sessão.

## Limpar e compactar

O Kimi Code CLI compacta automaticamente o contexto quando necessário para garantir que a conversa possa continuar. Você também pode gerenciar o contexto manualmente com comandos de barra:

### Limpar o contexto

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

Digite `/clear` (ou `/reset`) para limpar todo o contexto da sessão atual e iniciar uma nova conversa:

### Compactar o contexto

Digite `/compact` para compactar o contexto — preservando as informações essenciais e reduzindo o uso de tokens:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

Você também pode incluir instruções ao compactar para indicar à IA quais informações priorizar:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### Status do contexto

A barra de status na parte inferior da CLI exibe em tempo real a utilização atual do contexto, ajudando você a monitorar o consumo. Quando a utilização estiver alta, use `/compact` para compactar o contexto e evitar a perda de informações importantes.
