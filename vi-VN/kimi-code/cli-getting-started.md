---
title: "Bắt đầu sử dụng"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Hướng dẫn cài đặt, đăng nhập và làm quen với Kimi Code CLI."
---

<SeoMeta
  title="Cài đặt & Bắt đầu nhanh với Kimi Code CLI - Trung tâm trợ giúp Kimi"
  description="Bắt đầu với Kimi Code CLI: lệnh cài đặt, sử dụng qua terminal và trình duyệt, đăng nhập lần đầu và tạo AGENTS.md với /init."
/>

# Bắt đầu với Kimi Code CLI

Kimi Code CLI là một AI agent chạy trong terminal, giúp bạn thực hiện các tác vụ phát triển phần mềm và những thao tác terminal hằng ngày — đọc và chỉnh sửa mã, chạy lệnh shell, tìm kiếm tệp, tải trang web, đồng thời tự động lập kế hoạch và điều chỉnh các bước tiếp theo dựa trên phản hồi trong quá trình làm việc.

Nó phù hợp với các tình huống như:

- **Viết và chỉnh sửa mã**: triển khai tính năng mới, sửa lỗi, hoàn thiện việc tái cấu trúc
- **Hiểu một dự án**: khám phá codebase chưa quen thuộc và trả lời các câu hỏi về kiến trúc cùng cách triển khai
- **Tự động hóa tác vụ**: xử lý tệp hàng loạt, chạy build và test, ghép nối nhiều script với nhau

CLI được viết bằng TypeScript, phân phối qua npm và chạy trên Node.js.

## Trước khi bắt đầu

- **Hệ điều hành**: macOS, Linux hoặc Windows (qua PowerShell)
- **Tài khoản Kimi**: một gói thành viên Kimi đang hoạt động, hoặc một API key có thể gọi được

