---
title: "Sử dụng Skills trong Kimi Claw"
slug: "use-skills-in-claw"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Sử dụng Skills trong Kimi Claw - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu cách tải xuống, đồng bộ, gọi và tùy chỉnh skills trong Kimi Claw để tự động hóa quy trình làm việc hiệu quả và quản lý bộ nhớ dài hạn."
  ogType="article"
/>

# Sử dụng Skills trong Kimi Claw

Kimi Claw là một trợ lý AI mang cá tính riêng và khả năng ghi nhớ dài hạn, có thể chạy các tác vụ theo lịch ở chế độ nền, phối hợp trên nhiều nền tảng, duy trì bộ nhớ ngữ cảnh và tự động hóa những công việc tẻ nhạt như tổng hợp thông tin, theo dõi và gửi thông báo.

## Lấy và quản lý skills

### Tải skills từ Kimi

Bạn có thể tải các skill chính thức hoặc skill tùy chỉnh từ nền tảng Kimi về Claw cục bộ của mình:

1. Mở Kimi Claw và chuyển đến mục **Skills**.
2. Duyệt danh sách skill, chọn skill bạn cần và nhấn **Tải về Claw**.
3. Sau khi tải về, bạn có thể gọi skill đó trực tiếp trong Claw.

<Callout type="info">
Khi skill được cập nhật, phiên bản cục bộ sẽ không tự động ghi đè. Để có nội dung mới nhất, vui lòng tải lại thủ công.
</Callout>

### Đồng bộ skills từ Kimi Agent

Nếu bạn đã thêm skills trong Kimi Agent (bản web), Kimi Claw có thể đồng bộ và hiển thị trực tiếp các skill này mà không cần cấu hình lại.

Khi Kimi Claw phát hiện phiên bản skill không khớp giữa hai nền tảng, nó sẽ hiển thị thông báo **Cần cập nhật** bên cạnh skill. Nhấn vào để đồng bộ lên phiên bản mới nhất.

### Sử dụng thư viện skill Clawhub

Kimi Claw được tích hợp sẵn **Thư viện skill Clawhub** với các skill đã qua kiểm chứng, chất lượng cao, bao quát nhiều tình huống công việc phổ biến:

- **Tổ chức thông tin**: Tóm tắt tin tức, so sánh đối thủ cạnh tranh, mẫu biên bản cuộc họp.
- **Công việc phân tích**: Đánh giá cổ phiếu và ngành, diễn giải dữ liệu, nhận diện rủi ro.
- **Quản lý quy trình làm việc**: Toàn bộ quy trình từ phân rã yêu cầu đến bàn giao kết quả.

Vào thư viện skill, duyệt hoặc tìm kiếm các skill phù hợp với tình huống công việc của bạn rồi nhấn để cài đặt.

## Gọi skills

Trong ô nhập của Kimi Claw, có ba cách để gọi skills, tương tự như bản web:

- Gõ `/` để chọn skill từ danh sách hiện ra.
- Nhấn nút **+** bên cạnh ô nhập và chọn từ menu.
- Gõ trực tiếp tên skill.

<Callout type="warning">
Lối vào skill trên OpenClaw bên thứ ba, Kimi Claw cục bộ và Kimi Claw bản máy tính hiện chưa khả dụng.
</Callout>

## Dạy Claw cách làm việc của bạn

Ngoài việc sử dụng các skill có sẵn, bạn có thể "dạy" Claw những kinh nghiệm và phương pháp mà bạn đã tích lũy, để nó làm việc lâu dài theo thói quen của bạn. Có ba cách chính:

**Cung cấp quy trình**: Cho Claw biết các bước cụ thể bạn thực hiện khi xử lý một loại tác vụ nhất định.

**Cung cấp tiêu chuẩn**: Cho Claw biết điều bạn coi trọng nhất—độ chính xác, tốc độ, tính khả thi hay kiểm soát rủi ro.

**Cung cấp mẫu**: Cho Claw biết định dạng đầu ra bạn mong muốn. Ví dụ, nếu cấu trúc báo cáo công việc hằng ngày của bạn là "Hôm nay đã làm gì → Vấn đề gặp phải → Kế hoạch ngày mai → Cần hỗ trợ", hãy nói thẳng với Claw, và nó sẽ trình bày các báo cáo sau này theo đúng định dạng này.

### Tình huống ví dụ

Giả sử bạn là một quản lý sản phẩm và cần Kimi Claw giúp rà soát phản hồi của người dùng mỗi tuần. Bạn có thể dạy Claw như sau:

1. **Quy trình**: "Mỗi thứ Hai, sau khi thu thập phản hồi của người dùng, trước tiên phân loại theo mô-đun tính năng, sau đó gắn nhãn mức độ ưu tiên (P0-P3), và cuối cùng trích xuất các vấn đề xuất hiện nhiều lần."

2. **Tiêu chuẩn**: "Tôi coi trọng nhất tính xác thực và tính khả thi của phản hồi, vì vậy hãy loại bỏ các ý kiến trùng lặp và chỉ giữ lại những phản hồi có mô tả tình huống sử dụng cụ thể."

3. **Mẫu**: "Định dạng đầu ra: Mô-đun tính năng | Nội dung phản hồi | Mức ưu tiên | Số người dùng | Giải pháp đề xuất"

Một khi bạn nói với Claw "Giúp tôi tổng hợp phản hồi của người dùng tuần này", nó sẽ tự động xử lý theo các tiêu chuẩn này mà bạn không cần phải giải thích lại mỗi lần.

<Callout type="tip">
Nhờ kết hợp giữa skills và phương pháp làm việc được tùy chỉnh, Kimi Claw có thể hoàn thành tác vụ nhanh hơn và chính xác hơn, liên tục tạo ra kết quả phù hợp với thói quen của bạn.
</Callout>

## Lưu ý khi dùng trên di động

Khi sử dụng skills trên di động, hãy lưu ý các giới hạn sau:

- Nếu bạn đã thêm skills trên bản web, menu dấu cộng sẽ hiển thị lối vào skill. Nhấn vào sẽ chèn skill dưới dạng văn bản vào ô nhập.
- Nếu skills chưa được thêm trên bản web, menu dấu cộng trên di động sẽ không hiển thị lối vào skill.
- Nếu lịch sử trò chuyện chứa nội dung do skill tạo ra, một thông báo sẽ xuất hiện: **Nội dung do skill tạo, hiện chỉ được hỗ trợ trên nền tảng web Kimi**.

Chúng tôi khuyên bạn nên thực hiện một số thao tác quản lý skill (như tạo, chỉnh sửa, xóa) trên nền tảng web, còn di động chủ yếu dùng để gọi các skill đã có sẵn.
