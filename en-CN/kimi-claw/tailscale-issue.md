---
title: "What should I do if Tailscale disconnects?"
slug: "tailscale-issue"
order: 19
extract_headings: false
preview: true
preview_content: "A DNS fix for Kimi Claw issues caused by Tailscale disconnections."
---

<SeoMeta
  title="How to fix Kimi Claw disconnections caused by Tailscale? - Kimi Help Center"
  description="Does Kimi Claw disconnect frequently when you use Tailscale VPN? This article explains connection issues caused by Tailscale overriding DNS and shows how to fix them by adding public DNS servers and enabling Override."
/>
# Tailscale Disconnection

If Kimi Claw disconnects after you configure Tailscale, it is because Tailscale has overridden the system DNS configuration.

## How to fix it

1. Open the [Tailscale DNS configuration page](https://login.tailscale.com/admin/dns).
2. Under **NameServer** > **Global nameservers**, click **Add nameserver**.
3. Add the following public DNS servers:
   - **Google Public DNS** (8.8.8.8 / 8.8.4.4)
   - **Cloudflare Public DNS** (1.1.1.1 / 1.0.0.1)
4. Turn on **Override DNS Servers** in the upper-right corner.
5. Wait about **30 seconds**, and the connection should be restored.

## Prevention tip

If you are about to configure Tailscale, we recommend completing the DNS configuration steps above **before** enabling Tailscale to avoid connection interruptions.
