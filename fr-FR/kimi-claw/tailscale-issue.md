---
title: "Déconnexion de Tailscale"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Déconnexion de Tailscale - Centre d'aide Kimi"
  description="Si Kimi Claw perd la connexion après l'installation de Tailscale, la cause est presque toujours une substitution DNS — Tailscale remplace les paramètres DNS du système, ce qui e..."
/>

# Déconnexion de Tailscale

Si Kimi Claw perd la connexion après l'installation de Tailscale, la cause est presque toujours une substitution DNS : Tailscale remplace les paramètres DNS du système, ce qui empêche Kimi Claw de résoudre les noms d'hôtes.

## Comment résoudre le problème ?

1. Ouvrez la [page des paramètres DNS de Tailscale](https://login.tailscale.com/admin/dns).
2. Sous **Nameservers → Global nameservers**, cliquez sur **Add nameserver**.
3. Ajoutez ces serveurs DNS publics :
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. Activez l'option **Override DNS Servers** dans le coin supérieur droit.
5. Patientez environ **30 secondes** le temps que la connexion soit rétablie.

## Comment l'éviter ?

Si vous êtes sur le point d'installer Tailscale, configurez les paramètres DNS ci-dessus **avant** d'activer Tailscale. Cela évite toute interruption de connexion.
