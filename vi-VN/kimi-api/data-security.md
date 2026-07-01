---
title: "Xử lý và bảo mật dữ liệu"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="Xử lý & bảo mật dữ liệu - Trung tâm trợ giúp Kimi"
  description="Câu hỏi thường gặp về bảo mật dữ liệu người dùng và bảo vệ quyền riêng tư cho Kimi API."
/>

# Xử lý và bảo mật dữ liệu

<Callout type="info">
Câu hỏi thường gặp về bảo mật dữ liệu người dùng và bảo vệ quyền riêng tư cho Kimi API.
</Callout>

Kimi API rất coi trọng việc bảo mật dữ liệu người dùng và bảo vệ quyền riêng tư.
## Dữ liệu người dùng có được dùng để huấn luyện mô hình không?

<Callout type="warning">
**Không.** Dữ liệu người dùng gửi qua API (bao gồm nội dung đầu vào và kết quả đầu ra của mô hình) **không được dùng để huấn luyện hay cải thiện các mô hình của Kimi**. Dữ liệu của bạn chỉ được sử dụng để xử lý yêu cầu API hiện tại và không được lưu trữ lâu dài cho mục đích huấn luyện.
</Callout>

## Dữ liệu riêng tư được bảo mật như thế nào?
Kimi API áp dụng nhiều biện pháp để bảo vệ dữ liệu riêng tư của bạn:
| Biện pháp | Mô tả |
| --- | --- |
| **Mã hóa khi truyền** | Mọi giao tiếp qua API đều sử dụng HTTPS/TLS |
| **Cô lập dữ liệu** | Dữ liệu của các người dùng khác nhau được cô lập nghiêm ngặt |
| **Không dùng để huấn luyện** | Dữ liệu API không được dùng để huấn luyện mô hình |
| **Kiểm soát truy cập** | Xác thực bằng API Key, chỉ cho phép truy cập đã được ủy quyền |
| **Chứng nhận tuân thủ** | Nền tảng đã đạt được các chứng nhận bảo mật liên quan |

<Callout type="tip">
Đối với các yêu cầu bảo mật cao hơn, hãy liên hệ đội ngũ bán hàng để tìm hiểu về các giải pháp bảo mật cấp doanh nghiệp.
</Callout>

## Kiểm duyệt an toàn nội dung
Kimi API tích hợp sẵn cơ chế kiểm duyệt an toàn nội dung:
- Hệ thống tự động phát hiện và lọc nội dung bị cấm (hoạt động phi pháp, bạo lực, tài liệu khiêu dâm, v.v.)
- Khi bị kích hoạt, API sẽ trả về phản hồi lỗi tương ứng
- Quá trình kiểm duyệt nội dung không lưu trữ hay làm lộ dữ liệu gốc của bạn
- Nếu bạn cho rằng việc kiểm duyệt bị kích hoạt nhầm, hãy liên hệ bộ phận hỗ trợ kèm theo `request_id`
## Cách xóa tệp đã tải lên?
Các tệp được tải lên qua API tệp có thể được xóa bất cứ lúc nào:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

Thêm API Key của bạn vào phần header của yêu cầu và cung cấp ID tệp để xóa. Sau khi đã xóa, tệp không thể được tham chiếu nữa và dữ liệu của nó sẽ bị xóa khỏi máy chủ.

<Callout type="info">
Bạn cũng có thể xem và xóa các tệp đã tải lên trên trang quản lý tệp trong bảng điều khiển.
</Callout>
