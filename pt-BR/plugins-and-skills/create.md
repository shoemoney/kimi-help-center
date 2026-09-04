---
title: "Como criar um plugin pessoal"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "Use a skill integrada Plugin Builder do Kimi Work para transformar uma ideia de uma frase, um repositório externo de plugins ou qualquer página da web em um plugin seu."
---

<SeoMeta
  title="Como criar um plugin pessoal - Central de Ajuda Kimi"
  description="Crie um plugin pessoal no Kimi Work com a skill integrada Plugin Builder: crie a partir de uma ideia de uma frase, importe um repositório externo de plugins ou transforme qualquer página da web em um plugin. Depois de registrado no seu marketplace pessoal de plugins, instale-o e use-o imediatamente nas conversas."
/>

# Como criar um plugin pessoal

No Kimi Work, você pode usar a skill integrada **Plugin Builder** para transformar uma ideia de uma frase, um repositório externo de plugins ou qualquer página da web em um plugin seu. Seja qual for o método escolhido, o plugin chega até você pelo mesmo caminho: **criar / converter → registrar no seu marketplace pessoal de plugins (a aba "Pessoal") → clicar em + para instalar → usar em uma conversa**. Depois de instalado, ele fica disponível imediatamente na conversa atual — sem precisar reiniciar.

Antes de começar, verifique se você tem instalado o app de desktop do [Kimi Work](https://www.kimi.ai/products/kimi-work) mais recente. O Plugin Builder é uma skill integrada e não precisa de instalação extra: digite "/" em uma conversa para invocá-lo ou clique em "Plugin personalizado" no marketplace de plugins para começar a criar na conversa principal.

## Crie um plugin novo com uma frase

Ideal para o caso "tenho uma ideia, mas nenhum código existente". Você só precisa descrever a capacidade desejada; o Plugin Builder cuida automaticamente da estrutura inicial, do preenchimento dos campos, da validação local e do registro — você não escreve nenhum arquivo manualmente.

1. **Descreva o que você precisa.** Invoque o Plugin Builder em uma conversa e explique em uma frase o que o plugin deve fazer — por exemplo, "crie para mim um plugin que consulte informações de registro de empresas". Os campos que podem ser inferidos, como nome, descrição e categoria, são preenchidos automaticamente; apenas as informações que não podem ser inferidas, como a URL de um servidor MCP ou um ícone, serão confirmadas com você.
2. **Aguarde a conclusão da criação.** O Plugin Builder gera os arquivos do plugin localmente, passa automaticamente pela validação de estrutura e especificação e, em seguida, registra o plugin no seu marketplace pessoal de plugins.
3. **Instale e use.** Abra **Plugins → Pessoal**, encontre o plugin que você acabou de criar e clique em + para instalar. Depois de instalado, ele fica imediatamente disponível na conversa atual e pode ser invocado a qualquer momento com "/".

**Prompt de um parágrafo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nCrie para mim um plugin de busca de literatura que cubra:\n1. Busca de literatura: encontre artigos por tema / autor / periódico, retornando referências bibliográficas, resumos e links para o texto completo\n2. Exportação de resultados: exporte os resultados da busca em CSV para facilitar a importação em gerenciadores de referências\n3. Auxílio à revisão: redija uma revisão de literatura com base nos resultados da busca",
    },
  ]}
/>

## Importe plugins de um marketplace ou repositório

Envie um link de repositório de plugins ao Plugin Builder, e ele o reconhecerá automaticamente, converterá o formato e o instalará na sua aba "Pessoal". Os plugins importados não interferem no marketplace oficial e podem ser desinstalados a qualquer momento.

1. **Formatos de plugin compatíveis:** o Plugin Builder reconhece manifestos de plugin das seguintes fontes e os converte todos para o formato nativo `kimi.plugin.json` do Kimi:

| Formato | Observações |
| --- | --- |
| `kimi.plugin.json` | Formato nativo do Kimi: os campos obrigatórios são corrigidos |
| Manifestos de plugin de outras plataformas de agentes | Como arquivos `plugin.json` em diretórios como `.codex-plugin/plugin.json` ou `.claude-plugin/plugin.json`, além dos arquivos de índice de marketplace distribuídos por essas plataformas |
| `server.json` | O formato do registro oficial do MCP: convertido em um plugin que contém apenas um serviço MCP |
| `plugin.json` genérico | Um manifesto genérico localizado no diretório raiz do plugin |

2. **Como importar:** envie o link do repositório ao Plugin Builder. Ele reconhece automaticamente os seguintes formatos de repositório:

