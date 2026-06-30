---
title: "Tích hợp IDE"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "Tích hợp Kimi Code CLI vào IDE của bạn thông qua ACP."
---

<SeoMeta
  title="Tích hợp IDE - Trung tâm trợ giúp Kimi"
  description="Tích hợp Kimi Code CLI vào IDE của bạn thông qua Agent Client Protocol (ACP). Hướng dẫn thiết lập cho Zed, các IDE JetBrains và Paseo, kèm theo phần khắc phục sự cố."
/>

# Sử dụng Kimi Code CLI trong các IDE

<Callout type="info">
Kimi Code CLI hỗ trợ tích hợp vào các IDE thông qua [Agent Client Protocol (ACP)](https://agentclientprotocol.com/), cho phép bạn sử dụng tính năng lập trình có AI hỗ trợ ngay trong trình soạn thảo của mình.
</Callout>

## Điều kiện tiên quyết

Trước khi cấu hình IDE, hãy đảm bảo Kimi Code CLI đã được cài đặt và bạn đã hoàn tất thiết lập đăng nhập.

Bộ điều hợp ACP được cung cấp dưới dạng lệnh con `kimi acp`. IDE khởi chạy nó như một tiến trình con và giao tiếp qua stdin/stdout bằng JSON-RPC. Mỗi khi IDE tạo một phiên làm việc, CLI sẽ tái sử dụng trạng thái xác thực hiện có — không cần đăng nhập lại.

<Callout type="tip">
Các tiến trình con được khởi chạy từ giao diện đồ họa của IDE trên macOS thường **không** kế thừa biến `PATH` của shell terminal. Nếu `kimi` không nằm trong một thư mục hệ thống như `/usr/local/bin`, hãy dùng đường dẫn tuyệt đối trong cấu hình IDE. Chạy `which kimi` trong terminal để tìm đường dẫn đang hoạt động.
</Callout>

## Sử dụng Kimi Code CLI trong Zed

[Zed](https://zed.dev/) là một trình soạn thảo hiện đại có hỗ trợ ACP gốc.

Thêm nội dung sau vào tệp cấu hình của Zed tại `~/.config/zed/settings.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Các trường cấu hình:

- `type`: giá trị cố định `"custom"`
- `command`: đường dẫn đến tệp thực thi Kimi Code CLI. Nếu `kimi` không nằm trong `PATH`, hãy dùng đường dẫn đầy đủ (ví dụ `/Users/you/.local/bin/kimi`).
- `args`: các tham số khởi động. Lệnh con `acp` chuyển CLI sang chế độ ACP.
- `env`: các biến môi trường bổ sung; thường thì để trống. Zed tự động thêm vào một môi trường mặc định.

Sau khi lưu, hãy mở một cuộc trò chuyện mới trong bảng Agent của Zed và nó sẽ khởi chạy một tiến trình con ACP `Kimi Code CLI` bằng cấu hình ở trên. Các máy chủ MCP được khai báo trong phần `agent_servers` của Zed cũng được chuyển tiếp sang phía kimi qua giao thức ACP.

## Sử dụng Kimi Code CLI trong các IDE JetBrains

Các IDE JetBrains (IntelliJ IDEA, PyCharm, WebStorm, v.v.) hỗ trợ ACP thông qua plugin AI chat.

Nếu bạn không có gói đăng ký JetBrains AI, bạn có thể bật `llm.enable.mock.response` trong Registry để truy cập bảng AI chat trong các tình huống chỉ dùng ACP. Nhấn Shift hai lần và tìm kiếm "Registry" để mở nó.

Trong menu của bảng AI chat, nhấp vào **Configure ACP agents** và thêm cấu hình sau:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains rất nghiêm ngặt với trường `command` — luôn dùng **đường dẫn tuyệt đối**, mà bạn có thể lấy được bằng cách chạy `which kimi` trong terminal. Sau khi lưu, `Kimi Code CLI` sẽ xuất hiện trong bộ chọn agent của AI chat.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Sử dụng Kimi Code CLI trong Paseo

[Paseo](https://paseo.sh/) là một trình điều phối tự lưu trữ giúp chạy và giám sát các CLI agent từ máy tính, web và thiết bị di động của bạn. Nó kết nối với Kimi Code CLI qua ACP, theo cách giống như một IDE.

Chọn **Kimi Code CLI** từ danh mục nhà cung cấp ACP tích hợp sẵn của Paseo, hoặc thêm một nhà cung cấp tùy chỉnh trong `~/.paseo/config.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Bộ điều hợp ACP chung của Paseo không điều khiển luồng đăng nhập, vì vậy hãy hoàn tất việc đăng nhập trong terminal trước (xem [Điều kiện tiên quyết](#điều-kiện-tiên-quyết)) — nếu không, việc tạo phiên sẽ thất bại với lỗi `Authentication required`.

## Khắc phục sự cố

- **Phiên bị ngắt kết nối ngay lập tức / IDE hiển thị "agent exited"**: thường là do đường dẫn `command` sai hoặc chưa đăng nhập. Hãy chạy `kimi acp` trong terminal trước để kiểm tra — nếu nó đứng chờ stdin, thì bản thân CLI vẫn ổn và vấn đề nằm ở cấu hình IDE; nếu nó thoát ngay lập tức kèm lỗi, hãy làm theo thông báo lỗi (phổ biến nhất là bạn cần chạy `/login`).
- **IDE hiển thị "auth required"**: CLI không có token xác thực khả dụng. Hãy thoát IDE, chạy `kimi` trong terminal để hoàn tất đăng nhập, rồi khởi động lại IDE.
- **Không thấy các công cụ MCP**: kiểm tra bảng khả năng của `kimi acp` để xác nhận rằng loại truyền tải MCP được cấu hình trong IDE của bạn có được hỗ trợ hay không. Bộ điều hợp ACP của Kimi Code CLI hiện hỗ trợ các phương thức truyền tải `http` và `stdio`; các loại `sse` và `acp` sẽ bị âm thầm loại bỏ và một cảnh báo sẽ được ghi vào log.
