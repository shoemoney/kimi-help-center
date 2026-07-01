---
title: "Primeiros passos com o Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Primeiros passos com o Kimi - Central de Ajuda Kimi"
  description="Você pode digitar perguntas na caixa de chat, enviar arquivos ou alternar entre modelos conforme suas necessidades."
/>

# Primeiros passos com o Kimi

Você pode digitar perguntas na caixa de chat, enviar arquivos ou alternar entre modelos conforme suas necessidades.
Abra [kimi.com](https://www.kimi.com) e experimente enviar uma mensagem — diga olá ao Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hi, Kimi!",
    },
  ]}
/>

## Com a tecnologia do K2.6
O Kimi K2.6 é um modelo de código aberto construído sobre o K2.5, com melhorias significativas, com foco em codificação de ponta, execução de longo prazo e recursos de agent swarm. Ele alcança desempenho de ponta em tarefas de agente, codificação, compreensão de imagens, compreensão de vídeo e benchmarks de inteligência geral. O K2.6 também é o modelo **mais versátil** do Kimi — sua arquitetura multimodal nativa oferece suporte a entradas visuais e de texto, modos de pensamento e sem pensamento, além de tarefas conversacionais e agênticas.
Como resultado, o Kimi se destaca não apenas em conversas de perguntas e respostas, mas também no planejamento autônomo de tarefas, na invocação de ferramentas e no raciocínio em múltiplas etapas — oferecendo suporte a pensamento profundo e execução de tarefas complexas.
### Ferramentas integradas
Disponíveis prontamente, sem necessidade de configuração:
| Ferramenta | Descrição |
|------|------------|
| **Web Search** | Busca na web em tempo real para as notícias e informações mais recentes |
| **Fetch Tool** | Acesso direto a URLs específicas (páginas web, documentos, imagens e outros recursos online) |
| **Data Source** | Conexão a bancos de dados profissionais; consulta a listagens de bancos de dados e recuperação de dados |
| **Image Search** | Busca de texto para imagem e de imagem para imagem para descoberta rápida de conteúdo visual |
| **IPython** | Execução de código Python para análise e visualização de dados |
| **Memory** | Memória inteligente que registra suas preferências e hábitos pessoais |

## Recursos visuais e multimodais
O K2.6 oferece suporte à compreensão completa de imagens, vídeos e documentos de escritório (PDF/Word/Excel), usando uma **arquitetura multimodal nativa** (não um OCR adicional). Ele consegue analisar diretamente o conteúdo dos documentos e realizar tarefas de escritório de nível intermediário a avançado (como escrever fórmulas no Excel ou gerar esboços de PPT/código VBA).
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

<Callout type="warning">
1. **Limitação de geração de imagens**: O modo de chat padrão oferece suporte apenas à *busca* de imagens, e não à *geração* de imagens (a geração de imagens requer o modo K2.6 Agent).
2. **Limitação de saída de arquivos**: Apenas conteúdo em texto é compatível como saída (por exemplo, esboços de PPT, corpo de texto do Word, código). A saída direta de arquivos binários (`.pptx`, `.docx`, `.xlsx`, `.pdf`) não é compatível.
3. Para geração de imagens ou saída de documentos editáveis complexos, use o [K2.6 Agent](https://www.kimi.com/agent) ou a ferramenta de execução de código.
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
1. **Inicie uma nova sessão para cada tarefa**: Tarefas independentes — redação de textos, pesquisa, depuração — devem ter, cada uma, sua própria sessão, para evitar interferência de contexto.
2. **Resuma periodicamente em sessões longas**: Após mais de 20 turnos, peça proativamente ao Kimi para resumir as informações principais e evitar perda de dados.
3. **Limpe informações sensíveis prontamente**: O histórico de chat é mantido; exclua a sessão inteira após lidar com conteúdo privado.
</Callout>
