---
title: "Perguntas frequentes sobre Kimi Websites"
slug: "websites-faq"
order: 3
extract_headings: true
preview: false
preview_content: "Perguntas frequentes sobre como usar Kimi Websites."
---

<SeoMeta
  title="Perguntas frequentes sobre Kimi Websites - Central de Ajuda Kimi"
  description="Soluções comuns para Kimi Websites, incluindo problemas de pré-visualização, páginas em branco, perda de dados e falhas de publicação."
/>

# Perguntas frequentes sobre Kimi Websites

> Para ver instruções completas sobre os botões do painel de pré-visualização, modos de edição, publicação e despublicação, consulte [Kimi Websites](/websites/websites-overview). Esta página aborda apenas soluções comuns de problemas.

## A pré-visualização não carrega ou não consigo ver a versão mais recente?

> Por exemplo: "O site não aparece", "A pré-visualização ainda mostra a versão antiga" ou "Não consigo ver a última versão salva".

Na maioria dos casos, o site foi gerado e salvo corretamente. O problema de "não conseguir ver" geralmente acontece no painel de pré-visualização ou na exibição do cartão de versão. A causa mais comum é um diretório de projeto incorreto. Nos demais casos, siga esta ordem:

<Callout type="warning">
**Verifique o diretório do projeto**: O projeto do site deve estar localizado em `/mnt/agents/output/app`. A pré-visualização só lê versões salvas a partir desse diretório. Se Kimi colocou o projeto em outro lugar (como um diretório temporário `/tmp`), a versão pode ter sido salva com sucesso, mas a pré-visualização não conseguirá lê-la — peça ao Kimi para mover o projeto para esse diretório e salvar novamente.
</Callout>

1. **Atualize a página ou reabra a conversa** — às vezes, os cartões de versão levam alguns segundos para aparecer.
2. **Peça ao Kimi para salvar uma nova versão na conversa.**
3. **Se a conversa estiver muito longa, tente iniciar uma nova** (veja "Minha conversa está muito longa — devo começar uma nova?" abaixo).
4. Se ainda assim não aparecer: em geral, o código e a versão foram salvos corretamente (você pode pedir ao Kimi o número da versão). Muitas vezes, trata-se de uma oscilação temporária do serviço de pré-visualização — tente novamente mais tarde. Se o problema persistir, clique em **Feedback do usuário** (ícone de envelope) no painel de pré-visualização para enviar um feedback com o número da versão, e nossa equipe investigará.

## O site está em branco, com tela branca, travou ou não responde?

> Por exemplo: "A página está totalmente em branco", "O site está vazio", "O site travou" ou "Nada aparece / clicar não faz nada".

- Uma tela em branco ou travada geralmente é causada por um **erro de execução no front-end** (como dependências ausentes, acesso direto a uma subpágina ou falha no carregamento de algum recurso ou imagem). Descreva o sintoma ao Kimi na conversa (uma captura de tela ajuda), e ele localizará e corrigirá o problema, salvando uma nova versão em seguida.
- Se você suspeita que a tela em branco foi causada por **arquivos ausentes**, cada versão do site salva um snapshot. Peça ao Kimi para restaurar a partir de uma versão anterior (veja "Arquivos ou diretórios do projeto estão ausentes" abaixo).
- **Compatibilidade do navegador**: Alguns navegadores focados em privacidade (Brave, certos complementos do Firefox) podem bloquear o carregamento de recursos do front-end, causando anomalias de exibição. Tente adicionar o domínio do Kimi à sua lista de permissões, desativar temporariamente escudos/bloqueadores de privacidade ou trocar para Chrome / Edge / Safari.

## E se clicar em "Publicar" falhar?

O procedimento é o mesmo acima: tente novamente mais tarde. Se o problema persistir, envie pelo **Feedback do usuário** com o número da versão. A versão já foi salva corretamente e não precisa ser recriada do zero.

## Por quanto tempo o link do site é válido? Ele expira?

