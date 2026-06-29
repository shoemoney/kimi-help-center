---
title: "Giới hạn cuộc trò chuyện"
slug: "conversation-limits"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Giới hạn cuộc trò chuyện - Trung tâm trợ giúp Kimi"
  description="Khi ngữ cảnh cuộc trò chuyện trở nên quá dài và vượt quá giới hạn token của mô hình, Kimi Claw có thể ngừng phản hồi hoặc trả về lỗi."
/>

# Giới hạn cuộc trò chuyện

Khi ngữ cảnh cuộc trò chuyện trở nên quá dài và vượt quá giới hạn token của mô hình, Kimi Claw có thể ngừng phản hồi hoặc trả về lỗi.

**Cách khắc phục：**

- Gửi `/new` để bắt đầu một cuộc trò chuyện mới và xóa ngữ cảnh hiện tại.
- Nếu lỗi vẫn còn sau khi dùng `/new`, có thể quá nhiều Skills đã được nạp vào bộ nhớ. Hãy thử:
  - `/skills` — xem lại các skill đã cài và gỡ bỏ những skill bạn không cần.
  - `/compact` — nén ngữ cảnh hiện tại để giải phóng dung lượng.
  - `/reset` — đặt lại hoàn toàn Kimi Claw như giải pháp cuối cùng.

## Đã chạm đến rate limit của API?

Điều này có nghĩa là bạn đã chạm đến giới hạn tần suất yêu cầu. Hãy chờ một lát rồi thử lại.

**Để kiểm tra quota và rate limit của bạn:**

1. Truy cập [kimi.com/code](https://kimi.com/code).
2. Mở **Console**.
3. Nhấp vào **View Quota & Rate Limits** để xem mức sử dụng và giới hạn hiện tại của bạn.

Nếu bạn thường xuyên chạm đến rate limit, hãy cân nhắc giãn cách các tác vụ hoặc nâng cấp lên gói thành viên cao hơn để tăng thông lượng.
