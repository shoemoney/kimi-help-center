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
