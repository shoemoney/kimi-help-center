---
title: "Criar e Enviar Plugins"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "Transforme seu produto ou serviço em um plugin do Kimi, teste-o e solicite a inclusão no mercado oficial."
---

<SeoMeta
  title="Criar e Enviar Plugins - Central de Ajuda do Kimi"
  description="Aprenda a criar e testar um plugin no Kimi Work e solicitar a inclusão no mercado oficial de plugins do Kimi."
/>

# Criar e Enviar Plugins

Se deseja conectar seu produto ou serviço ao Kimi para que os usuários possam acessar seus recursos durante conversas, siga este guia para criar, testar e enviar um plugin para o mercado oficial de plugins do Kimi.

## O que é um plugin do Kimi?

Um plugin do Kimi conecta seu produto ao Kimi. Ele ajuda o Kimi a entender quando seu produto é útil e fornece os fluxos de trabalho ou ferramentas necessários para auxiliar os usuários. Um plugin pode conter:

- **Apenas Skills**: fluxos de trabalho reutilizáveis adaptados ao seu produto ou caso de uso.
- **Apenas MCP**: ferramentas e serviços expostos ao Kimi por meio de um servidor MCP.
- **Skills e MCP**: ferramentas do produto combinadas com fluxos de trabalho que ajudam o Kimi a usá-las efetivamente.

## Antes de começar

Primeiro, [baixe e instale o Kimi Work](https://www.kimi.com/products/kimi-work). Prepare o seguinte:

- Um nome, descrição e logotipo para o plugin
- As tarefas principais que os usuários devem poder realizar em linguagem natural
- Uma URL de servidor MCP, se aplicável

<Callout type="warning">
Se o logotipo do plugin incluir um produto, marca ou registro de terceiros, entre em contato com o detentor dos direitos relevantes e obtenha a autorização por escrito necessária antes de enviar.
</Callout>

## Passo 1: Criar e testar o plugin

1. Abra o Kimi Work, digite "/" em uma conversa e selecione **Plugin Builder**.
2. Descreva o plugin e forneça as informações que preparou. Se já tiver um plugin do Codex, Claude ou outra plataforma, forneça seus arquivos ou URL do projeto e siga as instruções para convertê-lo.

3. Vá para **Plugins** → **Pessoal**, encontre o plugin e instale-o.

4. Teste os recursos principais em uma nova conversa, incluindo casos normais e extremos. Mantenha pelo menos três prompts de teste representativos.
5. Siga as instruções do Plugin Builder para obter o arquivo ZIP completo do plugin.

Para um plugin baseado em MCP, teste também seu fluxo de autenticação:

- **Sem autenticação**: os usuários podem usar o plugin imediatamente após a instalação.
- **OAuth**: a página de autorização de terceiros deve abrir durante a primeira instalação.
- **Autenticação CLI**: a instalação não inicia a autorização. Na primeira vez que os usuários invocarem o plugin, eles completam a autorização na conversa. Após a autorização bem-sucedida, geralmente não precisarão autorizar novamente em outras conversas.

## Passo 2: Envie sua aplicação

Após criar e testar o plugin, complete o [formulário de envio de plugins do Kimi](https://moonshot.feishu.cn/share/base/form/shrcnZcnxlNJlbw845KoVgjEhkh) e faça upload do arquivo ZIP do plugin.

O formulário solicita:

| Item | Requisito |
| --- | --- |
| Nome, descrição e arquivo ZIP do plugin | Obrigatório |
| Tipo de plugin | Apenas Skills, apenas MCP ou híbrido |
| Autenticação MCP | Obrigatório para plugins apenas MCP e híbridos |
| Regiões pretendidas | China continental, exterior ou ambos |
| Destaques e prompts de teste recomendados | Pelo menos três prompts de teste |
| Interesse em co-marketing e materiais | Materiais são opcionais e só são necessários se desejar discutir co-marketing |
| Status de autorização e conformidade | Divulgue itens que requerem discussão adicional |
| E-mail de contato | Usado para atualizações de revisão e solicitações de informações adicionais |
| Empresa ou equipe, site relacionado e observações | Opcional |

<Callout type="warning">
Não inclua senhas, tokens, chaves de API, chaves privadas ou outros segredos no formulário ou arquivo ZIP do plugin. Se os usuários precisarem de sua própria chave, explique apenas como obtê-la e configurá-la.
</Callout>

## O que acontece depois

A equipe do Kimi revisará a aplicação e o arquivo ZIP do plugin. Se o plugin passar na revisão, ou se precisarmos de mais informações ou alterações, entraremos em contato no e-mail fornecido e compartilharemos os próximos passos.

## Perguntas frequentes

### Posso enviar um plugin sem um servidor MCP?

Sim. Plugins apenas com Skills são suportados. Selecione **Apenas Skills** como o tipo de plugin.

### Posso enviar um plugin do Codex, Claude ou outra plataforma?

Sim. No Passo 1, forneça os arquivos ou URL do projeto do plugin existente ao Plugin Builder e siga as instruções para convertê-lo. Instale e teste o plugin convertido no Kimi Work antes de enviar o arquivo ZIP gerado.

### Quais métodos de autenticação MCP são suportados?

Atualmente, são suportados os três métodos a seguir:

- **Sem autenticação**: Os usuários podem usar o plugin imediatamente após a instalação sem fazer login ou completar qualquer outra verificação de identidade.
- **OAuth**: Os usuários são automaticamente redirecionados para a página de autorização do produto de terceiros quando instalam o plugin pela primeira vez. Eles podem usar o plugin após a autorização.
- **Autenticação CLI**: A instalação não inicia um fluxo de autorização. Na primeira vez que os usuários invocarem o plugin em uma conversa, eles completam a autorização usando as instruções mostradas na conversa. Após a autorização bem-sucedida, geralmente não precisam autorizar novamente em outras conversas.

Teste o fluxo que corresponde ao método de autenticação real do seu plugin. Se um plugin OAuth não redirecionar durante a primeira instalação, ou um plugin com autenticação CLI pedir repetidamente aos usuários que autorizem, verifique a configuração de autenticação do Servidor MCP antes de enviar sua aplicação e descreva o problema em **Observações adicionais**.

### Como é o fluxo de autorização OAuth?

Para um Servidor MCP com OAuth habilitado, o Plugin Builder identifica as informações de autorização relevantes a partir da URL do Servidor MCP. Após a criação do plugin, os usuários são levados à página de autorização do produto de terceiros na primeira vez que o instalam.

### E se eu quiser explorar uma parceria mais ampla com o Kimi?

Primeiro complete o processo de criação, teste e envio do plugin descrito neste guia. Se desejar explorar outras formas de colaboração além da inclusão do plugin, descreva brevemente sua proposta em **Observações adicionais**. A equipe do Kimi pode entrar em contato com base nas circunstâncias.

### Enviar uma aplicação garante a inclusão?

Não. A equipe do Kimi avalia a funcionalidade do plugin, experiência do usuário, segurança, confiabilidade do serviço e status de autorização relevante.
