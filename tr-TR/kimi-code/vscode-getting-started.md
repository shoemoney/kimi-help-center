---
title: "VS Code için Kimi Code hızlı başlangıç"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="VS Code için Kimi Code hızlı başlangıç - Kimi Yardım Merkezi"
  description="VS Code için Kimi Code, Visual Studio Code'a entegre bir eklentidir. Kurulumdan sonra sorular sorabilir, kod farklarını inceleyebilir ve değişiklikleri hızlıca commit'leyebilir..."
/>

# VS Code için Kimi Code hızlı başlangıç

<Callout type="warning">
**VS Code Eklentisi Uyumluluk Bildirimi**

VS Code için Kimi Code şu anda yalnızca eski Python CLI kullanıcılarının yeni kurulumlarına açıktır. Eklentiyi zaten kurmuş olan mevcut kullanıcılar, yeni CLI'a yükselttikten sonra kullanmaya devam edebilir. TS sürümü CLI kullanıcıları için kurulum şu anda desteklenmemektedir.
</Callout>

VS Code için Kimi Code, Visual Studio Code'a entegre bir eklentidir. Kurulumdan sonra doğrudan düzenleyici içinde sorular sorabilir, kod farklarını inceleyebilir ve değişiklikleri hızlıca commit'leyebilirsiniz. 

Eklenti, başvurduğunuz dosyaların içeriğini okuyabilir ve değişiklik önerilerini görsel bir arayüz üzerinden gösterip onayınızdan sonra uygulayabilir. Tüm akış sizin kontrolünüzde kalırken geliştirme verimliliğini de önemli ölçüde artırır.

Bu eklenti, VS Code içinde aşağıdakileri destekleyen yerel bir sohbet paneli sunar:
- `@` simgesiyle dosya veya klasörlere başvurma.
- `/` komutlarıyla proje taramaları yürütme ve bağlam yönetimi.
- Geri alma desteğiyle dosya değişikliklerini gösteren fark görünümleri.
- Harici araçları çağırmak için MCP sunucularını entegre etme.

---

## Kurulum

1.  **Ön koşullar**: Bir Kimi hesabı aboneliğine veya bir Kimi API anahtarına ihtiyacınız vardır.
2.  **Marketplace**: [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code) üzerinden kurun.

<Callout type="tip">
Eklenti kurulumdan sonra görünmüyorsa, lütfen VS Code'u yeniden başlatın veya komut paletinde **Developer: Reload Window** komutunu çalıştırın (Mac: `Cmd+Shift+P`, Win/Linux: `Ctrl+Shift+P`).
</Callout>

---

## Kimlik Doğrulama

Kimi Code iki kimlik doğrulama modunu destekler. **Dişli simgesi** aracılığıyla modlar arasında istediğiniz zaman geçiş yapabilirsiniz.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="Kimlik doğrulama ayarları"
  width={800}
  height={450}
/>

- **Kimi Hesabı Modu**: Tarayıcınız üzerinden yetkilendirmek için giriş düğmesine tıklayın.
- **API Anahtarı Modu**: Bir API anahtarını zaten yapılandırdıysanız girişi atlamak için tıklayın.

---

## Tipik İş Akışları

Kod Okuma: Bir dosya veya klasör seçmek için `@` yazın, kod akışının açıklanmasını isteyin ve ardından gelen soruları sormaya devam edin.

Yeniden Düzenleme: `@src/feature/` gibi hedef koda başvurun, bir yeniden düzenleme planı isteyin, farkı inceleyip seçici olarak onaylayın ve gerektiğinde geri almayı kullanın.

Hata Ayıklama: Hata mesajlarını veya yığın izlerini yapıştırın, ilgili dosyalara başvurun, tanı ve düzeltme isteyin, ardından önerilen değişiklikleri onaylayın.

Proje Genel Bakışı: `@src/services/` gibi bir klasöre başvurun, bir modül haritası veya mimari özeti isteyin ve bağımlılıklar ya da zayıf noktalar hakkında sorular sormaya devam edin.

---

## Komutlar ve Kısayollar

Komutları hızlıca test etmek veya temel kısayollara başvurmak için `CodePreview` kullanın:

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Focus Kimi input box\nAlt+K : Insert current file reference\nCtrl+N : New conversation",
    },
  ]}
/>

| Kısayol | İşlev |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Kimi giriş kutusuna odaklan |
| `Alt+K` | Geçerli dosya başvurusunu ekle |
| `Ctrl+N` / `Cmd+N` | Yeni konuşma |
| `↑` / `↓` | Giriş geçmişine göz at |

<Callout type="info">
Daha fazla komuta erişmek için komut paletine **Kimi Code** yazın: yeni sekmede aç, kenar çubuğunda aç veya oturumları yönet.
</Callout>
