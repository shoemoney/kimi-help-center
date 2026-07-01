---
title: "Hướng dẫn bắt đầu nhanh Kimi Code cho VS Code"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Hướng dẫn bắt đầu nhanh Kimi Code cho VS Code - Trung tâm trợ giúp Kimi"
  description="Kimi Code cho VS Code là một tiện ích mở rộng tích hợp vào Visual Studio Code. Sau khi cài đặt, bạn có thể đặt câu hỏi, xem khác biệt mã và nhanh chóng commit các thay đổi..."
/>

# Hướng dẫn bắt đầu nhanh Kimi Code cho VS Code

<Callout type="warning">
**Lưu ý về khả năng tương thích của tiện ích VS Code**

Hiện tại, Kimi Code cho VS Code chỉ cho phép cài đặt mới đối với người dùng CLI Python cũ. Người dùng hiện tại đã cài tiện ích này vẫn có thể tiếp tục sử dụng sau khi nâng cấp lên CLI mới. Người dùng CLI phiên bản TS chưa được hỗ trợ cài đặt vào lúc này.
</Callout>

Kimi Code cho VS Code là một tiện ích mở rộng tích hợp vào Visual Studio Code. Sau khi cài đặt, bạn có thể đặt câu hỏi ngay trong trình soạn thảo, xem khác biệt mã và nhanh chóng commit các thay đổi.

Tiện ích này có thể đọc nội dung những tệp bạn tham chiếu và hiển thị các gợi ý chỉnh sửa qua giao diện trực quan, chỉ thực thi sau khi bạn xác nhận. Toàn bộ quy trình đều nằm trong tầm kiểm soát của bạn, đồng thời nâng cao đáng kể hiệu quả phát triển.

Tiện ích này cung cấp một bảng trò chuyện gốc ngay trong VS Code, hỗ trợ:
- Tham chiếu tệp hoặc thư mục bằng ký hiệu `@`.
- Thực hiện quét dự án và quản lý ngữ cảnh bằng lệnh `/`.
- Chế độ xem khác biệt thể hiện các thay đổi của tệp kèm khả năng hoàn tác.
- Tích hợp các máy chủ MCP để gọi các công cụ bên ngoài.

---

## Cài đặt

1.  **Yêu cầu trước**: Bạn cần có gói đăng ký tài khoản Kimi hoặc khóa API Kimi.
2.  **Marketplace**: Cài đặt qua [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code).

<Callout type="tip">
Nếu tiện ích không xuất hiện sau khi cài đặt, hãy khởi động lại VS Code hoặc thực thi lệnh **Developer: Reload Window** trong bảng lệnh (Mac: `Cmd+Shift+P`, Win/Linux: `Ctrl+Shift+P`).
</Callout>

---

## Xác thực

Kimi Code hỗ trợ hai chế độ xác thực. Bạn có thể chuyển đổi chế độ bất cứ lúc nào qua **biểu tượng bánh răng**.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="Cài đặt xác thực"
  width={800}
  height={450}
/>

- **Chế độ tài khoản Kimi**: Nhấp nút đăng nhập để cấp quyền qua trình duyệt.
- **Chế độ khóa API**: Nhấp để bỏ qua đăng nhập nếu bạn đã cấu hình khóa API.

---

## Các quy trình làm việc điển hình

Đọc mã: Gõ `@` để chọn một tệp hoặc thư mục, yêu cầu giải thích luồng mã và đặt thêm các câu hỏi tiếp theo.

Tái cấu trúc: Tham chiếu mã mục tiêu như `@src/feature/`, yêu cầu lập kế hoạch tái cấu trúc, xem khác biệt và phê duyệt có chọn lọc, dùng tính năng hoàn tác khi cần.

Gỡ lỗi: Dán thông báo lỗi hoặc dấu vết ngăn xếp, tham chiếu các tệp liên quan, yêu cầu chẩn đoán và khắc phục, rồi phê duyệt các thay đổi được đề xuất.

Tổng quan dự án: Tham chiếu một thư mục như `@src/services/`, yêu cầu bản đồ module hoặc tóm tắt kiến trúc, rồi tiếp tục hỏi về phụ thuộc hay các điểm yếu.

---

## Lệnh và phím tắt

Dùng `CodePreview` để thử nhanh các lệnh hoặc tra cứu những phím tắt quan trọng:

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Focus Kimi input box\nAlt+K : Insert current file reference\nCtrl+N : New conversation",
    },
  ]}
/>

| Phím tắt | Chức năng |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Đưa con trỏ vào ô nhập của Kimi |
| `Alt+K` | Chèn tham chiếu tệp hiện tại |
| `Ctrl+N` / `Cmd+N` | Cuộc trò chuyện mới |
| `↑` / `↓` | Duyệt lịch sử nhập liệu |

<Callout type="info">
Gõ **Kimi Code** trong bảng lệnh để truy cập thêm nhiều lệnh: mở trong tab mới, mở ở thanh bên, hoặc quản lý phiên làm việc.
</Callout>
