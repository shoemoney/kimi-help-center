---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Tạo và triển khai website từ mô tả ngôn ngữ tự nhiên, bản thiết kế mẫu hoặc mẫu có sẵn."
---

<SeoMeta
  title="Tổng quan về Kimi Websites - Trung tâm trợ giúp Kimi"
  description="Tạo và triển khai website từ mô tả ngôn ngữ tự nhiên, bản thiết kế mẫu hoặc mẫu có sẵn."
/>

# Kimi Websites

<Callout type="info">
**Kimi Websites** là một tính năng sản phẩm của Kimi Agent, được vận hành bởi mô hình AI tác tử thị giác đa phương thức Kimi K2.6 mới nhất. Năng lực cốt lõi của nó là **Vibe Coding** — tạo website từ ngôn ngữ tự nhiên và triển khai trực tuyến.
</Callout>

Bằng cách hiểu các đầu vào trực quan (bản thiết kế UI, ảnh chụp màn hình, video tương tác) cùng hướng dẫn bằng ngôn ngữ tự nhiên, Kimi chuyển hóa đầu vào của người dùng thành mã frontend hoàn chỉnh, có thể chạy được — bao quát không chỉ giao diện tĩnh mà cả hành vi tương tác động.

## Tổng quan tính năng

| Tính năng | Mô tả |
|---------|------------|
| **Xây dựng website qua hội thoại** | Mô tả nhu cầu bằng ngôn ngữ tự nhiên; AI tự động tạo website |
| **Hiểu hình ảnh/video** | Tải lên bản thiết kế mẫu/ảnh chụp màn hình/bản ghi màn hình; AI phân tích và tạo trang HTML |
| **Tự động triển khai** | Triển khai một chạm để xuất bản tức thì |
| **Chỉnh sửa nhiều lượt** | Sửa đổi website theo từng vòng lặp kèm so sánh phiên bản |
| **Chia sẻ một chạm** | Tạo liên kết truy cập để chia sẻ dễ dàng |
| **Chọn mẫu** | Nhiều mẫu cài sẵn giúp khởi tạo website nhanh chóng |
| **Xuất mã** | Tải về tệp HTML/CSS/JS đã đóng gói để tự lưu trữ |

## Cách sử dụng Kimi Websites?

### Cách 1: truy cập trang Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Kimi websites homepage"
/>

1. **Mở trình duyệt**: Sử dụng Chrome, Safari, Edge, Firefox hoặc bất kỳ trình duyệt phổ biến nào
2. **Truy cập**: [kimi.com/websites](https://www.kimi.com/zh/websites) (hỗ trợ tiếng Trung và tiếng Anh)
3. **Đăng nhập**: Bằng tài khoản Kimi của bạn (số điện thoại hoặc email)
4. **Nhập tác vụ của bạn**:

| Phương thức | Mô tả |
|----------|-------------|
| **Nhập văn bản** | Gõ yêu cầu của bạn bằng ngôn ngữ tự nhiên |
| **Sao chép hình ảnh/website** | Tải lên bản thiết kế mẫu hoặc ảnh chụp màn hình |
| **Dựa trên mẫu** | Chọn mẫu cài sẵn và chỉnh sửa nội dung |

5. **Bắt đầu xây dựng**: Chọn một mẫu hoặc bắt đầu từ hội thoại

<Frames
  src="./images/overview/screenshot-27.png"
  alt="screenshot 27"
/>

### Cách 2: ứng dụng di động

iOS, Android và HarmonyOS đều có ứng dụng Kimi chính thức. Trong vùng nhập liệu, chạm vào **Thanh tác vụ** → chuyển sang **chế độ Websites Agent**, bao gồm các công cụ tạo nội dung đa phương thức và năng lực Agent.

### Cách 3: dùng chế độ K2.6 Agent

Chuyển sang chế độ K2.6 Agent và nhập tác vụ xây dựng website. Kimi sẽ kích hoạt năng lực lập trình thị giác và các công cụ thực thi mã.

## Kimi Websites hoạt động như thế nào?

### Bước 1: tạo website qua hội thoại

Mô tả nhu cầu của bạn bằng ngôn ngữ tự nhiên. Hỗ trợ ba cách tạo:

| Phương thức | Mô tả |
|--------|------------|
| **Mô tả văn bản** | Nhập trực tiếp yêu cầu về website; AI tự động tạo |
| **Phân tích bản thiết kế mẫu** | Tải lên tệp thiết kế; AI nhận diện và tái hiện thành trang web |
| **Xây dựng nhanh bằng mẫu** | Chọn mẫu cài sẵn và chỉnh sửa nội dung |

**Ví dụ prompt**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Xây dựng một trang web về giống chó West Highland Terrier với tông màu đen trắng. Bao gồm ba phần:\nMột lịch ảnh chất lượng studio với hiển thị hình ảnh do AI tạo\nMột bách khoa toàn thư chăm sóc và cắt tỉa lông \"Curly Lab\"\nMột cửa hàng bán áo hoodie in hình Westie và áp phích phiên bản giới hạn ép nhũ bạc. Trang thanh toán nên có một mô-đun từ thiện — quyên góp $1 cho mỗi sản phẩm bán được để cứu trợ chó hoang.",
    },
  ]}
/>

### Bước 2: quá trình xây dựng

<Frames
  src="./images/overview/screenshot-26.png"
  alt="screenshot 26"
