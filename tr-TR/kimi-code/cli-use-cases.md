---
title: "Yaygın kullanım senaryoları"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Yaygın kullanım senaryoları - Kimi Yardım Merkezi"
  description="İşte Kimi Code CLI'yi günlük geliştirme süreçlerinde kullanmaya yönelik bazı tipik senaryolar; her biri referans olması için örnek istemlerle birlikte sunuluyor."
/>

# Yaygın kullanım senaryoları

İşte Kimi Code CLI'yi günlük geliştirme süreçlerinde kullanmaya yönelik bazı tipik senaryolar; her biri referans olması için örnek istemlerle birlikte sunuluyor.

## Yeni özellikler geliştirin

İhtiyaçlarınızı doğal dille anlatın; yapay zeka ilgili kodu otomatik olarak okur, yeni kod yazar ve sonuçları doğrular.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kullanıcı listesi sayfasına kayıt tarihine göre sıralama özelliği ekle — hem ön uçta hem arka uçta değişiklik gerekiyor",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Token bucket algoritmasını kullanarak bir rate limiter ara yazılımı oluştur ve her IP'yi dakikada 60 istekle sınırla",
    },
  ]}
/>

## Hataları düzeltin

Hata mesajını doğrudan yapay zekaya yapıştırın; kök nedeni otomatik olarak bulur ve bir çözüm sunar.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "npm test çalıştırdıktan sonra şu hatayı aldım, lütfen düzelt:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "CI hattı lint aşamasında başarısız oldu. Günlük burada: ... Lütfen düzelt",
    },
  ]}
/>

## Bir projeyi kavrayın

Yeni bir projeye başlarken ya da belirli bir kod parçasını anlamanız gerektiğinde sadece sorun.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bu projenin genel mimarisi nasıl? Ana modüller neler?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/auth/middleware.ts ne işe yarıyor? Kimlik doğrulama akışı nasıl çalışıyor?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bu projede veritabanı geçişlerinin nasıl yönetildiğini açıkla",
    },
  ]}
/>

## Küçük görevleri otomatikleştirin

Toplu kod değişiklikleri, dokümantasyon ekleme, test oluşturma ve benzeri tekrarlayan işler için idealdir.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/utils/ dizinindeki tüm dışa aktarılan fonksiyonlara JSDoc yorumları ekle",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "UserService sınıfının tüm genel metotları için birim testleri oluştur",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Projedeki tüm var bildirimlerini const ya da let ile değiştir",
    },
  ]}
/>

## Genel görevler

Kimi Code CLI yalnızca kodlamayla sınırlı değildir; araştırma, veri analizi, toplu dosya işlemleri ve daha fazlasını da üstlenebilir.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Günümüzde yaygın olarak kullanılan Node.js ORM kütüphanelerini araştır ve artılarıyla eksilerini karşılaştır",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "logs/ dizinindeki son 7 günün erişim günlüklerini analiz et ve en çok istek alan ilk 10 yolu listele",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "data/ dizinindeki tüm CSV dosyalarını tek bir dosyada birleştir ve yinelenen satırları kaldır",
    },
  ]}
/>
