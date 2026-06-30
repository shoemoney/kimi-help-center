---
title: "Kiến thức cơ bản về prompt"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Kiến thức cơ bản về prompt - Trung tâm trợ giúp Kimi"
  description="Prompt là câu lệnh văn bản bạn gửi cho Kimi — đó có thể là một câu hỏi, một mô tả, một loạt yêu cầu, hoặc thậm chí là toàn bộ bản tóm tắt nhiệm vụ. Kimi dựa vào..."
/>

# Kiến thức cơ bản về prompt

<Callout type="info">
Prompt là câu lệnh văn bản bạn gửi cho Kimi — đó có thể là một câu hỏi, một mô tả, một loạt yêu cầu, hoặc thậm chí là toàn bộ bản tóm tắt nhiệm vụ. Kimi dựa vào prompt của bạn để hiểu ý định, sắp xếp câu trả lời và thực thi nhiệm vụ.

Nói ngắn gọn: **cách bạn hỏi quyết định cách Kimi trả lời.** Một prompt rõ ràng, cụ thể hầu như luôn dẫn đến câu trả lời chính xác và giá trị hơn.
</Callout>

## Bốn yếu tố cốt lõi của một prompt tốt

### 1. Xác định vai trò và bối cảnh

Cho Kimi biết bạn là ai và đang ở trong tình huống nào sẽ giúp nó chọn đúng độ sâu và giọng điệu phù hợp.

| Prompt mơ hồ | Prompt tốt hơn |
|-------------|--------------|
| Viết một bài về AI | Tôi là biên tập viên của một kênh truyền thông công nghệ. Tôi cần một bài giải thích về AI dài 2.000 từ dành cho độc giả phổ thông, viết theo phong cách dễ hiểu, cuốn hút |
| Giúp tôi phân tích dữ liệu | Tôi là chuyên viên phân tích thị trường. Hãy phân tích tỷ lệ chuyển đổi theo từng kênh trong file Excel này, tập trung vào biến động so với tháng trước |

### 2. Mô tả nhiệm vụ thật cụ thể

Mô tả càng cụ thể, bạn càng cần ít vòng chỉnh sửa. Một mô tả nhiệm vụ tốt thường bao gồm:

- **Làm gì**: Một hành động rõ ràng (phân tích, tóm tắt, dịch, tạo, so sánh…)
- **Định dạng đầu ra**: Bảng, danh sách, đoạn văn, mã, Markdown…
- **Phạm vi và ràng buộc**: Số từ, số mục, khoảng thời gian, phạm vi địa lý…
- **Yêu cầu chất lượng**: Giọng học thuật, đời thường, súc tích, chi tiết…

<ComparisonBlock
  wrong={"Tóm tắt bài viết này"}
  correct={"Tóm tắt bài viết này thành 3 gạch đầu dòng, mỗi dòng không quá 50 từ, bằng tiếng Anh"}
/>

### 3. Cung cấp ví dụ hoặc tài liệu tham khảo

Khi bạn có kỳ vọng cụ thể về định dạng, việc đưa cho Kimi một ví dụ (few-shot) sẽ rất hiệu quả:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Please organize the meeting notes in this format:\n\nMeeting Topic: xxx\nAttendees: xxx\nKey Decisions:\nxxx\nxxxAction Items:\n[ ] xxx (Owner: xxx, Deadline: xxx)",
    },
  ]}
/>

### 4. Chia nhiệm vụ phức tạp thành các bước
Với những nhiệm vụ phức tạp, hãy chia công việc thành các bước nhỏ hơn và dẫn dắt Kimi đi qua từng bước:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I need a competitive analysis report. Please follow these steps:\nList the top 3 domestic competitors and their core features\nCompare their pricing strategies\nAnalyze each product's strengths and weaknesses\nProvide differentiation recommendations for our product",
    },
  ]}
/>

