---
title: "O que são plugins do Kimi?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Conecte ferramentas externas ao Kimi para que ele use apps e serviços na conclusão de tarefas. Depois de instalar um plugin, o Kimi pode chamar capacidades de terceiros — como dados financeiros, softwares de escritório e ferramentas de design — para ajudar você a trabalhar."
---

<SeoMeta
  title="O que são plugins do Kimi? Como instalar e usar - Central de Ajuda Kimi"
  description="Conheça os plugins do Kimi: conecte serviços externos, como dados financeiros, softwares de escritório e ferramentas de design, ao Kimi e chame-os diretamente durante a conclusão de tarefas. Abrange onde os plugins funcionam, instalação e autorização, invocação, categorias de plugins e uso de créditos."
/>

# O que são plugins do Kimi?

Os plugins conectam ferramentas externas ao Kimi para que ele use apps e serviços na conclusão de tarefas. Depois que você instala um plugin, o Kimi pode chamar diretamente a capacidade de terceiros correspondente ao concluir uma tarefa — por exemplo, consultar dados financeiros, operar softwares de escritório ou usar ferramentas de design. Você pode pedir explicitamente para usar um plugin específico, e o Kimi também chama um automaticamente quando apropriado.

## O que é um plugin do Kimi?

O plugin do Kimi segue a [definição de plugin do Kimi Code](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) e pode incluir um ou mais dos seguintes componentes:

| Componente | Finalidade |
| --- | --- |
| Skills | Fornecem o conhecimento, as etapas e as orientações de uso necessários para concluir tarefas |
| MCP | Conecta softwares, serviços, bancos de dados ou APIs externos |
| Agents | Delegam tarefas complexas a subagentes especializados |
| Hooks | Executam automaticamente ações predefinidas quando eventos específicos ocorrem |
| Commands | Oferecem pontos de entrada claros e reutilizáveis baseados em comandos |
| System Prompt | Adiciona instruções de sistema ao Agent principal enquanto o plugin está ativado |

A experiência web do Kimi atualmente oferece suporte a MCP e Skills em plugins. O Kimi Work e o Kimi Code seguem a definição completa de plugin acima e oferecem suporte a combinações mais completas de componentes de plugin.

**Exemplos:**

- **Plugin do Notion** = MCP do Notion + Skill de orientações de uso
- **Plugin de pesquisa financeira** = vários MCPs financeiros + várias Skills de análise + um Agent personalizado

## Onde você pode usar plugins

Você pode usar plugins ao mudar o modelo para **K3** ou **K3 Swarm**, e nos cenários **Deep Research, Websites e PPT**.

Você também pode usar plugins no **app de desktop do Kimi Work**; para a lista de plugins integrados no desktop, consulte a [Central de plugins do Kimi Work](/kimi-work/plugin-center).

<Callout type="info">
Os plugins ainda não são compatíveis com conversas do Kimi Claw ou do Kimi Plus.
</Callout>

## Como instalar plugins

- **Pontos de entrada**: use o **+** na caixa de entrada ou digite "/"; no celular, use o **+** na caixa de entrada ou "/".
- Pesquise ou navegue no marketplace de plugins, abra os detalhes de um plugin e clique em instalar.
- Alguns plugins exigem **autorização OAuth** (você é levado ao login do terceiro; depois de autorizar, já pode usar); alguns plugins são **pré-instalados** e não precisam de instalação manual.
- **Plugins exclusivos para empresas**: usuários não empresariais podem vê-los, mas o botão "Instalar" fica esmaecido.
- Não é possível instalar ou usar plugins sem fazer login.

## Como usar plugins

- Depois de instalar, digite "/" na caixa de entrada ou clique em **+** → Plugins e selecione o plugin para invocá-lo; você pode **invocar vários plugins de uma vez**.
- Você também pode simplesmente descrever o que precisa (por exemplo, "pesquise esta empresa no Tianyancha"), e o Kimi escolherá o plugin certo automaticamente.
- Quando o Kimi chama as ferramentas de um plugin, ele mostra "Usando o plugin xx" na resposta.

## Categorias e lista de plugins

O marketplace de plugins é organizado nas categorias abaixo. Os plugins que você realmente vê variam conforme a **região (doméstica / internacional)** e a **plataforma**, e alguns plugins aparecem em mais de uma categoria.

- **Finanças**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, base de dados do FMI (Fundo Monetário Internacional), Stripe, Tianyancha
- **Produtividade**: Notion, Baidu Netdisk
- **Desenvolvimento**: GitHub, Supabase, Neon, Cloudflare
- **Criação**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **Geral**: Vivify

## Dados e permissões

- Quando você seleciona ou pede explicitamente para usar um plugin, o Kimi prioriza as ferramentas que esse plugin oferece e gera a resposta com base nos resultados retornados por elas; depois de conectar um plugin, o Kimi acessa o conteúdo relevante dentro do escopo que você autoriza.
- Se um plugin for fornecido por terceiros, as regras de processamento de dados são definidas de forma independente por essa empresa, e os dados estão sujeitos aos termos de serviço e à política de privacidade dela — recomendamos revisá-los antes de autorizar.
- Você pode **desinstalar um plugin ou revogar a autorização a qualquer momento**. Após a desinstalação, a autorização OAuth relacionada é revogada; para usar o plugin novamente, será preciso reinstalá-lo e autorizar de novo.

## Perguntas frequentes

### Os plugins consomem os créditos da minha assinatura?
Alguns consomem. Quando o Kimi chama as ferramentas ou os serviços de um plugin para concluir uma tarefa, os créditos são consumidos com base no uso real; plugins sem custo de chamada não geram cobranças extras.

### Posso usar vários plugins ao mesmo tempo?
Sim. Você pode invocar vários plugins de uma vez com "/" ou **+**.

### Por que não consigo ver um determinado plugin?
Os plugins disponíveis variam conforme a região (doméstica / internacional) e a plataforma; além disso, alguns plugins estão disponíveis apenas para usuários pessoais ou empresariais.

### Posso usar plugins do ChatGPT, do Claude ou de outras plataformas?
Sim. Consulte [Como criar um plugin pessoal](/plugins-and-skills/create): forneça os arquivos do plugin existente ou o link do projeto de outra plataforma ao Plugin Builder e siga as instruções para convertê-lo em um plugin do Kimi.
