---
title: "API fiyatlandırması"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="API fiyatlandırması - Kimi Yardım Merkezi"
  description="Kimi API, modele ve özelliğe özel fiyatlandırmayla token tüketimine göre ücretlendirilir."
/>

# API fiyatlandırması

<Callout type="info">
Kimi API, modele ve özelliğe özel fiyatlandırmayla token tüketimine göre ücretlendirilir.
</Callout>

## Ücretlendirmenin temelleri

- **Token başına ücretlendirme**: Her API çağrısı için giriş token'ları ve çıkış token'ları ayrı ayrı ücretlendirilir
- **Token birimi**: 1M = 1.000.000 token
- **Modele özel fiyatlandırma**: Daha yetenekli modellerde token başına maliyet daha yüksektir; kullanım senaryonuza en uygun modeli seçin

## Ek özellik ücretlendirmesi

| Özellik | Ek Ücret |
| --- | --- |
| **Web Search** | Çağrı başına 0,004 ABD doları (token tüketiminden bağımsız) |

## Bağlam önbellekleme

<Callout type="tip">
**Context Caching**, sık kullanılan bağlam içeriğini (sistem istemleri ve referans belgeleri gibi) önbelleğe almanızı sağlar. Önbelleğe isabet eden token'lar indirimli oranla ücretlendirilir ve böylece tekrar eden bağlamın maliyetini etkili biçimde düşürür.
</Callout>

Context Caching fiyatlandırmasının ayrıntıları için resmi belgelere başvurun.

## Fiyatlandırma ayrıntıları

Eksiksiz model fiyatlandırma tablosu ve ücretlendirme kuralları için:

[platform.moonshot.ai/docs/pricing/chat](https://www.platform.moonshot.ai/docs/pricing/chat) adresine gidebilirsiniz

## Maliyet optimizasyonu ipuçları

<Callout type="tip">
- Gereksiz uzun çıktıları önlemek için `max_tokens` parametresini uygun şekilde ayarlayın
- Tekrar eden sistem istemleri ve bağlam için Context Caching kullanın
- Görevin karmaşıklığına uygun modeli seçin; basit görevlerde hafif modelleri kullanın
- Gereksiz giriş token'larını en aza indirmek için istem tasarımınızı sadeleştirin
</Callout>
