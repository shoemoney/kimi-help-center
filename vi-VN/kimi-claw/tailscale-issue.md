---
title: "Mất kết nối Tailscale"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Mất kết nối Tailscale - Trung tâm Trợ giúp Kimi"
  description="Nếu Kimi Claw mất kết nối sau khi bạn thiết lập Tailscale, nguyên nhân gần như luôn là do DNS bị ghi đè — Tailscale thay thế cài đặt DNS của hệ thống, khiến..."
/>

# Mất kết nối Tailscale

Nếu Kimi Claw mất kết nối sau khi bạn thiết lập Tailscale, nguyên nhân gần như luôn là do DNS bị ghi đè — Tailscale thay thế cài đặt DNS của hệ thống, khiến Kimi Claw không thể phân giải tên máy chủ.

## Cách khắc phục?

1. Mở [trang cài đặt DNS của Tailscale](https://login.tailscale.com/admin/dns).
2. Trong mục **Nameservers → Global nameservers**, nhấp vào **Add nameserver**.
3. Thêm các máy chủ DNS công cộng sau:
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. Bật công tắc **Override DNS Servers** ở góc trên bên phải.
5. Đợi khoảng **30 giây** để kết nối được khôi phục.

## Cách phòng ngừa?

Nếu bạn chuẩn bị thiết lập Tailscale, hãy cấu hình các cài đặt DNS trên **trước khi** bật Tailscale. Điều này giúp tránh mọi gián đoạn kết nối.
