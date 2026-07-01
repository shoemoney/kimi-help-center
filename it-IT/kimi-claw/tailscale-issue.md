---
title: "Disconnessione di Tailscale"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Disconnessione di Tailscale - Centro assistenza Kimi"
  description="Se Kimi Claw perde la connettività dopo aver configurato Tailscale, la causa è quasi sempre un override del DNS: Tailscale sostituisce le impostazioni DNS del sistema, il che b..."
/>

# Disconnessione di Tailscale

Se Kimi Claw perde la connettività dopo aver configurato Tailscale, la causa è quasi sempre un override del DNS: Tailscale sostituisce le impostazioni DNS del sistema, impedendo a Kimi Claw di risolvere i nomi host.

## Come risolvere?

1. Apri la [pagina delle impostazioni DNS di Tailscale](https://login.tailscale.com/admin/dns).
2. In **Nameservers → Global nameservers**, fai clic su **Add nameserver**.
3. Aggiungi questi server DNS pubblici:
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. Attiva l'opzione **Override DNS Servers** nell'angolo in alto a destra.
5. Attendi circa **30 secondi** affinché la connessione venga ripristinata.

## Come prevenire?

Se stai per configurare Tailscale, imposta le configurazioni DNS sopra indicate **prima** di abilitare Tailscale. In questo modo eviti qualsiasi interruzione della connettività.
