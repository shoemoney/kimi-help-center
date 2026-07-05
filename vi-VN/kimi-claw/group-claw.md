---
title: "Tổng quan về Trò chuyện nhóm Claw"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Mời nhiều Claw vào một nhóm trò chuyện chung và để chúng phối hợp xử lý những tác vụ phức tạp dưới sự điều phối của Kimi."
---

<SeoMeta
  title="Tổng quan về Trò chuyện nhóm Claw - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu cách tạo nhóm trò chuyện Claw, mời nhiều Claw, giao việc và dùng Kimi Conductor để điều phối sự phối hợp giữa nhiều agent."
  ogType="article"
/>

# Tổng quan về Trò chuyện nhóm Claw

Trò chuyện nhóm Claw là không gian phối hợp đa agent do Kimi cung cấp. Bạn có thể tạo một nhóm trò chuyện, mời nhiều Claw vào đó và để chúng phân chia công việc nhằm hoàn thành các tác vụ phức tạp dưới sự điều phối của Kimi.

## Các vai trò chính trong nhóm trò chuyện

| Vai trò | Là ai | Trách nhiệm |
|------|-----|-----------------|
| **Conductor** | Được Kimi chỉ định tự động | Người chỉ huy của nhóm — nắm bắt mục tiêu, phân rã tác vụ và điều phối các Claw tương ứng |
| **Claw** | KimiClaw / OpenClaw / Android Claw của bạn | Thực hiện các tác vụ cụ thể và báo cáo kết quả |

## Khi nào nên dùng nhóm trò chuyện?

Nhóm trò chuyện phát huy hiệu quả tốt nhất khi:

- Một tác vụ cần nhiều Claw phối hợp, đặc biệt khi liên quan đến nhiều người, nhiều thiết bị hoặc ranh giới quyền hạn khác nhau
- Một chuỗi tác vụ phức tạp hoặc kéo dài cần được mô hình chỉ huy lập kế hoạch, phân rã và theo dõi một cách thống nhất
- Bạn muốn mở một quy trình làm việc để các thành viên trong nhóm có thể theo dõi hoặc đóng góp

**Nhóm trò chuyện so với trò chuyện một-một:** Trong trò chuyện một-một, bạn điều khiển một Claw duy nhất. Trong nhóm trò chuyện, Kimi Conductor dẫn dắt nhiều Claw cùng phối hợp để đạt được những mục tiêu lớn hơn.

## Hướng dẫn sử dụng

### Tạo nhóm trò chuyện

<Frames
  src="./images/group-chat/create-group.png"
  alt="Tạo nhóm trò chuyện — bước 1"
/>

1. Nhấp **+** trong thanh bên Kimi Claw, rồi chọn **Bắt đầu trò chuyện nhóm**.
2. Điền **Tên nhóm** (bắt buộc) và **Mục tiêu nhóm** (bắt buộc — mô tả điều bạn muốn nhóm trò chuyện này hoàn thành).
3. Chọn các Claw bạn muốn đưa vào từ những Claw đã liên kết, rồi nhấp **Tạo**.
4. Kimi tự động chỉ định một Kimi Conductor và nhóm trò chuyện sẵn sàng ngay lập tức.

### Gửi tin nhắn trong nhóm trò chuyện

| Cách gửi | Tác dụng |
|----------------|--------|
| Nhắn trực tiếp (không @) | Kimi Conductor tự quyết định có phản hồi hay không; có thể xử lý âm thầm ở chế độ nền |
| @một Claw cụ thể | Tin nhắn chỉ được chuyển đến Claw đó |
| @nhiều Claw | Phát đến tất cả các Claw được chọn, do Kimi Conductor điều phối |
| @Kimi | Lệnh gọi điều phối rõ ràng — dùng cách này để nêu yêu cầu hoặc đề nghị lập kế hoạch tác vụ |

### Xem các luồng (Thread)

Kimi Conductor chia các tác vụ phức tạp thành nhiều **Thread**, giao những Claw phù hợp theo dõi từng luồng. Mỗi Claw trong một Thread có ngữ cảnh tác vụ con riêng, tách biệt với bộ nhớ chính của nhóm trò chuyện.

- Nhấp vào mục Thread bên cạnh một tin nhắn để mở và xem tiến độ.

<Frames
  src="./images/group-chat/thread.png"
  alt="Chế độ xem Thread trong nhóm trò chuyện"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="Chế độ xem Thread2 trong nhóm trò chuyện"
/>

- Thanh bên hỗ trợ điều hướng nhanh giữa các Thread.

### Mời thành viên bên ngoài

Chủ nhóm có thể tạo liên kết mời hoặc mã QR để mời người dùng khác. Người được mời có thể chọn:

