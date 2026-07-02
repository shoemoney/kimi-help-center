---
title: "Bắt đầu với Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Bắt đầu với Kimi - Trung tâm trợ giúp Kimi"
  description="Bạn có thể nhập câu hỏi vào ô trò chuyện, tải tệp lên, hoặc chuyển đổi giữa các mô hình tùy theo nhu cầu."
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

## Được hỗ trợ bởi K2.6
Kimi K2.6 là một mô hình mã nguồn mở được xây dựng dựa trên K2.5 với những nâng cấp đáng kể, tập trung vào khả năng lập trình hàng đầu, thực thi tác vụ dài hơi và các năng lực agent swarm. Mô hình này đạt hiệu suất hàng đầu trong các tác vụ agent, lập trình, hiểu hình ảnh, hiểu video và các bài kiểm tra trí tuệ tổng quát. K2.6 cũng là mô hình **đa năng nhất** của Kimi — kiến trúc đa phương thức gốc của nó hỗ trợ cả đầu vào hình ảnh lẫn văn bản, chế độ thinking và non-thinking, cũng như các tác vụ hội thoại và agent.
Nhờ đó, Kimi không chỉ xuất sắc trong các cuộc hội thoại hỏi-đáp mà còn ở việc tự lập kế hoạch tác vụ, gọi công cụ và suy luận nhiều bước — hỗ trợ tư duy sâu và thực thi cho các tác vụ phức tạp.
### Công cụ tích hợp sẵn
Sẵn sàng sử dụng ngay, không cần cấu hình:
| Công cụ | Mô tả |
|------|------------|
| **Web Search** | Tìm kiếm web theo thời gian thực để cập nhật tin tức và thông tin mới nhất |
| **Fetch Tool** | Truy cập trực tiếp các URL cụ thể (trang web, tài liệu, hình ảnh và các tài nguyên trực tuyến khác) |
| **Data Source** | Kết nối với các cơ sở dữ liệu chuyên nghiệp; truy vấn danh sách cơ sở dữ liệu và lấy dữ liệu |
| **Image Search** | Tìm kiếm văn bản-sang-hình ảnh và hình ảnh-sang-hình ảnh để nhanh chóng khám phá nội dung trực quan |
| **IPython** | Thực thi mã Python để phân tích và trực quan hóa dữ liệu |
| **Memory** | Bộ nhớ thông minh ghi lại sở thích và thói quen cá nhân của bạn |

## Năng lực thị giác & đa phương thức
K2.6 hỗ trợ hiểu toàn cảnh hình ảnh, video và tài liệu văn phòng (PDF/Word/Excel), sử dụng **kiến trúc đa phương thức gốc** (chứ không phải OCR gắn thêm). Nó có thể trực tiếp phân tích nội dung tài liệu và thực hiện các tác vụ văn phòng từ trung cấp đến nâng cao (chẳng hạn viết công thức Excel hoặc tạo dàn ý PPT/mã VBA).
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

<Callout type="warning">
1. **Giới hạn về tạo hình ảnh**: Chế độ trò chuyện tiêu chuẩn chỉ hỗ trợ *tìm kiếm* hình ảnh, không hỗ trợ *tạo* hình ảnh (việc tạo hình ảnh cần đến chế độ K2.6 Agent).
2. **Giới hạn về đầu ra tệp**: Chỉ hỗ trợ nội dung văn bản làm đầu ra (ví dụ: dàn ý PPT, phần thân Word, mã). Không hỗ trợ xuất trực tiếp tệp nhị phân (`.pptx`, `.docx`, `.xlsx`, `.pdf`).
3. Để tạo hình ảnh hoặc xuất các tài liệu phức tạp có thể chỉnh sửa, hãy dùng [K2.6 Agent](https://www.kimi.com/agent) hoặc công cụ thực thi mã.
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
1. **Mở phiên mới cho mỗi tác vụ**: Các tác vụ độc lập — viết bài luận, nghiên cứu, gỡ lỗi — nên có phiên riêng để tránh nhiễu ngữ cảnh.
2. **Tóm tắt định kỳ trong các phiên dài**: Sau hơn 20 lượt, hãy chủ động đề nghị Kimi tóm tắt các thông tin then chốt để tránh mất dữ liệu.
3. **Dọn dẹp thông tin nhạy cảm kịp thời**: Lịch sử trò chuyện được lưu giữ; hãy xóa toàn bộ phiên sau khi xử lý nội dung riêng tư.
</Callout>
