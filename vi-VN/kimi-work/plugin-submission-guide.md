---
title: "Tạo và Gửi Plugin"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "Biến sản phẩm hoặc dịch vụ của bạn thành một plugin trên Kimi, kiểm thử và nộp đơn để được liệt kê trên chợ plugin chính thức."
---

<SeoMeta
  title="Tạo và Gửi Plugin - Trung tâm Trợ giúp Kimi"
  description="Hướng dẫn cách tạo, kiểm thử plugin trên Kimi Work và nộp đơn để được liệt kê trên chợ plugin chính thức của Kimi."
/>

# Tạo và Gửi Plugin

Nếu bạn muốn kết nối sản phẩm hoặc dịch vụ với Kimi để người dùng có thể truy cập các tính năng thông qua hội thoại, hãy làm theo hướng dẫn này để tạo, kiểm thử và gửi plugin lên chợ plugin chính thức của Kimi.

## Plugin Kimi là gì?

Plugin Kimi kết nối sản phẩm của bạn với Kimi. Nó giúp Kimi hiểu khi nào sản phẩm hữu ích và cung cấp các quy trình hoặc công cụ cần thiết để hỗ trợ người dùng. Một plugin có thể chứa:

- **Chỉ kỹ năng**: các quy trình tái sử dụng được tùy chỉnh cho sản phẩm hoặc trường hợp sử dụng.
- **Chỉ MCP**: công cụ và dịch vụ được hiển thị cho Kimi thông qua máy chủ MCP.
- **Kỹ năng và MCP**: công cụ sản phẩm kết hợp với quy trình giúp Kimi sử dụng hiệu quả.

## Trước khi bắt đầu

