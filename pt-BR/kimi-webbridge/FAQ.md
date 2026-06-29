---
title: "Perguntas frequentes"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Perguntas frequentes do Kimi WebBridge - Central de Ajuda Kimi"
  description="Perguntas frequentes sobre instalação, conexão e uso do Kimi WebBridge com vários navegadores e Local Agents."
  ogType="article"
/>

# Perguntas frequentes

## Instalação e configuração

### Aparece "Não é possível adicionar apps deste site" ao instalar a extensão?

Certifique-se de instalar a partir da loja oficial (Chrome Web Store ou Edge Add-ons). Se você não conseguir acessar a loja, use o método de instalação manual disponível no site oficial.

### Nada acontece depois de executar o comando de conexão?

Verifique sua conexão com a internet. Se o problema persistir, reinicie o Kimi Claw Desktop e execute o comando novamente.

### Posso usar em vários computadores?

Sim, mas cada computador precisa ser instalado e configurado separadamente.

### Não consigo encontrar o Kimi Claw Desktop?

O Kimi Claw Desktop é um Kimi Claw implantado no seu computador local. Abra o Kimi Desktop, encontre o Kimi Claw na barra lateral esquerda, crie um novo Claw e selecione "Implantar no meu computador".

## Conexão e uso

### O status da extensão mostra "Desconectado"?

Confirme se a extensão de navegador Kimi WebBridge foi instalada com sucesso e, em seguida, siga os passos correspondentes ao seu método de configuração:

- **Kimi Desktop**: reinicie o Kimi Desktop e tente novamente

- **Outros Local Agents**: reenvie o seguinte comando no seu Agent e reinicie o Agent após a execução:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### No Windows, ao instalar o WebBridge, ocorre o erro: Falha na instalação

O Kimi WebBridge é compatível com o sistema operacional Windows, e o comando de instalação pode ser executado em um ambiente Linux:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### O WebBridge exibe um aviso de compatibilidade com o Chrome após a instalação. O que isso significa?

Se o WebBridge consegue abrir páginas normalmente, mas ações como `snapshot`, `evaluate`, `screenshot` ou `click` continuam falhando, a causa mais comum é **um conflito com outras extensões do navegador**.

Isso é especialmente comum com ferramentas de scraping, extensões auxiliares de sites, extensões de gravação de tela e extensões de assistentes de IA.

Recomendamos os seguintes passos para investigar:

1. Abra a página de gerenciamento de extensões do seu navegador
2. Desative temporariamente as outras extensões
3. Mantenha apenas o Kimi WebBridge ativado
4. Reinicie o navegador e tente novamente
5. Se o WebBridge funcionar normalmente, reative as outras extensões uma a uma para identificar a extensão em conflito


### O WebBridge vai vazar minhas informações de login?

Não. Toda a execução acontece localmente no seu dispositivo — estados de login e conteúdo das páginas nunca saem da sua máquina. O Agent só pode acessar os resultados das operações que você autorizar.

### Por que as operações falham?

Estruturas de página complexas ou carregamento dinâmico podem fazer com que as operações falhem. Tente simplificar suas instruções ou peça ao Agent para tirar uma captura de tela primeiro, a fim de confirmar o estado da página antes de executar.

### Quais navegadores são compatíveis?

Atualmente, são compatíveis o Chrome e o Edge. Recomendamos usar a versão mais recente para a melhor experiência.

## Trabalhando com outros agentes

### Quais outros Agents são compatíveis?

O WebBridge é compatível com todos os Local Agents, incluindo Claude Code, Codex, Cursor, Kimi Code, Hermers Claw e muitos outros.

### A configuração é a mesma para diferentes Agents?

O comando de configuração é o mesmo para todos — basta executar um único comando curl para instalar. Consulte a configuração de Skill de cada Agent para mais detalhes.
