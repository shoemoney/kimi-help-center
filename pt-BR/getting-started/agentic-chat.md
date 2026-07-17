---
title: "Primeiros passos com o Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Primeiros passos com o Kimi - Central de Ajuda Kimi"
  description="Conheça os três modelos do Kimi (K2.6, K3, K3 Swarm), as ferramentas integradas e os recursos multimodais para começar rapidamente com chat e execução de tarefas."
/>

# Primeiros passos com o Kimi

Você pode digitar perguntas na caixa de chat, enviar arquivos ou alternar entre modelos conforme suas necessidades.
Abra [kimi.com](https://www.kimi.com) e experimente enviar uma mensagem — diga olá ao Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Oi, Kimi!",
    },
  ]}
/>

## Escolha um modelo

O Kimi oferece vários modelos. Clique no botão de troca de modelo acima da caixa de entrada para alternar.

| Modelo | Intensidade de raciocínio | Ideal para |
|-------|-------------------|----------|
| **K2.6** | Standard / High | Conversa e perguntas e respostas rápidas, com respostas mais ágeis |
| **K3** | Low / High / Max | Tarefas de chat e Agent; o mais capaz no geral |
| **K3 Swarm** | Low / High / Max | Busca em larga escala e processamento em lote, concluídos de uma só vez |

