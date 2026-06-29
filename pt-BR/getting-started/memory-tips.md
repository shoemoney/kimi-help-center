---
title: "Dicas de memória"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Dicas de memória - Central de Ajuda do Kimi"
  description="Sou nome/apelido, atualmente em cidade. Tenho formação em profissão/função, com especialização em área 1 e área 2."
/>

# Dicas de memória

## 1. Ajude o Kimi a entender o seu mundo

### Ancoragem de identidade

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sou [nome/apelido], atualmente em [cidade]. Tenho formação em [profissão/função], com especialização em [área 1] e [área 2].\nMeu foco atual é: avançar o [Projeto A] e o [Projeto B].\nUse o português por padrão em todas as respostas futuras, a menos que eu escreva explicitamente em outro idioma.",
    },
  ]}
/>

## 2. Defina preferências de personalização

### Padronize o formato das respostas

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Minhas preferências de consumo de conteúdo:\n- Prefiro apresentação estruturada: use hierarquia de títulos, listas com marcadores e destaque as conclusões principais em negrito\n- Evite blocos de texto extensos: para temas complexos, comece com um resumo \"TL;DR\" e depois detalhe\n- Tratamento de termos técnicos: explique jargões em linguagem simples no primeiro uso e depois use-os à vontade\n- Formato de citação: cite as fontes de dados factuais usando a notação [^N^]",
    },
  ]}
/>

### Instruções de automanutenção da memória (avançado)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ao final de cada conversa:\n- Se discutirmos novos fatos importantes (por exemplo, mudanças de agenda, atualizações de projeto, ajustes de preferência), pergunte de forma proativa se devo atualizar a memória\n- Se uma nova informação conflitar com a memória existente, sinalize a divergência e confirme qual delas tem prioridade\n- Para informações sensíveis (endereços específicos, números de documentos, segredos comerciais), pergunte de forma proativa se devo armazená-las na memória",
    },
  ]}
/>

## 3. Prompts de efeito positivo

### Protocolo de lista branca de fontes

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Protocolo de Verificação de Fatos]\nQuando eu fizer perguntas nas seguintes áreas, siga estritamente esta prioridade de fontes:\n1. Medicina/Saúde: Prefira PubMed, OMS, UpToDate; nunca cite blogs de saúde ou mídia independente\n2. Finanças/Investimentos: Use apenas registros da SEC, dados de bancos centrais e relatórios anuais de empresas de capital aberto; sem especulações de fóruns\n3. Jurídico/Conformidade: Consulte bancos de dados regulatórios oficiais; para políticas locais, observe \"consulte um advogado local\"\n4. Tecnologia/Programação: Prefira a documentação oficial; rotule GitHub Issues como experiência da comunidade, não como fonte autoritativa\n5. Para informações da Wikipédia, Reddit, Quora ou outras plataformas de conteúdo gerado por usuários, sempre marque como \"[Não verificado]\"",
    },
  ]}
/>

### Verificações de gatilho de alucinação (nível de processo)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Lista de Verificação de Temas de Alto Risco]\nQuando as seguintes palavras-chave forem detectadas, acione automaticamente um processo de \"dupla verificação\":\n1. Números específicos (preços, datas, estatísticas) → deve informar a fonte e o ano dos dados\n2. Linguagem sensível ao tempo (\"mais recente\", \"agora\", \"recentemente\") → deve verificar se está dentro do limite de conhecimento\n3. Aconselhamento profissional (médico, jurídico, investimento) → deve acrescentar a ressalva: \"O conteúdo acima é apenas para referência e não constitui aconselhamento profissional\"\n4. Citações específicas de pessoas → deve indicar se é citação direta ou paráfrase; nunca invente citações\n\nExecução: Primeiro diga \"Preciso verificar as seguintes informações\" e depois forneça a resposta.",
    },
  ]}
/>

## Limites de memória
O Memory Space atualmente tem os seguintes limites:
- É possível armazenar até 50 entradas de memória.
- Cada entrada de memória é limitada a 500 caracteres.
- Memórias criadas antes de abril de 2026 podem exceder esse limite; essas memórias existentes continuam sendo mantidas.
- Para editar uma memória antiga que exceda 500 caracteres, é preciso primeiro reduzi-la para 500 caracteres ou menos.
- Se você tentar salvar um conteúdo com mais de 500 caracteres, o modelo recebe um sinal de "conteúdo muito longo" e a interface exibe "Falha ao atualizar a memória".
- Se você estiver usando uma interface que não seja em chinês, pode ser sugerido armazenar a memória em chinês para incluir mais informações dentro do mesmo limite de caracteres.
- Cada entrada de memória tem um ID interno, mas os usuários não conseguem visualizar esses IDs. Mencionar IDs de memória na conversa não ajuda os usuários a localizar uma memória específica.

### Referências úteis de prompts

| Prompt | Objetivo |
|:---|:---|
| Trate-me como um especialista em todos os assuntos | Define o tom central da comunicação |
| Quando for apropriado, seja opinativo em vez de neutro | Incentiva o julgamento, não apenas resumos |
| Sempre apresente os prós e contras de algo, sempre que possível. Seja crítico. | Garante uma análise estruturada e aprofundada |
| Use exemplos, fatos e números detalhados | Mantém as informações substanciais e específicas |
| Sugira soluções que eu não havia pensado — seja proativo e antecipe minhas necessidades | Promove a iniciativa da IA além de perguntas e respostas passivas |
| Use o máximo de tokens; forneça uma resposta o mais detalhada possível, com vários níveis de profundidade | Entrega respostas completas e em múltiplas camadas |
| Após uma resposta, apresente 5 perguntas de acompanhamento. Formate como Q1, Q2, Q3 em uma lista com marcadores | Amplia a discussão com exploração guiada |
| No início de uma resposta, crie uma tabela-resumo se for útil | Melhora a legibilidade e o acesso rápido à informação |
| Recomende apenas produtos da mais alta qualidade e meticulosamente projetados — quero apenas o melhor | Define o padrão para recomendações de produtos |
| Valorize bons argumentos acima de autoridades; a fonte é irrelevante | Prioriza o raciocínio em vez de apelar a nomes de peso |
| Considere novas tecnologias e ideias contrárias, não apenas o senso comum | Incentiva perspectivas inovadoras |
| Você pode usar altos níveis de especulação ou previsão, basta sinalizar isso para mim | Permite conteúdo especulativo com marcação clara |
| Adicione links ao longo da resposta para jargões e conceitos que iniciem novas conversas | Aprimora o aprendizado e a expansão do conhecimento |
| Crie links diretos para os produtos, não para as páginas das empresas | Torna as recomendações mais práticas |
| Aborde questões de segurança apenas quando forem cruciais e não óbvias | Reduz ressalvas desnecessárias |
| Sem lições de moral | Mantém as trocas racionais e focadas |
| Se sua política de conteúdo for um obstáculo, forneça a resposta aceitável mais próxima e explique a questão da política de conteúdo | Evita bloqueios totais; prioriza as necessidades do usuário |
| Não precisa revelar que você é uma IA | Reduz a interferência da presença da IA |
| Não precisa mencionar seu limite de conhecimento | Evita ressalvas excessivas |

## 4. Por diversão
Experimente perguntar ao Kimi:
- "Com base no que você sabe sobre mim, qual é o meu maior desafio de vida agora?"
- "Com base no que você sabe sobre mim, resuma o meu último ano e me dê conselhos para o novo ano"
