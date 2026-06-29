---
title: "Phiên làm việc & ngữ cảnh"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Phiên làm việc \u0026 ngữ cảnh - Kimi Help Center"
  description="Kimi Code CLI hỗ trợ quản lý nhiều phiên làm việc và lưu giữ ngữ cảnh, cho phép bạn tạm dừng và tiếp tục công việc bất cứ lúc nào."
/>

# Phiên làm việc & ngữ cảnh

Kimi Code CLI hỗ trợ quản lý nhiều phiên làm việc và lưu giữ ngữ cảnh, cho phép bạn tạm dừng và tiếp tục công việc bất cứ lúc nào.

## Tiếp tục phiên làm việc

Bạn có thể tiếp tục một phiên làm việc trước đó theo nhiều cách:

### Tiếp tục phiên gần nhất

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

Dùng cờ `--continue` (hoặc `-c`) để tiếp tục cuộc trò chuyện gần nhất.
### Chỉ định ID phiên

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session \u003csession-id\u003e",
    },
  ]}
/>

Dùng cờ `--session` để khôi phục một phiên làm việc cụ thể.

### Duyệt và chuyển đổi

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

Chạy `/sessions` (hoặc `/resume`) để xem danh sách phiên làm việc và chọn một phiên để khôi phục.
## Phát lại khi khởi động

Khi tiếp tục một phiên làm việc, Kimi Code CLI sẽ tự động phát lại lịch sử trò chuyện, giúp bạn nhanh chóng nhớ lại ngữ cảnh và tiến độ trước đó.

## Lưu giữ trạng thái

Các trạng thái sau đây được tự động lưu và khôi phục qua các phiên làm việc:

- **Quyết định phê duyệt**: Những quyết định như "Cho phép trong phiên này" sẽ được ghi nhớ.
- **Sub-agent động**: Cấu hình sub-agent được tạo trong một phiên làm việc sẽ được giữ lại.
- **Thư mục bổ sung**: Các thư mục làm việc thêm vào qua câu lệnh cũng được lưu giữ.

Nhờ đó, bạn có thể tiếp tục công việc trước đó một cách liền mạch sau khi khôi phục phiên làm việc.

## Xóa & nén ngữ cảnh

Kimi Code CLI sẽ tự động nén ngữ cảnh khi cần thiết để đảm bảo cuộc trò chuyện có thể tiếp diễn. Bạn cũng có thể quản lý ngữ cảnh thủ công bằng các lệnh gạch chéo:

### Xóa ngữ cảnh

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

Nhập `/clear` (hoặc `/reset`) để xóa toàn bộ ngữ cảnh trong phiên hiện tại và bắt đầu một cuộc trò chuyện mới:

### Nén ngữ cảnh

Nhập `/compact` để nén ngữ cảnh — giữ lại thông tin quan trọng trong khi giảm lượng token sử dụng:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

Bạn cũng có thể kèm theo hướng dẫn khi nén để cho AI biết thông tin nào cần ưu tiên:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### Trạng thái ngữ cảnh

Thanh trạng thái ở cuối CLI hiển thị mức sử dụng ngữ cảnh hiện tại theo thời gian thực, giúp bạn theo dõi lượng ngữ cảnh đang tiêu thụ. Khi mức sử dụng cao, hãy dùng `/compact` để nén ngữ cảnh và tránh mất các thông tin quan trọng.
