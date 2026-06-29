---
title: "Tailscale の切断"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Tailscale の切断 - Kimi ヘルプセンター"
  description="Kimi Claw が Tailscale の設定後に接続できなくなった場合、原因はほとんどの場合 DNS の上書きです。Tailscale がシステムの DNS 設定を置き換えるため..."
/>

# Tailscale の切断

Kimi Claw が Tailscale の設定後に接続できなくなった場合、原因はほとんどの場合 DNS の上書きです。Tailscale がシステムの DNS 設定を置き換えることで、Kimi Claw がホスト名を解決できなくなります。

## 対処方法は？

1. [Tailscale の DNS 設定ページ](https://login.tailscale.com/admin/dns)を開きます。
2. **ネームサーバー → グローバルネームサーバー** で、**ネームサーバーを追加** をクリックします。
3. 次のパブリック DNS サーバーを追加します。
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. 右上の **DNS サーバーを上書き** トグルを有効にします。
5. 接続が復旧するまで、約 **30 秒** 待ちます。

## 予防方法は？

これから Tailscale を設定する場合は、Tailscale を有効にする**前に**上記の DNS 設定を行ってください。これにより、接続が中断されるのを防げます。
