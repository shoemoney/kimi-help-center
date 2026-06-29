---
title: "Como o Kimi WebBridge funciona"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Como o Kimi WebBridge funciona - Central de Ajuda Kimi"
  description="Saiba como o Kimi WebBridge conecta seu navegador a Agentes de IA localmente, permitindo navegação web segura, cliques, capturas de tela e muito mais."
  ogType="article"
/>

# Como o Kimi WebBridge funciona

## Fluxo de trabalho

O Kimi WebBridge funciona da seguinte forma:

1. **Serviço de bridge local**: Um serviço local roda no seu computador para receber instruções do Agent
2. **Extensão do navegador**: Executa ações específicas no navegador com base no Chrome DevTools Protocol
3. **Isolamento de segurança**: Toda a execução acontece localmente — estados de login e conteúdo das páginas nunca saem do seu dispositivo

<Frames
  src="./images/workflow.png"
  alt="fluxo de trabalho"
/>

## Interface da extensão

Clique no ícone do WebBridge na barra de ferramentas do navegador para verificar o status atual da conexão:

**Conectado**: O WebBridge está funcionando corretamente e pode colaborar com o Agent.

**Desconectado**: Verifique sua configuração ou execute novamente o comando de conexão.

<Frames
  src="./images/connection.png"
  alt="Conexão do WebBridge"
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

Para mais casos de uso, consulte o [site oficial do Kimi WebBridge](https://www.kimi.com/features/webbridge).
