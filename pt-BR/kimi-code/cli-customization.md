---
title: "Personalização e referência"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Personalização \u0026 referência - Kimi Help Center"
  description="O Kimi Code CLI oferece amplas opções de personalização, permitindo que você adapte o comportamento e o fluxo de trabalho da IA às suas necessidades."
/>

# Personalização e referência

O Kimi Code CLI oferece amplas opções de personalização, permitindo que você adapte o comportamento e o fluxo de trabalho da IA às suas necessidades.

## Arquivo de configuração

O Kimi Code CLI usa `~/.kimi/config.toml` como seu arquivo de configuração global, com suporte aos formatos TOML e JSON. Você pode configurar:

- **Provedores de API e modelos**: configure diferentes provedores de modelos, endpoints de API e chaves.
- **Modelo padrão**: especifique o modelo a ser usado por padrão.
- **Parâmetros de execução**: ajuste timeout, concurrency, formato de saída e outras configurações de execução.

> Use o comando `/config` para abrir rapidamente o arquivo de configuração para edição.

## Configuração de projeto AGENTS.md

Coloque um arquivo `AGENTS.md` na raiz do seu projeto para fornecer à IA contexto em nível de projeto:

- **Contexto do projeto**: descreva a funcionalidade, a arquitetura e a stack tecnológica do projeto.
- **Etapas de build**: como instalar dependências, fazer o build do projeto e executar testes.
- **Convenções de código**: convenções de nomenclatura, regras de estrutura de diretórios e preferências de estilo de código.
- **Observações especiais**: restrições de segurança, requisitos de desempenho e outras considerações importantes.

Use o comando `/init` para que a IA escaneie automaticamente seu projeto e gere um `AGENTS.md` inicial. Você também pode editar o arquivo manualmente para adicionar informações específicas do projeto. Os arquivos `AGENTS.md` podem ser colocados em qualquer subdiretório — a IA carregará automaticamente as configurações relevantes.

## System prompt personalizado

Você pode personalizar o system prompt da IA de várias maneiras:

- **System prompt global**: escreva em `~/.kimi/AGENTS.md` — aplica-se a todos os projetos.
- **System prompt em nível de projeto**: escreva no `AGENTS.md` da raiz do projeto — aplica-se apenas ao projeto atual.
- **Parâmetro de inicialização**: use o sinalizador `--system-prompt` para especificar na inicialização.

A configuração em nível de projeto substitui a configuração global, e o parâmetro de inicialização tem a maior prioridade.

## Integração com MCP

O Kimi Code CLI oferece suporte ao Model Context Protocol (MCP), permitindo conexões com ferramentas e fontes de dados externas para ampliar as capacidades da IA:

- **Configuração de servidor MCP**: adicione endereços de servidores MCP no arquivo de configuração para que a IA possa invocar ferramentas externas.
- **Suporte a MCP integrado**: algumas ferramentas MCP de uso comum já vêm integradas e não exigem configuração adicional.
- **Servidores MCP personalizados**: você pode desenvolver seus próprios servidores MCP para oferecer capacidades específicas de cada domínio.

A configuração do MCP pode ser colocada em `~/.kimi/config.toml` ou em arquivos de configuração em nível de projeto.

## Variáveis de ambiente

O Kimi Code CLI permite a configuração por meio de variáveis de ambiente — útil para pipelines de CI/CD e scripts:

| Variável de ambiente | Descrição |
| --- | --- |
| `KIMI_API_KEY` | Chave de API |
| `KIMI_BASE_URL` | Endpoint de API personalizado |
| `KIMI_MODEL` | Nome do modelo padrão |
| `KIMI_MAX_TOKENS` | Número máximo de tokens de saída |

As variáveis de ambiente têm prioridade sobre as configurações do arquivo de configuração.

## Mais referências

- **Referência de comandos de barra**: use `/help` para ver todos os comandos disponíveis.
- **Referência de parâmetros da CLI**: execute `kimi --help` para ver todos os parâmetros de inicialização.
- **Documentação oficial**: acesse [Kimi Code Docs](https://www.kimi.com/code/docs/en/) para a documentação completa mais recente.
