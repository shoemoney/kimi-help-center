---
title: "VS Code Temel İşlemleri"
slug: "vscode-core-operations"
order: 12
extract_headings: false
preview: true
preview_content: "Kimi Code VS Code uzantısında sohbet paneli, dosya referansları, diff incelemesi, Plan Modu ve context yönetimi."
---

<SeoMeta
title="VS Code için Kimi Code Temel İşlemleri - Kimi Yardım Merkezi"
description="Kimi Code VS Code uzantısının temel özelliklerinde uzmanlaşın: @ dosya referansları, slash komutları, kod değişikliği diff incelemesi, Plan Modu, mesaj kuyruğu ve context yönetimi."
/>

# VS Code Temel İşlemleri

<Callout type="warning">
**VS Code uzantısının uyarlama çalışmaları sürüyor**

VS Code için Kimi Code şu anda yalnızca eski Python CLI kullanıcılarının yeni kurulumuna açıktır. Uzantıyı daha önce yüklemiş mevcut kullanıcılar, yeni CLI sürümüne yükselttikten sonra kullanmaya devam edebilir. TS sürümü CLI kullanan diğer kullanıcılar için kurulum şu anda desteklenmemektedir.
</Callout>

## Paneli açma

Etkinlik Çubuğu’ndaki Kimi simgesine tıklayın veya Komut Paleti’nden "Kimi Code" komutunu çalıştırın.

## Giriş ve kontroller

### Dosya referansları

`@` yazın, ardından bir dosya veya klasör adı seçin. Örneğin bir klasöre referans vermek için `@src/handlers/`, bir dosyaya referans vermek için `@app.ts` veya belirli bir satır aralığına referans vermek için `@src/app.ts:10-20` kullanın.

Geçerli dosyayı veya seçili kodu hızlıca referans olarak eklemek için `Alt+K` tuşlarına basın.

### Slash komutları

Komut menüsünü açmak için `/` yazın. Projeyi tarayıp dokümantasyon oluşturmak için `/init`, aşırı uzamış bir context’i sıkıştırmak için `/compact` kullanın.

### Giriş geçmişi

Son gönderdiğiniz mesajlara hızlıca göz atmak için giriş kutusunda `↑` / `↓` tuşlarına basın; böylece bir soruyu yinelemek veya düzenlemek kolaylaşır.

### Medya dosyası girişi

Medya dosyalarını yapıştırabilir, sürükleyip bırakabilir veya seçebilirsiniz. Desteklenen formatlar arasında PNG, JPEG, GIF, WebP ve HEIC gibi görsel formatlarının yanı sıra MP4, WebM ve MOV gibi video formatları da bulunur.

- **Yapıştırma / sürükleyip bırakma**: Tek bir görselin özgün boyutu en fazla 5MB olabilir. Sistem bunu otomatik olarak sıkıştırır; HEIC’i JPEG’e dönüştürür, büyük görselleri yeniden boyutlandırır ve kaliteyi yaklaşık 2MB düzeyine indirir.
- **Dosya seçici**: Giriş kutusundaki "+" düğmesi veya `@` menüsü üzerinden dosya seçerken görseller en fazla 10MB, videolar ise en fazla 20MB olabilir.
- **Genel sınırlar**: Her mesaja en fazla 9 dosya eklenebilir; toplam boyut en fazla 80MB olabilir. Medya dosyaları eklendiğinde, multimodal girişi desteklemeyen modeller otomatik olarak filtrelenir.

### Mesaj kuyruğu

Kimi yanıt verirken giriş kutusuna yazmaya ve mesaj göndermeye devam edebilirsiniz. Bu mesajlar kaybolmaz; bunun yerine **mesaj kuyruğuna** eklenir. Alt araç çubuğu kuyruk sayısını gösterir; tıklayarak kuyruk panelini genişletebilirsiniz:

- Gönderilmeyi bekleyen mesajların listesini görüntüleme
- Kuyruktaki mesajları düzenleme veya silme
- Mesajların sırasını değiştirme
- Kimi yanıt verirken, bir kuyruk öğesindeki ⚡ simgesine tıklayarak o mesajı hemen **Yönlendirme** olarak ekleyebilir ve Kimi’nin mevcut yanıtın yönünü ayarlamasını sağlayabilirsiniz

### Modeller ve Thinking mode

Giriş çubuğundaki açılır menüden model değiştirin.

Bazı modeller gelişmiş muhakeme özelliklerini destekler. Thinking mode anahtarının üç durumu vardır: model Thinking mode desteklemiyorsa gizli olur; kullanıcı tarafından elle etkinleştirilip devre dışı bırakılabilir; veya k2-thinking gibi modellerde her zaman açık kalır.

Etkinleştirildikten sonra yanıttaki düşünme adımları varsayılan olarak daraltılmış görünür. Muhakeme sürecini görmek için bunları genişletebilirsiniz. Düşünme sürecinin varsayılan olarak genişletilmesi için ayarlarda `kimi.alwaysExpandThinking` seçeneğini etkinleştirin.

