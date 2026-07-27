---
title: "Skills nedir?"
slug: "what-are-skills"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Skills nedir? - Kimi Yardım Merkezi"
  description="Kimi Skills'in çalışma prensiplerini, türlerini ve kullanımını öğrenin. Skills, Agent'ın belirli görevlerdeki yeteneklerini genişletmeye yarayan, talimatlar, en iyi uygulamalar, betikler ve kaynaklar içeren yeniden kullanılabilir bilgi paketleridir."
  ogType="article"
/>

# Skills nedir?

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

Skills, bir yapay zeka aracısının yeteneklerinin sınırlarını genişletmek için tasarlanmış, yeniden kullanılabilir bilgi paketleridir. Her bir skill şunları içerir:

- **Çalışma yaklaşımları ve operasyonel rehberlik** — Belirli görev türlerine uyarlanmış yöntemler.
- **En iyi uygulamalar ve standartlar** — Uyulması gereken sektör standartları ve şirket içi protokoller.
- **Betikler, araçlar ve referans kaynakları** — Yürütmeye yardımcı olacak isteğe bağlı araçlar ve materyaller.

## Nasıl kullanılır?

Bir sohbetin başında Agent, kullanılabilir skill'lerin adlarını ve kısa açıklamalarını içeren bir listeyi görür. Bir skill mevcut görevle ilgiliyse, Agent talimatların tamamını yükler ve buna göre çalışır.

## Kullanıcı Yolculuğu

Skill'leri keşfetmekten kendi skill'inizi oluşturmaya kadar izlenecek tam yol şöyledir:

1. **Skill'leri keşfedin** — Skills panelinde resmi ve önerilen skill'lere göz atarak senaryonuza uygun olanı bulun.
2. **Skill'leri yükleyin** — "+" düğmesine tıklayarak bir skill'i anında ekleyin.
3. **Skill'leri çağırın** — Sohbet kutusuna `/` yazarak bir skill seçin ya da Kimi'nin sorgunuza göre otomatik olarak bir skill tetiklemesine izin verin.
4. **Kendinizinkini oluşturun** — Mevcut skill'ler ihtiyaçlarınızı karşılamıyorsa, belge yükleyerek veya gereksinimlerinizi tanımlayarak özel bir skill oluşturun ya da `/skill-creator` ile diyalog yoluyla bir tane geliştirin.

## Skills Nasıl Çalışır?

Bir istek gönderdiğinizde Kimi Agent, mevcut görevin belirli bir skill'i içerip içermediğini değerlendirir. İçeriyorsa, ilgili skill'i otomatik olarak yükler ve görevi tamamlamak için talimatlarını izler.

Skill'ler yalnızca görevle ilgili olduğunda yüklenir; böylece diğer sohbetlerin bağlamına müdahale etmezler.

## Skills ve doğrudan komut verme: Aradaki fark nedir?

Örnek olarak haftalık rapor yazmayı ele alalım:
- **Doğrudan Komut Verme**: Kimi Agent'a doğrudan sorarsınız ve o, formatı kendi anladığı şekliyle yazar.
- **Skills Kullanma**: Bir haftalık rapor skill'i yükledikten sonra, her çıktı önceden belirlediğiniz yapı, üslup ve uzunluğa uyar; talimatları tekrar etmenize gerek kalmaz.

| | Doğrudan komut verme | Skills kullanma |
|---|---|---|
| **Her seferinde gereksinimleri açıklamak gerekir mi?** | Evet | Hayır, otomatik uygulanır |
| **Çıktı formatının kararlılığı** | Değişken | Tanımlandığı gibi tutarlı |
| **En uygun kullanım senaryosu** | Tek seferlik, geçici görevler | Tekrarlayan, sabit iş akışları |
| **Kurulum gerekir mi?** | Hayır | Oluşturma veya yükleme gerektirir |

## Skill Türleri

### (1) Resmi skill'ler ve önerilen skill'ler

**Resmi skill'ler**: Moonshot AI tarafından oluşturulur ve sürdürülür, tüm kullanıcılar için kullanılabilir. Kimi bunları ilgili senaryolarda otomatik olarak tetikler.

Yaygın resmi skill'lere örnekler:
- `docx` — Word belgeleri oluşturup düzenleyin; belge oluşturma, düzenleme, yorumlar, revizyonlar, dipnotlar, içindekiler tablosu ve Markdown'dan Word'e dönüştürme dahil her türlü .docx görevine uygundur.
- `deep-research` — Bir araç seti kullanarak derinlemesine araştırma yapın ve uzun biçimli raporlar oluşturun; en az 10 yinelemeli arama döngüsü, özyinelemeli düşünme ve zorunlu IPython görselleştirmesi gerektirir.

**Önerilen skill'ler**: Tek tıkla eklenebilen, özenle seçilmiş senaryo tabanlı skill'ler; yatırım araştırması ve belge biçimlendirme gibi yaygın kullanım senaryolarını kapsar.

Yaygın önerilen skill'lere örnekler:
- `sop-writer` — İş süreçlerini; süreç akış şemaları, RACI matrisleri, ayrıntılı operasyonel adımlar ve istisna yönetimi içeren eksiksiz Standart İşletim Prosedürü (SOP) belgelerine dönüştürün.
- `event-etf-study` — Bir kavram veya olaydan yola çıkarak ilgili hisse senetlerini belirleyin, piyasa değeri ağırlıklı bir ETF endeksi oluşturun, olay penceresi boyunca piyasa değeri değişimlerini analiz edin ve etkileşimli HTML kontrol panelleri üretin. Kullanıcılar kavram hisseleri, kavram ETF'leri, olay odaklı analiz veya olay araştırması hakkında sorduğunda kullanılır.

**Ofis belgesinden skill'e**: Belge yükleyerek skill oluşturun ve stil temalarını kolayca yeniden uygulayın.

### (2) Açık kaynaklı skill'ler

Uygun Skill'leri açık kaynaklı topluluklardan indirin veya yükleyin; bunları Yerel Aracılar (Kimi Code gibi) ya da Bulut Aracıları (Kimi Claw gibi) ile birlikte kullanın.

**Yaygın Yapay Zeka Skill Merkezi Platformları**

| Platform | URL | Açıklama |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | GitHub'dan SKILL.md paketlerini derleyen, Claude Code ve OpenAI Codex CLI ile uyumlu bir yapay zeka aracısı skill pazarı |
| SkillsLLM | https://skillsllm.com | Claude Code, Codex CLI ve ChatGPT için 1.600'den fazla güvenlik denetiminden geçmiş skill içeren açık kaynaklı bir yapay zeka aracısı skill pazarı |
| LobeHub Skills | https://lobehub.com/skills | Claude Code, Codex CLI ve ChatGPT ile uyumlu SKILL.md paketlerine göz atın ve bunları dağıtın |

### (3) Skill'leri özelleştirin

Kişisel iş akışlarınız ve belirli alan görevleri için kendiniz oluşturduğunuz özel skill'ler, örneğin:
- Belgelere veya sunumlara belirli stil kılavuzları uygulamak.
- Sabit şablonlara dayalı e-posta veya iletişim içeriği oluşturmak.
- Toplantı tutanaklarını belirli bir formatta düzenlemek.
- Belirli veri analizi iş akışlarını yürütmek.
