---
title: "Bắt đầu với Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Bắt đầu với Kimi - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu ba mô hình của Kimi (K2.6, K3, K3 Swarm), các công cụ tích hợp sẵn và năng lực đa phương thức để nhanh chóng bắt đầu trò chuyện và thực thi tác vụ."
/>

# Bắt đầu với Kimi

Bạn có thể nhập câu hỏi vào ô trò chuyện, tải tệp lên, hoặc chuyển đổi giữa các mô hình tùy theo nhu cầu.
Hãy mở [kimi.com](https://www.kimi.com) và thử gửi một tin nhắn — chào Kimi nào:

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

Kimi cung cấp nhiều mô hình. Nhấp vào nút chuyển mô hình phía trên ô nhập liệu để chuyển đổi.

| Mô hình | Cường độ tư duy | Phù hợp nhất cho |
|-------|-------------------|----------|
| **K2.6** | Tiêu chuẩn / Cao | Trò chuyện và hỏi-đáp nhanh với phản hồi mau lẹ |
| **K3** | Thấp / Cao / Tối đa | Các tác vụ trò chuyện và Agent; mạnh mẽ nhất về tổng thể |
| **K3 Swarm** | Thấp / Cao / Tối đa | Tìm kiếm quy mô lớn và xử lý hàng loạt, hoàn thành trong một lần |

<Callout type="tip">
K2.6 không tiêu hao tín dụng; K3 và K3 Swarm được tính phí theo tín dụng. Xem [quyền lợi thành viên](https://www.kimi.com/help/membership/membership-overview) để biết chi tiết.
</Callout>

### Giới thiệu về Kimi K3

Kimi K3 hiện là mô hình mạnh mẽ nhất của Kimi, với 2,8 nghìn tỷ tham số, được xây dựng trên Kimi Delta Attention (KDA) và Attention Residuals, sở hữu **thị giác gốc** cùng **cửa sổ ngữ cảnh 1 triệu token**. Là mô hình mã nguồn mở tầm 3T đầu tiên trên thế giới, K3 được thiết kế cho trí tuệ tiên phong trải rộng trên lập trình dài hơi, công việc tri thức và suy luận, đạt hiệu suất hàng đầu về lập trình, thực thi dài hơi và nhiều tác vụ trí tuệ tổng quát.

### Công cụ tích hợp sẵn

Sẵn sàng sử dụng ngay, không cần cấu hình:

| Công cụ | Mô tả |
|------|------------|
| **Web Search** | Tìm kiếm web theo thời gian thực để cập nhật tin tức và thông tin mới nhất |
| **Fetch Tool** | Truy cập trực tiếp các URL cụ thể (trang web, tài liệu, hình ảnh và các tài nguyên trực tuyến khác) |
| **Image Search** | Tìm kiếm văn bản-sang-hình ảnh và hình ảnh-sang-hình ảnh để nhanh chóng khám phá nội dung trực quan |
| **IPython** | Thực thi mã Python để phân tích và trực quan hóa dữ liệu |
| **Memory** | Bộ nhớ thông minh ghi lại sở thích và thói quen cá nhân của bạn |

## Năng lực thị giác & đa phương thức
Kimi K3 hỗ trợ hiểu toàn cảnh hình ảnh, video và tài liệu văn phòng (PDF/Word/Excel), sử dụng **kiến trúc đa phương thức gốc** (chứ không phải OCR gắn thêm). Nó có thể trực tiếp phân tích nội dung tài liệu và thực hiện các tác vụ văn phòng từ trung cấp đến nâng cao (chẳng hạn viết công thức Excel hoặc tạo dàn ý PPT/mã VBA). Kết hợp với thị giác gốc và cửa sổ ngữ cảnh 1 triệu token, nó có thể xử lý các tài liệu đa phương thức dài hơn và phức tạp hơn.
### Hỗ trợ đầu vào đa phương thức
- **Hình ảnh**: PNG, JPEG, WebP, GIF, v.v. (qua URL, Base64, hoặc tải tệp cục bộ lên)
- **Video**: MP4, v.v. (qua video_url hoặc chuỗi khung hình ảnh + tham số fps)
- **Tài liệu**: PDF, Word, Excel, TXT, Markdown, v.v.
- **Tài nguyên trực tuyến**: URL, liên kết bài viết
- **Tìm kiếm hình ảnh**: Tải một hình ảnh lên để tìm các hình ảnh liên quan hoặc tương tự
- **Hiểu video**: Hỗ trợ hiểu video — có thể phân tích bản ghi màn hình và tái tạo logic tương tác
- **Lập trình trực quan**: Tải ảnh chụp màn hình hoặc bản ghi màn hình lên để tạo mã frontend (HTML/Vue/React, v.v.); có thể tự động tái dựng trang web từ bản thiết kế mẫu

### Định dạng đầu ra
- Văn bản thuần / văn bản kết hợp hình ảnh: Câu trả lời hội thoại tiêu chuẩn
- Markdown: Văn bản phong phú với tiêu đề, danh sách, bảng và liên kết
- Khối mã: HTML/Vue/React/Python/JSON/Mermaid, v.v. (kèm định danh ngôn ngữ)
- Dữ liệu có cấu trúc JSON: Đầu ra ở chế độ JSON bắt buộc
- Sơ đồ Mermaid: Lưu đồ, sơ đồ tuần tự, sơ đồ tư duy, v.v.
- Công thức toán LaTeX: Biểu thức toán học nội dòng và dạng khối
- Đầu ra hai chế độ (Thinking): Trả về cả `reasoning_content` (quá trình suy nghĩ) và `content` (câu trả lời cuối cùng)
- Định dạng gọi công cụ: Định dạng chuẩn Function Calling (dành cho nhà phát triển)

### Lưu ý quan trọng

1. **Đầu ra tệp**: K3 có thể tạo ra các tài liệu có thể chỉnh sửa một cách đầu cuối (chẳng hạn `.pptx`, `.docx`, `.xlsx`, `.pdf`) cùng các sản phẩm bàn giao phức tạp khác; K2.6 tập trung vào hỏi-đáp nhanh và chỉ xuất văn bản (chẳng hạn dàn ý PPT, phần thân Word hoặc mã).

<Callout type="tip">
Mẹo: Để tạo hình ảnh, âm thanh hoặc video, hãy nhấp "+" → Plugin, chọn tính năng tương ứng và dùng cùng **K3**. Để tạo các tài liệu phức tạp có thể chỉnh sửa hoặc chạy các tác vụ nhiều bước, chúng tôi khuyến nghị chọn **K3** hoặc **K3 Swarm** để có trải nghiệm trọn vẹn.
</Callout>

## Phiên làm việc và lượt hội thoại
Khi bạn nhấp vào "Trò chuyện mới", hãy hình dung đó như việc bắt đầu một cuộc trò chuyện dài với Kimi.
| Khái niệm | Hình dung | Định nghĩa kỹ thuật |
|---------|---------|---------------------|
| **Phiên làm việc** | Toàn bộ một cuộc họp (từ đầu đến cuối) | Một quá trình trò chuyện trọn vẹn có điểm bắt đầu và kết thúc rõ ràng |
| **Lượt** | Một lần trao đổi (bạn nói, Kimi trả lời) | Đầu vào của bạn và phản hồi của Kimi tạo thành một vòng trao đổi |

### Những khác biệt then chốt
**Phiên làm việc**
- **Bộ nhớ liên tục**: Kimi ghi nhớ toàn bộ ngữ cảnh trong cuộc trò chuyện hiện tại
- **Ngữ cảnh xuyên lượt**: Mỗi phản hồi đều tham chiếu nội dung hội thoại trước đó làm ngữ cảnh cho lượt tiếp theo
- **Ranh giới rõ ràng**: Nhấp vào "Trò chuyện mới" = khởi đầu lại từ đầu; ngữ cảnh trước đó được xóa
**Lượt**
- **Đếm tích lũy**: Lượt 1, Lượt 2, … cộng dồn dần
- **Bộ nhớ giới hạn**: Quá nhiều lượt (ví dụ trên 50) có thể khiến Kimi "quên" nội dung trước đó, đặc biệt với việc viết dài hơi hoặc các tác vụ có yêu cầu nghiêm ngặt
- **Hạn chế về độ dài ngữ cảnh**: Bị giới hạn bởi số lượng token; khi các lượt tích lũy, nội dung sớm nhất có thể bị nén lại

<Callout type="tip">
**Trường hợp đặc biệt**: Nếu một lần hỏi-đáp đã kết thúc cuộc trò chuyện, thì 1 lượt = 1 phiên làm việc.
</Callout>

## Vì sao sự phân biệt này quan trọng
Trong cùng một phiên làm việc, mỗi câu hỏi hoặc chỉ thị mới mà bạn gửi đều được trả lời dựa trên tất cả các lượt trước đó. Khi các lượt tích lũy và nội dung dài ra, chất lượng phản hồi có thể dần suy giảm.

### Các tình huống thường gặp
**Tình huống 1: Chuyển chủ đề**
- Sai: Hỏi "giúp tôi tính thuế" trong một phiên mà bạn đang viết một cuốn tiểu thuyết 30.000 từ
- Đúng: Mở một phiên mới cho câu hỏi về thuế — tránh để Kimi nhầm lẫn nhân vật tiểu thuyết với các khái niệm về thuế
**Tình huống 2: Xử lý tài liệu dài**
- Sau hàng chục lượt, Kimi có thể "quên" các quy tắc hoặc bản tóm tắt tệp đã được thiết lập từ đầu
- Giải pháp: Chủ động tóm tắt giữa chừng ("Tóm tắt kế hoạch của chúng ta đến thời điểm này"), hoặc mở một phiên mới
**Tình huống 3: Hiểu giới hạn của sản phẩm**
- Giới hạn độ dài ngữ cảnh được đo bằng token, nhưng theo cách hiểu thường ngày, hãy hình dung nó như "số lượt"
- Nếu bạn thấy lời nhắc "Bắt đầu một cuộc trò chuyện mới", điều đó có nghĩa là phiên hiện tại đã có quá nhiều lượt
## Thực hành tốt nhất

<Callout type="tip">
**Mở phiên mới cho mỗi tác vụ**: Các tác vụ độc lập — viết bài luận, nghiên cứu, gỡ lỗi — nên có phiên riêng để tránh nhiễu ngữ cảnh.
</Callout>

<Callout type="tip">
**Tóm tắt định kỳ trong các phiên dài**: Sau hơn 20 lượt, hãy chủ động đề nghị Kimi tóm tắt các thông tin then chốt để tránh mất dữ liệu.
</Callout>

<Callout type="tip">
**Dọn dẹp thông tin nhạy cảm kịp thời**: Lịch sử trò chuyện được lưu giữ; hãy xóa toàn bộ phiên sau khi xử lý nội dung riêng tư.
</Callout>
