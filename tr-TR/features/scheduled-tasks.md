---
title: "Zamanlanmış Görevler"
slug: "scheduled-tasks"
order: 5
extract_headings: false
preview: true
preview_content: "Zamanlanmış görevler, belirlediğiniz zamanda Kimi'nin sabit bir görevi otomatik olarak çalıştırmasını sağlar — günlük özetler, haftalık izleme ve düzenli temizlikler için idealdir. Kimi ve Kimi Work masaüstü uygulamasında kullanılabilir."
---

<SeoMeta
  title="Kimi Zamanlanmış Görevler Nasıl Kullanılır? - Kimi Yardım Merkezi"
  description="Kimi zamanlanmış görevleri hakkında bilgi edinin: Kimi'nin belirlenen zamanda bir görevi otomatik çalıştırmasını sağlayın; günlük, haftalık, aylık veya tek seferlik zamanlamalar, isteğe bağlı sona erme tarihi ve daha karmaşık işler için Skills ile birleştirme olanağı. Günlük özetler, haftalık sektör takibi ve dönemsel veri temizlikleri için idealdir. Kimi ve Kimi Work masaüstü uygulamasında kullanılabilir."
/>

# Zamanlanmış Görevler

Zamanlanmış görevler, belirlediğiniz zamanda Kimi'nin sabit bir görevi otomatik olarak çalıştırmasını sağlar; böylece her seferinde görevi elle başlatmanız gerekmez. Günlük özetler, haftalık sektör takibi, dönemsel veri temizlikleri gibi düzenli ve tekrarlanan işler için idealdir.

Zamanlanmış görevler genel bir özelliktir; **Kimi** ve **Kimi Work masaüstü uygulamasında** kullanılabilir.

## Zamanlanmış görev oluşturma

İki yöntem vardır:

- **Giriş noktasından**: kenar çubuğunda "Zamanlanmış görev oluştur" seçeneğine tıklayın ve açılan pencerede görevi doldurun;
- **Konuşmadan**: zamanlama ihtiyacınızı doğal dille anlatın; Kimi sizin için başlığı, zamanlamayı ve görev içeriğini otomatik taslaklayarak bir zamanlanmış görev oluşturur.

Zamanlanmış görev şunları içerir:

- **Başlık**: görevi özetler; böylece görev listesinde kolayca bulunur;
- **Zamanlama**: günlük, haftalık, aylık veya tekrarlanmaz (tek seferlik);
- **Sona erme tarihi**: görevin ne zaman sona ereceğini belirleyebilirsiniz (oluştururken varsayılan olarak seçilidir);
- **Görev içeriği**: görevin ne yapması gerektiğini açıklayan bir istemdir. Zamanı geldiğinde Kimi bu sabit istemi çalıştırır.

## İyi bir görev istemi yazma

İyi bir görev istemi aynı anda üç şeyi belirtir:

- **Ne zaman**: ne zaman çalışacağı (belirli bir tarih / her gün bir saat / her hafta bir gün);
- **Çıktı biçimi**: sonucu nasıl istediğiniz (ana noktalar, tablo, şablon, kelime sayısı, dil);
- **Kısıtlar**: neleri yapmaması veya hangi koşulları karşılaması gerektiği (ör. 200 kelime içinde, yalnızca Çince, risk notu ekle, yalnızca 3 madde çıkar).

**Evrensel şablon**: [time] zamanında [task] yap, çıktıyı [format] biçiminde ver ve [constraints] koşullarına uy.

Kopyalayıp uyarlayabileceğiniz birkaç örnek:

<CodePreview
  files={[
    {
      name: "market-news.txt",
      language: "text",
      content: "Her gün 9:00'da en güncel piyasa haberlerini 3 ana nokta ve 1 risk notu olarak, Çince ve 200 kelime içinde özetle.",
    },
    {
      name: "daily-report-reminder.txt",
      language: "text",
      content: "1 saat sonra bugünkü iş raporumu tamamlamamı hatırlat ve rapor şablonunu ekle (dört bölümlü yapı).",
    },
    {
      name: "bedtime-reminder.txt",
      language: "text",
      content: "Bu akşam 22:30'da şunları hatırlat: bilgisayarı kapat, hazırlan, yatmaya hazır ol. Üslubun yumuşak olsun.",
    },
  ]}
/>

## Zamanlanmış görevleri yönetme

**Görev listesi**, tüm zamanlanmış görevlerinizi gösterir (zamana göre sıralı). Her görev kartında şunları yapabilirsiniz:

- görevi açıp kapatma;
- diğer işlemler: görevi bulma, şimdi bir kez çalıştırma, düzenleme ve silme.

