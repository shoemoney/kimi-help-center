---
title: "Cách tạo plugin cá nhân"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "Sử dụng skill Plugin Builder tích hợp sẵn trong Kimi Work để biến một ý tưởng một câu, kho lưu trữ plugin bên ngoài hoặc bất kỳ trang web nào thành plugin của riêng bạn."
---

<SeoMeta
  title="Cách tạo plugin cá nhân - Trung tâm trợ giúp Kimi"
  description="Tạo plugin cá nhân trong Kimi Work bằng skill Plugin Builder tích hợp sẵn: tạo từ một ý tưởng một câu, nhập kho lưu trữ plugin bên ngoài hoặc biến bất kỳ trang web nào thành plugin. Sau khi đăng ký vào chợ plugin cá nhân, hãy cài đặt và sử dụng ngay trong cuộc trò chuyện."
/>

# Cách tạo plugin cá nhân

Trong Kimi Work, bạn có thể sử dụng skill **Plugin Builder** tích hợp sẵn để biến một ý tưởng một câu, kho lưu trữ plugin bên ngoài hoặc bất kỳ trang web nào thành plugin của riêng bạn. Dù chọn cách nào, plugin đều đến với bạn theo cùng một lộ trình: **tạo / chuyển đổi → đăng ký vào chợ plugin cá nhân (tab "Cá nhân") → nhấp + để cài đặt → sử dụng trong cuộc trò chuyện**. Sau khi cài đặt, plugin khả dụng ngay trong cuộc trò chuyện hiện tại — không cần khởi động lại.

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt ứng dụng desktop [Kimi Work](https://www.kimi.ai/products/kimi-work) mới nhất. Plugin Builder là một skill tích hợp sẵn, không cần cài đặt thêm: gõ "/" trong cuộc trò chuyện để gọi, hoặc nhấp "Plugin tùy chỉnh" trong chợ plugin để bắt đầu tạo trong cuộc trò chuyện chính.

## Tạo plugin mới bằng một câu

Lý tưởng cho trường hợp "có ý tưởng nhưng chưa có code sẵn". Bạn chỉ cần mô tả năng lực mong muốn; Plugin Builder sẽ tự động lo phần khởi tạo khung, điền trường, kiểm tra cục bộ và đăng ký — bạn không phải tự tay viết bất kỳ tệp nào.

1. **Mô tả nhu cầu của bạn.** Gọi Plugin Builder trong cuộc trò chuyện và giải thích bằng một câu plugin cần làm gì — ví dụ: "tạo cho tôi một plugin tra cứu thông tin đăng ký doanh nghiệp". Các trường có thể suy luận được, như tên, mô tả và danh mục, sẽ được điền tự động; chỉ những thông tin không thể suy luận, như URL của MCP server hoặc biểu tượng, mới được xác nhận với bạn.
2. **Chờ quá trình build hoàn tất.** Plugin Builder tạo các tệp plugin ở cục bộ, tự động vượt qua bước kiểm tra cấu trúc và quy chuẩn, sau đó đăng ký plugin vào chợ plugin cá nhân của bạn.
3. **Cài đặt và sử dụng.** Mở **Plugin → Cá nhân**, tìm plugin bạn vừa tạo rồi nhấp + để cài đặt. Sau khi cài đặt, plugin khả dụng ngay trong cuộc trò chuyện hiện tại và bạn có thể gọi nó bất cứ lúc nào bằng "/".

**Prompt một đoạn:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nTạo cho tôi một plugin tìm kiếm tài liệu học thuật, bao gồm:\n1. Tìm kiếm tài liệu: tìm bài báo theo chủ đề / tác giả / tạp chí, trả về thông tin thư mục, tóm tắt và liên kết toàn văn\n2. Xuất kết quả: xuất kết quả tìm kiếm dưới dạng CSV để dễ dàng nhập vào trình quản lý tài liệu tham khảo\n3. Hỗ trợ viết tổng quan: soạn thảo bài tổng quan tài liệu dựa trên kết quả tìm kiếm",
    },
  ]}
