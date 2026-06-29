---
title: "Genel sorun giderme"
slug: "troubleshooting"
order: 12
extract_headings: false
preview: false
---

<SeoMeta
  title="Genel sorun giderme - Kimi Yardım Merkezi"
  description="Bu sayfa Kimi Claw için yaygın hata kodlarını ve kendi kendine onarım seçeneklerini ele alır."
/>

# Genel sorun giderme

Bu sayfa Kimi Claw için yaygın hata kodlarını ve kendi kendine onarım seçeneklerini ele alır.

## Yaygın hata kodları

| Kod | Anlamı | Ne Yapmalı |
|------|---------|------------|
| **400** | Bad Request — Hatalı biçimlendirilmiş girdi veya geçersiz parametreler | Mesajınızda desteklenmeyen içerik olup olmadığını kontrol edin, ardından tekrar deneyin. |
| **401** | Unauthorized — Kimlik doğrulama başarısız oldu | Kimi'den çıkış yapıp yeniden oturum açın. Sorun devam ederse Kimi Claw ayarlarındaki API kimlik bilgilerinizi kontrol edin. |
| **403** | Forbidden — Yetersiz izin | Üyelik seviyenizin kullandığınız özelliği desteklediğini doğrulayın. Hesabınızın kısıtlanmadığından emin olun. |
| **429** | Too Many Requests — Rate limit aşıldı | Birkaç dakika bekleyip tekrar deneyin. quota'nızı kontrol etmeyle ilgili ayrıntılar için [Görüşme Sınırları](/kimi-claw/conversation-limits) bölümüne bakın. |
| **500** | Internal Server Error — Sunucu tarafında bir şeyler ters gitti | Kısa bir süre bekledikten sonra tekrar deneyin. Sorun tekrarlanırsa aşağıdaki kendi kendine onarım seçeneklerini kullanın veya destek ekibiyle iletişime geçin. |

## Kendi kendine onarım seçenekleri

Kimi Claw, web üzerindeki **Ayarlar** bölümünden erişilebilen yerleşik onarım araçları sunar:

| Seçenek | Ne İşe Yarar |
|--------|--------------|
| **Kimi Claw'ı Yeniden Başlat** | Ağ geçidi bağlantısını yeniden başlatır. Geçici sorunların çoğunu (köprü kopmaları, geçici takılmalar) giderir. |
| **Kimi Claw'ı Onar** | Yapılandırma sorunlarını tespit edip düzelten otomatik bir tanılama çalıştırır. Basit bir yeniden başlatmanın işe yaramadığı durumlarda bunu deneyin. |
| **İlk Ayarları Geri Yükle** | Kimi Claw'ı varsayılan durumuna sıfırlar. Çalışma alanı dosyaları ve Memory korunur ancak sohbet platformu bağlantılarının (Telegram vb.) yeniden yapılandırılması gerekir. Son çare olarak kullanın. |

## Yükseltme yolu

Kendi kendine onarım seçenekleri sorunu çözmezse:

1. Son hata çıktısını yakalamak için Terminal'de `/logs` komutunu çalıştırın.
2. Ayrıntılı tanılamayı etkinleştirmek için `/debug` komutunu çalıştırın.
3. Hata ayrıntıları ve ilgili tüm günlüklerle birlikte **support@moonshot.ai** adresinden destek ekibiyle iletişime geçin.
