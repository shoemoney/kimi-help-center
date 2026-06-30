---
title: "Tình huống sử dụng Deep Research & thư viện prompt"
slug: "deep-research-use-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Tình huống sử dụng Deep Research \u0026 thư viện prompt - Trung tâm trợ giúp Kimi"
  description="Tôi là một nhà phân tích chứng khoán chuyên nghiệp. Hãy giúp tôi phân tích chuyên sâu về Pop Mart dưới góc độ tài chính. Phân tích cần bao gồm nhưng..."
/>

# Tình huống sử dụng Deep Research & thư viện prompt

## Tổng quan các tình huống sử dụng

| Tình huống | Prompt ví dụ |
|:---|:---|
| Nghiên cứu ngành / thị trường | Nghiên cứu bối cảnh cạnh tranh và những tên tuổi chủ chốt trong lĩnh vực robot hình người tại thị trường nội địa năm 2025 |
| Phân tích cạnh tranh | So sánh và phân tích sự khác biệt trong chiến lược sản phẩm giữa Notion và Obsidian |
| Thẩm định đầu tư | Tổng hợp các vòng gọi vốn và biến động định giá của những công ty LLM lớn trong hai năm qua |
| Tổng quan tài liệu học thuật | Truy nguyên quá trình phát triển của công nghệ RAG và những hướng tối ưu chính hiện nay |
| Phân tích chính sách | Phân tích tác động của các quy định mới nhất về an ninh dữ liệu đối với những công ty mở rộng ra nước ngoài |
| Quyết định cá nhân | Tôi muốn mua một chiếc laptop để dựng video — hãy giúp tôi tìm hiểu những lựa chọn hàng đầu |

## Nghiên cứu ngành

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi là một nhà phân tích chứng khoán chuyên nghiệp. Hãy giúp tôi phân tích chuyên sâu về Pop Mart dưới góc độ tài chính. Phân tích cần bao gồm nhưng không giới hạn ở: 1. Tổng quan công ty: mô hình kinh doanh, lợi thế cạnh tranh bền vững và vị thế trong ngành; 2. Tổng quan ngành, động lực thượng nguồn/hạ nguồn và triển vọng phát triển; 3. Dữ liệu tài chính: xu hướng doanh thu và lợi nhuận, các yếu tố ảnh hưởng, bảng cân đối kế toán và dòng tiền; 4. Hồ sơ tuân thủ — mọi án phạt từ cơ quan quản lý, căn cứ cụ thể và rủi ro liên quan; 5. Phân tích kỹ thuật: xu hướng giá, các chỉ báo và mức hỗ trợ/kháng cự; 6. Tâm lý thị trường: xếp hạng, dư luận và tác động của tin tức; 7. So sánh cạnh tranh: các đối thủ chính, thị phần và chỉ số tài chính của từng bên; 8. Định giá và sức khỏe tài chính: định giá PE/PB/DCF và đánh giá mức độ hợp lý; 9. Rủi ro chính: cạnh tranh ngành, chính sách, địa chính trị, v.v.",
    },
  ]}
/>

## Phân tích cạnh tranh

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "So sánh và phân tích sự khác biệt trong chiến lược sản phẩm giữa Notion và Obsidian",
    },
  ]}
/>

## Thẩm định đầu tư

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Thực hiện nghiên cứu chuyên sâu về [Tên công ty]:\n1. Mô hình kinh doanh \u0026 lợi thế cốt lõi (lợi thế cạnh tranh, ưu thế về công nghệ/kênh phân phối, bối cảnh cạnh tranh);\n2. Sức khỏe tài chính (cơ cấu doanh thu, khả năng sinh lời, dòng tiền, các vùng rủi ro chính);\n3. Đội ngũ \u0026 quản trị (xuất thân của nhà sáng lập, cơ cấu cổ phần, nhân sự chủ chốt);\n4. Thị trường \u0026 chính sách (TAM/SAM/SOM, tốc độ tăng trưởng ngành, môi trường pháp lý);\n5. Nhận diện rủi ro (kinh doanh, pháp lý, rào cản thoái vốn);\n6. Tham chiếu định giá (công ty so sánh, các vòng gọi vốn trước đây, khoảng hợp lý).\nYêu cầu: Trích dẫn nguồn dữ liệu, đánh dấu các kết luận quan trọng bằng ⭐, liệt kê riêng những điểm còn tranh cãi.",
    },
  ]}
