---
title: "Kimi Sheets kullanım senaryoları ve komut kütüphanesi"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Sheets kullanım senaryoları & komut kütüphanesi - Kimi Yardım Merkezi"
  description="Finansal değerlemeden storyboard oluşturmaya kadar Kimi Sheets için örnek kullanım senaryoları ve komutlar."
/>

# Kimi Sheets kullanım senaryoları

<Callout type="info">
Finansal değerlemeden storyboard oluşturmaya kadar Kimi Sheets için örnek kullanım senaryoları ve komutlar.
</Callout>

## Finansal değerleme

Kimi, tıpkı bir finansal analist gibi gerçek finansal verileri toplar, bir DCF değerleme modeli kurar ve simüle edilmiş bir şirket değerlemesi gerçekleştirir.

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**Örnek komut**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "XX Healthcare için bir DCF değerlemesi yap. Tüm değerleme sürecini ve verileri\nbir Excel elektronik tablosuna aktar, veri kaynaklarını belirt, pazar büyüklüğü, büyüme oranları ve pazar payı gibi\ntahmini rakamların ardındaki gerekçeyi açıkla ve makroekonomik ortam analizini de dahil et.",
    },
  ]}
/>

## Storyboard oluşturma

Kimi, tıpkı bir storyboard sanatçısı gibi süre, çekim açıklamaları, dış ses, ses efektleri ve referans kareleri içeren Excel formatında video storyboard senaryoları oluşturur.

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="Transcript"
/>

**Örnek komut**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Kimi AI'nin yeni sürümü olan OK Computer hakkında bir 3D tanıtım videosu için Excel'de bir\nstoryboard senaryosu oluştur — bu sürüm Office belgeleri oluşturmayı ve düzenlemeyi destekler\n(ör. Word'de uzun tez biçimlendirme, Excel'de veri modelleme ve analizi,\notomatik slayt oluşturma).\n\nExcel şunları içermeli:\nA Sütunu: sıra numarası (1-20)\nB Sütunu: kümülatif süre (saniye)\nC Sütunu: çekim süresi (saniye)\nD Sütunu: çekim açıklaması (3D / kamera hareketi)\nE Sütunu: anlatı/metin (anlatıyı ekrandaki metinden ayırmak için farklı arka plan renkleri kullan)\nF Sütunu: ses efektleri/fon müziği (ayırt etmek için farklı yazı tipi renkleri kullan)\nG Sütunu: storyboard kareleri (her çekim için bir görsel oluştur — klasik siyah beyaz çizgi eskiz stilini kullanarak görsel tutarlılığı koru)\n\nYaratıcı taslağı, senaryoyu ve storyboardları bağımsız olarak tasarla, ardından\nbu senaryoyu tamamlamak için kareleri oluştur ve her şeyi özenli bir Excel biçiminde sun.",
    },
  ]}
/>

## Daha fazla senaryo ve örnek komut

| Senaryo | Örnek komut |
|------|-----------|
| Finansal modelleme | XX Şirketi için bir DCF değerlemesi yapın — tüm süreci ve verileri Excel'e aktarın, kaynakları belirtin ve büyüme oranları gibi temel varsayımların arkasındaki mantığı açıklayın |
| Sektör verisi karşılaştırması | Yurt içindeki ilk 20 NEV şirketini araştırın — piyasa değeri, 2025 satış adetleri, amiral gemisi modeller ve son haberleri bir karşılaştırma tablosunda listeleyin |
| Literatür kataloglama | Son üç ayda LLM çıkarım optimizasyonu üzerine yayınlanmış makaleleri arayın — başlık, yazarlar, temel yöntem ve başlıca katkıları içerecek şekilde Excel'de düzenleyin |
| Çoklu sayfa birleştirme | [12 aylık satış Excel dosyasını yükleyin] Bu 12 sayfayı yıllık bir özette birleştirin, aydan aya büyüme oranlarını hesaplayın ve sayfalar arası bağlantı için formüller kullanın |
| Satış müşteri adayı çıkarma | [Fuar PDF/görsellerini yükleyin] Tüm katılımcı bilgilerini çıkarın ve şirket adı, iletişim bilgisi ve ürün kategorisi içeren 1.000 satırlık bir satış müşteri adayı Excel dosyasında düzenleyin |
| Proje yönetimi | Görev listesi, sorumlular, ilerleme durumu, Gantt şeması ve sayfalar arası bağlantı içeren bir PMO proje yönetimi Excel'i oluşturun |
| Veri görselleştirme | Bu satış verisi Excel'ini trend çizgi grafikleri, bölgesel dağılım grafikleri ve tamamlanma oranı halka grafikleri içeren görsel bir kontrol paneline dönüştürün |