## Mẹo thực tế
### Tận dụng câu hỏi tiếp nối và lặp lại tinh chỉnh
Chưa hài lòng với câu trả lời đầu tiên? Cứ hỏi tiếp — không cần nhắc lại toàn bộ bối cảnh:
- "Hãy nói rõ hơn về điểm số 2"
- "Làm cho giọng điệu trang trọng hơn"
- "Thêm nguồn dữ liệu"
- "Phân tích lại từ một góc độ khác"
### Tận dụng file và liên kết
Kimi hỗ trợ tải lên PDF, tài liệu Word, file Excel, hình ảnh và nhiều loại khác. Bạn cũng có thể dán trực tiếp URL. Kết hợp file với prompt sẽ tăng hiệu suất đáng kể:
| Nhiệm vụ | Ví dụ prompt |
|------|---------------|
| Tóm tắt PDF | "Tóm tắt những điểm chính của PDF này" |
| Phân tích dữ liệu | "Phân tích xu hướng bán hàng dựa trên dữ liệu Excel này" |
| Trích xuất từ URL | "Đọc bài viết tại liên kết này và rút ra những điểm cốt lõi" |

### Chỉ định định dạng đầu ra
Hãy nói rõ với Kimi bạn muốn định dạng nào:
| Nhu cầu | Ví dụ prompt |
|------|---------------|
| Bảng so sánh | "So sánh ưu và nhược điểm của A và B trong một bảng" |
| Xuất mã | "Triển khai bằng Python kèm chú thích" |
| Danh sách có cấu trúc | "Sắp xếp thành danh sách đánh số, mỗi mục dưới 20 từ" |
| Markdown | "Xuất ra định dạng Markdown với phân cấp tiêu đề" |

### Dùng bộ nhớ để lưu các tùy chọn lâu dài
Nếu bạn có những tùy chọn và yêu cầu lặp đi lặp lại, hãy dùng tính năng **Memory** của Kimi để ghi nhớ lâu dài:
- "Hãy nhớ rằng tôi là kỹ sư frontend, ưa dùng stack React"
- "Luôn trả lời bằng tiếng Anh theo định dạng Markdown"
- "Đưa kèm ví dụ mã khi trả lời các câu hỏi kỹ thuật"

<Callout type="tip">
Nhờ vậy, bạn không phải lặp lại mãi — Kimi sẽ tự động áp dụng những tùy chọn này trong các cuộc trò chuyện sau.
</Callout>

## Những lỗi thường gặp
| Lỗi | Cách làm tốt hơn |
|---------|----------------|
| Nhồi nhiều nhiệm vụ không liên quan vào một tin nhắn | Mở phiên mới cho mỗi nhiệm vụ độc lập để giữ bối cảnh gọn gàng |
| Prompt quá mơ hồ (ví dụ: "viết gì đó cho tôi") | Nêu rõ viết gì, cho ai, theo phong cách nào, dài bao nhiêu |
| Mong đợi kết quả hoàn hảo ngay từ lần đầu | Tạo bản nháp trước, rồi tinh chỉnh dần qua các câu hỏi tiếp nối |
| Không kiểm chứng kết quả của AI | Luôn xác minh ngày tháng, dữ liệu và các thông tin khẳng định |

## Mẫu prompt khởi động nhanh
Dưới đây là vài mẫu prompt dùng được ngay — sao chép, tùy chỉnh và bắt đầu:
**Viết lách**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Write a [article type] about [topic] for [target audience], approximately [xxx] words.\nRequirements: [style/format/focus areas]",
    },
  ]}
/>

**Phân tích**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analyze [subject], focusing on [key dimensions].\nOutput format: [table/chart/report]\nInclude conclusions and recommendations.",
    },
  ]}
/>

**Dịch thuật**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Translate the following into [target language], maintaining a [academic/conversational/business] tone.\nInclude the original term in parentheses for domain-specific terminology.",
    },
  ]}
/>

<Callout type="info">
Nắm vững những khái niệm và kỹ thuật cốt lõi này, bạn sẽ cộng tác với Kimi hiệu quả hơn rất nhiều — biến AI thành một công cụ năng suất thực thụ.
</Callout>
