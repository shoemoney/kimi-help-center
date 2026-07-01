---
title: "Bakiye ve kullanım"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Bakiye & kullanım - Kimi Yardım Merkezi"
  description="Kimi API, hesap bakiyenizi ve kullanım ayrıntılarınızı görüntülemeniz için birden fazla yöntem sunar; böylece tüketiminizi ve maliyetlerinizi kolayca takip edersiniz."
/>

# Bakiye ve kullanım

Kimi API, hesap bakiyenizi ve kullanım ayrıntılarınızı görüntülemeniz için birden fazla yöntem sunar; böylece tüketiminizi ve maliyetlerinizi kolayca takip edersiniz.

## Konsol panosu

[platform.moonshot.ai](https://platform.moonshot.ai) adresinde oturum açın ve konsoldaki **fee-detail** (faturalandırma ayrıntıları) sayfasına giderek şunları görüntüleyin:

- Güncel hesap bakiyesi
- Günlük kullanım dökümü
- Modele göre kullanım ve maliyetler
- Geçmiş harcama eğilimleri

<Callout type="info">
Günlük faturalandırma, **ertesi gün saat 07.00'a kadar** güncellenir. Gerçek zamanlı kullanım verilerinde küçük bir gecikme olabilir.
</Callout>

> **Not**: Günlük faturalandırma, **ertesi gün saat 07.00'a kadar** güncellenir. Gerçek zamanlı kullanım verilerinde küçük bir gecikme olabilir.

## Token Estimation API'si

Bir istek göndermeden önce, çağrının kaç token tüketeceğini tahmin etmek için Token Estimation API'sini kullanabilirsiniz; bu, maliyet kontrolü için faydalıdır.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Bir Chat Completion isteğiyle aynı `messages` biçimini iletin; API, tahmini token sayısını döndürür.

## Bakiye sorgulama API'si

Güncel hesap bakiyenizi doğrudan API üzerinden sorgulayın:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Kullanılabilir bakiyenizi almak için istek başlığına API anahtarınızı ekleyin.

## Kullanım izleme ipuçları

<Callout type="tip">
**En İyi Uygulamalar**:
- Harcama eğilimlerini izlemek için fee-detail sayfasını düzenli olarak kontrol edin
- Bakiye sorgulama API'sini entegre edin ve bakiye uyarı eşikleri belirleyin
- Kritik çağrılardan önce maliyetleri tahmin etmek için Token Estimation API'sini kullanın
</Callout>
