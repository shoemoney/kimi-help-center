---
title: "Bảng giá API"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Bảng giá API - Trung tâm trợ giúp Kimi"
  description="API Kimi tính phí dựa trên lượng token tiêu thụ, với mức giá riêng theo từng mô hình và từng tính năng."
/>

# Bảng giá API

<Callout type="info">
API Kimi tính phí dựa trên lượng token tiêu thụ, với mức giá riêng theo từng mô hình và từng tính năng.
</Callout>

## Nguyên tắc tính phí cơ bản

- **Tính phí theo token**: Mỗi lần gọi API được tính phí riêng cho token đầu vào và token đầu ra
- **Đơn vị token**: 1M = 1.000.000 token
- **Giá theo từng mô hình**: Các mô hình có năng lực cao hơn sẽ có chi phí trên mỗi token cao hơn — hãy chọn mô hình phù hợp nhất với nhu cầu của bạn

## Tính phí cho tính năng bổ sung

| Tính năng | Phí bổ sung |
| --- | --- |
| **Web Search** | 0,004 USD mỗi lần gọi (độc lập với lượng token tiêu thụ) |

## Context caching

<Callout type="tip">
**Context Caching** cho phép bạn lưu vào bộ nhớ đệm những nội dung ngữ cảnh thường dùng (chẳng hạn như lời nhắc hệ thống và tài liệu tham khảo). Các token trùng khớp với bộ nhớ đệm sẽ được tính phí với mức ưu đãi, qua đó giảm đáng kể chi phí cho những ngữ cảnh lặp lại.
</Callout>

Tham khảo tài liệu chính thức để biết chi tiết về giá Context Caching.

## Chi tiết bảng giá

Để xem bảng giá đầy đủ theo mô hình và các quy tắc tính phí:

Bạn có thể truy cập [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Mẹo tối ưu chi phí

<Callout type="tip">
- Đặt tham số `max_tokens` ở mức hợp lý để tránh tạo ra đầu ra dài không cần thiết
- Dùng Context Caching cho các lời nhắc hệ thống và ngữ cảnh lặp lại
- Chọn đúng mô hình phù hợp với độ phức tạp của tác vụ — dùng các mô hình nhẹ cho những tác vụ đơn giản
- Tinh gọn cách thiết kế lời nhắc để giảm thiểu token đầu vào không cần thiết
</Callout>
