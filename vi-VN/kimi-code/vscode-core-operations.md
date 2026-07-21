---
title: "Thao tác cốt lõi trong VS Code"
slug: "vscode-core-operations"
order: 12
extract_headings: false
preview: true
preview_content: "Bảng chat, tham chiếu tệp, rà soát diff, Chế độ Plan và quản lý ngữ cảnh trong tiện ích mở rộng Kimi Code cho VS Code."
---

<SeoMeta
title="Thao tác cốt lõi của Kimi Code cho VS Code - Trung tâm trợ giúp Kimi"
description="Nắm vững các tính năng cốt lõi của tiện ích mở rộng Kimi Code cho VS Code: tham chiếu tệp bằng @, lệnh gạch chéo, rà soát diff cho thay đổi mã, Chế độ Plan, hàng đợi tin nhắn và quản lý ngữ cảnh."
/>

# Thao tác cốt lõi trong VS Code

<Callout type="warning">
**Đang điều chỉnh tiện ích mở rộng VS Code**

Kimi Code cho VS Code hiện chỉ cho phép người dùng CLI Python cũ cài đặt mới. Người dùng hiện có đã cài tiện ích mở rộng vẫn có thể tiếp tục sử dụng sau khi nâng cấp lên CLI mới. Hiện chưa hỗ trợ cài đặt cho những người dùng khác của CLI phiên bản TS.
</Callout>

## Mở bảng điều khiển

<Frames
  src="./images/vscode-getting-started/kimi-code-command-palette.png"
  alt="Bảng lệnh Kimi Code"
/>

Nhấp vào biểu tượng Kimi trên Thanh Hoạt động, hoặc chạy lệnh "Kimi Code" từ Bảng lệnh.

## Nhập liệu và điều khiển

### Tham chiếu tệp

Nhập `@`, rồi chọn tên tệp hoặc thư mục. Ví dụ: dùng `@src/handlers/` để tham chiếu một thư mục, `@app.ts` để tham chiếu một tệp, hoặc `@src/app.ts:10-20` để tham chiếu một khoảng dòng cụ thể.

Nhấn `Alt+K` để nhanh chóng chèn tệp hiện tại hoặc đoạn mã đang chọn làm tham chiếu.

### Lệnh gạch chéo

Nhập `/` để mở menu lệnh. Dùng `/init` để quét dự án và tạo tài liệu, hoặc `/compact` để nén ngữ cảnh quá dài.

### Lịch sử nhập liệu

Nhấn `↑` / `↓` trong ô nhập để nhanh chóng duyệt các tin nhắn bạn đã gửi gần đây, giúp việc lặp lại hoặc chỉnh sửa câu hỏi dễ dàng hơn.

### Nhập tệp phương tiện

Bạn có thể dán, kéo thả hoặc chọn tệp phương tiện. Các định dạng được hỗ trợ gồm định dạng ảnh như PNG, JPEG, GIF, WebP và HEIC, cũng như định dạng video như MP4, WebM và MOV.

- **Dán / kéo thả**: Một ảnh đơn lẻ có thể có kích thước gốc tối đa 5MB. Hệ thống sẽ tự động nén ảnh, bao gồm chuyển HEIC sang JPEG, đổi kích thước ảnh quá lớn và giảm chất lượng xuống khoảng 2MB.
- **Trình chọn tệp**: Khi chọn tệp bằng nút "+" trong ô nhập hoặc menu `@`, ảnh có thể có dung lượng tối đa 10MB và video tối đa 20MB.
- **Giới hạn chung**: Mỗi tin nhắn có thể đính kèm tối đa 9 tệp, tổng dung lượng tối đa 80MB. Khi có tệp phương tiện được đính kèm, các mô hình không hỗ trợ đầu vào đa phương thức sẽ tự động bị lọc bỏ.

### Hàng đợi tin nhắn

Trong khi Kimi đang phản hồi, bạn vẫn có thể tiếp tục nhập và gửi tin nhắn trong ô nhập. Các tin nhắn này sẽ không bị mất; thay vào đó, chúng được thêm vào **hàng đợi tin nhắn**. Thanh công cụ phía dưới hiển thị số lượng trong hàng đợi, và bạn có thể nhấp vào đó để mở rộng bảng hàng đợi:

- Xem danh sách tin nhắn đang chờ gửi
- Chỉnh sửa hoặc xóa tin nhắn trong hàng đợi
- Sắp xếp lại thứ tự tin nhắn
- Trong khi Kimi đang phản hồi, nhấp vào biểu tượng ⚡ trên một mục trong hàng đợi để chèn ngay tin nhắn đó dưới dạng **điều hướng**, giúp Kimi điều chỉnh hướng của phản hồi hiện tại

### Mô hình và Thinking mode

Chuyển đổi mô hình từ menu thả xuống trên thanh nhập liệu.

Một số mô hình hỗ trợ khả năng suy luận mở rộng. Công tắc Thinking mode có ba trạng thái: bị ẩn khi mô hình không hỗ trợ Thinking mode, được người dùng bật/tắt thủ công, hoặc luôn bật đối với các mô hình như k2-thinking.

Sau khi được bật, các bước suy nghĩ mặc định sẽ được thu gọn trong phản hồi. Bạn có thể mở rộng để xem quá trình suy luận. Bật `kimi.alwaysExpandThinking` trong phần cài đặt để mặc định mở rộng quá trình suy nghĩ.

