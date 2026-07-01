---
title: "Usando com agentes de codificação de terceiros"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Usando com agentes de codificação de terceiros - Central de Ajuda Kimi"
  description="Os benefícios do Kimi Code podem ser usados com o Claude Code e o Roo Code, permitindo que você aproveite os recursos de IA da Kimi nas suas ferramentas de codificação preferidas."
/>

# Usando com agentes de codificação de terceiros

Os benefícios do Kimi Code podem ser usados com o Claude Code e o Roo Code, permitindo que você aproveite os recursos de IA da Kimi nas suas ferramentas de codificação preferidas.

## Pré-requisitos

- Uma assinatura Kimi ativa com os benefícios do Kimi Code habilitados.
- Uma API Key (criada no [Console da Kimi](https://www.kimi.com/code)).

## Usando com o Claude Code

O [Claude Code](https://www.docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) é um assistente de codificação de linha de comando da Anthropic.

### Passos de configuração

1. Defina as variáveis de ambiente:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Inicie o Claude Code com o modelo `kimi-k2.5`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> No Claude Code, você pode pressionar **Tab** para alternar para o modelo Kimi K2 Thinking.

> Se você encontrar um erro 400 causado por chamadas `tool_search`, pode resolvê-lo temporariamente definindo a variável de ambiente `ENABLE_TOOL_SEARCH=false`.

## Usando com o Roo Code

O [Roo Code](https://www.github.com/RooCodeInc/Roo-Code) é uma extensão de codificação com IA para o VS Code.

### Instalar o Roo Code

1. Pesquise por **Roo Code** no Marketplace de Extensões do VS Code e instale-o.
2. Após a instalação, o ícone do Roo Code aparecerá na barra de atividades; se isso não acontecer, reinicie o VS Code.

### Configurar o modelo Kimi Code

1. Abra o painel do Roo Code e vá até a página de **Configurações**.
2. Na seção **Providers**, selecione **OpenAI Compatible** e preencha o seguinte:

   | Configuração | Valor |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | Sua API Key |
   | Modelo | `kimi-k2.5` |

3. Salve a configuração e tudo estará pronto.

## Observações importantes

- Os benefícios do Kimi Code são suportados apenas no **Kimi Code CLI**, no **Claude Code** e no **Roo Code**.
- Usar sua API Key com plataformas ou ferramentas não autorizadas pode ser considerado uma violação e resultar em restrição de acesso.
- Em caso de dúvidas, consulte a página de [Benefícios](/kimi-code/benefits) ou entre em contato com o suporte da Kimi.
