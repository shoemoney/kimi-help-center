---
title: "Etkileşim ve giriş"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Etkileşim & giriş - Kimi Yardım Merkezi"
  description="Kimi Code CLI, yapay zekâyla verimli biçimde çalışmanızı sağlayan çeşitli etkileşim yöntemleri sunar."
/>

# Etkileşim ve giriş

Kimi Code CLI, yapay zekâyla verimli biçimde çalışmanızı sağlayan çeşitli etkileşim yöntemleri sunar.

## Thinking mode

Thinking Mode, yapay zekânın yanıt vermeden önce daha derin bir akıl yürütme yapmasını sağlar; karmaşık problemler için idealdir.

- Modelleri değiştirmek ve Thinking Mode'u açıp kapatmak için `/model` komutunu kullanın.
- Ayrıca başlatma sırasında `--thinking` bayrağıyla Thinking Mode'u etkinleştirebilirsiniz.

## Çok satırlı giriş

Çok satırlı giriş için yeni bir satır eklemek üzere **Ctrl-J** tuşlarına basın. Bu, uzun komut istemleri yazarken ya da çok satırlı kod parçaları yapıştırırken işinize yarar.

## Panodan yapıştırma

Panodaki içeriği yapıştırmak için **Ctrl-V** tuşlarına basın; hem metin hem de görseller desteklenir. Görsel yapıştırdığınızda yapay zekâ, görselin içeriğini (örneğin ekran görüntüleri, tasarım taslakları, hata ekran görüntüleri) doğrudan yorumlayabilir.

## Eğik çizgi komutları

`/` ile başlayan komutlar; oturumları, yapılandırmayı ve hata ayıklamayı denetlemek için kullanılır. Sık kullanılan komutlar şunlardır:

| Komut | Açıklama |
| --- | --- |
| `/help` | Yardım bilgilerini görüntüler |
| `/login` | Oturum açar ve yetkilendirir |
| `/model` | Modelleri ve Thinking Mode'u değiştirir |
| `/sessions` | Oturumları listeler ve aralarında geçiş yapar |
| `/clear` | Geçerli bağlamı temizler |
| `/compact` | Bağlamı sıkıştırır |
| `/init` | AGENTS.md dosyası oluşturur |
| `/exit` | CLI'dan çıkar |

Giriş alanına `/` yazdığınızda kullanılabilir komutların listesi otomatik olarak görüntülenir.

## @ ile yol tamamlama

Bir dosya veya dizin yoluna atıfta bulunmak için girişinizde `@` simgesini kullanın; sistem yolu otomatik olarak tamamlar:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "@src/utils/auth.ts dosyasını güvenlik açıkları açısından kontrol et",
    },
  ]}
/>

Yapay zekâ, atıfta bulunulan dosyanın içeriğini otomatik olarak bağlam olarak okur.

## Yapılandırılmış soru-cevap

Bazı durumlarda yapay zekâ, girişiniz için yapılandırılmış seçenekler sunar. Bir seçeneği belirlemek için **ok tuşlarını** kullanın ve onaylamak için **Enter** tuşuna basın.

## Onay isteme

Yapay zekânın dosya değişiklikleri, kabuk komutları veya başka işlemler gerçekleştirmesi gerektiğinde sizden onay ister. Şunları seçebilirsiniz:

| Seçenek | Açıklama |
| --- | --- |
| **Allow** | Bu işleme izin verir |
| **Allow for Session** | Geçerli oturumun geri kalanında benzer işlemlere, tekrar sormadan izin verir |
| **Deny** | Bu işlemi reddeder |

### YOLO modu

Yapay zekânın işlemlerine güveniyorsanız, tüm onayları atlamak için YOLO Mode'u kullanabilirsiniz:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> YOLO Mode'da yapay zekâ tüm işlemleri otomatik olarak yürütür; dikkatli kullanın. Yalnızca denetimli geliştirme ortamlarında önerilir.
