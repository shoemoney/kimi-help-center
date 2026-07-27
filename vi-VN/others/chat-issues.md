---
title: "Các sự cố thường gặp khi chat với Kimi"
slug: "chat-issues"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Các sự cố thường gặp khi chat với Kimi - Kimi Help Center"
  description="Bạn gặp trục trặc khi chat với Kimi? Bài viết này tổng hợp cách xử lý các sự cố chat thường gặp như câu trả lời bị ngắt quãng, nội dung bất thường và lỗi tải, giúp bạn khắc phục nhanh chóng."
/>

# Các sự cố thường gặp khi chat với Kimi

## Không gửi được tin nhắn / xuất hiện vòng tròn đỏ?

Nguyên nhân có thể là:

- **Đã kích hoạt rate limit**: Kimi có giới hạn số lượt hội thoại trong một số khoảng thời gian nhất định. Nếu gửi tin nhắn quá dồn dập, bạn có thể tạm thời không tiếp tục tương tác được. Hãy chờ 2–3 giờ rồi thử lại, đồng thời điều chỉnh tần suất trò chuyện.
- **Kết nối mạng kém**: Tín hiệu yếu hoặc kết nối không ổn định có thể khiến tin nhắn không gửi được. Hãy đổi sang mạng khác rồi thử lại.

## Cuộc trò chuyện vượt quá 200.000 từ?

Ngữ cảnh cho một cuộc trò chuyện của K2.6 vào khoảng 128K token (~200.000 từ). Khi chạm ngưỡng này, mô hình sẽ không thể đọc thêm nội dung mới. Cách xử lý tùy thuộc vào lý do bạn đạt đến giới hạn:

- **Một tệp bạn gửi quá lớn và chạm giới hạn ngay ở lượt đầu tiên**: hãy chia tệp thành các phần nhỏ hơn rồi gửi theo từng đợt.
- **Cuộc trò chuyện nhiều lượt tích lũy dần đến giới hạn**: trước hết hãy tóm tắt các kết luận quan trọng đến thời điểm hiện tại (bạn cũng có thể yêu cầu Kimi "tóm tắt và tạo tài liệu bàn giao"), sau đó dán phần đó vào một cuộc trò chuyện mới làm ngữ cảnh ban đầu để tiếp tục.

<Callout type="info">
**Mẹo**:
- Về lâu dài, dùng [Bộ nhớ](/features/memory-space) và [Dự án](/features/project) sẽ giúp bạn tránh chạm giới hạn — Bộ nhớ tự động lưu lại thông tin quan trọng, còn Dự án gom các tệp tham chiếu, chỉ dẫn và bộ nhớ của bạn vào cùng một nơi, để mỗi cuộc trò chuyện mới đều có sẵn ngữ cảnh.
- Xóa các tin nhắn trước đó trong cùng một cuộc trò chuyện không giải phóng cửa sổ ngữ cảnh — thay vào đó, hãy bắt đầu một cuộc trò chuyện mới.
- Thinking tiêu tốn token; để tiết kiệm credit, hãy đặt **Độ mạnh Thinking** thành **Tiêu chuẩn**.
- Với tài liệu rất dài, K3 cung cấp ngữ cảnh 1M token (khả dụng với gói hội viên cao nhất); khi soạn, hãy chọn **Độ dài cuộc trò chuyện: Rất dài**.
</Callout>

## Thấy thông báo "mình nói chuyện khác nhé"?

Thông báo này cho biết nội dung hiện tại đã kích hoạt chính sách an toàn nên chủ đề không thể tiếp tục. Bạn chỉ cần nhập một chủ đề mới để tiếp tục trò chuyện — không cần chờ.

<Callout type="info">
Nếu bạn cho rằng nội dung không vi phạm, hãy nhấp "👎" để gửi phản hồi và giúp chúng tôi cải thiện chính sách an toàn.
</Callout>

## Thấy thông báo "Kimi hơi mệt rồi"?

Điều này nghĩa là có quá nhiều người dùng đang online và tài nguyên tính toán đang chịu tải lớn — đây là rate limit trong giờ cao điểm. Hãy chờ 1–2 phút rồi thử lại.

<Callout type="tip">
Để giảm thời gian chờ, bạn có thể đăng ký gói hội viên để được ưu tiên truy cập tài nguyên tính toán riêng.
</Callout>

## Không tải được PPT/Word/Excel?

Cửa sổ chat của Kimi không trực tiếp tạo tệp Office để tải xuống:

| Loại tệp | Tạo ở đâu |
|-----------|-------------------|
| **Slides** | Truy cập [Kimi Slides](https://www.kimi.com/slides) — hỗ trợ tạo online và tải xuống |
| **Word/Excel** | Dùng chế độ **Agent** |
