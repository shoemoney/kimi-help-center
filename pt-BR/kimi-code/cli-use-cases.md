---
title: "Casos de uso comuns"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso comuns - Kimi Help Center"
  description="Veja aqui alguns cenários típicos de uso do Kimi Code CLI no dia a dia de desenvolvimento, cada um com prompts de exemplo para referência."
/>

# Casos de uso comuns

Veja aqui alguns cenários típicos de uso do Kimi Code CLI no dia a dia de desenvolvimento, cada um com prompts de exemplo para referência.

## Implementar novos recursos

Descreva o que você precisa em linguagem natural — a IA lê automaticamente o código relevante, escreve o novo código e verifica os resultados.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Adicione um recurso de ordenação por data de cadastro à página da lista de usuários — tanto o frontend quanto o backend precisam ser alterados",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Implemente um middleware de rate limiter usando o algoritmo de token bucket, limitando cada IP a 60 requisições por minuto",
    },
  ]}
/>

## Corrigir bugs

Cole a mensagem de erro diretamente para a IA — ela localiza automaticamente a causa raiz e fornece a correção.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Depois de rodar npm test apareceu este erro, por favor corrija:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "O pipeline de CI falhou na etapa de lint. Aqui está o log: ... Por favor corrija",
    },
  ]}
/>

## Entender um projeto

Quando você está começando em um novo projeto ou precisa entender um trecho específico de código, é só perguntar.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Qual é a arquitetura geral deste projeto? Quais são os principais módulos?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "O que faz o src/auth/middleware.ts? Como funciona o fluxo de autenticação?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Explique como as migrações de banco de dados são gerenciadas neste projeto",
    },
  ]}
/>

## Automatizar pequenas tarefas

Ideal para alterações de código em lote, adicionar documentação, gerar testes e outros trabalhos repetitivos.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Adicione comentários JSDoc a todas as funções exportadas no diretório src/utils/",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Gere testes unitários para todos os métodos públicos da classe UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Substitua todas as declarações var do projeto por const ou let",
    },
  ]}
/>

## Tarefas gerais

O Kimi Code CLI não se limita a programação — ele também dá conta de pesquisas, análise de dados, operações em massa com arquivos e muito mais.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Pesquise as principais bibliotecas ORM de Node.js usadas atualmente e compare suas vantagens e desvantagens",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analise os logs de acesso dos últimos 7 dias no diretório logs/ e liste os 10 caminhos de requisição mais frequentes",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Mescle todos os arquivos CSV do diretório data/ em um só e remova as linhas duplicadas",
    },
  ]}
/>