/>

Kimi website kích hoạt **SKILL xây dựng webapp** — một tác tử tạo mã nhiều vòng chuyên dụng:
1. **Phân tích yêu cầu**: Phân tích các mô-đun của website, phong cách hình ảnh và logic tương tác
2. **Lập kế hoạch tác vụ**: Phân rã thành các tác vụ con về thiết kế, phát triển và chuẩn bị tài nguyên
3. **Chọn tech stack**: Chọn kiến trúc phù hợp (ví dụ: React + Tailwind CSS)
4. **Tạo tài nguyên**: Tạo hình ảnh, biểu tượng và các tài nguyên hình ảnh khác
5. **Dựng mã**: Viết cấu trúc trang, định kiểu và mã tương tác
6. **Tối ưu nhiều vòng**: Tự điều chỉnh dựa trên kết quả xem trước cho đến khi hoàn thiện

### Bước 3: xem trước & điều chỉnh
- **Xem trước trực tiếp**: Tạo URL demo HTML để xem ngay trên trình duyệt
- **Chỉnh sửa qua hội thoại**: Tiếp tục trò chuyện để yêu cầu thay đổi, ví dụ *"Đổi thanh điều hướng sang màu tối"*

<Callout type="tip">
**Ví dụ**: *"Màu sắc chưa ổn lắm — tôi muốn bỏ yêu cầu trắng đen và làm thành một website trông bình thường."*
Kimi sẽ sắp xếp lại danh sách việc cần làm và tiếp tục xây dựng.
</Callout>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Bước 4: chỉnh sửa trực quan trực tuyến
- **Tối ưu nhiều vòng**: Tinh chỉnh chi tiết thông qua hội thoại liên tục
- **Chế độ chỉnh sửa**:
  - **Chế độ chú thích**: Nhấp vào các vùng để thêm chú thích bằng ngôn ngữ tự nhiên
  - **Chế độ chọn**: Chọn bất kỳ phần tử nào và thêm chú thích
  - Dùng hình chữ nhật, mũi tên, cọ vẽ và đổi màu để đánh dấu các đề xuất sửa đổi
- Gửi tất cả đề xuất sửa đổi đến Kimi cùng một lúc
### Bước 5: triển khai & xuất bản
| Phương thức triển khai | Mô tả |
|-------------------|------------|
| **Tự động triển khai** | Triển khai một chạm kèm liên kết trực tuyến được tạo sẵn |
| **Tải về & tự lưu trữ** | Tải về các tệp mã đã đóng gói và triển khai lên máy chủ của riêng bạn |
| **Tên miền tùy chỉnh** | Gắn website được tạo với tên miền riêng của bạn |

Sau khi tạo, bạn có thể:
- Nhấp vào các phiên bản triển khai khác nhau để tải về tệp phiên bản
- Nhấp nút chia sẻ để nhận liên kết triển khai công khai (hoặc đặt ở chế độ riêng tư)
- Nhấp nút chỉnh sửa để tiếp tục sửa đổi
- Tải về toàn bộ mã HTML/CSS/JS để triển khai trực tiếp hoặc tinh chỉnh thêm

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Đối tượng mục tiêu
| Đối tượng | Trường hợp sử dụng |
|----------|----------|
| **Lập trình viên** | Thiết kế nguyên mẫu sản phẩm và demo frontend, giảm mạnh thời gian xây dựng từ đầu |
| **Nhà khởi nghiệp** | Nhanh chóng dựng trang đích, trang giới thiệu sản phẩm và website công ty với nguồn lực hạn chế |
| **Quản lý sản phẩm** | Nhanh chóng biến PRD hoặc bản thiết kế mẫu thành nguyên mẫu tương tác có thể trình diễn |
| **Người dùng không chuyên kỹ thuật** | Không cần lập trình — mô tả ý tưởng hoặc tải lên ảnh tham khảo để đi từ ý niệm đến trang web hoạt động |

## Tình huống tham khảo
| Tình huống | Ví dụ prompt |
|----------|---------------|
| **Trang đích từ đầu** | Dựng một trang đích tiếp thị SaaS với thẩm mỹ công nghệ — gồm phần hero, tổng quan tính năng, bảng giá và CTA |
| **Tái hiện website từ video** | [Tải lên bản ghi màn hình] Tái hiện website hiển thị trong video này, giữ nguyên các hiệu ứng tương tác gốc |
| **Tái hiện từ ảnh chụp màn hình** | [Tải lên bản thiết kế mẫu] Biến thiết kế này thành mã trang web có thể chạy được |
| **Hồ sơ cá nhân** | Dựng website hồ sơ của một nhiếp ảnh gia — phong cách trắng đen tối giản với bố cục lưới masonry cho hình ảnh |
| **Trang trực quan hóa dữ liệu** | Tạo một trang trực quan hóa hiển thị dữ liệu gọi vốn của các công ty AI năm 2025 kèm biểu đồ và bộ lọc |
| **Website thương hiệu** | Dựng website thương hiệu cà phê với tông màu đất trầm — gồm trang chủ, trang sản phẩm và trang tìm cửa hàng |
| **Tiện ích / Máy tính** | Dựng trang web máy tính BMI — giao diện gọn gàng, hỗ trợ chuyển đổi đơn vị, kèm chỉ báo mức độ sức khỏe |