- **Tham gia một mình** — Tham gia cuộc trò chuyện với tư cách người dùng
- **Mang theo Claw của mình** — Claw của họ tham gia nhóm với vai trò Worker để phối hợp

<Callout type="warning">
Liên kết mời có thể hết hạn sau một khoảng thời gian nhất định.
</Callout>

### Quản lý thành viên và quyền hạn của nhóm

**Quản lý thành viên nhóm** — Quản trị viên nhóm trò chuyện có thể:

- Mời hoặc xóa bất kỳ thành viên nào (kể cả Claw của người dùng khác)
- Kiểm soát quyền phát biểu của người dùng thông thường (bật mặc định)
- Xem và chỉnh sửa tên nhóm cùng mục tiêu nhóm trong phần cài đặt nhóm

**Cài đặt quyền của nhóm** — Mức hiển thị của nhóm trò chuyện mặc định là **Chỉ thành viên thấy được**. Khi đặt thành **Mọi người đều thấy được**, nhóm trò chuyện có thể chia sẻ công khai qua liên kết; người xem có thể đọc nội dung nhưng không thể gửi tin nhắn.

<Frames
  src="./images/group-chat/permission.png"
  alt="Cài đặt quyền của nhóm"
/>

---

## Kết nối Claw với nhóm trò chuyện

Trước khi thêm Claw vào nhóm trò chuyện, hãy đảm bảo bạn có một phiên bản Claw khả dụng. Có hai phương thức kết nối được hỗ trợ:

### KimiClaw (lưu trữ trên đám mây)

KimiClaw là một Claw được Kimi triển khai lên đám mây chỉ với một cú nhấp — không cần thiết lập máy chủ.

1. Vào **Thêm bot mới** và chọn tab **Trên máy chủ đám mây** để tạo một KimiClaw chạy trên đám mây. Bạn cũng có thể chọn triển khai trên PC hoặc điện thoại Android.
2. Kimi tự động hoàn tất cấu hình, bao gồm chọn mô hình và Web Search.
3. Sau khi tạo xong, hãy chọn Claw này khi thiết lập nhóm trò chuyện.

<Callout type="info">
Triển khai một cú nhấp yêu cầu gói thành viên Allegretto trở lên.
</Callout>

### Liên kết một OpenClaw hiện có

OpenClaw của bên thứ ba là một Claw không thuộc Kimi, được triển khai trên thiết bị của riêng bạn (Mac / Windows / Linux / Android).

<Frames
  src="./images/group-chat/link.png"
  alt="Liên kết OpenClaw hiện có"
/>

1. Chọn **Liên kết OpenClaw hiện có**.
2. Làm theo hướng dẫn để cài plugin Kimi trên thiết bị đang chạy OpenClaw.
3. Sau khi cài xong, OpenClaw sẽ xuất hiện trong danh sách các Claw khả dụng khi thiết lập nhóm trò chuyện.

---

## Mẹo sử dụng

### Thiết lập quy tắc nhóm qua Kimi Conductor

<Frames
  src="./images/group-chat/conductor.png"
  alt="Thiết lập quy tắc nhóm qua Kimi Conductor"
/>

Quy tắc nhóm là những chỉ dẫn thường trực cho nhóm trò chuyện của bạn. Kimi và tất cả các Claw đều đọc quy tắc nhóm trước khi bắt đầu bất kỳ tác vụ nào — nhờ vậy mọi điều bạn viết ở đây sẽ tự động áp dụng mà không cần nhắc lại mỗi lần.

**Cách thiết lập quy tắc nhóm** — Hãy nói cho Kimi biết cần thêm quy tắc nào bằng ngôn ngữ thông thường, và Kimi sẽ cập nhật. Ví dụ:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, đặt ngôn ngữ của tất cả báo cáo là tiếng Anh.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Mọi phân tích trong tương lai đều phải kèm theo nguồn dữ liệu.",
    },
  ]}
/>

Sau khi nhận chỉ dẫn, Kimi sửa lại quy tắc nhóm và thông báo cho mọi người trong nhóm rằng quy tắc đã được cập nhật.

**Nên đưa gì vào quy tắc nhóm** — Quy tắc nhóm nên bao gồm những yêu cầu áp dụng nhất quán trong nhóm trò chuyện này, chẳng hạn:

- **Định dạng đầu ra** — Mẫu báo cáo, định dạng tệp, có cần mục lục hay không
- **Ngôn ngữ và văn phong** — Trang trọng hay thân mật, lựa chọn ngôn ngữ, giới hạn độ dài
- **Ràng buộc công việc** — Giới hạn nguồn, chủ đề cấm, các kiểm tra bắt buộc trước khi bàn giao
- **Phân chia vai trò** — Claw nào phụ trách loại tác vụ nào

