---
title: "Kimi Websites’in Full-Stack Özellikleri"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
preview_content: "Kimi Websites’in full-stack özellikleri ve mevcut sınırlamaları."
---

<SeoMeta
  title="Kimi’nin oluşturduğu web sitesi neden çalışmıyor? - Kimi Yardım Merkezi"
  description="Kimi Websites’in mevcut yetenek sınırları ve sınırlamaları hakkında bilgi edinin. Desteklenmeyen senaryolar arasında üçüncü taraf ödemeleri, OAuth ve karmaşık API entegrasyonları yer alır."
/>

# Kimi Websites’in Full-Stack Özellikleri

## Full-Stack Web Sitesi Oluşturma Yükseltmesi

Eksiksiz bir web sitesi genellikle üç bölümden oluşur: **ön yüz arayüzü, arka uç servisleri ve veri depolama**. Kimi Websites, full-stack web sitesi oluşturma özellikleriyle yükseltildi; ön yüz sayfalarından arka uç veritabanlarına kadar uçtan uca web sitesi üretimini ve dağıtımını destekler.

| Özellik         | Açıklama                                                           |
|--------------|----------------------------------------------------------------|
| Ön yüz oluşturma     | HTML/CSS/JavaScript sayfa yapısı, stillendirme ve etkileşim mantığı                    |
| Arka uç veritabanı   | Arka uç veritabanını otomatik olarak oluşturur; kalıcı veri okuma/yazma ve görsel yönetim desteği sunar               |
| Kullanıcı girişi     | Kimi hesabıyla girişi destekler; veritabanı üzerinden hesap ve parola tabanlı bir giriş sistemi de oluşturabilir           |
| Sürüm yönetimi     | Yapay zekâ sürümleri otomatik olarak commit eder ve herhangi bir geçmiş sürüme geri dönmeyi destekler                      |
| Full-stack önizleme     | Eksiksiz ön yüz ve arka uç önizlemesini destekler; bazı senaryolarda sandbox ortamının elle başlatılması gerekir                   |
| Yayınlama ve dağıtım   | Herkese açık internete dağıtmak için "Publish" düğmesine elle tıklayın. Yayınlamadan önce site yalnızca önizleme için kullanılabilir. Full-stack içerik dağıtımı desteklenir  |

## Agent Teslim Çıktıları

- Ön yüz ve arka uç kodu dâhil eksiksiz görev yürütme dosyaları
- Çevrimiçi önizlenebilen ve yayınlanabilen full-stack bir web sitesi
- `/mnt/agents/output/app/` dizininde bulunan indirilebilir bir Zip paketi

## Kullanım Senaryoları

| Senaryo             | Örnek istem                                                       |
|------------------|------------------------------------------------------------------|
| Sıfırdan bir landing page oluşturma   | Teknoloji esintili bir stile sahip, hero bölümü, özellik tanıtımı, fiyatlandırma ve CTA içeren bir SaaS ürünü pazarlama landing page’i oluştur |
| Ekran görüntüsünden yeniden oluşturma         | [Bir tasarım ekran görüntüsü yükleyin] Bu tasarımı çalıştırılabilir web sayfası koduna dönüştür               |
| Kişisel portfolyo       | Minimalist siyah-beyaz stile ve masonry tipinde görsel düzen desteğine sahip, bir fotoğrafçı için kişisel portfolyo web sitesi oluştur        |
| Veri görselleştirme sayfası     | Grafikler ve filtreleme içeren, 2025 yılı yapay zekâ şirketi finansman verilerini gösteren bir veri görselleştirme web sayfası oluştur |
| Marka web sitesi         | Morandi renk paleti kullanan; ana sayfa, ürün sayfaları ve mağaza sayfaları bulunan bir kahve markası resmî web sitesi oluştur      |
| Giriş korumalı uygulama     | İçeriklerin yalnızca giriş yaptıktan sonra görüntülenebildiği, ekip içi bir bilgi tabanı web sitesi oluştur                   |
| Veri yönetimi yönetici paneli     | Kullanıcıların veritabanına kaydedilen bilgileri gönderebildiği, yöneticilerin ise kayıt listesini görüntüleyebildiği bir etkinlik kayıt sistemi oluştur |
| Araç/hesaplayıcı    | Sade bir arayüze, birim değiştirme özelliğine ve sağlık kategorisi ipuçlarına sahip bir BMI hesaplayıcı web sayfası oluştur     |

## Mevcut Sınırlamalar

Aşağıdaki senaryolar henüz desteklenmemektedir ve gelecek sürümlerde kademeli olarak kullanıma açılacaktır:

- Stripe ve PayPal gibi üçüncü taraf ödeme entegrasyonları
- Google ve GitHub gibi üçüncü taraf OAuth girişi. Şu anda yalnızca Kimi hesabıyla giriş veya veritabanı tabanlı kullanıcı adı/parola girişi desteklenir
- Harici SaaS servislerine bağlanma gibi karmaşık sunucu tarafı API entegrasyonları
