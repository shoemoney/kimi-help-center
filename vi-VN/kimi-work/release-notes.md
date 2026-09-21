---
title: "Nhật ký phát hành"
slug: "release-notes"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Nhật ký phát hành Kimi Work - Trung tâm trợ giúp Kimi"
  description="Nhật ký cập nhật phiên bản Kimi Work: tính năng mới, thay đổi và bản sửa lỗi cho Mac và Windows, được cập nhật liên tục."
/>

# Nhật ký phát hành

Trang này ghi lại nội dung cập nhật theo phiên bản của Kimi Work, bao gồm tính năng mới, thay đổi và bản sửa lỗi, và được cập nhật liên tục. Tải xuống phiên bản mới nhất: [kimi.com/products/kimi-work](https://www.kimi.com/products/kimi-work)

## 3.2.12 (2026-09-22)

**Mới**

- Xem trước và chỉnh sửa tệp Office: xem trước và chỉnh sửa tệp PPT / XLSX trong bảng xem trước, thay đổi được lưu ngay
- Chọn để hỏi: chọn nội dung trong tài liệu để hỏi Kimi hoặc yêu cầu chỉnh sửa ngay tại chỗ
- Trang tác vụ lưu trữ được làm lại: hỗ trợ tìm kiếm, sắp xếp, lọc và xóa vĩnh viễn

**Thay đổi**

- Đã bỏ giới hạn dung lượng tệp đính kèm trong ô nhập

**Sửa lỗi**

- Đã sửa lỗi trình cài đặt Windows vô tình xóa mục đăng nhập tự khởi động
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.11 (2026-09-18)

**Thay đổi**

- Bảng chi tiết giờ hỗ trợ hiển thị quá trình thực thi của sub-Agent

**Sửa lỗi**

- Đã sửa lỗi shortcut menu Start bị hỏng sau khi cập nhật trong ứng dụng trên Windows
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.10 (2026-09-16)

**Sửa lỗi**

- Gỡ khẩn gói đi kèm đích chia sẻ của Windows để khắc phục lỗi crash ngay khi khởi động; khả năng chia sẻ đã quay lại trong 3.2.11 sau khi sửa
- Tên hiển thị và mô tả của skill tích hợp giờ được bản địa hóa theo ngôn ngữ giao diện: menu “/” lọc theo tên đã dịch, các ngôn ngữ chưa cung cấp sẽ dùng tiếng Anh
- Nhấp vào thẻ đính kèm thư mục giờ sẽ định vị thư mục tương ứng trong cây tệp của workspace
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.9 (2026-09-14)

**Mới**

- Hỗ trợ chia sẻ và mở tệp với Kimi cho một số định dạng tệp:
  - Chia sẻ cho Kimi: gửi tệp và nội dung trực tiếp cho Kimi từ menu chia sẻ của các ứng dụng như WeChat
  - Mở bằng Kimi: nhấp chuột phải vào tệp được hỗ trợ và chọn mở bằng Kimi
- Nâng cấp thú cưng trên desktop: UI được làm mới hoàn toàn với trả lời nhanh ngay trong bong bóng trò chuyện — tiếp tục trò chuyện mà không cần mở cửa sổ chính
- Trình xem PDF cập nhật bảng mục lục mới, bao gồm mục lục và nhảy theo số trang
- Tùy chọn chế độ nguồn mới “Duy trì thức sau khi màn hình tắt”: màn hình có thể tắt trong khi hệ thống vẫn chạy, điều khiển từ xa và tác vụ nền không bị gián đoạn

**Thay đổi**

- Các tệp đã tải lên và tệp được liên kết bằng “@” trong ô nhập giờ có thể nhấp để mở xem trước trong workspace bên phải
- Xem trước hình ảnh giờ hỗ trợ thao tác sao chép / lưu

**Sửa lỗi**

- Đã sửa một số race condition, bao gồm khôi phục chỉnh sửa hàng đợi và mở khóa điều hướng sau khi trình duyệt gặp sự cố
- Đã sửa các vấn đề màu trong chế độ tối cho các tính năng của ứng dụng
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.8 (2026-09-12)

**Thay đổi**

- Cài đặt chống ngủ giờ có ba tùy chọn: tiếp tục chạy khi màn hình tắt, giữ màn hình luôn sáng, và tắt

**Sửa lỗi**

- Đã sửa lỗi cửa sổ Cài đặt bị trắng sau khi khôi phục
- Tối ưu hình thu nhỏ của ảnh chụp dài, giảm bộ nhớ dùng khi xem trước
- Đã sửa lỗi race condition khi làm mới đăng nhập, tránh các yêu cầu cũ vô tình xóa trạng thái đăng nhập hoặc ghi đè thông tin xác thực mới
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.7 (2026-09-11)

**Mới**

- Nâng cấp khả năng chụp màn hình: chụp màn hình dài bằng cách cuộn trong Launcher; trích xuất văn bản OCR bằng một cú nhấp trong trình chỉnh sửa ảnh chụp; ghim ảnh chụp lên desktop dưới dạng cửa sổ luôn ở trên cùng
- Tiêm cài đặt cuộc trò chuyện: các cuộc trò chuyện Work mới tự động mang theo cài đặt cuộc trò chuyện của bạn
- Kéo tệp đến bất kỳ đâu trên cửa sổ để đính kèm, hỗ trợ cả thư mục
- Thêm plugin triển khai website: sau khi cài đặt, dự án website trên máy có thể triển khai lên đám mây trong một bước

**Thay đổi**

- Khởi động tự động của Windows giờ chỉ nằm trong khay hệ thống, không còn bật cửa sổ chính
- Bảng Markdown được thiết kế lại, bảng rộng có thể cuộn ngang
- Trung tâm thông báo hỗ trợ đánh dấu tất cả đã đọc bằng một cú nhấp
- Tin nhắn điều khiển từ xa hiển thị theo phân đoạn, thẻ sub-Agent và thẻ kết quả đồng nhất với desktop

**Sửa lỗi**

- Tự động tắt nhập liệu bằng giọng nói trên thiết bị không có micrô, và dừng ghi âm khi rút micrô
- Đã sửa lỗi mất tính năng tải plugin lên
- Liên kết email và điện thoại giờ sẽ thông báo rõ ràng khi không thể mở, không còn thất bại âm thầm
- Đã sửa lỗi trang tác vụ theo lịch bị đơ khi hết credit
- Sửa hiệu năng và kéo thả của thú cưng trên desktop
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.6 (2026-09-07)

**Mới**

- Thêm đề xuất và cài đặt plugin trong stream: tự động đề xuất plugin phù hợp với tác vụ của bạn và nhắc bạn cài đặt
- Hỗ trợ cài đặt plugin qua liên kết GitHub, giúp dễ dàng đưa vào các plugin được chia sẻ

**Thay đổi**

- Trang chi tiết plugin giờ hiển thị trạng thái kết nối MCP và hỗ trợ quản lý kết nối
- Giờ bạn sẽ được yêu cầu xác nhận các tác vụ theo lịch vẫn đang chạy trước khi thoát ứng dụng

**Sửa lỗi**

- Đã sửa lỗi nút “Quay lại” không phản hồi sau khi vào một số trang nhất định trong Cài đặt
- Đã sửa lỗi cài đặt đè lên bản cài sẵn có bị chặn nhầm trên macOS, và tệp CAD bị mở nhầm bằng Notepad trên Windows
- Đã sửa các vấn đề về màu một số trang trong chế độ tối, tin nhắn Launcher bị trùng, và độ rộng xem trước DOCX
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.5 (2026-09-04)

**Mới**

- Thêm tính năng điều khiển từ xa: điều khiển Kimi Work trên máy tính từ điện thoại của bạn
- Thêm tính năng Apps: nâng cao khả năng thao tác web của Agent và khả năng hiển thị hiệu quả
- Thêm tìm kiếm trong cuộc trò chuyện: tìm nhanh nội dung trong cuộc trò chuyện

**Thay đổi**

- Cập nhật cửa hàng plugin/skill: tối ưu logic hiển thị, hỗ trợ tìm kiếm plugin/skill
- Trung tâm cài đặt được làm mới, tương thích giữa chế độ Chat và Work

**Sửa lỗi**

- Đã sửa lỗi một số người dùng thấy trạng thái đăng nhập hiển thị bất thường
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.4 (2026-08-31)

**Thay đổi**

- Tối ưu cách hiển thị trích dẫn các nguồn như tìm kiếm web và tệp cục bộ trong phản hồi tin nhắn
- Tối ưu cỡ chữ và khoảng cách dòng trong phản hồi tin nhắn

**Sửa lỗi**

- Đã sửa một số vấn đề trải nghiệm trong chế độ tối
- Tối ưu hóa giám sát tiến trình trên Windows
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.3 (2026-08-28)

**Mới**

- Thêm mục “Tạo plugin” trong cửa hàng plugin: tạo plugin trực tiếp trong cửa hàng

**Sửa lỗi**

- Tinh chỉnh thú cưng trên desktop: cải thiện hành vi cửa sổ, và ngôn ngữ giờ sẽ thay đổi theo ứng dụng theo thời gian thực
- Đã sửa lỗi mất nhất quán trạng thái cuộc trò chuyện khi chỉnh sửa và gửi lại tin nhắn sau lỗi
- Tối ưu hóa mức tiêu thụ điện của các tính năng thường trực
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.2 (2026-08-26)

**Mới**

- Ra mắt thú cưng trên desktop: Kimi đồng hành và tương tác với bạn dưới dạng thú cưng trên desktop
- Lệnh Slash mới: hộp nhập hiện hỗ trợ các lệnh compact (nén ngữ cảnh), fork (tách cuộc trò chuyện) và goal (mục tiêu)
- Thêm tùy chọn “Mặc định” cho quyền chạy: hiện hỗ trợ toàn cục ba cấp quyền — “Mặc định”, “Cho phép thủ công” và “Cho phép tất cả”

**Thay đổi**

- Quyền điều khiển trình duyệt tích hợp của Agent giờ được bật theo mặc định
- Các cuộc trò chuyện trong khu vực “Chat” không còn chia sẻ thư mục gốc: mỗi cuộc trò chuyện giờ sẽ có một thư mục làm việc riêng

**Sửa lỗi**

- Đã sửa lỗi tin nhắn đầu tiên thoáng hiện trạng thái trống sau khi gửi
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.1 (2026-08-21)

**Mới**

- Ra mắt Launcher toàn cục: gọi hộp nhập dạng viên nang nổi trên desktop mọi lúc, mọi nơi bằng phím tắt toàn cục
  - Khi được gọi, hộp nhập tự động đưa vào các tệp đang được chọn trong Finder / File Explorer, hỗ trợ dán hình ảnh, thêm tệp đính kèm và kéo ảnh chụp màn hình vào
  - Gõ “/” để mở menu plugin và skill (hỗ trợ tìm kiếm bằng bính âm), đồng thời chọn workspace
  - Giữ phím tắt để nhập bằng giọng nói; sau khi gửi, hộp thu lại thành viên nang mini và bạn có thể quay lại ứng dụng chính chỉ bằng một cú nhấp để xem câu trả lời
- Hàng đợi tin nhắn mới: trong khi Agent đang trả lời, bạn vẫn có thể tiếp tục gửi tin nhắn; tin nhắn mới tự động xếp hàng, hỗ trợ kéo để sắp xếp lại, chỉnh sửa, xóa và xem trước chi tiết
- Nhập liệu bằng giọng nói trong hộp nhập của Work: nhấp vào micrô hoặc giữ phím tắt để bắt đầu, hỗ trợ nhận dạng hỗn hợp Trung - Anh

**Thay đổi**

- Cập nhật logic thông báo tin nhắn: bạn có thể chuyển đổi quy tắc thông báo tin nhắn trong Cài đặt

**Sửa lỗi**

- Tối ưu hóa mức tiêu thụ điện khi chờ, giảm sử dụng tài nguyên nền khi ứng dụng không hoạt động
- Đã sửa lỗi biểu tượng Dock biến mất trên macOS
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.2.0 (2026-08-19)

**Mới**

- Ra mắt trình duyệt tích hợp sẵn của Agent: các tab trình duyệt được gắn với cuộc trò chuyện và nằm trong khu vực xem trước, Agent có thể trực tiếp thao tác trình duyệt — nhấp chuột, nhập liệu và hơn thế nữa; trên Mac, bạn còn có thể nhập cookie từ trình duyệt Chrome trên máy để tái sử dụng các phiên đăng nhập hiện có (mặc định tắt, có thể bật trong Cài đặt)
- Bản địa hóa 16 ngôn ngữ: client hiện hỗ trợ 16 ngôn ngữ, thay vì chỉ tiếng Trung và tiếng Anh

**Thay đổi**

- Kimi WebBridge giờ là một plugin: tính năng điều khiển trình duyệt thật đã được chuyển thành plugin, mặc định tắt và có thể bật trong Cài đặt
- Đã loại bỏ trang danh sách bảng; các bảng giờ được chuyển đổi qua thanh tab trên cùng
- Bảng giờ là một loại khu vực xem trước: có thể mở bảng trong khu vực xem trước của cuộc trò chuyện, và nhiều bảng có thể được mở song song

**Sửa lỗi**

- Nâng cấp hiển thị tin nhắn truyền trực tuyến: các câu trả lời dài giờ hiển thị mượt mà hơn
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.1.10 (2026-08-16)

**Sửa lỗi**

- Đã sửa lỗi ứng dụng bị thoát đột ngột trong quá trình nâng cấp đối với một số người dùng Windows

## 3.1.9 (2026-08-15)

**Mới**

- Chợ plugin cá nhân ra mắt: chợ plugin giờ đã có mục "Plugin cá nhân", nơi bạn có thể duyệt và cài đặt các plugin từ nhà phát triển cá nhân

**Sửa lỗi**

- Đã sửa lỗi nội dung Markdown truyền trực tuyến thỉnh thoảng không được làm mới
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.1.8 (2026-08-11)

**Mới**

- Điều hướng lịch sử tin nhắn: thanh điều hướng tin nhắn mới ở cạnh phải của các cuộc trò chuyện dài giúp bạn nhanh chóng quay lại các tin nhắn trước đó
- Rẽ nhánh cuộc trò chuyện: tạo một nhánh mới từ bất kỳ lượt hội thoại nào để tiếp tục khám phá, kèm theo lịch sử trò chuyện của cuộc hội thoại gốc
- Chỉnh sửa và quay lại: chỉnh sửa tin nhắn gần nhất của bạn và tạo lại câu trả lời
- Thư mục dự án: di chuyển cuộc trò chuyện vào hoặc ra khỏi dự án, và ghim dự án vào khu vực ghim của thanh bên
- Chỉnh sửa tệp minh bạch: sau khi Agent sửa đổi tệp, một thẻ tóm tắt diff sẽ được tạo — xem lại từng dòng thay đổi và khôi phục chỉ bằng một cú nhấp chuột; các tệp trong workspace tự động làm mới khi thay đổi trên ổ đĩa
- Khám phá và tạo skill: khám phá và tạo các skill tùy chỉnh trong Work, có hỗ trợ tìm kiếm skill
- Thành phần bảng ghim trên màn hình nền giờ đã có tùy chọn luôn hiển thị trên cùng

**Thay đổi**

- Cửa sổ hội thoại độc lập mới giờ đã hỗ trợ Chat
- Tin nhắn quá dài của người dùng trong ô nhập liệu giờ sẽ được thu gọn

**Sửa lỗi**

- Đã sửa lỗi xem trước liên kết tệp PDF trên Windows; phần Cài đặt của Work không còn bị nháy trắng trong chế độ tối; dán từ clipboard của Word giờ khôi phục văn bản thay vì tệp đính kèm hình ảnh
- Đã sửa một số lỗi và cải thiện một số tương tác cùng độ ổn định

## 3.1.7 (2026-08-05)

**Mới**

- Hỗ trợ phản hồi ở cấp tin nhắn: bạn có thể thích hoặc không thích từng tin nhắn cụ thể trong câu trả lời của trợ lý

**Thay đổi**

- Thành phần bảng ghim trên màn hình nền không còn bị buộc luôn hiển thị trên cùng

**Sửa lỗi**

- Đã sửa một số lỗi và cải thiện một số tương tác

## 3.1.6 (2026-07-29)

**Mới**

- Trình chỉnh sửa slide PPT ra mắt: mở và chỉnh sửa slide trực tiếp trong workspace, chỉnh sửa xong là có ngay kết quả
- Hỗ trợ chú thích ảnh chụp màn hình cho tệp trong khu vực xem trước và trình duyệt; sau khi hoàn tất có thể gửi trực tiếp cho Agent để chỉnh sửa
- Hỗ trợ di chuyển ổ lưu trữ trên Windows: dữ liệu Work có thể chuyển sang ổ đĩa khác
- Bản cài trên Windows hỗ trợ tự chọn vị trí cài đặt

**Thay đổi**

- Đã cải thiện một số vấn đề về token efficiency

**Sửa lỗi**

- Đã sửa một số lỗi và cải thiện một số tương tác
