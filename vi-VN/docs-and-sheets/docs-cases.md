---
title: "Tình huống sử dụng Kimi Docs & thư viện prompt"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Tình huống sử dụng Kimi Docs & thư viện prompt - Trung tâm trợ giúp Kimi"
  description="Các tình huống sử dụng và prompt mẫu cho Kimi Docs — từ rà soát bản thảo đến dịch thuật chuyên nghiệp và thiết kế PDF."
/>

# Tình huống sử dụng Kimi Docs & thư viện prompt

<Callout type="info">
Các tình huống sử dụng và prompt mẫu cho Kimi Docs — từ rà soát bản thảo đến dịch thuật chuyên nghiệp và thiết kế PDF.
</Callout>

## Chuyên gia rà soát

Như một biên tập viên rà soát bản thảo tỉ mỉ, Kimi phân tích từng góp ý chỉnh sửa, xác định chính xác các đoạn liên quan trong tài liệu, rồi tự động chèn vào những nhận xét và đề xuất chi tiết.

**Prompt mẫu**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Bạn là một biên tập viên bản thảo cấp cao chuyên về đô thị thông minh và quy hoạch vùng.\nDưới đây là một tập hợp các nhận xét đánh giá cụ thể. Hãy phân tích kỹ những vấn đề này,\nxác định các đoạn văn hoặc hình ảnh tương ứng trong tài liệu Word đính kèm và\nchèn các vấn đề cùng với đề xuất chỉnh sửa chi tiết dưới dạng nhận xét. Lưu ý: các\nnhận xét phải đọc như thể do một người viết, không phải AI — tránh định dạng gạch đầu dòng.\n\nHãy xuất ra bản thảo gốc kèm theo các nhận xét chi tiết.",
    },
  ]}
/>

## Dịch thuật chuyên nghiệp

Như một dịch giả không biết mệt mỏi, Kimi dịch một file PDF tiếng Anh dài 50 trang sang tiếng Pháp theo từng trang, giữ nguyên mọi công thức và đoạn mã trong kết quả.

**Prompt mẫu**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Tìm tệp PDF của bài tập đầu tiên trong khóa học CS336 của Stanford bằng tiếng Anh, sau đó\nchuyển đổi nó thành tệp PDF tiếng Pháp. Giữ nguyên toàn bộ mã và các công thức toán học trong bản tiếng Pháp.\nBản dịch phải trôi chảy — không lược bỏ hoặc thêm bất kỳ nội dung nào.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="Dịch thuật"
/>

## Dịch vụ thiết kế & xuất bản PDF

Như một nhà thiết kế bố cục, Kimi giúp bạn lên kế hoạch về hiệu ứng thị giác, tự động sắp xếp chữ và hình ảnh, đồng thời tạo ra những tập PDF chất lượng xuất bản.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Bạn là một AI xuất bản giám tuyển chuyên về nghệ thuật hiện đại, đặc biệt là các nghiên cứu về Picasso.\nNhiệm vụ của bạn: sử dụng hình ảnh phong phú để giúp người xem hiểu vì sao cần khám phá lại Picasso\nhết lần này đến lần khác.\n\nXuất trực tiếp dưới dạng PDF.\n\nI. Yêu cầu cốt lõi\nHình ảnh phong phú\nMỗi thời kỳ, mỗi tham chiếu nghệ sĩ và mỗi trào lưu đều phải có hình ảnh minh họa\nƯu tiên hình ảnh có nguồn gốc\nChỉ dùng hình ảnh do AI tạo với độ trung thực cao khi không có hình ảnh nguồn\n\nII. Hệ thống hình ảnh\nLogo MAP làm hình mờ toàn trang\nBố cục bất đối xứng\nLưới rõ ràng với sự phá cách cục bộ có kiểm soát\nĐen trắng tương phản cao + điểm nhấn màu cơ bản\n\nIII. Cấu trúc nội dung (tạo tất cả các phần)\n1. Bìa\nPicasso\nPhụ đề triển lãm (English & Chinese)\nHình mờ logo MAP\n\n2. Vì sao là Picasso (kèm hình ảnh)\nChân dung Picasso qua các thời kỳ khác nhau\nCác tác phẩm từ những thời kỳ khác nhau đặt cạnh nhau\n\n3. Thời kỳ và trào lưu (lấy hình ảnh làm trọng tâm)\nMỗi thời kỳ phải có từ 8 đến 12 hình ảnh:\nThời kỳ Lam\nThời kỳ Hồng\nLập thể (phân tích / tổng hợp)\nChiến tranh và chính trị\nCác thử nghiệm giai đoạn cuối\n\nCác loại hình ảnh:\nTác phẩm đầy đủ\nCắt cận cảnh chi tiết\nSơ đồ giải cấu trúc (do AI tạo khi cần)\n\n4. Tác phẩm chủ chốt\nKhông ít hơn 25 tác phẩm\nMột số tác phẩm có thể chiếm trọn trang\nNhấn mạnh vào cấu trúc, phối cảnh và giải cấu trúc\n\n5. Cách ngắm nhìn Picasso\nGiải thích so sánh dựa trên hình ảnh\nXử lý cùng một chủ đề đặt song song\n\n6. Không gian triển lãm và nhịp điệu\nKhu vực xem mật độ cao\nKhu vực đệm để chiêm nghiệm\n\n7. Vị thế đương đại của MAP\nVì sao Thượng Hải cần Picasso\nVì sao thời điểm này quan trọng",
    },
  ]}
/>

## Thêm tình huống & prompt mẫu

| Tình huống | Prompt mẫu |
|------|-----------|
| **Báo cáo chuyên nghiệp** | Soạn "Sách trắng ngành kinh tế tầm thấp Trung Quốc 2026" bằng Word, theo phong cách McKinsey, bao gồm quy mô thị trường, bối cảnh cạnh tranh, bối cảnh chính sách và khuyến nghị đầu tư |
| **Rà soát hợp đồng** | [Tải lên contract.docx] Rà soát hợp đồng này dưới góc nhìn của luật sư, xác định các điều khoản rủi ro và chèn nhận xét |
| **Mô hình tài chính** | Xây dựng mô hình dự báo tài chính SaaS ba năm bằng Word, bao gồm dự phóng doanh thu, cơ cấu chi phí và dòng tiền |
| **Tóm lược nội dung dài** | Cô đọng bài báo học thuật 30.000 từ này thành bản tóm tắt điều hành 5.000 từ ở định dạng Word |
| **So sánh nhiều phiên bản** | [Tải lên Hợp đồng V1 và V2] So sánh các phiên bản, liệt kê toàn bộ thay đổi kèm mô tả tác động, xuất ra dưới dạng Word |
