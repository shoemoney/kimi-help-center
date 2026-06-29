---
title: "K2.6 Agent Swarm [Beta]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [Beta] - Kimi Yardım Merkezi"
  description="K2.6 Agent Swarm Beta, en fazla 300 alt ajanı paralel çalışacak şekilde koordine eden bir &quot;yatay ölçeklendirme&quot; mimarisidir — önceden tanımlanmış roller veya elle hazırlanmış..."
/>

# K2.6 Agent Swarm [Beta]

<Callout type="info">
**K2.6 Agent Swarm [Beta]**, en fazla 300 alt ajanı paralel çalışacak şekilde koordine eden bir "yatay ölçeklendirme" mimarisidir — önceden tanımlanmış rollere veya elle hazırlanmış iş akışlarına gerek duymaz. Görevleri tek ajanlı yürütmeye kıyasla yaklaşık **4,5 kat daha hızlı** tamamlar.
</Callout>

Moonshot AI, 27 Ocak 2026'da Kimi K2.5'i yayımlayarak Agent Swarm [Beta]'yı tanıttı. 20 Nisan 2026'da ise Kimi K2.6'yı yayımlayıp açık kaynak olarak sundu ve Agent Swarm mimarisine kapsamlı yenilikler getirdi:
- Aynı anda en fazla **300 alt ajan**
- Görev başına **4.000'den fazla** araç çağrısı
- Tek ajanlı sıralı yürütmeye göre **4,5 kat daha hızlı**

## Bunun arkasındaki hikâye

2025 yılında yapay zekâ sektörüne hâkim olan anlatı, dikey ölçeklendirme üzerine kuruluydu — daha büyük modeller, daha fazla parametre. Ancak bu yaklaşım yapısal bir tavana takılır: tek bir sıralı yürütme darboğazı.

Agent Swarm gerçek bir senaryodan doğdu: Ekip üyelerimizden biri günlük hisse senedi bilgisi toplama işini otomatikleştirmeye çalışırken 100 satırlık if-else koduyla karşılaşınca şunu fark etti: "Aslında elle çok ajanlı bir sistem yazıyorum." Madem modeller araç kullanabiliyor, neden kendi mimarilerini kuramasınlar?

Agent Swarm, kendi kendini tasarlayan bir örgütsel yapıdır — insanlar tarafından değil, yapay zekâ tarafından tasarlanır. Ana Ajan (orkestratör), en fazla 300 alt ajanı özerk biçimde yönetir ve en fazla 4.000 paralel iş akışı adımı yürütür.

<Frames
  src="./images/swarm/swarm.png"
  alt="swarm"
/>

K2.6 Agent Swarm [Beta], PARL (Parallel-Agent Reinforcement Learning) eğitim yöntemini kullanır. Tek ajanlı yaklaşımlarla karşılaştırıldığında, büyük ölçekli arama senaryolarında kritik adımları 3–4,5 kat azaltır.

## Nasıl kullanılır?

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="screenshot 8"
/>