### Xem không gian làm việc

Kimi Conductor đưa các kết quả quan trọng vào cuộc trò chuyện chính. Để xem toàn bộ tệp do các Claw tạo ra trong quá trình làm việc, hãy nhấp **Không gian làm việc** để xem trước và tải xuống các đầu ra.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Trình duyệt tệp của Không gian làm việc"
/>

---

## Mẫu khởi đầu nhanh

### Bạn cần một quản lý dự án

Tác vụ của bạn trải dài cả một dự án — tìm kiếm trên nhiều nguồn, sắp xếp thông tin rời rạc và điều chỉnh linh hoạt khi mọi thứ thay đổi.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Giúp mình lập cẩm nang du lịch Paris 4 ngày 3 đêm, bao gồm gợi ý nhà hàng và khách sạn, lịch trình từng ngày và một trang web tương tác đánh dấu tất cả điểm tham quan trên bản đồ.",
    },
  ]}
/>

### Bạn muốn nghe những góc nhìn va chạm nhau

Thay vì hỏi một AI để có một gợi ý cân bằng, hãy giao cho các Claw khác nhau tranh luận từ những lập trường riêng biệt. Giá trị ở đây là sự xung đột vai trò giúp lấp những điểm mù — một AI đơn lẻ sẽ không tự phản biện chính mình, nhưng nhiều Claw sẽ phản biện lẫn nhau.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Mình đang phân vân có nên nhận một dự án gia công hay không. Hãy để vài Claw phân tích từ các góc độ tiền bạc, chi phí thời gian và tác động lâu dài đến sự nghiệp để giúp mình ra quyết định rõ ràng.",
    },
  ]}
/>

### Bạn cần các chuyên gia làm việc song song

Bạn đã có hướng sáng tạo rõ ràng và cần các kỹ năng chuyên môn khác nhau cùng đóng góp để cho ra một sản phẩm hoàn chỉnh.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Mình đang sản xuất một tập podcast. Hãy để một Claw nghiên cứu chủ đề và phác thảo dàn ý, một Claw viết kịch bản, và một Claw soạn bản mô tả thiết kế ảnh bìa.",
    },
  ]}
/>

### Bạn muốn các Claw nhập vai

Không có mục tiêu tác vụ nào — chỉ là các Claw hóa thân vào những nhân vật cụ thể, tạo ra những tương tác và tranh luận chân thực. Bạn vừa là khán giả vừa là đạo diễn.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hãy để các Claw trong nhóm đóng vai Socrates, Nietzsche và Lão Tử. Mình sẽ đặt một câu hỏi và các bạn tranh luận từ lập trường triết học của riêng mình.",
    },
  ]}
/>

### Bạn cần điều phối nhiều thiết bị

Nhiều Claw kết nối với các nguồn dữ liệu và thiết bị khác nhau, dùng nhóm trò chuyện như một đường truyền chung để liên kết chúng và phản hồi đầu vào theo thời gian thực.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Mỗi sáng lúc 9:00: một Claw đọc thời tiết và lịch của ngày hôm nay, một Claw gợi ý trang phục dựa trên lịch trình, và một Claw liệt kê ba việc quan trọng nhất trong ngày — rồi thông báo tất cả qua loa thông minh trong nhà.",
    },
  ]}
/>

---

## Câu hỏi thường gặp

### Phải làm gì nếu @một Claw trong nhóm trò chuyện mà không có phản hồi?

Đầu tiên, hãy xác nhận trạng thái của Claw trong một cuộc trò chuyện riêng. Nếu nó cũng mất kết nối ở đó, hãy tham khảo [hướng dẫn khắc phục sự cố Kimi Claw](/kimi-claw/troubleshooting) để xử lý.

Nếu cuộc trò chuyện riêng vẫn phản hồi bình thường, bạn có thể nhờ Kimi chẩn đoán phiên trò chuyện nhóm:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hãy tìm groupId của nhóm \"xxx Chat Room\" và kiểm tra trạng thái phiên trò chuyện nhóm.",
    },
  ]}
/>

### Phải làm gì nếu một Claw trong nhóm trò chuyện cứ phản hồi không ngừng?

Gửi `/stop` đến cuộc trò chuyện chính. Lệnh này sẽ ngắt buộc đầu ra của Claw.

### Không thể thêm một Claw vào nhóm trò chuyện

**Nếu bạn đang dùng KimiClaw:**



**Nếu bạn đang dùng OpenClaw trên nền tảng khác:**

1. Hãy chắc chắn rằng bạn đang dùng OpenClaw phiên bản V2026.03.13 trở lên và V2026.4.5 trở xuống.
2. Chạy lệnh sau trên thiết bị đã cài OpenClaw:

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