/>

## Nhập plugin từ chợ plugin hoặc kho lưu trữ

Gửi liên kết kho lưu trữ plugin cho Plugin Builder, nó sẽ tự động nhận diện, chuyển đổi định dạng và cài đặt vào tab "Cá nhân" của bạn. Plugin đã nhập không ảnh hưởng đến chợ plugin chính thức và có thể gỡ cài đặt bất cứ lúc nào.

1. **Các định dạng plugin được hỗ trợ:** Plugin Builder nhận diện manifest plugin từ các nguồn sau và chuyển đổi tất cả sang định dạng gốc `kimi.plugin.json` của Kimi:

| Định dạng | Ghi chú |
| --- | --- |
| `kimi.plugin.json` | Định dạng gốc của Kimi: các trường bắt buộc sẽ được tự động chỉnh sửa |
| Manifest plugin từ các nền tảng agent khác | Chẳng hạn các tệp `plugin.json` trong những thư mục như `.codex-plugin/plugin.json` hoặc `.claude-plugin/plugin.json`, cũng như các tệp chỉ mục chợ plugin mà những nền tảng đó cung cấp |
| `server.json` | Định dạng registry chính thức của MCP: được chuyển đổi thành một plugin chỉ chứa dịch vụ MCP |
| `plugin.json` chung | Một manifest chung nằm ở thư mục gốc của plugin |

2. **Cách nhập:** gửi liên kết kho lưu trữ cho Plugin Builder. Nó tự động nhận diện các dạng kho lưu trữ sau:

- **Kho lưu trữ một plugin**: toàn bộ kho lưu trữ được chuyển đổi thành một plugin;
- **Kho lưu trữ nhiều plugin (monorepo)**: mỗi thư mục con được chuyển đổi thành một plugin riêng;
- **Kho chợ plugin / kho chỉ mục** (kho lưu trữ có chỉ mục plugins.json hoặc marketplace.json): mọi mục trong chỉ mục được mở rộng và chuyển đổi hàng loạt;
- **Kho chỉ chứa Skills**: kho lưu trữ không có manifest plugin, chỉ có các tệp skill, sẽ được đóng gói thành một plugin dạng skill.

3. **Cài đặt từ tab Cá nhân:** khi xử lý xong, Plugin Builder sẽ cho bạn biết plugin nào có thể sử dụng. Vào **Plugin → Cá nhân** và nhấp "Cài đặt" trên thẻ tương ứng để bắt đầu sử dụng trong cuộc trò chuyện.

**Các prompt một đoạn:**

Nhập một kho lưu trữ đơn lẻ:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nNhập plugin trong kho lưu trữ https://github.com/owner/example làm plugin cá nhân. Sau khi chuyển đổi, trước tiên hãy kiểm tra xem cấu trúc và các dependency có khả dụng không; sau khi xác nhận, đăng ký nó vào chợ plugin cá nhân của tôi. Nếu chuyển đổi thất bại, hãy cho tôi biết lý do.",
    },
  ]}
/>

Nhập hàng loạt một chợ plugin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nChuyển đổi hàng loạt bộ sưu tập plugin tại https://github.com/hashgraph-online/awesome-ai-plugins thành plugin cá nhân. Chỉ chuyển đổi 5 plugin đầu tiên để tôi xem xét; sau khi tôi xác nhận, chuyển đổi toàn bộ phần còn lại, đăng ký lần lượt vào chợ plugin cá nhân của tôi, và cuối cùng gửi cho tôi một báo cáo đầy đủ được nhóm theo “khả dụng / dependency không khả dụng / thất bại”.",
    },
  ]}
/>

Chỉ chuyển đổi một thư mục con cụ thể:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nChỉ chuyển đổi plugin trong thư mục https://github.com/owner/repo/tree/main/plugins/example. Sau khi chuyển đổi và kiểm tra đạt, đăng ký nó vào chợ plugin cá nhân của tôi.",
    },
  ]}
/>

**Quản lý plugin đã nhập:**

