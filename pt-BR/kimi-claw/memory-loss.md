---
title: "Perda de memória e contexto"
slug: "memory-loss"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Perda de memória \u0026 contexto - Central de Ajuda Kimi"
  description="O OpenClaw reinicia automaticamente a conversa todos os dias às 4h. Isso evita que contextos longos demais causem alucinações ou prejudiquem a qualidade das respostas."
/>

# Perda de memória e contexto

## Por que a conversa de ontem sumiu?

O OpenClaw reinicia automaticamente a conversa **todos os dias às 4h**. Isso evita que contextos longos demais causem alucinações ou prejudiquem a qualidade das respostas.

Se precisar ajustar o horário desse reinício, você pode alterar o agendamento no arquivo `config.yaml`.

**Boa prática:** para tudo que for importante — preferências, detalhes de projetos, instruções recorrentes — peça explicitamente ao Kimi Claw para salvar: _"Guarde isso na Memory."_ As informações armazenadas na Memory permanecem mesmo após os reinícios da conversa.

## O Kimi Claw perdeu a memória?

O reinício diário das 4h limpa o contexto da conversa ativa. Se algo não foi salvo na **Memory**, ele desaparece.

**Como resolver:**
- Durante uma conversa, diga _"Guarde X na Memory"_ e o Kimi Claw gravará a informação no armazenamento de longo prazo.
- Consulte as memórias armazenadas em **Workspace → AGENTS.md → #MEMORY**.

<Frames
  src="./images/memory-loss/claw-memory.png"
  alt="Memória do Claw"
/>

- Use o comando `/memory` a qualquer momento para visualizar e gerenciar as memórias salvas.

## Por quanto tempo a memória é mantida após o fim da assinatura?

Os arquivos de memória ficam no seu Workspace, e você pode visualizá-los ou baixá-los a qualquer momento.

- Após o vencimento da sua assinatura, a instância na nuvem é **mantida por 7 dias**.
- Renove dentro de 7 dias e todos os dados — memória, configuração, habilidades — serão totalmente restaurados.
- Após 7 dias, a instância pode ser recuperada e os dados, excluídos permanentemente.
- Um recurso de exportação/backup de memória está em desenvolvimento para facilitar a migração.
