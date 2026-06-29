---
title: "Tùy chỉnh & tham khảo"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Tùy chỉnh \u0026 tham khảo - Kimi Help Center"
  description="Kimi Code CLI cung cấp nhiều tùy chọn tùy chỉnh phong phú, cho phép bạn điều chỉnh hành vi và quy trình làm việc của AI theo nhu cầu của mình."
/>

# Tùy chỉnh & tham khảo

Kimi Code CLI cung cấp nhiều tùy chọn tùy chỉnh phong phú, cho phép bạn điều chỉnh hành vi và quy trình làm việc của AI theo nhu cầu của mình.

## Tệp cấu hình

Kimi Code CLI sử dụng `~/.kimi/config.toml` làm tệp cấu hình toàn cục, hỗ trợ cả định dạng TOML lẫn JSON. Bạn có thể cấu hình:

- **Nhà cung cấp API và mô hình**: Thiết lập các nhà cung cấp mô hình, điểm cuối API và khóa khác nhau.
- **Mô hình mặc định**: Chỉ định mô hình sẽ dùng làm mặc định.
- **Tham số chạy**: Điều chỉnh thời gian chờ, concurrency, định dạng đầu ra và các thiết lập chạy khác.

> Dùng lệnh `/config` để mở nhanh tệp cấu hình và chỉnh sửa.

## Cấu hình dự án AGENTS.md

Đặt tệp `AGENTS.md` ở thư mục gốc của dự án để cung cấp cho AI ngữ cảnh ở cấp độ dự án:

- **Bối cảnh dự án**: Mô tả chức năng, kiến trúc và ngăn xếp công nghệ của dự án.
- **Các bước build**: Cách cài đặt phụ thuộc, build dự án và chạy kiểm thử.
- **Quy ước mã nguồn**: Quy ước đặt tên, quy tắc cấu trúc thư mục, sở thích về phong cách viết mã.
- **Lưu ý đặc biệt**: Các hạn chế về bảo mật, yêu cầu hiệu năng và những điểm quan trọng khác cần lưu ý.

Dùng lệnh `/init` để AI tự động quét dự án và tạo tệp `AGENTS.md` ban đầu. Bạn cũng có thể chỉnh sửa thủ công tệp này để bổ sung thông tin riêng cho dự án. Tệp `AGENTS.md` có thể đặt ở bất kỳ thư mục con nào — AI sẽ tự động nạp các cấu hình liên quan.

## Tùy chỉnh system prompt

Bạn có thể tùy chỉnh system prompt của AI theo nhiều cách:

- **System prompt toàn cục**: Viết trong `~/.kimi/AGENTS.md` — áp dụng cho mọi dự án.
- **System prompt cấp dự án**: Viết trong tệp `AGENTS.md` ở thư mục gốc của dự án — chỉ áp dụng cho dự án hiện tại.
- **Tham số khởi chạy**: Dùng cờ `--system-prompt` để chỉ định khi khởi chạy.

Cấu hình cấp dự án sẽ ghi đè cấu hình toàn cục, còn tham số khởi chạy có mức ưu tiên cao nhất.

## Tích hợp MCP

Kimi Code CLI hỗ trợ Model Context Protocol (MCP), cho phép kết nối với các công cụ và nguồn dữ liệu bên ngoài để mở rộng khả năng của AI:

- **Cấu hình máy chủ MCP**: Thêm địa chỉ máy chủ MCP trong tệp cấu hình để AI có thể gọi các công cụ bên ngoài.
- **Hỗ trợ MCP tích hợp sẵn**: Một số công cụ MCP thông dụng đã được tích hợp sẵn và không cần cấu hình thêm.
- **Máy chủ MCP tùy chỉnh**: Bạn có thể tự phát triển máy chủ MCP của riêng mình để cung cấp những khả năng chuyên biệt theo lĩnh vực.

Cấu hình MCP có thể đặt trong `~/.kimi/config.toml` hoặc trong các tệp cấu hình cấp dự án.

## Biến môi trường

Kimi Code CLI hỗ trợ cấu hình thông qua biến môi trường — hữu ích cho các pipeline CI/CD và script:

| Biến môi trường | Mô tả |
| --- | --- |
| `KIMI_API_KEY` | Khóa API |
| `KIMI_BASE_URL` | Điểm cuối API tùy chỉnh |
| `KIMI_MODEL` | Tên mô hình mặc định |
| `KIMI_MAX_TOKENS` | Số token đầu ra tối đa |

Biến môi trường có mức ưu tiên cao hơn các thiết lập trong tệp cấu hình.

## Tài liệu tham khảo thêm

- **Tham khảo lệnh slash**: Dùng `/help` để xem tất cả các lệnh khả dụng.
- **Tham khảo tham số CLI**: Chạy `kimi --help` để xem toàn bộ tham số khởi chạy.
- **Tài liệu chính thức**: Truy cập [Kimi Code Docs](https://www.kimi.com/code/docs/en/) để xem tài liệu đầy đủ và mới nhất.
