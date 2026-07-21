---
title: "Antes de começar"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "Noções essenciais antes de usar o Kimi Code: terminais, PowerShell, CLI e cuidados de segurança."
---

<SeoMeta
  title="Antes de usar o Kimi Code - Central de Ajuda Kimi"
  description="Aprenda os conceitos básicos de terminais, PowerShell e CLI, e veja como usar o Kimi Code CLI com segurança no desenvolvimento."
/>

# Antes de começar

Antes de usar o Kimi Code, você precisa conhecer alguns conceitos básicos. Eles vão ajudar você a instalar e usar o Kimi Code com mais facilidade.

## O que é um terminal?

Um **terminal** é uma janela em que você opera o computador digitando comandos de texto.

Pense nele como um “gerenciador de arquivos em texto”: no terminal, em vez de clicar em ícones com o mouse, você digita comandos como `ls`, `cd` e `mkdir` para ver o conteúdo de pastas, alternar diretórios, criar arquivos e muito mais.

### Como abrir um terminal

| Sistema operacional | Como abrir |
|---------|---------|
| **macOS** | Pressione `Cmd + Space`, digite "Terminal" e pressione Enter |
| **Windows** | Pressione `Win + R`, digite `powershell` ou `wt`;<br>ou pesquise por "PowerShell"/"Terminal" no menu Iniciar |
| **Linux** | Pressione `Ctrl + Alt + T`, ou procure "Terminal" no menu de aplicativos |

### Como verificar seu sistema operacional

- **macOS**: Clique no ícone da Apple no canto superior esquerdo da tela → "Sobre Este Mac"
- **Windows**: Pressione `Win + Pause/Break`, ou clique com o botão direito em "Este Computador" → "Propriedades"
- **Linux**: Execute `uname -a` ou `cat /etc/os-release` no terminal

## O que é o PowerShell?

O **PowerShell** é uma ferramenta de terminal muito usada no Windows. Ele é mais poderoso que o Prompt de Comando (CMD) padrão. No Windows, o Kimi Code CLI deve ser instalado e usado no PowerShell.

O Windows tem duas ferramentas diferentes de “linha de comando”. Não confunda:

| Ferramenta | Descrição | Indicado? |
|-----|------|---------|
| **CMD (Prompt de Comando)** | A ferramenta de linha de comando mais básica do Windows | ❌ Não recomendado |
| **PowerShell** | Uma ferramenta de linha de comando mais poderosa e moderna | ✅ Recomendado |

> **Dica**: O comando de instalação do Kimi Code CLI deve ser executado no PowerShell. Ele pode não funcionar corretamente no CMD.

## Diretório de trabalho

Quando o Kimi Code CLI é iniciado, ele usa a pasta atual como **diretório de trabalho**. Ele só consegue ler e modificar arquivos dentro desse diretório de trabalho.

**Antes de começar, verifique o caminho atual no terminal**:

- O prompt do terminal geralmente mostra o diretório atual, como `~/projects/my-app$`
- Digite `pwd` (macOS/Linux) ou `cd` (Windows) para ver o caminho completo
- Use `cd <folder-name>` para entrar no diretório do projeto desejado e, em seguida, execute `kimi`

> **Exemplo**: Imagine que seu projeto esteja em `~/Documents/my-project`. Inicie assim:
> 1. Abra o terminal
> 2. Digite `cd ~/Documents/my-project`
> 3. Digite `kimi` para iniciar

## Como executar comandos

Executar comandos em um terminal ou no PowerShell é simples:

1. **Copie o comando**: Copie o texto do comando na documentação
   - macOS/Linux: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows: `irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **Cole no terminal**: Clique com o botão direito na janela do terminal ou pressione `Cmd/Ctrl + V` para colar
3. **Pressione Enter**: Pressione a tecla `Enter` para executar o comando
4. **Aguarde terminar**: O terminal mostrará o processo de execução e o resultado

> **Observação**: No terminal, `Ctrl+C` geralmente **interrompe o comando atual**; ele não copia texto. Para copiar, use `Cmd/Ctrl + Shift + C`; para colar, use `Cmd/Ctrl + Shift + V`; ou use o menu do botão direito.

> **Dica**: Se for solicitado que você digite uma senha enquanto um comando estiver em execução, o terminal não exibirá nenhum caractere. Esse é um mecanismo de segurança normal. Basta digitar a senha e pressionar Enter.

## O que é CLI?

**CLI** é a sigla de **C**ommand-**L**ine **I**nterface, ou interface de linha de comando. Significa usar uma ferramenta digitando comandos de texto, em vez de clicar em botões em uma interface gráfica.

O Kimi Code CLI é uma ferramenta de linha de comando: você digita `kimi` no terminal para iniciá-la e interage com a IA por comandos de texto para que ela ajude a ler código, modificar arquivos, executar comandos e muito mais.

## Ambiente de rede

Para usar o Kimi Code, você precisa acessar os servidores da Kimi. Se o seu ambiente de rede tiver alguma das restrições abaixo, talvez seja necessário ajustar suas configurações:

- **Rede da empresa/escola**: Algumas intranets podem restringir o acesso a APIs externas. Se você usa proxy, pode definir o endereço do proxy na configuração.
- **VPN/proxy**: Se você usa um proxy global, verifique se ele não intercepta nem interfere nas solicitações para `api.kimi.com` ou `api.moonshot.cn`.
- **Firewall**: Verifique se o firewall do sistema ou do roteador está bloqueando o acesso à rede pelo programa de terminal.

## Cuidados de segurança

O Kimi Code CLI é um agente de IA poderoso. Ele pode:

- **Ler** o conteúdo de arquivos no seu computador
- **Modificar** seu código e arquivos de configuração
- **Executar** comandos Shell, como instalar dependências ou rodar testes

**Ao usá-lo, tenha em mente o seguinte**:

- **Não o inicie em diretórios sensíveis**: Evite executar o Kimi Code CLI em diretórios que contenham senhas, chaves ou arquivos pessoais privados.
- **Revise as ações com atenção**: O Kimi Code pedirá sua confirmação antes de modificar arquivos ou executar comandos. Não clique em “Concordar” por hábito.
- **Entenda antes de prosseguir**: Se você não tiver certeza do impacto de uma ação, peça ao Kimi Code para explicar exatamente o que ele fará antes de decidir continuar.
- **Faça backup do código importante**: Antes de usar o Kimi Code em um projeto importante, recomendamos fazer commit do seu código em um controle de versão, como Git, para que você possa reverter a qualquer momento.

> **Recomendação**: Ao usar pela primeira vez, experimente o Kimi Code CLI em um projeto de teste ou em uma cópia do seu projeto. Depois que você se familiarizar com o funcionamento, use-o nos seus projetos de produção.
