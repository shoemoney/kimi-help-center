---
title: "K2.6 Agent Swarm [Beta]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [Beta] - Central de Ajuda Kimi"
  description="O K2.6 Agent Swarm Beta é uma arquitetura de &quot;escalonamento horizontal&quot; que coordena até 300 subagentes trabalhando em paralelo — sem papéis predefinidos nem fluxos de trabalho montados manualmente..."
/>

# K2.6 Agent Swarm [Beta]

<Callout type="info">
O **K2.6 Agent Swarm [Beta]** é uma arquitetura de "escalonamento horizontal" que coordena até 300 subagentes trabalhando em paralelo — sem necessidade de papéis predefinidos ou fluxos de trabalho montados manualmente. Ele conclui tarefas cerca de **4,5× mais rápido** do que a execução por um único agente.
</Callout>

Em 27 de janeiro de 2026, a Moonshot AI lançou o Kimi K2.5, apresentando o Agent Swarm [Beta]. Em 20 de abril de 2026, a Moonshot AI lançou e disponibilizou em código aberto o Kimi K2.6, trazendo grandes evoluções para a arquitetura do Agent Swarm:
- Até **300 subagentes** trabalhando simultaneamente
- Mais de **4.000 chamadas de ferramentas** por tarefa
- **4,5× mais rápido** do que a execução sequencial por um único agente

## A história por trás

Em 2025, a narrativa dominante no setor de IA girava em torno do escalonamento vertical — modelos maiores, mais parâmetros. Mas isso esbarra em um teto estrutural: o gargalo da execução única e sequencial.

O Agent Swarm nasceu de uma situação real: quando uma integrante da equipe tentou automatizar a coleta diária de informações sobre ações e se viu diante de 100 linhas de código com if-else, ela percebeu: "Estou escrevendo um sistema multiagente na mão." Se os modelos conseguem usar ferramentas, por que não conseguiriam se autoarquitetar?

O Agent Swarm é uma estrutura organizacional autoprojetada — concebida pela IA, e não por humanos. O Agent principal (orquestrador) comanda de forma autônoma até 300 subagentes, executando até 4.000 etapas de fluxo de trabalho em paralelo.

<Frames
  src="./images/swarm/swarm.png"
  alt="swarm"
/>

O K2.6 Agent Swarm [Beta] utiliza o método de treinamento PARL (Parallel-Agent Reinforcement Learning). Em comparação com abordagens de agente único, ele reduz as etapas críticas em 3× a 4,5× em cenários de busca de larga escala.

## Como usar？

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="screenshot 8"
/>

**Pontos de acesso:**
- **Web**: [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Celular**: app Kimi → Trocar de modo → Selecionar K2.6 Agent Swarm [Beta]

<Callout type="warning">
**Acesso Beta**: o K2.6 Agent Swarm [Beta] está atualmente disponível para os assinantes Moderato, Allegretto, Allegro e Vivace. As tarefas consomem consideravelmente mais quota do que as tarefas padrão do Agent.
</Callout>

**Passos:**
1. Descreva sua tarefa e envie (por exemplo, "Reúna mais de 200 artigos de Paul Graham")
2. Acompanhe o progresso em tempo real: criação da lista de tarefas, criação de subagentes e execução em paralelo
3. Receba as entregas: projetos de código, pastas de arquivos, análises de dados e documentos do Office
4. Visualize, baixe ou compartilhe os resultados
5. Mude para um único K2.6 Agent para continuar nas interações seguintes

## Casos de uso

### Descoberta em escala

**Caso 1: Os 3 principais criadores em 100 nichos do YouTube**

O K2.6 Agent Swarm [Beta] criou 300 subagentes para busca em paralelo, gerando tabelas estruturadas com nomes de canais, número de inscritos e descrições.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="Ver resultado" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**Caso 2: Reunindo mais de 200 artigos de Paul Graham**

O Agent Swarm implantou subagentes para buscar, baixar, categorizar e resumir mais de 200 artigos em pastas temáticas.

<Chat title="Ver resultado" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### Produção em escala

**Caso: Revisão de literatura de 100 páginas a partir de 40 PDFs**

O K2.6 Agent Swarm [Beta] implantou vários subagentes voltados à escrita, cada um responsável por um capítulo. Resultado final: um documento acadêmico de 100 páginas com citações, gráficos de metodologia e análise da rede de citações.

<Frames
  src="./images/swarm/literature-review.png"
  alt="literature review"
/>

### Perspectivas em escala

**Caso: Revisão por especialistas de uma estratégia de lançamento de produto**
O Agent Swarm implantou subagentes especialistas com diferentes perspectivas (Gerente de Produto, Investidor, Sucesso do Cliente) para revisar uma estratégia de lançamento.

<Frames
  src="./images/swarm/expert-review.png"
  alt="expert review"
/>

<Chat title="Ver resultado" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**Caso: *O Problema dos Três Corpos* reescrito em 20 estilos literários**
20 subagentes "escritores" compuseram de forma independente em estilos distintos — de Virginia Woolf a Borges e Kafka.

<Chat title="Ver resultado" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## Mergulho técnico

**Arquitetura central: Comandante + Especialistas**

- **Orquestrador** = Treinador/Comandante: enxerga o todo e define a estratégia
- **Subagentes** = Jogadores: cada um focado em um papel específico

**Decisão de design fundamental: congelar os jogadores e treinar apenas o treinador**

Todos os subagentes mantêm as capacidades existentes; apenas o orquestrador evolui por meio de aprendizado por reforço. Isso garante clara atribuição de responsabilidades e estabilidade no treinamento.

**Como evitar a "preguiça":**
- **Colapso serial**: o orquestrador entrega tudo a um único subagente
- **Paralelismo falso**: subtarefas sem sentido criadas apenas para inflar métricas

**Solução: mecanismo de recompensa tridimensional**
1. Qualidade do resultado final
2. Paralelismo real alcançado
3. Taxa de conclusão das subtarefas

**Métrica de etapas críticas**

O Agent Swarm calcula o tempo do subagente mais lento em cada etapa. Isso força uma otimização real do processo, em vez de uma divisão cega das tarefas.

**Context Sharding**

Cada subagente concentra-se em seu próprio "caderno", registrando os detalhes relevantes de forma independente. Apenas as conclusões principais são reportadas ao orquestrador — preservando o raciocínio sem sobrecarregar a memória.

**Resultados no mundo real**

No benchmark BrowseComp:
- Precisão: 15,9% (agente único) → 33,3%
- Etapas críticas reduzidas em cerca de 40%

## Cenários de aplicação

O K2.6 Agent Swarm [Beta] é especialmente indicado para:
1. **Recuperação de informações em larga escala**: coleta massiva de dados da internet
2. **Downloads em lote**: coleta de arquivos e recursos em larga escala
3. **Leitura de amplo alcance**: processamento de mais de 100 documentos
4. **Escrita de textos longos**: conteúdo com mais de 100.000 palavras
5. **Programação complexa**: desenvolvimento de front-end, revisão de código e refatoração
6. **Automação de escritório**: documentos profissionais, planilhas e apresentações

**Leitura complementar:**
- [Kimi Agent Swarm: 100 subagentes em escala](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5: Inteligência Agêntica Visual​](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6: Avançando na Programação de Código Aberto](https://www.kimi.com/blog/kimi-k2-6)