Bir konuşmada zamanlanmış görev; başlığını, sıklığını, bir sonraki çalışma zamanını ve içeriğini gösteren bir **görev kartı** olarak görünür — buradan da şimdi çalıştırabilir, duraklatabilir, düzenleyebilir veya silebilirsiniz.

## Çalıştırma ve bildirimler

- Zamanı geldiğinde Kimi, görevde ayarlanan sabit istemi çalıştırır;
- Her çalıştırma, okunmadı olarak işaretlenen bir bildirim oluşturur; her çalıştırmanın sonucunu görüntüleyebilir ve ilgili konuşmaya geçebilirsiniz;
- Okunma durumu web ve mobil arasında senkronize edilir;
- Bir görev çalıştıktan sonra sonuç konuşmasında **takip soruları sormaya devam etmek için bir model seçebilir** ve "/" yazarak **eklentileri ve Skills'i çağırabilirsiniz**.

## Skills ile birlikte kullanma

Zamanlanmış görevler, daha karmaşık işleri yürütmek için **Skills** ile birlikte kullanılabilir — özellikle Kimi'nin **finans** Skills'i (piyasa verileri, bilanço analizi vb.).

Bir Skill'i kullanmadan önce **önce kurup test edin**, beklendiği gibi çalıştığını doğrulayın, ardından zamanlanmış görevde kullanın.

## Sona erme

Güncelliğini yitirmiş görevlerin ortada kalmasını önlemek için görev oluştururken varsayılan olarak bir sona erme tarihi seçilir. Varsayılan sona erme süreleri şunlardır:

- Günlük: +7 gün;
- Haftalık: +1 ay;
- Aylık: +3 ay.

<Callout type="info">
Kimi Work masaüstü uygulamasında yerel olarak çalışan zamanlanmış görevler yukarıdaki sona erme kurallarına tabi değildir; yerel görevler uygulama açıkken kendi döngülerinde çalışır, uygulama kapalıyken kaçırılan tetiklemeler daha sonra çalıştırılmaz.
</Callout>

## Quota'lar ve paketler

Zamanlanmış görevlerde sınır, **aynı anda etkin tutabileceğiniz görev sayısı** için geçerlidir (oluşturabileceğiniz görev sayısında sınır yoktur). Etkin görev sayısı üyelik paketinize göre değişir:

| Paket | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Zamanlanmış görevler | 2 | 6 | 15 | 20 | 25 |

- Etkin görev sınırına ulaşmışken yeni bir görev oluşturursanız, yeni görev **etkin değil olarak kaydedilir**; yükseltme yapmanız veya bazı görevleri kapatmanız istenir;
- Etkin görev sınırınız düşerse (paket düşürme veya avantajların sona ermesi), sınırı aşan görevler otomatik olarak duraklatılır.

En güncel quota'lar için [üyelik paketleri sayfasına](/membership/membership-pricing) bakın.

<Callout type="tip">
**İpucu**: Bir görevi zamanlamadan önce içeriğini normal bir konuşmada bir kez deneyin veya doğrulamak için "Şimdi bir kez çalıştır" seçeneğini kullanın — zamanlamaya güvenmeden önce ifadenin net olduğundan ve sonucun beklediğiniz gibi geldiğinden emin olun. Görev bir Skill'e bağlıysa önce o Skill'i kurup test edin.
</Callout>

## SSS

### Oluşturabileceğim zamanlanmış görev sayısında sınır var mı?
Oluşturabileceğiniz görev sayısında sınır yoktur; ancak **aynı anda etkin** tutabileceğiniz görev sayısı paketinize göre değişir. Etkin sınırı aştığınızda yeni görev etkin değil olarak kaydedilir; etkinleştirmek için paketinizi yükseltebilir veya bazı görevleri kapatabilirsiniz.

### Görevlerin çalışması için bilgisayarımı ya da uygulamayı açık tutmam gerekir mi?
Kimi'de oluşturulan zamanlanmış görevler bulutta çalışır — bir istemciyi açık tutmanız gerekmez. Kimi Work masaüstü uygulamasında yerel olarak çalışan görevler için uygulamanın açık olması gerekir; uygulama kapalıyken kaçırılan tetiklemeler daha sonra çalıştırılmaz.

### Zamanlanmış görev çalışırken model seçebilir miyim?
Görev oluştururken model seçemezsiniz. Görev çalıştıktan sonra sonuç konuşmasında takip soruları sormaya devam etmek için bir model seçebilir ve "/" yazarak eklentileri ve Skills'i çağırabilirsiniz.

### Etkin görev sınırına ulaşırsam ne olur?
Artık ihtiyaç duymadığınız görevleri kapatın veya daha yüksek etkin görev sınırı için paketinizi yükseltin. Ayrıntılar için [üyelik paketleri sayfasına](/membership/membership-pricing) bakın.
