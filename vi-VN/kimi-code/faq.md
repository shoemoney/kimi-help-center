---
title: "Câu hỏi thường gặp về Kimi Code"
slug: "faq"
order: 4
extract_headings: false
preview: true
preview_content: "Các câu hỏi thường gặp về Kimi Code."
---

<SeoMeta
  title="Câu hỏi thường gặp về Kimi Code - Trung tâm trợ giúp Kimi"
  description="Các câu hỏi thường gặp về cài đặt, xác thực, di chuyển, tương tác và nhiều nội dung khác của Kimi Code CLI."
/>

# Câu hỏi thường gặp

## Di chuyển từ phiên bản cũ

<Callout type="info">
Kimi Code CLI đã trải qua một bản nâng cấp phiên bản lớn — chuyển từ Python/uv sang Node.js, mang đến trải nghiệm cài đặt đơn giản hơn, khởi động nhanh hơn và giao diện terminal được thiết kế lại. Phiên bản cũ sẽ dần ngừng hoạt động, vì vậy chúng tôi khuyên bạn nên nâng cấp càng sớm càng tốt.
</Callout>

Nếu bạn đang di chuyển từ phiên bản cũ, hãy làm theo các bước dưới đây — chỉ một lệnh duy nhất sẽ di chuyển cấu hình, máy chủ MCP và lịch sử phiên của bạn sang phiên bản mới.

### Có gì mới

- **Không còn Python / uv**: Được xây dựng lại trên Node.js — không cần môi trường Python, cài đặt đơn giản hơn
- **Tệp nhị phân gốc, dùng được ngay**: Khởi động nhanh hơn, gọn nhẹ hơn
- **Giao diện terminal được thiết kế lại**: Trải nghiệm mượt mà và phản hồi nhanh hơn
- **Di chuyển dữ liệu đầy đủ**: Cấu hình, máy chủ MCP và lịch sử phiên đều được chuyển sang một cách liền mạch

### Cách di chuyển

Có hai cách để di chuyển.

**Lần đầu tiên bạn chạy `kimi`** sau khi cài đặt kimi-code, nó sẽ tự động kiểm tra xem có dữ liệu kimi-cli trong `~/.kimi/` hay không. Nếu tìm thấy, một lời nhắc di chuyển sẽ xuất hiện, và bạn có thể chọn di chuyển ngay, làm sau, hoặc không bao giờ hỏi lại.

Bạn cũng có thể **chạy thủ công bất kỳ lúc nào**:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

Bạn có thể chọn có di chuyển cả các phiên trò chuyện hay không. Nếu chưa cần lịch sử, hãy chọn **Chỉ cấu hình**; nếu không, hãy chọn **Cấu hình + N phiên** để chuyển toàn bộ trong một lần. Phần tóm tắt sẽ được in ra ở cuối.

### Điều gì xảy ra trong quá trình di chuyển

**Những thứ được di chuyển**: cấu hình (`config.toml`), cấu hình máy chủ MCP, lịch sử nhập liệu, và những phiên trò chuyện mà bạn đã chọn di chuyển.

**Những thứ không được di chuyển**: thông tin đăng nhập OAuth và ủy quyền dịch vụ MCP không được sao chép, vì vậy bạn sẽ cần chạy lại `/login` và ủy quyền lại các máy chủ MCP sau khi di chuyển. Các plugin của kimi-cli cũng nằm ngoài phạm vi.

<Callout type="tip">
Quá trình di chuyển **không bao giờ sửa đổi hay xóa** bất kỳ dữ liệu cũ nào trong `~/.kimi/`. kimi-cli vẫn hoạt động như trước, và hai bên không ảnh hưởng lẫn nhau. Bạn cũng có thể chạy di chuyển nhiều lần — những phiên đã được di chuyển sẽ không được nhập lại.
</Callout>

Sau khi di chuyển, các phiên được nhập từ kimi-cli sẽ được gắn nhãn `[imported]` trong trình chọn phiên để bạn phân biệt với các phiên mới.

## Cài đặt & xác thực

### Không có mô hình khả dụng khi chạy `/login`

Nếu bạn thấy "No models available for the selected platform" khi chạy `/login`, nguyên nhân có thể là:

- **API key không hợp lệ hoặc đã hết hạn**: Kiểm tra xem API key bạn nhập có đúng và còn hiệu lực hay không.
- **Vấn đề kết nối mạng**: Xác nhận rằng bạn có thể truy cập địa chỉ dịch vụ API (chẳng hạn `api.kimi.com` hoặc `api.moonshot.cn`).

**Lưu ý sự khác biệt giữa các nền tảng**

