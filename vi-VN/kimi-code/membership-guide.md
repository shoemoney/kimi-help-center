---
title: "Hướng dẫn về gói thành viên Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Hướng dẫn về gói thành viên Kimi Code - Trung tâm trợ giúp Kimi"
  description="Kimi Code là một quyền lợi dành cho nhà phát triển trong gói thành viên Kimi, mang đến năng lực lập trình AI hiệu năng cao. Bạn có thể sử dụng quyền lợi này thông qua..."
/>

# Hướng dẫn về gói thành viên Kimi Code

<Callout type="info">
Kimi Code là một quyền lợi dành cho nhà phát triển trong gói thành viên Kimi, mang đến năng lực lập trình AI hiệu năng cao. Bạn có thể sử dụng quyền lợi này thông qua Kimi Code CLI, Claude Code, Roo Code và các công cụ được hỗ trợ khác.
</Callout>

## Những ưu điểm nổi bật

| Ưu điểm | Mô tả |
|-----------|-------------|
| **Tương thích rộng** | Hoạt động với Kimi Code CLI, Claude Code, Roo Code và các coding agent phổ biến khác |
| **Cấp Standard / HighSpeed** | Cùng một mô hình ở hai tốc độ — HighSpeed cho tốc độ đầu ra khoảng 5–6× so với Standard và chuyển đổi theo nhu cầu |
| **Phản hồi cực nhanh** | Tốc độ sinh nội dung lên đến 100 token/s, giúp nâng cao đáng kể hiệu suất lập trình |
| **Đáp ứng tần suất cao** | Khoảng 300–1.200 yêu cầu trong mỗi khung 5 giờ (tùy theo gói của bạn), với tối đa 30 luồng concurrency |

## Bắt đầu nhanh

Hãy chọn lộ trình phù hợp với tình huống của bạn:

- **Người dùng mới**: Truy cập [kimi.com/code](https://kimi.com/code), đăng nhập và đăng ký một Coding Plan.
- **Người đã đăng ký**: Truy cập console để quản lý các API Key và bắt đầu sử dụng Kimi Code.

## Lấy API key

1. Đăng nhập vào [Kimi Console](https://kimi.com/code).
2. Chuyển đến trang **API Keys**.
3. Nhấp vào **Create New API Key**.
4. Sao chép và lưu trữ API Key của bạn ở nơi an toàn (key chỉ hiển thị một lần duy nhất khi tạo).

<Callout type="warning">
Đừng chia sẻ API Key của bạn với người khác hoặc đưa nó vào các kho mã nguồn công khai.
</Callout>

## Đăng nhập một chạm

Trong Kimi Code CLI, bạn có thể dùng lệnh `/login` để cấp quyền nhanh chóng mà không cần sao chép API Key theo cách thủ công:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

Hệ thống sẽ tự động hoàn tất việc cấp quyền thiết bị và liên kết tài khoản — toàn bộ quá trình chỉ mất vài giây.

## Quản lý thiết bị

- Mỗi tài khoản có thể được sử dụng trên nhiều thiết bị.
- Các cấp quyền thiết bị **không hoạt động trong 30 ngày** sẽ tự động hết hạn; bạn cần chạy lại `/login` để cấp quyền lại.
- Bạn có thể xem và quản lý các thiết bị đã được cấp quyền trong console.

## Cách chuyển mô hình

**Mô hình HighSpeed đã có mặt.** Kimi Code cung cấp hai cấp — **Standard** và **HighSpeed** — dựa trên cùng một mô hình với năng lực lập trình giống hệt nhau, dùng chung Base URL, API Key và quyền lợi hội viên. HighSpeed cho tốc độ đầu ra khoảng **5–6× so với Standard**, nên khi bạn cần phản hồi tức thì và lặp nhanh, chỉ một cú nhấp là có trải nghiệm lập trình mượt hơn. Khác biệt chính:

| Mục | Standard | HighSpeed |
| --- | --- | --- |
| ID mô hình | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| Tốc độ đầu ra | Cơ sở | Nhanh ~5–6× so với Standard |
| Mức tiêu thụ tín dụng | Cơ sở | ~3× so với Standard |
| Năng lực lập trình | Đầy đủ | Giống Standard |
| Phù hợp nhất cho | Tác vụ lập trình hằng ngày | Phản hồi tức thì, lặp nhanh |
| Hội viên | Dành cho mọi thành viên Kimi Code | Cần gói [Allegretto](https://www.kimi.com/membership/pricing) trở lên |

Cách chuyển sang mô hình mong muốn:

- **Kimi Code CLI chính thức**: gõ `/model` trong một phiên để chuyển trực tiếp giữa Standard và HighSpeed — không cần thay đổi cấu hình.
- **Kimi Code cho VS Code**: chọn mô hình mong muốn từ menu thả xuống trên thanh nhập; nếu HighSpeed chưa xuất hiện, khởi động lại VS Code hoặc cài lại tiện ích.
- **Công cụ bên thứ ba**: đặt Model ID của công cụ thành mô hình mong muốn; mọi cài đặt khác giữ nguyên. Xem vị trí trong từng công cụ tại [Sử dụng trong các Coding Agent bên thứ ba](/kimi-code/third-party-agents).

<Callout type="info">
- **ID mô hình ổn định**: cả hai ID đều là định danh ổn định; backend cập nhật mô hình được ánh xạ khi có cải tiến, không cần đổi cấu hình phía client.
- **Nhập chính xác**: ID HighSpeed phải là `kimi-for-coding-highspeed`. Nếu gõ sai hoặc đặt giá trị khác, yêu cầu sẽ âm thầm quay về `kimi-for-coding` tiêu chuẩn — không báo lỗi, nhưng cũng không tăng tốc.
- **401 khi không có quyền**: nếu gói của bạn không bao gồm quyền HighSpeed, lệnh gọi trả về `401`; hãy nâng cấp lên Allegretto trở lên.
</Callout>

<Callout type="tip">
**Vì sao toàn bộ tác vụ không cảm thấy nhanh gấp 5–6 lần?** «5–6×» đề cập đến **tốc độ đầu ra của mô hình** (tốc độ sinh văn bản/mã). Tổng thời gian của một tác vụ lập trình gồm «đầu ra của mô hình + các lệnh gọi công cụ (đọc/ghi tệp, chạy lệnh, tra cứu web, v.v.) + thực thi script»: thời lượng của các lệnh gọi công cụ và thực thi script phụ thuộc vào dự án và lệnh của bạn, và HighSpeed không thay đổi phần này. Vì vậy nếu tổng thể không cảm thấy nhanh gấp 5–6 lần, thường là do các lệnh gọi công cụ / thực thi script chiếm phần lớn lượt đó, chứ không phải do việc sinh của mô hình chậm lại.
</Callout>
