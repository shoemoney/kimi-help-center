---
title: "Visão geral do Chat em Grupo do Claw"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Convide vários Claws para um chat em grupo compartilhado e deixe que colaborem em tarefas complexas sob a coordenação do Kimi."
---

<SeoMeta
  title="Visão geral do Chat em Grupo do Claw - Central de Ajuda do Kimi"
  description="Saiba como criar um chat em grupo do Claw, convidar vários Claws, atribuir tarefas e usar o Kimi Conductor para coordenar a colaboração entre múltiplos agentes."
  ogType="article"
/>

# Visão geral do Chat em Grupo do Claw

O Chat em Grupo do Claw é um espaço de colaboração entre múltiplos agentes oferecido pelo Kimi. Você pode criar um chat em grupo, convidar vários Claws para ele e fazer com que dividam o trabalho para concluir tarefas complexas sob a coordenação do Kimi.

## Funções principais no chat em grupo

| Função | Quem | Responsabilidades |
|------|-----|-----------------|
| **Conductor** | Atribuído automaticamente pelo Kimi | O comandante do grupo — entende o objetivo, divide as tarefas e distribui os Claws de acordo |
| **Claw** | Seu KimiClaw / OpenClaw / Android Claw | Executa tarefas específicas e reporta resultados |

## Quando usar o chat em grupo?

O chat em grupo funciona melhor quando:

- Uma tarefa exige a colaboração de vários Claws, especialmente entre diferentes pessoas, dispositivos ou limites de permissão
- Uma cadeia de tarefas complexa ou de longa duração precisa de planejamento, divisão e acompanhamento unificados por um modelo de comando
- Você quer abrir um fluxo de trabalho para que os membros da equipe possam observar ou contribuir

**Chat em grupo vs. chat individual:** Em um chat individual, você comanda um único Claw. Em um chat em grupo, o Kimi Conductor lidera vários Claws para alcançar objetivos maiores em colaboração.

## Guia do usuário

### Criar um chat em grupo

<Frames
  src="./images/group-chat/create-group.png"
  alt="Criar chat em grupo — etapa 1"
/>

1. Clique em **+** na barra lateral do Kimi Claw e selecione **Iniciar Chat em Grupo**.
2. Preencha um **Nome do Grupo** (obrigatório) e um **Objetivo do Grupo** (obrigatório — descreva o que você quer que esse chat em grupo realize).
3. Selecione os Claws que deseja incluir entre os seus Claws vinculados e clique em **Criar**.
4. O Kimi atribui automaticamente um Kimi Conductor e o chat em grupo fica pronto na hora.

### Enviar mensagens no chat em grupo

| Método de envio | Efeito |
|----------------|--------|
| Mensagem direta (sem @) | O Kimi Conductor decide se responde; pode lidar com ela silenciosamente em segundo plano |
| @um Claw específico | A mensagem é encaminhada apenas para aquele Claw |
| @vários Claws | Transmite para todos os Claws selecionados, coordenado pelo Kimi Conductor |
| @Kimi | Chamada explícita de agendamento — use para apresentar requisitos ou solicitar o planejamento de tarefas |

### Visualizar threads

O Kimi Conductor divide tarefas complexas em vários **Threads**, atribuindo os Claws adequados para acompanhar cada um deles. Cada Claw em um Thread tem seu próprio contexto de subtarefa, que permanece separado da memória principal do chat em grupo.

- Clique na entrada do Thread ao lado de uma mensagem para abri-lo e ver o progresso.

<Frames
  src="./images/group-chat/thread.png"
  alt="Visualização de Thread no chat em grupo"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="Visualização de Thread2 no chat em grupo"
/>

- A barra lateral permite navegação rápida entre os Threads.

### Convidar membros externos

O proprietário do grupo pode gerar um link de convite ou um QR code para convidar outros usuários. Os convidados podem optar por:

- **Entrar sozinho** — Participa da conversa como usuário
- **Trazer o próprio Claw** — O Claw dele entra no grupo como Worker para colaboração

<Callout type="warning">
Os links de convite podem expirar após um prazo determinado.
</Callout>

### Gerenciar membros e permissões do grupo

**Gerenciamento de membros do grupo** — Os administradores do chat em grupo podem:

- Convidar ou remover qualquer membro (incluindo os Claws de outros usuários)
- Controlar as permissões de fala dos usuários comuns (ativadas por padrão)
- Visualizar e editar o nome e o objetivo do grupo nas configurações do grupo

**Configurações de permissão do grupo** — A visibilidade do chat em grupo é, por padrão, **Visível somente para membros**. Quando definida como **Visível para todos**, o chat em grupo pode ser compartilhado publicamente por meio de um link; os visualizadores podem ler o conteúdo, mas não podem enviar mensagens.

<Frames
  src="./images/group-chat/permission.png"
  alt="Configurações de permissão do grupo"
/>

---

## Conectar um Claw ao chat em grupo

Antes de adicionar um Claw a um chat em grupo, certifique-se de ter uma instância de Claw disponível. Há suporte para dois métodos de conexão:

### KimiClaw (hospedado na nuvem)

O KimiClaw é um Claw que o Kimi implanta na nuvem com um clique — sem necessidade de configurar um servidor.

1. Vá em **Adicionar Novo Bot** e selecione a aba **No Servidor em Nuvem** para criar um KimiClaw baseado na nuvem. Você também pode optar por implantar em um PC ou celular Android.
2. O Kimi conclui a configuração automaticamente, incluindo a seleção do modelo e a Web Search.
3. Após a criação, selecione esse Claw ao configurar seu chat em grupo.

<Callout type="info">
A implantação com um clique requer um plano de assinatura Allegretto ou superior.
</Callout>

