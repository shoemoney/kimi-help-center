---
title: "Integração com IDE"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "Integre o Kimi Code CLI ao seu IDE via ACP."
---

<SeoMeta
  title="Integração com IDE - Central de Ajuda Kimi"
  description="Integre o Kimi Code CLI ao seu IDE via Agent Client Protocol (ACP). Guias de configuração para Zed, IDEs JetBrains e Paseo, além de solução de problemas."
/>

# Usando o Kimi Code CLI em IDEs

<Callout type="info">
O Kimi Code CLI oferece integração com IDEs por meio do [Agent Client Protocol (ACP)](https://agentclientprotocol.com/get-started/introduction), permitindo que você use programação assistida por IA diretamente dentro do seu editor.
</Callout>

## Pré-requisitos

Antes de configurar seu IDE, verifique se o Kimi Code CLI está instalado e se você concluiu a configuração de login.

O adaptador ACP é exposto como o subcomando `kimi acp`. O IDE o inicia como um processo filho e se comunica via stdin/stdout usando JSON-RPC. Sempre que o IDE cria uma sessão, o CLI reutiliza seu estado de autenticação existente — sem necessidade de fazer login novamente.

<Callout type="tip">
No macOS, processos filhos iniciados a partir da interface gráfica de um IDE normalmente **não** herdam o `PATH` do shell do terminal. Se o `kimi` não estiver em um diretório de sistema como `/usr/local/bin`, use o caminho absoluto na configuração do seu IDE. Execute `which kimi` em um terminal para encontrar o caminho ativo.
</Callout>

## Usando o Kimi Code CLI no Zed

O [Zed](https://zed.dev/) é um editor moderno com suporte nativo a ACP.

Adicione o seguinte ao arquivo de configuração do Zed em `~/.config/zed/settings.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Campos de configuração:

- `type`: valor fixo `"custom"`
- `command`: caminho para o executável do Kimi Code CLI. Se o `kimi` não estiver no `PATH`, use o caminho completo (por exemplo, `/Users/you/.local/bin/kimi`).
- `args`: argumentos de inicialização. O subcomando `acp` coloca o CLI em modo ACP.
- `env`: variáveis de ambiente adicionais; normalmente deixe vazio. O Zed injeta um ambiente padrão automaticamente.

Após salvar, abra uma nova conversa no painel Agent do Zed e ele iniciará um subprocesso ACP do `Kimi Code CLI` usando a configuração acima. Os servidores MCP declarados na seção `agent_servers` do Zed também são encaminhados para o lado do kimi por meio do protocolo ACP.

## Usando o Kimi Code CLI em IDEs JetBrains

IDEs JetBrains (IntelliJ IDEA, PyCharm, WebStorm, etc.) oferecem suporte a ACP por meio do plugin de chat com IA.

Se você não tiver uma assinatura do JetBrains AI, pode habilitar `llm.enable.mock.response` no Registry para acessar o painel de chat com IA em cenários exclusivos de ACP. Pressione Shift duas vezes e pesquise por "Registry" para abri-lo.

No menu do painel de chat com IA, clique em **Configure ACP agents** e adicione a seguinte configuração:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

O JetBrains é rigoroso quanto ao campo `command` — use sempre um **caminho absoluto**, que você pode obter executando `which kimi` em um terminal. Após salvar, o `Kimi Code CLI` aparecerá no seletor de agentes do chat com IA.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Usando o Kimi Code CLI no Paseo

O [Paseo](https://paseo.sh/) é um orquestrador auto-hospedado que executa e supervisiona CLIs de agentes a partir do seu desktop, web e dispositivo móvel. Ele se conecta ao Kimi Code CLI via ACP, da mesma forma que um IDE faz.

Escolha **Kimi Code CLI** no catálogo de provedores ACP integrado do Paseo ou adicione um provedor personalizado em `~/.paseo/config.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

O adaptador ACP genérico do Paseo não conduz o fluxo de login, então conclua primeiro o login pelo terminal (consulte [Pré-requisitos](#pré-requisitos)) — caso contrário, a criação da sessão falhará com `Authentication required`.

## Solução de problemas

- **A sessão desconecta imediatamente / o IDE exibe "agent exited"**: geralmente um caminho `command` incorreto ou um login ausente. Execute `kimi acp` primeiro em um terminal para verificar — se ele ficar bloqueado aguardando stdin, o próprio CLI está funcionando e o problema está na configuração do IDE; se ele sair imediatamente com um erro, siga a mensagem de erro (na maioria das vezes você precisa executar `/login`).
- **O IDE exibe "auth required"**: o CLI não tem um token de autenticação utilizável. Saia do IDE, execute `kimi` em um terminal para concluir o login e reinicie o IDE.
- **Ferramentas MCP não aparecem**: verifique a tabela de capacidades do `kimi acp` para confirmar se o tipo de transporte MCP configurado no seu IDE é suportado. O adaptador ACP do Kimi Code CLI atualmente oferece suporte aos transportes `http` e `stdio`; os tipos `sse` e `acp` são descartados silenciosamente e um aviso é registrado no log.