- **Cập nhật plugin**: nếu kho lưu trữ nguồn có cập nhật, hoặc bạn muốn đổi tên hay mô tả, chỉ cần báo cho Plugin Builder — nó sẽ chuyển đổi lại hoặc chỉnh sửa rồi đăng ký lại.
- **Gỡ cài đặt / xóa**: gỡ cài đặt từ tab "Cá nhân" để vô hiệu hóa một plugin; mục plugin vẫn còn trong tab sau khi gỡ cài đặt — hãy xóa mục đó nếu bạn muốn loại bỏ hoàn toàn.
- **Thư mục nguồn**: kết quả chuyển đổi được lưu trong thư mục plugins/ của workspace cục bộ. Đây là "tệp nguồn" của plugin, và Plugin Builder dựa vào nó cho các lần cập nhật sau — vui lòng không xóa thủ công.

## Biến một trang web thành plugin

Lý tưởng cho trường hợp "một trang tôi thường dùng không có API công khai, nhưng tôi muốn Kimi lấy dữ liệu và thao tác thay mình". Gửi URL cho Plugin Builder và mô tả nhu cầu — ví dụ: "biến trang web XX thành plugin; tôi muốn tìm kiếm XX". Có hai lựa chọn trình duyệt để phân tích trang và chạy plugin:

| Phương thức | Phù hợp nhất với | Bạn cần |
| --- | --- | --- |
| **Trình duyệt tích hợp (mặc định)** | Hầu hết các trang web; sử dụng trình duyệt tích hợp của Kimi Work để phân tích trang và chạy plugin | Không cần cài đặt gì; khi cần đăng nhập, đăng nhập một lần trong trình duyệt tích hợp |
| **WebBridge (wb)** | Tái sử dụng các tài khoản bạn đã đăng nhập trong Chrome | Cài đặt WebBridge trước và dùng nó để điều khiển Chrome của bạn |

1. **Phân tích trang web.** Plugin Builder mở URL trong trình duyệt bạn đã chọn. Nếu trang yêu cầu đăng nhập, nó sẽ yêu cầu bạn đăng nhập một lần trong trình duyệt — nó không bao giờ hỏi mật khẩu, cookie hay bất kỳ thông tin xác thực nào của bạn.
2. **Phân tích ngược các API và tạo plugin.** Nó thực sự thao tác các tính năng cốt lõi trên trang, ghi lại các network request, tìm ra các API dữ liệu nội bộ của trang, rồi tạo một plugin dạng skill có tích hợp script truy vấn.
3. **Kiểm tra, đăng ký, cài đặt.** Giống như các phương thức trước: sau khi plugin vượt qua bước kiểm tra, nó được đăng ký vào tab "Cá nhân"; nhấp + để cài đặt và bắt đầu sử dụng.

Từ giờ trở đi, chỉ cần nói "tra cứu XX giúp tôi", Kimi sẽ dùng plugin để lấy dữ liệu trực tiếp trong trình duyệt và sắp xếp kết quả. Nếu API của trang thay đổi khiến plugin ngừng hoạt động, hãy yêu cầu Plugin Builder phân tích lại trang và cập nhật plugin.

**Prompt một đoạn:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nBiến Hacker News (https://news.ycombinator.com) thành một plugin, bao gồm:\n1. Tìm kiếm bài đăng: nhập từ khóa và trả về tiêu đề bài đăng, liên kết, điểm số và số lượng bình luận\n2. Trang nhất: lấy 30 bài đăng hàng đầu hiện tại trên trang chủ\n3. Đọc bình luận: mở một bài đăng cho trước và tóm tắt các ý chính từ những bình luận hàng đầu",
    },
  ]}
/>

<Callout type="warning">
Phương thức trình duyệt tích hợp dựa vào năng lực trình duyệt tích hợp của Kimi Work — nếu bạn được nhắc nâng cấp, hãy cập nhật ứng dụng desktop lên phiên bản mới nhất. Phương thức WebBridge yêu cầu WebBridge phải được cài đặt trước trên máy tính và trong Chrome của bạn.
</Callout>
