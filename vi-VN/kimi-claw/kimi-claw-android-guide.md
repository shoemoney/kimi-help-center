---
title: "Tổng quan Kimi Claw Android"
slug: "kimi-claw-android-guide"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Tổng quan Kimi Claw Android - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu cách triển khai OpenClaw trên điện thoại Android và biến nó thành trợ lý AI từ xa hoạt động 24/7."
  ogType="article"
/>

# Tổng quan Kimi Claw Android

Bài viết này sẽ giới thiệu cách triển khai OpenClaw lên điện thoại Android, biến chiếc điện thoại nhàn rỗi thành trợ lý AI từ xa hoạt động 24/7 của bạn. Bạn có thể điều khiển điện thoại từ xa, sử dụng ứng dụng, kết nối với nhà thông minh và tạo trợ lý cá nhân hóa cho riêng mình thông qua các ứng dụng nhắn tin như Kimi, Feishu và WeChat.

Nên triển khai Kimi Claw Android trên điện thoại nhàn rỗi để tránh xung đột quyền với việc sử dụng hằng ngày. Vui lòng không tự nâng cấp phiên bản OpenClaw theo cách thủ công; các bản cập nhật đã được điều chỉnh chính thức sẽ được phân phối qua bản cập nhật phiên bản trong ứng dụng.

## Giới thiệu về Kimi Claw Android

<Frames
  src="./images/kimi-claw-android-guide/img-06.png"
/>

Yêu cầu hệ thống:

| Hạng mục | Yêu cầu |
| --- | --- |
| Hệ điều hành | Android 8.0 trở lên |
| Dung lượng lưu trữ khả dụng | Tối thiểu 5GB |
| Mạng | Cần có kết nối mạng ổn định |
| Tài khoản | Gói thuê bao Kimi Allegretto trở lên |

<Callout type="info">
Nên dùng điện thoại nhàn rỗi để tránh xung đột với việc sử dụng hằng ngày.
</Callout>

## Tải xuống và cài đặt
### Tải Kimi Claw Android

Bạn có thể tải về theo các cách sau:

