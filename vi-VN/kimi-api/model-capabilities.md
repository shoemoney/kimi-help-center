---
title: "Khả năng của mô hình"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="Khả năng của mô hình - Trung tâm trợ giúp Kimi"
  description="Dưới đây là những câu hỏi thường gặp về khả năng của mô hình Kimi API."
/>

# Khả năng của mô hình

Dưới đây là những câu hỏi thường gặp về khả năng của mô hình Kimi API.

## Có hỗ trợ JSON mode không?

Có. Kimi API cung cấp JSON Mode, giúp giới hạn đầu ra của mô hình thành JSON hợp lệ. Cách dùng:

- Đặt tham số `response_format` thành `{"type": "json_object"}` trong yêu cầu của bạn.
- Đồng thời hướng dẫn rõ ràng cho mô hình trong prompt để trả về JSON và mô tả cấu trúc mong muốn.
- Trong JSON Mode, mô hình được đảm bảo xuất ra một chuỗi JSON có thể phân tích cú pháp được.

## Có hỗ trợ tinh chỉnh mô hình không?

Kimi API **hiện chưa hỗ trợ** việc tinh chỉnh mô hình do người dùng khởi tạo. Nếu cần mô hình tùy chỉnh, hãy liên hệ đội ngũ bán hàng qua [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) để tìm hiểu về các lựa chọn tùy chỉnh dành cho doanh nghiệp.

## Có hỗ trợ OCR không?

Các mô hình Vision của Kimi API có khả năng hiểu hình ảnh và có thể nhận diện văn bản trong hình ảnh, cho kết quả tương tự OCR:

- Hỗ trợ nhận diện văn bản tiếng Anh, tiếng Trung và nhiều ngôn ngữ khác.
- Có thể nhận diện văn bản in và một số văn bản viết tay.
- Mỗi hình ảnh được tính phí cố định là 1.024 token.
- Ngoài việc nhận diện văn bản thuần túy, các mô hình còn có thể diễn giải bảng biểu, đồ thị và các nội dung có cấu trúc khác trong hình ảnh.

## Có hỗ trợ TTS (chuyển văn bản thành giọng nói) và ASR (nhận diện giọng nói) không?

Kimi API **hiện chưa hỗ trợ** TTS hoặc ASR. Với các khả năng liên quan đến giọng nói, bạn có thể cân nhắc kết hợp một dịch vụ giọng nói của bên thứ ba với Kimi API. Hãy theo dõi các thông báo của nền tảng để cập nhật các tính năng mới trong tương lai.
