---
title: "Kimi eklentisini kaldırma"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi eklentisini kaldırma - Kimi Yardım Merkezi"
  description="Bu işlem yalnızca Kimi'ye bağladığınız, kendi sunucunuzda barındırdığınız OpenClaw cihazları için geçerlidir. Bunu kendi makinenizde çalıştırdığınızdan emin olun."
/>

# Kimi eklentisini kaldırma

<Callout type="warning">
**Bu işlem yalnızca Kimi'ye bağladığınız, kendi sunucunuzda barındırdığınız OpenClaw cihazları için geçerlidir.** Bunu kendi makinenizde çalıştırdığınızdan emin olun.
</Callout>

## Kaldırma komutu

OpenClaw'un kurulu olduğu cihazda aşağıdakini çalıştırın:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Kritik uyarı

<Callout type="warning">
**Bu komutu, tek tıkla dağıtılan bir Kimi Claw örneğinde asla çalıştırmayın.**
Kaldırma betiğini bulutta dağıtılmış bir Kimi Claw üzerinde çalıştırmak, bağlantıyı **kalıcı olarak koparır** ve geri dönüş imkânı kalmaz. Bu komut yalnızca kendi sunucunuzda barındırdığınız OpenClaw cihazlarından Kimi eklentisini kaldırmak içindir.
</Callout>
