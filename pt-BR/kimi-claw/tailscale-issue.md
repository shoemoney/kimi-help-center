---
title: "Desconexão do Tailscale"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Desconexão do Tailscale - Central de Ajuda Kimi"
  description="Se o Kimi Claw perder a conexão depois que você configurar o Tailscale, a causa quase sempre é uma substituição de DNS — o Tailscale substitui as configurações de DNS do sistema, o que i..."
/>

# Desconexão do Tailscale

Se o Kimi Claw perder a conexão depois que você configurar o Tailscale, a causa quase sempre é uma substituição de DNS — o Tailscale substitui as configurações de DNS do sistema, o que impede o Kimi Claw de resolver nomes de host.

## Como resolver?

1. Abra a [página de configurações de DNS do Tailscale](https://login.tailscale.com/admin/dns).
2. Em **Nameservers → Global nameservers**, clique em **Add nameserver**.
3. Adicione estes servidores DNS públicos:
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. Ative a opção **Override DNS Servers** no canto superior direito.
5. Aguarde cerca de **30 segundos** para a conexão ser restabelecida.

## Como evitar?

Se você está prestes a configurar o Tailscale, ajuste as configurações de DNS acima **antes** de ativá-lo. Assim, você evita qualquer interrupção na conexão.
