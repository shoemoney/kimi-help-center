---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Crie e publique sites a partir de descrições em linguagem natural, mockups de design ou modelos."
---

<SeoMeta
  title="Visão geral do Kimi Websites - Central de Ajuda Kimi"
  description="Crie e publique sites a partir de descrições em linguagem natural, mockups de design ou modelos."
/>

# Kimi Websites

<Callout type="info">
O **Kimi Websites** é um recurso do produto Kimi Agent, impulsionado pelo mais recente modelo de IA agente visual multimodal Kimi K3. Sua capacidade central é o **Vibe Coding** — gerar sites a partir de linguagem natural e publicá-los online.
</Callout>

Ao compreender entradas visuais (mockups de UI, capturas de tela, vídeos de interação) e instruções em linguagem natural, o Kimi transforma o que o usuário fornece em código frontend completo e funcional — cobrindo não só a interface estática, mas também o comportamento interativo dinâmico.

## Visão geral do recurso

| Recurso | Descrição |
|---------|------------|
| **Criação de sites por conversa** | Descreva o que você precisa em linguagem natural; a IA gera o site automaticamente |
| **Compreensão de imagem/vídeo** | Envie mockups de design, capturas de tela ou gravações de tela; a IA interpreta e gera páginas HTML |
| **Publicação automática** | Implantação com um clique para publicação instantânea |
| **Edição em múltiplas rodadas** | Revisões iterativas do site com comparação de versões |
| **Compartilhamento com um clique** | Geração de links acessíveis para compartilhar com facilidade |
| **Seleção de modelos** | Diversos modelos predefinidos para criar sites rapidamente |
| **Exportação de código** | Baixe os arquivos HTML/CSS/JS empacotados para hospedar por conta própria |

## Como usar o Kimi Websites?

### Método 1: acesse a página do Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Página inicial do Kimi Websites"
/>

1. **Abra o navegador**: use o Chrome, Safari, Edge, Firefox ou qualquer navegador popular
2. **Acesse**: [kimi.com/websites](https://www.kimi.com/zh/websites) (compatível com chinês e inglês)
3. **Faça login**: com sua conta Kimi (número de telefone ou e-mail)
4. **Insira sua tarefa**:

| Abordagem | Descrição |
|----------|-------------|
| **Entrada de texto** | Digite seu pedido em linguagem natural |
| **Clonagem de imagem/site** | Envie um mockup de design ou captura de tela |
| **Baseada em modelo** | Selecione um modelo predefinido e altere o conteúdo |

5. **Comece a criar**: escolha um modelo ou comece a partir de uma conversa

<Frames
  src="./images/overview/screenshot-27.png"
  alt="screenshot 27"
/>

### Método 2: aplicativo móvel

iOS, Android e HarmonyOS contam com o aplicativo oficial do Kimi. Na área de entrada, toque na **barra de tarefas** → alterne para o **modo Websites**, que reúne ferramentas de geração multimodal e recursos do Agent.

### Método 3: modo Agent geral

Selecione o modelo K3 e insira uma tarefa de criação de site. O Kimi acionará suas capacidades de programação visual e ferramentas de execução de código.

## Como o Kimi Websites funciona?

### Etapa 1: crie um site por conversa

Descreva o que você precisa em linguagem natural. Há três métodos de criação disponíveis:

| Método | Descrição |
|--------|------------|
| **Descrição em texto** | Insira os requisitos do site diretamente; a IA gera automaticamente |
| **Interpretação de mockup de design** | Envie um arquivo de design; a IA reconhece e o recria como página web |
| **Criação rápida por modelo** | Selecione um modelo predefinido e altere o conteúdo |

**Exemplo de prompt**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crie um site sobre cães West Highland Terrier com paleta de cores em preto e branco. Inclua três seções:\nUm calendário de fotos com qualidade de estúdio e exibição de imagens geradas por IA\nUma enciclopédia de cuidados e grooming chamada \"Curly Lab\"\nUma loja vendendo moletons estampados de Westie e pôsteres de edição limitada com folha prateada. A página de checkout deve incluir um módulo de caridade — doar US$ 1 por item vendido para o resgate de cães de rua.",
    },
  ]}
/>

### Etapa 2: processo de criação

