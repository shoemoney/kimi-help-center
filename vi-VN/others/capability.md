---
title: "Kimi có thể làm gì?"
slug: "capability"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi có thể làm gì? - Trung tâm trợ giúp Kimi"
  description="Câu hỏi thường gặp về năng lực của Kimi: tìm kiếm trực tuyến và thao tác trình duyệt, điều khiển màn hình máy tính (Kimi Computer Use), tạo hình ảnh/video/giọng nói, viết code, dựng website, tạo PPT và bảng tính, xử lý tệp, bộ nhớ, hỗ trợ đa ngôn ngữ và độ dài ngữ cảnh."
/>

# Kimi có thể làm gì?

## Kimi có thể tìm kiếm trên internet và duyệt trang web không?

Có. Kimi tự động xác định câu hỏi có cần truy cập trực tuyến hay không và dùng các công cụ tìm kiếm tích hợp để truy xuất thông tin. Trong **Kimi Code** và **Kimi Work**, với **WebBridge**, Kimi còn có thể thao tác trình duyệt như con người—duyệt trang, nhấp chuột, cuộn, trích xuất dữ liệu và hoàn thành các tác vụ web nhiều bước.

## Kimi có thể thao tác trên màn hình máy tính của tôi không?

Trong các cuộc trò chuyện thông thường và tác vụ Agent, Kimi **không có quyền** thao tác trên máy tính của bạn. **Trong Kimi Work, bạn có thể tự chọn bật quyền này**.

Trong Kimi Work, với **Kimi Computer Use**, Kimi có thể thay bạn nhấp chuột, nhập liệu, cuộn, kéo thả và đọc nội dung giao diện ứng dụng hoặc ảnh chụp màn hình trên desktop. Ví dụ: “Nhấp X giúp tôi”, “Nhập … vào Y”, “Kiểm tra trạng thái hiện tại của ứng dụng Z” hoặc “Liệt kê các ứng dụng đang mở”. Mọi thao tác đều chạy ở chế độ nền, nên Kimi sẽ không chiếm quyền chuột của bạn hay chuyển cửa sổ đang hiển thị.

**Cách cài đặt**: Trong Kimi Work, nhấp “Plugin”, chọn “Kimi Computer Use”, rồi nhấp Cài đặt. Bạn cũng có thể gửi hướng dẫn sau trong chế độ “Work” để cài đặt:

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Vui lòng cài đặt kimi computer-use giúp tôi: curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## Kimi có thể tạo hình ảnh, video và giọng nói không?

Có. Kimi có thể tạo hình ảnh, video và âm thanh thông qua các plugin thiết kế sáng tạo. Trước khi sử dụng, hãy cài đặt plugin tương ứng từ chợ plugin:

- **Tạo hình ảnh**: Tạo hình ảnh chất lượng cao từ mô tả văn bản. Hỗ trợ độ phân giải 1K/2K/4K, nhiều tỷ lệ khung hình, tùy chọn nền đục hoặc trong suốt, và xuất ra JPG / PNG.
- **Tạo video**: Tạo video chất lượng cao từ mô tả văn bản, có thể kèm hình ảnh tham chiếu. Hỗ trợ các tỷ lệ khung hình như 16:9, 4:3, 1:1, 3:4, 9:16 và 21:9, với thời lượng 4–12 giây.
- **Tạo âm thanh**: Hỗ trợ chuyển văn bản thành giọng nói với nhiều giọng Quan thoại, hoặc tạo hiệu ứng âm thanh từ mô tả tiếng Anh, với thời lượng 0,5–22 giây.

## Kimi có thể viết code, dựng website, tạo PPT và bảng tính không?

Có. Là một AI Agent có thể tự chủ thực thi tác vụ, Kimi hỗ trợ dựng website, tạo PPT, xử lý tài liệu và bảng tính, Deep Research, cùng nhiều việc khác.

## Kimi có thể xử lý những tệp nào?

Kimi hỗ trợ các định dạng phổ biến như PDF, Word, Excel, PPT, hình ảnh, TXT và video. **Mỗi tệp không được vượt quá 100 MB, và bạn có thể tải lên tối đa 50 tệp mỗi lần**.

## Kimi có bộ nhớ không?

Có. [Bộ nhớ](/features/memory-space) tự động lưu các thông tin quan trọng để Kimi hiểu bạn hơn. Nếu cần tách riêng bộ nhớ và tài liệu theo từng dự án, hãy dùng tính năng [Dự án](/features/project).

## Kimi có hỗ trợ nhiều ngôn ngữ không?

Có. Bạn có thể đổi ngôn ngữ giao diện trong **“Cài đặt” → “Chung” → “Ngôn ngữ”**. Các ngôn ngữ hiện được hỗ trợ gồm tiếng Đức, tiếng Nga, tiếng Pháp, tiếng Trung phồn thể, tiếng Hàn, tiếng Bồ Đào Nha, tiếng Thái, tiếng Thổ Nhĩ Kỳ, tiếng Tây Ban Nha, tiếng Ý, tiếng Indonesia, tiếng Anh và tiếng Việt. K2.6 và K3 đều hỗ trợ hội thoại, truy xuất và sáng tạo đa ngôn ngữ.

## Kimi có thể xử lý bao nhiêu nội dung cùng lúc?

K2.6 có ngữ cảnh một lượt khoảng **128K token (xấp xỉ 50.000–60.000 ký tự tiếng Trung)**. Với tài liệu siêu dài, **K3 cung cấp ngữ cảnh 1 triệu token** (yêu cầu hạng thành viên cao nhất). Xem chi tiết tại [Tôi nên làm gì khi cuộc trò chuyện vượt quá 200.000 ký tự tiếng Trung?](/others/chat-issues).
