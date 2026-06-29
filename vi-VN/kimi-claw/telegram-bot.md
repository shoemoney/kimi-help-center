---
title: "Bot Telegram"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Bot Telegram - Trung tâm trợ giúp Kimi"
  description="Kết nối Kimi Claw với Telegram để bạn có thể trò chuyện cùng nó từ bất kỳ thiết bị nào — không cần trình duyệt."
/>

# Bot Telegram

Kết nối Kimi Claw với Telegram để bạn có thể trò chuyện cùng nó từ bất kỳ thiết bị nào — không cần trình duyệt.

## Thiết lập từng bước

### 1. Tạo bot với BotFather

1. Mở Telegram và bắt đầu cuộc trò chuyện với [@BotFather](https://t.me/BotFather).
2. Gửi `/newbot`.
3. Làm theo hướng dẫn để chọn **tên hiển thị** và **tên người dùng** (phải kết thúc bằng `bot`).
4. BotFather sẽ trả lời kèm theo một **token bot** — hãy sao chép và giữ an toàn.

### 2. Kết nối bot với Kimi Claw

1. Mở cuộc trò chuyện Kimi Claw của bạn trên [kimi.com](https://kimi.com).
2. Hãy nói với Kimi Claw: _"Đây là token bot Telegram của tôi: `<your-token>`. Hãy thiết lập kết nối Telegram giúp tôi."_
3. Kimi Claw sẽ lưu token vào cấu hình của nó.

### 3. Khởi động lại và ghép nối

1. Khởi động lại Kimi Claw — hoặc yêu cầu nó khởi động lại, hoặc vào **Cài đặt → Khởi động lại Kimi Claw**.
2. Khi nó hoạt động trở lại, hãy mở bot Telegram mới của bạn và gửi một tin nhắn.
3. Kimi Claw sẽ phản hồi — quá trình ghép nối đã hoàn tất.

## Mẹo

- **Chế độ riêng tư:** Theo mặc định, các bot trong nhóm Telegram chỉ thấy những tin nhắn nhắc đến chúng hoặc bắt đầu bằng `/`. Nếu muốn Kimi Claw thấy được mọi tin nhắn trong nhóm, hãy tắt Chế độ riêng tư qua BotFather (`/setprivacy → Disable`).
- **Nhiều bot:** Bạn có thể tạo nhiều bot Telegram và kết nối chúng vào cùng một phiên bản Kimi Claw.
- **Bảo mật token:** Đừng bao giờ chia sẻ token bot của bạn một cách công khai. Nếu bị lộ, hãy thu hồi nó qua BotFather (`/revoke`) và cấu hình một token mới.
