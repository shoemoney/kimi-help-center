---
title: "Perguntas frequentes sobre o Kimi Code"
slug: "faq"
order: 4
extract_headings: false
preview: true
preview_content: "Perguntas frequentes sobre o Kimi Code."
---

<SeoMeta
  title="Perguntas frequentes sobre o Kimi Code - Central de Ajuda Kimi"
  description="Perguntas frequentes sobre instalação, autenticação, migração, interação e muito mais do Kimi Code CLI."
/>

# Perguntas frequentes

## Migrando da versão antiga

<Callout type="info">
O Kimi Code CLI passou por uma grande atualização de versão — saiu do Python/uv para o Node.js, trazendo uma instalação mais simples, inicialização mais rápida e uma interface de terminal redesenhada. A versão antiga será descontinuada gradualmente, então recomendamos atualizar o quanto antes.
</Callout>

Se você está migrando da versão antiga, siga os passos abaixo — um único comando migra suas configurações, servidores MCP e histórico de sessões para a nova versão.

### Novidades

- **Adeus Python / uv**: Reconstruído sobre Node.js — sem necessidade de ambiente Python, instalação mais simples
- **Binário nativo, pronto para usar**: Inicialização mais rápida e menor consumo de recursos
- **Interface de terminal redesenhada**: Experiência mais fluida e responsiva
- **Migração completa de dados**: Configurações, servidores MCP e histórico de sessões são transferidos sem complicações

### Como migrar

Há duas formas de migrar.

Na **primeira vez que você executa o `kimi`** após instalar o kimi-code, ele verifica automaticamente se existem dados do kimi-cli em `~/.kimi/`. Se encontrar algum, aparece um aviso de migração, e você pode optar por migrar agora, fazer isso depois ou não ser mais perguntado.

Você também pode **executá-lo manualmente a qualquer momento**:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

Você pode escolher se quer migrar também as sessões de chat. Se ainda não precisar do histórico, escolha **Config only** (apenas configuração); caso contrário, escolha **Config + N sessions** (configuração + N sessões) para trazer tudo de uma só vez. Um resumo é exibido no final.

### O que acontece durante a migração

**O que é migrado**: configuração (`config.toml`), configuração dos servidores MCP, histórico de entradas e as sessões de chat que você escolher migrar.

**O que não é migrado**: as credenciais de login OAuth e as autorizações dos serviços MCP não são copiadas, então você precisará executar o `/login` novamente e reautorizar os servidores MCP após a migração. Os plugins do kimi-cli também ficam de fora.

<Callout type="tip">
A migração **nunca modifica nem exclui** nenhum dos dados antigos em `~/.kimi/`. O kimi-cli continua funcionando normalmente, e os dois não interferem um no outro. A migração também pode ser executada várias vezes — sessões já migradas não são importadas novamente.
</Callout>

Após a migração, as sessões importadas do kimi-cli são marcadas com `[imported]` no seletor de sessões, para você distingui-las das novas.

## Instalação e autenticação

### Nenhum modelo disponível ao executar `/login`

Se você vir "No models available for the selected platform" (Nenhum modelo disponível para a plataforma selecionada) ao executar o `/login`, pode ser por estes motivos:

- **Chave de API inválida ou expirada**: Verifique se a chave de API que você inseriu está correta e ainda é válida.
- **Problema de conexão de rede**: Confirme se você consegue acessar o endereço do serviço de API (como `api.kimi.com` ou `api.moonshot.cn`).

**Atenção à distinção entre plataformas**

