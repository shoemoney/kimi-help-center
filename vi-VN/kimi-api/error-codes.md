---
title: "Mã lỗi API"
slug: "api-error-codes"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Mã lỗi API - Trung tâm trợ giúp Kimi"
  description="Các mã lỗi thường gặp khi gọi Kimi API và cách xử lý."
/>

# Mã lỗi API

<Callout type="info">
Các mã lỗi thường gặp khi gọi Kimi API và cách xử lý.
</Callout>

## Bảng tra cứu mã lỗi

| Mã lỗi | Ý nghĩa | Cách xử lý |
| --- | --- | --- |
| 400 | Yêu cầu không hợp lệ | Kiểm tra định dạng nội dung yêu cầu, tên và kiểu tham số. Nguyên nhân thường gặp: JSON sai định dạng, thiếu tham số bắt buộc, giá trị nằm ngoài phạm vi cho phép. |
| 401 | Chưa được xác thực | Kiểm tra API Key có đúng, chưa hết hạn và chưa bị vô hiệu hóa. Xác nhận định dạng header: `Authorization: Bearer <your-api-key>`. |
| 403 | Bị từ chối (số dư không đủ) | Số dư tài khoản đã hết — hãy nạp thêm trong bảng điều khiển. Tài khoản cũng có thể đang bị hạn chế; liên hệ bộ phận hỗ trợ nếu cần. |
| 404 | Không tìm thấy | Kiểm tra đường dẫn URL yêu cầu và tên model. Xác nhận endpoint là `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests (quá nhiều yêu cầu) | Đã vượt rate limit. Giảm tần suất, triển khai cơ chế chờ lùi theo cấp số nhân, hoặc liên hệ bộ phận hỗ trợ để được nâng hạn mức. |
| 500 | Internal Server Error (lỗi máy chủ nội bộ) | Sự cố máy chủ tạm thời — hãy thử lại sau. Nếu vẫn tiếp diễn, liên hệ support@moonshot.ai kèm `request_id`. |

## Mẹo khắc phục sự cố chung

<Callout type="tip">
1. **Kiểm tra toàn bộ thông báo lỗi**: JSON phản hồi có `error.message` với mô tả chi tiết.
2. **Ghi lại request_id**: Giúp bộ phận hỗ trợ nhanh chóng xác định vấn đề.
3. **Tham khảo tài liệu chính thức**: Đảm bảo các lệnh gọi khớp với tài liệu tại [platform.kimi.ai](https://platform.kimi.ai).
4. **Triển khai logic thử lại**: Với lỗi 429 và 500, hãy dùng cơ chế chờ lùi theo cấp số nhân.
</Callout>
