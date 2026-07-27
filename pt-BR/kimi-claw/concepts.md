---
title: "Conceitos centrais e terminal"
slug: "concepts"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Conceitos centrais e terminal - Central de Ajuda Kimi"
  description="Entenda os conceitos centrais do Kimi Claw — Memory, Skills, HEARTBEAT, Identity, Soul, Tools e User — e os comandos de terminal para verificar o gateway, o status do bot, os skills e as tarefas agendadas."
/>

# Conceitos centrais e terminal

## Conceitos principais

| Conceito | Descrição |
|---------|-------------|
| **Memory** | Sistema de memória de longo prazo do Kimi Claw. Armazena suas preferências, hábitos e informações importantes entre conversas. |
| **Skills** | Módulos de capacidade instaláveis da biblioteca ClawHub que conferem ao Kimi Claw expertise específica de domínio. |
| **HEARTBEAT** | Tarefas em segundo plano agendadas que rodam em um cronômetro — úteis para lembretes recorrentes, coleta de dados e resumos. |
| **Identity** | Definição do papel do Kimi Claw: nome, profissão, persona. Totalmente personalizável por você. |
| **Soul** | Traços centrais de personalidade e princípios comportamentais que moldam o estilo de interação do Kimi Claw. |
| **Tools** | O conjunto de capacidades que o Kimi Claw pode acionar — busca na web, manipulação de arquivos, execução de código e muito mais. |
| **User** | A definição da relação entre você e o Kimi Claw, que rege os padrões de interação e o compartilhamento de informações. |

## Terminal

<Frames
  src="./images/concepts/screenshot-30.png"
  alt="screenshot 30"
/>

Você pode abrir uma interface de linha de comando em **Configurações → Terminal** na web e executar comandos para controlar o Kimi Claw diretamente.

Como alternativa, basta dizer ao Kimi Claw qual comando executar em linguagem natural — ele o executará para você.

> Observação: o Terminal e os plugins compartilham o mesmo canal de conexão. Reiniciar o gateway do OpenClaw desconectará o Terminal.

## Referência de comandos

### Sistema

| Comando | Descrição |
|---------|-------------|
| `/help` | Exibir informações de ajuda |
| `/status` | Ver o status atual do sistema |
| `/ping` | Testar se a conexão está ativa |
| `/cron` | Gerenciar tarefas agendadas |
| `/config` | Ver ou editar a configuração |
| `/new` | Iniciar uma nova conversa (limpa o contexto atual) |
| `/reset` | Reiniciar o Kimi Claw |
| `/compact` | Compactar o contexto da conversa atual |
| `/stop` | Interromper a tarefa em execução |

### Skills

| Comando | Descrição |
|---------|-------------|
| `/skills` | Navegar, instalar e gerenciar skills |

### Tarefas agendadas

| Comando | Descrição |
|---------|-------------|
| `/cron` | Ver e gerenciar o agendamento de tarefas |

### Memory

| Comando | Descrição |
|---------|-------------|
| `/memory` | Ver e gerenciar a memória de longo prazo |

### Configuração e depuração

| Comando | Descrição |
|---------|-------------|
| `/config` | Ver ou editar a configuração do sistema |
| `/logs` | Ver os logs de execução |
| `/debug` | Ativar o modo de depuração para diagnósticos detalhados |