## Chế độ làm việc

### Xác nhận thao tác và thực thi công cụ

Khi Kimi đề xuất chạy một công cụ hoặc ghi vào tệp, hộp thoại xác nhận sẽ xuất hiện với ba tùy chọn:

- **Có**: Chỉ phê duyệt thao tác hiện tại
- **Có, cho phiên này**: Phê duyệt các thao tác tương tự trong phiên hiện tại cho đến khi bắt đầu phiên mới
- **Không**: Từ chối thực thi thao tác

Bật `kimi.yoloMode` trong phần cài đặt để tự động phê duyệt mọi lệnh gọi công cụ. Tùy chọn này phù hợp khi bạn tin tưởng quy trình làm việc và muốn nâng cao hiệu suất.

### Hộp thoại câu hỏi

Trong quá trình thực thi, Kimi có thể đặt câu hỏi cho bạn, chẳng hạn yêu cầu bạn chọn một hướng triển khai. Một thẻ câu hỏi sẽ xuất hiện ở phía dưới. Bạn có thể chọn trực tiếp một tùy chọn có sẵn, hoặc chọn "Phản hồi tùy chỉnh..." để nhập câu trả lời của riêng mình. Sau khi bạn trả lời, Kimi sẽ tiếp tục thực thi.

### Chế độ Plan

Nhấp vào biểu tượng 📋 ở bên trái ô nhập để vào Chế độ Plan. Khi được bật, trước khi thực thi chính thức, Kimi sẽ xuất một Thẻ Plan có thể mở rộng, liệt kê các bước dự định thực hiện. Bạn có thể xem lại kế hoạch trước khi cho phép tiếp tục.

- Nút Chế độ Plan giữ nguyên thiết lập trước đó cho mỗi phiên mới.
- Nếu Kimi đang stream phản hồi, việc thoát Chế độ Plan cần xác nhận lần hai để tránh làm gián đoạn tác vụ hiện tại.

### Theo dõi thay đổi tệp

Sau khi Kimi chỉnh sửa tệp, mọi thay đổi đều được theo dõi và hiển thị trong phần "Thay đổi tệp". Bạn có thể xem danh sách tệp đã sửa đổi và trạng thái của chúng, chẳng hạn như đã thêm, đã sửa đổi hoặc đã xóa, kèm thống kê số dòng được thêm và bị xóa.

Với từng tệp, bạn có thể xem thay đổi trong chế độ xem diff gốc của VS Code, khôi phục về trạng thái ban đầu, hoặc giữ lại thay đổi để xóa bản ghi theo dõi. Hỗ trợ thao tác hàng loạt, nên bạn có thể giữ hoặc hủy toàn bộ thay đổi cùng lúc. Trạng thái mốc được ghi lại vào lần đầu tiên một tệp bị sửa đổi trong phiên; thao tác hoàn nguyên sẽ khôi phục tệp về phiên bản mốc đó.

## Quản lý ngữ cảnh

### Lịch sử phiên

Nhấp vào menu thả xuống lịch sử ở đầu bảng để duyệt các phiên trước đó. Dữ liệu phiên được lưu cục bộ và hỗ trợ tìm kiếm theo từ khóa. Bạn có thể xóa phiên cũ hoặc tải một phiên để tiếp tục cuộc trò chuyện trước đó.

Thanh trạng thái hiển thị tỷ lệ phần trăm sử dụng ngữ cảnh và số lượng token đầu vào/đầu ra. Khi mức sử dụng ngữ cảnh cao, hãy dùng lệnh `/compact` để nén.

### Chuyển đổi thư mục làm việc

Nhấp vào biểu tượng bánh răng (Menu thao tác) ở bên phải ô nhập → **Thư mục làm việc** để chuyển thư mục làm việc giữa các thư mục con khác nhau trong Workspace hiện tại. Sau khi chuyển, một phiên mới sẽ tự động bắt đầu để Kimi có thể làm việc dựa trên ngữ cảnh thư mục mới. Bạn có thể chọn trực tiếp một thư mục con đã đăng ký, hoặc dùng "Duyệt..." để duyệt thư mục con bất kỳ.

## Menu thao tác

### Danh sách tính năng

Biểu tượng bánh răng ở bên phải ô nhập mở menu thao tác, bao gồm các tính năng sau:

- **Thư mục làm việc**: Chuyển thư mục làm việc hiện tại (xem phần "Chuyển đổi thư mục làm việc" ở trên)
- **Máy chủ MCP**: Mở bảng cấu hình máy chủ MCP
- **Cấu hình chung**: Mở trang cấu hình Kimi trong phần cài đặt VS Code
- **Hiển thị nhật ký**: Mở bảng nhật ký đầu ra của Kimi Code để khắc phục sự cố
- **Đặt lại Kimi**: Đặt lại Kimi Webview, hữu ích khi giao diện bị treo hoặc không phản hồi
- **Đăng xuất / Đăng nhập**: Đăng xuất khỏi hoặc đăng nhập lại vào tài khoản Kimi của bạn

Bạn cũng có thể chạy "Kimi Code: Run CLI" từ Bảng lệnh VS Code để khởi động trực tiếp Kimi Code CLI trong terminal tích hợp.