Quyền lợi thành viên của Kimi Code và [Kimi Open Platform](https://platform.kimi.com) có Base URL khác nhau. Vui lòng đảm bảo Base URL khớp với API Key khi cấu hình.

| Nền tảng | Base URL | Thanh toán | Tạo key |
|------|---------|---------|-------------|
| **Kimi Code** | Tương thích Anthropic: `https://api.kimi.com/coding/` | Đăng ký thành viên Kimi (bao gồm tín dụng) | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Trả theo mức dùng | [Kimi Open Platform](https://platform.kimi.com) |

### API key không hợp lệ

Các nguyên nhân khiến API key không hợp lệ:

- **Key nhập sai**: Kiểm tra xem có khoảng trắng thừa hay thiếu ký tự không.
- **Key đã hết hạn hoặc bị thu hồi**: Xác nhận trạng thái key trong bảng điều khiển nền tảng.

### Thành viên hết hạn hoặc cạn tín dụng

Nếu bạn đang dùng nền tảng Kimi Code, bạn có thể kiểm tra tín dụng hiện tại và trạng thái thành viên qua lệnh `/usage`. Nếu tín dụng đã cạn hoặc thành viên đã hết hạn, bạn cần gia hạn hoặc nâng cấp tại [Kimi Code](https://kimi.com/code).

## Đăng ký thành viên

### Làm thế nào để yêu cầu hóa đơn hoặc nâng cấp thành viên?

Truy cập [trang Thành viên Kimi](https://www.kimi.com/membership/pricing#pricing-faq) và làm theo hướng dẫn để gửi yêu cầu hóa đơn hoặc nâng cấp gói của bạn.

## Vấn đề tương tác

### Dán hình ảnh thất bại

Khi dán hình ảnh bằng `Ctrl-V`, nếu bạn thấy "Current model does not support image input", nghĩa là mô hình hiện tại không hỗ trợ nhập hình ảnh.

Giải pháp:

- **Chuyển sang mô hình hỗ trợ hình ảnh**: Dùng một mô hình có khả năng `image_in`.
- **Kiểm tra nội dung clipboard**: Đảm bảo clipboard thực sự chứa dữ liệu hình ảnh, chứ không phải đường dẫn đến tệp hình ảnh.

## Cập nhật & nâng cấp

### Lần khởi động đầu tiên trên macOS bị chậm

Gatekeeper của macOS thực hiện kiểm tra bảo mật trong lần đầu tiên một chương trình mới chạy, khiến khởi động chậm hơn. Giải pháp:

- **Chờ kiểm tra hoàn tất**: Hãy kiên nhẫn trong lần chạy đầu tiên; các lần khởi động sau sẽ trở lại tốc độ bình thường.
- **Thêm vào Developer Tools**: Thêm ứng dụng terminal của bạn tại **System Settings → Privacy & Security → Developer Tools**.

### Cách nâng cấp Kimi Code CLI

Chạy `kimi upgrade` để kiểm tra phiên bản mới nhất và hiển thị các tùy chọn cập nhật. Chọn `Install update now` để nâng cấp. Bạn cũng có thể nâng cấp trực tiếp qua trình quản lý gói:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## Câu hỏi thường gặp về tiện ích mở rộng VS Code

Dưới đây là các câu hỏi thường gặp về tiện ích mở rộng Kimi Code VS Code Extension.

### VS Code báo không có workspace nào được mở

Vui lòng mở một thư mục trong VS Code. Tiện ích mở rộng Kimi Code VS Code cần một workspace để hoạt động bình thường.

### VS Code báo không tìm thấy CLI

Vui lòng cài đặt Kimi Code CLI thủ công và cấu hình `kimi.executablePath` trong cài đặt VS Code, hoặc đảm bảo CLI tích hợp sẵn có mặt.

### Đăng nhập VS Code thất bại

Hãy thử bỏ qua đăng nhập và dùng chế độ API key thay thế, kiểm tra kết nối mạng, hoặc thử lại sau qua menu thao tác của tiện ích Kimi Code.

### VS Code gửi tin nhắn nhưng không có phản hồi

Vui lòng xác nhận rằng Kimi Code CLI khả dụng, mô hình đã được cấu hình, và đã mở một thư mục workspace trong VS Code. Kiểm tra nhật ký lỗi qua "Kimi Code: Show Logs".

### Kết nối VS Code hết thời gian chờ

Nếu không có phản hồi trong vòng 30 giây, kết nối sẽ hết thời gian chờ. Vui lòng kiểm tra mạng và thử lại.

### Lỗi VS Code trước khi gửi tin nhắn

Một số lỗi khiến không thể gửi tin nhắn trong VS Code, chẳng hạn không tìm thấy Kimi Code CLI, phiên bản quá thấp, chưa đăng nhập, hoặc phiên đang bận. Lỗi sẽ hiển thị dưới dạng thông báo nổi, và nội dung bạn nhập sẽ được giữ lại để thử lại.

## Phản hồi & liên hệ

### Tài liệu không giải quyết được vấn đề của tôi

Nếu những điều trên không giải quyết được vấn đề của bạn, hãy liên hệ với chúng tôi qua email: [code@moonshot.ai](mailto:code@moonshot.ai). Vui lòng mô tả vấn đề bạn gặp phải, các bước bạn đã thực hiện và mọi thông tin nhật ký liên quan trong email, chúng tôi sẽ phản hồi sớm nhất có thể.

Nếu bạn có bất kỳ vấn đề hay góp ý nào, bạn cũng có thể gửi phản hồi trên [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).
