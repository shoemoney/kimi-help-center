---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: true
preview: true
preview_content: "Crie e publique sites full-stack a partir de descrições em linguagem natural, mockups de design ou templates."
---

<SeoMeta
  title="Visão geral do recurso Kimi Websites - Central de Ajuda Kimi"
  description="Conheça os recursos full-stack de criação de sites do Kimi Websites. Gere sites completos (frontend + backend + banco de dados) em linguagem natural, com publicação em um clique, edição em várias rodadas e exportação de código."
/>

# Visão geral do recurso Kimi Websites

## O que é Kimi Websites

Kimi Websites é o produto do Kimi Agent para criação de sites full-stack, impulsionado pelo Kimi K3, um modelo de IA visual, multimodal e agentic. Seu principal recurso é a programação visual (Vibe Coding): você pode gerar um site full-stack completo a partir de linguagem natural, um mockup de design ou uma gravação de tela, pré-visualizá-lo online e publicá-lo com um clique.

Sites gerados pelo Kimi Websites podem incluir:

- **Frontend**: estrutura de páginas HTML, layouts e estilos CSS, e lógica de interação em JavaScript (efeitos de movimento, animações etc.)
- **Backend**: armazenamento persistente em banco de dados, login de usuário e autenticação
- **Engenharia**: gerenciamento automático de versões, pré-visualização full-stack e publicação pública

### Recursos do produto

| Recurso        | Descrição                                                  |
|----------------|--------------------------------------------------------------|
| Criação de sites por conversa | Descreva o que você precisa em linguagem natural, e a IA gera automaticamente um site full-stack |
| Compreensão de imagem/vídeo | Envie um mockup de design, uma captura de tela ou uma gravação de tela, e a IA interpreta automaticamente o conteúdo e gera as páginas |
| Armazenamento persistente | Cria automaticamente um banco de dados backend, com leitura, gravação e gerenciamento persistentes de dados |
| Gerenciamento de banco de dados | Oferece um painel visual de banco de dados para operações básicas, como visualizar, editar e excluir dados |
| Login de usuário | Compatível com login por conta Kimi, e também pode criar um sistema de login com nome de usuário/senha por meio do banco de dados |
| Gerenciamento de versões | A IA cria automaticamente commits de versão (git commit) e permite voltar a qualquer versão anterior |
| Pré-visualização full-stack | Compatível com pré-visualização completa de frontend e backend; alguns cenários exigem iniciar manualmente o ambiente sandbox |
| Edição em várias rodadas | Permite mudanças iterativas por meio de conversas em várias rodadas e comparação entre versões |
| Edição visual | Faça anotações em elementos na página de pré-visualização circulando ou marcando-os e envie todas as sugestões ao Kimi de uma só vez |
| Publicação e implantação | Depois que você clica manualmente em "Publicar", o site é implantado na internet pública; antes da publicação, ele fica apenas em pré-visualização. Há suporte a implantação full-stack |
| URL personalizada | Personalize o subdomínio do site, como o `abc` em `abc.ok.kimi.link` |
| Compartilhamento e controle de acesso | Obtenha um link público de compartilhamento com um clique ou defina o site como privado/visível apenas para você |
| Seleção de templates | Oferece vários templates predefinidos para você começar a criar rapidamente |
| Exportação de código | Permite baixar o pacote completo do projeto (incluindo frontend e backend) para implantação gerenciada por você |

## Como usar

### Método 1: acesso pela Web
Acesse a página dedicada do Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Página inicial do Kimi Websites"
/>

