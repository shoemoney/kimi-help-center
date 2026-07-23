---
title: "Giá API"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Giá API - Trung tâm trợ giúp Kimi"
  description="Kimi API tính phí dựa trên lượng token tiêu thụ, với mức giá riêng cho từng mô hình và từng tính năng."
/>

# Giá API

<Callout type="info">
Kimi API tính phí dựa trên lượng token tiêu thụ, với mức giá riêng cho từng mô hình và từng tính năng.
</Callout>

## Nguyên tắc tính phí

- **Tính phí theo token**: Mỗi lệnh gọi API được tính phí riêng cho token đầu vào và token đầu ra
- **Đơn vị token**: 1M = 1,000,000 token
- **Giá theo từng mô hình**: Mô hình có năng lực cao hơn sẽ có chi phí theo token cao hơn — hãy chọn mô hình phù hợp nhất với trường hợp sử dụng của bạn

## Phí tính năng bổ sung

| Tính năng | Phí bổ sung |
| --- | --- |
| **Web Search** | $0.004 mỗi lần gọi (không phụ thuộc vào lượng token tiêu thụ) |

## Lưu vào bộ nhớ đệm ngữ cảnh

<Callout type="tip">
**Lưu vào bộ nhớ đệm ngữ cảnh** cho phép bạn lưu vào bộ nhớ đệm các nội dung ngữ cảnh thường dùng (chẳng hạn như system prompt và tài liệu tham khảo). Những token trúng bộ nhớ đệm sẽ được tính theo mức giá ưu đãi, qua đó giúp giảm chi phí cho các ngữ cảnh lặp lại.
</Callout>

Vui lòng tham khảo tài liệu chính thức để biết chi tiết về giá Lưu vào bộ nhớ đệm ngữ cảnh.

## Chi tiết giá

Để xem bảng giá mô hình đầy đủ và quy tắc tính phí:

Bạn có thể truy cập [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Mẹo tối ưu chi phí

<Callout type="tip">
- Đặt tham số `max_tokens` phù hợp để tránh đầu ra dài không cần thiết
- Sử dụng Lưu vào bộ nhớ đệm ngữ cảnh cho các system prompt và ngữ cảnh lặp lại
- Chọn đúng mô hình theo độ phức tạp của tác vụ — dùng mô hình nhẹ cho các tác vụ đơn giản
- Tinh gọn thiết kế prompt để giảm thiểu token đầu vào không cần thiết
</Callout>
