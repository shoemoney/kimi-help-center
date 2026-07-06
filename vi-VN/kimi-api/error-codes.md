---
title: "Mã lỗi API"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Mã lỗi API - Trung tâm trợ giúp Kimi"
  description="Các mã lỗi thường gặp khi gọi Kimi API và cách khắc phục."
/>

# Mã lỗi API

<Callout type="info">
Các mã lỗi thường gặp khi gọi Kimi API và cách khắc phục.
</Callout>

## Bảng tra cứu mã lỗi

| Mã lỗi | Ý nghĩa | Cách khắc phục |
| --- | --- | --- |
| 400 | Bad Request | Kiểm tra định dạng phần thân yêu cầu, tên và kiểu của các tham số. Nguyên nhân thường gặp: JSON sai định dạng, thiếu tham số bắt buộc, giá trị nằm ngoài khoảng cho phép. |
| 401 | Unauthorized | Xác minh API Key có chính xác, chưa hết hạn hoặc chưa bị vô hiệu hóa. Kiểm tra đúng định dạng header: `Authorization: Bearer <your-api-key>`. |
| 403 | Forbidden (Insufficient Balance) | Số dư tài khoản đã cạn — hãy nạp thêm trong console. Tài khoản cũng có thể đang bị hạn chế; liên hệ bộ phận hỗ trợ nếu cần. |
| 404 | Not Found | Kiểm tra đường dẫn URL của yêu cầu và tên model. Xác nhận endpoint là `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | Đã vượt quá rate limit. Hãy giảm tần suất, áp dụng exponential backoff, hoặc liên hệ bộ phận hỗ trợ để được nâng giới hạn. |
| 500 | Internal Server Error | Sự cố máy chủ tạm thời — hãy thử lại sau. Nếu vẫn tiếp diễn, liên hệ support@moonshot.ai kèm theo `request_id`. |

## Mẹo khắc phục sự cố chung

<Callout type="tip">
1. **Đọc kỹ toàn bộ thông báo lỗi**: Phần JSON phản hồi có chứa `error.message` với mô tả chi tiết.
2. **Ghi lại request_id**: Giúp bộ phận hỗ trợ nhanh chóng xác định vấn đề.
3. **Tham khảo tài liệu chính thức**: Đảm bảo lệnh gọi của bạn khớp với tài liệu tại [platform.kimi.ai](https://platform.kimi.ai).
4. **Triển khai cơ chế thử lại**: Với lỗi 429 và 500, hãy dùng exponential backoff.
</Callout>
