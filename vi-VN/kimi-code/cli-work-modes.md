---
title: "Chế độ làm việc"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "Cách sử dụng chế độ lập kế hoạch và Thinking mode trong Kimi Code CLI, cũng như thời điểm nên dùng."
---

<SeoMeta
  title="Chế độ làm việc của Kimi Code CLI - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu cách sử dụng chế độ lập kế hoạch và Thinking mode trong Kimi Code CLI, cũng như thời điểm nên dùng."
/>

# Chế độ làm việc

## Chế độ lập kế hoạch

Chế độ lập kế hoạch là chế độ lập kế hoạch chỉ đọc, cho phép AI tạo kế hoạch triển khai trước khi bắt đầu viết mã, giúp tránh lãng phí công sức vào sai hướng.

Trong chế độ lập kế hoạch, AI chỉ có thể dùng các công cụ chỉ đọc (`Glob`, `Grep`, `ReadFile`) để khám phá codebase. AI không thể chỉnh sửa bất kỳ tệp nào hoặc chạy lệnh. AI sẽ ghi kế hoạch vào một tệp kế hoạch riêng rồi gửi để bạn phê duyệt. Bạn có thể phê duyệt, từ chối hoặc đưa ra nhận xét để chỉnh sửa.

### Vào chế độ lập kế hoạch

Bạn có thể vào chế độ lập kế hoạch theo bốn cách:

- **Tùy chọn khi khởi động**: Dùng `kimi --plan` để bắt đầu phiên mới trực tiếp trong chế độ lập kế hoạch
- **Phím tắt**: Nhấn `Shift-Tab` để bật hoặc tắt chế độ lập kế hoạch
- **Lệnh slash**: Nhập `/plan` hoặc `/plan on`
- **Do AI đề xuất**: Với các tác vụ phức tạp, AI có thể yêu cầu vào chế độ lập kế hoạch thông qua công cụ `EnterPlanMode`. Bạn có thể chấp nhận hoặc từ chối

Bạn cũng có thể đặt `default_plan_mode = true` trong tệp cấu hình để mọi phiên mới mặc định bắt đầu ở chế độ lập kế hoạch.

Sau khi vào chế độ lập kế hoạch, prompt sẽ đổi thành `📋`, và thanh trạng thái phía dưới hiển thị chỉ báo `plan` màu xanh lam.

### Xem xét và phê duyệt kế hoạch

Khi AI hoàn tất kế hoạch, AI sẽ gửi kế hoạch để phê duyệt thông qua `ExitPlanMode`. Bảng phê duyệt hiển thị toàn bộ kế hoạch. Bạn có thể:

- **Phê duyệt thực thi**: Nếu kế hoạch gồm nhiều hướng triển khai, AI sẽ liệt kê 2–3 tùy chọn có nhãn (chẳng hạn như "Kế hoạch A" hoặc "Kế hoạch B (Đề xuất)") để bạn chọn. Sau khi bạn chọn một tùy chọn, AI sẽ thoát khỏi chế độ lập kế hoạch và thực thi theo hướng đó. Nếu chỉ có một hướng, nút **Phê duyệt** sẽ được hiển thị
- **Từ chối**: Từ chối kế hoạch và tiếp tục ở chế độ lập kế hoạch. Bạn có thể đưa ra phản hồi trong cuộc trò chuyện
- **Từ chối và thoát**: Từ chối kế hoạch và thoát khỏi chế độ lập kế hoạch trong một bước
- **Chỉnh sửa**: Nhập nhận xét chỉnh sửa. AI sẽ cập nhật kế hoạch tương ứng và gửi lại

Nhấn `Ctrl-E` để xem toàn bộ kế hoạch trong trình xem toàn màn hình.

### Quản lý chế độ lập kế hoạch

Dùng lệnh `/plan` để quản lý chế độ lập kế hoạch:

- `/plan`: Bật hoặc tắt chế độ lập kế hoạch
- `/plan on`: Bật chế độ lập kế hoạch
- `/plan off`: Tắt chế độ lập kế hoạch
- `/plan view`: Xem kế hoạch hiện tại
- `/plan clear`: Xóa tệp kế hoạch hiện tại

## Thinking mode

Thinking mode cho phép AI suy nghĩ sâu hơn trước khi phản hồi, phù hợp với các vấn đề phức tạp.

Bạn có thể dùng lệnh `/model` để chuyển đổi mô hình và Thinking mode. Sau khi bạn chọn một mô hình, nếu mô hình đó hỗ trợ Thinking mode, hệ thống sẽ hỏi có bật chế độ này hay không. Bạn cũng có thể bật ngay khi khởi động bằng tùy chọn `--thinking`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> Mẹo: Thinking mode phải được mô hình hiện tại hỗ trợ. Một số mô hình, chẳng hạn như `kimi-k2-thinking-turbo`, luôn dùng Thinking mode và không thể tắt.
