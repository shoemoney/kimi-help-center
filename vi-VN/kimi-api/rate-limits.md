---
title: "Giới hạn tần suất"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Giới hạn tần suất - Trung tâm trợ giúp Kimi"
  description="Kimi API áp dụng giới hạn về tần suất và mức độ đồng thời của yêu cầu nhằm đảm bảo sự ổn định của nền tảng và việc sử dụng công bằng. Các bậc giới hạn tần suất được xác định dựa trên..."
/>

# Giới hạn tần suất

Kimi API áp dụng giới hạn về tần suất và mức độ đồng thời của yêu cầu nhằm đảm bảo sự ổn định của nền tảng và việc sử dụng công bằng. Các bậc giới hạn tần suất được xác định dựa trên tổng số tiền nạp tích lũy của tài khoản bạn.

## Các bậc giới hạn tần suất

Giới hạn tần suất của API được phân bậc dựa trên **tổng số tiền nạp tích lũy** của tài khoản — nạp càng nhiều, giới hạn tần suất khả dụng càng cao. Để biết ngưỡng cụ thể của từng bậc cùng với giới hạn RPM (số yêu cầu mỗi phút) và TPM (số token mỗi phút) tương ứng, hãy tham khảo bảng điều khiển tại [platform.kimi.ai](https://platform.kimi.ai).

## Cách kiểm tra giới hạn hiện tại?

- Đăng nhập vào bảng điều khiển API để xem bậc giới hạn tần suất hiện tại của bạn.
- Header phản hồi của API cũng chứa thông tin về giới hạn tần suất:
  - `X-RateLimit-Limit`: Mức giới hạn tần suất hiện tại
  - `X-RateLimit-Remaining`: Số yêu cầu còn lại khả dụng
  - `X-RateLimit-Reset`: Thời điểm giới hạn được đặt lại

## Xử lý lỗi 429

Khi tần suất yêu cầu của bạn vượt quá giới hạn, API sẽ trả về mã trạng thái 429. Các bước nên thực hiện:

1. **Áp dụng cơ chế chờ tăng theo cấp số nhân (exponential backoff)**: Ban đầu chờ 1 giây, sau đó tăng gấp đôi thời gian chờ sau mỗi lần thử lại (2s, 4s, 8s…).
2. **Kiểm soát mức độ đồng thời**: Dùng hàng đợi yêu cầu hoặc semaphore để giới hạn số yêu cầu chạy đồng thời.
3. **Gộp yêu cầu**: Kết hợp nhiều yêu cầu nhỏ thành ít yêu cầu lớn hơn.

## Yêu cầu nâng giới hạn tần suất

Nếu nhu cầu kinh doanh của bạn vượt quá giới hạn tần suất hiện tại:

- **Nạp thêm để nâng bậc**: Tăng tổng số tiền nạp tích lũy và hệ thống sẽ tự động nâng bậc giới hạn tần suất cho bạn.
- **Liên hệ bộ phận bán hàng**: Với các nhu cầu đặc biệt, hãy liên hệ đội ngũ bán hàng của nền tảng qua [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) để yêu cầu tín dụng tần suất tùy chỉnh.
