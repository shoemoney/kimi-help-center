---
title: "Giới thiệu Tiện ích mở rộng trình duyệt Kimi"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Giới thiệu Tiện ích mở rộng trình duyệt Kimi - Trung tâm trợ giúp Kimi"
  description="Tiện ích mở rộng trình duyệt Kimi (trước đây là Kimi WebBridge) là plugin trình duyệt dành cho AI Agent, có thể mở trang web, nhấp nút, điền biểu mẫu và trích xuất thông tin."
  ogType="article"
/>

# Giới thiệu Tiện ích mở rộng trình duyệt Kimi

Tiện ích mở rộng trình duyệt Kimi (trước đây là Kimi WebBridge) là một plugin trình duyệt dành cho AI Agent, có thể mở trang web, nhấp vào nút, điền biểu mẫu và trích xuất thông tin, giúp Agent tự động hoàn thành các thao tác web tẻ nhạt như con người. Bạn cũng có thể tách các trang web thường dùng thành CLI và biến các thao tác web đã ghi lại thành Skill để Agent tái sử dụng bất cứ lúc nào.

## Hai cách sử dụng

Tiện ích mở rộng trình duyệt Kimi có hai cách sử dụng:

- **Thanh bên của trình duyệt**: Nhấp vào biểu tượng Kimi trên thanh công cụ để mở thanh bên, sau đó đăng nhập bằng tài khoản thành viên Kimi để trò chuyện trực tiếp và để Kimi thao tác trang hiện tại giúp bạn.
- **Điều khiển từ xa bằng Local Agent**: Để các AI Agent như Kimi Work hay Claude Code điều khiển tiện ích mở rộng từ xa, tự động hóa các tác vụ web.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Hướng dẫn sử dụng Tiện ích mở rộng trình duyệt Kimi",
    },
  ]}
/>

## Tải xuống và cài đặt

### Bước 1: tải Tiện ích mở rộng trình duyệt Kimi

Bạn có thể tải về theo các cách sau:

**Cách 1: cài đặt từ kho ứng dụng**

- Với người dùng Chrome: Truy cập [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Với người dùng Edge: Truy cập [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Cách 2: cài đặt thủ công**

Nếu bạn không thể truy cập kho ứng dụng, bạn có thể dùng cách cài đặt thủ công.

Sau đó làm theo các bước tương ứng với trình duyệt của bạn:

**Chrome:**

1. Tải gói tiện ích mở rộng từ [trang web chính thức của Tiện ích mở rộng trình duyệt Kimi](https://www.kimi.com/features/webbridge).
2. Giải nén tệp đã tải về
3. Mở `chrome://extensions/` trên thanh địa chỉ
4. Bật "Chế độ dành cho nhà phát triển" ở góc trên bên phải
5. Nhấp vào "Tải tiện ích đã giải nén"
6. Trong hộp chọn tệp, chọn thư mục WebBridge đã giải nén

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Tải gói tiện ích mở rộng từ [trang web chính thức của Tiện ích mở rộng trình duyệt Kimi](https://www.kimi.com/features/webbridge).
2. Giải nén tệp đã tải về
3. Mở `edge://extensions/` trên thanh địa chỉ
4. Bật "Chế độ dành cho nhà phát triển" ở góc dưới bên trái
5. Nhấp vào "Tải tiện ích đã giải nén"
6. Trong hộp chọn tệp, chọn thư mục WebBridge đã giải nén

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Sau khi cài đặt, bạn sẽ thấy Tiện ích mở rộng trình duyệt Kimi trong danh sách tiện ích mở rộng của trình duyệt. Để truy cập dễ dàng hơn, chúng tôi khuyên bạn nên ghim nó lên thanh công cụ trình duyệt.

### Bước 2: Chọn cách thiết lập và hoàn tất cấu hình

#### Cách 1: Sử dụng cùng Kimi Work Desktop

1. Tải Kimi Work từ [trang web chính thức](https://www.kimi.com/products/kimi-work)

2. Sau khi cài đặt thành công, bạn có thể mở thanh bên của tiện ích mở rộng và gửi yêu cầu, ví dụ:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Dùng Tiện ích mở rộng trình duyệt Kimi mở Xiaohongshu và tìm các bài viết về bản phát hành Kimi K3",
    },
  ]}
/>

#### Cách 2: Ghép nối với Agent cục bộ

Hỗ trợ Claude Code, Codex, Cursor, Kimi Code, Hermes Claw cùng nhiều công cụ khác.

1. Gửi lệnh sau trực tiếp trong Agent để tự động cài đặt Tiện ích mở rộng trình duyệt Kimi. Agent sẽ chạy quy trình thiết lập phù hợp với hệ điều hành của bạn.

Nếu bạn dùng macOS, hãy dùng lệnh dưới đây:

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Nếu bạn dùng Windows, hãy dùng lệnh dưới đây:

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. Bắt đầu sử dụng

Khi tiện ích mở rộng đã được kết nối, bạn có thể gửi yêu cầu.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Dùng Tiện ích mở rộng trình duyệt Kimi mở X.com và tìm các bài viết về bản phát hành Kimi K3",
    },
  ]}
/>
