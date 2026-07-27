---
title: "Demo ca sử dụng Kimi WebBridge"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Demo ca sử dụng Kimi WebBridge - Trung tâm trợ giúp Kimi"
  description="Khám phá các ca sử dụng Kimi WebBridge điển hình, gồm ví dụ về Skill và CLI cho lập kế hoạch du lịch, tìm nhà thuê, nghiên cứu tài liệu và nhiều tác vụ khác."
  ogType="article"
/>

# Demo ca sử dụng Kimi WebBridge

Kimi WebBridge cho phép Agent thao tác với trình duyệt như người thật, sử dụng các website mà bạn đã đăng nhập để tự động điều hướng, trích xuất và sắp xếp thông tin.

<Callout type="tip">
Khi dùng WebBridge, bạn mô tả nhiệm vụ càng cụ thể thì Agent hoàn thành càng chính xác. Bạn nên nêu rõ website mục tiêu, các điều kiện lọc và định dạng kết quả mong muốn. Nếu cấu trúc trang phức tạp, bạn cũng có thể yêu cầu Agent chụp ảnh màn hình trước để xác nhận trạng thái trang rồi mới tiếp tục.
</Callout>

Trong thực tế, WebBridge thường được dùng cùng Skill và CLI: Skill ghi lại kinh nghiệm thực hiện nhiệm vụ—cần truy cập website nào, làm theo các bước nào để thu thập thông tin và sắp xếp kết quả ra sao; CLI cung cấp các năng lực cụ thể như tìm kiếm, đọc trang, tải tệp xuống và truy vấn dữ liệu có cấu trúc.

Hãy nói với AI Agent, chỉ trong một câu, việc bạn thường lặp đi lặp lại trên web. Nó có thể tạo cho bạn một CLI dùng trực tiếp phiên đăng nhập Chrome thật của bạn—không cần API, cũng không phải cấu hình hay quản lý API Token.

Các Skills và CLIs dùng trong những kịch bản dưới đây được tạo theo cách này. Bạn có thể cài đặt và sử dụng trực tiếp, hoặc xem chúng như các ví dụ tham khảo.

<Callout type="warning">
Các Skills và CLIs được cung cấp trên trang này chỉ phục vụ mục đích giảng dạy và trao đổi kỹ thuật. Nếu có bất kỳ băn khoăn nào, vui lòng liên hệ <a href="mailto:support@moonshot.ai">support@moonshot.ai</a>.
</Callout>

## Tra cứu và sắp xếp thông tin

Khi cần tìm kiếm trên nhiều website, WebBridge có thể để Agent tự động mở các trang mục tiêu, trích xuất nội dung then chốt và sắp xếp thành đầu ra có cấu trúc, giúp bạn khỏi phải mở từng trang rồi sao chép, dán thủ công một cách mất thời gian.

### Lập kế hoạch du lịch

Chuyển qua lại giữa các nền tảng đặt vé máy bay, website đặt khách sạn và cộng đồng du lịch để so sánh giá và lịch trình, rồi sắp xếp hành trình, bảng ngân sách và gợi ý lưu trú.

Công cụ liên quan:

- Skill: [travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI: [ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli), [booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi đang lên kế hoạch cho chuyến đi Kyoto 5 ngày 4 đêm vào tháng 11 cho hai người, với ngân sách khoảng 8.000 RMB. Vui lòng kiểm tra chuyến bay, khách sạn và giờ mở cửa các điểm tham quan, rồi sắp xếp kết quả thành lịch trình từng ngày và bảng ngân sách.",
    },
  ]}
/>

Cài đặt và sử dụng:

1. Tải ctrip-cli và booking-cli từ [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Chạy `npx skills add better-world-ai/x-cli --skill travel-planning`
3. Mở một Agent cục bộ, chẳng hạn client tương thích Skill như Kimi Code, Claude Code, Codex CLI hoặc Cursor, rồi gửi prompt ở trên

### Lọc tin cho thuê nhà

Tìm kiếm đồng thời trên nhiều nền tảng cho thuê nhà, lọc tin theo giá thuê, thời gian đi lại, loại căn hộ và các tiêu chí khác, tổng hợp thông tin và xếp hạng đề xuất.

Công cụ liên quan:

- Skill: [rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI: [58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli), [anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli), [apartments-cli](https://github.com/better-world-ai/x-cli/tree/main/apartments-cli), [rightmove-cli](https://github.com/better-world-ai/x-cli/tree/main/rightmove-cli), [idealista-cli](https://github.com/better-world-ai/x-cli/tree/main/idealista-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Vui lòng giúp tôi tìm nhà thuê gần Ga Zhangjiang Hi-Tech Park ở Thượng Hải. Ngân sách của tôi trong khoảng 4.500 RMB, thời gian đi lại dưới 40 phút, ưu tiên căn hộ nguyên căn một phòng ngủ. Hãy mở nhiều nền tảng, sắp xếp liên kết tin đăng, giá, diện tích sàn và thời gian đi lại, đồng thời cung cấp danh sách liên hệ ưu tiên.",
    },
  ]}