#### Cách 1: Quét mã QR để tải từ trang web.
Đăng nhập vào [kimi.com](https://kimi.com), tìm mục "Tải Kimi Claw Android" và dùng điện thoại Android quét mã QR trên trang để tải về.

<Frames
  src="./images/kimi-claw-android-guide/img-03.png"
/>

#### Cách 2: Tải trực tiếp từ Google Play
Tìm "Kimi Claw" trong cửa hàng ứng dụng trên điện thoại và hoàn tất việc tải về

#### Cách 3: Tải ứng dụng Kimi trên di động
Mở ứng dụng Kimi, nhấn vào Kimi Claw Android, bạn cũng có thể liên kết với một phiên bản OpenClaw hiện có.

### Cấu hình ban đầu 

Khi lần đầu mở Kimi Claw Android, bạn sẽ thấy trang chào mừng. Sau khi nắm rõ các thông tin quan trọng dưới đây, hãy nhấn "Bắt đầu cấu hình" để vào quy trình thiết lập.

- Triển khai OpenClaw nhanh chóng - Triển khai OpenClaw lên điện thoại để giao tiếp qua Kimi, Feishu, v.v.
- Nên dùng điện thoại nhàn rỗi - Kimi Claw Android cần mạng ổn định để chạy, vì vậy nên dùng điện thoại nhàn rỗi
- Hãy sử dụng an toàn - OpenClaw có thể liên quan đến rủi ro về quyền riêng tư và bảo mật, vì vậy hãy thận trọng khi sử dụng.

Sau khi chọn Đồng ý với Chính sách quyền riêng tư và Thỏa thuận người dùng, hãy tiếp tục.

#### Bước 1: Cấp quyền
Kimi Claw Android cần các quyền sau để chạy ổn định trong nền. Vui lòng nhấn "Cấp quyền" lần lượt để hoàn tất việc cấp quyền.

| Quyền | Giải thích |
| --- | --- |
| Thông báo hệ thống | Hiển thị trạng thái cổng kết nối và nhắc nhở |
| Quyền truy cập dung lượng lưu trữ | Cần tối thiểu 5GB dung lượng khả dụng |
| Quyền chạy nền | Giữ cho cổng kết nối tiếp tục chạy khi chuyển sang nền |

Vì đường dẫn cài đặt khác nhau giữa các thương hiệu điện thoại, dưới đây là các bước chung:

1. Nhấn "Mở cài đặt" để chuyển đến trang cài đặt điện thoại
2. Vào danh sách quản lý ứng dụng và chọn Kimi Claw Android
3. Bật công tắc tự khởi động
4. Chọn "Cho phép hoàn toàn hành vi nền" trong phần Quản lý tiêu thụ điện
5. Quay lại Kimi Claw Android, nhấn "Tôi đã xong" để tiếp tục cài đặt

#### Bước 2: Cấu hình tài khoản Kimi

1. Nhấn "Đi đến cấu hình" để chuyển sang ứng dụng Kimi cấp quyền
2. Sau khi được cấp quyền, Kimi sẽ tự động tạo một khóa API Kimi Coding Plan cho Kimi Claw Android
3. Nếu bạn là người dùng miễn phí, trước tiên cần kích hoạt đặc quyền thành viên. Nhấn "Đi đến nâng cấp" để kích hoạt tư cách thành viên.

#### Bước 3: Cài đặt OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-08.png"
/>

Nếu cài đặt thất bại, bạn có thể nhấn "Cài đặt lại" để thử lại. Nếu thất bại nhiều lần, vui lòng nhấn "Gặp sự cố? Gửi phản hồi" để báo cáo vấn đề.

## Hướng dẫn sử dụng Bảng điều khiển

### Giao diện chính

<Frames
  src="./images/kimi-claw-android-guide/img-14.png"
/>

Sau khi hoàn tất cấu hình, vào giao diện chính của Bảng điều khiển, bạn có thể thấy các thông tin sau:

- Trạng thái cổng kết nối OpenClaw — Đang khởi động / Đã kết nối / Đã dừng, và Thời gian hoạt động
- Kênh trò chuyện — Danh sách các kênh giao tiếp đang kết nối
- Nhật ký OpenClaw — Nhật ký gốc về hoạt động của OpenClaw
- Dùng cuộc trò chuyện Kimi — Mở ứng dụng Kimi, mở giao diện trò chuyện tương ứng với Kimi Claw Android và tự động chuyển sang Claw tương ứng.

Nếu xuất hiện lời nhắc về quyền ở phía trên Bảng điều khiển, điều đó cho thấy một số quyền chưa được cấp hoặc đã hết hạn. Vui lòng làm theo hướng dẫn để hoàn tất việc cấp quyền từng mục một, đảm bảo Kimi Claw Android hoạt động bình thường.

### Quản lý kênh trò chuyện

<Frames
  src="./images/kimi-claw-android-guide/img-33.png"
/>
Trong Bảng điều khiển, bạn có thể quản lý tất cả các kênh giao tiếp:

- Xem các kênh đã kết nối và trạng thái của chúng (ví dụ: Kimi - Đã kết nối, Feishu - Đã kết nối)
- Nhấn "+ Kết nối" để thêm kênh trò chuyện mới
- Nhấn vào một kênh hiện có để xem chi tiết hoặc xóa nó

<Callout type="info">
Vui lòng giữ ít nhất một kênh trò chuyện để đảm bảo giao tiếp bình thường với Kimi Claw Android.
</Callout>

### Nhật ký OpenClaw

- Tìm kiếm — Tìm nội dung nhật ký theo từ khóa
- Lọc theo cấp độ — Lọc theo cấp độ nhật ký (Info / Warning / Error, v.v.)
- Tự động cuộn xuống cuối — Tự động cuộn đến nhật ký mới nhất
- Làm mới — Làm mới nội dung nhật ký theo cách thủ công

<Frames
  src="./images/kimi-claw-android-guide/img-16.png"
/>

### Cài đặt

<Frames
  src="./images/kimi-claw-android-guide/img-21.png"
/>
Nhấn Cài đặt để vào trang cài đặt:

**Lớp chức năng:**

- ClawHub Skills: Tự động liên kết với trang web chính thức ClawHub và quản lý các kỹ năng khả dụng cho Kimi Claw Android
- Không gian làm việc OpenClaw: Vào thư mục tệp cấu hình OpenClaw cục bộ và chỉnh sửa tùy chọn cá nhân

**Lớp hệ thống:**

<Frames
  src="./images/kimi-claw-android-guide/backup.png"
/>
- Sao lưu & Khôi phục: Sao lưu cấu hình và lịch sử OpenClaw hiện tại, đồng thời hỗ trợ khôi phục cấu hình và bản ghi trước đó
- Dịch vụ trợ năng: Theo dõi quyền dịch vụ trợ năng của điện thoại
- Quyền chạy nền: Theo dõi quyền chạy nền của điện thoại
- Nâng cấp phiên bản: Theo dõi phiên bản, nhấn để tự động nâng cấp

**Giới thiệu:**

- Trợ giúp: Hướng dẫn về các khuyến nghị sử dụng cơ bản
- Phản hồi: Gửi phản hồi
- Thỏa thuận người dùng: Đọc Thỏa thuận người dùng
- Chính sách quyền riêng tư: Đọc Chính sách quyền riêng tư

#### ClawHub Skills

Tự động liên kết với trang web chính thức ClawHub và quản lý các kỹ năng khả dụng cho Kimi Claw Android. Bạn có thể tải xuống và cài đặt Skills để mở rộng khả năng của Claw.

#### Không gian làm việc OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-19.png"
/>

#### Sao lưu và khôi phục

Kimi Claw Android cung cấp cả chức năng sao lưu tự động và thủ công để đảm bảo lịch sử và cấu hình OpenClaw của bạn không bị mất.

Sao lưu tự động

Kimi Claw Android sẽ tự động sao lưu lịch sử và cấu hình OpenClaw hiện tại theo định kỳ, đóng gói thành một tệp nén để lưu trữ. Bạn không cần thao tác thủ công, hệ thống sẽ tự động hoàn tất ở chế độ nền.

Sao lưu thủ công:

Nếu muốn ghi lại trạng thái tại một thời điểm cụ thể, bạn cũng có thể chủ động nhấn Sao lưu để lưu thủ công bản chụp lịch sử và cấu hình hiện tại. Nhấn Sao lưu để xuất tất cả bản sao lưu cấu hình hiện tại.

**Khôi phục cấu hình:**

Kimi Claw Android hỗ trợ khôi phục về các trạng thái cấu hình trước đó. Ứng dụng cũng hỗ trợ cả trạng thái sao lưu tự động lẫn trạng thái sao lưu chủ động của Kimi Claw Android.

Trong các trường hợp sau, bạn có thể khôi phục về trạng thái trước đó bằng chức năng khôi phục:

- Khi gỡ cài đặt hoặc cài đặt lại ứng dụng khiến lịch sử biến mất, các bản ghi trước đây có thể được khôi phục
- Khi cần chuyển đổi cấu hình Claw, bạn có thể khôi phục về trạng thái cấu hình đã lưu trước đó
- Khi đổi điện thoại và triển khai lại, chỉ cần nhập tệp sao lưu để khôi phục

Nhấn vào tệp sao lưu tương ứng trong danh sách sao lưu, bạn có thể tự động khôi phục lịch sử và cấu hình về thời điểm đó, đảm bảo các bản ghi trước đây không bị xóa.

## Cấu hình kênh trò chuyện

### Kimi
Kimi là kênh giao tiếp mặc định, sẽ tự động kết nối sau khi hoàn tất cấu hình tài khoản Kimi trong quy trình Onboarding mà không cần thao tác bổ sung.

Sau khi hoàn tất cài đặt và cấu hình, Kimi Claw Android của bạn sẽ tự động xuất hiện trên trang Chuyển đổi Bot của ứng dụng Web (kimi.com). Sau khi nhấn để chuyển đổi, ảnh đại diện và luồng trò chuyện sẽ được chuyển đổi đồng bộ.

Kimi Claw Android chỉ hỗ trợ chỉnh sửa tên Bot và xóa Bot trong phần quản lý Bot.

### Feishu
<Frames
  src="./images/kimi-claw-android-guide/img-25.png"
/>

Hỗ trợ ba cách kết nối:

Cách 1: Mở Feishu để tạo

Nhấn "Mở Feishu để tạo", hoàn tất việc tạo ứng dụng trong Feishu theo hướng dẫn, và trạng thái sẽ tự động cập nhật thành "Đã kết nối".

Cách 2: Quét mã QR để tạo

1. Nhấn "Quét mã QR để tạo"
2. Dùng Feishu để quét mã QR
3. Hoàn tất việc tạo ứng dụng Feishu trong trình duyệt

**Cách 3: Nhập thủ công thông tin Bot**

1. Nhấn "Nhập thủ công thông tin Bot"
2. Nhập App ID và App Secret
3. Nhấn "Thêm" để hoàn tất kết nối

### WeChat
Kênh WeChat cần cài đặt WeChat Claw ở phía WeChat trước, và Kimi Claw Android sẽ giao tiếp thông qua thiết bị đầu cuối WeChat Claw

Bạn cần hoàn tất việc cài đặt WeChat Claw theo hướng dẫn chính thức của WeChat trước. Việc cài đặt hoàn tất khi WeChat ClawBot xuất hiện trên trang trò chuyện.

Vào Kimi Claw Android, kết nối với kênh WeChat và hoàn tất quy trình bằng cách quét mã QR với WeChat

### Telegram

<Frames
  src="./images/kimi-claw-android-guide/img-34.png"
/>

Kimi Claw Android hỗ trợ tích hợp Telegram, người dùng cần lấy bot token và user ID của mình trước.

## Tự động hóa

Một trong những khả năng cốt lõi của Kimi Claw Android là điều khiển các ứng dụng trên điện thoại để hoàn thành nhiều tác vụ khác nhau. Sau khi gửi lệnh cho Claw qua các kênh trò chuyện như Kimi, Feishu và WeChat, Claw sẽ tự động mở ứng dụng tương ứng trên điện thoại, thực hiện một loạt thao tác như người thật, và cuối cùng hoàn thành những tác vụ bạn chỉ định.

### Nguyên lý hoạt động

Khi bạn gửi lệnh tác vụ cho Claw qua kênh trò chuyện, Claw sẽ:

1. Hiểu yêu cầu tác vụ của bạn
2. Tự động mở ứng dụng tương ứng trên điện thoại
3. Hoàn thành tác vụ từng bước bằng cách mô phỏng các thao tác người dùng (nhấn, vuốt, nhập liệu, v.v.)
4. Chụp ảnh màn hình trong quá trình thực hiện để bạn dễ dàng xem lại quy trình
5. Báo cáo kết quả thực hiện cho bạn sau khi hoàn thành tác vụ

### Các tình huống sử dụng điển hình

#### Mua sắm và tiêu dùng

Tìm kiếm sản phẩm, thêm vào giỏ hàng, xem đơn hàng, nhận khuyến mãi, v.v. trên các nền tảng như Taobao, Tmall và Meituan.

#### Di chuyển và dẫn đường

Tra cứu giá taxi, kiểm tra lịch tàu điện ngầm, tìm khách sạn lân cận, đặt chuyến đi, v.v. trên Amap.

#### Mạng xã hội và nội dung

Kiểm tra tin nhắn, lướt nội dung, tìm kiếm sản phẩm, thực hiện các thao tác tương tác, v.v. trên các nền tảng như WeChat, Rednote và Douyin.

## Mẹo sử dụng

### Điều khiển điện thoại qua phần mềm trò chuyện

Sau khi hoàn tất cấu hình, bạn có thể gửi lệnh cho Claw trên Kimi, Feishu và WeChat để điều khiển từ xa các ứng dụng trên điện thoại Android. Ví dụ:

- Mở WeChat giúp tôi và kiểm tra tin nhắn mới nhất
- Mở bản đồ và tìm nhà hàng lân cận
- "Kiểm tra giúp tôi lịch xem hôm nay có gì"

### Sử dụng ClawHub Skills

<Frames
  src="./images/kimi-claw-android-guide/img-18.png"
/>
Kimi Claw Android được tích hợp sẵn ClawHub, một thư viện kỹ năng. Bạn có thể quản lý và cài đặt các kỹ năng trong phần cài đặt để mở rộng thêm khả năng cho Claw.

Các tình huống phù hợp để dùng Skills:
- Tổ chức thông tin: Tổng hợp tin tức, So sánh sản phẩm cạnh tranh
- Phân tích dữ liệu: Đánh giá thị trường, Diễn giải dữ liệu
- Tự động hóa quy trình làm việc: Một quy trình hoàn chỉnh từ phân rã yêu cầu đến đầu ra

### Đồng thời trực tuyến trên nhiều kênh
Bạn có thể kết nối nhiều kênh như Kimi, Feishu và WeChat cùng lúc, và trò chuyện với Claw trên các ứng dụng nhắn tin khác nhau. Chỉ cần nhấn "+ Kết nối" trong phần Quản lý kênh của Bảng điều khiển để thêm chúng.

## Bảo mật và ứng dụng bị hạn chế

### Hướng dẫn an toàn

Trước khi sử dụng Kimi Claw Android, vui lòng lưu ý các biện pháp an toàn sau:

1. Dùng điện thoại nhàn rỗi — Kimi Claw Android sẽ chiếm dụng quyền hệ thống của điện thoại, có thể ảnh hưởng đến việc sử dụng hằng ngày. Nên dùng điện thoại nhàn rỗi

2.  Cô lập dữ liệu nhạy cảm — Kimi Claw Android sẽ đọc dữ liệu tệp cục bộ, vui lòng dọn dẹp hoặc cô lập thông tin nhạy cảm trước

3. Bảo vệ ứng dụng tài chính — Hệ thống đã tự động chặn truy cập đến các ứng dụng ngân hàng, thanh toán, chứng khoán và bảo hiểm để bảo vệ tài sản

### Danh sách ứng dụng bị hạn chế

Vì lý do an toàn tài chính và quyền riêng tư, các loại ứng dụng sau bị Kimi Claw Android tự động chặn truy cập và không thể vận hành từ xa:

1. Mạng xã hội

| Gói | Mô tả rủi ro |
| --- | --- |
| wechat | Liên quan đến các chức năng mạng xã hội riêng tư và thanh toán quan trọng |

2. Ngân hàng

| Gói | Tên ứng dụng | Mô tả rủi ro |
| --- | --- | --- |
| com.android.bankabc | abc, Ngân hàng Nông nghiệp Trung Quốc | Ngân hàng Nông nghiệp Trung Quốc, có thể thực hiện các thao tác như chuyển khoản và quản lý tài sản |
| com.bankcomm.main | bocom, Ngân hàng Giao thông | Ngân hàng Giao thông, hỗ trợ các thao tác như chuyển khoản và quản lý tài sản |
| com.bjbk.im | Ngân hàng Bắc Kinh | Ngân hàng Bắc Kinh, có thể thực hiện các thao tác như chuyển khoản và quản lý tài sản |
| com.cebbank.im | Ngân hàng Everbright | Ngân hàng Everbright Trung Quốc, có thể thực hiện các thao tác như chuyển khoản và quản lý tài sản |
| com.cgb.im | Ngân hàng Guangfa | Ngân hàng Guangfa, có thể thực hiện các thao tác như chuyển khoản và quản lý tài sản |
| com.chinamworld.bocmbci | boc, Ngân hàng Trung Quốc | Ngân hàng Trung Quốc, một trong Tứ đại Ngân hàng |
| com.chinamworld.main | CCB, Ngân hàng Xây dựng Trung Quốc | Ngân hàng Xây dựng Trung Quốc, một trong Tứ đại Ngân hàng |
| com.cib.im | Ngân hàng Công nghiệp | Ngân hàng Công nghiệp, có thể thực hiện các thao tác như chuyển khoản và quản lý tài sản |
| com.citic.im | Ngân hàng CITIC Trung Quốc | Ngân hàng CITIC Trung Quốc, hỗ trợ các thao tác như chuyển khoản và quản lý tài sản |
| com.cmbc.im | Ngân hàng Minsheng | Ngân hàng Minsheng Trung Quốc, có thể thực hiện các thao tác như chuyển khoản và quản lý tài sản |
| com.cmbchina.ccd.pluto.customerView | cmb, Ngân hàng Chiêu Thương | Ngân hàng Chiêu Thương, hỗ trợ các thao tác như chuyển khoản và quản lý tài sản |
| com.hxb.im | Ngân hàng Huaxia | Ngân hàng Huaxia, có thể thực hiện các thao tác như chuyển khoản và quản lý tài sản |
| com.hzbk.im | Ngân hàng Hàng Châu | Ngân hàng Hàng Châu, hỗ trợ các thao tác như chuyển khoản và quản lý tài sản |
| com.icbc | ICBC, Ngân hàng Công thương Trung Quốc | Ngân hàng Công thương Trung Quốc, một trong Tứ đại Ngân hàng |
| com.jsbk.im | Ngân hàng Giang Tô | Ngân hàng Giang Tô, hỗ trợ các thao tác như chuyển khoản và quản lý tài sản |
| com.nbbk.im | Ngân hàng Ninh Ba | Ngân hàng Ninh Ba, hỗ trợ các thao tác như chuyển khoản và quản lý tài sản |
| com.pingan.paces.cloud | Ping An Pocket Bank | Ứng dụng di động Ngân hàng Ping An |
| com.psbc.im | Ngân hàng Tiết kiệm Bưu điện | Ngân hàng Tiết kiệm Bưu điện Trung Quốc |
| com.shbk.im | Ngân hàng Thượng Hải | Ngân hàng Thượng Hải, hỗ trợ các thao tác như chuyển khoản và quản lý tài sản |
| com.spdb.im | Ngân hàng Phát triển Phố Đông Thượng Hải | Ngân hàng Phát triển Phố Đông Thượng Hải |

3. Thanh toán

| Gói | Tên ứng dụng | Mô tả rủi ro |
| --- | --- | --- |
| com.eg.android.AlipayGphone | Alipay | Alipay, nền tảng thanh toán bên thứ ba lớn nhất Trung Quốc |
| com.paypal.android.p2pmobile | paypal | PayPal, nền tảng thanh toán trực tuyến lớn nhất thế giới |
| com.unionpay | ysf, Cloud Flash Payment | UnionPay Cloud Flash Payment của Trung Quốc, công cụ thanh toán bằng thẻ ngân hàng |
| com.squareup.cash | cashapp | Cash App, nền tảng thanh toán di động của Mỹ |
| com.venmo | venmo | Venmo, nền tảng thanh toán P2P của Mỹ |
| com.google.android.apps.walletnfcrel | googlewallet, wallet | Google Wallet, ví thanh toán của Google |

4. Chứng khoán

| Gói | Tên ứng dụng | Mô tả rủi ro |
| --- | --- | --- |
| com.citics.pbm | CITIC, Xin E Tou | Ứng dụng giao dịch Chứng khoán CITIC |
| com.cmschina.stock | Chứng khoán Chiêu Thương | Ứng dụng giao dịch Chứng khoán Chiêu Thương |
| com.csc108.newpda | CITIC Construction Investment | Ứng dụng giao dịch Chứng khoán CITIC Construction Investment |
| com.dfzq.stock | Chứng khoán Orient | Ứng dụng giao dịch Chứng khoán Orient |
| com.eastmoney.android.berlin | eastmoney, Orient Fortune | East Money, nền tảng giao dịch cổ phiếu/quỹ |
| com.ebscn.stock | ebscn, Golden Sunshine | Ứng dụng giao dịch Chứng khoán Everbright |
| com.foundersc.stock | founder, Xiaofang | Ứng dụng giao dịch Chứng khoán Founder |
| com.gf.gfstocks | GF Easy Gold Rush | Ứng dụng giao dịch Chứng khoán GF |
| com.guosen.stock | guosen, Golden Sun | Ứng dụng giao dịch Chứng khoán Guoxin |
| com.guotai.junan.guiyang | Guotai Junan | Ứng dụng giao dịch Chứng khoán Guotai Junan |
| com.hexin.plat.android | ths, Flush | Flush, nền tảng giao dịch và thị trường cổ phiếu/quỹ |
| com.htsc.mdc | Huatai, Zhangle Fortune Link | Ứng dụng giao dịch Chứng khoán Huatai |
| com.htsec.android | Chứng khoán Haitong | Ứng dụng giao dịch Chứng khoán Haitong |
| com.pingan.stock | Chứng khoán Ping An | Ứng dụng giao dịch Chứng khoán Ping An |
| com.tfzq.stock | Chứng khoán Tianfeng | Ứng dụng giao dịch Chứng khoán Tianfeng |
| com.xueqiu.android | xueqiu, Snowball | Xueqiu, cộng đồng cổ phiếu và nền tảng giao dịch |
| com.xyzq.stock | Chứng khoán Công nghiệp | Ứng dụng giao dịch Chứng khoán Công nghiệp |

5. Bảo hiểm / Tài chính

| Gói | Tên ứng dụng | Mô tả rủi ro |
| --- | --- | --- |
| com.pingan.lifeinsurance | Ứng dụng Dịch vụ Tài chính Ping An | Bảo hiểm Ping An Trung Quốc, cho phép các thao tác như mua bảo hiểm và bồi thường |
| com.jd.jrapp | JD Finance | JD Finance cung cấp các dịch vụ tài chính như quản lý tài sản, cho vay và thanh toán |

## Tính năng được hỗ trợ và không được hỗ trợ

### Tính năng được hỗ trợ

| Chức năng | Mô tả |
| --- | --- |
| Điều khiển ứng dụng di động từ xa | Sử dụng từ xa các ứng dụng trên điện thoại qua lệnh phần mềm trò chuyện |
| Giao tiếp đa kênh | Hỗ trợ giao tiếp với Claw qua Kimi, Feishu và WeChat |
| Xem nhật ký theo thời gian thực | Xem nhật ký hoạt động của cổng kết nối OpenClaw, hỗ trợ tìm kiếm và lọc theo cấp độ |
| Sao lưu và khôi phục cấu hình | Sao lưu cấu hình hiện tại, có thể khôi phục sau khi cài đặt lại hoặc đổi thiết bị |
| Giám sát trạng thái cổng kết nối | Xem theo thời gian thực trạng thái kết nối và thời gian hoạt động của cổng kết nối OpenClaw |
| Quản lý kênh | Thêm, xem và xóa các kênh giao tiếp |
| Bảng điều khiển OpenClaw | Quản lý OpenClaw qua Bảng điều khiển tích hợp |

### Tính năng không được hỗ trợ và giới hạn

| Lĩnh vực | Giới hạn |
| --- | --- |
| Hỗ trợ nền tảng | Hiện chỉ hỗ trợ thiết bị Android; không hỗ trợ iOS |
| Tư cách thành viên | Chỉ dành cho thành viên Kimi từ Allegretto trở lên |
| Ứng dụng tài chính | Các ứng dụng liên quan đến ngân hàng, thanh toán, chứng khoán và bảo hiểm bị cấm truy cập (xem Chương 6 để biết chi tiết) |
| Quản lý Bot | Bot của Kimi Claw Android chỉ hỗ trợ chỉnh sửa tên và xóa, không hỗ trợ các cấu hình Bot khác |
| Thiết bị đầu cuối | Kimi Claw Android hiện chưa cung cấp khả năng thao tác trực tiếp bằng dòng lệnh |

## Câu hỏi thường gặp (FAQ)

<Callout type="info">
Dưới đây là phần tham khảo cho Kimi Claw Android.
</Callout>

### Cài đặt và cấu hình

#### Tôi nên làm gì nếu việc cài đặt OpenClaw thất bại?

- Vui lòng đảm bảo có đủ dung lượng lưu trữ (tối thiểu 5GB), và không thoát ứng dụng hoặc khóa màn hình trong quá trình cài đặt
- Nhấn "Cài đặt lại" để thử lại
- Nếu gặp thất bại nhiều lần, vui lòng nhấn "Gặp sự cố, gửi phản hồi" để báo cáo vấn đề

#### Sau khi cấp quyền, trạng thái không cập nhật?

- Với một số thương hiệu điện thoại, việc cấp quyền cần khởi động lại ứng dụng mới có hiệu lực
- Vui lòng quay lại Kimi Claw Android. Nếu trạng thái vẫn chưa cập nhật, bạn có thể thử đóng và mở lại ứng dụng

#### Người dùng miễn phí có thể sử dụng không?

- Hiện tại, bạn cần kích hoạt đặc quyền thành viên Kimi từ Allegretto trở lên để sử dụng Kimi Claw Android
- Nhấn "Đi đến nâng cấp" trong các bước cấu hình tài khoản Kimi để mở

#### Khi khôi phục cấu hình, hệ thống báo "Tệp cấu hình không hợp lệ"?

- Tệp sao lưu có thể bị hỏng hoặc thuộc phiên bản không tương thích
- Vui lòng dùng "Cấu hình một chạm bằng ứng dụng Kimi" để cấu hình lại

### Kết nối và độ ổn định

#### Tại sao trạng thái cổng kết nối luôn hiển thị "Đang khởi động"?

- Kiểm tra xem kết nối mạng có bình thường không
- Xác nhận tất cả các quyền cần thiết (thông báo, tối ưu hóa pin, lưu trữ, tự khởi động) đã được cấp
- Thử nhấn "Sao lưu và khởi động lại" trong phần cài đặt để khởi động lại dịch vụ cổng kết nối

#### Cổng kết nối đột nhiên bị ngắt?

- Kiểm tra xem điện thoại có vào chế độ tiết kiệm pin khiến ứng dụng nền bị dọn không
- Xác nhận "Bỏ qua tối ưu hóa pin" và "Quyền tự khởi động" đã được cấp đúng
- Kiểm tra trạng thái cổng kết nối trên Bảng điều khiển. Nếu hiển thị "Đã dừng", nhấn Khởi động lại

#### Kimi Claw Android có bị ngắt kết nối sau khi khóa màn hình điện thoại không?

- Điều này thường do chiến lược tối ưu hóa pin của điện thoại khiến các ứng dụng nền bị tắt
- Vui lòng đảm bảo các cài đặt sau đã được hoàn tất:
  - Bỏ qua tối ưu hóa pin - Đã cấp quyền
  - Quyền tự khởi động — Đã bật
  - Quản lý tiêu thụ điện — Chọn "Cho phép hoàn toàn hành vi nền"

### Kênh và giao tiếp

#### Có thể kết nối nhiều kênh trò chuyện cùng lúc không?

- Có. Bạn có thể kết nối nhiều kênh như Kimi, Feishu, WeChat, v.v. cùng lúc
- Chỉ cần nhấn "+ Kết nối" trong phần quản lý kênh của Bảng điều khiển để thêm
- Vui lòng giữ ít nhất một kênh để đảm bảo giao tiếp bình thường

#### Sau khi quét mã QR Feishu, hệ thống cứ chờ cập nhật trạng thái?

- Vui lòng đảm bảo bạn đã hoàn tất quy trình tạo ứng dụng Feishu trong trình duyệt
- Nếu lâu không có cập nhật, bạn có thể thử kết nối bằng cách nhập thủ công thông tin Bot

#### Kết nối WeChat thất bại?

- Vui lòng xác nhận thông tin xác thực WeChat Claw đã được điền chính xác và khớp với giá trị từ phần thiết lập phía WeChat
- Vui lòng làm theo hướng dẫn thiết lập WeChat Claw chính thức để tạo lại và liên kết lại thông tin xác thực nếu cần
- Kiểm tra xem mạng di động có truy cập được các dịch vụ WeChat bình thường không

#### Tại sao tôi không thấy Kimi Claw Android trong ứng dụng Kimi?

- Vui lòng xác nhận quy trình Onboarding đã hoàn tất đầy đủ (cấp quyền → cài đặt OpenClaw → cấu hình tài khoản Kimi)
- Kiểm tra xem trạng thái cổng kết nối trong Bảng điều khiển có phải "Đã kết nối" không
- Thử làm mới danh sách Bot trong ứng dụng Kimi

### Sử dụng chức năng

#### Tại sao một số ứng dụng không thể vận hành từ xa?

- Vì lý do bảo mật, các ứng dụng tài chính như ngân hàng, thanh toán, chứng khoán và bảo hiểm đã bị hệ thống tự động chặn truy cập
- Để xem danh sách đầy đủ, vui lòng tham khảo Chương 6 "Danh sách ứng dụng bị hạn chế".

#### Tại sao chúng ta cần dùng điện thoại nhàn rỗi?

- Kimi Claw Android có thể chiếm dụng quyền vận hành của điện thoại trong khi chạy, điều này có thể ảnh hưởng đến việc sử dụng bình thường của bạn
- Dùng điện thoại dự phòng có thể tránh xung đột quyền và bảo vệ dữ liệu riêng tư của bạn

#### Cách triển khai lại sau khi đổi điện thoại?

1. Xuất tệp cấu hình trong Bảng điều khiển → Cài đặt → Sao lưu & Khôi phục trên điện thoại cũ
2. Cài đặt Kimi Claw Android trên điện thoại mới
3. Chọn "Khôi phục cấu hình" ở Bước 3 và nhập tệp sao lưu trước đó.

#### Cách xem trạng thái hoạt động của Kimi Claw Android?

- Trên giao diện chính của Bảng điều khiển, bạn có thể xem trạng thái cổng kết nối và thời gian hoạt động
- Nhấn "Nhật ký thời gian thực" để xem nhật ký hoạt động chi tiết
- Thông qua chức năng tìm kiếm và lọc theo cấp độ của nhật ký, bạn có thể nhanh chóng xác định vấn đề

### Nâng cấp và phiên bản

#### Cách nâng cấp Kimi Claw Android?

- Kiểm tra và nâng cấp lên phiên bản mới nhất trong Bảng điều khiển → Cài đặt → "Nâng cấp phiên bản"
- Nên thực hiện nâng cấp trong môi trường Wi-Fi

#### Tôi có thể tự nâng cấp phiên bản OpenClaw theo cách thủ công không?

- Không nên nâng cấp thủ công. Nâng cấp thủ công có thể dẫn đến vấn đề tương thích
- Bên chính thức sẽ đẩy bản nâng cấp qua thông báo trong ứng dụng sau khi hoàn tất việc điều chỉnh

## Phản hồi và trợ giúp

Nếu bạn gặp bất kỳ vấn đề nào hoặc có góp ý trong quá trình sử dụng:

### Phản hồi trong ứng dụng

- Bảng điều khiển → Cài đặt → Phản hồi người dùng
- Trang cài đặt OpenClaw → "Nếu gặp vấn đề, hãy gửi phản hồi"

Vui lòng cung cấp các thông tin sau khi gửi phản hồi:

- ID Kimi Claw Android của bạn (hiển thị khi nhấn vào kênh Kimi)
- Kiểu máy thiết bị và phiên bản Android
- Mô tả vấn đề và ảnh chụp màn hình

<Callout type="info">
Việc cung cấp ID Kimi Claw Android giúp kỹ thuật viên nhanh chóng xác định vấn đề, vì vậy hãy đính kèm nó khi gửi phản hồi.
</Callout>