<Callout type="tip">
Kimi Code CLI là một ứng dụng TUI hoàn toàn tương tác. Để có trải nghiệm hình ảnh tốt nhất, hãy chạy nó trong terminal hỗ trợ true-color và ligature, chẳng hạn như [Kitty](https://sw.kovidgoyal.net/kitty/) hoặc [Ghostty](https://ghostty.org/).
</Callout>

## Cài đặt

Có hai lựa chọn cài đặt: script cài đặt chính thức (khuyến nghị, không cần cài sẵn Node.js) và cài đặt npm toàn cục.

### Script cài đặt (khuyến nghị)

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Cài đặt Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows (PowerShell):

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

Script sẽ tự động tải bản phát hành mới nhất, xác minh checksum và đặt tệp thực thi `kimi` vào `PATH` của bạn.

<Callout type="tip">
Trên Windows, hãy cài [Git for Windows](https://gitforwindows.org/) trước lần chạy đầu tiên. Kimi Code CLI sử dụng Git Bash đi kèm làm môi trường shell; nếu Git Bash được cài ở vị trí tùy chỉnh, hãy đặt `KIMI_SHELL_PATH` thành đường dẫn tuyệt đối đến `bash.exe`.
</Callout>

### Cài đặt qua npm

Nếu bạn đã cài Node.js 22.19.0 trở lên, bạn có thể cài đặt trực tiếp qua npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

Hoặc với pnpm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### Xác minh cài đặt

Sau khi cài đặt, hãy xác minh rằng tệp thực thi đã sẵn sàng:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
Nếu không tìm thấy lệnh `kimi`, hãy thử mở lại terminal hoặc chạy `source ~/.bashrc` (hoặc `~/.zshrc`).
</Callout>

> Do macOS Gatekeeper, lần chạy `kimi` đầu tiên có thể mất nhiều thời gian hơn đáng kể. Bạn có thể tăng tốc các lần khởi động sau bằng cách thêm ứng dụng terminal của mình vào **System Settings → Privacy & Security → Developer Tools**.

## Nâng cấp và gỡ cài đặt

**Nâng cấp**: chạy `kimi upgrade` — CLI sẽ kiểm tra phiên bản mới nhất và hiển thị các tùy chọn cập nhật. Chọn `Install update now` để nâng cấp dựa trên nguồn cài đặt hiện tại. Bạn cũng có thể nâng cấp trực tiếp qua trình quản lý gói:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**Gỡ cài đặt**: nếu bạn cài qua script, hãy xóa tệp thực thi `kimi`. Nếu bạn cài qua npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## Lần chạy đầu tiên

### Terminal tương tác

Chuyển vào thư mục dự án của bạn và chạy `kimi` để khởi động giao diện tương tác:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### Một câu lệnh duy nhất

Để chạy một câu lệnh duy nhất mà không vào giao diện tương tác, hãy dùng `-p`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### Tiếp tục phiên làm việc

Để tiếp tục phiên trước đó, hãy thêm `-C`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### Đăng nhập lần đầu

Khi chạy lần đầu, bạn cần cấu hình một nguồn API. Trong giao diện tương tác, nhập `/login` để bắt đầu quy trình đăng nhập:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login` mở bộ chọn nền tảng với hai tùy chọn:

- **Kimi Code (OAuth)** — luồng device-code; mở liên kết trên bất kỳ thiết bị nào, đăng nhập và nhập mã để ủy quyền
- **Kimi Platform API key** — nhập API key từ `platform.kimi.com` hoặc `platform.kimi.ai`

Để đăng xuất, nhập `/logout` để xóa thông tin đăng nhập hiện tại.

<Callout type="tip">
Nếu bạn muốn kết nối Anthropic, OpenAI, Google hoặc các nhà cung cấp khác, hãy chỉnh sửa trực tiếp `~/.kimi-code/config.toml` để cấu hình API key. Để xem đầy đủ tham chiếu về tất cả tùy chọn cấu hình, hãy tham khảo tài liệu về biến môi trường và ghi đè cấu hình.
</Callout>

## Tạo AGENTS.md

Chạy lệnh `/init` trong thư mục dự án của bạn. Kimi Code CLI sẽ tự động quét cấu trúc dự án và tạo tệp `AGENTS.md`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` được dùng để cung cấp cho AI thông tin nền về dự án, các bước build, quy ước mã và những ngữ cảnh khác, giúp AI hiểu dự án của bạn chính xác hơn.

## Cuộc trò chuyện đầu tiên

Sau khi đăng nhập, hãy mô tả một tác vụ bằng ngôn ngữ tự nhiên. Một điểm khởi đầu tốt là để Kimi Code CLI làm quen với dự án:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Take a look at this project's directory structure and briefly describe what each directory is for.",
    },
  ]}
/>

Kimi Code CLI tự động gọi các công cụ đọc tệp, tìm kiếm và các công cụ khác để duyệt nội dung liên quan trước khi phản hồi. Theo mặc định, các thao tác chỉ đọc được thực hiện tự động mà không cần xác nhận. Với những thao tác chỉnh sửa tệp hoặc chạy lệnh shell, nó sẽ hỏi bạn xác nhận trước khi tiến hành.

Bạn cũng có thể mô tả trực tiếp một tác vụ cụ thể hơn:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Add a function in src/utils that converts any string to kebab-case, and add a unit test for it.",
    },
  ]}
/>

Kimi Code CLI lập kế hoạch các bước, chỉnh sửa mã, chạy test và cho bạn biết nó đã làm gì ở mỗi bước.

<Callout type="tip">
Không chắc nên làm gì? Hãy gõ `/help` bất cứ lúc nào để mở bảng lệnh và phím tắt tích hợp. Dùng `↑`/`↓` để duyệt và `Esc` để đóng. Để thoát, gõ `/exit`, nhấn `Ctrl-C` hai lần, hoặc nhấn `Ctrl-D` khi ô nhập trống.
</Callout>

## Các lệnh và phím tắt thông dụng

### Lệnh phiên làm việc

