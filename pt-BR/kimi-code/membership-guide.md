---
title: "Guia de assinatura do Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Guia de assinatura do Kimi Code - Central de Ajuda do Kimi"
  description="O Kimi Code é um benefício voltado para desenvolvedores dentro do plano de assinatura do Kimi, oferecendo recursos de codificação com IA de alto desempenho. Você pode usar esse benefício através..."
/>

# Guia de assinatura do Kimi Code

<Callout type="info">
O Kimi Code é um benefício voltado para desenvolvedores dentro do plano de assinatura do Kimi, oferecendo recursos de codificação com IA de alto desempenho. Você pode usar esse benefício através do Kimi Code CLI, Claude Code, Roo Code e outras ferramentas compatíveis.
</Callout>

## Principais vantagens

| Vantagem | Descrição |
|-----------|-------------|
| **Ampla compatibilidade** | Funciona com Kimi Code CLI, Claude Code, Roo Code e outros agentes de codificação populares |
| **Respostas ultrarrápidas** | Velocidades de geração de até 100 tokens/s, aumentando significativamente a eficiência na codificação |
| **Alta concurrency de requisições** | Cerca de 300 a 1.200 requisições por janela de 5 horas (dependendo do seu plano), com até 30 fluxos simultâneos |

## Início rápido

Escolha o caminho que melhor se adequa à sua situação:

- **Novos usuários**: Acesse [kimi.com/code](https://kimi.com/code), faça login e assine um Coding Plan.
- **Assinantes atuais**: Acesse o console para gerenciar suas API Keys e começar a usar o Kimi Code.

## Como obter uma API key

1. Faça login no [Console do Kimi](https://kimi.com/code).
2. Vá até a página **API Keys**.
3. Clique em **Criar nova API Key**.
4. Copie e armazene sua API Key com segurança (ela é exibida apenas uma vez, no momento da criação).

<Callout type="warning">
Não compartilhe sua API Key com outras pessoas nem a inclua em repositórios de código públicos.
</Callout>

## Login com um clique

No Kimi Code CLI, você pode usar o comando `/login` para autorização rápida, sem precisar copiar manualmente uma API Key:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

O sistema concluirá automaticamente a autorização do dispositivo e a vinculação da conta — todo o processo leva apenas alguns segundos.

## Gerenciamento de dispositivos

- Cada conta pode ser usada em vários dispositivos.
- As autorizações de dispositivos que ficarem **inativas por 30 dias** expirarão automaticamente; será necessário executar `/login` novamente para reautorizar.
- Você pode visualizar e gerenciar os dispositivos autorizados no console.
