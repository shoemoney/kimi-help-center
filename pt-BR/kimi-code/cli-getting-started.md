---
title: "Primeiros passos"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Guia de instalação, login e primeiros passos do Kimi Code CLI."
---

<SeoMeta
  title="Instalação e Início Rápido do Kimi Code CLI - Central de Ajuda Kimi"
  description="Comece a usar o Kimi Code CLI: comandos de instalação, uso no terminal e no navegador, primeiro login e geração de AGENTS.md com /init."
/>

# Primeiros passos com o Kimi Code CLI

O Kimi Code CLI é um agente de IA que roda no terminal e ajuda você a executar tarefas de desenvolvimento de software e operações cotidianas — ler e modificar código, executar comandos do shell, buscar arquivos, acessar páginas da web e planejar e ajustar autonomamente os próximos passos com base no feedback recebido durante o trabalho.

Ele se encaixa em cenários como:

- **Escrever e modificar código**: implementar novos recursos, corrigir bugs, concluir refatorações
- **Entender um projeto**: explorar uma base de código desconhecida e responder a perguntas sobre arquitetura e implementação
- **Automatizar tarefas**: processar arquivos em lote, executar builds e testes, encadear vários scripts

A CLI é escrita em TypeScript, distribuída via npm e roda no Node.js.

## Antes de começar

- **Sistema operacional**: macOS, Linux ou Windows (via PowerShell)
- **Conta Kimi**: uma assinatura de membro Kimi ativa ou uma chave de API utilizável

<Callout type="tip">
O Kimi Code CLI é uma aplicação TUI totalmente interativa. Para a melhor experiência visual, execute-o em um terminal com suporte a true-color e ligaduras, como o [Kitty](https://sw.kovidgoyal.net/kitty/) ou o [Ghostty](https://ghostty.org/).
</Callout>

## Instalação

Há duas opções de instalação: o script oficial de instalação (recomendado, não exige Node.js pré-instalado) e a instalação global via npm.

### Script de instalação (recomendado)

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Instalando o Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows (PowerShell):

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

O script baixa automaticamente a versão mais recente, verifica o checksum e coloca o executável `kimi` no seu `PATH`.

<Callout type="tip">
No Windows, instale o [Git for Windows](https://gitforwindows.org/) antes do primeiro uso. O Kimi Code CLI usa o Git Bash incluído como ambiente de shell; se o Git Bash estiver instalado em um local personalizado, defina `KIMI_SHELL_PATH` como o caminho absoluto do `bash.exe`.
</Callout>

### Instalação via npm

Se você já tiver o Node.js 22.19.0 ou posterior instalado, pode instalar diretamente via npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

Ou com pnpm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### Verificar a instalação

Após a instalação, verifique se o executável está pronto:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
Se o comando `kimi` não for encontrado, tente reabrir o terminal ou executar `source ~/.bashrc` (ou `~/.zshrc`).
</Callout>

> Por causa do Gatekeeper do macOS, a primeira execução do `kimi` pode demorar bem mais. Você pode acelerar as inicializações seguintes adicionando o aplicativo do seu terminal em **Ajustes do Sistema → Privacidade e Segurança → Ferramentas de Desenvolvedor**.

## Atualização e desinstalação

**Atualização**: execute `kimi upgrade` — a CLI verifica a versão mais recente e apresenta as opções de atualização. Escolha `Install update now` para atualizar com base na sua origem de instalação atual. Você também pode atualizar diretamente pelo gerenciador de pacotes:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**Desinstalação**: se você instalou via script, exclua o executável `kimi`. Se instalou via npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## Primeira execução

### Terminal interativo

Entre no diretório do seu projeto e execute `kimi` para iniciar a interface interativa:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### Instrução única

Para executar uma única instrução sem entrar na interface interativa, use `-p`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### Retomar sessão

Para retomar a sessão anterior, adicione `-C`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### Primeiro login

Na primeira execução, você precisa configurar uma origem de API. Na interface interativa, digite `/login` para iniciar o fluxo de login:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

O `/login` abre um seletor de plataforma com duas opções:

- **Kimi Code (OAuth)** — fluxo de código de dispositivo; abra o link em qualquer dispositivo, faça login e insira o código para autorizar
- **Chave de API da Kimi Platform** — insira uma chave de API de `platform.kimi.com` ou `platform.kimi.ai`

Para sair, digite `/logout` para limpar as credenciais atuais.

<Callout type="tip">
Se quiser conectar Anthropic, OpenAI, Google ou outros provedores, edite diretamente o arquivo `~/.kimi-code/config.toml` para configurar a chave de API. Para a referência completa de todas as opções de configuração, consulte a documentação de variáveis de ambiente e substituições de configuração.
</Callout>

## Gerar o AGENTS.md

Execute o comando `/init` no diretório do seu projeto. O Kimi Code CLI vai escanear automaticamente a estrutura do projeto e gerar um arquivo `AGENTS.md`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

O `AGENTS.md` é usado para fornecer à IA informações de contexto do projeto, etapas de build, convenções de código e outros detalhes que ajudam a IA a entender seu projeto com mais precisão.

## Sua primeira conversa

Depois de fazer login, descreva uma tarefa em linguagem natural. Um bom ponto de partida é deixar o Kimi Code CLI se familiarizar com o projeto:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Take a look at this project's directory structure and briefly describe what each directory is for.",
    },
  ]}
