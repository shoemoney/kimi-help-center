---
title: "Skills là gì?"
slug: "what-are-skills"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Skills là gì? - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu về nguyên lý hoạt động, các loại và cách sử dụng Kimi Skills. Skills là những gói kiến thức có thể tái sử dụng giúp mở rộng năng lực của Agent trong các tác vụ cụ thể, bao gồm hướng dẫn, thực hành tốt nhất, script và tài nguyên."
  ogType="article"
/>

# Skills là gì?

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

Skills là những gói kiến thức có thể tái sử dụng, được thiết kế để mở rộng giới hạn năng lực của một AI agent. Mỗi skill bao gồm:

- **Phương pháp làm việc & hướng dẫn vận hành** — Các phương pháp luận được điều chỉnh riêng cho từng loại tác vụ cụ thể.
- **Thực hành tốt nhất & tiêu chuẩn** — Các tiêu chuẩn ngành và quy trình nội bộ cần tuân thủ.
- **Script, công cụ & tài nguyên tham khảo** — Các công cụ và tài liệu tùy chọn hỗ trợ quá trình thực thi.

## Cách sử dụng?

Khi bắt đầu một cuộc trò chuyện, Agent sẽ thấy danh sách các skill khả dụng kèm theo tên và mô tả ngắn gọn. Nếu một skill phù hợp với tác vụ hiện tại, Agent sẽ tải toàn bộ hướng dẫn và thực thi tương ứng.

## Hành trình người dùng

Từ khi khám phá skill cho đến khi tự tạo skill riêng, lộ trình đầy đủ như sau:

1. **Khám phá skill** — Duyệt các skill chính thức và được đề xuất trong bảng Skills để tìm skill phù hợp với tình huống của bạn.
2. **Cài đặt skill** — Nhấp nút "+" để thêm một skill ngay lập tức.
3. **Gọi skill** — Gõ `/` trong ô trò chuyện để chọn một skill, hoặc để Kimi tự động kích hoạt dựa trên câu hỏi của bạn.
4. **Tự tạo skill riêng** — Nếu các skill hiện có chưa đáp ứng nhu cầu, hãy tải tài liệu lên hoặc mô tả yêu cầu của bạn để tạo một skill tùy chỉnh, hoặc dùng `/skill-creator` để xây dựng skill thông qua hội thoại.

## Skills hoạt động như thế nào?

Khi bạn gửi một yêu cầu, Kimi Agent sẽ đánh giá xem tác vụ hiện tại có liên quan đến một skill cụ thể nào không. Nếu có, nó tự động tải skill tương ứng và làm theo hướng dẫn để hoàn thành tác vụ.

Skills chỉ được tải khi liên quan đến tác vụ, đảm bảo không gây ảnh hưởng đến ngữ cảnh của các cuộc trò chuyện khác.

## Skills và việc nhập prompt trực tiếp: Khác nhau ở điểm nào?

Lấy ví dụ về việc viết báo cáo tuần:
- **Nhập prompt trực tiếp**: Hỏi Kimi Agent trực tiếp, và nó sẽ viết dựa trên cách hiểu của riêng nó về định dạng.
- **Sử dụng Skills**: Sau khi cài đặt một skill viết báo cáo tuần, mọi kết quả đầu ra đều tuân theo cấu trúc, giọng văn và độ dài bạn đã thiết lập sẵn mà không cần lặp lại hướng dẫn.

| | Nhập prompt trực tiếp | Sử dụng skills |
|---|---|---|
| **Có cần giải thích yêu cầu mỗi lần không?** | Có | Không, được áp dụng tự động |
| **Tính ổn định của định dạng đầu ra** | Thay đổi tùy lúc | Nhất quán như đã định nghĩa |
| **Trường hợp sử dụng phù hợp nhất** | Tác vụ tạm thời, dùng một lần | Quy trình lặp lại, cố định |
| **Có cần thiết lập trước không?** | Không | Cần tạo hoặc cài đặt |

## Các loại Skill

### (1) Skill chính thức & skill được đề xuất

**Skill chính thức**: Do Moonshot AI tạo ra và duy trì, khả dụng cho mọi người dùng. Kimi tự động kích hoạt chúng trong các tình huống phù hợp.

Các skill chính thức phổ biến bao gồm:
- `docx` — Tạo và chỉnh sửa tài liệu Word, phù hợp với mọi tác vụ .docx bao gồm tạo tài liệu, chỉnh sửa, bình luận, sửa đổi, chú thích cuối trang, mục lục và chuyển đổi Markdown sang Word.
- `deep-research` — Tiến hành nghiên cứu chuyên sâu và xây dựng báo cáo dài bằng bộ công cụ, yêu cầu ít nhất 10 chu kỳ tìm kiếm lặp đi lặp lại, phản tư đệ quy và trực quan hóa IPython bắt buộc.

**Skill được đề xuất**: Các skill theo tình huống được tuyển chọn, sẵn sàng thêm chỉ với một cú nhấp, bao quát các trường hợp sử dụng phổ biến như nghiên cứu đầu tư và định dạng tài liệu.

Các skill được đề xuất phổ biến bao gồm:
- `sop-writer` — Chuyển đổi các quy trình nghiệp vụ thành tài liệu Quy trình vận hành chuẩn (SOP) hoàn chỉnh, bao gồm sơ đồ luồng quy trình, ma trận RACI, các bước thao tác chi tiết và xử lý ngoại lệ.
- `event-etf-study` — Bắt đầu từ một khái niệm hoặc sự kiện, xác định các cổ phiếu liên quan, xây dựng chỉ số ETF theo trọng số vốn hóa thị trường, phân tích biến động giá trị thị trường trong khung thời gian diễn ra sự kiện và tạo bảng điều khiển HTML tương tác. Được dùng khi người dùng hỏi về cổ phiếu khái niệm, ETF khái niệm, phân tích theo sự kiện hoặc nghiên cứu sự kiện.

**Tài liệu văn phòng sang skill**: Tải tài liệu lên để tạo skill và dễ dàng nhân bản các chủ đề phong cách.

### (2) Skill mã nguồn mở

Tải xuống hoặc cài đặt các Skill phù hợp từ các cộng đồng mã nguồn mở, kết hợp với Local Agents (như Kimi Code) hoặc Cloud Agents (như Kimi Claw).

**Các nền tảng AI Skill Hub phổ biến**

| Nền tảng | URL | Mô tả |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | Một chợ skill cho AI agent, lấy nguồn các gói SKILL.md từ GitHub, tương thích với Claude Code và OpenAI Codex CLI |
| SkillsLLM | https://skillsllm.com | Một chợ skill mã nguồn mở cho AI agent với hơn 1.600 skill đã được kiểm duyệt bảo mật dành cho Claude Code, Codex CLI và ChatGPT |
| LobeHub Skills | https://lobehub.com/skills | Duyệt và phân phối các gói SKILL.md tương thích với Claude Code, Codex CLI và ChatGPT |

### (3) Skill tùy chỉnh

Các skill tùy chỉnh do bạn tự tạo cho quy trình làm việc cá nhân và các tác vụ chuyên ngành cụ thể, chẳng hạn như:
- Áp dụng các bộ hướng dẫn phong cách cụ thể cho tài liệu hoặc bài thuyết trình.
- Tạo email hoặc nội dung trao đổi dựa trên các mẫu cố định.
- Sắp xếp biên bản cuộc họp theo một định dạng cụ thể.
- Thực thi các quy trình phân tích dữ liệu cụ thể.
