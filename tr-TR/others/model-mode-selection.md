---
title: "Nasıl seçmeli: K2.6 / K3 / K3 Cluster, düşünme yoğunluğu ve Agent"
slug: "model-mode-selection"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi modelleri ve modları nasıl seçilir: K2.6 / K3 / K3 Cluster, düşünme yoğunluğu ve Agent - Kimi Yardım Merkezi"
  description="Kimi’nin üç model seçeneğini (K2.6 / K3 / K3 Cluster), düşünme yoğunluğu düzeylerini (Standart / Gelişmiş / Ekstrem) ve Agent ile Agent Cluster arasındaki farkı anlayarak her senaryo için en uygun modu seçin."
/>

# Nasıl seçmeli: K2.6 / K3 / K3 Cluster, düşünme yoğunluğu ve Agent

Kimi, sorunuza göre interneti kullanıp kullanmayacağına kendisi karar verir; bu yüzden bunu elle değiştirmeniz gerekmez. Seçmeniz gerekenler **model** ve **düşünme yoğunluğu**dur; karmaşık görevlerde ayrıca **Agent** ve **Agent Cluster** da kullanabilirsiniz.

## Üç model seçeneği

Seçim yapmak için giriş kutusunun üzerindeki model değiştiriciyi kullanın:

| Model | Düşünme yoğunluğu | En uygun kullanım | Credit |
|---|---|---|---|
| **K2.6** | Standart / Gelişmiş | Hızlı sohbetler ve soru-cevap; daha kısa yanıt süresi | **Üyelik credit’leri kullanılmaz** |
| **K3** | Standart / Gelişmiş / Ekstrem | En güçlü genel kapasiteyle sohbetler ve Agent görevleri | Credit’lerden düşülür |
| **K3 Cluster** | Standart / Gelişmiş / Ekstrem | Büyük ölçekli arama, toplu işleme ve yüksek hacimli görevleri tek seferde tamamlama | Credit’lerden düşülür |

- **K3**, `.pptx`, `.docx`, `.xlsx` ve `.pdf` gibi düzenlenebilir belgeleri uçtan uca üretebilir; **K2.6** ise hızlı soru-cevap için optimize edilmiştir ve PPT taslakları, Word gövde metinleri, kod ve benzeri yalnızca metin çıktıları üretir.
- **Görsel / video / ses üretimi** için “+” → Eklentiler’e tıklayın, ardından ilgili özelliği seçip **K3** ile kullanın.

## Düşünme yoğunluğu: Standart / Gelişmiş / Ekstrem

Düşünme yoğunluğu arttıkça model daha kapsamlı akıl yürütür ve genel olarak sonuç daha akıllı olur; ancak bu aynı zamanda **daha fazla token kullanır**.

- **Hız ve daha düşük credit kullanımı** istiyorsanız → **Standart** seçin;
- Karmaşık analizler veya zor problemler için **daha güçlü akıl yürütme** gerekiyorsa → **Gelişmiş** veya **Ekstrem** seçin (Ekstrem, K3 / K3 Cluster tarafından desteklenir).

## Agent ve Agent Cluster

- **Genel amaçlı Agent**: Web sitesi oluşturma, PPT hazırlama, Deep Research (derinlemesine araştırma) ile belge ve elektronik tablo işleme dâhil olmak üzere görevleri otomatik olarak planlar ve tamamlar.
- **Agent Cluster**: 4.000’in üzerinde paralel araç çağrısını destekler ve 300’e kadar alt ajanı (Sub-agents) paralel olarak otonom biçimde koordine edebilir. **Büyük ölçekli arama, uzun metin yazımı ve toplu işleme** gibi büyük ölçekli görevler için idealdir.

## Senaryoya göre ne seçmeli?

- **Hızlı soru-cevap ve günlük sohbetler** → K2.6 (credit kullanmaz).
- **Karmaşık sohbetler, belge yazımı / PPT ve elektronik tablo oluşturma / çok adımlı görevler** → K3.
- **Büyük ölçekli arama, toplu işleme ve çok uzun metin yazımı** → K3 Cluster.
- **Credit tasarrufu için** → K2.6 kullanın veya düşünme yoğunluğunu “Standart” olarak ayarlayın.

## SSS

### “Thinking Mode” artık kullanılamıyor mu?
Kimi, “sohbet” ve “Agent” deneyimlerini tek bir yapı altında birleştirdi; bu yüzden artık ayrı modlar değiller. “Düşünme” artık **model ve düşünme yoğunluğu seçimiyle** kontrol edilir—örneğin K3’ü daha yüksek bir düşünme yoğunluğuyla kullanmak daha kapsamlı akıl yürütme sağlar.

### K2.6 ile K3 arasındaki fark nedir?
K2.6 hızlı soru-cevap için optimize edilmiştir, daha hızlı yanıt verir ve üyelik credit’lerini kullanmaz. K3 ise en güçlü genel kapasiteye sahiptir; karmaşık sohbetlerde ve Agent görevlerinde öne çıkar, düzenlenebilir belgeleri uçtan uca üretebilir ve kullanım credit’lerden düşülür.

### K3 ile K3 Cluster arasındaki fark nedir?
K3, olağan sohbetler ve Agent görevleri için uygundur. K3 Cluster, **büyük ölçekli arama, toplu işleme ve çok uzun metin yazımı** gibi yüksek hacimli görevleri yönetmek için binlerce araç çağrısı ve yüzlerce alt ajanla büyük ölçekli paralellik kullanır.

### Tek bir turda ne kadar içerik işlenebilir?
K2.6, tek tur bağlamında yaklaşık 128K token’ı destekler (yaklaşık 50.000–60.000 Çince karakter); K3 ise 1 milyon token’lık bağlam penceresi sunar (en üst düzey üyelik avantajı gerekir). Ayrıntılar için [Bir sohbet 200.000 Çince karakteri aşarsa ne yapmalıyım?](/others/chat-issues) bölümüne bakın.
