---
title: "Khả năng full-stack của Kimi Websites"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
preview_content: "Khả năng full-stack của Kimi Websites và những giới hạn hiện tại."
---

<SeoMeta
  title="Vì sao website do Kimi tạo không hoạt động? - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu phạm vi năng lực và những giới hạn hiện tại của Kimi Websites. Các trường hợp chưa được hỗ trợ gồm thanh toán bên thứ ba, OAuth và tích hợp API phức tạp."
/>

# Khả năng full-stack của Kimi Websites

## Nâng cấp xây dựng website full-stack

Một website hoàn chỉnh thường gồm ba phần: **giao diện front-end, dịch vụ back-end và lưu trữ dữ liệu**. Kimi Websites đã được nâng cấp với khả năng xây dựng website full-stack, hỗ trợ tạo và triển khai website trọn quy trình, từ trang front-end đến cơ sở dữ liệu back-end.

| Khả năng         | Mô tả                                                           |
|--------------|----------------------------------------------------------------|
| Tạo front-end     | Cấu trúc trang HTML/CSS/JavaScript, kiểu hiển thị và logic tương tác                    |
| Cơ sở dữ liệu back-end   | Tự động xây dựng cơ sở dữ liệu back-end, hỗ trợ đọc/ghi dữ liệu bền vững và quản lý trực quan               |
| Đăng nhập người dùng     | Hỗ trợ đăng nhập bằng tài khoản Kimi, đồng thời có thể xây dựng hệ thống đăng nhập bằng tài khoản và mật khẩu thông qua cơ sở dữ liệu           |
| Quản lý phiên bản     | AI tự động commit phiên bản và hỗ trợ khôi phục về bất kỳ phiên bản lịch sử nào                      |
| Xem trước full-stack     | Hỗ trợ xem trước đầy đủ cả front-end và back-end; một số tình huống cần khởi động thủ công môi trường sandbox                   |
| Xuất bản và triển khai   | Nhấp thủ công vào "Xuất bản" để triển khai lên Internet công khai. Trước khi xuất bản, trang web chỉ có thể xem trước. Hỗ trợ triển khai nội dung full-stack  |

## Sản phẩm bàn giao của Agent

- Bộ tệp thực thi tác vụ hoàn chỉnh, bao gồm mã front-end và back-end
- Một website full-stack có thể xem trước trực tuyến và xuất bản
- Gói Zip có thể tải xuống, nằm trong thư mục `/mnt/agents/output/app/`

## Trường hợp sử dụng

| Tình huống             | Prompt ví dụ                                                       |
|------------------|------------------------------------------------------------------|
| Xây dựng landing page từ đầu   | Tạo landing page tiếp thị cho một sản phẩm SaaS theo phong cách công nghệ, gồm khu vực mở đầu nổi bật, phần giới thiệu tính năng, bảng giá và CTA |
| Tái tạo từ ảnh chụp màn hình         | [Tải lên ảnh chụp màn hình thiết kế] Chuyển thiết kế này thành mã trang web có thể chạy               |
| Portfolio cá nhân       | Tạo website portfolio cá nhân cho một nhiếp ảnh gia, theo phong cách đen trắng tối giản và hỗ trợ bố cục ảnh dạng masonry        |
| Trang trực quan hóa dữ liệu     | Tạo trang web trực quan hóa dữ liệu, hiển thị dữ liệu gọi vốn của các công ty AI năm 2025, gồm biểu đồ và bộ lọc |
| Website thương hiệu         | Tạo website chính thức cho một thương hiệu cà phê, sử dụng bảng màu Morandi, gồm trang chủ, trang sản phẩm và trang cửa hàng      |
| Ứng dụng yêu cầu đăng nhập     | Tạo website cơ sở tri thức nội bộ cho nhóm, trong đó chỉ có thể xem nội dung sau khi đăng nhập                   |
| Trang quản trị dữ liệu     | Tạo hệ thống đăng ký sự kiện, nơi người dùng có thể gửi thông tin để lưu vào cơ sở dữ liệu, còn quản trị viên có thể xem danh sách đăng ký |
| Công cụ/máy tính    | Tạo trang web tính BMI với giao diện gọn gàng, hỗ trợ đổi đơn vị và hiển thị gợi ý về nhóm sức khỏe     |

## Giới hạn hiện tại

Các tình huống sau hiện chưa được hỗ trợ và sẽ được mở dần trong các phiên bản tương lai:

- Tích hợp thanh toán bên thứ ba, chẳng hạn như Stripe và PayPal
- Đăng nhập OAuth qua bên thứ ba, chẳng hạn như Google và GitHub. Hiện tại chỉ hỗ trợ đăng nhập bằng tài khoản Kimi hoặc đăng nhập bằng tên người dùng/mật khẩu dựa trên cơ sở dữ liệu
- Tích hợp API phía máy chủ phức tạp, chẳng hạn như kết nối với các dịch vụ SaaS bên ngoài
