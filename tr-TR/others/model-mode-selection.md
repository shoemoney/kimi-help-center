---
title: "Nasıl seçmeli: K2.6 / K3 / K3 Cluster, düşünme yoğunluğu ve Agent"
slug: "model-mode-selection"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi modelleri ve modları nasıl seçilir: K2.6 / K3 / K3 Cluster, düşünme yoğunluğu ve Agent - Kimi Help Center"
  description="Kimi’nin üç model seçeneğini (K2.6 / K3 / K3 Cluster), düşünme yoğunluğu düzeylerini (Standart / Gelişmiş / Ekstrem) ve Agent ile Agent Cluster arasındaki farkı anlayın; her senaryo için en uygun modu seçin."
/>

# Nasıl seçmeli: K2.6 / K3 / K3 Cluster, düşünme yoğunluğu ve Agent

Kimi, sorunuza göre interneti kullanıp kullanmayacağına kendisi karar verir; bu yüzden bunu elle değiştirmeniz gerekmez. Sizin seçmeniz gerekenler **model** ve **düşünme yoğunluğu**dur; karmaşık görevlerde ayrıca **Agent** ve **Agent Cluster** da kullanabilirsiniz.

## Üç model seçeneği

Seçim yapmak için giriş kutusunun üzerindeki model seçiciyi kullanın:

| Model | Düşünme yoğunluğu | En uygun olduğu durumlar | Credit |
|---|---|---|---|
| **K2.6** | Standart / Gelişmiş | Hızlı sohbetler ve soru-cevap; daha hızlı yanıtlar | Credit’lerden düşülür |
| **K3** | Standart / Gelişmiş / Ekstrem | Sohbetler ve Agent görevleri; en güçlü genel yetenek | Credit’lerden düşülür |
| **K3 Cluster** | Standart / Gelişmiş / Ekstrem | Büyük ölçekli arama, toplu işleme ve yüksek hacimli görevleri tek seferde tamamlama | Credit’lerden düşülür |

- **K3**, `.pptx`, `.docx`, `.xlsx` ve `.pdf` gibi düzenlenebilir belgeleri baştan sona üretebilir; **K2.6** ise hızlı soru-cevap için optimize edilmiştir ve yalnızca PPT taslakları, Word gövde metni, kod ve benzeri metin çıktıları verir.
- **Görsel / video / ses üretimi** için “+” → Plugins’e tıklayın, ilgili özelliği seçin ve **K3** ile kullanın.

<Callout type="info">
K2.6 hem Chat’te (giriş kutusunun üzerindeki model seçici) hem de Kimi Work içinde K2.6 Agent olarak kullanıldığında üyelik credit’i tüketir.
</Callout>

## Düşünme yoğunluğu: Standart / Gelişmiş / Ekstrem

Düşünme yoğunluğu yükseldikçe model daha kapsamlı akıl yürütür ve genel olarak sonuç daha akıllı olur; ancak bu aynı zamanda **daha fazla token kullanır**.

- **Hız ve daha düşük credit kullanımı** istiyorsanız → **Standart** seçin;
- Karmaşık analizler veya zor problemler için **daha güçlü akıl yürütmeye** ihtiyacınız varsa → **Gelişmiş** ya da **Ekstrem** seçin (Ekstrem, K3 / K3 Cluster tarafından desteklenir).

## Agent ve Agent Cluster

- **Genel amaçlı Agent**: Web sitesi oluşturma, PPT hazırlama, Deep Research ile belge ve elektronik tablo işleme dahil olmak üzere görevleri otomatik olarak planlar ve tamamlar.
- **Agent Cluster**: 4.000’den fazla paralel araç çağrısını destekler ve 300’e kadar sub-agent’ı (Sub-agents) paralel biçimde otonom olarak koordine edebilir. **Büyük ölçekli arama, uzun biçimli yazım ve toplu işleme** gibi büyük ölçekli görevler için idealdir.

## Senaryoya göre ne seçmeli?

- **Hızlı soru-cevap ve günlük sohbetler** → K2.6.
- **Karmaşık sohbetler, belge yazımı / PPT ve elektronik tablo oluşturma / çok adımlı görevler** → K3.
- **Büyük ölçekli arama, toplu işleme ve çok uzun biçimli yazım** → K3 Cluster.
- **Credit tasarrufu için** → düşünme yoğunluğunu “Standart” olarak ayarlayın.

## SSS

### “Thinking Mode” artık yok mu?
Kimi, “sohbet” ve “Agent” deneyimlerini tek bir yapıda birleştirdi; bu yüzden artık ayrı modlar değiller. “Thinking” artık **model ve düşünme yoğunluğu seçimiyle** kontrol edilir. Örneğin K3’ü daha yüksek bir düşünme yoğunluğuyla kullanmak daha kapsamlı akıl yürütme sağlar.

### K2.6 ile K3 arasındaki fark nedir?
K2.6 hızlı soru-cevap için optimize edilmiştir ve daha hızlı yanıt verir. K3 en güçlü genel yeteneğe sahiptir; karmaşık sohbetlerde ve Agent görevlerinde öne çıkar ve düzenlenebilir belgeleri baştan sona üretebilir. Her ikisi de credit’lerden düşülür.

### K3 ile K3 Cluster arasındaki fark nedir?
K3, sıradan sohbetler ve Agent görevleri için uygundur. K3 Cluster ise binlerce araç çağrısı ve yüzlerce sub-agent ile büyük ölçekli paralellik kullanarak **büyük ölçekli arama, toplu işleme ve çok uzun biçimli yazım** gibi yüksek hacimli görevleri yönetir.

### Tek bir turda ne kadar içerik işlenebilir?
K2.6, tek turluk bağlamda yaklaşık 128K token’ı destekler (kabaca 50.000–60.000 Çince karakter); K3 ise 1 milyon token’lık bir bağlam penceresi sunar (en üst düzey üyelik avantajı gerekir). Ayrıntılar için [Bir sohbet 200.000 Çince karakteri aşarsa ne yapmalıyım?](/others/chat-issues) bölümüne bakın.
