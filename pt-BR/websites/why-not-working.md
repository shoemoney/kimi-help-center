---
title: "Recursos full-stack do Kimi Websites"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
preview_content: "Recursos full-stack do Kimi Websites e limitações atuais."
---

<SeoMeta
  title="Por que o site gerado pelo Kimi não funciona? - Central de Ajuda Kimi"
  description="Conheça os limites e as limitações atuais do Kimi Websites. Cenários ainda não compatíveis incluem pagamentos de terceiros, OAuth e integrações complexas com API."
/>

# Recursos full-stack do Kimi Websites

## Upgrade para criação de sites full-stack

Um site completo geralmente é composto por três partes: **interface front-end, serviços back-end e armazenamento de dados**. O Kimi Websites foi atualizado com recursos de criação de sites full-stack, permitindo gerar e implantar sites de ponta a ponta, das páginas front-end aos bancos de dados back-end.

| Recurso         | Descrição                                                           |
|--------------|----------------------------------------------------------------|
| Geração de front-end     | Estrutura de páginas HTML/CSS/JavaScript, estilos e lógica de interação                    |
| Banco de dados back-end   | Cria automaticamente um banco de dados back-end, com suporte a leitura/gravação persistente de dados e gerenciamento visual               |
| Login de usuário     | Compatível com login por conta Kimi; também pode criar um sistema de login com conta e senha usando o banco de dados           |
| Gerenciamento de versões     | A IA cria commits de versões automaticamente e permite reverter para qualquer versão anterior                      |
| Prévia full-stack     | Permite visualizar o front-end e o back-end completos; alguns cenários exigem iniciar manualmente o ambiente de sandbox                   |
| Publicação e implantação   | Clique manualmente em "Publicar" para implantar na internet pública. Antes da publicação, o site fica disponível apenas para prévia. A implantação de conteúdo full-stack é compatível  |

## Entregáveis do Agent

- Arquivos completos da execução da tarefa, incluindo código front-end e back-end
- Um site full-stack que pode ser visualizado online e publicado
- Um pacote Zip para download localizado no diretório `/mnt/agents/output/app/`

## Casos de uso

| Cenário             | Exemplo de prompt                                                       |
|------------------|------------------------------------------------------------------|
| Criar uma landing page do zero   | Crie uma landing page de marketing para um produto SaaS com estilo inspirado em tecnologia, incluindo seção hero, apresentação de recursos, preços e CTA |
| Recriar a partir de uma captura de tela         | [Faça upload de uma captura de tela do design] Transforme este design em código de página web executável               |
| Portfólio pessoal       | Crie um site de portfólio pessoal para um fotógrafo, com estilo minimalista em preto e branco e suporte a layout de imagens em masonry        |
| Página de visualização de dados     | Crie uma página web de visualização de dados mostrando dados de financiamento de empresas de IA em 2025, incluindo gráficos e filtros |
| Site de marca         | Crie um site oficial para uma marca de café, usando uma paleta de cores Morandi, com página inicial, páginas de produtos e páginas de lojas      |
| App protegido por login     | Crie um site interno de base de conhecimento para uma equipe, no qual o conteúdo só possa ser visualizado após login                   |
| Administração de dados     | Crie um sistema de inscrição em eventos em que os usuários possam enviar informações salvas em um banco de dados, e os administradores possam ver a lista de inscritos |
| Ferramenta/calculadora    | Crie uma página web de calculadora de IMC com interface limpa, alternância de unidades e dicas sobre categorias de saúde     |

## Limitações atuais

Os cenários a seguir ainda não são compatíveis e serão disponibilizados gradualmente em versões futuras:

- Integração com pagamentos de terceiros, como Stripe e PayPal
- Login OAuth de terceiros, como Google e GitHub. No momento, há suporte apenas para login com conta Kimi ou login com nome de usuário/senha baseado em banco de dados
- Integrações complexas de API no lado do servidor, como conexão com serviços SaaS externos
