---
title: "Desconexión de Tailscale"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Desconexión de Tailscale - Centro de ayuda de Kimi"
  description="Si Kimi Claw pierde la conexión después de configurar Tailscale, la causa casi siempre es una anulación del DNS: Tailscale reemplaza la configuración de DNS del sistema, lo que i..."
/>

# Desconexión de Tailscale

Si Kimi Claw pierde la conexión después de configurar Tailscale, la causa casi siempre es una anulación del DNS: Tailscale reemplaza la configuración de DNS del sistema, lo que impide que Kimi Claw pueda resolver los nombres de host.

## ¿Cómo solucionarlo?

1. Abre la [página de configuración de DNS de Tailscale](https://login.tailscale.com/admin/dns).
2. En **Nameservers → Global nameservers**, haz clic en **Add nameserver**.
3. Agrega estos servidores DNS públicos:
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. Activa el interruptor **Override DNS Servers** en la esquina superior derecha.
5. Espera unos **30 segundos** a que se restablezca la conexión.

## ¿Cómo prevenirlo?

Si estás por configurar Tailscale, ajusta la configuración de DNS anterior **antes** de habilitar Tailscale. Así evitas cualquier interrupción de la conexión.
