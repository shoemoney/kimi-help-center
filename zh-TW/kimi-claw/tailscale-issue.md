---
title: "Tailscale 連線中斷"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Tailscale 連線中斷 - Kimi 說明中心"
  description="如果你設定 Tailscale 後 Kimi Claw 失去連線，原因幾乎總是 DNS 覆寫——Tailscale 會取代系統的 DNS 設定，導致 Kimi Claw 無..."
/>

# Tailscale 連線中斷

如果你設定 Tailscale 後 Kimi Claw 失去連線，原因幾乎總是 DNS 覆寫——Tailscale 會取代系統的 DNS 設定，導致 Kimi Claw 無法解析主機名稱。

## 如何修復？

1. 開啟 [Tailscale DNS 設定頁面](https://login.tailscale.com/admin/dns)。
2. 在 **名稱伺服器 → 全域名稱伺服器** 下，點擊 **新增名稱伺服器**。
3. 新增以下公共 DNS 伺服器：
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. 開啟右上角的 **覆寫 DNS 伺服器** 開關。
5. 等待約 **30 秒**，連線即可恢復。

## 如何預防？

如果你正準備設定 Tailscale，請在啟用 Tailscale **之前** 先完成上述 DNS 設定。這樣可避免連線中斷。
