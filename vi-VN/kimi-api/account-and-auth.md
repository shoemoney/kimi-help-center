---
title: "Tài khoản & xác thực"
slug: "api-account-and-auth"
order: 9
extract_headings: true
preview: false
---

<SeoMeta
  title="Tài khoản & xác thực - Trung tâm trợ giúp Kimi"
  description="Các câu hỏi thường gặp về tài khoản nhà phát triển Kimi API, xác minh và xác thực."
/>

# Tài khoản & xác thực

<Callout type="info">
Các câu hỏi thường gặp về tài khoản nhà phát triển Kimi API, xác minh và xác thực.
</Callout>

## Tài khoản cá nhân có thể nhận hóa đơn doanh nghiệp không?
Tài khoản cá nhân **không thể nhận trực tiếp hóa đơn doanh nghiệp**. Nếu bạn cần hóa đơn doanh nghiệp, trước tiên hãy nâng cấp tài khoản lên tài khoản tổ chức. Sau khi được xác minh, bạn có thể yêu cầu xuất hóa đơn dưới tên tổ chức của mình.

## Làm thế nào để nâng cấp từ tài khoản cá nhân lên tài khoản tổ chức?
1. Đăng nhập vào console của [platform.kimi.ai](https://platform.kimi.ai).
2. Vào **Cài đặt tài khoản → Xác minh**.
3. Chọn **Xác minh tổ chức** và điền các thông tin bắt buộc.
4. Gửi để xét duyệt — sau khi được phê duyệt, tài khoản của bạn sẽ tự động được chuyển đổi.

<Callout type="tip">
Số dư hiện có và dữ liệu sử dụng sẽ được giữ nguyên sau khi nâng cấp.
</Callout>

## Khác biệt giữa xác minh cá nhân và xác minh tổ chức
| Khía cạnh | Cá nhân | Tổ chức |
| --- | --- | --- |
| Loại hóa đơn | Hóa đơn cá nhân | Hóa đơn doanh nghiệp / VAT |
| Rate Limits | Tiêu chuẩn | Có thể được cấp quota cao hơn |
| Hợp đồng doanh nghiệp | — | Có thể ký hợp đồng |
| Chiết khấu theo sản lượng | — | Có thể cung cấp khi yêu cầu |
| Hỗ trợ kỹ thuật | Tiêu chuẩn | Hỗ trợ ưu tiên |

## Làm thế nào để khiếu nại việc tài khoản bị đình chỉ?
Nếu tài khoản API của bạn bị đình chỉ do vi phạm chính sách:
1. Gửi email đến **support@moonshot.ai** với dòng tiêu đề "Khiếu nại tài khoản API".
2. Cung cấp thông tin tài khoản của bạn (địa chỉ email đã đăng ký) và mô tả nội dung khiếu nại.
3. Đội ngũ phụ trách sẽ xem xét và phản hồi trong vòng 1–3 ngày làm việc.

<Callout type="info">
**Email hỗ trợ**: support@moonshot.ai
</Callout>

## Làm thế nào để thay đổi email đã đăng ký?
Để thay đổi email đã đăng ký, hãy liên hệ bộ phận hỗ trợ:
1. Gửi email đến **support@moonshot.ai** với dòng tiêu đề "Yêu cầu thay đổi email".
2. Cung cấp cả địa chỉ email hiện tại và địa chỉ email mới của bạn.
3. Có thể cần xác minh danh tính để đảm bảo an toàn cho tài khoản.

## Lợi ích khi hoàn tất xác minh
- **Rate Limits cao hơn**: Người dùng đã xác minh có thể được áp dụng tần suất gọi API cao hơn.
- **Truy cập đầy đủ tính năng**: Một số tính năng nâng cao có thể chỉ dành cho người dùng đã xác minh.
- **Hỗ trợ hóa đơn**: Tài khoản đã xác minh có thể yêu cầu xuất hóa đơn.
- **Hỗ trợ kỹ thuật**: Người dùng đã xác minh được ưu tiên hỗ trợ kỹ thuật hơn.
