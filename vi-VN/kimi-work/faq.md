---
title: "Câu hỏi thường gặp"
slug: "kimi-work-faq"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Câu hỏi thường gặp về Kimi Work - Trung tâm trợ giúp Kimi"
  description="Câu hỏi thường gặp về Kimi Work: khác gì so với phiên bản web, kiểm soát quyền khi truy cập tệp cục bộ, tự động hóa trình duyệt WebBridge làm được gì và tác vụ đã lên lịch vận hành ra sao."
/>

# Câu hỏi thường gặp về Kimi Work

## Kimi Work khác gì so với phiên bản web?

Ứng dụng web Kimi rất phù hợp để trò chuyện nhanh và tra cứu tức thì, còn Kimi Work là một Agent cục bộ được thiết kế cho các quy trình làm việc chuyên sâu. Kimi Work có thể đọc và xử lý thư mục trên máy của bạn, tự điều hướng web qua WebBridge, chạy mã Python trong nền và thực thi các tác vụ đã lên lịch. Có thể xem đây là một nhân viên số ở cấp hệ thống.

## Kimi Work bảo vệ quyền riêng tư của tôi thế nào khi truy cập tệp cục bộ?

Bạn có toàn quyền kiểm soát tệp của mình. Kimi Work cung cấp cơ chế kiểm soát quyền, và bạn có thể chọn cách cấp quyền:

- **Yêu cầu cấp quyền**: hỏi ý kiến trước khi thực hiện — Kimi sẽ nhắc bạn cấp quyền rõ ràng trước khi sửa đổi, ghi đè hoặc chạy mã trong các tệp cục bộ của bạn;
- **Cho phép tất cả**: chạy trực tiếp mà không cần hỏi quyền.

Khi bạn chọn "Yêu cầu cấp quyền", sẽ không có thao tác nào diễn ra nếu chưa có sự đồng ý của bạn.

## WebBridge (tự động hóa trình duyệt) có thể giúp tôi làm những gì?

WebBridge cho Kimi khả năng sử dụng trình duyệt như con người. Bạn có thể yêu cầu Kimi kiểm tra tin tức mới nhất trên một trang web rồi tóm tắt, hoặc thu thập dữ liệu cổ phiếu lịch sử vào tệp Excel cục bộ của bạn. Kimi tự bấm, cuộn và trích xuất dữ liệu, giúp bạn tiết kiệm hàng giờ thao tác thủ công.

## Tôi có thể làm gì với tác vụ đã lên lịch? Chúng có chạy khi máy tính đang ở chế độ ngủ không?

Bộ lập lịch Cron tích hợp hỗ trợ gọi LLM Agent, thực thi Python/Shell và nhiều tác vụ khác. Bạn có thể kích hoạt tác vụ theo ngày, theo giờ hoặc theo điều kiện. Để bảo đảm tác vụ chạy suôn sẻ qua đêm, chỉ cần bật tùy chọn "Giữ máy tính luôn thức" trong phần cài đặt.
