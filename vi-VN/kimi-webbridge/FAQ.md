---
title: "Câu hỏi thường gặp"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Câu hỏi thường gặp về Tiện ích mở rộng trình duyệt Kimi - Trung tâm trợ giúp Kimi"
  description="Những câu hỏi thường gặp về việc cài đặt, kết nối và sử dụng Tiện ích mở rộng trình duyệt Kimi với nhiều trình duyệt và Local Agent."
  ogType="article"
/>

# Câu hỏi thường gặp

## Phiên bản sản phẩm

### Kimi WebBridge và Tiện ích mở rộng trình duyệt Kimi có mối quan hệ gì?

Kimi WebBridge đã được đổi tên thành Tiện ích mở rộng trình duyệt Kimi, đồng thời bổ sung các tính năng mới như lối vào thanh bên của trình duyệt, ghi lại thao tác web và tách trang web thành chỉ dẫn. Cách Local Agent gọi tiện ích mở rộng vẫn giữ nguyên và có thể tiếp tục sử dụng; lối vào thanh bên mới cần đăng nhập bằng tài khoản Kimi để sử dụng.

## Cài đặt và cấu hình

### Khi cài đặt tiện ích mở rộng, bạn thấy thông báo "Không thể thêm ứng dụng từ trang web này"?

Hãy đảm bảo cài đặt từ kho ứng dụng chính thức (Chrome Web Store hoặc Edge Add-ons). Nếu không truy cập được kho ứng dụng, hãy dùng phương thức cài đặt thủ công có trên trang web chính thức.

### Chạy lệnh kết nối nhưng không có gì xảy ra?

Vui lòng kiểm tra kết nối mạng của bạn. Nếu vẫn không khắc phục được, hãy thử khởi động lại Kimi Claw Desktop rồi chạy lại lệnh.

### Tôi có thể dùng trên nhiều máy tính không?

Có, nhưng mỗi máy tính cần được cài đặt và cấu hình riêng.

### Tôi không tìm thấy Kimi Claw Desktop?

Kimi Claw Desktop là một Kimi Claw được triển khai ngay trên máy tính của bạn. Hãy mở Kimi Desktop, tìm Kimi Claw ở thanh bên trái, tạo một Claw mới và chọn "Triển khai trên máy tính của tôi".

## Kết nối và sử dụng

### Trạng thái tiện ích mở rộng hiển thị "Đã ngắt kết nối"?

Hãy xác nhận rằng Tiện ích mở rộng trình duyệt Kimi đã được cài đặt thành công, sau đó làm theo các bước tương ứng với cách thiết lập của bạn:

- **Kimi Desktop**: Khởi động lại Kimi Desktop rồi thử lại

- **Local Agent khác**: Gửi lại lệnh sau trong Agent của bạn, sau khi lệnh chạy xong hãy khởi động lại Agent:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Trên Windows, khi cài đặt Tiện ích mở rộng trình duyệt Kimi gặp lỗi: Cài đặt thất bại

Tiện ích mở rộng trình duyệt Kimi hỗ trợ hệ điều hành Windows, và lệnh cài đặt có thể chạy trong môi trường Linux:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### Sau khi cài đặt, Tiện ích mở rộng trình duyệt Kimi hiển thị cảnh báo về tính tương thích với Chrome. Điều đó nghĩa là gì?

Nếu Tiện ích mở rộng trình duyệt Kimi mở được trang bình thường, nhưng các thao tác như `snapshot`, `evaluate`, `screenshot` hay `click` liên tục thất bại, thì nguyên nhân phổ biến hơn cả là **xung đột với các tiện ích mở rộng khác của trình duyệt**.

Điều này đặc biệt hay xảy ra với các công cụ thu thập dữ liệu, tiện ích hỗ trợ trang web, tiện ích quay màn hình và tiện ích trợ lý AI.

Chúng tôi khuyên bạn làm theo các bước sau để khắc phục:

1. Mở trang quản lý tiện ích mở rộng của trình duyệt
2. Tạm thời tắt các tiện ích mở rộng khác
3. Chỉ giữ lại Tiện ích mở rộng trình duyệt Kimi ở trạng thái bật
4. Khởi động lại trình duyệt và thử lại
5. Nếu Tiện ích mở rộng trình duyệt Kimi hoạt động bình thường, hãy bật lại từng tiện ích còn lại để tìm ra tiện ích đang gây xung đột


### Tiện ích mở rộng trình duyệt Kimi có làm lộ thông tin đăng nhập của tôi không?

Không. Mọi thao tác đều diễn ra cục bộ trên thiết bị của bạn—trạng thái đăng nhập và nội dung trang web không bao giờ rời khỏi máy. Agent chỉ có thể truy cập những kết quả thao tác mà bạn cho phép.

### Vì sao các thao tác lại thất bại?

Cấu trúc trang phức tạp hoặc nội dung tải động có thể khiến thao tác thất bại. Hãy thử đơn giản hóa hướng dẫn của bạn, hoặc yêu cầu Agent chụp ảnh màn hình trước để xác nhận trạng thái trang trước khi thực hiện.

### Những trình duyệt nào được hỗ trợ?

Hiện hỗ trợ Chrome và Edge. Chúng tôi khuyên bạn dùng phiên bản mới nhất để có trải nghiệm tốt nhất.

## Phối hợp với các agent khác

### Những Agent nào khác được hỗ trợ?

Tiện ích mở rộng trình duyệt Kimi hỗ trợ mọi Local Agent, bao gồm Claude Code, Codex, Cursor, Kimi Code, Hermes Claw cùng nhiều công cụ khác.

### Cách cấu hình có giống nhau giữa các Agent không?

Lệnh thiết lập đều giống nhau—chỉ cần chạy một lệnh curl duy nhất để cài đặt. Hãy tham khảo cấu hình Skill của từng Agent để biết chi tiết.
