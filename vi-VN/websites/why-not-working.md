---
title: "Vì sao website do agent tạo lại không hoạt động?"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Vì sao website do agent tạo lại không hoạt động? - Trung tâm trợ giúp Kimi"
  description="Một dự án full-stack bao gồm giao diện frontend, dịch vụ backend và lưu trữ bền vững. Kimi Agent có thể tạo cả ba, nhưng việc chạy thành công còn phụ thuộc vào cấu hình môi trường..."
/>

# Vì sao không hoạt động?

<Callout type="tip">
Một dự án full-stack bao gồm **giao diện frontend, dịch vụ backend và lưu trữ bền vững**. Kimi Agent có thể tạo cả ba, nhưng việc chạy thành công phụ thuộc vào cấu hình môi trường, thiết lập xác thực và các thao tác xuất bản.
</Callout>

Nếu ứng dụng của bạn không hoạt động như mong đợi, vấn đề thường không nằm ở việc thiếu khả năng backend. Phổ biến hơn là một bước xem trước, xác thực, cơ sở dữ liệu hoặc xuất bản chưa hoàn tất.

## Quy trình full-stack 

1. **Tạo**: Agent tạo frontend + backend + lược đồ cơ sở dữ liệu và logic xử lý dữ liệu.
2. **Xem trước**: Chạy trong sandbox để kiểm thử full-stack cục bộ (trong một số trường hợp có thể cần khởi động thủ công).
3. **Phiên bản**: Agent có thể dùng các công cụ quản lý phiên bản và tự động tạo commit.
4. **Khôi phục**: Bạn có thể quay về bất kỳ phiên bản commit nào trước đó.
5. **Xuất bản / Chia sẻ**: Ứng dụng chỉ được triển khai lên một URL công khai sau khi bạn xuất bản thủ công.

## Các nguyên nhân lỗi thường gặp 

| Triệu chứng | Nguyên nhân có thể | Cần làm gì |
|----------|-------------|------------|
| Frontend tải được nhưng API lỗi | Runtime sandbox chưa khởi động | Khởi động sandbox và chạy lại bản xem trước |
| Dữ liệu không được lưu hoặc không hiển thị | Cơ sở dữ liệu chưa khởi tạo hoặc chưa migrate | Chạy lại bước thiết lập hoặc migrate cơ sở dữ liệu |
| Đăng nhập thất bại | Luồng xác thực chưa được cấu hình đúng | Kiểm tra cấu hình Kimi Login và các thiết lập callback |
| Người khác không truy cập được ứng dụng | Ứng dụng chưa được xuất bản | Nhấn **Xuất bản/Chia sẻ** để triển khai |
| Thay đổi gần đây làm hỏng chức năng | Lỗi hồi quy ở phiên bản mới nhất | Khôi phục về một commit ổn định |

## Hỗ trợ xác thực

- **Giai đoạn 1**: Hỗ trợ **Kimi Login**.
- **Giai đoạn tiếp theo**: Sẽ bổ sung thêm các nhà cung cấp OAuth khác.
- **Cũng được hỗ trợ**: Agent có thể tạo luồng đăng nhập tài khoản bằng email/mật khẩu chuẩn dựa trên cơ sở dữ liệu.

## Phiên bản và khôi phục

- Agent hỗ trợ công cụ quản lý phiên bản mới và có thể tự động thực hiện `git commit` trong quá trình phát triển.
- Bạn có thể xem lịch sử phiên bản và khôi phục về một commit được chọn khi cần.

## Xem trước và Xuất bản

- **Xem trước**: Dành cho phát triển và kiểm thử trong sandbox; trong một số tình huống có thể cần khởi động sandbox thủ công.
- **Xuất bản/Chia sẻ**: Thao tác thủ công của người dùng nhằm triển khai ứng dụng lên môi trường công khai có thể truy cập được.

## Agent phù hợp nhất cho

- Tạo nguyên mẫu nhanh cho các sản phẩm full-stack
- Các luồng CRUD với lưu trữ bền vững
- Các thao tác dữ liệu quản trị hoặc nội bộ cơ bản
- Dự án demo trọn vẹn với luồng đăng nhập, dữ liệu và triển khai

## Giới hạn hiện tại

- Các thao tác vận hành nâng cao ở môi trường production (ví dụ: SRE phức tạp và HA đa vùng) vẫn cần đến công sức kỹ thuật thủ công.
- Đối với các kịch bản production rủi ro cao, hãy thực hiện rà soát bảo mật và tăng cường an toàn khi triển khai trước khi phát hành.
