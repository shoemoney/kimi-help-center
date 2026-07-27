---
title: "O que são Skills?"
slug: "what-are-skills"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="O que são Skills? - Central de Ajuda Kimi"
  description="Entenda os princípios de funcionamento, os tipos e o uso das Kimi Skills. As Skills são pacotes de conhecimento reutilizáveis para ampliar as capacidades do Agent em tarefas específicas, reunindo instruções, melhores práticas, scripts e recursos."
  ogType="article"
/>

# O que são Skills?

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

As Skills são pacotes de conhecimento reutilizáveis criados para expandir os limites das capacidades de um agente de IA. Cada skill inclui:

- **Abordagens de trabalho e orientações operacionais** — Metodologias adaptadas a tipos específicos de tarefa.
- **Melhores práticas e padrões** — Padrões do setor e protocolos internos a serem seguidos.
- **Scripts, ferramentas e recursos de referência** — Ferramentas e materiais opcionais para auxiliar na execução.

## Como usar?

No início de uma conversa, o Agent vê uma lista de skills disponíveis com seus nomes e breves descrições. Se uma skill for relevante para a tarefa atual, o Agent carrega as instruções completas e as executa conforme necessário.

## Jornada do usuário

Da descoberta de skills à criação das suas próprias, o caminho completo é o seguinte:

1. **Descubra skills** — Explore as skills oficiais e recomendadas no painel de Skills para encontrar uma que se encaixe no seu cenário.
2. **Instale skills** — Clique no botão "+" para adicionar uma skill na hora.
3. **Invoque skills** — Digite `/` na caixa de chat para selecionar uma skill, ou deixe o Kimi acioná-la automaticamente com base na sua solicitação.
4. **Crie a sua própria** — Se as skills existentes não atenderem às suas necessidades, faça upload de documentos ou descreva seus requisitos para gerar uma skill personalizada, ou use `/skill-creator` para criá-la por meio de diálogo.

## Como as Skills funcionam?

Quando você envia uma solicitação, o Kimi Agent avalia se a tarefa atual envolve alguma skill específica. Em caso afirmativo, ele carrega automaticamente a skill correspondente e segue suas instruções para concluir a tarefa.

As skills só são carregadas quando relevantes para a tarefa, garantindo que não interfiram no contexto de outras conversas.

## Skills vs. prompts diretos: qual a diferença?

Tomando como exemplo a redação de relatórios semanais:
- **Prompt direto**: Você pede diretamente ao Kimi Agent, e ele escreve com base em seu próprio entendimento do formato.
- **Uso de Skills**: Depois de instalar uma skill de relatório semanal, cada resultado segue a estrutura, o tom e a extensão que você definiu, sem precisar repetir as instruções.

| | Prompt direto | Uso de skills |
|---|---|---|
| **Precisa explicar os requisitos toda vez?** | Sim | Não, aplicado automaticamente |
| **Estabilidade do formato de saída** | Variável | Consistente conforme definido |
| **Melhor caso de uso** | Tarefas pontuais e temporárias | Fluxos de trabalho repetitivos e fixos |
| **Requer configuração?** | Não | Exige criação ou instalação |

## Tipos de Skill

### (1) Skills oficiais e skills recomendadas

**Skills oficiais**: Criadas e mantidas pela Moonshot AI, disponíveis para todos os usuários. O Kimi as aciona automaticamente em cenários relevantes.

Skills oficiais comuns incluem:
- `docx` — Crie e edite documentos Word, adequada para qualquer tarefa em .docx, como criação e edição de documentos, comentários, revisões, notas de rodapé, sumário e conversão de Markdown para Word.
- `deep-research` — Realize pesquisas aprofundadas e construa relatórios extensos usando um conjunto de ferramentas, exigindo pelo menos 10 ciclos iterativos de busca, reflexão recursiva e visualização obrigatória em IPython.

**Skills recomendadas**: Skills selecionadas com base em cenários, disponíveis para adição com um clique, abrangendo casos de uso comuns como pesquisa de investimentos e formatação de documentos.

Skills recomendadas comuns incluem:
- `sop-writer` — Transforme processos de negócios em documentos completos de Procedimento Operacional Padrão (POP), incluindo fluxogramas de processo, matrizes RACI, etapas operacionais detalhadas e tratamento de exceções.
- `event-etf-study` — A partir de um conceito ou evento, identifique ações relacionadas, construa um índice de ETF ponderado por capitalização de mercado, analise as variações de valor de mercado durante a janela do evento e gere dashboards interativos em HTML. Usada quando os usuários consultam ações temáticas, ETFs temáticos, análise orientada por eventos ou pesquisa de eventos.

**Documento de escritório em skill**: Faça upload de documentos para gerar skills e replicar facilmente temas de estilo.

### (2) Skills de código aberto

Baixe ou instale Skills adequadas de comunidades de código aberto, combinadas com Agentes Locais (como o Kimi Code) ou Agentes na Nuvem (como o Kimi Claw).

**Plataformas comuns de hub de AI Skills**

| Plataforma | URL | Descrição |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | Um marketplace de skills para agentes de IA que reúne pacotes SKILL.md do GitHub, compatível com Claude Code e OpenAI Codex CLI |
| SkillsLLM | https://skillsllm.com | Um marketplace de código aberto de skills para agentes de IA, com mais de 1.600 skills auditadas em segurança para Claude Code, Codex CLI e ChatGPT |
| LobeHub Skills | https://lobehub.com/skills | Explore e distribua pacotes SKILL.md compatíveis com Claude Code, Codex CLI e ChatGPT |

### (3) Skills personalizadas

Skills personalizadas criadas por você para fluxos de trabalho pessoais e tarefas de domínios específicos, como:
- Aplicar guias de estilo específicos a documentos ou apresentações.
- Gerar e-mails ou conteúdos de comunicação com base em modelos fixos.
- Organizar atas de reunião em um formato específico.
- Executar fluxos de trabalho específicos de análise de dados.
