---
title: "Sử dụng cùng các coding agent của bên thứ ba"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Sử dụng cùng các coding agent của bên thứ ba - Trung tâm trợ giúp Kimi"
  description="Quyền lợi Kimi Code có thể dùng được với Claude Code và Roo Code, giúp bạn tận hưởng năng lực AI của Kimi ngay trong công cụ lập trình yêu thích."
/>

# Sử dụng cùng các coding agent của bên thứ ba

Quyền lợi Kimi Code có thể dùng được với Claude Code và Roo Code, giúp bạn tận hưởng năng lực AI của Kimi ngay trong công cụ lập trình yêu thích.

## Điều kiện cần

- Một gói thành viên Kimi đang hoạt động và đã bật quyền lợi Kimi Code.
- Một API Key (được tạo trong [Kimi Console](https://www.kimi.com/code)).

## Sử dụng cùng Claude Code

[Claude Code](https://www.docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) là trợ lý lập trình dòng lệnh do Anthropic phát triển.

### Các bước cấu hình

1. Thiết lập các biến môi trường:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Khởi chạy Claude Code với mô hình `kimi-k2.5`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> Trong Claude Code, bạn có thể nhấn **Tab** để chuyển sang mô hình Kimi K2 Thinking.

> Nếu gặp lỗi 400 do các lệnh gọi `tool_search` gây ra, bạn có thể tạm thời khắc phục bằng cách đặt biến môi trường `ENABLE_TOOL_SEARCH=false`.

## Sử dụng cùng Roo Code

[Roo Code](https://www.github.com/RooCodeInc/Roo-Code) là một tiện ích lập trình AI dành cho VS Code.

### Cài đặt Roo Code

1. Tìm **Roo Code** trong VS Code Extensions Marketplace rồi cài đặt.
2. Sau khi cài xong, biểu tượng Roo Code sẽ xuất hiện trên thanh hoạt động; nếu không thấy, hãy khởi động lại VS Code.

### Cấu hình mô hình Kimi Code

1. Mở bảng điều khiển Roo Code và vào trang **Settings**.
2. Tại mục **Providers**, chọn **OpenAI Compatible** và điền các thông tin sau:

   | Thiết lập | Giá trị |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | API Key của bạn |
   | Model | `kimi-k2.5` |

3. Lưu cấu hình là bạn đã sẵn sàng.

## Lưu ý quan trọng

- Quyền lợi Kimi Code chỉ được hỗ trợ trên **Kimi Code CLI**, **Claude Code** và **Roo Code**.
- Việc dùng API Key của bạn với những nền tảng hoặc công cụ chưa được cấp phép có thể bị xem là vi phạm và dẫn đến việc bị hạn chế quyền truy cập.
- Nếu có thắc mắc, hãy xem trang [Quyền lợi](/kimi-code/benefits) hoặc liên hệ bộ phận hỗ trợ Kimi.
