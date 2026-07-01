---
title: "Início rápido do Kimi Code para VS Code"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Início rápido do Kimi Code para VS Code - Central de Ajuda Kimi"
  description="O Kimi Code para VS Code é uma extensão integrada ao Visual Studio Code. Depois de instalar, você pode fazer perguntas, revisar diffs de código e fazer commit das alterações rapidamente..."
/>

# Início rápido do Kimi Code para VS Code

<Callout type="warning">
**Aviso de compatibilidade da extensão para VS Code**

No momento, o Kimi Code para VS Code está disponível para nova instalação apenas para usuários da versão legada da CLI em Python. Usuários existentes que já instalaram o plugin podem continuar utilizando-o após atualizar para a nova CLI. A instalação não é suportada para usuários da CLI na versão TS por enquanto.
</Callout>

O Kimi Code para VS Code é uma extensão integrada ao Visual Studio Code. Após a instalação, você pode fazer perguntas diretamente no editor, revisar diffs de código e fazer commit das alterações rapidamente.

A extensão consegue ler o conteúdo dos arquivos que você referencia e exibir sugestões de modificação por meio de uma interface visual, executando-as somente após sua confirmação. Todo o fluxo de trabalho permanece sob seu controle, ao mesmo tempo em que melhora consideravelmente a eficiência do desenvolvimento.

Esta extensão oferece um painel de chat nativo no VS Code, com suporte a:
- Referenciar arquivos ou pastas usando o símbolo `@`.
- Executar varreduras de projeto e gerenciar o contexto com comandos `/`.
- Visualizações de diff que mostram as alterações nos arquivos, com suporte a reversão.
- Integrar servidores MCP para acionar ferramentas externas.

---

## Instalação

1.  **Pré-requisitos**: você precisa de uma assinatura de conta Kimi ou de uma chave de API da Kimi.
2.  **Marketplace**: instale pelo [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code).

<Callout type="tip">
Se a extensão não aparecer após a instalação, reinicie o VS Code ou execute **Developer: Reload Window** na paleta de comandos (Mac: `Cmd+Shift+P`, Win/Linux: `Ctrl+Shift+P`).
</Callout>

---

## Autenticação

O Kimi Code oferece dois modos de autenticação. Você pode alternar entre eles a qualquer momento pelo **ícone de engrenagem**.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="Configurações de autenticação"
  width={800}
  height={450}
/>

- **Modo Conta Kimi**: clique no botão de login para autorizar pelo navegador.
- **Modo Chave de API**: clique para pular o login caso já tenha configurado uma chave de API.

---

## Fluxos de trabalho típicos

Leitura de código: digite `@` para selecionar um arquivo ou pasta, peça uma explicação do fluxo do código e continue fazendo perguntas de acompanhamento.

Refatoração: referencie o código-alvo, como `@src/feature/`, solicite um plano de refatoração, revise o diff e aprove seletivamente, usando a reversão quando necessário.

Depuração: cole mensagens de erro ou stack traces, referencie os arquivos relacionados, solicite diagnóstico e correções e, em seguida, aprove as alterações propostas.

Visão geral do projeto: referencie uma pasta, como `@src/services/`, peça um mapa de módulos ou um resumo da arquitetura e continue perguntando sobre dependências ou pontos fracos.

---

## Comandos e atalhos

Use `CodePreview` para testar comandos rapidamente ou consultar os principais atalhos:

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Focus Kimi input box\nAlt+K : Insert current file reference\nCtrl+N : New conversation",
    },
  ]}
/>

| Atalho | Função |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Focar a caixa de entrada da Kimi |
| `Alt+K` | Inserir referência ao arquivo atual |
| `Ctrl+N` / `Cmd+N` | Nova conversa |
| `↑` / `↓` | Navegar pelo histórico de entradas |

<Callout type="info">
Digite **Kimi Code** na paleta de comandos para acessar mais comandos: abrir em nova aba, abrir na barra lateral ou gerenciar sessões.
</Callout>