/>

O Kimi Code CLI chama automaticamente ferramentas de leitura de arquivos, busca e outras para examinar o conteúdo relevante antes de responder. Por padrão, as operações somente leitura são executadas automaticamente, sem exigir confirmação. Para operações que modificam arquivos ou executam comandos do shell, ele pede sua confirmação antes de prosseguir.

Você também pode descrever uma tarefa mais concreta diretamente:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Add a function in src/utils that converts any string to kebab-case, and add a unit test for it.",
    },
  ]}
/>

O Kimi Code CLI planeja as etapas, modifica o código, executa os testes e informa o que fez em cada passo.

<Callout type="tip">
Não sabe o que fazer? Digite `/help` a qualquer momento para abrir o painel integrado de comandos e atalhos de teclado. Use `↑`/`↓` para navegar e `Esc` para fechar. Para sair, digite `/exit`, pressione `Ctrl-C` duas vezes ou pressione `Ctrl-D` com a caixa de entrada vazia.
</Callout>

## Comandos e atalhos de teclado comuns

### Comandos de sessão

| Comando | Descrição |
| --- | --- |
| `/new` | Inicia uma nova sessão, limpando o contexto atual |
| `/sessions` | Navega pelo histórico de sessões e escolhe uma para retomar |
| `/model` | Troca o modelo atual |
| `/compact` | Comprime manualmente o contexto para liberar tokens |
| `/fork` | Bifurca a sessão atual, mantendo o histórico, mas continuando de forma independente |

### Atalhos de teclado mais usados

| Atalho | Descrição |
| --- | --- |
| `Esc` | Interrompe a saída em streaming / fecha um pop-up |
| `Ctrl-C` | Interrompe a saída; pressione duas vezes em repouso para sair |
| `Shift-Tab` | Alterna o modo Plan |
| `Ctrl-S` | Injeta uma mensagem em pleno streaming sem esperar a resposta atual terminar |
| `Ctrl-O` | Recolhe / expande a saída de ferramentas |

Para a lista completa, digite `/help` ou acesse [Interação e entrada](/kimi-code/cli-interaction).

## Onde os dados são armazenados

Por padrão, o Kimi Code CLI armazena seus dados locais em `~/.kimi-code/` — arquivos de configuração, registros de sessão, logs e o cache de atualização. Para movê-los para outro lugar, aponte para um novo caminho pela variável de ambiente `KIMI_CODE_HOME`. Para o layout completo do diretório, consulte a documentação de variáveis de ambiente.

## Perguntas frequentes

**Inseri minha chave de API, mas diz que a autenticação falhou.**

Primeiro, confirme se a sua Key e a Base URL pertencem à mesma plataforma. `api.kimi.com` e `api.moonshot.cn` são dois sistemas de conta totalmente independentes, e suas chaves de API não são intercambiáveis:

| Plataforma | Base URL | Cobrança | Criação da chave |
|------|---------|---------|-------------|
| **Kimi Code** | Compatível com OpenAI: `https://api.kimi.com/coding/v1`<br> Compatível com Anthropic: `https://api.kimi.com/coding/` | Assinatura de membro Kimi (inclui quota) | [Console do Kimi Code](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Pagamento conforme o uso | [Kimi Open Platform](https://platform.kimi.com) |

**O comando `kimi` não é encontrado após a instalação.**

O script de instalação adiciona o `kimi` ao seu PATH, mas você precisa reiniciar o terminal ou executar `source ~/.bashrc` (ou `source ~/.zshrc`) para que tenha efeito. Se ainda assim não for encontrado, verifique se `~/.local/bin` está no seu PATH.

**O navegador não abriu após executar `/login`.**

Em um servidor remoto ou ambiente headless, o `/login` exibirá uma URL. Copie-a manualmente para o seu navegador a fim de concluir a autorização.

Se tiver qualquer problema ou sugestão, envie seu feedback no [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).

## Próximos passos

- [Interação e entrada](/kimi-code/cli-interaction) — operações na caixa de entrada, fluxo de aprovação, modo Plan e modo YOLO explicados
- [Sessões e contexto](/kimi-code/cli-sessions) — retomada de sessões, compressão de contexto, exportação de sessões
- [Casos de uso comuns](/kimi-code/cli-use-cases) — exemplos de prompts para tarefas típicas