Đầu tiên, [tải xuống và cài đặt Kimi Work](https://www.kimi.com/products/kimi-work). Chuẩn bị các nội dung sau:

- Tên, mô tả và logo plugin
- Các tác vụ chính người dùng có thể hoàn thành bằng ngôn ngữ tự nhiên
- URL máy chủ MCP (nếu có)

<Callout type="warning">
Nếu logo plugin chứa sản phẩm, thương hiệu hoặc nhãn hiệu của bên thứ ba, hãy liên hệ với chủ sở hữu quyền liên quan và nhận được sự cho phép bằng văn bản cần thiết trước khi gửi.
</Callout>

## Bước 1: Tạo và kiểm thử plugin

1. Mở Kimi Work, gõ "/" trong hội thoại và chọn **Plugin Builder**.
2. Mô tả plugin và cung cấp thông tin đã chuẩn bị. Nếu bạn đã có plugin Codex, Claude hoặc nền tảng khác, hãy cung cấp tệp hoặc URL dự án và làm theo hướng dẫn để chuyển đổi.

3. Vào **Plugins** → **Cá nhân**, tìm plugin và cài đặt.

4. Kiểm thử các tính năng chính trong hội thoại mới, bao gồm trường hợp thông thường và biên. Giữ ít nhất ba lệnh kiểm thử tiêu biểu.
5. Làm theo hướng dẫn của Plugin Builder để lấy tệp ZIP plugin hoàn chỉnh.

Đối với plugin dựa trên MCP, cũng kiểm thử luồng xác thực:

- **Không xác thực**: người dùng có thể sử dụng plugin ngay sau khi cài đặt.
- **OAuth**: trang ủy quyền của bên thứ ba sẽ mở trong lần cài đặt đầu tiên.
- **Xác thực CLI**: cài đặt không bắt đầu ủy quyền. Lần đầu người dùng gọi plugin, họ hoàn tất ủy quyền trong hội thoại. Sau khi ủy quyền thành công, họ thường không cần ủy quyền lại trong các hội thoại khác.

## Bước 2: Nộp đơn ứng tuyển

Sau khi tạo và kiểm thử plugin, hoàn thành [biểu mẫu nộp plugin Kimi](https://moonshot.feishu.cn/share/base/form/shrcnZcnxlNJlbw845KoVgjEhkh) và tải lên tệp ZIP plugin.

Biểu mẫu yêu cầu:

| Mục | Yêu cầu |
| --- | --- |
| Tên, mô tả plugin và tệp ZIP | Bắt buộc |
| Loại plugin | Chỉ kỹ năng, chỉ MCP hoặc kết hợp |
| Xác thực MCP | Bắt buộc cho plugin chỉ MCP và kết hợp |
| Khu vực dự kiến | Trung Quốc đại lục, quốc tế hoặc cả hai |
| Điểm nổi bật và lệnh kiểm thử đề xuất | Ít nhất ba lệnh kiểm thử |
| Quan tâm đồng tiếp thị và tài liệu | Tài liệu là tùy chọn và chỉ cần nếu bạn muốn thảo luận đồng tiếp thị |
| Tình trạng ủy quyền và tuân thủ | Tiết lộ các mục cần thảo luận thêm |
| Email liên hệ | Dùng để cập nhật đánh giá và yêu cầu thông tin bổ sung |
| Công ty hoặc nhóm, website liên quan và ghi chú | Tùy chọn |

<Callout type="warning">
Không bao gồm mật khẩu, token, khóa API, khóa riêng hoặc bí mật khác trong biểu mẫu hoặc tệp ZIP plugin. Nếu người dùng cần khóa riêng, chỉ giải thích cách họ có được và cấu hình nó.
</Callout>

## Tiếp theo sẽ ra sao

Nhóm Kimi sẽ đánh giá đơn ứng tuyển và tệp ZIP plugin. Nếu plugin vượt qua đánh giá, hoặc nếu cần thêm thông tin hoặc thay đổi, chúng tôi sẽ liên hệ qua email được cung cấp và chia sẻ các bước tiếp theo.

## Câu hỏi thường gặp

### Tôi có thể gửi plugin không có máy chủ MCP không?

Có. Plugin chỉ kỹ năng được hỗ trợ. Chọn **Chỉ kỹ năng** làm loại plugin.

### Tôi có thể gửi plugin Codex, Claude hoặc nền tảng khác không?

Có. Trong Bước 1, cung cấp tệp plugin hiện có hoặc URL dự án cho Plugin Builder và làm theo hướng dẫn để chuyển đổi. Cài đặt và kiểm thử plugin đã chuyển đổi trong Kimi Work trước khi gửi tệp ZIP được tạo.

### Các phương thức xác thực MCP nào được hỗ trợ?

Hiện hỗ trợ ba phương thức sau:

- **Không xác thực**: Người dùng có thể sử dụng plugin ngay sau khi cài đặt mà không cần đăng nhập hoặc hoàn tất xác minh danh tính khác.
- **OAuth**: Người dùng tự động chuyển hướng đến trang ủy quyền của sản phẩm bên thứ ba khi cài đặt plugin lần đầu. Họ có thể sử dụng plugin sau khi ủy quyền.
- **Xác thực CLI**: Cài đặt không bắt đầu luồng ủy quyền. Lần đầu người dùng gọi plugin trong hội thoại, họ hoàn tất ủy quyền bằng hướng dẫn hiển thị trong hội thoại. Sau khi ủy quyền thành công, họ thường không cần ủy quyền lại trong các hội thoại khác.

Kiểm thử luồng phù hợp với phương thức xác thực thực tế của plugin. Nếu plugin OAuth không chuyển hướng trong lần cài đặt đầu tiên, hoặc plugin xác thực CLI liên tục yêu cầu người dùng ủy quyền, hãy kiểm tra cấu hình xác thực của Máy chủ MCP trước khi nộp đơn và mô tả vấn đề trong **Ghi chú bổ sung**.

### Luồng ủy quyền OAuth trông như thế nào?

Đối với Máy chủ MCP hỗ trợ OAuth, Plugin Builder xác định thông tin ủy quyền liên quan từ URL Máy chủ MCP. Sau khi tạo plugin, người dùng sẽ được chuyển đến trang ủy quyền của sản phẩm bên thứ ba khi cài đặt lần đầu.

### Nếu tôi muốn khám phá quan hệ đối tác rộng hơn với Kimi thì sao?

Trước tiên hoàn tất quy trình tạo, kiểm thử và gửi plugin trong hướng dẫn này. Nếu bạn muốn khám phá các hình thức hợp tác khác ngoài liệt kê plugin, hãy mô tả ngắn gọn đề xuất trong **Ghi chú bổ sung**. Nhóm Kimi có thể liên hệ dựa trên tình hình.

### Nộp đơn có đảm bảo được liệt kê không?

Không. Nhóm Kimi đánh giá chức năng, trải nghiệm người dùng, bảo mật, độ tin cậy dịch vụ và tình trạng ủy quyền liên quan của plugin.