<Frames
  src="./images/overview/screenshot-26.png"
  alt="screenshot 26"
/>

O Kimi Websites ativa a **SKILL de criação de webapps** — um agente dedicado de geração de código em múltiplas rodadas:
1. **Análise de requisitos**: analisa os módulos do site, o estilo visual e a lógica de interação
2. **Planejamento de tarefas**: divide em subtarefas de design, desenvolvimento e preparação de recursos
3. **Escolha da stack tecnológica**: seleciona a arquitetura adequada (ex.: React + Tailwind CSS)
4. **Geração de recursos**: cria imagens, ícones e outros elementos visuais
5. **Construção do código**: escreve a estrutura da página, o estilo e o código de interação
6. **Otimização em múltiplas rodadas**: ajusta-se com base nos resultados da prévia até a conclusão

### Etapa 3: prévia e ajustes
- **Prévia ao vivo**: gera uma URL de demonstração em HTML para visualização imediata no navegador
- **Edição por conversa**: continue conversando para pedir mudanças, por exemplo *"Deixe a barra de navegação escura"*

<Callout type="tip">
**Exemplo**: *"As cores não ficaram boas — gostaria de abandonar a exigência de preto e branco e deixar o site com aparência mais comum."*
O Kimi reorganizará a lista de tarefas e dará continuidade à criação.
</Callout>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Etapa 4: edição visual online
- **Otimização em múltiplas rodadas**: ajuste detalhes por meio de conversas contínuas
- **Modos de edição**:
  - **Modo de anotação**: clique em áreas para adicionar anotações em linguagem natural
  - **Modo de seleção**: selecione qualquer elemento e adicione anotações
  - Use retângulos, setas, pincéis e troca de cores para marcar sugestões de revisão
- Envie todas as sugestões de revisão para a Kimi de uma só vez
### Etapa 5: implantação e publicação
| Método de implantação | Descrição |
|-------------------|------------|
| **Publicação automática** | Implantação com um clique e link online gerado |
| **Download e auto-hospedagem** | Baixe os arquivos de código empacotados e implante em seu próprio servidor |
| **Domínio personalizado** | Vincule o site gerado ao seu próprio domínio |

Após a geração, você pode:
- Clicar em diferentes versões de implantação para baixar os arquivos da versão
- Clicar no botão de compartilhar para obter um link publicamente implantado (ou definir como privado)
- Clicar no botão de editar para continuar revisando
- Baixar o código HTML/CSS/JS completo para implantação direta ou aprimoramento adicional

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Público-alvo
| Público | Caso de uso |
|----------|----------|
| **Desenvolvedores** | Criar protótipos de produtos e demos de frontend, reduzindo drasticamente o tempo de construir do zero |
| **Empreendedores** | Criar rapidamente landing pages, vitrines de produtos e sites institucionais com recursos limitados |
| **Gerentes de Produto** | Transformar rapidamente PRDs ou mockups de design em protótipos interativos demonstráveis |
| **Usuários sem conhecimento técnico** | Sem necessidade de programar — descreva sua ideia ou envie uma imagem de referência para ir do conceito a uma página web funcional |

## Cenários de referência
| Cenário | Exemplo de prompt |
|----------|---------------|
| **Landing page do zero** | Crie uma landing page de marketing de SaaS com estética tecnológica — inclua seção hero, visão geral de recursos, preços e CTA |
| **Reprodução de vídeo em site** | [Envie a gravação de tela] Reproduza o site mostrado neste vídeo, mantendo os efeitos de interação originais |
| **Reprodução de captura de tela** | [Envie o mockup de design] Transforme este design em código de página web funcional |
| **Portfólio pessoal** | Crie um site de portfólio de fotógrafo — estilo minimalista em preto e branco, com layout masonry de imagens |
| **Página de visualização de dados** | Crie uma página de visualização mostrando os dados de captação de empresas de IA em 2025, com gráficos e filtros |
| **Site de marca** | Crie o site de uma marca de café em tons terrosos suaves — inclua páginas de início, produtos e localizador de lojas |
| **Utilitário / Calculadora** | Crie uma página web de calculadora de IMC — interface limpa, com alternância de unidades e indicadores de nível de saúde |
