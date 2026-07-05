---
title: "Mục tiêu"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "Dùng mục tiêu để Kimi Code luôn hướng đến một kết quả đã xác định xuyên suốt các lượt làm việc."
---

<SeoMeta
  title="Mục tiêu - Trung tâm trợ giúp Kimi"
  description="Dùng /goal để Kimi Code luôn hướng đến một kết quả đã xác định xuyên suốt các lượt làm việc. Tìm hiểu khi nào nên dùng mục tiêu, cách quản lý vòng đời và cách xếp hàng các mục tiêu sắp tới."
/>

# Mục tiêu

Mục tiêu giúp Kimi Code luôn hướng đến một kết quả đã xác định xuyên suốt các lượt làm việc. Khác với một câu lệnh thông thường chỉ nói cần làm gì tiếp theo, mục tiêu nói rõ điều gì phải trở thành sự thật. Hãy dùng `/goal` khi tác vụ có một đích đến rõ ràng, nhưng bước hữu ích tiếp theo lại phụ thuộc vào những gì agent học được trong quá trình làm việc — ví dụ như sửa một loạt bài kiểm thử bị lỗi hoặc truy tìm nguyên nhân gốc rễ khiến bản build hỏng.

## Bắt đầu một mục tiêu

Viết mục tiêu sau `/goal`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Sửa các bug được liệt kê trong issue tracker.",
    },
  ]}
/>

Kimi Code lưu lại mục tiêu, gửi nó dưới dạng tin nhắn người dùng tiếp theo và khởi động chế độ mục tiêu. Sau mỗi lượt, nó kiểm tra xem mục tiêu đã hoàn thành, bị chặn, tạm dừng hay vẫn đang hoạt động.

Mục tiêu phát huy hiệu quả tốt nhất khi nó nêu rõ đích đến và bằng chứng chứng minh điều đó:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Sửa mọi bug có nhãn checkout-regression, thêm hoặc cập nhật test cho từng bản sửa, và chạy bộ test checkout",
    },
  ]}
/>

Tránh đặt mục tiêu chỉ nêu một hướng đi chung chung:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Tìm tất cả bug trong codebase này.",
    },
  ]}
/>

Mục tiêu đó không nói rõ thế nào là thành công, cần kiểm tra những gì hay khi nào nên dừng lại. Agent có thể bị chặn ngay lập tức, hoặc tiếp tục làm việc lâu hơn nhiều so với bạn mong đợi.

### Khi nào nên dùng mục tiêu

Dùng mục tiêu cho những công việc có đích đến rõ ràng và bằng chứng có thể kiểm chứng.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Sửa mọi test checkout bị lỗi và chạy thành công bộ test checkout.",
    },
  ]}
/>

Kimi Code có thể kiểm tra kết quả bài kiểm thử, thay đổi tệp, chạy lại các bước kiểm tra và quyết định khi nào mục tiêu hoàn thành.

Dùng mục tiêu khi tác vụ có thể cần nhiều lượt điều tra và sửa chữa.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Tìm lý do bản build phát hành bị lỗi, sửa nguyên nhân gốc rễ, và xác nhận bản build vượt qua.",
    },
  ]}
/>

Mục tiêu mô tả kết quả, nên agent có thể thích ứng khi manh mối đầu tiên hóa ra không phải nguyên nhân gốc rễ.

Dùng mục tiêu cho những công việc theo trình tự cần tiếp tục mà không cần thêm câu lệnh nào.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Cập nhật phần triển khai tính năng, thêm tài liệu, chạy test, và tóm tắt các tệp đã thay đổi.",
    },
  ]}
/>

Điều này hữu ích khi bạn đã biết những bước kiểm tra hoặc sản phẩm nào cần phải có trước khi công việc hoàn tất.

### Khi nào không nên dùng mục tiêu

Đừng dùng mục tiêu cho những chủ đề rộng hay những cuộc trao đổi mở.

**Ví dụ phản chứng:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Xin chào!",
    },
  ]}
/>

<Callout type="warning">
Agent sẽ đánh dấu mục tiêu là hoàn thành ngay lập tức đối với những thứ không phải mục tiêu.
</Callout>

Đừng dùng mục tiêu cho những tác vụ đã biết là bất khả thi hoặc không thể giải quyết được.

**Ví dụ phản chứng:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Chứng minh 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
Agent sẽ đánh dấu mục tiêu là bị chặn nếu mục tiêu có vẻ bất khả thi hoặc không thể giải quyết được.
</Callout>

Đừng dùng mục tiêu với những mục tiêu mơ hồ hay quá phức tạp.

**Ví dụ phản chứng:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Tạo một trò chơi điện tử trong một tệp HTML duy nhất.",
    },
  ]}
/>

<Callout type="warning">
Agent có thể hoàn thành mục tiêu, nhưng cũng có thể cho ra những kết quả bất ngờ hoặc khó lường sau một thời gian dài.
</Callout>

## Quản lý vòng đời

