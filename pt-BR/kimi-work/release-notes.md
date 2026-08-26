---
title: "Notas de lançamento"
slug: "release-notes"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Notas de lançamento do Kimi Work - Central de Ajuda Kimi"
  description="Notas de lançamento do Kimi Work: novos recursos, alterações e correções para Mac e Windows, atualizadas continuamente."
/>

# Notas de lançamento

Esta página registra as atualizações de versão do Kimi Work, incluindo novos recursos, alterações e correções, e é atualizada continuamente. Baixe a versão mais recente: [kimi.com/products/kimi-work](https://www.kimi.com/products/kimi-work)

## 3.2.2 (2026-08-26)

**Novidades**

- Novo bichinho de estimação na área de trabalho: o Kimi acompanha e interage com você como um pet de desktop
- Novos comandos Slash: a caixa de entrada agora suporta os comandos compact (compactar contexto), fork (ramificar conversa) e goal (objetivo)
- Nova opção “Padrão” para permissões de execução: agora há três níveis de permissão disponíveis globalmente — “Padrão”, “Permitir manualmente” e “Permitir tudo”

**Alterações**

- O controle do navegador integrado pelo Agent agora fica ativado por padrão
- As conversas da área de Chat não compartilham mais um diretório raiz: cada conversa agora tem seu próprio diretório de trabalho

**Correções**

- Correção de um problema em que a primeira mensagem exibia brevemente um estado vazio após o envio
- Correção de alguns bugs e melhoria de algumas interações e da estabilidade

## 3.2.1 (2026-08-21)

**Novidades**

- Novo Launcher global: invoque uma caixa de entrada flutuante em formato de cápsula na área de trabalho, a qualquer momento e em qualquer lugar, com um atalho de teclado global
  - Ao ser invocado, ele traz automaticamente os arquivos selecionados no Finder / Explorador de Arquivos, e permite colar imagens, adicionar anexos e arrastar capturas de tela
  - Digite “/” para abrir o menu de plugins e skills (com suporte à busca em pinyin) e escolher um workspace
  - Segure o atalho para ditar; após o envio, ele se recolhe em uma minicápsula, e você pode voltar ao app principal com um clique para ver a resposta
- Nova fila de mensagens: enquanto o Agent responde, você pode continuar enviando mensagens; as novas mensagens entram automaticamente na fila, com suporte para reordenar arrastando, editar, excluir e visualizar detalhes
- Ditado por voz na caixa de entrada do Work: clique no microfone ou segure o atalho para começar a ditar, com reconhecimento misto de chinês e inglês

**Alterações**

- Lógica de notificações de mensagens atualizada: você pode alternar as regras de notificação de mensagens nas Configurações

**Correções**

- Consumo de energia em espera otimizado, reduzindo o uso de recursos em segundo plano quando o app está ocioso
- Correção de um problema em que o ícone do Dock desaparecia no macOS
- Correção de alguns bugs e melhoria de algumas interações e da estabilidade

## 3.2.0 (2026-08-19)

**Novidades**

- Novo navegador integrado ao Agent: as guias do navegador são vinculadas às conversas e ficam na área de visualização, e o Agent pode operar o navegador diretamente — clicando, digitando e muito mais; no Mac, também é possível importar cookies do Chrome local para reutilizar suas sessões de login existentes (desativado por padrão; pode ser ativado nas Configurações)
- Localização em 16 idiomas: o cliente agora suporta 16 idiomas, antes disponível apenas em chinês e inglês

**Alterações**

- O Kimi WebBridge agora é um plugin: o controle do navegador real foi movido para um plugin, que fica desativado por padrão e pode ser ativado nas Configurações
- A página de lista de painéis foi removida; os painéis agora são alternados pela barra de guias superior
- O painel agora é um tipo da área de visualização: os painéis podem ser abertos na área de visualização da conversa, com suporte a vários painéis abertos em paralelo

**Correções**

- Atualização da renderização de mensagens em streaming: respostas longas agora são exibidas com mais fluidez
- Correção de alguns bugs e melhoria de algumas interações e da estabilidade

## 3.1.10 (2026-08-16)

**Correções**

- Corrigido um problema em que o aplicativo travava durante a atualização para alguns usuários do Windows

## 3.1.9 (2026-08-15)

**Novidades**

- Lançamento do marketplace de plugins pessoais: o marketplace de plugins agora conta com uma seção "Plugins pessoais", onde é possível explorar e instalar plugins de desenvolvedores individuais

**Correções**

- Corrigido um problema em que o conteúdo Markdown em streaming ocasionalmente não era atualizado
- Correção de alguns bugs e melhoria de algumas interações e da estabilidade

## 3.1.8 (2026-08-11)

**Novidades**

- Navegação no histórico de mensagens: uma nova barra de navegação de mensagens no lado direito de conversas longas permite voltar rapidamente a mensagens anteriores
- Ramificação de conversas: inicie uma nova ramificação a partir de qualquer turno para continuar explorando, mantendo o histórico da conversa original
- Editar e retroceder: edite sua última mensagem e gere a resposta novamente
- Pastas de projetos: mova conversas para dentro ou fora de projetos e fixe projetos na área de fixados da barra lateral
- Edição transparente de arquivos: depois que o Agent modifica um arquivo, um cartão de resumo de diff é gerado — revise as alterações linha por linha e reverta com um clique; os arquivos do workspace são atualizados automaticamente conforme mudam no disco
- Descoberta e criação de skills: descubra e crie skills personalizadas no Work, com suporte à busca de skills
- Os componentes do painel fixados na área de trabalho agora têm a opção de ficar sempre no topo

**Alterações**

- As novas janelas independentes de conversa agora suportam o Chat
- Mensagens do usuário muito longas na caixa de entrada agora são recolhidas

**Correções**

- Corrigida a pré-visualização de links de arquivos PDF no Windows; as Configurações do Work não piscam mais em branco no modo escuro; colar da área de transferência do Word agora restaura texto em vez de um anexo de imagem
- Correção de alguns bugs e melhoria de algumas interações e da estabilidade

## 3.1.7 (2026-08-05)

**Novidades**

- Suporte a feedback por mensagem: é possível curtir ou não curtir mensagens específicas nas respostas do assistente

**Alterações**

- Os componentes de painel fixados na área de trabalho não ficam mais obrigatoriamente sempre no topo

**Correções**

- Correção de alguns bugs e melhoria de algumas interações

## 3.1.6 (2026-07-29)

**Novidades**

- O editor de slides de PPT está disponível: abra e edite os slides diretamente no workspace, e as alterações são aplicadas na hora
- Suporte a anotações em capturas de tela de arquivos na área de visualização e no navegador; ao concluir, as anotações podem ser enviadas diretamente ao Agent para revisão
- Suporte à migração do disco de armazenamento no Windows: os dados do Work podem ser migrados para outro disco
- A instalação no Windows agora permite escolher o local de instalação

**Alterações**

- Melhoria de alguns problemas de token efficiency

**Correções**

- Correção de alguns bugs e melhoria de algumas interações
