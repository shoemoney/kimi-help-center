---
title: "Khái niệm cốt lõi & terminal"
slug: "concepts"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Khái niệm cốt lõi & terminal - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu các khái niệm cốt lõi của Kimi Claw — Memory, Skills, HEARTBEAT, Identity, Soul, Tools và User — cùng các lệnh terminal để kiểm tra gateway, trạng thái bot, skill và tác vụ đã lên lịch."
/>

# Khái niệm cốt lõi & terminal

## Khái niệm chính

| Khái niệm | Mô tả |
|---------|-------------|
| **Memory** | Hệ thống bộ nhớ dài hạn của Kimi Claw. Lưu giữ sở thích, thói quen và thông tin quan trọng của bạn xuyên suốt các cuộc trò chuyện. |
| **Skills** | Các mô-đun năng lực có thể cài đặt từ thư viện ClawHub, mang lại cho Kimi Claw chuyên môn theo từng lĩnh vực cụ thể. |
| **HEARTBEAT** | Các tác vụ nền được lên lịch chạy theo bộ hẹn giờ — hữu ích cho nhắc nhở định kỳ, thu thập dữ liệu và bản tổng hợp. |
| **Identity** | Định nghĩa vai trò của Kimi Claw: tên gọi, nghề nghiệp, tính cách. Bạn có thể tùy chỉnh hoàn toàn. |
| **Soul** | Các đặc điểm tính cách cốt lõi và nguyên tắc hành xử định hình phong cách tương tác của Kimi Claw. |
| **Tools** | Tập hợp các năng lực mà Kimi Claw có thể gọi đến — tìm kiếm web, xử lý tệp, thực thi mã và nhiều hơn nữa. |
| **User** | Định nghĩa mối quan hệ giữa bạn và Kimi Claw, chi phối cách tương tác và việc chia sẻ thông tin. |

## Terminal

<Frames
  src="./images/concepts/screenshot-30.png"
  alt="screenshot 30"
/>

Bạn có thể mở giao diện dòng lệnh qua **Settings → Terminal** trên web và chạy các lệnh để điều khiển Kimi Claw trực tiếp.

Ngoài ra, bạn chỉ cần nói cho Kimi Claw biết lệnh cần chạy bằng ngôn ngữ thông thường — nó sẽ thực thi giúp bạn.

> Lưu ý: Terminal và các plugin dùng chung một kênh kết nối. Việc khởi động lại cổng OpenClaw sẽ ngắt kết nối Terminal.

## Tham chiếu lệnh

### Hệ thống

| Lệnh | Mô tả |
|---------|-------------|
| `/help` | Hiển thị thông tin trợ giúp |
| `/status` | Xem trạng thái hệ thống hiện tại |
| `/ping` | Kiểm tra xem kết nối còn hoạt động hay không |
| `/cron` | Quản lý các tác vụ được lên lịch |
| `/config` | Xem hoặc chỉnh sửa cấu hình |
| `/new` | Bắt đầu cuộc trò chuyện mới (xóa ngữ cảnh hiện tại) |
| `/reset` | Đặt lại Kimi Claw |
| `/compact` | Nén ngữ cảnh cuộc trò chuyện hiện tại |
| `/stop` | Dừng tác vụ đang chạy |

### Skills

| Lệnh | Mô tả |
|---------|-------------|
| `/skills` | Duyệt, cài đặt và quản lý kỹ năng |

### Tác vụ được lên lịch

| Lệnh | Mô tả |
|---------|-------------|
| `/cron` | Xem và quản lý lịch tác vụ |

### Memory

| Lệnh | Mô tả |
|---------|-------------|
| `/memory` | Xem và quản lý bộ nhớ dài hạn |

### Cấu hình & gỡ lỗi

| Lệnh | Mô tả |
|---------|-------------|
| `/config` | Xem hoặc chỉnh sửa cấu hình hệ thống |
| `/logs` | Xem nhật ký chạy |
| `/debug` | Bật chế độ gỡ lỗi để chẩn đoán chi tiết |
