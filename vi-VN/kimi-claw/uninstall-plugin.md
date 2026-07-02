---
title: "Gỡ cài đặt plugin Kimi"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Gỡ cài đặt plugin Kimi - Trung tâm trợ giúp Kimi"
  description="Điều này chỉ áp dụng cho các thiết bị OpenClaw tự lưu trữ mà bạn đã liên kết với Kimi. Hãy đảm bảo bạn đang chạy lệnh này trên máy của chính mình."
/>

# Gỡ cài đặt plugin Kimi

<Callout type="warning">
**Điều này chỉ áp dụng cho các thiết bị OpenClaw tự lưu trữ** mà bạn đã liên kết với Kimi. Hãy đảm bảo bạn đang chạy lệnh này trên máy của chính mình.
</Callout>

## Lệnh gỡ cài đặt

Chạy lệnh sau trên thiết bị đã cài đặt OpenClaw:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Cảnh báo quan trọng

<Callout type="warning">
**Tuyệt đối không chạy lệnh này trên một phiên bản Kimi Claw được triển khai bằng một cú nhấp chuột.**
Việc thực thi script gỡ cài đặt trên một Kimi Claw triển khai trên đám mây sẽ **cắt đứt kết nối vĩnh viễn** mà không có cách nào khôi phục. Lệnh này chỉ dành riêng cho việc gỡ bỏ plugin Kimi khỏi các thiết bị OpenClaw tự lưu trữ.
</Callout>
