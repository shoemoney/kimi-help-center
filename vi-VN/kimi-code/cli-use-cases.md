---
title: "Các trường hợp sử dụng phổ biến"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Các trường hợp sử dụng phổ biến - Kimi Help Center"
  description="Dưới đây là một số tình huống điển hình khi dùng Kimi Code CLI trong công việc phát triển hằng ngày, mỗi tình huống đều kèm ví dụ prompt để bạn tham khảo."
/>

# Các trường hợp sử dụng phổ biến

Dưới đây là một số tình huống điển hình khi dùng Kimi Code CLI trong công việc phát triển hằng ngày, mỗi tình huống đều kèm ví dụ prompt để bạn tham khảo.

## Xây dựng tính năng mới

Mô tả yêu cầu của bạn bằng ngôn ngữ tự nhiên — AI sẽ tự động đọc mã liên quan, viết mã mới và kiểm tra kết quả.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Thêm tính năng sắp xếp theo ngày đăng ký vào trang danh sách người dùng — cần thay đổi cả frontend lẫn backend",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Xây dựng middleware giới hạn tốc độ bằng thuật toán token bucket, giới hạn mỗi IP tối đa 60 yêu cầu mỗi phút",
    },
  ]}
/>

## Sửa lỗi

Dán trực tiếp thông báo lỗi cho AI — nó sẽ tự động xác định nguyên nhân gốc rễ và đưa ra cách khắc phục.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sau khi chạy npm test tôi gặp lỗi này, hãy sửa giúp:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Pipeline CI thất bại ở bước lint. Đây là log: ... Hãy sửa giúp",
    },
  ]}
/>

## Tìm hiểu một dự án

Khi bạn mới bắt đầu với một dự án hoặc cần hiểu một đoạn mã cụ thể, cứ hỏi là được.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kiến trúc tổng thể của dự án này như thế nào? Các module chính gồm những gì?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/auth/middleware.ts làm nhiệm vụ gì? Luồng xác thực hoạt động ra sao?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Giải thích cách quản lý migration cơ sở dữ liệu trong dự án này",
    },
  ]}
/>

## Tự động hóa các tác vụ nhỏ

Lý tưởng cho việc chỉnh sửa mã hàng loạt, bổ sung tài liệu, tạo bài kiểm thử và các công việc lặp đi lặp lại khác.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Thêm chú thích JSDoc cho mọi hàm được export trong thư mục src/utils/",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tạo unit test cho tất cả các phương thức public của lớp UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Thay tất cả khai báo var trong dự án bằng const hoặc let",
    },
  ]}
/>

## Tác vụ chung

Kimi Code CLI không chỉ gói gọn trong lập trình — nó còn có thể nghiên cứu, phân tích dữ liệu, xử lý tệp hàng loạt và nhiều việc khác.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Nghiên cứu các thư viện ORM phổ biến hiện nay cho Node.js và so sánh ưu nhược điểm của chúng",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Phân tích log truy cập trong 7 ngày qua ở thư mục logs/ và liệt kê 10 đường dẫn yêu cầu nhiều nhất",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Gộp tất cả tệp CSV trong thư mục data/ thành một và loại bỏ các dòng trùng lặp",
    },
  ]}
/>
