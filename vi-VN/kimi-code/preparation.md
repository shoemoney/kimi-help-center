---
title: "Chuẩn bị trước khi bắt đầu"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "Những kiến thức cơ bản cần nắm trước khi dùng Kimi Code: terminal, PowerShell, CLI và các lưu ý về bảo mật."
---

<SeoMeta
  title="Chuẩn bị trước khi dùng Kimi Code - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu các kiến thức cơ bản về terminal, PowerShell và CLI, cũng như cách dùng Kimi Code CLI an toàn trong quá trình phát triển."
/>

# Chuẩn bị trước khi bắt đầu

Trước khi dùng Kimi Code, bạn cần nắm một vài khái niệm cơ bản. Những kiến thức này sẽ giúp bạn cài đặt và sử dụng Kimi Code thuận lợi hơn.

## Terminal là gì?

**Terminal** là một cửa sổ cho phép bạn thao tác với máy tính bằng cách nhập lệnh dạng văn bản.

Bạn có thể hình dung terminal như một “trình quản lý tệp bằng văn bản”: thay vì nhấp chuột vào các biểu tượng, bạn nhập các lệnh như `ls`, `cd` và `mkdir` để xem nội dung thư mục, chuyển thư mục, tạo tệp, v.v.

<Frames
  src="./images/preparation/preparation-01.png"
  alt="Minh họa terminal"
/>

### Cách mở terminal

| Hệ điều hành | Cách mở |
|---------|---------|
| **macOS** | Nhấn `Cmd + Space`, nhập "Terminal" hoặc "终端", rồi nhấn Enter |
| **Windows** | Nhấn `Win + R`, nhập `powershell` hoặc `wt`;<br>hoặc tìm "PowerShell"/"Terminal" trong menu Start |
| **Linux** | Nhấn `Ctrl + Alt + T`, hoặc tìm "Terminal" trong menu ứng dụng |

### Cách kiểm tra hệ điều hành của bạn

- **macOS**: Nhấp vào biểu tượng Apple ở góc trên bên trái màn hình → "Giới thiệu về máy Mac này"
- **Windows**: Nhấn `Win + Pause/Break`, hoặc nhấp chuột phải vào "This PC" → "Properties"
- **Linux**: Chạy `uname -a` hoặc `cat /etc/os-release` trong terminal

## PowerShell là gì?

<Frames
  src="./images/preparation/preparation-02.png"
  alt="Minh họa PowerShell"
/>

**PowerShell** là một công cụ terminal thường dùng trên Windows. Công cụ này mạnh hơn Command Prompt (CMD) tiêu chuẩn. Trên Windows, Kimi Code CLI phải được cài đặt và sử dụng trong PowerShell.

Windows có hai công cụ “dòng lệnh” khác nhau. Đừng nhầm lẫn giữa chúng:

| Công cụ | Mô tả | Phù hợp? |
|-----|------|---------|
| **CMD (Command Prompt)** | Công cụ dòng lệnh cơ bản nhất trong Windows | ❌ Không khuyến nghị |
| **PowerShell** | Công cụ dòng lệnh hiện đại, mạnh mẽ hơn | ✅ Khuyến nghị |

> **Mẹo**: Lệnh cài đặt Kimi Code CLI phải được chạy trong PowerShell. Lệnh có thể không chạy đúng trong CMD.

## Thư mục làm việc

Khi Kimi Code CLI khởi động, công cụ sẽ dùng thư mục hiện tại của bạn làm **thư mục làm việc**. Công cụ chỉ có thể đọc và chỉnh sửa các tệp nằm trong thư mục làm việc đó.

**Trước khi bắt đầu, hãy kiểm tra đường dẫn hiện tại trong terminal**:

- Dấu nhắc terminal thường hiển thị thư mục hiện tại, chẳng hạn `~/projects/my-app$`
- Nhập `pwd` (macOS/Linux) hoặc `cd` (Windows) để xem đường dẫn đầy đủ
- Dùng `cd <folder-name>` để vào thư mục dự án mục tiêu, rồi chạy `kimi`

> **Ví dụ**: Giả sử dự án của bạn nằm ở `~/Documents/my-project`. Hãy khởi động như sau:
> 1. Mở terminal
> 2. Nhập `cd ~/Documents/my-project`
> 3. Nhập `kimi` để bắt đầu

## Cách chạy lệnh

<Frames
  src="./images/preparation/preparation-03.png"
  alt="Minh họa thực thi lệnh"
