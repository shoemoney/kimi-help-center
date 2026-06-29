---
title: "Khắc phục sự cố chung"
slug: "troubleshooting"
order: 12
extract_headings: false
preview: false
---

<SeoMeta
  title="Khắc phục sự cố chung - Trung tâm trợ giúp Kimi"
  description="Trang này trình bày các mã lỗi thường gặp và các tùy chọn tự sửa lỗi cho Kimi Claw."
/>

# Khắc phục sự cố chung

Trang này trình bày các mã lỗi thường gặp và các tùy chọn tự sửa lỗi cho Kimi Claw.

## Các mã lỗi thường gặp

| Mã | Ý nghĩa | Cách xử lý |
|------|---------|------------|
| **400** | Bad Request — Dữ liệu nhập sai định dạng hoặc tham số không hợp lệ | Kiểm tra tin nhắn của bạn xem có nội dung không được hỗ trợ không, sau đó thử lại. |
| **401** | Unauthorized — Xác thực thất bại | Đăng xuất khỏi Kimi rồi đăng nhập lại. Nếu vẫn còn lỗi, hãy kiểm tra thông tin xác thực API trong phần cài đặt Kimi Claw. |
| **403** | Forbidden — Không đủ quyền | Hãy xác minh rằng gói thành viên của bạn hỗ trợ tính năng đang dùng. Đảm bảo tài khoản không bị hạn chế. |
| **429** | Too Many Requests — Vượt quá rate limit | Đợi vài phút rồi thử lại. Xem [Giới hạn cuộc trò chuyện](/kimi-claw/conversation-limits) để biết cách kiểm tra quota của bạn. |
| **500** | Internal Server Error — Đã xảy ra lỗi phía máy chủ | Đợi một lát rồi thử lại. Nếu lỗi lặp lại, hãy dùng các tùy chọn tự sửa lỗi bên dưới hoặc liên hệ bộ phận hỗ trợ. |

## Các tùy chọn tự sửa lỗi

Kimi Claw cung cấp các công cụ sửa lỗi tích hợp sẵn, truy cập được từ **Cài đặt** trên web:

| Tùy chọn | Chức năng |
|--------|--------------|
| **Khởi động lại Kimi Claw** | Khởi động lại kết nối gateway. Khắc phục hầu hết các sự cố tạm thời (mất kết nối cầu nối, treo tạm thời). |
| **Sửa lỗi Kimi Claw** | Chạy chẩn đoán tự động để phát hiện và khắc phục các vấn đề về cấu hình. Hãy thử cách này khi việc khởi động lại đơn giản không hiệu quả. |
| **Khôi phục cài đặt ban đầu** | Đưa Kimi Claw về trạng thái mặc định. Các tệp trong không gian làm việc và Memory được giữ nguyên, nhưng các kết nối nền tảng trò chuyện (Telegram, v.v.) cần được thiết lập lại. Chỉ dùng như biện pháp cuối cùng. |

## Hướng leo thang xử lý

Nếu các tùy chọn tự sửa lỗi không giải quyết được vấn đề:

1. Chạy `/logs` trong Terminal để ghi lại thông tin lỗi gần đây.
2. Chạy `/debug` để bật chẩn đoán chi tiết.
3. Liên hệ **support@moonshot.ai** kèm theo chi tiết lỗi và các nhật ký liên quan.