| Lệnh | Mô tả |
| --- | --- |
| `/new` | Bắt đầu phiên mới, xóa ngữ cảnh hiện tại |
| `/sessions` | Duyệt lịch sử phiên và chọn một phiên để tiếp tục |
| `/model` | Chuyển đổi mô hình hiện tại |
| `/compact` | Nén ngữ cảnh thủ công để giải phóng token |
| `/fork` | Tạo nhánh từ phiên hiện tại, giữ lại lịch sử nhưng tiếp tục độc lập |

### Các phím tắt dùng nhiều nhất

| Phím tắt | Mô tả |
| --- | --- |
| `Esc` | Ngắt luồng đầu ra / đóng cửa sổ bật lên |
| `Ctrl-C` | Ngắt đầu ra; nhấn hai lần khi rảnh để thoát |
| `Shift-Tab` | Bật/tắt chế độ Plan |
| `Ctrl-S` | Chèn một tin nhắn giữa luồng mà không cần chờ phản hồi hiện tại hoàn tất |
| `Ctrl-O` | Thu gọn / mở rộng đầu ra của công cụ |

Để xem danh sách đầy đủ, hãy gõ `/help` hoặc truy cập [Tương tác & nhập liệu](/kimi-code/cli-interaction).

## Dữ liệu được lưu ở đâu

Kimi Code CLI lưu dữ liệu cục bộ theo mặc định trong `~/.kimi-code/` — tệp cấu hình, bản ghi phiên, nhật ký và bộ nhớ đệm cập nhật. Để chuyển sang nơi khác, hãy trỏ đến đường dẫn mới qua biến môi trường `KIMI_CODE_HOME`. Để xem bố cục thư mục đầy đủ, hãy tham khảo tài liệu về biến môi trường.

## Câu hỏi thường gặp

**Tôi đã nhập API Key, nhưng nó báo xác thực thất bại.**

Trước tiên, hãy xác nhận rằng Key và Base URL của bạn thuộc cùng một nền tảng. `api.kimi.com` và `api.moonshot.cn` là hai hệ thống tài khoản hoàn toàn độc lập, và API Key của chúng không thể dùng thay cho nhau:

| Nền tảng | Base URL | Thanh toán | Tạo Key |
|------|---------|---------|-------------|
| **Kimi Code** | Tương thích OpenAI: `https://api.kimi.com/coding/v1`<br> Tương thích Anthropic: `https://api.kimi.com/coding/` | Gói thành viên Kimi (đã bao gồm tín dụng) | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Trả theo lượng dùng | [Kimi Open Platform](https://platform.kimi.com) |

**Sau khi cài đặt, không tìm thấy lệnh `kimi`.**

Script cài đặt thêm `kimi` vào PATH của bạn, nhưng bạn cần khởi động lại terminal hoặc chạy `source ~/.bashrc` (hoặc `source ~/.zshrc`) để nó có hiệu lực. Nếu vẫn không tìm thấy, hãy kiểm tra xem `~/.local/bin` có nằm trong PATH của bạn không.

**Trình duyệt không hiện lên sau khi chạy `/login`.**

Trong môi trường máy chủ từ xa hoặc không có giao diện đồ họa, `/login` sẽ hiển thị một URL. Hãy sao chép thủ công vào trình duyệt của bạn để hoàn tất việc ủy quyền.

Nếu bạn có bất kỳ vấn đề hay góp ý nào, hãy phản hồi tại [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).

## Các bước tiếp theo

- [Tương tác & nhập liệu](/kimi-code/cli-interaction) — giải thích các thao tác ô nhập, luồng phê duyệt, chế độ Plan và chế độ YOLO
- [Phiên làm việc & ngữ cảnh](/kimi-code/cli-sessions) — tiếp tục phiên, nén ngữ cảnh, xuất phiên làm việc
- [Các trường hợp sử dụng phổ biến](/kimi-code/cli-use-cases) — ví dụ prompt cho các tác vụ điển hình
