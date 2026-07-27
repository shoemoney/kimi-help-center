---
title: "API fiyatlandırması"
slug: "api-pricing"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="API fiyatlandırması - Kimi Yardım Merkezi"
  description="Kimi API, model ve özellik bazlı fiyatlandırmayla token tüketimine göre ücretlendirilir."
/>

# API fiyatlandırması

<Callout type="info">
Kimi API, model ve özellik bazlı fiyatlandırmayla token tüketimine göre ücretlendirilir.
</Callout>

## Ücretlendirme temelleri

- **Token başına ücretlendirme**: Her API çağrısında giriş tokenları ve çıkış tokenları ayrı ayrı ücretlendirilir
- **Token birimi**: 1M = 1.000.000 token
- **Modele göre fiyatlandırma**: Daha yüksek kapasiteli modellerde token başına maliyet daha yüksektir — kullanım senaryonuza en uygun modeli seçin

## Ek özellik ücretlendirmesi

| Özellik | Ek Ücret |
| --- | --- |
| **Web Search** | Çağrı başına $0.004 (token tüketiminden bağımsız) |

## Bağlam önbelleğe alma

<Callout type="tip">
**Bağlam önbelleğe alma**, sık kullanılan bağlam içeriklerini (sistem promptları ve referans belgeleri gibi) önbelleğe almanızı sağlar. Önbelleğe isabet eden tokenlar indirimli tarifeyle ücretlendirilir; bu da tekrarlanan bağlamlarda maliyetleri etkili biçimde düşürür.
</Callout>

Ayrıntılı bağlam önbelleğe alma fiyatlandırması için resmi belgelere bakın.

## Fiyatlandırma ayrıntıları

Eksiksiz model fiyatlandırma tablosu ve ücretlendirme kuralları için:

[platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat) adresine gidebilirsiniz

## Maliyet optimizasyonu ipuçları

<Callout type="tip">
- Gereksiz uzun çıktıları önlemek için `max_tokens` parametresini uygun şekilde ayarlayın
- Tekrarlanan sistem promptları ve bağlamlar için bağlam önbelleğe almayı kullanın
- Görevin karmaşıklığına uygun modeli seçin — basit görevler için hafif modelleri kullanın
- Gereksiz giriş tokenlarını en aza indirmek için prompt tasarımınızı sadeleştirin
</Callout>