/>

Cài đặt và sử dụng:

1. Tải 58-cli, anjuke-cli, apartments-cli, rightmove-cli và idealista-cli từ [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Chạy `npx skills add better-world-ai/x-cli --skill rental-assistant`
3. Mở một Agent cục bộ, chẳng hạn client tương thích Skill như Kimi Code, Claude Code, Codex CLI hoặc Cursor, rồi gửi prompt ở trên

## Nghiên cứu và phân tích nội dung

WebBridge có thể giúp Agent tự động duyệt kết quả tìm kiếm, mở trang chi tiết, trích xuất tiêu đề, dữ liệu, bình luận và các thông tin khác, rồi phân tích và tóm tắt. Công cụ này rất phù hợp với các tác vụ nghiên cứu cần duyệt nhiều trang web.

### Nghiên cứu tài liệu

Tìm kiếm tài liệu học thuật, trích xuất tóm tắt bài báo, phương pháp cốt lõi, kết luận thực nghiệm và quan hệ trích dẫn, rồi xuất bản tổng quan có cấu trúc.

Công cụ liên quan:

- Skill: [paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI: [scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Vui lòng nghiên cứu các bài báo tiêu biểu trong hai năm qua về bộ nhớ của AI Agent, sắp xếp tiêu đề, tác giả, tóm tắt, phương pháp cốt lõi và liên kết mã nguồn mở, rồi tóm tắt mạch phát triển của hướng nghiên cứu này.",
    },
  ]}
/>

Cài đặt và sử dụng:

1. Tải scholar-cli từ [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Chạy `npx skills add better-world-ai/x-cli --skill paper-research`
3. Mở một Agent cục bộ, chẳng hạn client tương thích Skill như Kimi Code, Claude Code, Codex CLI hoặc Cursor, rồi gửi prompt ở trên

### Tìm kiếm chủ đề chuyên sâu

Khi muốn tìm hiểu một chủ đề xa lạ, cách cũ là mở công cụ tìm kiếm, bấm vào từng kết quả để đọc hết, sao chép các ý chính rồi sắp xếp thành ghi chú—thế là mất nửa ngày.

Hãy để AI làm quy trình này thay bạn: nó tự động tìm kiếm, lần theo kết quả để lấy toàn văn, rồi có thể tổng hợp thành bản tóm tắt cho bạn hoặc giữ nguyên văn bản gốc để bạn đọc. Với các chủ đề nghiên cứu, theo dõi diễn biến mới trong một lĩnh vực, hoặc thu thập tư liệu để viết, hãy dùng công cụ này trước để gom thông tin về một nơi.

Công cụ liên quan:

- CLI: [google-cli](https://github.com/better-world-ai/x-cli/tree/main/google-cli), [baidu-cli](https://github.com/better-world-ai/x-cli/tree/main/baidu-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tìm kiếm các mô hình AI cục bộ đáng dùng trong năm 2025 và truy xuất toàn văn của 10 kết quả hàng đầu.",
    },
  ]}
/>

Cài đặt và sử dụng:

1. Tải google-cli hoặc baidu-cli từ [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Mở một Agent cục bộ, chẳng hạn client tương thích Skill như Kimi Code, Claude Code, Codex CLI hoặc Cursor, rồi gửi prompt ở trên

## Hỗ trợ công việc văn phòng hằng ngày

Dùng khả năng tự động hóa của WebBridge để xử lý các thao tác web lặp lại và nâng cao hiệu suất làm việc.

### So sánh giá thương mại điện tử

Tìm cùng một sản phẩm trên nhiều nền tảng thương mại điện tử, so sánh giá, thông số và đánh giá của người dùng, rồi sắp xếp các lựa chọn mua hàng tốt nhất.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi muốn mua màn hình 27 inch 4K với ngân sách khoảng 2.000 RMB. Vui lòng tìm kiếm và so sánh các lựa chọn trên những nền tảng thương mại điện tử phổ biến, sắp xếp giá, thương hiệu và đánh giá của người dùng, rồi đề xuất các lựa chọn đáng tiền nhất.",
    },
  ]}
/>

### Trích xuất dữ liệu web

Trích xuất dữ liệu có cấu trúc như bảng và danh sách từ trang web, rồi tự động sắp xếp theo định dạng được chỉ định, giúp bạn khỏi phải sao chép và dán thủ công.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Vui lòng giúp tôi mở trang web này, trích xuất bảng giá sản phẩm trên trang và xuất thành danh sách rõ ràng.",
    },
  ]}
/>

Để xem thêm các ca sử dụng, hãy truy cập [website chính thức của Kimi WebBridge](https://www.kimi.com/zh-cn/features/webbridge).