Dùng cùng bộ lệnh để xem hoặc điều khiển mục tiêu hiện tại:

| Lệnh | Hành động |
| --- | --- |
| `/goal` hoặc `/goal status` | Hiển thị mục tiêu hiện tại và tiến độ của nó |
| `/goal pause` | Tạm dừng mục tiêu đang hoạt động mà không xóa nó |
| `/goal resume` | Tiếp tục một mục tiêu đang tạm dừng hoặc bị chặn |
| `/goal cancel` | Xóa mục tiêu hiện tại |
| `/goal replace <objective>` | Thay thế mục tiêu hiện tại bằng một mục tiêu mới |

Một mục tiêu có thể dừng theo ba cách:

- **hoàn thành**: mục tiêu đã đạt được, Kimi Code xóa mục tiêu, và agent tóm tắt cách nó hoàn thành công việc
- **tạm dừng**: bạn tạm dừng nó, ngắt lượt làm việc, tiếp tục một phiên đang có mục tiêu hoạt động, hoặc gặp lỗi từ mô hình, nhà cung cấp hay môi trường thực thi
- **bị chặn**: Kimi Code cần đầu vào, không thể hoàn thành mục tiêu như đã nêu, hoặc chạm đến giới hạn ngân sách. Khi agent chặn một mục tiêu, nó viết một thông báo ngắn giải thích lý do.

Hãy đưa các điều kiện dừng vào ngay trong mục tiêu. `/goal` không có cờ giới hạn dừng riêng.

## Xếp hàng các mục tiêu sắp tới

Đôi khi agent hoàn thành một mục tiêu quá nhanh. Người dùng có thể thất vọng vì mỗi lần chỉ giao được một mục tiêu. Nhiều người đã biết trước những mục tiêu họ muốn theo đuổi tiếp theo. Họ phải chờ mục tiêu hiện tại hoàn thành, mở TUI và gửi mục tiêu kế tiếp một cách thủ công.

Dùng `/goal next` khi bạn đã sẵn sàng có thêm việc nhưng không muốn ngắt mục tiêu hiện tại:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Cập nhật ghi chú phát hành sau khi các test vượt qua",
    },
  ]}
/>

Agent không nhìn thấy các mục tiêu sắp tới trong khi mục tiêu hiện tại đang chạy. Khi mục tiêu hiện tại hoàn thành, Kimi Code khởi động mục tiêu sắp tới đầu tiên theo đúng cách như khi người dùng nhập `/goal <objective>`.

Nếu không có mục tiêu nào đang hoạt động, `/goal next <objective>` sẽ khởi động mục tiêu đó ngay lập tức. Nó hoạt động giống như `/goal <objective>` và hiển thị thông báo trạng thái trước khi mục tiêu bắt đầu.

Quản lý các mục tiêu sắp tới một cách tương tác:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

Trong trình quản lý, dùng <kbd>↑</kbd> / <kbd>↓</kbd> để duyệt, <kbd>Space</kbd> để chọn một mục tiêu cần di chuyển, <kbd>↑</kbd> / <kbd>↓</kbd> để sắp xếp lại, <kbd>E</kbd> để chỉnh sửa, <kbd>D</kbd> để xóa, và <kbd>Esc</kbd> để hủy. Khi chỉnh sửa, dùng <kbd>Shift-Enter</kbd> hoặc <kbd>Ctrl-J</kbd> để thêm dòng mới, và <kbd>Enter</kbd> để lưu.

Nếu mục tiêu hiện tại bị tạm dừng, hủy bỏ hoặc bị chặn, Kimi Code sẽ không khởi động mục tiêu sắp tới. Khi một mục tiêu bị chặn mà vẫn còn các mục tiêu sắp tới, TUI sẽ nhắc bạn rằng chúng đang chờ mục tiêu hoàn thành.

## Dùng chế độ mục tiêu một cách thận trọng

Chế độ mục tiêu hữu ích cho những công việc có thể kiểm chứng bằng tệp, bài kiểm thử, kết quả lệnh, sản phẩm được tạo ra, hoặc một bản báo cáo viết rõ ràng. Nó kém hữu ích hơn với một chỉnh sửa đơn lẻ hay một câu hỏi chỉ cần một câu trả lời.

Ở chế độ quyền `manual`, công việc theo mục tiêu có thể tạm dừng để chờ phê duyệt lệnh gọi công cụ. Với công việc không có người giám sát, hãy dùng chế độ quyền phù hợp với mức độ rủi ro của kho mã và các lệnh mà agent có thể chạy.

Ở chế độ câu lệnh không tương tác, chỉ hỗ trợ việc tạo mục tiêu:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Sửa test checkout bị lỗi\"",
    },
  ]}
/>

Chế độ câu lệnh thoát với mã `0` khi mục tiêu hoàn thành, `3` khi nó bị chặn, và `6` khi nó tạm dừng. `/goal next` và các lệnh quản lý khác là những điều khiển của TUI.
