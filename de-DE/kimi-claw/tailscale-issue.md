---
title: "Tailscale-Verbindungsabbruch"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Tailscale-Verbindungsabbruch - Kimi Hilfecenter"
  description="Wenn Kimi Claw nach der Einrichtung von Tailscale die Verbindung verliert, liegt die Ursache fast immer in einer DNS-Überschreibung – Tailscale ersetzt die DNS-Einstellungen des Systems, was b..."
/>

# Tailscale-Verbindungsabbruch

Wenn Kimi Claw nach der Einrichtung von Tailscale die Verbindung verliert, liegt die Ursache fast immer in einer DNS-Überschreibung – Tailscale ersetzt die DNS-Einstellungen des Systems, wodurch Kimi Claw keine Hostnamen mehr auflösen kann.

## Wie lässt sich das beheben?

1. Öffnen Sie die [Tailscale-DNS-Einstellungsseite](https://login.tailscale.com/admin/dns).
2. Klicken Sie unter **Nameservers → Global nameservers** auf **Add nameserver**.
3. Fügen Sie diese öffentlichen DNS-Server hinzu:
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. Aktivieren Sie oben rechts den Schalter **Override DNS Servers**.
5. Warten Sie etwa **30 Sekunden**, bis die Verbindung wiederhergestellt ist.

## Wie lässt sich das vermeiden?

Wenn Sie Tailscale gerade einrichten möchten, konfigurieren Sie die oben genannten DNS-Einstellungen **bevor** Sie Tailscale aktivieren. So vermeiden Sie jegliche Verbindungsunterbrechung.
