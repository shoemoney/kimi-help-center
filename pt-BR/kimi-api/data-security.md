---
title: "Processamento e segurança de dados"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="Processamento e segurança de dados - Central de Ajuda Kimi"
  description="Perguntas frequentes sobre segurança de dados e proteção de privacidade do usuário na API da Kimi."
/>

# Processamento e segurança de dados

<Callout type="info">
Perguntas frequentes sobre segurança de dados e proteção de privacidade do usuário na API da Kimi.
</Callout>

A API da Kimi leva muito a sério a segurança dos dados e a proteção da privacidade do usuário.
## Os dados do usuário são usados para treinar modelos?

<Callout type="warning">
**Não.** Os dados enviados pelo usuário por meio da API (incluindo o conteúdo de entrada e a saída do modelo) **não são usados para treinar ou aprimorar os modelos da Kimi**. Seus dados servem unicamente para atender à solicitação atual da API e não ficam armazenados de forma permanente para fins de treinamento.
</Callout>

## Como a segurança dos dados privados é garantida?
A API da Kimi adota diversas medidas para proteger seus dados privados:
| Medida | Descrição |
| --- | --- |
| **Criptografia em trânsito** | Toda a comunicação com a API usa HTTPS/TLS |
| **Isolamento de dados** | Os dados de usuários diferentes ficam rigorosamente isolados |
| **Não usados para treinamento** | Os dados da API não são usados para treinar modelos |
| **Controle de acesso** | Autenticação por API Key, permitindo apenas o acesso autorizado |
| **Certificações de conformidade** | A plataforma possui as certificações de segurança pertinentes |

<Callout type="tip">
Para requisitos de segurança mais rigorosos, entre em contato com a equipe de vendas para conhecer as soluções de segurança de nível empresarial.
</Callout>

## Análise de segurança de conteúdo
A API da Kimi conta com um mecanismo integrado de análise de segurança de conteúdo:
- O sistema detecta e filtra automaticamente conteúdo proibido (atividades ilegais, violência, material explícito etc.)
- Quando acionada, a API retorna a resposta de erro apropriada
- A análise de conteúdo não armazena nem expõe seus dados originais
- Se você acreditar que a análise foi acionada incorretamente, entre em contato com o suporte informando o `request_id`
## Como excluir arquivos enviados?
Os arquivos enviados pela API de arquivos podem ser excluídos a qualquer momento:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

Inclua sua API Key no cabeçalho da solicitação e informe o ID do arquivo para excluí-lo. Uma vez excluído, o arquivo não pode mais ser referenciado e seus dados são removidos do servidor.

<Callout type="info">
Você também pode visualizar e excluir os arquivos enviados na página de gerenciamento de arquivos do console.
</Callout>
