---
title: "Introdução à Extensão de navegador Kimi"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Introdução à Extensão de navegador Kimi - Central de Ajuda Kimi"
  description="A Extensão de navegador Kimi (anteriormente Kimi WebBridge) é um plugin de navegador para agentes de IA que abre páginas, clica em botões, preenche formulários e extrai informações."
  ogType="article"
/>

# Introdução à Extensão de navegador Kimi

A Extensão de navegador Kimi (anteriormente Kimi WebBridge) é um plugin de navegador para agentes de IA. Ela pode abrir páginas, clicar em botões, preencher formulários e extrair informações, permitindo que o agente conclua tarefas web tediosas automaticamente, como uma pessoa. Você também pode decompor páginas da web usadas com frequência em CLIs e transformar operações web gravadas em Skills que o agente pode reutilizar a qualquer momento.

## Duas formas de uso

A Extensão de navegador Kimi oferece duas formas de uso:

- **Barra lateral do navegador**: Clique no ícone do Kimi na barra de ferramentas para abrir a barra lateral e faça login com uma conta de assinante do Kimi para conversar diretamente, deixando o Kimi operar a página atual por você.
- **Controle remoto por um Agent local**: Deixe agentes de IA como Kimi Work ou Claude Code controlarem a extensão remotamente para automatizar tarefas web.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutorial da Extensão de navegador Kimi",
    },
  ]}
/>

## Baixar e instalar

### Passo 1: baixe a Extensão de navegador Kimi

Você pode baixá-la das seguintes formas:

**Método 1: instalar pela loja de extensões**

- Para usuários do Chrome: acesse a [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Para usuários do Edge: acesse os [Complementos do Edge](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Método 2: instalação manual**

Se você não conseguir acessar a loja de extensões, pode usar o método de instalação manual.

Em seguida, siga os passos correspondentes ao seu navegador:

**Chrome:**

1. Baixe o pacote da extensão no [site oficial da Extensão de navegador Kimi](https://www.kimi.com/features/webbridge).
2. Extraia o arquivo baixado
3. Abra `chrome://extensions/` na barra de endereços
4. Ative o "Modo do desenvolvedor" no canto superior direito
5. Clique em "Carregar sem compactação"
6. No seletor de arquivos, selecione a pasta extraída do WebBridge

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Baixe o pacote da extensão no [site oficial da Extensão de navegador Kimi](https://www.kimi.com/features/webbridge).
2. Extraia o arquivo baixado
3. Abra `edge://extensions/` na barra de endereços
4. Ative o "Modo do desenvolvedor" no canto inferior esquerdo
5. Clique em "Carregar sem compactação"
6. No seletor de arquivos, selecione a pasta extraída do WebBridge

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Após a instalação, você deverá ver a Extensão de navegador Kimi na lista de extensões do seu navegador. Para acessá-la com mais facilidade, recomendamos fixá-la na barra de ferramentas do navegador.

### Passo 2: escolha o método de configuração e conclua a instalação

#### Método 1: usar com o Kimi Work Desktop

1. Baixe o Kimi Work no [site oficial](https://www.kimi.com/products/kimi-work)

2. Depois de instalado, você pode abrir a barra lateral da extensão e enviar instruções, por exemplo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use a Extensão de navegador Kimi e abra o Xiaohongshu, pesquise por publicações sobre o lançamento do Kimi K3",
    },
  ]}
/>

#### Método 2: integrar com Agentes locais

Compatível com Claude Code, Codex, Cursor, Kimi Code, Hermes Claw e outros.

1. Envie o comando a seguir diretamente no Agente para instalar a Extensão de navegador Kimi automaticamente. O Agente executará a configuração apropriada de acordo com o seu sistema operacional.

Se você for usuário de macOS, use o comando abaixo:

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Se você for usuário de Windows, use o comando abaixo:

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. Comece a usar

Uma vez que a extensão estiver conectada, você pode enviar instruções.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use a Extensão de navegador Kimi para abrir o X.com e pesquisar por publicações sobre o lançamento do Kimi K3",
    },
  ]}
/>
