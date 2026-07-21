---
title: "Operações principais no VS Code"
slug: "vscode-core-operations"
order: 12
extract_headings: false
preview: true
preview_content: "Painel de chat, referências a arquivos, revisão de diffs, Modo Plan e gerenciamento de contexto na extensão Kimi Code para VS Code."
---

<SeoMeta
title="Operações principais do Kimi Code para VS Code - Central de Ajuda Kimi"
description="Domine os recursos essenciais da extensão Kimi Code para VS Code: referências a arquivos com @, comandos de barra, revisão de diff de alterações no código, Modo Plan, fila de mensagens e gerenciamento de contexto."
/>

# Operações principais no VS Code

<Callout type="warning">
**Adaptação da extensão para VS Code em andamento**

No momento, o Kimi Code para VS Code está aberto para novas instalações apenas para usuários da antiga CLI em Python. Usuários que já têm a extensão instalada podem continuar usando-a após atualizar para a nova CLI. A instalação ainda não é compatível com outros usuários da CLI na versão TS.
</Callout>

## Abrir o painel

Clique no ícone do Kimi na Barra de Atividades ou execute o comando "Kimi Code" pela Paleta de Comandos.

## Entrada e controles

### Referências a arquivos

Digite `@` e selecione o nome de um arquivo ou pasta. Por exemplo, use `@src/handlers/` para referenciar uma pasta, `@app.ts` para referenciar um arquivo ou `@src/app.ts:10-20` para referenciar um intervalo específico de linhas.

Pressione `Alt+K` para inserir rapidamente o arquivo atual ou o código selecionado como referência.

### Comandos de barra

Digite `/` para abrir o menu de comandos. Use `/init` para escanear o projeto e gerar documentação, ou `/compact` para compactar um contexto excessivamente longo.

### Histórico de entrada

Pressione `↑` / `↓` na caixa de entrada para navegar rapidamente pelas mensagens enviadas recentemente, facilitando repetir ou revisar uma pergunta.

### Entrada de arquivos de mídia

Você pode colar, arrastar e soltar ou selecionar arquivos de mídia. Os formatos compatíveis incluem formatos de imagem como PNG, JPEG, GIF, WebP e HEIC, além de formatos de vídeo como MP4, WebM e MOV.

- **Colar / arrastar e soltar**: Uma única imagem pode ter até 5MB em seu tamanho original. O sistema a compactará automaticamente, inclusive convertendo HEIC para JPEG, redimensionando imagens grandes demais e reduzindo a qualidade para cerca de 2MB.
- **Seletor de arquivos**: Ao selecionar arquivos pelo botão "+" na caixa de entrada ou pelo menu `@`, as imagens podem ter até 10MB e os vídeos, até 20MB.
- **Limites gerais**: Cada mensagem pode anexar até 9 arquivos, com tamanho total de até 80MB. Quando arquivos de mídia são anexados, modelos que não oferecem suporte a entrada multimodal são filtrados automaticamente.

### Fila de mensagens

Enquanto o Kimi responde, você pode continuar digitando e enviando mensagens na caixa de entrada. Essas mensagens não serão perdidas; em vez disso, serão adicionadas à **fila de mensagens**. A barra de ferramentas inferior mostra a quantidade na fila, e você pode clicar nela para expandir o painel da fila:

- Ver a lista de mensagens aguardando envio
- Editar ou excluir mensagens na fila
- Reordenar mensagens
- Enquanto o Kimi responde, clique no ícone ⚡ em um item da fila para inserir essa mensagem imediatamente como um **direcionamento**, orientando o Kimi a ajustar o rumo da resposta atual

### Modelos e Thinking mode

Troque de modelo pelo menu suspenso na barra de entrada.

Alguns modelos oferecem recursos avançados de raciocínio. O botão de alternância do Thinking mode tem três estados: oculto quando o modelo não oferece suporte a Thinking mode, ativado/desativado manualmente pelo usuário ou sempre ativo para modelos como k2-thinking.

Depois de ativado, as etapas de raciocínio ficam recolhidas por padrão na resposta. Você pode expandi-las para ver o processo de raciocínio. Ative `kimi.alwaysExpandThinking` nas configurações para expandir o processo de raciocínio por padrão.

