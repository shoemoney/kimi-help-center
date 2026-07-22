---
title: "Primeiros passos com Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Primeiros passos com Kimi - Central de Ajuda Kimi"
  description="Conheça os três modelos do Kimi (K2.6, K3, K3 Swarm), as ferramentas integradas e os recursos multimodais para começar rapidamente a conversar e executar tarefas."
/>

# Primeiros passos com Kimi

Você pode digitar perguntas na caixa de chat, enviar arquivos ou alternar entre modelos conforme a sua necessidade.
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

Kimi oferece vários modelos. Clique no botão de troca de modelo acima da caixa de entrada para alternar.

| Modelo | Nível de raciocínio | Ideal para |
|-------|-------------------|----------|
| **K2.6** | Padrão / Alto | Conversas rápidas e perguntas e respostas com retorno mais ágil |
| **K3** | Baixo / Alto / Máximo | Chat e tarefas de Agent; o mais completo no geral |
| **K3 Swarm** | Baixo / Alto / Máximo | Busca em larga escala e processamento em lote, concluídos de uma só vez |

<Callout type="tip">
K2.6 não consome credits no Chat (quando usado como K2.6 Agent dentro do Kimi Work, ainda consome credits da assinatura); K3 e K3 Swarm são cobrados em credits. Consulte os [benefícios da assinatura](https://www.kimi.com/help/membership/membership-overview) para saber mais.
</Callout>

### Sobre o Kimi K3

Kimi K3 é atualmente o modelo mais poderoso do Kimi, com 2,8 trilhões de parâmetros, desenvolvido com Kimi Delta Attention (KDA) e Attention Residuals, com **visão nativa** e uma **janela de contexto de 1 milhão de tokens**. Como o primeiro modelo aberto de classe 3T do mundo, o K3 foi projetado para inteligência de ponta em programação de longo horizonte, trabalho com conhecimento e raciocínio, alcançando desempenho de liderança em programação, execução de longo horizonte e uma ampla variedade de tarefas de inteligência geral.

### Ferramentas integradas

Disponíveis de fábrica, sem necessidade de configuração:

| Ferramenta | Descrição |
|------|------------|
| **Web Search** | Busca na web em tempo real para notícias e informações recentes |
| **Ferramenta Fetch** | Acesso direto a URLs específicas (páginas web, documentos, imagens e outros recursos online) |
| **Busca de imagens** | Busca de texto para imagem e de imagem para imagem para descobrir rapidamente conteúdo visual |
| **IPython** | Execute código Python para análise e visualização de dados |
| **Memória** | Memória inteligente que registra suas preferências e hábitos pessoais |

## Recursos visuais e multimodais
Kimi K3 oferece compreensão completa de imagens, vídeos e documentos de escritório (PDF/Word/Excel), usando uma **arquitetura multimodal nativa** (não um OCR acoplado). Ele consegue analisar diretamente o conteúdo de documentos e realizar tarefas de escritório de nível intermediário a avançado (como escrever fórmulas do Excel ou gerar esboços de PPT/código VBA). Combinado à visão nativa e a uma janela de contexto de 1 milhão de tokens, ele lida com materiais multimodais mais longos e complexos.
### Suporte a entrada multimodal
- **Imagens**: PNG, JPEG, WebP, GIF etc. (por URL, Base64 ou upload de arquivo local)
- **Vídeo**: MP4 etc. (por video_url ou sequências de frames de imagem + parâmetro fps)
- **Documentos**: PDF, Word, Excel, TXT, Markdown etc.
- **Recursos online**: URLs, links de artigos
- **Busca de imagens**: Envie uma imagem para buscar imagens relacionadas ou semelhantes
- **Compreensão de vídeo**: Oferece suporte à compreensão de vídeo — consegue analisar gravações de tela e replicar a lógica de interação
- **Programação visual**: Envie capturas ou gravações de tela para gerar código de frontend (HTML/Vue/React etc.); consegue reproduzir automaticamente páginas web a partir de mockups de design

### Formatos de saída
- Texto simples / texto e imagem combinados: Respostas conversacionais padrão
- Markdown: Texto rico com títulos, listas, tabelas e links
- Blocos de código: HTML/Vue/React/Python/JSON/Mermaid etc. (com identificadores de linguagem)
- Dados estruturados em JSON: Saída forçada em modo JSON
- Diagramas Mermaid: Fluxogramas, diagramas de sequência, mapas mentais etc.
- Fórmulas matemáticas em LaTeX: Expressões matemáticas inline e em bloco
- Saída em modo duplo (raciocínio): Retorna tanto `reasoning_content` (processo de raciocínio) quanto `content` (resposta final)
- Formato de chamada de ferramenta: Formato padrão de Function Calling (para desenvolvedores)

### Observações importantes

1. **Saída de arquivos**: K3 consegue produzir documentos editáveis de ponta a ponta (como `.pptx`, `.docx`, `.xlsx`, `.pdf`) e outras entregas complexas; K2.6 foca em perguntas e respostas rápidas e gera apenas texto (como esboços de PPT, corpo de texto do Word ou código).

<Callout type="tip">
Dica: Para gerar imagens, áudio ou vídeo, clique em "+" → Plugin, selecione o recurso correspondente e use-o com **K3**. Para criar documentos editáveis complexos ou executar tarefas em várias etapas, recomendamos escolher **K3** ou **K3 Swarm** para ter a experiência completa.
</Callout>

## Sessões vs. turnos de conversa
Ao clicar em "Novo chat", pense nisso como iniciar uma longa conversa com Kimi.
| Conceito | Analogia | Definição técnica |
|---------|---------|---------------------|
| **Sessão** | Uma reunião inteira (do início ao fim) | Um processo completo de chat, com começo e fim bem definidos |
| **Turno** | Uma troca (você fala, Kimi responde) | Sua entrada e a resposta do Kimi formam uma ida e volta |

### Principais diferenças
**Sessão**
- **Memória contínua**: Kimi se lembra de todo o contexto dentro do chat atual
- **Contexto entre turnos**: Cada resposta usa o conteúdo anterior da conversa como contexto para o próximo turno
- **Limites definidos**: Clicar em "Novo chat" = recomeço; o contexto anterior é apagado
**Turno**
- **Contagem cumulativa**: Turno 1, Turno 2, … adicionados progressivamente
- **Memória limitada**: Turnos demais (por exemplo, 50+) podem fazer Kimi "esquecer" conteúdos anteriores, especialmente em textos longos ou tarefas com requisitos rigorosos
- **Restrição de tamanho do contexto**: Limitado pela contagem de tokens; à medida que os turnos se acumulam, o conteúdo mais antigo pode ser comprimido

<Callout type="tip">
**Caso extremo**: Se uma única pergunta e resposta encerra a conversa, então 1 turno = 1 sessão.
</Callout>

## Por que essa diferença importa
Em uma única sessão, cada nova pergunta ou instrução que você envia é respondida com base em todos os turnos anteriores. Conforme os turnos se acumulam e o conteúdo fica mais longo, a qualidade das respostas pode cair gradualmente.

### Cenários comuns
**Cenário 1: Mudar de assunto**
- Errado: Pedir "me ajude a calcular meus impostos" em uma sessão em que você estava escrevendo um romance de 30.000 palavras
- Certo: Inicie uma nova sessão para a pergunta sobre impostos — evite que Kimi confunda personagens do romance com conceitos tributários
**Cenário 2: Processamento de documento longo**
- Depois de dezenas de turnos, Kimi pode "esquecer" regras ou resumos de arquivos definidos no início
- Solução: Resuma proativamente no meio da tarefa ("Resuma nosso plano até agora") ou inicie uma nova sessão
**Cenário 3: Entender os limites do produto**
- Os limites de tamanho do contexto são medidos em tokens, mas, no dia a dia, pense neles como "turnos"
- Se você vir um aviso de "Iniciar um novo chat", isso significa que a sessão atual tem turnos demais
## Boas práticas

<Callout type="tip">
**Inicie uma nova sessão para cada tarefa**: Tarefas independentes — redação, pesquisa, depuração — devem ter sua própria sessão para evitar interferência de contexto.
</Callout>

<Callout type="tip">
**Resuma periodicamente em sessões longas**: Depois de mais de 20 turnos, peça proativamente ao Kimi para resumir as informações principais e evitar perda de dados.
</Callout>

<Callout type="tip">
**Remova informações sensíveis rapidamente**: O histórico de chat é mantido; exclua a sessão inteira depois de lidar com conteúdo privado.
</Callout>
