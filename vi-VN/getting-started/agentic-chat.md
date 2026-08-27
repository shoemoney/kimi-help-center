---
title: "Bắt đầu với Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Bắt đầu với Kimi - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu ba mô hình của Kimi (K2.6, K3, K3 Swarm), các công cụ tích hợp sẵn và năng lực đa phương thức để nhanh chóng bắt đầu trò chuyện và thực hiện tác vụ."
/>

# Bắt đầu với Kimi

Bạn có thể nhập câu hỏi vào ô trò chuyện, tải tệp lên hoặc chuyển đổi giữa các mô hình tùy theo nhu cầu.
Mở [kimi.com](https://www.kimi.com) và thử gửi một tin nhắn — hãy chào Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Chào Kimi!",
    },
  ]}
/>

## Chọn mô hình

Kimi cung cấp nhiều mô hình. Nhấp vào nút chuyển mô hình phía trên ô nhập để thay đổi.

| Mô hình | Mức độ suy luận | Phù hợp nhất cho |
|-------|-------------------|----------|
| **K2.6** | Tiêu chuẩn / Cao | Trò chuyện nhanh và hỏi đáp với tốc độ phản hồi nhanh hơn |
| **K3** | Thấp / Cao / Tối đa | Trò chuyện và tác vụ Agent; năng lực tổng thể mạnh nhất |
| **K3 Swarm** | Thấp / Cao / Tối đa | Tìm kiếm quy mô lớn và xử lý hàng loạt, hoàn tất trong một lượt |

