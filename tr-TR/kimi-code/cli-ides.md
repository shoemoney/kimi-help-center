---
title: "IDE entegrasyonu"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "ACP üzerinden Kimi Code CLI'yi IDE'nize entegre edin."
---

<SeoMeta
  title="IDE entegrasyonu - Kimi Yardım Merkezi"
  description="Kimi Code CLI'yi Agent Client Protocol (ACP) üzerinden IDE'nize entegre edin. Zed, JetBrains IDE'leri ve Paseo için kurulum kılavuzları ve sorun giderme."
/>

# Kimi Code CLI'yi IDE'lerde Kullanma

<Callout type="info">
Kimi Code CLI, [Agent Client Protocol (ACP)](https://agentclientprotocol.com/get-started/introduction) aracılığıyla IDE'lere entegrasyonu destekler ve yapay zeka destekli kodlamayı doğrudan editörünüzün içinde kullanmanıza olanak tanır.
</Callout>

## Ön koşullar

IDE'nizi yapılandırmadan önce Kimi Code CLI'nin kurulu olduğundan ve oturum açma kurulumunu tamamladığınızdan emin olun.

ACP bağdaştırıcısı `kimi acp` alt komutu olarak sunulur. IDE bunu bir alt süreç olarak başlatır ve JSON-RPC kullanarak stdin/stdout üzerinden iletişim kurar. IDE her oturum oluşturduğunda CLI mevcut kimlik doğrulama durumunu yeniden kullanır — yeniden oturum açmanıza gerek yoktur.

<Callout type="tip">
macOS'ta bir IDE GUI'sinden başlatılan alt süreçler genellikle terminal kabuğunun `PATH` değerini devralmaz. `kimi`, `/usr/local/bin` gibi bir sistem dizininde değilse, IDE yapılandırmanızda mutlak yolu kullanın. Etkin yolu bulmak için bir terminalde `which kimi` komutunu çalıştırın.
</Callout>

## Kimi Code CLI'yi Zed'de Kullanma

[Zed](https://zed.dev/), yerel ACP desteği sunan modern bir editördür.

Aşağıdakileri Zed'in `~/.config/zed/settings.json` konumundaki yapılandırma dosyasına ekleyin:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Yapılandırma alanları:

- `type`: sabit değer `"custom"`
- `command`: Kimi Code CLI yürütülebilir dosyasının yolu. `kimi`, `PATH` üzerinde değilse tam yolu kullanın (ör. `/Users/you/.local/bin/kimi`).
- `args`: başlatma argümanları. `acp` alt komutu CLI'yi ACP moduna geçirir.
- `env`: ek ortam değişkenleri; genellikle bunu boş bırakın. Zed varsayılan bir ortamı otomatik olarak ekler.

Kaydettikten sonra, Zed'in Agent panelinde yeni bir konuşma açın; yukarıdaki yapılandırmayı kullanarak bir `Kimi Code CLI` ACP alt süreci başlatacaktır. Zed'in `agent_servers` bölümünde tanımlanan MCP sunucuları da ACP protokolü aracılığıyla kimi tarafına iletilir.

## Kimi Code CLI'yi JetBrains IDE'lerinde Kullanma

JetBrains IDE'leri (IntelliJ IDEA, PyCharm, WebStorm vb.) AI chat eklentisi aracılığıyla ACP'yi destekler.

JetBrains AI aboneliğiniz yoksa, yalnızca ACP içeren senaryolarda AI chat paneline erişmek için Registry'de `llm.enable.mock.response` ayarını etkinleştirebilirsiniz. Bunu açmak için Shift tuşuna iki kez basın ve "Registry" araması yapın.

AI chat paneli menüsünde **Configure ACP agents** öğesine tıklayın ve aşağıdaki yapılandırmayı ekleyin:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains `command` alanı konusunda titizdir — her zaman bir **mutlak yol** kullanın; bunu bir terminalde `which kimi` komutunu çalıştırarak edinebilirsiniz. Kaydettikten sonra `Kimi Code CLI`, AI chat'in agent seçicisinde görünecektir.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Kimi Code CLI'yi Paseo'da Kullanma

[Paseo](https://paseo.sh/), agent CLI'lerini masaüstünüzden, web'den ve mobilden çalıştıran ve denetleyen, kendi kendine barındırılan bir orkestratördür. Bir IDE ile aynı şekilde, ACP üzerinden Kimi Code CLI'ye bağlanır.

Paseo'nun yerleşik ACP sağlayıcı kataloğundan **Kimi Code CLI** öğesini seçin veya `~/.paseo/config.json` dosyasına özel bir sağlayıcı ekleyin:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Paseo'nun genel ACP bağdaştırıcısı oturum açma akışını yönetmez; bu nedenle önce terminalden oturum açmayı tamamlayın ([Ön koşullar](#ön-koşullar) bölümüne bakın) — aksi takdirde oturum oluşturma `Authentication required` hatasıyla başarısız olur.

## Sorun giderme

- **Oturum hemen kesiliyor / IDE "agent exited" gösteriyor**: genellikle yanlış bir `command` yolu veya oturum açılmamış olmasından kaynaklanır. Doğrulamak için önce bir terminalde `kimi acp` komutunu çalıştırın — stdin bekleyerek bloklanırsa CLI'nin kendisi sorunsuzdur ve sorun IDE yapılandırmasındadır; bir hatayla hemen çıkarsa hata mesajını izleyin (çoğunlukla `/login` çalıştırmanız gerekir).
- **IDE "auth required" gösteriyor**: CLI'nin kullanılabilir bir kimlik doğrulama token'ı yoktur. IDE'den çıkın, bir terminalde `kimi` komutunu çalıştırarak oturum açmayı tamamlayın, ardından IDE'yi yeniden başlatın.
- **MCP araçları görünmüyor**: IDE'nizde yapılandırılan MCP aktarım türünün desteklendiğini doğrulamak için `kimi acp` yetenek tablosunu kontrol edin. Kimi Code CLI ACP bağdaştırıcısı şu anda `http` ve `stdio` aktarımlarını destekler; `sse` ve `acp` türleri sessizce bırakılır ve günlüğe bir uyarı yazılır.