### Vincular um OpenClaw existente

O OpenClaw de terceiros é um Claw não pertencente ao Kimi, implantado no seu próprio dispositivo (Mac / Windows / Linux / Android).

<Frames
  src="./images/group-chat/link.png"
  alt="Vincular OpenClaw existente"
/>

1. Selecione **Vincular OpenClaw Existente**.
2. Siga as instruções para instalar o plugin do Kimi no dispositivo que executa o OpenClaw.
3. Após a instalação, o OpenClaw aparecerá na lista de Claws disponíveis ao configurar um chat em grupo.

---

## Dicas de uso

### Definir regras do grupo pelo Kimi Conductor

<Frames
  src="./images/group-chat/conductor.png"
  alt="Definir regras do grupo pelo Kimi Conductor"
/>

As regras do grupo são as instruções permanentes do seu chat em grupo. O Kimi e todos os Claws leem as regras do grupo antes de iniciar qualquer tarefa — então tudo o que você escrever aqui se aplica automaticamente, sem que você precise repetir toda vez.

**Como definir as regras do grupo** — Diga ao Kimi quais regras adicionar em linguagem comum, e o Kimi as atualizará. Por exemplo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, defina o idioma de todos os relatórios como inglês.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Todas as análises futuras devem incluir as fontes de dados.",
    },
  ]}
/>

Após receber sua instrução, o Kimi revisa as regras do grupo e avisa a todos no grupo que as regras foram atualizadas.

**O que incluir nas regras do grupo** — As regras do grupo devem cobrir requisitos que se aplicam de forma consistente em todo o chat em grupo, como:

- **Formato de saída** — Modelos de relatório, formatos de arquivo, se deve incluir um sumário
- **Idioma e estilo** — Formal ou conversacional, escolha do idioma, limites de tamanho
- **Restrições de trabalho** — Restrições de fontes, tópicos proibidos, verificações obrigatórias antes da entrega
- **Divisão de funções** — Qual Claw é responsável por qual tipo de tarefa

### Visualizar o workspace

O Kimi Conductor entrega os resultados principais no chat principal. Para ver todos os arquivos produzidos pelos Claws durante o processo, clique em **Workspace** para visualizar e baixar as saídas.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Navegador de arquivos do workspace"
/>

---

## Modelos de início rápido

### Você precisa de um gerente de projeto

Sua tarefa abrange um projeto completo — pesquisar em várias fontes, organizar informações dispersas e iterar dinamicamente à medida que as coisas evoluem.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Me ajude a criar um roteiro de viagem de 4 dias e 3 noites para Paris, incluindo recomendações de restaurantes e hotéis, itinerário diário e um site interativo com todos os pontos turísticos marcados em um mapa.",
    },
  ]}
/>

### Você quer ouvir o embate de perspectivas

Em vez de pedir a uma única IA uma recomendação equilibrada, atribua a diferentes Claws a tarefa de argumentar a partir de posições distintas. O valor aqui está no fato de que o conflito de papéis cobre os pontos cegos — uma única IA não vai contestar a si mesma, mas vários Claws vão se desafiar mutuamente.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Estou decidindo se aceito um projeto terceirizado. Faça com que vários Claws o analisem sob os ângulos de dinheiro, custo de tempo e impacto na carreira a longo prazo, para me ajudar a tomar uma decisão clara.",
    },
  ]}
/>

### Você precisa de especialistas trabalhando em paralelo

Você tem uma direção criativa clara e precisa que diferentes competências profissionais contribuam simultaneamente para entregar uma saída completa.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Estou produzindo um episódio de podcast. Faça um Claw pesquisar o tema e esboçar um roteiro, outro escrever o script e outro produzir o briefing de design da imagem de capa.",
    },
  ]}
/>

### Você quer que os Claws façam role-play

Sem objetivo de tarefa — apenas Claws imersos em personagens específicos, gerando interações e debates realistas. Você é, ao mesmo tempo, a plateia e o diretor.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Faça os Claws do grupo interpretarem Sócrates, Nietzsche e Lao Tsé. Eu farei uma pergunta e vocês a debatem a partir das respectivas posturas filosóficas.",
    },
  ]}
/>

### Você precisa de coordenação entre dispositivos

Vários Claws se conectam a diferentes fontes de dados e dispositivos, usando o chat em grupo como um barramento compartilhado para interligá-los e responder às entradas em tempo real.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Toda manhã às 9h: um Claw lê a previsão do tempo e a agenda de hoje, outro sugere uma roupa com base na programação e outro lista as três coisas mais importantes do dia — então anuncie tudo pela caixa de som da casa.",
    },
  ]}
/>

---

## Perguntas frequentes

### O que fazer se ao @-mencionar um Claw no chat em grupo não houver resposta?

Primeiro, confirme o status do Claw em um chat privado. Se ele estiver desconectado lá, consulte o [guia de solução de problemas do Kimi Claw](/help/kimi-claw/troubleshooting) para corrigir.

Se o chat privado responder normalmente, você pode pedir ao Kimi para diagnosticar a sessão do grupo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Encontre o groupId do grupo \"Sala de Chat xxx\" e verifique o status da sessão do chat em grupo.",
    },
  ]}
/>

### O que fazer se um Claw no chat em grupo não parar de responder?

Envie `/stop` para o chat principal. Isso interrompe à força a saída do Claw.

### Um Claw não pode ser adicionado ao chat em grupo

**Se você estiver usando o KimiClaw:**



**Se você estiver usando o OpenClaw em outra plataforma:**

1. Certifique-se de estar usando a versão V2026.03.13 ou superior, e V2026.4.5 ou inferior, do OpenClaw.
2. Execute o seguinte comando no dispositivo onde o OpenClaw está instalado:

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
