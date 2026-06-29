---
title: "Agent'ın oluşturduğu web sitesi neden çalışmıyor?"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Agent'ın oluşturduğu web sitesi neden çalışmıyor? - Kimi Help Center"
  description="Tam yığın bir proje; ön yüz arayüzü, arka uç servisleri ve kalıcı depolamayı içerir. Kimi Agent bu üçünü de oluşturabilir, ancak çalışmanın başarısı ortam..."
/>

# Neden çalışmıyor?

<Callout type="tip">
Tam yığın bir proje **ön yüz arayüzü, arka uç servisleri ve kalıcı depolamayı** içerir. Kimi Agent bu üçünü de oluşturabilir, ancak başarılı bir şekilde çalışması ortam kurulumuna, kimlik doğrulama yapılandırmasına ve yayınlama adımlarına bağlıdır.
</Callout>

Uygulamanız beklediğiniz gibi çalışmıyorsa, sorun genellikle eksik bir arka uç yeteneği değildir. Çoğunlukla eksik kalan bir önizleme, kimlik doğrulama, veritabanı veya yayınlama adımıdır.

## Tam yığın iş akışı

1. **Oluşturma**: Agent, ön yüz + arka uç + veritabanı şemasını ve veri mantığını oluşturur.
2. **Önizleme**: Yerel tam yığın test için sandbox içinde çalıştırılır (bazı durumlarda manuel başlatma gerekebilir).
3. **Sürüm**: Agent, sürüm araçlarını kullanabilir ve otomatik olarak commit oluşturabilir.
4. **Geri Alma**: Önceki herhangi bir commit sürümüne dönebilirsiniz.
5. **Yayınlama / Paylaşma**: Uygulama, ancak siz manuel olarak yayınladıktan sonra herkese açık bir URL'ye dağıtılır.

## Sık karşılaşılan hata nedenleri

| Belirti | Olası Neden | Ne Yapmalı |
|----------|-------------|------------|
| Ön yüz yükleniyor ama API başarısız oluyor | Sandbox çalışma zamanı başlatılmamış | Sandbox'ı başlatın ve önizlemeyi yeniden çalıştırın |
| Veriler kaydedilmiyor veya görünmüyor | Veritabanı başlatılmamış veya taşınmamış | Veritabanı kurulumunu ya da taşıma adımını yeniden çalıştırın |
| Giriş başarısız oluyor | Kimlik doğrulama akışı doğru yapılandırılmamış | Kimi Login yapılandırmasını ve geri çağırma ayarlarını doğrulayın |
| Başkaları uygulamanıza erişemiyor | Uygulama yayınlanmamış | Dağıtmak için **Yayınla/Paylaş** butonuna tıklayın |
| Son değişiklikler işlevselliği bozdu | En son sürümde gerileme | Kararlı bir commit'e geri dönün |

## Kimlik doğrulama desteği

- **1. Aşama**: **Kimi Login** desteklenir.
- **Sonraki aşama**: Ek OAuth sağlayıcıları eklenecektir.
- **Ayrıca desteklenir**: Standart veritabanı tabanlı e-posta/parola hesap girişi Agent tarafından oluşturulabilir.

## Sürüm ve geri alma

- Agent, yeni sürüm araçlarını destekler ve geliştirme sırasında bağımsız olarak `git commit` gerçekleştirebilir.
- Sürüm geçmişini görüntüleyebilir ve gerektiğinde seçtiğiniz bir commit'e geri dönebilirsiniz.

## Önizleme ile Yayınlama karşılaştırması

- **Önizleme**: Sandbox içinde geliştirme ve test içindir; bazı senaryolarda sandbox'ın manuel olarak başlatılması gerekebilir.
- **Yayınla/Paylaş**: Uygulamanızı herkesin erişebileceği bir ortama dağıtan manuel bir kullanıcı işlemidir.

## Agent en çok şunlar için uygundur

- Tam yığın ürünlerin hızlı prototiplenmesi
- Kalıcı depolama içeren CRUD akışları
- Temel yönetim veya arka ofis veri işlemleri
- Giriş, veri ve dağıtım akışı içeren uçtan uca demo projeleri

## Mevcut sınırlar

- Gelişmiş üretim operasyonları (örneğin, karmaşık SRE ve çok bölgeli HA) hâlâ manuel mühendislik çalışması gerektirir.
- Yüksek riskli üretim senaryolarında, yayımlamadan önce güvenlik incelemesi ve dağıtım sıkılaştırması yapın.
