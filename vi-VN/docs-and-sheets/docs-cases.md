---
title: "Tình huống sử dụng Kimi Docs & thư viện prompt"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Tình huống sử dụng Kimi Docs \u0026 thư viện prompt - Trung tâm trợ giúp Kimi"
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
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
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
      content: "Find the first assignment PDF for Stanford's CS336 course in English, then convert\nit to a French PDF. Preserve all code and mathematical formulas in the French version.\nThe translation should be fluent — do not omit or add any content.",
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
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black \u0026 white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English \u0026 Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods \u0026 Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar \u0026 Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall \u0026 Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
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