/>

[Xem kết quả](https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b)

## Nghiên cứu pháp lý & quy định

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi là luật sư nội bộ tại một công ty robot của Trung Quốc, và ban lãnh đạo đang cân nhắc mở rộng sang các nước Đông Nam Á. Tuy nhiên, tôi chưa thật sự nắm chắc các yêu cầu về dữ liệu và quyền riêng tư tại những quốc gia đó. Bạn có thể giúp tôi liệt kê tên các đạo luật về dữ liệu và quyền riêng tư của các nước Đông Nam Á (theo từng quốc gia), và tốt nhất là kèm theo bản tóm tắt ngắn gọn cùng những điểm cốt lõi của các đạo luật đó không?",
    },
  ]}
/>

## Tổng quan học thuật 

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi là học viên cao học ngành truyền thông đang thực hiện nghiên cứu học thuật về \"khoảng cách số\". Hãy thực hiện một nghiên cứu chuyên sâu có hệ thống. Tôi cần ít nhất 15 bài báo trên các tạp chí học thuật uy tín bằng cả tiếng Trung và tiếng Anh. Hãy cung cấp định nghĩa của khái niệm này, tài liệu trong 3–5 năm gần đây, và 3 tiểu chủ đề tiềm năng để nghiên cứu sâu hơn. Tập trung vào các nghiên cứu và văn bản chính sách mới nhất kể từ năm 2020, đặc biệt chú ý đến những hướng nghiên cứu mới sau làn sóng AI năm 2023.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Soạn giáo án bài \"Mùa xuân\" cho học sinh lớp 7",
    },
  ]}
/>

<Frames
  src="./images/use-cases/academic-review.png"
  alt="Tổng quan học thuật"
/>

## Phân tích chính sách

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Với vai trò là một nhà phân tích chính sách, hãy phân tích chuyên sâu [tên chính sách/văn bản], bao gồm bối cảnh và các mục tiêu cốt lõi.\nLiệt kê các đối tượng áp dụng và những thay đổi thực chất của các điều khoản then chốt, các yêu cầu tuân thủ cụ thể cùng lộ trình thời gian dành cho doanh nghiệp, và dự báo về hướng đi của chính sách trong tương lai.\nYêu cầu: Trích dẫn văn bản chính thức kèm nguồn, làm nổi bật những thay đổi quan trọng, bàn riêng về các điều khoản gây tranh cãi, và giữ tổng độ dài dưới 2.000 từ.",
    },
  ]}
/>

## Quyết định cá nhân (lập kế hoạch du lịch / so sánh sản phẩm)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi muốn lái xe khám phá vùng Bắc Tân Cương. Hãy lập một hành trình 5 ngày 4 đêm bao gồm ẩm thực, hoạt động và lưu trú. Gia đình bốn người gồm tôi, vợ/chồng tôi, một cậu bé 6 tuổi và một bé gái 4 tuổi. Bọn trẻ hiếu động và thích đi bộ, nhưng hãy tránh những cung đường đặc biệt nguy hiểm.",
    },
  ]}
/>

## Một số prompt ví dụ khác

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tổng hợp các sự kiện gọi vốn trong ngành robot năm 2025, sắp xếp theo tháng, ghi chú nhà đầu tư dẫn dắt và xu hướng gọi vốn. Cung cấp các liên kết trích dẫn.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "So sánh ưu nhược điểm của iPhone 16 và iPhone 17 ở các mặt nhiếp ảnh, hiệu năng và thời lượng pin, trích dẫn phản hồi thực tế từ người dùng trong năm qua.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi là sinh viên đại học đang tìm việc và bắt đầu từ con số không trong lĩnh vực phát triển LLM. Hãy giúp tôi lập một lộ trình học tập cho lĩnh vực này và cung cấp những kiến thức tương ứng.",
    },
  ]}
/>