Os benefícios da assinatura do Kimi Code e a [Kimi Open Platform](https://platform.kimi.com) têm Base URLs diferentes. Certifique-se de que a Base URL corresponda à API Key ao configurar.

| Plataforma | Base URL | Cobrança | Criação de chave |
|------|---------|---------|-------------|
| **Kimi Code** | Compatível com Anthropic: `https://api.kimi.com/coding/` | Assinatura Kimi (inclui créditos) | [Console do Kimi Code](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Pagamento conforme o uso | [Kimi Open Platform](https://platform.kimi.com) |

### A chave de API é inválida

Possíveis motivos para uma chave de API inválida:

- **Chave inserida incorretamente**: Verifique se há espaços extras ou caracteres faltando.
- **Chave expirada ou revogada**: Confirme o status da chave no console da plataforma.

### Assinatura expirada ou créditos esgotados

Se você usa a plataforma Kimi Code, pode verificar seus créditos atuais e o status da assinatura pelo comando `/usage`. Se seus créditos estiverem esgotados ou sua assinatura tiver expirado, você precisa renovar ou fazer upgrade em [Kimi Code](https://kimi.com/code).

## Assinatura

### Como solicito uma nota fiscal ou faço upgrade da minha assinatura?

Acesse a [página de assinatura do Kimi](https://www.kimi.com/membership/pricing#pricing-faq) e siga as instruções para enviar uma solicitação de nota fiscal ou fazer upgrade do seu plano.

## Problemas de interação

### Falha ao colar imagem

Ao colar uma imagem com `Ctrl-V`, se você vir "Current model does not support image input" (O modelo atual não suporta entrada de imagem), significa que o modelo em uso não suporta entrada de imagem.

Soluções:

- **Mude para um modelo que suporte imagens**: Use um modelo com a capacidade `image_in`.
- **Verifique o conteúdo da área de transferência**: Certifique-se de que ela realmente contém dados de imagem, e não o caminho de um arquivo de imagem.

## Atualizações e upgrades

### A primeira inicialização no macOS é lenta

O Gatekeeper do macOS realiza uma verificação de segurança na primeira vez que um novo programa é executado, deixando a inicialização mais lenta. Soluções:

- **Aguarde a verificação concluir**: Tenha paciência na primeira execução; as próximas voltarão à velocidade normal.
- **Adicione às Ferramentas de Desenvolvedor**: Adicione seu app de terminal em **Ajustes do Sistema → Privacidade e Segurança → Ferramentas de Desenvolvedor**.

### Como atualizar o Kimi Code CLI

Execute `kimi upgrade` para verificar a versão mais recente e ver as opções de atualização. Escolha `Install update now` (Instalar atualização agora) para atualizar. Você também pode atualizar diretamente pelo gerenciador de pacotes:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## Perguntas frequentes sobre a extensão do VS Code

Abaixo estão as perguntas frequentes sobre a extensão do Kimi Code para VS Code.

### O VS Code diz que nenhum workspace está aberto

Abra uma pasta no VS Code. A extensão do Kimi Code para VS Code precisa de um workspace para funcionar corretamente.

### O VS Code diz que não encontra o CLI

Instale o Kimi Code CLI manualmente e configure `kimi.executablePath` nas configurações do VS Code, ou certifique-se de que o CLI integrado está presente.

### Falha no login pelo VS Code

Tente pular o login e usar o modo de chave de API, verifique sua conexão de rede ou tente novamente mais tarde pelo menu de ações da extensão do Kimi Code.

### O VS Code envia mensagens sem resposta

Confirme se o Kimi Code CLI está disponível, se o modelo está configurado e se há uma pasta de workspace aberta no VS Code. Verifique os logs de erro em "Kimi Code: Show Logs".

### A conexão do VS Code expira

Se não houver resposta em 30 segundos, a conexão expira. Verifique sua rede e tente novamente.

### Erro no VS Code antes de enviar uma mensagem

Alguns erros impedem o envio de mensagens no VS Code, como o Kimi Code CLI não encontrado, versão muito antiga, não estar logado ou sessão ocupada. O erro aparecerá como uma notificação, e o que você digitou será preservado para tentar novamente.

## Feedback e contato

### A documentação não resolveu meu problema

Se nada acima resolveu seu problema, fique à vontade para nos contatar por e-mail: [code@moonshot.ai](mailto:code@moonshot.ai). No e-mail, descreva o problema que você encontrou, os passos que seguiu e qualquer informação de log relevante, e responderemos o mais rápido possível.

Se tiver qualquer problema ou sugestão, você também pode enviar feedback no [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).
