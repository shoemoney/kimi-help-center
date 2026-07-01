---
title: "Introdução ao Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Introdução ao Kimi WebBridge - Central de Ajuda Kimi"
  description="O Kimi WebBridge é uma extensão de navegador feita para Agentes de IA. Ela roda diretamente no seu navegador Chrome ou Edge, aproveitando suas sessões de login já existentes para que os Agentes interajam com páginas da web como uma pessoa faria."
  ogType="article"
/>

# Introdução ao Kimi WebBridge

O Kimi WebBridge é uma extensão de navegador feita para Agentes de IA. Ao contrário das soluções de automação de navegador na nuvem, o Kimi WebBridge roda diretamente no seu navegador Chrome ou Edge, aproveitando automaticamente suas sessões de login já existentes para que os Agentes interajam com páginas da web como uma pessoa faria.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutorial do Kimi WebBridge",
    },
  ]}
/>

<Callout type="tip">
Recomendamos instalar o Kimi WebBridge no seu computador de trabalho principal para ter a melhor experiência de automação de navegador.
</Callout>

<Callout type="info">
O WebBridge funciona por meio de um serviço de ponte local e de uma extensão de navegador. Toda a execução acontece localmente no seu dispositivo—os estados de login e o conteúdo das páginas da web nunca saem da sua máquina.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="Introdução ao WebBridge"
/>

## Passo 1: baixe a extensão Kimi WebBridge

Você pode baixá-la das seguintes formas:

**Método 1: instalar pela loja de extensões**

- Para usuários do Chrome: acesse a [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Para usuários do Edge: acesse os [Complementos do Edge](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Método 2: instalação manual**

Se você não conseguir acessar a loja de extensões, pode usar o método de instalação manual.

Em seguida, siga os passos correspondentes ao seu navegador:

**Chrome:**

1. Baixe o pacote da extensão no [site oficial do Kimi WebBridge](https://www.kimi.com/features/webbridge).
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

1. Baixe o pacote da extensão no [site oficial do Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Extraia o arquivo baixado
3. Abra `edge://extensions/` na barra de endereços
4. Ative o "Modo do desenvolvedor" no canto inferior esquerdo
5. Clique em "Carregar sem compactação"
6. No seletor de arquivos, selecione a pasta extraída do WebBridge

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Após a instalação, você deverá ver o WebBridge na lista de extensões do seu navegador. Para acessá-lo com mais facilidade, recomendamos fixá-lo na barra de ferramentas do navegador.

## Passo 2: escolha o método de configuração e conclua a instalação

### Método 1: usar com o Kimi Work Desktop

1. Baixe o Kimi Work no [site oficial](https://www.kimi.com/zh-cn/products/kimi-work)

2. Depois de instalado, você pode enviar instruções no Kimi Work, por exemplo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use o Kimi Webbridge e abra o Xiaohongshu, pesquise por publicações sobre o lançamento do Kimi K2.6",
    },
  ]}
/>

### Método 2: integrar com Agentes locais

Compatível com Claude Code, Codex, Cursor, Kimi Code, Hermes Claw e outros.

1. Envie o comando a seguir diretamente no Agente para instalar o WebBridge automaticamente. O Agente executará a configuração apropriada de acordo com o seu sistema operacional.

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
      content: "Use o Kimi WebBridge para abrir o X.com e pesquisar por publicações sobre o lançamento do Kimi K2.6",
    },
  ]}
/>