1. Abra um navegador: use um navegador popular, como Chrome, Safari, Edge ou Firefox.
2. Abra o endereço oficial de acesso: página dedicada do Kimi Websites: [https://www.kimi.com/zh/websites](https://www.kimi.com/zh/websites) (compatível com interfaces em chinês e inglês)
3. Entre na sua conta: faça login com uma conta Kimi (há suporte a cadastro com número de celular ou email)
4. Insira sua tarefa de criação de site. O Kimi Websites oferece três formas principais de criar um site:
   1. **Entrada de texto**: insira a tarefa na caixa de diálogo e descreva em linguagem natural o site que você deseja;
   2. **remix de imagem/site**: envie um mockup de design ou uma captura de tela de um site de que você goste para acionar o recurso correspondente;
   3. **Criação de site por template**: crie rapidamente um site padrão escolhendo um template predefinido e editando o conteúdo;
5. Comece a criar: entre na interface do recurso Websites, escolha um template ou crie diretamente por conversa.

<Frames
  src="./images/overview/screenshot-27.png"
  alt="captura de tela 27"
/>

### Método 2: acesso pelo App móvel
Selecione a ferramenta dedicada de criação de sites no App móvel

<Frames
  src="./images/overview/screenshot-27.png"
  alt="Interface do criador de sites"
/>

Os Apps oficiais estão disponíveis para iOS, Android e HarmonyOS (nome do app: "Kimi"). Acima da caixa de entrada, toque na barra de ferramentas (Taskbar) → alterne para o modo Websites. Ele inclui ferramentas de geração multimodal e recursos de Agent, permitindo fornecer entrada visual e gerar código frontend.

### Método 3: modo Agent geral
No modo Agent geral, insira seus requisitos de criação de site

No site oficial ou em um dispositivo móvel, selecione o modelo K3 e insira instruções de tarefa relacionadas à criação de um site. O Kimi acionará recursos de programação visual e ferramentas de execução de código.

## Etapas

### Criar um site por conversa

Descreva o que você precisa em linguagem natural na caixa de entrada, e o Kimi entenderá e executará a tarefa. Há suporte a três métodos de criação:

| Método             | Descrição                              |
|--------------------|------------------------------------------|
| Descrição por texto   | Insira diretamente os requisitos do site, e a IA gera o site automaticamente |
| Interpretação de mockup de design | Envie um mockup de design, e a IA o reconhece e recria como página Web |
| Criação rápida de sites padrão | Escolha um template predefinido e edite o conteúdo |

### Exemplo prático

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Insira uma tarefa de criação de site\nCrie um site para filhotes de West Highland White Terrier, com paleta principal em preto e branco. Inclua três seções:\n1. Um calendário de retratos com qualidade de estúdio e exibição de imagens geradas por IA;\n2. Uma enciclopédia de cuidados \"Curly-Coat Lab\";\n3. Uma loja de produtos vendendo moletons com avatares de Westie e pôsteres de edição limitada com folha prateada.\nA página de checkout deve incluir um módulo beneficente: doar US$ 1 por item vendido para o resgate de filhotes abandonados.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="Exemplo de site"
/>

### Visão geral do fluxo de criação de sites

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Descrição do requisito → Kimi raciocina sobre a tarefa → aciona a SKILL de criação de webapp →\nentende a stack tecnológica e o processo de build → cria uma lista de tarefas e inicializa o projeto → escreve uma lista de afazeres → executa o terminal → gera imagens → pré-visualiza e ajusta →\natualiza o progresso das tarefas e desenvolve o código principal do site → atualiza CSS e arquivos de configuração, depois cria componentes → faz edições em várias rodadas → implanta online → compartilha e distribui",
    },
  ]}
/>

O Kimi Websites ativa a SKILL de criação de webapp, um agente de geração de código em várias rodadas dedicado à construção de sites. Ele executa autonomamente o seguinte fluxo:

1. Interpretação dos requisitos: analisa automaticamente os módulos funcionais do site, o estilo visual e a lógica de interação
2. Planejamento de tarefas: divide o trabalho em subtarefas, como design, desenvolvimento e preparação de assets
3. Solução técnica: seleciona automaticamente uma arquitetura técnica adequada (como React + Tailwind CSS)
4. Geração de assets: gera assets visuais, como imagens e ícones, conforme necessário
5. Construção do código: escreve a estrutura da página, os estilos e o código de interação
6. Otimização em várias rodadas: ajusta autonomamente com base na pré-visualização até que o site esteja concluído

