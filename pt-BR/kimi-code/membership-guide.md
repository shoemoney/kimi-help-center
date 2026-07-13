---
title: "Guia de assinatura do Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Guia de assinatura do Kimi Code - Central de Ajuda Kimi"
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
| **Níveis Standard / HighSpeed** | O mesmo modelo em duas velocidades: o HighSpeed oferece velocidade de saída cerca de 5–6× a do Standard e alterna sob demanda |
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

## Como alternar modelos

**O modelo HighSpeed já está disponível.** O Kimi Code oferece dois níveis — **Standard** e **HighSpeed** — baseados no mesmo modelo com capacidade de codificação idêntica e que compartilham a mesma Base URL, API Key e benefícios de assinatura. O HighSpeed oferece velocidade de saída cerca de **5–6× a do Standard**; quando você quer respostas instantâneas e iteração rápida, uma alternância com um clique proporciona uma experiência de codificação mais fluida. Principais diferenças:

| Item | Standard | HighSpeed |
| --- | --- | --- |
| ID do modelo | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| Velocidade de saída | Base | ~5–6× mais rápido que o Standard |
| Consumo de créditos | Base | ~3× o do Standard |
| Capacidade de codificação | Completa | Igual ao Standard |
| Ideal para | Tarefas de codificação do dia a dia | Respostas instantâneas, iteração rápida |
| Assinatura | Disponível para todos os membros do Kimi Code | Requer um plano [Allegretto](https://www.kimi.com/membership/pricing) ou superior |

Formas de alternar para o modelo desejado:

- **CLI oficial do Kimi Code**: digite `/model` em uma sessão para alternar diretamente entre Standard e HighSpeed — sem mudanças de configuração.
- **Kimi Code para VS Code**: escolha o modelo desejado no menu suspenso da barra de entrada; se o HighSpeed ainda não aparecer, reinicie o VS Code ou reinstale a extensão.
- **Ferramentas de terceiros**: defina o Model ID da ferramenta para o modelo desejado; todas as demais configurações permanecem iguais. Para saber onde encontrá-lo em cada ferramenta, consulte [Usando em agentes de codificação de terceiros](/kimi-code/third-party-agents).

<Callout type="info">
- **IDs de modelo estáveis**: ambos os IDs são identificadores estáveis; o backend atualiza o modelo associado conforme ele evolui, sem mudanças de configuração no cliente.
- **Digite com exatidão**: o ID do HighSpeed deve ser `kimi-for-coding-highspeed`. Se digitado errado ou definido com outro valor, a solicitação recai silenciosamente no `kimi-for-coding` padrão — sem erro, mas também sem aceleração.
- **401 sem acesso**: sem acesso ao HighSpeed, a chamada retorna `401`; faça upgrade para Allegretto ou superior.
</Callout>

<Callout type="tip">
**Por que a tarefa inteira não parece 5–6× mais rápida?** «5–6×» refere-se à **velocidade de saída do modelo** (a rapidez com que texto/código é gerado). O tempo total de uma tarefa de codificação é composto por «saída do modelo + chamadas de ferramentas (ler/gravar arquivos, executar comandos, buscas na web etc.) + execução de scripts»: quanto tempo as chamadas de ferramentas e a execução de scripts levam depende do seu projeto e dos seus comandos, e o HighSpeed não altera essa parte. Então, se o total não parecer 5–6× mais rápido, geralmente é porque as chamadas de ferramentas / execução de scripts ocuparam a maior parte daquele turno, e não porque a geração do modelo ficou mais lenta.
</Callout>
