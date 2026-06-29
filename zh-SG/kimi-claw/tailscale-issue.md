---
title: "Tailscale 断连"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Tailscale 断连 - Kimi 帮助中心"
  description="如果在设置 Tailscale 后 Kimi Claw 失去连接，原因几乎总是 DNS 覆盖——Tailscale 会替换系统的 DNS 设置，导致 Kimi Claw 无法解析主机名。"
/>

# Tailscale 断连

如果在设置 Tailscale 后 Kimi Claw 失去连接，原因几乎总是 DNS 覆盖——Tailscale 会替换系统的 DNS 设置，导致 Kimi Claw 无法解析主机名。

## 如何修复？

1. 打开 [Tailscale DNS 设置页面](https://login.tailscale.com/admin/dns)。
2. 在 **名称服务器 → 全局名称服务器** 下，点击 **添加名称服务器**。
3. 添加以下公共 DNS 服务器：
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. 开启右上角的 **覆盖 DNS 服务器** 开关。
5. 等待约 **30 秒**，连接即可恢复。

## 如何预防？

如果你正准备设置 Tailscale，请在启用 Tailscale **之前**先完成上述 DNS 设置。这样可以避免连接中断。