<Callout type="tip">
K2.6, K3 và K3 Swarm đều được tính phí bằng credit. Xem [quyền lợi hội viên](https://www.kimi.com/help/membership/membership-overview) để biết chi tiết.
</Callout>

### Về Kimi K3

Kimi K3 hiện là mô hình mạnh nhất của Kimi, có 2,8 nghìn tỷ tham số, được xây dựng trên Kimi Delta Attention (KDA) và Attention Residuals, sở hữu **thị giác nguyên sinh** và **cửa sổ ngữ cảnh 1 triệu token**. Là mô hình mở cấp 3T đầu tiên trên thế giới, K3 được thiết kế cho trí tuệ tuyến đầu trong lập trình dài hạn, công việc tri thức và suy luận; đạt hiệu năng dẫn đầu ở lập trình, thực thi dài hạn và nhiều tác vụ trí tuệ tổng quát.

### Công cụ tích hợp sẵn

Dùng được ngay, không cần cấu hình:

| Công cụ | Mô tả |
|------|------------|
| **Web Search** | Tìm kiếm web theo thời gian thực để cập nhật tin tức và thông tin mới nhất |
| **Công cụ Fetch** | Truy cập trực tiếp các URL cụ thể (trang web, tài liệu, hình ảnh và các tài nguyên trực tuyến khác) |
| **Tìm kiếm hình ảnh** | Tìm kiếm bằng văn bản thành hình ảnh và hình ảnh thành hình ảnh để nhanh chóng khám phá nội dung trực quan |
| **IPython** | Thực thi mã Python để phân tích và trực quan hóa dữ liệu |
| **Bộ nhớ** | Bộ nhớ thông minh ghi nhận sở thích và thói quen cá nhân của bạn |

## Năng lực thị giác và đa phương thức
Kimi K3 hỗ trợ hiểu hình ảnh, video và tài liệu văn phòng (PDF/Word/Excel) trong mọi kịch bản, sử dụng **kiến trúc đa phương thức nguyên sinh** (không phải OCR gắn thêm). Mô hình có thể trực tiếp phân tích nội dung tài liệu và thực hiện các tác vụ văn phòng từ trung cấp đến nâng cao (như viết công thức Excel hoặc tạo dàn ý PPT/mã VBA). Kết hợp với thị giác nguyên sinh và cửa sổ ngữ cảnh 1 triệu token, Kimi K3 xử lý được các tài liệu đa phương thức dài hơn và phức tạp hơn.
### Hỗ trợ đầu vào đa phương thức
- **Hình ảnh**: PNG, JPEG, WebP, GIF, v.v. (qua URL, Base64 hoặc tải tệp cục bộ lên)
- **Video**: MP4, v.v. (qua video_url hoặc chuỗi khung hình + tham số fps)
- **Tài liệu**: PDF, Word, Excel, TXT, Markdown, v.v.
- **Tài nguyên trực tuyến**: URL, liên kết bài viết
- **Tìm kiếm hình ảnh**: Tải lên một hình ảnh để tìm các hình ảnh liên quan hoặc tương tự
- **Hiểu video**: Hỗ trợ hiểu video — có thể phân tích bản ghi màn hình và tái hiện logic tương tác
- **Lập trình trực quan**: Tải lên ảnh chụp màn hình hoặc bản ghi màn hình để tạo mã frontend (HTML/Vue/React, v.v.); có thể tự động tái dựng trang web từ bản thiết kế

### Định dạng đầu ra
- Văn bản thuần / văn bản và hình ảnh kết hợp: Câu trả lời hội thoại tiêu chuẩn
- Markdown: Văn bản phong phú với tiêu đề, danh sách, bảng và liên kết
- Khối mã: HTML/Vue/React/Python/JSON/Mermaid, v.v. (kèm định danh ngôn ngữ)
- Dữ liệu có cấu trúc JSON: Đầu ra ở chế độ JSON bắt buộc
- Sơ đồ Mermaid: Lưu đồ, sơ đồ trình tự, sơ đồ tư duy, v.v.
- Công thức toán LaTeX: Biểu thức toán học dạng nội dòng và dạng khối
- Đầu ra hai chế độ (Thinking): Trả về cả `reasoning_content` (quá trình suy nghĩ) và `content` (câu trả lời cuối cùng)
- Định dạng gọi công cụ: Định dạng chuẩn Function Calling (dành cho nhà phát triển)

### Lưu ý quan trọng

1. **Đầu ra tệp**: K3 có thể tạo tài liệu có thể chỉnh sửa từ đầu đến cuối (như `.pptx`, `.docx`, `.xlsx`, `.pdf`) và các sản phẩm phức tạp khác; K2.6 tập trung vào hỏi đáp nhanh và chỉ xuất văn bản (như dàn ý PPT, nội dung Word hoặc mã).

<Callout type="tip">
Mẹo: Để tạo hình ảnh, âm thanh hoặc video, nhấp vào "+" → Plugin, chọn tính năng tương ứng và dùng cùng **K3**. Để tạo tài liệu phức tạp có thể chỉnh sửa hoặc chạy tác vụ nhiều bước, chúng tôi khuyên bạn chọn **K3** hoặc **K3 Swarm** để có trải nghiệm đầy đủ.
</Callout>

## Phiên và lượt trò chuyện
Khi bạn nhấp vào "Cuộc trò chuyện mới", hãy xem đó như bắt đầu một cuộc trò chuyện dài với Kimi.
| Khái niệm | Ví von | Định nghĩa kỹ thuật |
|---------|---------|---------------------|
| **Phiên** | Một cuộc họp trọn vẹn (từ đầu đến cuối) | Một quá trình trò chuyện hoàn chỉnh, có điểm bắt đầu và kết thúc rõ ràng |
| **Lượt** | Một lần trao đổi (bạn nói, Kimi trả lời) | Phần nhập của bạn và phản hồi của Kimi tạo thành một vòng hỏi đáp |

### Khác biệt chính
**Phiên**
- **Bộ nhớ liên tục**: Kimi ghi nhớ toàn bộ ngữ cảnh trong cuộc trò chuyện hiện tại
- **Ngữ cảnh xuyên lượt**: Mỗi câu trả lời dùng nội dung trao đổi trước đó làm ngữ cảnh cho lượt tiếp theo
- **Ranh giới rõ ràng**: Nhấp "Cuộc trò chuyện mới" = bắt đầu lại; ngữ cảnh trước đó được xóa
**Lượt**
- **Đếm cộng dồn**: Lượt 1, Lượt 2, … được thêm dần
- **Bộ nhớ có giới hạn**: Quá nhiều lượt (ví dụ 50+) có thể khiến Kimi "quên" nội dung trước đó, đặc biệt với bài viết dài hoặc tác vụ có yêu cầu nghiêm ngặt
- **Ràng buộc độ dài ngữ cảnh**: Bị giới hạn bởi số token; khi số lượt tăng lên, nội dung sớm nhất có thể bị nén

<Callout type="tip">
**Trường hợp ngoại lệ**: Nếu chỉ một lượt hỏi đáp đã kết thúc cuộc trò chuyện, thì 1 lượt = 1 phiên.
</Callout>

## Vì sao cần phân biệt
Trong một phiên, mỗi câu hỏi hoặc chỉ dẫn mới bạn gửi đều được trả lời dựa trên tất cả các lượt trước đó. Khi số lượt tăng và nội dung dài hơn, chất lượng phản hồi có thể giảm dần.

### Tình huống thường gặp
**Tình huống 1: Chuyển chủ đề**
- Sai: Hỏi "giúp tôi tính thuế" trong một phiên mà trước đó bạn đang viết một tiểu thuyết 30.000 từ
- Đúng: Bắt đầu phiên mới cho câu hỏi về thuế — tránh để Kimi nhầm lẫn nhân vật tiểu thuyết với khái niệm thuế
**Tình huống 2: Xử lý tài liệu dài**
- Sau hàng chục lượt, Kimi có thể "quên" các quy tắc hoặc tóm tắt tệp đã thiết lập từ đầu
- Cách xử lý: Chủ động tóm tắt giữa chừng ("Hãy tóm tắt kế hoạch của chúng ta đến lúc này"), hoặc bắt đầu phiên mới
**Tình huống 3: Hiểu giới hạn sản phẩm**
- Giới hạn độ dài ngữ cảnh được đo bằng token, nhưng trong cách hiểu hằng ngày, hãy nghĩ đến "số lượt"
- Nếu bạn thấy lời nhắc "Bắt đầu cuộc trò chuyện mới", nghĩa là phiên hiện tại đã có quá nhiều lượt
## Cách sử dụng hiệu quả

<Callout type="tip">
**Mỗi tác vụ nên có một phiên mới**: Các tác vụ độc lập — viết luận, nghiên cứu, gỡ lỗi — nên được thực hiện trong phiên riêng để tránh ngữ cảnh can thiệp lẫn nhau.
</Callout>

<Callout type="tip">
**Tóm tắt định kỳ trong các phiên dài**: Sau hơn 20 lượt, hãy chủ động yêu cầu Kimi tóm tắt thông tin quan trọng để tránh mất dữ liệu.
</Callout>

<Callout type="tip">
**Dọn sạch thông tin nhạy cảm kịp thời**: Lịch sử trò chuyện được lưu giữ; hãy xóa toàn bộ phiên sau khi xử lý nội dung riêng tư.
</Callout>