- **Repositório de plugin único**: todo o repositório é convertido em um plugin;
- **Repositório com vários plugins (monorepo)**: cada subdiretório é convertido em seu próprio plugin;
- **Repositório de marketplace / índice de plugins** (um repositório com um índice plugins.json ou marketplace.json): cada entrada do índice é expandida e convertida em lote;
- **Repositório somente de skills**: um repositório sem manifesto de plugin, apenas com arquivos de skill, é empacotado como um plugin do tipo skill.

3. **Instale pela aba Pessoal:** quando o processamento terminar, o Plugin Builder informa quais plugins estão utilizáveis. Vá em **Plugins → Pessoal** e clique em "Instalar" no cartão correspondente para começar a usá-lo nas conversas.

**Prompts de um parágrafo:**

Importar um único repositório:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nImporte o plugin do repositório https://github.com/owner/example como um plugin pessoal. Após a conversão, verifique primeiro se a estrutura e as dependências estão utilizáveis; depois de confirmado, registre-o no meu marketplace pessoal de plugins. Se a conversão falhar, me diga o motivo.",
    },
  ]}
/>

Importar em lote um marketplace de plugins:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConverta em lote a coleção de plugins em https://github.com/hashgraph-online/awesome-ai-plugins em plugins pessoais. Converta apenas os 5 primeiros para eu revisar; depois da minha confirmação, converta todos os demais, registre-os um a um no meu marketplace pessoal de plugins e, por fim, me envie um relatório completo agrupado por “utilizáveis / dependências indisponíveis / com falha”.",
    },
  ]}
/>

Converter apenas um subdiretório específico:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConverta apenas o plugin do diretório https://github.com/owner/repo/tree/main/plugins/example. Assim que a conversão e as verificações forem aprovadas, registre-o no meu marketplace pessoal de plugins.",
    },
  ]}
/>

**Como gerenciar os plugins importados:**

- **Atualizar um plugin**: se o repositório de origem receber atualizações, ou se você quiser mudar o nome ou a descrição, basta avisar o Plugin Builder — ele fará a reconversão ou a modificação e registrará novamente.
- **Desinstalar / remover**: desinstale na aba "Pessoal" para desativar um plugin; a entrada permanece na aba após a desinstalação — exclua a entrada se quiser removê-la por completo.
- **Diretório de origem**: o resultado convertido fica no diretório plugins/ do seu workspace local. Ele contém os "arquivos de origem" do plugin, e o Plugin Builder baseia as atualizações futuras nele — não o exclua manualmente.

## Transforme uma página da web em um plugin

Ideal para o caso "um site que uso com frequência não tem API pública, mas quero que o Kimi busque dados e opere o site para mim". Envie a URL ao Plugin Builder e descreva o que você precisa — por exemplo, "transforme o site XX em um plugin; quero pesquisar XX". Há duas opções de navegador para analisar o site e executar o plugin:

| Método | Ideal para | O que você precisa |
| --- | --- | --- |
| **Navegador integrado (padrão)** | A maioria dos sites; usa o navegador integrado do Kimi Work para analisar o site e executar o plugin | Nada para instalar; quando o login for exigido, faça login uma vez no navegador integrado |
| **WebBridge (wb)** | Reutilizar contas em que você já está conectado no Chrome | Instale o WebBridge primeiro e use-o para controlar o seu Chrome |

1. **Analise o site.** O Plugin Builder abre a URL no navegador escolhido. Se a página exigir login, ele pedirá que você faça login uma vez no navegador — nunca pede sua senha, cookies ou quaisquer credenciais.
2. **Engenharia reversa das APIs e geração do plugin.** Ele opera de fato os recursos principais da página, captura as requisições de rede, descobre as APIs de dados internas do site e, em seguida, gera um plugin do tipo skill com scripts de consulta integrados.
3. **Valide, registre e instale.** Assim como nos métodos anteriores: depois que o plugin passa na validação, ele é registrado na aba "Pessoal"; clique em + para instalar e começar a usar.

A partir daí, basta dizer "pesquise XX para mim", e o Kimi usa o plugin para buscar os dados diretamente no navegador e organizar os resultados. Se as APIs do site mudarem e o plugin parar de funcionar, peça ao Plugin Builder para reanalisar o site e atualizar o plugin.

**Prompt de um parágrafo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nTransforme o Hacker News (https://news.ycombinator.com) em um plugin que cubra:\n1. Buscar posts: insira uma palavra-chave e retorne títulos, links, pontuações e números de comentários dos posts\n2. Página inicial: busque os 30 principais posts atuais da página inicial\n3. Ler comentários: abra um post e resuma os pontos principais dos comentários mais votados",
    },
  ]}
/>

<Callout type="warning">
O método do navegador integrado depende da capacidade de navegador integrado do Kimi Work — se for solicitado que você atualize, atualize o app de desktop para a versão mais recente. O método WebBridge exige que o WebBridge esteja instalado primeiro no seu computador e no Chrome.
</Callout>
