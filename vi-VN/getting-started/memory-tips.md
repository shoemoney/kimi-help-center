---
title: "Mẹo sử dụng bộ nhớ"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Mẹo sử dụng bộ nhớ - Trung tâm trợ giúp Kimi"
  description="Tôi là tên/biệt danh, hiện sống tại thành phố. Có nền tảng về nghề nghiệp/vai trò, chuyên sâu trong lĩnh vực 1 và lĩnh vực 2."
/>

# Mẹo sử dụng bộ nhớ

## 1. Giúp Kimi hiểu về thế giới của bạn

### Neo danh tính

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I'm [name/nickname], currently based in [city]. Background in [profession/role], with expertise in [area 1] and [area 2].\nCurrently focused on: advancing [Project A] and [Project B].\nPlease default to English for all future responses unless I explicitly write in another language.",
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
      content: "My content consumption preferences:\n- Prefer structured presentation: use heading hierarchy, bullet points, and bold key conclusions\n- Avoid walls of text: for complex topics, lead with a \"TL;DR\" summary, then expand into details\n- Terminology handling: explain jargon in plain language on first use, then use it freely afterward\n- Citation format: cite sources for factual data using [^N^] notation",
    },
  ]}
/>

### Hướng dẫn tự bảo trì bộ nhớ (nâng cao)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "At the end of each conversation:\n- If we discussed new important facts (e.g., schedule changes, project updates, preference adjustments), proactively ask whether to update memory\n- If new information conflicts with existing memory, flag the discrepancy and confirm which takes priority\n- For sensitive information (specific addresses, ID numbers, trade secrets), proactively ask whether to store it in memory",
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
      content: "[Fact-Check Protocol]\nWhen I ask questions in the following domains, strictly follow this source priority:\n1. Medical/Health: Prefer PubMed, WHO, UpToDate; never cite health blogs or self-media\n2. Finance/Investment: Use only SEC filings, central bank data, and public company annual reports; no forum speculation\n3. Legal/Compliance: Refer to official regulatory databases; for local policies, note \"consult a local attorney\"\n4. Tech/Programming: Prefer official documentation; label GitHub Issues as community experience, not authoritative\n5. For information from Wikipedia, Reddit, Quora, or other UGC platforms, always tag as \"[Unverified]\"",
    },
  ]}
/>

### Kiểm tra kích hoạt khi phát hiện ảo giác (cấp quy trình)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[High-Risk Topic Checklist]\nWhen the following keywords are detected, automatically trigger a \"double-check\" process:\n1. Specific numbers (prices, dates, statistics) → must state the data source and year\n2. Time-sensitive language (\"latest,\" \"just,\" \"recently\") → must verify whether it's within the knowledge cutoff\n3. Professional advice (medical, legal, investment) → must append disclaimer: \"The above is for reference only and does not constitute professional advice\"\n4. Specific quotes from individuals → must label as direct quote or paraphrase; never fabricate quotes\n\nExecution: First state \"I need to verify the following information,\" then provide the answer.",
    },
  ]}
/>

## Giới hạn của bộ nhớ
Memory Space hiện có những giới hạn sau:
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