<Frames
  src="./images/overview/screenshot-26.png"
  alt="captura de tela 26"
/>

### Pré-visualizar e ajustar

- **Pré-visualização em tempo real**: gera uma URL de demonstração HTML que você pode abrir imediatamente no navegador
- **Edições por conversa**: continue a conversa para solicitar alterações, como "mude a barra de navegação para um estilo escuro"

#### Exemplo real

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "As cores não ficaram muito boas. Quero remover o requisito de preto e branco e deixar o site com uma aparência mais normal.\nO Kimi Websites reorganizará a lista de afazeres e continuará criando o site.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Interface do painel de pré-visualização

Depois que o site é gerado, o painel de pré-visualização é aberto à direita, e cartões de versão também aparecem na conversa. As principais entradas de operação são:

**Barra de ferramentas superior do painel de pré-visualização** (da esquerda para a direita):

| Botão | Função |
|--------|----------|
| Pré-visualização / Código | Alterna entre a pré-visualização visual e as visualizações do código-fonte/árvore de arquivos |
| Editar | Entra no modo de edição; clique em uma área que você deseja alterar, adicione notas de anotação e envie-as ao Kimi |
| Compartilhar | Publica o site, copia o link, personaliza a URL ou cancela a publicação |
| Pré-visualização em tela cheia | Exibe o site em tela cheia |
| Alternar modo de pré-visualização | Alterna entre as visualizações desktop e móvel |
| Atualizar | Recarrega a pré-visualização |
| Feedback do usuário | Envie problemas encontrados durante o uso; você pode inserir texto e enviar capturas de tela |
| Fechar | Recolhe o painel de pré-visualização |

**Cartões de versão na conversa**: exibem o nome do site, o número da versão (como V2) e a URL. Clique em **Pré-visualizar** para abrir a versão correspondente; clique em **Restaurar** para voltar para essa versão. O cartão **Todos os arquivos** permite visualizar ou baixar os arquivos completos do projeto. Para ver como usar cada botão em detalhes, consulte as seções correspondentes abaixo.

### Edição visual

<Frames
  src="./images/overview/web-case1.png"
  alt="Interface de edição visual"
/>

- **Otimização em várias rodadas**: ajuste detalhes do site por meio de conversas contínuas
- **Formas de editar**:
  - **Modo de anotação**: clique na parte da página Web que você deseja alterar e adicione comentários em linguagem natural
  - **Modo de seleção**: selecione qualquer elemento da página Web e adicione comentários
  - Use retângulos, setas, pincéis, troca de cores e outras ferramentas de seleção e edição para adicionar sugestões de alteração
- Depois de adicionar anotações em vários pontos, inclua-as na conversa e envie todas as sugestões ao Kimi de uma só vez

### Implantação e publicação de código
| Método de implantação | Descrição                                           |
|-------------------|------------------------------------------------------|
| Publicação em um clique | Clique no botão "Publicar" para implantar o site na internet pública e gerar um link online acessível (antes da publicação, apenas pré-visualização) |
| Baixar e implantar | Baixe o pacote de código e implante-o no seu próprio servidor |
| URL personalizada | Altere a URL aleatória padrão para um nome fácil de lembrar, como personalizar o `abc` em `abc.ok.kimi.link` |

> **Sobre "URL personalizada"**: 3 a 30 caracteres, apenas letras minúsculas, números e hífens. Não pode começar nem terminar com hífen e não pode conter apenas números. Algumas palavras reservadas (como `kimi`, `www`, `login` etc.) não estão disponíveis. Se o nome estiver ocupado ou indisponível, escolha outro.