## Çalışma modları

### İşlem onayı ve araç yürütme

Kimi bir araç çalıştırmayı veya bir dosyaya yazmayı önerdiğinde, üç seçenekli bir onay iletişim kutusu görünür:

- **Evet**: Yalnızca geçerli işlemi onaylar
- **Evet, bu oturum için**: Yeni bir oturum başlayana kadar geçerli oturumdaki benzer işlemleri onaylar
- **Hayır**: İşlemin yürütülmesini reddeder

Tüm araç çağrılarını otomatik olarak onaylamak için ayarlarda `kimi.yoloMode` seçeneğini etkinleştirin. İş akışına güvendiğiniz ve daha yüksek verimlilik istediğiniz durumlar için uygundur.

### Soru İletişim Kutusu

Yürütme sırasında Kimi size, örneğin bir uygulama yaklaşımı seçmenizi isteyen bir soru sorabilir. Altta bir soru kartı görünür. Hazır seçeneklerden birini doğrudan seçebilir veya kendi yanıtınızı girmek için "Özel yanıt..." seçeneğini kullanabilirsiniz. Yanıt verdikten sonra Kimi yürütmeye devam eder.

### Plan Modu

Plan Modu’na girmek için giriş kutusunun sol tarafındaki 📋 simgesine tıklayın. Etkinleştirildiğinde Kimi, asıl yürütmeden önce izlemeyi planladığı adımları listeleyen, genişletilebilir bir Plan Kartı oluşturur. Devam etmesine izin vermeden önce planı inceleyebilirsiniz.

- Plan Modu düğmesi, her yeni oturumda önceki ayarını korur.
- Kimi zaten yanıt akışı yapıyorsa Plan Modu’ndan çıkmak, mevcut görevin kesilmesini önlemek için ikinci bir onay gerektirir.

### Dosya değişikliği izleme

Kimi dosyaları değiştirdikten sonra tüm değişiklikler izlenir ve "Dosya Değişiklikleri" bölümünde gösterilir. Değiştirilen dosyaların listesini ve eklenen, değiştirilen veya silinen gibi durumlarını; ayrıca eklenen ve kaldırılan satır istatistiklerini görüntüleyebilirsiniz.

Her dosya için değişiklikleri VS Code’un yerleşik diff görünümünde inceleyebilir, dosyayı özgün durumuna geri yükleyebilir veya izleme kaydını temizlemek için değişiklikleri koruyabilirsiniz. Toplu işlemler desteklenir; böylece tüm değişiklikleri tek seferde tutabilir veya silebilirsiniz. Temel durum, oturumda bir dosya ilk kez değiştirildiğinde yakalanır; geri alma işlemi dosyayı bu temel sürüme döndürür.

## Context yönetimi

### Oturum geçmişi

Önceki oturumlara göz atmak için panelin üst kısmındaki geçmiş açılır menüsüne tıklayın. Oturum verileri yerel olarak saklanır ve anahtar kelime aramayı destekler. Eski oturumları silebilir veya önceki bir konuşmaya devam etmek için bir oturum yükleyebilirsiniz.

Durum çubuğu context kullanım yüzdesini ve giriş/çıkış token sayılarını gösterir. Context kullanımı yüksek olduğunda sıkıştırmak için `/compact` komutunu kullanın.

### Çalışma dizini değiştirme

Geçerli Workspace içindeki farklı alt dizinler arasında çalışma dizinini değiştirmek için giriş kutusunun sağ tarafındaki dişli simgesine (Eylem Menüsü) tıklayın → **Çalışma Dizini**. Değiştirdikten sonra Kimi’nin yeni dizin context’ine göre çalışabilmesi için otomatik olarak yeni bir oturum başlar. Kayıtlı bir alt dizini doğrudan seçebilir veya herhangi bir alt klasöre göz atmak için "Gözat..." seçeneğini kullanabilirsiniz.

## Eylem menüsü

### Özellik listesi

Giriş kutusunun sağ tarafındaki dişli simgesi, aşağıdaki özellikleri içeren eylem menüsünü açar:

- **Çalışma Dizini**: Geçerli çalışma dizinini değiştirir (yukarıdaki "Çalışma dizini değiştirme" bölümüne bakın)
- **MCP Sunucuları**: MCP sunucu yapılandırma panelini açar
- **Genel Yapılandırma**: VS Code ayarlarında Kimi yapılandırma sayfasını açar
- **Günlükleri Göster**: Sorun giderme için Kimi Code çıktı günlüğü panelini açar
- **Kimi’yi Sıfırla**: Kimi Webview’i sıfırlar; arayüz donduğunda veya yanıt vermediğinde yararlıdır
- **Oturumu kapat / Oturum aç**: Kimi hesabınızdan çıkış yapar veya yeniden giriş yapar

Kimi Code CLI’yi doğrudan tümleşik terminalde başlatmak için VS Code Komut Paleti’nden "Kimi Code: Run CLI" komutunu da çalıştırabilirsiniz.
