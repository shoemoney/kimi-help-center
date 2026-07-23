---
title: "Bakiye ve kullanım"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Bakiye ve kullanım - Kimi Yardım Merkezi"
  description="Kimi API, hesap bakiyenizi ve kullanım ayrıntılarınızı görüntülemek için birden fazla yol sunarak tüketimi ve maliyetleri izlemenize yardımcı olur."
/>

# Bakiye ve kullanım

Kimi API, hesap bakiyenizi ve kullanım ayrıntılarınızı görüntülemek için birden fazla yol sunarak tüketimi ve maliyetleri izlemenize yardımcı olur.

## Konsol panosu

[platform.kimi.ai](https://platform.kimi.ai) üzerinde oturum açın ve konsoldaki **fee-detail** (faturalandırma ayrıntıları) sayfasına giderek şunları görüntüleyin:

- Mevcut hesap bakiyesi
- Günlük kullanım dökümü
- Model bazında kullanım ve maliyetler
- Geçmiş harcama eğilimleri

<Callout type="info">
Günlük faturalandırma **ertesi gün saat 07.00’ye kadar** güncellenir. Gerçek zamanlı kullanım verilerinde küçük bir gecikme olabilir.
</Callout>

> **Not**: Günlük faturalandırma **ertesi gün saat 07.00’ye kadar** güncellenir. Gerçek zamanlı kullanım verilerinde küçük bir gecikme olabilir.

## Token Estimation API

İstek göndermeden önce, çağrının kaç token tüketeceğini tahmin etmek için Token Estimation API'yi kullanabilirsiniz — maliyet kontrolü için yararlıdır.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Chat Completion isteğiyle aynı `messages` biçimini gönderin; API tahmini token sayısını döndürür.

## Bakiye sorgulama API'si

Mevcut hesap bakiyenizi doğrudan API üzerinden sorgulayın:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Kullanılabilir bakiyenizi almak için API anahtarınızı istek başlığına ekleyin.

## Kullanımı izleme ipuçları

<Callout type="tip">
**En iyi uygulamalar**:
- Harcama eğilimlerini izlemek için fee-detail sayfasını düzenli olarak kontrol edin
- Bakiye Sorgulama API'sini entegre edin ve bakiye uyarı eşikleri ayarlayın
- Kritik çağrılardan önce maliyetleri tahmin etmek için Token Estimation API'yi kullanın
</Callout>