> **Sobre os limites de "Baixar e implantar"**: **login com conta Kimi** e **banco de dados em nuvem gerenciado pela plataforma** são fornecidos pela plataforma Kimi e não migram com o código exportado. Se você implantar o código no seu próprio servidor, o método de login precisará ser alterado para um esquema de nome de usuário/senha baseado no seu próprio banco de dados, e os dados também deverão ser migrados para o seu próprio banco de dados. Para acesso público apenas, recomendamos usar diretamente **Publicação em um clique**, e o login com conta Kimi e os dados em nuvem continuarão funcionando normalmente. Veja [Por que o site que criei não funciona?](/websites/websites-why-not-working) para mais detalhes.

#### Pré-visualização específica por versão
Quando a geração for concluída, você entrará na página de pré-visualização.
Na interface de pré-visualização, você pode clicar em diferentes versões de implantação e baixar arquivos de diferentes versões.

<Frames
  src="./images/overview/screenshot-26.png"
  alt="Pré-visualização de versão"
/>

#### Publicar, compartilhar e cancelar publicação
Antes da publicação, o site só pode ser pré-visualizado na conversa. Para permitir que outras pessoas o acessem, clique em **Compartilhar** no canto superior direito do painel de pré-visualização para abrir o painel de publicação:

1. **URL personalizada**: você pode modificar o nome na URL padrão, por exemplo, alterando para `yourname.ok.kimi.link`;
2. Clique em **Copiar link** para obter a URL pública ou em **Abrir site** para visualizá-lo em uma nova aba. Após a publicação, o topo do painel mostra **Publicado**, e qualquer pessoa com o link pode acessá-lo;
3. Para tirar o site do ar, selecione **Cancelar publicação** no menu **…** no canto superior direito do painel. O site deixará de ficar publicamente acessível (código e dados são mantidos, e você pode republicá-lo a qualquer momento).

### Edição em várias rodadas

Se você não estiver satisfeito com uma parte específica, clique no botão de edição na janela de pré-visualização para continuar refinando.
Você também pode enviar instruções ao Kimi em linguagem natural e continuar editando com Agent.
Depois de confirmar o resultado, baixe o código HTML/CSS/JS completo e implante-o diretamente, ou continue aprimorando em um editor.

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Para quem é

- Desenvolvedores: projetar protótipos de produto e demonstrações de frontend, reduzindo muito o tempo necessário para criar do zero.
- Empreendedores: criar rapidamente sites oficiais, landing pages e páginas de apresentação de produto quando os recursos são limitados.
- Gerentes de produto: transformar rapidamente um PRD ou mockup de design em um protótipo interativo demonstrável, sem esperar pelo cronograma de desenvolvimento.
- Usuários sem perfil técnico: não é preciso saber programar. Descreva sua ideia ou envie uma imagem de referência e saia do conceito para uma página Web executável.

## Exemplos de prompts
**Você pode usar os cenários e prompts abaixo como referência para gerar conteúdo**

| Cenário         | Prompt de exemplo                                                   |
|------------------|------------------------------------------------------------------|
| Criar uma landing page do zero | Ajude-me a criar uma landing page de marketing para um produto SaaS com estilo inspirado em tecnologia, incluindo uma seção hero, apresentação de recursos, preços e CTA |
| Recriar um site a partir de vídeo | [Envie uma gravação de tela] Recrie o site mostrado no vídeo e preserve as interações originais |
| Recriar a partir de captura de tela | [Envie um mockup de design] Implemente este design como código de página Web executável |
| Portfólio pessoal | Ajude-me a criar um site de portfólio pessoal para um fotógrafo, com estilo minimalista em preto e branco e suporte a layout masonry de imagens |
| Página de visualização de dados | Crie uma página Web de visualização mostrando dados de financiamento de empresas de IA em 2025, incluindo gráficos e filtros |
| Site de marca | Ajude-me a criar um site oficial para uma marca de café, usando uma paleta de cores Morandi, com página inicial, páginas de produtos e páginas de lojas |
| Utilitário/calculadora | Crie uma página Web de calculadora de IMC com interface limpa, alternância de unidades e dicas de nível de saúde |
