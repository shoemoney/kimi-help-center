---
title: "Hesap ve kimlik doğrulama"
slug: "api-account-and-auth"
order: 9
extract_headings: true
preview: false
---

<SeoMeta
  title="Hesap ve kimlik doğrulama - Kimi Yardım Merkezi"
  description="Kimi API geliştirici hesapları, doğrulama ve kimlik doğrulama hakkında sık sorulan sorular."
/>

# Hesap ve kimlik doğrulama

<Callout type="info">
Kimi API geliştirici hesapları, doğrulama ve kimlik doğrulama hakkında sık sorulan sorular.
</Callout>

## Kişisel hesap için şirket faturası alınabilir mi?
Kişisel bir hesap **doğrudan şirket faturası alamaz**. Şirket faturası gerekiyorsa önce hesabınızı kuruluş hesabına yükseltin. Doğrulama tamamlandıktan sonra kuruluşunuzun adına fatura talep edebilirsiniz.

## Kişisel hesaptan kuruluş hesabına nasıl geçerim?
1. [platform.kimi.ai](https://platform.kimi.ai) konsolunda oturum açın.
2. **Hesap Ayarları → Doğrulama** bölümüne gidin.
3. **Kuruluş Doğrulaması** seçeneğini belirleyin ve gerekli bilgileri doldurun.
4. İnceleme için gönderin — onaylandığında hesabınız otomatik olarak dönüştürülür.

<Callout type="tip">
Yükseltmeden sonra mevcut bakiye ve kullanım verileri korunur.
</Callout>

## Kişisel doğrulama ile kuruluş doğrulaması arasındaki fark
| Konu | Kişisel | Kuruluş |
| --- | --- | --- |
| Fatura Türü | Kişisel fatura | Şirket / KDV faturası |
| Rate Limit'ler | Standart | Daha yüksek quota'lar için uygun |
| Ticari Sözleşmeler | — | Sözleşme imzalama olanağı |
| Hacim İndirimleri | — | Talep üzerine sunulur |
| Teknik Destek | Standart | Öncelikli destek |

## Hesap askıya alma kararına nasıl itiraz edilir?
API hesabınız bir ilke ihlali nedeniyle askıya alındıysa:
1. **support@moonshot.ai** adresine, konu satırı "API Hesabı İtirazı" olacak şekilde e-posta gönderin.
2. Hesap bilgilerinizi (kayıtlı e-posta adresi) ve itirazınızın açıklamasını ekleyin.
3. Ekip başvurunuzu inceleyip 1–3 iş günü içinde yanıt verir.

<Callout type="info">
**Destek E-postası**: support@moonshot.ai
</Callout>

## Kayıtlı e-posta nasıl değiştirilir?
Kayıtlı e-postanızı değiştirmek için destek ekibiyle iletişime geçin:
1. **support@moonshot.ai** adresine, konu satırı "E-posta Değişikliği Talebi" olacak şekilde e-posta gönderin.
2. Mevcut ve yeni e-posta adreslerinizi birlikte belirtin.
3. Hesap güvenliğini sağlamak için kimlik doğrulaması gerekebilir.

## Doğrulamayı tamamlamanın avantajları
- **Daha Yüksek Rate Limit'ler**: Doğrulanmış kullanıcılar daha yüksek API çağrı oranlarından yararlanabilir.
- **Tüm Özelliklere Erişim**: Bazı gelişmiş özellikler yalnızca doğrulanmış kullanıcılara sunulabilir.
- **Fatura Desteği**: Doğrulanmış hesaplar fatura talep edebilir.
- **Teknik Destek**: Doğrulanmış kullanıcılar daha yüksek öncelikli teknik destek alır.
