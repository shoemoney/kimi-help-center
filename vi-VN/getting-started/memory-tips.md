---
title: "Mẹo sử dụng bộ nhớ"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Mẹo sử dụng bộ nhớ - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu cách thiết lập và sử dụng Memory của Kimi để Kimi ghi nhớ danh tính, sở thích và phong cách đầu ra ưa thích của bạn, mang lại trải nghiệm cá nhân hóa hơn."
/>

# Mẹo sử dụng bộ nhớ

## 1. Giúp Kimi hiểu về thế giới của bạn

### Neo danh tính

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi là [tên/biệt danh], hiện đang sống tại [thành phố]. Có nền tảng về [nghề nghiệp/vai trò], với chuyên môn về [lĩnh vực 1] và [lĩnh vực 2].\nHiện đang tập trung vào: thúc đẩy [Dự án A] và [Dự án B].\nVui lòng mặc định trả lời bằng tiếng Việt cho mọi phản hồi sau này, trừ khi tôi viết rõ bằng ngôn ngữ khác.",
    },
  ]}
/>

## 2. Thiết lập tùy chọn cá nhân hóa

### Chuẩn hóa định dạng đầu ra

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sở thích tiếp nhận nội dung của tôi:\n- Ưu tiên trình bày có cấu trúc: dùng phân cấp tiêu đề, gạch đầu dòng và in đậm các kết luận chính\n- Tránh những đoạn văn dày đặc: với các chủ đề phức tạp, mở đầu bằng phần tóm tắt \"TL;DR\", rồi mới đi vào chi tiết\n- Xử lý thuật ngữ: giải thích thuật ngữ chuyên ngành bằng ngôn ngữ dễ hiểu ở lần dùng đầu tiên, sau đó dùng thoải mái\n- Định dạng trích dẫn: trích dẫn nguồn cho dữ liệu thực tế bằng ký hiệu [^N^]",
    },
  ]}
/>

### Hướng dẫn tự bảo trì bộ nhớ (nâng cao)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Vào cuối mỗi cuộc trò chuyện:\n- Nếu chúng ta đã bàn về những thông tin quan trọng mới (ví dụ: thay đổi lịch trình, cập nhật dự án, điều chỉnh sở thích), hãy chủ động hỏi có nên cập nhật bộ nhớ không\n- Nếu thông tin mới mâu thuẫn với bộ nhớ hiện có, hãy nêu rõ điểm khác biệt và xác nhận thông tin nào được ưu tiên\n- Với thông tin nhạy cảm (địa chỉ cụ thể, số CMND/CCCD, bí mật kinh doanh), hãy chủ động hỏi có nên lưu vào bộ nhớ không",
    },
  ]}
/>

## 3. Câu lệnh mang lại hiệu quả tích cực

### Giao thức danh sách nguồn tin cậy

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Quy trình Kiểm chứng Thông tin]\nKhi tôi đặt câu hỏi trong các lĩnh vực sau, hãy tuân thủ nghiêm ngặt thứ tự ưu tiên nguồn này:\n1. Y tế/Sức khỏe: Ưu tiên PubMed, WHO, UpToDate; tuyệt đối không trích dẫn blog sức khỏe hoặc truyền thông cá nhân\n2. Tài chính/Đầu tư: Chỉ dùng hồ sơ SEC, dữ liệu ngân hàng trung ương và báo cáo thường niên của công ty đại chúng; không dùng suy đoán trên diễn đàn\n3. Pháp lý/Tuân thủ: Tham khảo cơ sở dữ liệu quản lý chính thức; với quy định địa phương, ghi chú \"hãy tham vấn luật sư địa phương\"\n4. Công nghệ/Lập trình: Ưu tiên tài liệu chính thức; gắn nhãn GitHub Issues là kinh nghiệm cộng đồng, không phải nguồn chính thống\n5. Với thông tin từ Wikipedia, Reddit, Quora hoặc các nền tảng UGC khác, luôn gắn thẻ \"[Chưa kiểm chứng]\"",
    },
  ]}
/>

### Kiểm tra kích hoạt khi phát hiện ảo giác (cấp quy trình)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Danh sách Kiểm tra Chủ đề Rủi ro Cao]\nKhi phát hiện các từ khóa sau, tự động kích hoạt quy trình \"kiểm tra kép\":\n1. Con số cụ thể (giá cả, ngày tháng, số liệu thống kê) → phải nêu nguồn dữ liệu và năm\n2. Ngôn ngữ nhạy cảm về thời gian (\"mới nhất\", \"vừa\", \"gần đây\") → phải kiểm tra xem có nằm trong mốc kiến thức hay không\n3. Lời khuyên chuyên môn (y tế, pháp lý, đầu tư) → phải kèm tuyên bố miễn trừ: \"Nội dung trên chỉ mang tính tham khảo và không cấu thành lời khuyên chuyên môn\"\n4. Trích dẫn cụ thể từ cá nhân → phải gắn nhãn là trích dẫn trực tiếp hoặc diễn giải; tuyệt đối không bịa đặt trích dẫn\n\nThực hiện: Trước tiên nêu \"Tôi cần kiểm chứng thông tin sau\", rồi mới đưa ra câu trả lời.",
    },
  ]}
