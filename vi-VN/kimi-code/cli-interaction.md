---
title: "Tương tác & nhập liệu"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Tương tác & nhập liệu - Trung tâm trợ giúp Kimi"
  description="Kimi Code CLI cung cấp nhiều phương thức tương tác giúp bạn cộng tác hiệu quả với AI."
/>

# Tương tác & nhập liệu

Kimi Code CLI cung cấp nhiều phương thức tương tác giúp bạn cộng tác hiệu quả với AI.

## Thinking mode

Thinking Mode cho phép AI suy luận sâu hơn trước khi phản hồi — lý tưởng cho những bài toán phức tạp.

- Dùng lệnh `/model` để chuyển đổi mô hình và bật/tắt Thinking Mode.
- Bạn cũng có thể bật Thinking Mode ngay khi khởi chạy bằng cờ `--thinking`.

## Nhập liệu nhiều dòng

Nhấn **Ctrl-J** để chèn một dòng mới khi nhập liệu nhiều dòng. Cách này rất tiện cho các câu lệnh dài hoặc khi dán những đoạn mã trải dài nhiều dòng.

## Dán từ clipboard

Nhấn **Ctrl-V** để dán nội dung từ clipboard — hỗ trợ cả văn bản lẫn hình ảnh. Khi dán hình ảnh, AI có thể trực tiếp diễn giải nội dung của ảnh (ví dụ: ảnh chụp màn hình, bản thiết kế mẫu, ảnh chụp lỗi).

## Lệnh dấu gạch chéo

Các lệnh bắt đầu bằng `/` được dùng để điều khiển phiên làm việc, cấu hình và gỡ lỗi. Một số lệnh thông dụng gồm:

| Lệnh | Mô tả |
| --- | --- |
| `/help` | Hiển thị thông tin trợ giúp |
| `/login` | Đăng nhập và cấp quyền |
| `/model` | Chuyển đổi mô hình và Thinking Mode |
| `/sessions` | Liệt kê và chuyển đổi phiên làm việc |
| `/clear` | Xóa ngữ cảnh hiện tại |
| `/compact` | Nén ngữ cảnh |
| `/init` | Tạo AGENTS.md |
| `/exit` | Thoát CLI |

Gõ `/` trong ô nhập liệu sẽ tự động hiển thị danh sách các lệnh khả dụng.

## Gợi ý đường dẫn với @

Dùng ký hiệu `@` trong câu nhập để tham chiếu đến đường dẫn tệp hoặc thư mục — hệ thống sẽ tự động hoàn thành:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Check @src/utils/auth.ts for any security vulnerabilities",
    },
  ]}
/>

AI sẽ tự động đọc nội dung tệp được tham chiếu để làm ngữ cảnh.

## Hỏi đáp có cấu trúc

Trong một số tình huống, AI sẽ đưa ra các lựa chọn có cấu trúc để bạn nhập liệu. Dùng **phím mũi tên** để chọn một phương án rồi nhấn **Enter** để xác nhận.

## Xác nhận phê duyệt

Khi AI cần chỉnh sửa tệp, chạy lệnh shell hay thực hiện các thao tác khác, nó sẽ hỏi bạn để xác nhận. Bạn có thể chọn:

| Lựa chọn | Mô tả |
| --- | --- |
| **Allow** | Cho phép thao tác này |
| **Allow for Session** | Cho phép các thao tác tương tự trong suốt phần còn lại của phiên hiện tại mà không hỏi lại |
| **Deny** | Từ chối thao tác này |

### Chế độ YOLO

Nếu tin tưởng vào các thao tác của AI, bạn có thể dùng YOLO Mode để bỏ qua mọi bước xác nhận:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> Trong YOLO Mode, AI sẽ tự động thực hiện mọi thao tác — hãy thận trọng khi dùng. Chỉ nên dùng trong môi trường phát triển được kiểm soát.