**Erişim Noktaları:**
- **Web**: [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Mobil**: Kimi uygulaması → Modu değiştir → K2.6 Agent Swarm [Beta] seçin

<Callout type="warning">
**Beta Erişimi**: K2.6 Agent Swarm [Beta] şu anda Moderato, Allegretto, Allegro ve Vivace üyelerine açıktır. Görevler, standart Agent görevlerine kıyasla çok daha fazla quota tüketir.
</Callout>

**Adımlar:**
1. Görevinizi tanımlayıp gönderin (örneğin, "200'den fazla Paul Graham makalesini topla")
2. Gerçek zamanlı ilerlemeyi izleyin: görev listesi oluşturma, alt ajan üretme, paralel yürütme
3. Çıktıları alın: kod projeleri, dosya klasörleri, veri analizleri, Office belgeleri
4. Sonuçları önizleyin, indirin veya paylaşın
5. Sonraki turlarda devam etmek için tek K2.6 Agent moduna geçin

## Kullanım senaryoları

### Ölçekli keşif

**Örnek 1: 100 YouTube Nişinde İlk 3 İçerik Üreticisi**

K2.6 Agent Swarm [Beta], paralel arama için 300 alt ajan oluşturdu ve kanal adları, abone sayıları ve açıklamalarla yapılandırılmış tablolar üretti.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="Sonucu görüntüle" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**Örnek 2: 200'den Fazla Paul Graham Makalesini Toplama**

Agent Swarm, 200'den fazla makaleyi arayıp indirmek, sınıflandırmak ve özetlemek üzere alt ajanlar görevlendirdi ve bunları temalı klasörlere yerleştirdi.

<Chat title="Sonucu görüntüle" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### Ölçekli üretim

**Örnek: 40 PDF'ten 100 Sayfalık Literatür Taraması**

K2.6 Agent Swarm [Beta], her biri bir bölümden sorumlu olan birden çok yazma odaklı alt ajan görevlendirdi. Nihai çıktı: atıflar, metodoloji grafikleri ve atıf ağı analizi içeren 100 sayfalık akademik bir belge.

<Frames
  src="./images/swarm/literature-review.png"
  alt="literature review"
/>

### Ölçekli bakış açısı

**Örnek: Ürün Lansman Stratejisinin Uzman İncelemesi**
Agent Swarm, bir lansman stratejisini değerlendirmek için farklı bakış açılarına sahip uzman alt ajanlar (Ürün Müdürü, Yatırımcı, Müşteri Başarısı) görevlendirdi.

<Frames
  src="./images/swarm/expert-review.png"
  alt="expert review"
/>

<Chat title="Sonucu görüntüle" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**Örnek: *Üç Cisim Problemi*'nin 20 Farklı Edebi Üslupta Yeniden Yazılması**
20 "yazar" alt ajanı, Virginia Woolf'tan Borges'e ve Kafka'ya kadar birbirinden farklı üsluplarda bağımsız olarak metinler oluşturdu.

<Chat title="Sonucu görüntüle" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## Teknik ayrıntılar

**Temel Mimari: Komutan + Uzmanlar**

- **Orkestratör** = Koç/Komutan: Büyük resmi görür, stratejiyi belirler
- **Alt ajanlar** = Oyuncular: Her biri belirli bir role odaklanır

**Anahtar Tasarım: Oyuncuları Dondur, Yalnızca Koçu Eğit**

Tüm alt ajanlar mevcut yeteneklerini korur; yalnızca orkestratör pekiştirmeli öğrenme yoluyla gelişir. Bu, net bir hesap verebilirlik ve eğitim kararlılığı sağlar.

**"Tembelliği" Önleme:**
- **Sıralı çöküş**: Orkestratörün her şeyi tek bir alt ajana devretmesi
- **Sahte paralellik**: Ölçütleri kandırmaya yönelik anlamsız alt görevler

**Çözüm: Üç Boyutlu Ödül Mekanizması**
1. Nihai sonucun kalitesi
2. Gerçekleştirilen gerçek paralellik
3. Alt görev tamamlanma oranı

**Kritik Adımlar Ölçütü**

Agent Swarm, her aşamada en yavaş alt ajanın süresini hesaplar. Bu, körü körüne görev bölmek yerine sürecin gerçek anlamda optimize edilmesini zorunlu kılar.

**Bağlam Parçalama (Context Sharding)**

Her alt ajan kendi "not defterine" odaklanarak ilgili ayrıntıları bağımsız biçimde kaydeder. Orkestratöre yalnızca temel sonuçlar raporlanır — böylece akıl yürütme süreci korunurken bellek aşırı yüklenmez.

**Gerçek Dünya Sonuçları**

BrowseComp karşılaştırmasında:
- Doğruluk: %15,9 (tek ajan) → %33,3
- Kritik adımlar ~%40 azaldı

## Uygulama senaryoları

K2.6 Agent Swarm [Beta] özellikle şu durumlar için uygundur:
1. **Büyük ölçekli bilgi getirme**: Devasa internet verisi toplama
2. **Toplu indirme**: Büyük ölçekli dosya ve kaynak toplama
3. **Geniş kapsamlı okuma**: 100'den fazla belgeyi işleme
4. **Uzun metin yazımı**: 100.000 kelimeyi aşan içerik
5. **Karmaşık programlama**: Önyüz geliştirme, kod inceleme, yeniden düzenleme
6. **Ofis otomasyonu**: Profesyonel belgeler, elektronik tablolar, sunumlar

**İleri Okuma:**
- [Kimi Agent Swarm: Ölçekte 100 Alt Ajan](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5: Görsel Ajan Zekâsı​](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6: Açık Kaynak Kodlamada İlerleme](https://www.kimi.com/blog/kimi-k2-6)