/>

Chạy lệnh trong terminal hoặc PowerShell rất đơn giản:

1. **Sao chép lệnh**: Sao chép nội dung lệnh từ tài liệu
   - macOS/Linux: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows: `irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **Dán vào terminal**: Nhấp chuột phải trong cửa sổ terminal, hoặc nhấn `Cmd/Ctrl + V` để dán
3. **Nhấn Enter**: Nhấn phím `Enter` để chạy lệnh
4. **Chờ lệnh hoàn tất**: Terminal sẽ hiển thị quá trình thực thi và kết quả

> **Lưu ý**: Trong terminal, `Ctrl+C` thường dùng để **ngắt lệnh hiện tại**; tổ hợp này không sao chép văn bản. Để sao chép, hãy dùng `Cmd/Ctrl + Shift + C`; để dán, dùng `Cmd/Ctrl + Shift + V`; hoặc dùng menu chuột phải.

> **Mẹo**: Nếu bạn được yêu cầu nhập mật khẩu trong lúc lệnh đang chạy, terminal sẽ không hiển thị bất kỳ ký tự nào. Đây là cơ chế bảo mật bình thường. Bạn chỉ cần nhập mật khẩu rồi nhấn Enter.

## CLI là gì?

<Frames
  src="./images/preparation/preparation-04.png"
  alt="Minh họa terminal"
/>

**CLI** là viết tắt của **C**ommand-**L**ine **I**nterface. Thuật ngữ này chỉ cách sử dụng công cụ bằng cách nhập lệnh văn bản, thay vì nhấp vào các nút trong giao diện đồ họa.

Kimi Code CLI là một công cụ dòng lệnh: bạn nhập `kimi` trong terminal để khởi động, rồi tương tác với AI bằng lệnh văn bản để AI có thể giúp bạn đọc code, chỉnh sửa tệp, chạy lệnh, v.v.

## Môi trường mạng

Để dùng Kimi Code, bạn cần truy cập được máy chủ của Kimi. Nếu môi trường mạng của bạn có bất kỳ hạn chế nào dưới đây, bạn có thể cần điều chỉnh cài đặt:

- **Mạng công ty/trường học**: Một số môi trường mạng nội bộ có thể hạn chế truy cập API bên ngoài. Nếu có proxy, bạn có thể đặt địa chỉ proxy trong cấu hình.
- **VPN/proxy**: Nếu dùng proxy toàn cục, hãy đảm bảo proxy không chặn hoặc can thiệp vào các yêu cầu tới `api.kimi.com` hoặc `api.moonshot.cn`.
- **Tường lửa**: Kiểm tra xem tường lửa của hệ thống hoặc router có đang chặn truy cập mạng từ chương trình terminal hay không.

## Lưu ý về bảo mật

Kimi Code CLI là một tác nhân AI mạnh mẽ. Công cụ này có thể:

- **Đọc** nội dung tệp trên máy tính của bạn
- **Chỉnh sửa** code và các tệp cấu hình của bạn
- **Chạy** lệnh Shell, chẳng hạn cài đặt dependency hoặc chạy test

**Khi sử dụng, hãy ghi nhớ những điều sau**:

- **Không khởi động trong thư mục nhạy cảm**: Tránh chạy Kimi Code CLI trong các thư mục chứa mật khẩu, khóa hoặc tệp cá nhân riêng tư.
- **Xem kỹ các thao tác**: Kimi Code sẽ yêu cầu bạn xác nhận trước khi chỉnh sửa tệp hoặc chạy lệnh. Đừng bấm “Đồng ý” theo thói quen.
- **Hiểu rõ trước khi tiếp tục**: Nếu bạn chưa chắc một thao tác sẽ gây ảnh hưởng gì, hãy yêu cầu Kimi Code giải thích chính xác công cụ sẽ làm gì trước khi quyết định có tiếp tục hay không.
- **Sao lưu code quan trọng**: Trước khi dùng Kimi Code cho một dự án quan trọng, bạn nên commit code vào hệ thống quản lý phiên bản, chẳng hạn Git, để có thể quay lại bất cứ lúc nào.

> **Khuyến nghị**: Khi dùng lần đầu, hãy thử Kimi Code CLI trong một dự án thử nghiệm hoặc một bản sao của dự án. Sau khi đã quen với cách hoạt động của công cụ, bạn có thể dùng trong các dự án production của mình.
