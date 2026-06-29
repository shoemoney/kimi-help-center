---
title: "Kimi Sheets kullanım senaryoları ve komut kütüphanesi"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Sheets kullanım senaryoları \u0026 komut kütüphanesi - Kimi Yardım Merkezi"
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
      content: "Perform a DCF valuation of XX Healthcare. Put the entire valuation process and data\ninto an Excel spreadsheet, cite data sources, provide the reasoning behind estimated\nfigures such as market size, growth rates, and market share, and incorporate macro\nenvironment analysis.",
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
      content: "Create a storyboard script in Excel for a 3D promotional video about Kimi AI's new\nupgrade — OK Computer — which supports generating and editing Office documents\n(e.g., long-form thesis formatting in Word, data modeling and analysis in Excel,\nautomatic slide generation).\n\nThe Excel should include:\nColumn A: Sequence number (1-20)\nColumn B: Cumulative duration (seconds)\nColumn C: Shot duration (seconds)\nColumn D: Shot description (3D / camera movement)\nColumn E: Narration/text (use different background colors to distinguish narration\nfrom on-screen text)\nColumn F: Sound effects/BGM (use different font colors to distinguish)\nColumn G: Storyboard frames (generate an image for each shot — maintain visual\nconsistency using the classic black-and-white line sketch style)\n\nPlease design the creative outline, script, and storyboards independently, then\ngenerate frames to complete this script, presented in a polished Excel format.",
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
