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

O [Claude Code](https://code.claude.com/docs/en/overview) é um assistente de codificação de linha de comando da Anthropic.

### Passos de configuração

Após a instalação, não inicie o Claude diretamente. Primeiro execute o script a seguir no terminal para pular o fluxo de login padrão da Anthropic:

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      content: "node --eval \"\n// enable third party model support and fast mode\nconst claudeJsonFilePath = path.join(os.homedir(), '.claude.json');\nif (fs.existsSync(claudeJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeJsonFilePath, 'utf-8'));\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ ...content, penguinModeOrgEnabled: true, hasCompletedOnboarding: true }, null, 2), 'utf-8');\n} else {\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ penguinModeOrgEnabled: true, hasCompletedOnboarding: true }), 'utf-8');\n}\n\n// delete old model id\nconst claudeSettingsJsonFilePath = path.join(os.homedir(), '.claude', 'settings.json');\nif (fs.existsSync(claudeSettingsJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeSettingsJsonFilePath, 'utf-8'));\n    if (typeof content === 'object' && typeof content.env === 'object') {\n        for (const element of [\n            'ANTHROPIC_MODEL',\n            'ANTHROPIC_SMALL_FAST_MODEL',\n            'CLAUDE_CODE_SUBAGENT_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME',\n        ]) {\n            delete content.env[element];\n        }\n        fs.writeFileSync(claudeSettingsJsonFilePath, JSON.stringify(content, null, 2), 'utf-8');\n    }\n}\n\"",
    },
  ]}
/>

Em seguida, defina as variáveis de ambiente e inicie:

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

2. Inicie o Claude Code com o modelo `kimi-for-coding`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> No Claude Code, você pode pressionar **Tab** para alternar para o modelo Kimi K2 Thinking.

> Se você encontrar um erro 400 causado por chamadas `tool_search`, pode resolvê-lo temporariamente definindo a variável de ambiente `ENABLE_TOOL_SEARCH=false`.

### Alternar para o HighSpeed

O HighSpeed oferece velocidade de saída cerca de 5–6× a do Standard com um **consumo de créditos cerca de 3×**, e requer um plano [Allegretto](https://www.kimi.com/membership/pricing) ou superior. Há duas formas de ativá-lo no Claude Code:

- **Opção 1: o comando `/fast on`** — após iniciar o Claude Code, digite `/fast on`; a saída `⚡ Fast mode ON` confirma a ativação.
- **Opção 2: o comando `/config`** — digite `/config` para abrir o painel de configuração e ative o **Fast mode** (e o **Thinking mode**) na aba **Config**.

## Usando com o Roo Code

O [Roo Code](https://github.com/RooCodeInc/Roo-Code) é uma extensão de codificação com IA para o VS Code.

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
   | Modelo | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. Salve a configuração e tudo estará pronto.

## Observações importantes

- Os benefícios do Kimi Code são suportados apenas no **Kimi Code CLI**, no **Claude Code** e no **Roo Code**.
- Usar sua API Key com plataformas ou ferramentas não autorizadas pode ser considerado uma violação e resultar em restrição de acesso.
- Em caso de dúvidas, consulte a página de [Benefícios](/kimi-code/benefits) ou entre em contato com o suporte da Kimi.