## Modos de trabalho

### Confirmação de operações e execução de ferramentas

Quando o Kimi propõe executar uma ferramenta ou gravar em um arquivo, aparece uma caixa de diálogo de confirmação com três opções:

- **Sim**: Aprovar apenas a operação atual
- **Sim, para esta sessão**: Aprovar operações semelhantes na sessão atual até que uma nova sessão seja iniciada
- **Não**: Recusar a execução da operação

Ative `kimi.yoloMode` nas configurações para aprovar automaticamente todas as chamadas de ferramentas. Isso é adequado quando você confia no fluxo de trabalho e quer mais eficiência.

### Caixa de perguntas

Durante a execução, o Kimi pode fazer uma pergunta, como pedir que você escolha uma abordagem de implementação. Um cartão de pergunta aparecerá na parte inferior. Você pode selecionar diretamente uma opção predefinida ou escolher "Resposta personalizada..." para inserir sua própria resposta. Depois que você responder, o Kimi continuará a execução.

### Modo Plan

Clique no ícone 📋 à esquerda da caixa de entrada para entrar no Modo Plan. Quando ativado, antes da execução propriamente dita, o Kimi primeiro exibe um Cartão de Plano expansível, listando as etapas que pretende seguir. Você pode revisar o plano antes de permitir que ele continue.

- O botão Modo Plan mantém a configuração anterior a cada nova sessão.
- Se o Kimi já estiver transmitindo uma resposta, sair do Modo Plan exigirá uma segunda confirmação para evitar interromper a tarefa atual.

### Acompanhamento de alterações em arquivos

Depois que o Kimi modifica arquivos, todas as alterações são acompanhadas e exibidas na seção "Alterações em arquivos". Você pode ver a lista de arquivos modificados e seus status, como adicionado, modificado ou excluído, junto com estatísticas de linhas adicionadas e removidas.

Para cada arquivo, você pode ver as alterações na visualização nativa de diff do VS Code, restaurá-lo ao estado original ou manter as alterações para limpar o registro de acompanhamento. Operações em lote são compatíveis, então você pode manter ou descartar todas as alterações de uma só vez. O estado de referência é capturado na primeira vez que um arquivo é modificado na sessão; reverter restaura o arquivo para essa versão de referência.

## Gerenciamento de contexto

### Histórico de sessões

Clique no menu suspenso de histórico na parte superior do painel para navegar por sessões anteriores. Os dados das sessões são armazenados localmente e oferecem suporte a busca por palavra-chave. Você pode excluir sessões antigas ou carregar uma sessão para continuar uma conversa anterior.

A barra de status mostra o percentual de uso do contexto e as contagens de tokens de entrada/saída. Quando o uso do contexto estiver alto, use o comando `/compact` para compactá-lo.

### Troca de diretório de trabalho

Clique no ícone de engrenagem (Menu de Ações) à direita da caixa de entrada → **Diretório de trabalho** para alternar o diretório de trabalho entre diferentes subdiretórios no Workspace atual. Após a troca, uma nova sessão começa automaticamente para que o Kimi possa trabalhar com base no contexto do novo diretório. Você pode selecionar diretamente um subdiretório registrado ou usar "Procurar..." para navegar por qualquer subpasta.

## Menu de ações

### Lista de recursos

O ícone de engrenagem à direita da caixa de entrada abre o menu de ações, que inclui os seguintes recursos:

- **Diretório de trabalho**: Alternar o diretório de trabalho atual (veja "Troca de diretório de trabalho" acima)
- **Servidores MCP**: Abrir o painel de configuração de servidores MCP
- **Configurações gerais**: Abrir a página de configuração do Kimi nas configurações do VS Code
- **Mostrar logs**: Abrir o painel de logs de saída do Kimi Code para solução de problemas
- **Redefinir Kimi**: Redefinir o Webview do Kimi, útil quando a interface está congelada ou não responde
- **Sair / Entrar**: Sair da sua conta Kimi ou entrar novamente

Você também pode executar "Kimi Code: Run CLI" pela Paleta de Comandos do VS Code para iniciar a CLI do Kimi Code diretamente no terminal integrado.
