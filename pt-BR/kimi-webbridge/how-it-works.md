---
title: "Como a Extensão de navegador Kimi funciona"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Como a Extensão de navegador Kimi funciona - Central de Ajuda Kimi"
  description="Saiba como a Extensão de navegador Kimi conecta seu navegador a Agentes de IA localmente, permitindo navegação web segura, cliques, capturas de tela e muito mais."
  ogType="article"
/>

# Como a Extensão de navegador Kimi funciona

## Fluxo de trabalho

A Extensão de navegador Kimi oferece duas formas de uso — **conversa na barra lateral** e **controle remoto por um Agent local** — e funciona da seguinte forma:

1. **Barra lateral do navegador**: Clique no ícone do Kimi na barra de ferramentas para abrir a barra lateral e faça login com uma conta de assinante do Kimi para conversar diretamente
2. **Serviço de bridge local**: Um serviço local roda no seu computador para receber instruções do Agent
3. **Extensão do navegador**: Executa ações específicas no navegador com base no Chrome DevTools Protocol
4. **Isolamento de segurança**: Toda a execução acontece localmente — estados de login e conteúdo das páginas nunca saem do seu dispositivo

<Frames
  src="./images/workflow.png"
  alt="fluxo de trabalho"
/>

## Interface da extensão

Clique no ícone da Extensão de navegador Kimi na barra de ferramentas do navegador para expandir a barra lateral e enviar uma tarefa.

<Frames
  src="./images/connection.png"
  alt="Conexão da Extensão de navegador Kimi"
/>

## Recursos

| Recurso | Descrição |
|---------|-------------|
| Navegação web | Abre automaticamente URLs especificadas |
| Clique em elementos | Simula cliques em botões, links e outros elementos da página |
| Preenchimento de formulários | Insere texto e seleciona opções automaticamente |
| Capturas de tela | Captura a página atual ou uma área específica |
| Extração de conteúdo | Lê texto, tabelas e outros dados estruturados da página |
| Persistência de sessão de login | Usa estados de login já salvos no navegador |

Casos de uso:

- Comparação de preços em e-commerce: Pesquisa produtos automaticamente e compara preços em várias plataformas
- Pesquisa de informações: Navega profundamente pelas páginas web e extrai informações estruturadas
- Preenchimento de formulários: Preenche automaticamente diversos formulários online
- Entrada de dados: Organiza e insere dados da web automaticamente em um formato especificado

Para mais casos de uso, consulte o [site oficial da Extensão de navegador Kimi](https://www.kimi.com/features/webbridge).