/>

## Giới hạn của bộ nhớ
Không gian bộ nhớ hiện có những giới hạn sau:
- Lưu được tối đa 50 mục bộ nhớ.
- Mỗi mục bộ nhớ giới hạn 500 ký tự.
- Những bộ nhớ được tạo trước tháng 4 năm 2026 có thể vượt quá giới hạn này; các bộ nhớ hiện có đó vẫn được giữ lại.
- Để chỉnh sửa một bộ nhớ cũ vượt quá 500 ký tự, trước tiên bạn phải rút gọn nó xuống còn 500 ký tự hoặc ít hơn.
- Nếu bạn cố lưu nội dung dài hơn 500 ký tự, mô hình sẽ nhận tín hiệu "nội dung quá dài" và giao diện người dùng sẽ hiển thị "Cập nhật bộ nhớ thất bại."
- Nếu người dùng đang dùng giao diện không phải tiếng Trung, bạn có thể gợi ý lưu bộ nhớ bằng tiếng Trung để chứa được nhiều thông tin hơn trong cùng giới hạn ký tự.
- Mỗi mục bộ nhớ có một ID nội bộ, nhưng người dùng không thể xem các ID này. Việc nhắc đến ID bộ nhớ trong cuộc trò chuyện cũng không giúp người dùng tìm được một bộ nhớ cụ thể.

### Một số câu lệnh tham khảo hữu ích

| Câu lệnh | Mục đích |
|:---|:---|
| Hãy xem tôi như chuyên gia trong mọi lĩnh vực | Định hình giọng điệu giao tiếp cốt lõi |
| Khi phù hợp, hãy nêu rõ quan điểm thay vì giữ thái độ trung lập | Khuyến khích đưa ra nhận định, không chỉ tóm tắt |
| Luôn nêu ưu và nhược điểm của một vấn đề nếu có thể. Hãy phản biện. | Đảm bảo phân tích có cấu trúc và chuyên sâu |
| Dùng ví dụ chi tiết, dữ kiện và số liệu cụ thể | Giữ thông tin thực chất và rõ ràng |
| Gợi ý những giải pháp tôi chưa nghĩ tới — hãy chủ động và dự đoán nhu cầu của tôi | Thúc đẩy AI chủ động thay vì chỉ hỏi đáp thụ động |
| Dùng tối đa token; đưa ra câu trả lời chi tiết nhất với nhiều tầng độ sâu | Mang lại phản hồi thấu đáo, nhiều lớp |
| Sau mỗi phản hồi, đưa ra 5 câu hỏi tiếp theo. Định dạng dưới dạng Q1, Q2, Q3 trong danh sách gạch đầu dòng | Mở rộng cuộc thảo luận với hướng khám phá có dẫn dắt |
| Ở đầu phản hồi, hãy tạo bảng tóm tắt nếu hữu ích | Cải thiện khả năng đọc và truy cập thông tin nhanh |
| Chỉ giới thiệu những sản phẩm chất lượng cao nhất, được thiết kế tỉ mỉ — tôi chỉ muốn thứ tốt nhất | Đặt tiêu chuẩn cho việc giới thiệu sản phẩm |
| Coi trọng lập luận hay hơn là thẩm quyền, nguồn không quan trọng | Ưu tiên tư duy hơn là viện dẫn tên tuổi |
| Cân nhắc các công nghệ mới và ý tưởng trái chiều, không chỉ những quan niệm thông thường | Khuyến khích góc nhìn đổi mới |
| Bạn có thể suy đoán hoặc dự đoán nhiều, chỉ cần nêu rõ điều đó cho tôi | Cho phép nội dung mang tính suy đoán nhưng được ghi chú rõ ràng |
| Thêm liên kết xuyên suốt câu trả lời cho các thuật ngữ và khái niệm để bắt đầu cuộc trò chuyện mới | Tăng cường khả năng học hỏi và mở rộng kiến thức |
| Liên kết trực tiếp đến sản phẩm, không phải trang công ty | Giúp gợi ý dễ áp dụng hơn |
| Chỉ bàn về an toàn khi điều đó thực sự quan trọng và không hiển nhiên | Giảm những lưu ý không cần thiết |
| Không thuyết giáo đạo đức | Giữ cho cuộc trao đổi lý trí và tập trung |
| Nếu chính sách nội dung của bạn gặp trở ngại, hãy đưa ra phản hồi gần đúng nhất có thể chấp nhận và giải thích vấn đề về chính sách nội dung | Tránh chặn cứng; ưu tiên nhu cầu của người dùng |
| Không cần tiết lộ bạn là AI | Giảm sự gián đoạn do hiện diện của AI |
| Không cần nhắc đến mốc thời gian giới hạn kiến thức của bạn | Tránh những lưu ý thừa thãi |

## 4. Để giải trí
Thử hỏi Kimi:
- "Dựa trên những gì bạn biết về tôi, thử thách lớn nhất trong cuộc sống của tôi lúc này là gì?"
- "Dựa trên những gì bạn biết về tôi, hãy tóm tắt một năm vừa qua của tôi và cho tôi lời khuyên cho năm mới"