<Callout type="tip">
O K2.6 não consome créditos; o K3 e o K3 Swarm são cobrados por créditos. Consulte os [benefícios de assinatura](https://www.kimi.com/help/membership/membership-overview) para saber mais.
</Callout>

### Sobre o Kimi K3

O Kimi K3 é atualmente o modelo mais poderoso do Kimi, com 2,8 trilhões de parâmetros, construído sobre o Kimi Delta Attention (KDA) e os Attention Residuals, com **visão nativa** e uma **janela de contexto de 1 milhão de tokens**. Como o primeiro modelo aberto da classe 3T do mundo, o K3 foi projetado para inteligência de fronteira em codificação de longo prazo, trabalho de conhecimento e raciocínio, alcançando desempenho de ponta em codificação, execução de longo prazo e uma ampla gama de tarefas de inteligência geral.

### Ferramentas integradas
Disponíveis prontamente, sem necessidade de configuração:
| Ferramenta | Descrição |
|------|------------|
| **Web Search** | Busca na web em tempo real para as notícias e informações mais recentes |
| **Fetch Tool** | Acesso direto a URLs específicas (páginas web, documentos, imagens e outros recursos online) |
| **Image Search** | Busca de texto para imagem e de imagem para imagem para descoberta rápida de conteúdo visual |
| **IPython** | Execução de código Python para análise e visualização de dados |
| **Memory** | Memória inteligente que registra suas preferências e hábitos pessoais |

## Recursos visuais e multimodais
O Kimi K3 oferece suporte à compreensão completa de imagens, vídeos e documentos de escritório (PDF/Word/Excel), usando uma **arquitetura multimodal nativa** (não um OCR adicional). Ele consegue analisar diretamente o conteúdo dos documentos e realizar tarefas de escritório de nível intermediário a avançado (como escrever fórmulas no Excel ou gerar esboços de PPT/código VBA). Combinando visão nativa e uma janela de contexto de 1 milhão de tokens, ele pode lidar com materiais multimodais mais longos e complexos.
### Suporte a entrada multimodal
- **Imagens**: PNG, JPEG, WebP, GIF, etc. (via URL, Base64 ou upload de arquivo local)
- **Vídeo**: MP4, etc. (via video_url ou sequências de quadros de imagem + parâmetro fps)
- **Documentos**: PDF, Word, Excel, TXT, Markdown, etc.
- **Recursos online**: URLs, links de artigos
- **Busca de imagens**: Envie uma imagem para buscar imagens relacionadas ou semelhantes
- **Compreensão de vídeo**: Oferece suporte à compreensão de vídeo — pode analisar gravações de tela e replicar a lógica de interação
- **Codificação visual**: Envie capturas de tela ou gravações de tela para gerar código frontend (HTML/Vue/React, etc.); pode reproduzir automaticamente páginas web a partir de mockups de design

### Formatos de saída
- Texto simples / texto e imagem combinados: Respostas conversacionais padrão
- Markdown: Texto rico com títulos, listas, tabelas e links
- Blocos de código: HTML/Vue/React/Python/JSON/Mermaid, etc. (com identificadores de linguagem)
- Dados estruturados em JSON: Saída em modo JSON forçado
- Diagramas Mermaid: Fluxogramas, diagramas de sequência, mapas mentais, etc.
- Fórmulas matemáticas LaTeX: Expressões matemáticas inline e em bloco
- Saída em modo duplo (Thinking): Retorna tanto `reasoning_content` (processo de pensamento) quanto `content` (resposta final)
- Formato de chamada de ferramentas: Formato padrão Function Calling (para desenvolvedores)

### Observações importantes

1. **Saída de arquivos**: O K3 pode produzir documentos editáveis de ponta a ponta (como `.pptx`, `.docx`, `.xlsx`, `.pdf`) e outros entregáveis complexos; o K2.6 foca em perguntas e respostas rápidas e gera apenas texto (como esboços de PPT, corpo de texto do Word ou código).

<Callout type="tip">
Dica: Para gerar imagens, áudio ou vídeo, clique em "+" → Plugin, selecione o recurso correspondente e use-o com o **K3**. Para criar documentos editáveis complexos ou executar tarefas de várias etapas, recomendamos escolher o **K3** ou o **K3 Swarm** para a experiência completa.
</Callout>

## Sessões vs. turnos de conversa
Quando você clica em "Novo chat", pense nisso como o início de uma longa conversa com o Kimi.
| Conceito | Analogia | Definição técnica |
|---------|---------|---------------------|
| **Sessão** | Uma reunião inteira (do início ao fim) | Um processo completo de chat com começo e fim bem definidos |
| **Turno** | Uma troca (você fala, o Kimi responde) | Sua entrada e a resposta do Kimi formam uma ida e volta |

### Principais diferenças
**Sessão**
- **Memória contínua**: O Kimi lembra de todo o contexto dentro do chat atual
- **Contexto entre turnos**: Cada resposta usa o conteúdo da conversa anterior como contexto para o próximo turno
- **Limites definidos**: Clicar em "Novo chat" = recomeço; o contexto anterior é apagado
**Turno**
- **Contagem cumulativa**: Turno 1, Turno 2, … adicionados de forma incremental
- **Memória limitada**: Muitos turnos (por exemplo, mais de 50) podem fazer o Kimi "esquecer" o conteúdo inicial, especialmente em redação de textos longos ou tarefas com requisitos rigorosos
- **Limite de comprimento de contexto**: Limitado pela contagem de tokens; quando os turnos se acumulam, o conteúdo mais antigo pode ser comprimido

<Callout type="tip">
**Caso particular**: Se uma única pergunta e resposta encerra a conversa, então 1 turno = 1 sessão.
</Callout>

## Por que essa distinção importa
Dentro de uma mesma sessão, cada nova pergunta ou instrução que você envia é respondida com base em todos os turnos anteriores. À medida que os turnos se acumulam e o conteúdo fica mais longo, a qualidade das respostas pode diminuir gradualmente.

### Cenários comuns
**Cenário 1: Mudança de assunto**
- Errado: Perguntar "me ajude a calcular meus impostos" em uma sessão na qual você esteve escrevendo um romance de 30.000 palavras
- Certo: Inicie uma nova sessão para a pergunta sobre impostos — evite que o Kimi confunda personagens do romance com conceitos tributários
**Cenário 2: Processamento de documentos longos**
- Após dezenas de turnos, o Kimi pode "esquecer" regras ou resumos de arquivos estabelecidos no início
- Solução: Resuma proativamente no meio da tarefa ("Resuma nosso plano até agora") ou inicie uma nova sessão
**Cenário 3: Compreender os limites do produto**
- Os limites de comprimento de contexto são medidos em tokens, mas, no dia a dia, pense neles como "turnos"
- Se você vir uma mensagem para "Iniciar um novo chat", isso significa que a sessão atual tem turnos demais
## Boas práticas

<Callout type="tip">
**Inicie uma nova sessão para cada tarefa**: Tarefas independentes — redação de textos, pesquisa, depuração — devem ter, cada uma, sua própria sessão, para evitar interferência de contexto.
</Callout>

<Callout type="tip">
**Resuma periodicamente em sessões longas**: Após mais de 20 turnos, peça proativamente ao Kimi para resumir as informações principais e evitar perda de dados.
</Callout>

<Callout type="tip">
**Limpe informações sensíveis prontamente**: O histórico de chat é mantido; exclua a sessão inteira após lidar com conteúdo privado.
</Callout>
