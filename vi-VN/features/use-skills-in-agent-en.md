---
title: "Sử dụng Skills trong chế độ Agent"
slug: "use-skills-in-agent"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Sử dụng Skills trong chế độ Agent - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu cách gọi skill, tạo skill tùy chỉnh, khám phá các skill được đề xuất và mở rộng khả năng của Kimi trong chế độ Agent."
  ogType="article"
/>

# Sử dụng Skills trong chế độ Agent

## Cách gọi Skills?

Trong ô nhập liệu của chế độ Kimi Agent, có ba cách để gọi Skills:

**Cách 1: Dùng lệnh `/`**

Gõ `/` trong ô nhập liệu để mở danh sách Skill. Nhấp vào tên một Skill để chèn nó. Bạn cũng có thể gõ từ khóa sau dấu `/` để lọc danh sách.

**Cách 2: Dùng menu "➕"**

Nhấp nút **➕** bên cạnh ô nhập liệu. Chọn một Skill từ menu, tên Skill sẽ được chèn dưới dạng văn bản vào ô nhập liệu.

<Frames
  src="./images/skills/加号-en.png"
  alt="Gọi skill bằng menu dấu cộng"
/>

**Cách 3: Để Kimi tự quyết định**

Chỉ cần mô tả nhu cầu của bạn. Kimi sẽ tự động nhận diện và kích hoạt Skill phù hợp nhất dựa trên nội dung tác vụ của bạn.

### Ví dụ: Dùng Skills để tạo báo cáo phân tích SEO

Giả sử bạn là một quản lý nội dung muốn phân tích hiệu suất SEO của website:

1. Gõ `/` trong ô nhập liệu, tìm và chọn Skill `seo-analyzer`.
2. Tiếp tục nhập: `Hãy phân tích hiệu suất SEO của https://help.com/zh-cn/help, liệt kê các vấn đề chính và đề xuất tối ưu hóa.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="Phân tích SEO"
/>

3. Sau khi gửi, Kimi sẽ tự động tìm kiếm, sắp xếp và xuất ra một báo cáo có cấu trúc theo quy trình phân tích SEO.

Bạn không cần phải hướng dẫn Kimi cách thực hiện phân tích — quy trình đã được định nghĩa sẵn trong Skill.

## Khám phá và quản lý Skills

### Lựa chọn của Kimi

Kimi cung cấp một bộ skill được đề xuất sẵn sàng sử dụng, có thể thêm chỉ với một cú nhấp:

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Các skill được đề xuất"
/>

## Tùy chỉnh Skills

Nếu các skill được Kimi đề xuất chưa đáp ứng nhu cầu của bạn, bạn có thể tạo các skill tùy chỉnh phù hợp với quy trình làm việc riêng.

**Khi nào bạn nên tạo một skill tùy chỉnh?**

- Bạn có một tác vụ lặp lại cần thực hiện thường xuyên (ví dụ: báo cáo đối thủ cạnh tranh hàng tuần).
- Bạn muốn Kimi xuất nội dung theo định dạng riêng của công ty bạn.
- Bạn có một bộ phương pháp làm việc và muốn Kimi tuân theo trực tiếp.

Một skill tốt nên làm một việc và làm thật tốt. Đừng cố nhồi nhét tất cả yêu cầu vào một skill duy nhất.

### Lựa chọn 1: Tài liệu thành skill

Nếu bạn đã có sẵn các mẫu, tài liệu chuẩn hoặc file ví dụ, bạn có thể tải lên trực tiếp và để Kimi học rồi tạo ra skill tương ứng.

1. Chọn **Tài liệu Office thành Skill** trong bảng **Skills**.
2. Nhấp hoặc kéo file vào khu vực tải lên. Định dạng hỗ trợ: `docx`, `xlsx`, `pdf`, `pptx` và ảnh chụp màn hình tài liệu. Tối đa 3 file mỗi lần tải lên, mỗi file không quá 100 MB.

<Frames
  src="./images/skills/document.png"
  alt="Tải tài liệu lên để tạo skill"
/>

3. Điền mô tả skill, cho Kimi biết skill này nên làm gì. Ví dụ: "Giúp tôi tổng hợp dữ liệu bán hàng hàng tuần theo phong cách và định dạng của mẫu này."
4. Nhấp **Tạo Skill**.

### Lựa chọn 2: Tạo cùng Kimi

Nếu bạn không có sẵn tài liệu, bạn có thể mô tả trực tiếp nhu cầu của mình qua hội thoại, và Kimi sẽ hướng dẫn bạn từng bước để hoàn thành việc tạo skill.

Gõ `/skill-creator` trong ô nhập liệu, sau đó mô tả Skill bạn muốn tạo. Kimi sẽ giúp bạn sắp xếp các yêu cầu thành một Skill hoàn chỉnh.

<Frames
  src="./images/skills/create-skill-en.png"
  alt="Tạo Skill qua hội thoại"
/>

### Quản lý các Skill hiện có

Trong bảng **Skills**, chuyển sang tab **Skill tùy chỉnh** để chỉnh sửa, cập nhật tài liệu hoặc xóa các Skill bạn đã tạo.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Quản lý Skill tùy chỉnh"
/>

<Callout type="info">
Skills được hỗ trợ trong chế độ Agent và Kimi Claw. Các Skill có hậu tố `swarm` chỉ khả dụng trong các tình huống Swarm (cụm Agent) và sẽ không hiển thị trong các ngữ cảnh khác.
</Callout>

## Viết mô tả Skill hiệu quả

Kimi dựa vào mô tả Skill để xác định "khi nào nên dùng Skill này." Mô tả của bạn càng rõ ràng, Skill sẽ được kích hoạt càng chính xác.

Một mô tả Skill hoàn chỉnh nên bao gồm:
- Chức năng cốt lõi của Skill.
- Những tình huống nào phù hợp để sử dụng.
- Các từ kích hoạt mà nó phản hồi.
- Khả năng nhận diện những đề cập gián tiếp đến yêu cầu.

<ComparisonBlock
  wrong={"Giúp người dùng tìm kiếm và khám phá Skills."}
  correct={"Giúp người dùng tìm kiếm và khám phá Skills. Được dùng khi người dùng muốn tìm một loại Skill cụ thể hoặc mô tả một vấn đề và mong nhận được đề xuất Skill. Các từ kích hoạt bao gồm “Tìm Skill”, “Tìm kiếm Skill”, “Có Skill nào làm được X không?”, v.v."}
/>
