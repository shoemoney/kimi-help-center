---
title: "Tailscale bağlantı kopması"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Tailscale bağlantı kopması - Kimi Yardım Merkezi"
  description="Tailscale'i kurduktan sonra Kimi Claw bağlantısını kaybediyorsa, bunun nedeni neredeyse her zaman bir DNS geçersiz kılmasıdır — Tailscale, sistemin DNS ayarlarını değiştirir ve b..."
/>

# Tailscale bağlantı kopması

Tailscale'i kurduktan sonra Kimi Claw bağlantısını kaybediyorsa, bunun nedeni neredeyse her zaman bir DNS geçersiz kılmasıdır — Tailscale, sistemin DNS ayarlarını değiştirir ve bu da Kimi Claw'ın ana bilgisayar adlarını çözümleme yeteneğini bozar.

## Nasıl düzeltilir?

1. [Tailscale DNS ayarları sayfasını](https://login.tailscale.com/admin/dns) açın.
2. **Nameservers → Global nameservers** altında **Add nameserver**'a tıklayın.
3. Şu genel DNS sunucularını ekleyin:
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. Sağ üst köşedeki **Override DNS Servers** anahtarını etkinleştirin.
5. Bağlantının yeniden kurulması için yaklaşık **30 saniye** bekleyin.

## Nasıl önlenir?

Tailscale'i kurmak üzereyseniz, yukarıdaki DNS ayarlarını Tailscale'i etkinleştirmeden **önce** yapılandırın. Böylece herhangi bir bağlantı kesintisini önlemiş olursunuz.
