---
title: "Interação e entrada"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Interação & entrada - Central de Ajuda Kimi"
  description="O Kimi Code CLI oferece diversos métodos de interação para ajudar você a colaborar com a IA de forma eficiente."
/>

# Interação e entrada

O Kimi Code CLI oferece diversos métodos de interação para ajudar você a colaborar com a IA de forma eficiente.

## Thinking mode

O Thinking Mode permite que a IA realize um raciocínio mais profundo antes de responder — ideal para problemas complexos.

- Use o comando `/model` para alternar modelos e ativar o Thinking Mode.
- Você também pode ativar o Thinking Mode na inicialização com a flag `--thinking`.

## Entrada de várias linhas

Pressione **Ctrl-J** para inserir uma quebra de linha e digitar em várias linhas. Isso é útil para prompts mais longos ou ao colar trechos de código com múltiplas linhas.

## Colar da área de transferência

Pressione **Ctrl-V** para colar conteúdo da área de transferência — com suporte a texto e imagens. Ao colar imagens, a IA pode interpretar diretamente o conteúdo da imagem (por exemplo, capturas de tela, mockups de design, telas de erro).

## Comandos de barra

Comandos iniciados com `/` são usados para controlar sessões, configurações e depuração. Os comandos mais comuns incluem:

| Comando | Descrição |
| --- | --- |
| `/help` | Exibe informações de ajuda |
| `/login` | Faz login e autoriza |
| `/model` | Alterna modelos e o Thinking Mode |
| `/sessions` | Lista e alterna sessões |
| `/clear` | Limpa o contexto atual |
| `/compact` | Compacta o contexto |
| `/init` | Gera o AGENTS.md |
| `/exit` | Sai do CLI |

Digitar `/` no campo de entrada exibe automaticamente uma lista de comandos disponíveis.

## Autocompletar de caminho com @

Use o símbolo `@` na sua entrada para referenciar caminhos de arquivos ou diretórios — o sistema fará o autocompletar:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Verifique @src/utils/auth.ts em busca de vulnerabilidades de segurança",
    },
  ]}
/>

A IA lerá automaticamente o conteúdo do arquivo referenciado como contexto.

## Perguntas e respostas estruturadas

Em determinados cenários, a IA apresentará opções estruturadas para a sua entrada. Use as **setas do teclado** para selecionar uma opção e pressione **Enter** para confirmar.

## Confirmação de aprovação

Quando a IA precisar realizar modificações em arquivos, comandos de shell ou outras operações, ela pedirá a sua confirmação. Você pode escolher:

| Opção | Descrição |
| --- | --- |
| **Permitir** | Autoriza esta operação |
| **Permitir na sessão** | Autoriza operações semelhantes pelo restante da sessão atual, sem novas solicitações |
| **Negar** | Recusa esta operação |

### Modo YOLO

Se você confia nas operações da IA, pode usar o Modo YOLO para pular todas as confirmações:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> No Modo YOLO, a IA executa automaticamente todas as operações — use com cautela. Recomendado apenas em ambientes de desenvolvimento controlados.
