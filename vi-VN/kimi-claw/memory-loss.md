---
title: "Mất bộ nhớ & ngữ cảnh"
slug: "memory-loss"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Mất bộ nhớ & ngữ cảnh - Trung tâm trợ giúp Kimi"
  description="OpenClaw tự động đặt lại cuộc trò chuyện vào 4:00 sáng mỗi ngày. Điều này ngăn ngữ cảnh quá dài gây ra ảo giác hoặc làm giảm chất lượng phản hồi."
/>

# Mất bộ nhớ & ngữ cảnh

## Vì sao cuộc trò chuyện hôm qua biến mất?

OpenClaw tự động đặt lại cuộc trò chuyện vào **4:00 sáng mỗi ngày**. Điều này ngăn ngữ cảnh quá dài gây ra ảo giác hoặc làm giảm chất lượng phản hồi.

Nếu cần điều chỉnh thời điểm đặt lại, bạn có thể sửa lịch trong `config.yaml`.

**Cách làm tốt nhất:** Với bất cứ điều gì quan trọng — sở thích, chi tiết dự án, các chỉ dẫn lặp lại — hãy yêu cầu Kimi Claw lưu lại một cách rõ ràng: _"Hãy ghi nhớ điều này vào Memory."_ Thông tin lưu trong Memory sẽ được giữ lại qua các lần đặt lại cuộc trò chuyện.

## Kimi Claw bị mất bộ nhớ?

Lần đặt lại lúc 4 giờ sáng mỗi ngày sẽ xóa ngữ cảnh cuộc trò chuyện đang hoạt động. Nếu một điều gì đó chưa được lưu vào **Memory**, nó sẽ mất.

**Cách khắc phục:**
- Trong cuộc trò chuyện, hãy nói _"Hãy ghi nhớ X vào Memory"_ và Kimi Claw sẽ ghi vào bộ nhớ dài hạn.
- Xem lại các bộ nhớ đã lưu qua **Workspace → AGENTS.md → #MEMORY**.

<Frames
  src="./images/memory-loss/claw-memory.png"
  alt="Claw Memory"
/>

- Dùng lệnh `/memory` bất cứ lúc nào để xem và quản lý các bộ nhớ đã lưu.

## Bộ nhớ được giữ lại bao lâu sau khi hết hạn đăng ký?

Các tệp bộ nhớ nằm trong Workspace của bạn, và bạn có thể xem hoặc tải xuống bất cứ lúc nào.

- Sau khi tư cách thành viên hết hạn, phiên bản đám mây sẽ được **giữ lại trong 7 ngày**.
- Gia hạn trong vòng 7 ngày và toàn bộ dữ liệu — bộ nhớ, cấu hình, kỹ năng — sẽ được khôi phục đầy đủ.
- Sau 7 ngày, phiên bản có thể bị thu hồi và dữ liệu bị xóa vĩnh viễn.
- Tính năng xuất/sao lưu bộ nhớ đang được phát triển để việc di chuyển dữ liệu dễ dàng hơn.