Se você clicar em **Publicar** para disponibilizar publicamente o site, o link gerado permanecerá válido por tempo indeterminado, a menos que você clique manualmente em **Despublicar** para tornar o site privado, ou que o conteúdo seja sinalizado como inadequado.

## Conteúdo, dados ou registros estão ausentes?

> Por exemplo: "O conteúdo da minha página inicial desapareceu", "O conhecimento que enviei para o banco de dados sumiu", "As informações que enviei estão ausentes" ou "A IA diz que os dados foram perdidos permanentemente".

Na maioria dos casos, os dados não foram realmente perdidos. Verifique na seguinte ordem:

1. **Primeiro, confirme se o site é realmente "full-stack"**: Somente sites full-stack criados com **recursos de back-end (banco de dados)** armazenam dados no banco de dados em nuvem da plataforma, mantendo-os entre visitas e dispositivos. Na prática, muitos sites que dizem ser "full-stack" **acabam sendo apenas front-end**, e os dados nunca entram de fato no banco de dados — nesse caso, atualizar a página ou trocar de dispositivo naturalmente fará os dados anteriores desaparecerem. Peça ao Kimi para confirmar se o projeto inclui um back-end e um banco de dados reais.
2. **Site puramente front-end**: Os dados são salvos apenas no armazenamento local do navegador atual (localStorage). Trocar de navegador / dispositivo ou limpar os dados do navegador fará com que eles sejam perdidos. Se você precisa manter dados por longo prazo e em vários dispositivos, peça ao Kimi para migrar para uma solução full-stack com banco de dados.
3. **Site full-stack confirmado**: Os dados são salvos no banco de dados em nuvem gerenciado pela plataforma. **Publicar uma nova versão não apagará os dados existentes**; se os dados ainda não estiverem visíveis mesmo com o site sendo full-stack, geralmente é um problema temporário — atualize ou tente novamente mais tarde.
4. **Se você confirmar que os dados foram realmente perdidos**: Clique em **Feedback do usuário** (ícone de envelope) no painel de pré-visualização para enviar feedback, e nossa equipe investigará. Nesse ponto, não continue repetindo operações para evitar sobrescritas.

## Arquivos ou diretórios do projeto estão ausentes, ou aparece "ambiente redefinido" / "não foi possível recuperar"?

> Por exemplo: "O diretório do projeto do meu site sumiu e não pode ser recuperado", "Arquivos estão ausentes" ou "Mensagem de ambiente redefinido".

- Cada versão do site **salva um snapshot**, portanto o código-fonte geralmente pode ser recuperado a partir de versões anteriores. Peça ao Kimi para listar as versões históricas e reverter / restaurar para uma versão específica.
- Se isso acontecer em uma **conversa muito longa** (especialmente se você trocou de modelo no meio da conversa), recomendamos iniciar uma nova conversa (veja o próximo item).
- Se a recuperação ainda não for possível, clique em **Feedback do usuário** para enviar feedback, e nossa equipe investigará.

## Minha conversa está muito longa — devo começar uma nova?

Se uma conversa está em andamento há muito tempo, passou por muitas versões, ou se você trocou de modelo no meio da conversa (como K2.6 → K3), os recursos atuais podem não estar na versão mais recente, levando à perda de contexto ou a anomalias nos arquivos. **Recomendamos iniciar uma nova conversa** para usar os recursos mais recentes de criação e entrega. Sites publicados e versões históricas não são afetados e continuam acessíveis normalmente.

## Posso fazer o deploy por conta própria depois de exportar o código?

Você pode baixar o código completo do projeto e fazer o deploy no seu próprio servidor, mas os dois itens abaixo são fornecidos pela plataforma Kimi e **não serão migrados com o código**:

- **Login da conta Kimi**: É um recurso de login fornecido pela plataforma e não pode ser usado diretamente fora da plataforma Kimi. Se você precisa de login para um deploy próprio, peça ao Kimi para implementar um sistema de login com nome de usuário/senha baseado no seu próprio banco de dados.
- **Banco de dados gerenciado pela plataforma**: Os dados de sites full-stack são salvos no banco de dados em nuvem atribuído pela plataforma a esse site. O código exportado não inclui esses dados, nem se conectará automaticamente ao seu próprio banco de dados. Um deploy próprio exige configurar seu próprio banco de dados e migrar os dados.

