---
title: "Visão geral do Kimi Claw"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Implemente e gerencie seu próprio assistente de IA Kimi Claw na nuvem com configuração em um clique."
---

<SeoMeta
  title="Visão geral do Kimi Claw - Central de Ajuda Kimi"
  description="Implemente e gerencie seu próprio assistente de IA Kimi Claw na nuvem com configuração em um clique."
/>

# Visão geral do produto

<Callout type="info">
O **Kimi Claw** é um assistente de IA com uma personalidade única e memória de longo prazo persistente. Com o Kimi Claw, você pode criar, implementar e conversar com sua própria instância do OpenClaw diretamente pelo Kimi.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Implantação na nuvem em um clique

Ainda não tem um OpenClaw? Acesse [kimi.com/bot](https://kimi.com/bot) e crie o seu. O Kimi cuida da implantação na nuvem para você — sem precisar comprar servidores nem configurar linha de comando.

<Callout type="warning">

- A implantação em um clique requer um plano **Allegretto ou superior**. [Planos de Assinatura](https://www.kimi.com/membership/pricing).

</Callout>

- O Kimi provisiona automaticamente o modelo **Kimi K2.6**, vincula os créditos e benefícios da sua **assinatura Kimi** e ativa o Kimi Web Search — sem necessidade de configuração de API separada.
- Se desejar usar o modelo **Kimi K3**, ajuste a configuração do modelo nas configurações do Kimi Claw ou consulte o guia de configuração avançada.
- O Kimi Claw pode ser implementado diretamente no Telegram e em outras plataformas de chat.

## Primeiros passos

1. Faça login em [kimi.com/bot](https://kimi.com/bot)
2. Clique em **Criar** para iniciar um novo Kimi Claw
3. Aguarde a conclusão da configuração automática (geralmente alguns minutos)
4. Personalize o nome e a persona do seu Kimi Claw
5. Em **Configurações → Canais de Chat**, conecte as plataformas que deseja usar (por exemplo, o Telegram)

## Vincular um OpenClaw existente

Se você já hospeda uma instância própria do OpenClaw, pode conectá-la ao Kimi instalando o plugin do Kimi:

1. Acesse [kimi.com/bot](https://kimi.com/bot) e selecione **Vincular OpenClaw Existente**
2. Siga as instruções para instalar o plugin no seu dispositivo OpenClaw
3. Após a conexão, você poderá conversar com seu OpenClaw pelo Kimi

<a id="switch-to-k3"></a>
## Mudar para o modelo Kimi K3

O Kimi Claw usa o modelo Kimi K2.6 por padrão. Se você quiser usar o Kimi K3, execute o comando abaixo para modificar a configuração local do OpenClaw.

```bash
# 1. 备份当前配置
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. 新增 k3 模型并切换默认模型（示例使用 jq）
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. 重启 OpenClaw
openclaw gateway restart

# 4. 验证
session_status
```

Após a execução, verifique se a saída do `session_status` mostra `model` como `kimi-coding/k3` e o limite de `context` como `1.0m`.

<Callout type="warning">
O caminho do arquivo de configuração pode variar de acordo com o método de instalação. Substitua `/root/.openclaw/openclaw.json` conforme a sua situação real. Faça um backup antes de fazer alterações.
</Callout>
