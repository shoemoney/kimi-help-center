---
title: "Veri işleme ve güvenlik"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="Veri işleme \u0026 güvenlik - Kimi Yardım Merkezi"
  description="Kimi API için kullanıcı veri güvenliği ve gizlilik koruması SSS."
/>

# Veri işleme ve güvenlik

<Callout type="info">
Kimi API için kullanıcı veri güvenliği ve gizlilik koruması SSS.
</Callout>

Kimi API, kullanıcı veri güvenliğini ve gizlilik korumasını son derece ciddiye alır.
## Kullanıcı verileri model eğitiminde kullanılıyor mu?

<Callout type="warning">
**Hayır.** API üzerinden gönderilen kullanıcı verileri (girdi içeriği ve model çıktısı dâhil) **Kimi'nin modellerini eğitmek veya iyileştirmek için kullanılmaz**. Verileriniz yalnızca mevcut API isteğini yerine getirmek için kullanılır ve eğitim amacıyla kalıcı olarak saklanmaz.
</Callout>

## Özel veri güvenliği nasıl sağlanır?
Kimi API, özel verilerinizi korumak için çok katmanlı önlemler kullanır:
| Önlem | Açıklama |
| --- | --- |
| **Aktarımda Şifreleme** | Tüm API iletişimi HTTPS/TLS kullanır |
| **Veri İzolasyonu** | Farklı kullanıcılara ait veriler sıkı şekilde birbirinden ayrılır |
| **Eğitimde Kullanılmaz** | API verileri model eğitiminde kullanılmaz |
| **Erişim Denetimi** | Yalnızca yetkili erişim için API Key kimlik doğrulaması |
| **Uyumluluk Sertifikaları** | Platform, ilgili güvenlik sertifikalarına sahiptir |

<Callout type="tip">
Daha yüksek güvenlik gereksinimleri için kurumsal düzeyde güvenlik çözümlerini öğrenmek üzere satış ekibiyle iletişime geçin.
</Callout>

## İçerik güvenliği denetimi
Kimi API, yerleşik bir içerik güvenliği denetim mekanizması içerir:
- Sistem, yasaklı içeriği (yasa dışı faaliyet, şiddet, müstehcen materyal vb.) otomatik olarak tespit edip filtreler
- Tetiklendiğinde API, uygun bir hata yanıtı döndürür
- İçerik denetimi, özgün verilerinizi saklamaz veya açığa çıkarmaz
- Bir denetimin yanlışlıkla tetiklendiğini düşünüyorsanız `request_id` ile destek ekibine başvurun
## Yüklenen dosyalar nasıl silinir?
Dosya API'si aracılığıyla yüklenen dosyalar istediğiniz zaman silinebilir:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

Dosyayı silmek için istek başlığına API Key'inizi ekleyin ve dosya kimliğini sağlayın. Silindikten sonra dosyaya artık başvurulamaz ve verileri sunucudan kaldırılır.

<Callout type="info">
Yüklenen dosyaları konsoldaki dosya yönetimi sayfasından da görüntüleyip silebilirsiniz.
</Callout>