Se você quer apenas que a página fique acessível publicamente, basta usar o recurso **Compartilhar → Publicar** da plataforma. Não é necessário configurar um servidor próprio — o login da conta Kimi e os dados em nuvem continuarão funcionando normalmente.

## O site gerado não corresponde aos meus requisitos?

- Na conversa, indique especificamente o que não corresponde: por exemplo, cor, layout, texto, módulos de funcionalidade, tabelas de dados etc.
- Você pode enviar imagens de referência, páginas de exemplo ou descrições em texto mais detalhadas para que o Agent modifique conforme a referência.
- Se ainda não estiver satisfeito após várias modificações, tente iniciar uma nova conversa com uma descrição de requisitos mais estruturada.

## Ainda posso modificar o conteúdo, os links ou os estilos do site depois da geração?

Sim. Na conversa original, continue dizendo ao Agent o que você quer modificar, por exemplo:

- "Altere o título da página inicial para XXX"
- "Altere o link do botão 'Fale conosco' para https://xxx"
- "Mude tudo para um tema escuro"

Depois da modificação, o Agent regenerará e fará o deploy de um novo link.

## Como adiciono back-end, banco de dados ou funcionalidade de login ao site?

- Destaque na instrução de criação do site que você quer uma página full-stack com banco de dados e funcionalidade de login.
- Como alternativa, você pode pedir ao Agent para gerar primeiro a página front-end, depois exportar o código-fonte e entregá-lo a um desenvolvedor para desenvolvimento complementar.

## Posso baixar o código-fonte do site ou exportá-lo para GitHub?

A versão atual permite baixar todos os arquivos localmente. Na conversa, abra "Todos os arquivos" e clique no botão de download.

## Quanto de credit é consumido para gerar/modificar um site?

A geração de sites é uma tarefa complexa que normalmente consome uma quantidade significativa de tokens/credits, dependendo de:

- Número de páginas e complexidade
- Inclusão de imagens, tabelas e lógica de interação
- Número de modificações iterativas

Recomendamos deixar a descrição dos seus requisitos o mais clara possível para reduzir tentativas e retrabalho. Se você não ficar satisfeito com o resultado, pode explicar a situação no feedback.

## A geração do site está muito lenta, fica na fila ou o terminal falha?

- Em horários de pico (dias úteis durante o dia e à noite), pode haver fila. Recomendamos usar em horários de menor movimento.
- Se a tarefa ficar parada por mais de 10 minutos, tente primeiro atualizar a página.
- Para sites complexos, recomendamos dividi-los em tarefas menores: comece pela página inicial e depois adicione gradualmente subpáginas e recursos.

## Para que Kimi Websites é indicado? Para que não é indicado?

**Indicado para:**

- Páginas pessoais/portfólios, landing pages de eventos, páginas de apresentação de produtos, páginas de ferramentas simples, protótipos de jogos pequenos
- Validar rapidamente ideias de design e gerar demos interativas
- Sites que exigem um banco de dados de back-end simples e um sistema de usuários

**Não indicado para:**

- Sites complexos com sistemas de pagamento
- Ambientes formais de produção com alta concurrency e alta disponibilidade
- Sites empresariais que exigem hospedagem estável de longo prazo com domínio personalizado

---

Se os métodos acima não resolverem o seu problema, envie pelo botão **Feedback do usuário** no canto inferior direito do Kimi web/app ou [entre em contato com o suporte ao cliente](/others/contact-support). Recomendamos anexar:

- O link do site onde o problema ocorreu
- O navegador e o sistema operacional que você está usando
- Capturas de tela ou texto da mensagem de erro
- O horário aproximado da conversa original

Continuaremos otimizando os recursos de geração de sites com base no seu feedback.
