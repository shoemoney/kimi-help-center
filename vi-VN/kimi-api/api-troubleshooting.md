---
title: "Khắc phục sự cố API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Khắc phục sự cố API - Trung tâm trợ giúp Kimi"
  description="Các vấn đề thường gặp và cách khắc phục dành cho nhà phát triển sử dụng Kimi API."
/>

# Khắc phục sự cố API

<Callout type="info">
Các vấn đề thường gặp và cách khắc phục dành cho nhà phát triển sử dụng Kimi API.
</Callout>

## Xử lý lỗi 429 rate limit như thế nào?

Lỗi 429 cho biết tần suất yêu cầu của bạn đã vượt quá rate limit hiện tại của tài khoản. Cách khắc phục:

- Triển khai chiến lược thử lại theo cơ chế lùi hàm mũ (chờ 1 giây, 2 giây, 4 giây… trước khi thử lại).
- Kiểm soát số lượng yêu cầu concurrent bằng cơ chế hàng đợi.
- Tăng tổng số tiền nạp lũy kế để nâng cấp bậc rate limit.
- Liên hệ đội ngũ kinh doanh nếu bạn cần quota cao hơn.

## Xử lý lỗi xác thực 401 như thế nào?

Lỗi 401 cho biết xác thực khóa API thất bại. Hãy kiểm tra các điểm sau:

- Đảm bảo khóa API đã được sao chép chính xác (chú ý khoảng trắng ở đầu/cuối).
- Kiểm tra định dạng header yêu cầu là `Authorization: Bearer <your-api-key>`.
- Xác nhận khóa API chưa bị xóa hoặc vô hiệu hóa — hãy kiểm tra trong bảng điều khiển.
- Đảm bảo bạn không dùng khóa từ nền tảng khác (khóa Kimi API bắt đầu bằng `sk-`).

<Callout type="warning">
**Định dạng khóa API**: Khóa Kimi API bắt đầu bằng `sk-`. Hãy đảm bảo bạn đang dùng đúng định dạng khóa.
</Callout>

## Tải tệp lên có bị tính phí không?

Bản thân việc tải tệp lên là miễn phí. Tuy nhiên, khi bạn tham chiếu một tệp đã tải lên trong cuộc trò chuyện, nội dung của tệp sẽ được phân tích thành token và tính phí như token đầu vào. Tệp càng lớn thì càng tạo ra nhiều token.

## Xử lý lỗi 403 Insufficient Balance như thế nào?

Lỗi 403 thường cho biết số dư tài khoản không đủ. Hãy nạp tiền trong bảng điều khiển — tiền sẽ có hiệu lực ngay lập tức. Bạn cũng có thể dùng API truy vấn số dư để kiểm tra số dư hiện tại.

## Nếu phản hồi bị cắt ngắn thì sao?

Nếu phản hồi API không đầy đủ hoặc bị cắt ngắn:

- Kiểm tra xem tham số `max_tokens` có được đặt quá thấp hay không và tăng lên khi cần.
- Xem trường `finish_reason` trong phản hồi: `length` nghĩa là đầu ra bị cắt do giới hạn token; `stop` nghĩa là đã hoàn tất bình thường.
- Với tác vụ tạo văn bản dài, hãy cân nhắc chia yêu cầu thành nhiều phần.

<Callout type="tip">
**Kiểm tra `finish_reason`**: `length` = bị cắt ngắn, `stop` = hoàn tất bình thường.
</Callout>

## Có thể tải hình ảnh lên qua file API không?

Có. API tải tệp lên hỗ trợ tệp hình ảnh. Sau khi tải lên, hình ảnh có thể được tham chiếu trong cuộc trò chuyện. Với các mô hình Vision, bạn cũng có thể truyền hình ảnh trực tiếp trong tin nhắn qua URL hoặc mã hóa Base64.

## Nguồn cho Web Search?

Tính năng Web Search của Kimi API truy xuất thông tin công khai trên internet theo thời gian thực. Kết quả được lấy từ các trang web do các công cụ tìm kiếm lớn lập chỉ mục. Mỗi lần gọi Web Search sẽ phát sinh thêm phí $0.004.

## Gói thành viên Kimi có liên quan đến API concurrency không?

<Callout type="warning">
**Các gói thành viên Kimi** (chẳng hạn Allegretto) và **API** là hai hệ thống thanh toán riêng biệt. Khả năng chạy agent song song trong gói thành viên chỉ áp dụng cho các sản phẩm Kimi dành cho người dùng phổ thông và không liên quan đến API rate limit. Giới hạn API concurrency được xác định theo bậc nạp tiền lũy kế của tài khoản.
</Callout>

## Khác biệt giữa API và ứng dụng web Kimi

| Khía cạnh | Ứng dụng web Kimi | Kimi API |
| --- | --- | --- |
| **Đối tượng** | Sản phẩm trò chuyện dành cho người dùng phổ thông | Giao diện tích hợp dành cho nhà phát triển |
| **Cách truy cập** | Qua trình duyệt | Gọi API bằng chương trình |
| **Thanh toán** | Hệ thống thành viên/credit | Trả theo token sử dụng |
| **Tài khoản** | Dùng chung đăng nhập | Dùng chung đăng nhập |
| **Credit** | Không thể chuyển giữa các hệ thống | Không thể chuyển giữa các hệ thống |

## Có thể tạo PPT và dùng deep research qua API không?

<Callout type="warning">
**Tạo PPT** và **deep research** hiện **chưa khả dụng qua API**. Các tính năng này hiện chỉ có thể truy cập thông qua sản phẩm Kimi dành cho người dùng phổ thông. Hãy theo dõi thông báo của nền tảng để cập nhật.
</Callout>

## Có hỗ trợ triển khai tại chỗ không?

Kimi API hiện chỉ cung cấp dịch vụ API trên nền tảng đám mây và **không hỗ trợ triển khai riêng tại chỗ**. Nếu có nhu cầu triển khai riêng, hãy liên hệ đội ngũ kinh doanh qua [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales).

## Tôi có thể gọi Kimi API từ bên ngoài Trung Quốc không?

Kimi API khả dụng trên phạm vi quốc tế qua `api.moonshot.ai`. Nếu gặp vấn đề kết nối, hãy liên hệ đội ngũ kinh doanh để thảo luận giải pháp phù hợp nhất cho khu vực của bạn.
