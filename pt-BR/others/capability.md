---
title: "O que Kimi pode fazer?"
slug: "capability"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="O que Kimi pode fazer? - Central de Ajuda Kimi"
  description="Perguntas frequentes sobre os recursos do Kimi: busca on-line e navegação na web, controle da área de trabalho do computador (Kimi Computer Use), geração de imagens/vídeos/voz, programação, criação de sites, criação de PPTs e planilhas, processamento de arquivos, memória, suporte a vários idiomas e extensão do contexto."
/>

# O que Kimi pode fazer?

## Kimi consegue pesquisar na internet e navegar por páginas da web?

Sim. Kimi decide automaticamente se uma pergunta exige acesso on-line e usa ferramentas de busca integradas para recuperar informações. No **Kimi Code** e no **Kimi Work**, com o **WebBridge**, Kimi também consegue operar um navegador como uma pessoa: navegar, clicar, rolar, extrair dados e concluir tarefas web em várias etapas.

## Kimi consegue operar a área de trabalho do meu computador?

Em conversas comuns e tarefas do Agent, Kimi **não tem permissão** para operar seu computador. **No Kimi Work, você pode optar por habilitar isso por conta própria**.

No Kimi Work, com o **Kimi Computer Use**, Kimi pode clicar, digitar, rolar, arrastar e ler o conteúdo da interface de um app ou capturas de tela na sua área de trabalho para você. Por exemplo: “Clique em X para mim”, “Insira … em Y”, “Verifique o status atual do app Z” ou “Liste os apps abertos no momento”. Todas as operações são executadas em segundo plano, então Kimi não assumirá o controle do seu mouse nem trocará a janela em primeiro plano.

**Como instalar**: No Kimi Work, clique em “Plugins”, selecione “Kimi Computer Use” e clique em Instalar. Você também pode enviar a instrução abaixo no modo “Trabalho” para instalá-lo:

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Instale kimi computer-use para mim: curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## Kimi consegue gerar imagens, vídeos e voz?

Sim. Kimi pode gerar imagens, vídeos e áudio por meio de plugins de design criativo. Antes de usar, instale o plugin correspondente no marketplace de plugins:

- **Geração de imagens**: gera imagens de alta qualidade a partir de descrições em texto. Compatível com resoluções 1K/2K/4K, vários formatos de proporção, fundos opacos ou transparentes opcionais e saída em JPG / PNG.
- **Geração de vídeos**: gera vídeos de alta qualidade a partir de descrições em texto, com imagens de referência opcionais. Compatível com proporções como 16:9, 4:3, 1:1, 3:4, 9:16 e 21:9, com duração de 4 a 12 segundos.
- **Geração de áudio**: oferece suporte a conversão de texto em fala com várias vozes em mandarim ou geração de efeitos sonoros a partir de descrições em inglês, com duração de 0,5 a 22 segundos.

## Kimi consegue escrever código, criar sites, PPTs e planilhas?

Sim. Como um agente de IA capaz de executar tarefas de forma autônoma, Kimi oferece suporte à criação de sites, criação de PPT, processamento de documentos e planilhas, Deep Research e muito mais.

## Quais arquivos Kimi consegue processar?

Kimi aceita formatos comuns, como PDF, Word, Excel, PPT, imagens, TXT e vídeo. **Cada arquivo deve ter no máximo 100 MB, e você pode enviar até 50 arquivos por vez**.

## Kimi tem memória?

Sim. A [Memória](/features/memory-space) salva automaticamente informações importantes para que Kimi possa entender você melhor. Se você precisa manter memória e materiais separados por projeto, use o recurso [Projeto](/features/project).

## Kimi oferece suporte a vários idiomas?

Sim. Você pode alterar o idioma da interface em **“Configurações” → “Geral” → “Idioma”**. Os idiomas disponíveis atualmente incluem alemão, russo, francês, chinês tradicional, coreano, português, tailandês, turco, espanhol, italiano, indonésio, inglês e vietnamita. K2.6 e K3 oferecem suporte a conversas, recuperação de informações e criação em vários idiomas.

## Quanto conteúdo Kimi consegue processar de uma vez?

K2.6 tem um contexto de turno único de cerca de **128K tokens (aproximadamente 50.000–60.000 caracteres chineses)**. Para documentos ultralongos, **K3 oferece um contexto de 1 milhão de tokens** (requer o plano de assinatura mais alto). Para detalhes, consulte [O que devo fazer quando uma conversa ultrapassa 200.000 caracteres chineses?](/others/chat-issues).
