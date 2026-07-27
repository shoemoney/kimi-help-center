---
title: "Rate limit"
slug: "api-rate-limits"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Rate limit - Trung tâm trợ giúp Kimi"
  description="Kimi API áp dụng rate limit đối với tần suất yêu cầu và concurrency nhằm bảo đảm nền tảng ổn định và được sử dụng công bằng. Các bậc rate limit dựa trên..."
/>

# Rate limit

Kimi API áp dụng rate limit đối với tần suất yêu cầu và concurrency nhằm bảo đảm nền tảng ổn định và được sử dụng công bằng. Các bậc rate limit được xác định theo tổng số tiền nạp lũy kế của tài khoản.

## Các bậc rate limit

Rate limit của API được phân bậc theo **tổng số tiền nạp lũy kế** của tài khoản — bạn nạp càng nhiều, rate limit khả dụng càng cao. Để xem ngưỡng cụ thể của từng bậc cùng giới hạn RPM (số yêu cầu mỗi phút) và TPM (số token mỗi phút) tương ứng, hãy tham khảo console tại [platform.kimi.ai](https://platform.kimi.ai).

## Kiểm tra giới hạn hiện tại như thế nào?

- Đăng nhập vào console API để xem bậc rate limit hiện tại của bạn.
- Header phản hồi API cũng bao gồm thông tin rate limit:
  - `X-RateLimit-Limit`: Mức trần rate limit hiện tại
  - `X-RateLimit-Remaining`: Số yêu cầu còn khả dụng
  - `X-RateLimit-Reset`: Thời điểm giới hạn được đặt lại

## Xử lý lỗi 429

Khi tần suất yêu cầu vượt quá giới hạn, API sẽ trả về mã trạng thái 429. Bạn nên:

1. **Triển khai exponential backoff**: Ban đầu chờ 1 giây, sau đó nhân đôi thời gian chờ sau mỗi lần thử lại (2s, 4s, 8s…).
2. **Kiểm soát concurrency**: Dùng hàng đợi yêu cầu hoặc semaphore để giới hạn số lượng yêu cầu chạy đồng thời.
3. **Gộp yêu cầu**: Kết hợp nhiều yêu cầu nhỏ thành ít yêu cầu hơn nhưng có kích thước lớn hơn.

## Yêu cầu rate limit cao hơn

Nếu nhu cầu kinh doanh của bạn vượt quá rate limit hiện tại:

- **Nạp tiền để nâng cấp**: Tăng tổng số tiền nạp lũy kế; hệ thống sẽ tự động nâng cấp bậc rate limit cho bạn.
- **Liên hệ sales**: Với các yêu cầu đặc biệt, hãy liên hệ đội ngũ sales của nền tảng qua [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) để yêu cầu quota tùy chỉnh.
