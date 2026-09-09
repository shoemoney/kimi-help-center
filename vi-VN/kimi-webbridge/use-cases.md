---
title: "Demo ca sử dụng Tiện ích mở rộng trình duyệt Kimi"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Demo ca sử dụng Tiện ích mở rộng trình duyệt Kimi - Trung tâm trợ giúp Kimi"
  description="Khám phá các ca sử dụng điển hình của Tiện ích mở rộng trình duyệt Kimi: lập kế hoạch du lịch, tìm nhà thuê, nghiên cứu tài liệu, so sánh giá và nhiều nội dung khác, kèm các ví dụ prompt có thể sao chép ngay."
  ogType="article"
/>

# Demo ca sử dụng Tiện ích mở rộng trình duyệt Kimi

Tất cả các tác vụ dưới đây đều có thể giao trực tiếp cho Kimi: trò chuyện trong thanh bên, hoặc để Agent cục bộ thực hiện.

## Tra cứu và sắp xếp thông tin

Khi cần tìm kiếm trên nhiều website, Tiện ích mở rộng trình duyệt Kimi có thể để Agent tự động mở các trang mục tiêu, trích xuất nội dung then chốt và sắp xếp thành đầu ra có cấu trúc, giúp bạn khỏi phải mở từng trang rồi sao chép, dán thủ công một cách mất thời gian.

### Lập kế hoạch du lịch

Chuyển qua lại giữa các nền tảng đặt vé máy bay, website đặt khách sạn và cộng đồng du lịch để so sánh giá và lịch trình, rồi sắp xếp hành trình, bảng ngân sách và gợi ý lưu trú.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tôi đang lên kế hoạch cho chuyến đi Kyoto 5 ngày 4 đêm vào tháng 11 cho hai người, với ngân sách khoảng 8.000 RMB. Vui lòng kiểm tra chuyến bay, khách sạn và giờ mở cửa các điểm tham quan, rồi sắp xếp kết quả thành lịch trình từng ngày và bảng ngân sách.",
    },
  ]}
/>

### Lọc tin cho thuê nhà

Tìm kiếm đồng thời trên nhiều nền tảng cho thuê nhà, lọc tin theo giá thuê, thời gian đi lại, loại căn hộ và các tiêu chí khác, tổng hợp thông tin và xếp hạng đề xuất.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Vui lòng giúp tôi tìm nhà thuê gần Ga Zhangjiang Hi-Tech Park ở Thượng Hải. Ngân sách của tôi trong khoảng 4.500 RMB, thời gian đi lại dưới 40 phút, ưu tiên căn hộ nguyên căn một phòng ngủ. Hãy mở nhiều nền tảng, sắp xếp liên kết tin đăng, giá, diện tích sàn và thời gian đi lại, đồng thời cung cấp danh sách liên hệ ưu tiên.",
    },
  ]}
/>

## Nghiên cứu và phân tích nội dung

Tiện ích mở rộng trình duyệt Kimi có thể giúp Agent tự động duyệt kết quả tìm kiếm, mở trang chi tiết, trích xuất tiêu đề, dữ liệu, bình luận và các thông tin khác, rồi phân tích và tóm tắt. Công cụ này rất phù hợp với các tác vụ nghiên cứu cần duyệt nhiều trang web.

### Nghiên cứu tài liệu

Tìm kiếm tài liệu học thuật, trích xuất tóm tắt bài báo, phương pháp cốt lõi, kết luận thực nghiệm và quan hệ trích dẫn, rồi xuất bản tổng quan có cấu trúc.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Vui lòng nghiên cứu các bài báo tiêu biểu trong hai năm qua về bộ nhớ của AI Agent, sắp xếp tiêu đề, tác giả, tóm tắt, phương pháp cốt lõi và liên kết mã nguồn mở, rồi tóm tắt mạch phát triển của hướng nghiên cứu này.",
    },
  ]}
/>

### Tìm kiếm chủ đề chuyên sâu

Bạn muốn tìm hiểu một chủ đề xa lạ? Hãy để Kimi tự động tìm kiếm, đọc toàn văn từng kết quả một và tổng hợp mọi thứ thành một bản tóm tắt.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tìm kiếm các mô hình AI cục bộ đáng dùng trong năm 2025 và truy xuất toàn văn của 10 kết quả hàng đầu.",
    },
  ]}
/>

## Hỗ trợ công việc văn phòng hằng ngày

Dùng khả năng tự động hóa của Tiện ích mở rộng trình duyệt Kimi để xử lý các thao tác web lặp lại và nâng cao hiệu suất làm việc.

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

## Biến quy trình lặp lại thành Skill

Khi một quy trình cần thực hiện lặp đi lặp lại, bạn không cần gửi lại lệnh mỗi lần. Kimi có thể "học" quá trình thao tác và lưu thành Skill—sau đó chỉ cần nhập `/` để gọi bất cứ lúc nào.

### Ghi thao tác thành Skill

Phù hợp với các thao tác web có bước cố định, chẳng hạn mở trang quản trị để xuất dữ liệu mỗi ngày hoặc điền một biểu mẫu cố định.

1. Nhập `/` trong thanh bên và chọn "Ghi thao tác thành Skill"
2. Thao tác một lần như bình thường—Kimi sẽ ghi lại từng bước của bạn
3. Nhấp "Dừng và tạo", Kimi sẽ chắt lọc quá trình này thành một Skill
4. Xác nhận tên, các bước và tham số của Skill rồi lưu lại (thông tin nhạy cảm như mật khẩu có thể đặt làm tham số bảo mật và điền khi phát lại)

Sau đó, nhập `/` và chọn Skill đó để Kimi lặp lại quy trình cho bạn. Bạn có thể chỉnh sửa các bước và nội dung của Skill bất cứ lúc nào.

### Biến trang web thành Skill

Phù hợp với các website bạn thường xuyên sử dụng, chẳng hạn bảng dữ liệu cố định hoặc hệ thống nội bộ.

Nhập `/` trong thanh bên và chọn "Biến trang web thành Skill". Kimi sẽ tự động phân tích cấu trúc và cách dùng của website này, đóng gói thành một Skill sẵn sàng để gọi; sau khi lưu, bạn có thể sử dụng bất cứ lúc nào bằng `/`.

### Lưu phiên này thành Skill

Nếu Kimi đã hoàn thành tốt một quy trình trong phiên trò chuyện hiện tại, bạn cũng có thể lưu trực tiếp để tái sử dụng: nhập `/` và chọn "Lưu phiên này thành Skill".

Để xem thêm các ca sử dụng, hãy truy cập [website chính thức của Tiện ích mở rộng trình duyệt Kimi](https://www.kimi.com/zh-cn/features/webbridge).
