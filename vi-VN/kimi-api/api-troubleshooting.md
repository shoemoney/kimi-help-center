---
title: "Khắc phục sự cố API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Khắc phục sự cố API - Trung tâm trợ giúp Kimi"
  description="Các sự cố thường gặp và giải pháp dành cho lập trình viên sử dụng Kimi API."
/>

# Khắc phục sự cố API

<Callout type="info">
Các sự cố thường gặp và giải pháp dành cho lập trình viên sử dụng Kimi API.
</Callout>

## Xử lý lỗi rate limit 429 như thế nào?

Lỗi 429 nghĩa là tần suất gửi yêu cầu của bạn đã vượt quá rate limit hiện tại của tài khoản. Cách khắc phục:

- Áp dụng chiến lược thử lại với độ trễ tăng dần theo cấp số nhân (chờ 1 giây, 2 giây, 4 giây… trước mỗi lần thử lại).
- Kiểm soát số lượng yêu cầu đồng thời bằng cơ chế hàng đợi.
- Tăng tổng số tiền nạp tích lũy để nâng bậc rate limit.
- Liên hệ đội ngũ kinh doanh nếu bạn cần tín dụng cao hơn.

## Xử lý lỗi xác thực 401 như thế nào?

Lỗi 401 nghĩa là việc xác thực API Key đã thất bại. Hãy kiểm tra những điểm sau:

- Đảm bảo API Key được sao chép chính xác (lưu ý khoảng trắng ở đầu/cuối).
- Kiểm tra định dạng tiêu đề yêu cầu là `Authorization: Bearer <your-api-key>`.
- Xác nhận API Key chưa bị xóa hoặc vô hiệu hóa — hãy kiểm tra trong console.
- Đảm bảo bạn không dùng key của nền tảng khác (API Key của Kimi luôn bắt đầu bằng `sk-`).

<Callout type="warning">
**Định dạng API Key**: API Key của Kimi luôn bắt đầu bằng `sk-`. Hãy chắc chắn bạn đang dùng đúng định dạng key.
</Callout>

## Tải tệp lên có bị tính phí không?

Việc tải tệp lên không mất phí. Tuy nhiên, khi bạn tham chiếu một tệp đã tải lên trong cuộc trò chuyện, nội dung của tệp sẽ được phân tích thành token và tính phí như input token. Tệp càng lớn thì càng sinh ra nhiều token.

## Xử lý lỗi insufficient balance 403 như thế nào?

Lỗi 403 thường cho thấy tài khoản không đủ số dư. Hãy nạp tiền trong console — số dư sẽ khả dụng ngay lập tức. Bạn cũng có thể dùng API truy vấn số dư để kiểm tra số dư hiện tại.

## Phải làm gì khi phản hồi bị cắt cụt?

Nếu phản hồi từ API không đầy đủ hoặc bị cắt cụt:

- Kiểm tra xem tham số `max_tokens` có bị đặt quá thấp không và tăng lên nếu cần.
- Xem trường `finish_reason` trong phản hồi: `length` nghĩa là đầu ra bị cắt do giới hạn token; `stop` nghĩa là hoàn tất bình thường.
- Với việc tạo văn bản dài, hãy cân nhắc chia yêu cầu thành nhiều phần.

<Callout type="tip">
**Kiểm tra `finish_reason`**: `length` = bị cắt cụt, `stop` = hoàn tất bình thường.
</Callout>

## Tôi có thể tải ảnh lên qua API tệp không?

Có. API tải tệp lên hỗ trợ các tệp ảnh. Sau khi tải lên, ảnh có thể được tham chiếu trong cuộc trò chuyện. Với các mô hình Vision, bạn còn có thể truyền ảnh trực tiếp trong tin nhắn qua URL hoặc mã hóa Base64.

## Nguồn dữ liệu của web search?

Tính năng web search của Kimi API truy xuất thông tin công khai trên internet theo thời gian thực. Kết quả được lấy từ các trang web đã được những công cụ tìm kiếm lớn lập chỉ mục. Mỗi lần gọi web search sẽ chịu phụ phí 0,004 USD.

## Quyền lợi thành viên Kimi có liên quan đến concurrency của API không?

<Callout type="warning">
**Các gói thành viên Kimi** (chẳng hạn Allegretto) và **API** là hai hệ thống tính phí tách biệt. Mức song song của agent đi kèm trong gói thành viên chỉ áp dụng cho các sản phẩm tiêu dùng của Kimi và không liên quan đến rate limit của API. Giới hạn concurrency của API được xác định theo bậc nạp tiền tích lũy của tài khoản bạn.
</Callout>

## Khác biệt giữa API và ứng dụng web Kimi

| Khía cạnh | Ứng dụng web Kimi | Kimi API |
| --- | --- | --- |
| **Đối tượng** | Sản phẩm trò chuyện hướng đến người dùng cuối | Giao diện tích hợp hướng đến lập trình viên |
| **Cách truy cập** | Qua trình duyệt | Gọi API bằng mã chương trình |
| **Tính phí** | Hệ thống thành viên/tín dụng | Trả theo mức dùng tính theo token |
| **Tài khoản** | Đăng nhập dùng chung | Đăng nhập dùng chung |
| **Credit** | Không chuyển đổi được giữa hai hệ thống | Không chuyển đổi được giữa hai hệ thống |

## Tạo PPT và deep research có khả dụng qua API không?

<Callout type="warning">
**Tạo PPT** và **deep research** **chưa khả dụng qua API**. Hiện các tính năng này chỉ có thể sử dụng qua sản phẩm tiêu dùng Kimi. Hãy theo dõi các thông báo của nền tảng để cập nhật.
</Callout>

## Có hỗ trợ triển khai tại chỗ không?

Kimi API hiện chỉ cung cấp dịch vụ API trên đám mây và **không hỗ trợ triển khai riêng tại chỗ**. Nếu có nhu cầu triển khai riêng, hãy liên hệ đội ngũ kinh doanh qua [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales).

## Tôi có thể gọi Kimi API từ ngoài Trung Quốc không?

Kimi API khả dụng trên toàn cầu qua `api.moonshot.ai`. Nếu bạn gặp sự cố kết nối, hãy liên hệ đội ngũ kinh doanh để bàn về giải pháp phù hợp nhất cho khu vực của bạn.
