---
title: "Giới thiệu Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Giới thiệu Kimi WebBridge - Trung tâm trợ giúp Kimi"
  description="Kimi WebBridge là tiện ích mở rộng trình duyệt được thiết kế cho các AI Agent. Nó chạy trực tiếp trên trình duyệt Chrome hoặc Edge của bạn, tận dụng các phiên đăng nhập sẵn có để giúp Agent tương tác với trang web như một con người."
  ogType="article"
/>

# Giới thiệu Kimi WebBridge

Kimi WebBridge là tiện ích mở rộng trình duyệt được thiết kế cho các AI Agent. Khác với các giải pháp tự động hóa trình duyệt trên đám mây, Kimi WebBridge chạy trực tiếp trên trình duyệt Chrome hoặc Edge của bạn, tự động tận dụng các phiên đăng nhập sẵn có để giúp Agent tương tác với trang web như một con người.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Hướng dẫn sử dụng Kimi WebBridge",
    },
  ]}
/>

<Callout type="tip">
Chúng tôi khuyên bạn nên cài đặt Kimi WebBridge trên máy tính làm việc chính để có trải nghiệm tự động hóa trình duyệt tốt nhất.
</Callout>

<Callout type="info">
WebBridge hoạt động thông qua một dịch vụ cầu nối cục bộ và một tiện ích mở rộng trình duyệt. Mọi thao tác đều diễn ra cục bộ trên thiết bị của bạn—trạng thái đăng nhập và nội dung trang web không bao giờ rời khỏi máy của bạn.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge Introduction"
/>

## Bước 1: tải tiện ích mở rộng Kimi WebBridge

Bạn có thể tải về theo các cách sau:

**Cách 1: cài đặt từ kho ứng dụng**

- Với người dùng Chrome: Truy cập [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Với người dùng Edge: Truy cập [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Cách 2: cài đặt thủ công**

Nếu bạn không thể truy cập kho ứng dụng, bạn có thể dùng cách cài đặt thủ công.

Sau đó làm theo các bước tương ứng với trình duyệt của bạn:

**Chrome:**

1. Tải gói tiện ích mở rộng từ [trang web chính thức của Kimi WebBridge](https://www.kimi.com/features/webbridge).
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

1. Tải gói tiện ích mở rộng từ [trang web chính thức của Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Giải nén tệp đã tải về
3. Mở `edge://extensions/` trên thanh địa chỉ
4. Bật "Chế độ dành cho nhà phát triển" ở góc dưới bên trái
5. Nhấp vào "Tải tiện ích đã giải nén"
6. Trong hộp chọn tệp, chọn thư mục WebBridge đã giải nén

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Sau khi cài đặt, bạn sẽ thấy WebBridge trong danh sách tiện ích mở rộng của trình duyệt. Để truy cập dễ dàng hơn, chúng tôi khuyên bạn nên ghim nó lên thanh công cụ trình duyệt.

## Bước 2: Chọn cách thiết lập và hoàn tất cấu hình

### Cách 1: Sử dụng cùng Kimi Work Desktop

1. Tải Kimi Work từ [trang web chính thức](https://www.kimi.com/zh-cn/products/kimi-work)

2. Sau khi cài đặt, bạn có thể gửi yêu cầu trong Kimi Work, ví dụ:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Dùng Kimi Webbridge mở Xiaohongshu và tìm các bài viết về bản phát hành Kimi K2.6",
    },
  ]}
/>

### Cách 2: Ghép nối với Agent cục bộ

Hỗ trợ Claude Code, Codex, Cursor, Kimi Code, Hermes Claw cùng nhiều công cụ khác.

1. Gửi lệnh sau trực tiếp trong Agent để tự động cài đặt WebBridge. Agent sẽ chạy quy trình thiết lập phù hợp với hệ điều hành của bạn.

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
      content: "Dùng Kimi WebBridge mở X.com và tìm các bài viết về bản phát hành Kimi K2.6",
    },
  ]}
/>
