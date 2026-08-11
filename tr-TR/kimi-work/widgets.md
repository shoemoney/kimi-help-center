---
title: "Widgets"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Work Widgets - Kimi Yardım Merkezi"
  description="Kimi Work Widgets hakkında bilgi edinin: model tarafından doğrudan sohbette üretilen etkileşimli sayfalar. Sürekli güncellenen bir live widget oluşturmak için bir widget görevi bağlayın ve widget’ları Dashboard’unuza kaydedin."
/>

# Widgets

Widget, model tarafından üretilen ve sohbette anında sunulan etkileşimli bir sayfadır. Açık bir çıktı talimatı vermeniz gerekmez — model, senaryoya uyduğunda (örneğin bir harita gösterme, e-posta taslağı hazırlama, tarif düzenleme veya verileri görselleştirme) bir widget oluşturur ve yanıtı daha hızlı, daha sezgisel anlamanıza yardımcı olur.

Widget’lar, sürekli güncellemeler için yerel verilere veya harici eklentilere bağlanabilir ve uzun süreli görüntüleme ve yönetim için [Dashboard](/kimi-work/dashboard)’unuza kaydedilebilir.

## Widget Oluşturma

1. İhtiyacınızı sohbette doğal dille anlatın, örneğin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Benim için her gün sabah 9’da güncellenen günlük bir ABD teknoloji haberleri özeti widget’ı oluştur",
    },
  ]}
/>

2. Oluşturulurken widget sayfasının adım adım şekillenmesini izleyebilirsiniz;
3. Oluşturulduktan sonra widget, sohbette hemen etkileşime hazırdır.

## Widget Task ve Live Widget

- **Widget Task**: belirli koşullar sağlandığında otomatik olarak çalışan bir görevdir — bir zamanlamayla veya bir olayla tetiklenebilir.
- **Live Widget**: bir widget görevine bağlı olan ve görevin her çalışmasında içeriği otomatik olarak güncellenen widget’tır. Örneğin, "Günlük ABD Teknoloji Haberleri Özeti" widget’ı her sabah çalışan bir göreve bağlandığında, içeriği her gün otomatik olarak yenilenir.

<Callout type="info">
Aynı anda çalışabilecek widget görevi sayısında bir sınır vardır ve bu sınır plana göre değişir. Sınıra ulaştığınızda, yeni görevler oluşturmadan önce Dashboard sayfasından bazı görevleri duraklatın.
</Callout>

## Dashboard’a Kaydetme

Bir widget oluşturulduktan sonra, üzerine gelin ve "Save to Dashboard" seçeneğini belirleyerek onu bir dashboard’a kaydedin. Bir widget aynı anda birden fazla dashboard’da bulunabilir.

Dashboard’da ayrıca bir live widget’a bağlı görevi görüntüleyebilir, açıp kapatabilir ve en son 10 çalışmasını kontrol edebilirsiniz. Bkz. [Dashboard](/kimi-work/dashboard).
