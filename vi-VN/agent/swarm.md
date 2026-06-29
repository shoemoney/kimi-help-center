---
title: "K2.6 Agent Swarm [Beta]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [Beta] - Kimi Help Center"
  description="K2.6 Agent Swarm Beta là một kiến trúc &quot;mở rộng theo chiều ngang&quot; phối hợp tới 300 sub-agent chạy song song — không cần vai trò định sẵn hay quy trình thủ công..."
/>

# K2.6 Agent Swarm [Beta]

<Callout type="info">
**K2.6 Agent Swarm [Beta]** là một kiến trúc "mở rộng theo chiều ngang" có khả năng phối hợp tới 300 sub-agent chạy song song — không cần định sẵn vai trò hay xây dựng quy trình thủ công. Nó hoàn thành tác vụ nhanh hơn khoảng **4,5 lần** so với cách chạy đơn agent.
</Callout>

Ngày 27 tháng 1 năm 2026, Moonshot AI ra mắt Kimi K2.5, giới thiệu Agent Swarm [Beta]. Ngày 20 tháng 4 năm 2026, Moonshot AI phát hành và mã nguồn mở Kimi K2.6, mang đến những nâng cấp lớn cho kiến trúc Agent Swarm:
- Tối đa **300 sub-agent** hoạt động đồng thời
- Hơn **4.000 lượt gọi công cụ** cho mỗi tác vụ
- Nhanh hơn **4,5 lần** so với việc chạy tuần tự đơn agent

## Câu chuyện đằng sau

Năm 2025, câu chuyện chủ đạo của ngành AI xoay quanh việc mở rộng theo chiều dọc — mô hình lớn hơn, nhiều tham số hơn. Nhưng cách tiếp cận này gặp giới hạn mang tính cấu trúc: nút thắt cổ chai của việc chạy tuần tự đơn lẻ.

Agent Swarm ra đời từ một tình huống thực tế: khi một thành viên trong nhóm cố tự động hóa việc thu thập thông tin chứng khoán hằng ngày và viết đến 100 dòng mã if-else, cô nhận ra: "Mình đang viết tay một hệ thống đa agent." Nếu mô hình có thể dùng công cụ, vậy tại sao chúng không thể tự thiết kế kiến trúc cho chính mình?

Agent Swarm là một cấu trúc tổ chức tự thiết kế — do AI thiết kế, chứ không phải con người. Agent chính (bộ điều phối) tự chủ điều phối tới 300 sub-agent, thực hiện tới 4.000 bước quy trình song song.

<Frames
  src="./images/swarm/swarm.png"
  alt="swarm"
/>

K2.6 Agent Swarm [Beta] sử dụng phương pháp huấn luyện PARL (Parallel-Agent Reinforcement Learning). So với cách tiếp cận đơn agent, nó giảm số bước then chốt từ 3 đến 4,5 lần trong các tình huống tìm kiếm quy mô lớn.

## Cách sử dụng？

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="screenshot 8"
/>

**Điểm truy cập:**
- **Web**: [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Di động**: ứng dụng Kimi → Chuyển chế độ → Chọn K2.6 Agent Swarm [Beta]

<Callout type="warning">
**Quyền truy cập Beta**: K2.6 Agent Swarm [Beta] hiện chỉ dành cho thành viên Allegretto, Allegro và Vivace. Các tác vụ tiêu tốn quota nhiều hơn đáng kể so với tác vụ Agent thông thường.
</Callout>

**Các bước:**
1. Mô tả tác vụ của bạn và gửi đi (ví dụ: "Thu thập hơn 200 bài viết của Paul Graham")
2. Theo dõi tiến trình theo thời gian thực: tạo danh sách tác vụ, sinh ra sub-agent, chạy song song
3. Nhận sản phẩm bàn giao: dự án mã, thư mục tệp, phân tích dữ liệu, tài liệu Office
4. Xem trước, tải về hoặc chia sẻ kết quả
5. Chuyển sang K2.6 Agent đơn để tiếp tục ở những lượt sau

## Trường hợp sử dụng

### Khám phá ở quy mô lớn

**Trường hợp 1: Top 3 nhà sáng tạo trên 100 ngách YouTube**

K2.6 Agent Swarm [Beta] tạo ra 300 sub-agent để tìm kiếm song song, sinh ra các bảng có cấu trúc gồm tên kênh, số lượng người đăng ký và mô tả.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="Xem kết quả" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**Trường hợp 2: Thu thập hơn 200 bài viết của Paul Graham**

Agent Swarm triển khai các sub-agent để tìm kiếm, tải về, phân loại và tóm tắt hơn 200 bài viết thành các thư mục theo chủ đề.

<Chat title="Xem kết quả" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### Đầu ra ở quy mô lớn

**Trường hợp: Bài tổng quan tài liệu dài 100 trang từ 40 tệp PDF**

K2.6 Agent Swarm [Beta] triển khai nhiều sub-agent chuyên về viết, mỗi sub-agent phụ trách một chương. Kết quả cuối cùng: một tài liệu học thuật dài 100 trang kèm trích dẫn, biểu đồ phương pháp luận và phân tích mạng lưới trích dẫn.

<Frames
  src="./images/swarm/literature-review.png"
  alt="literature review"
/>

### Góc nhìn ở quy mô lớn

**Trường hợp: Đánh giá chiến lược ra mắt sản phẩm bởi nhóm chuyên gia**
Agent Swarm triển khai các sub-agent chuyên gia với những góc nhìn khác nhau (Quản lý sản phẩm, Nhà đầu tư, Customer Success) để đánh giá một chiến lược ra mắt.

<Frames
  src="./images/swarm/expert-review.png"
  alt="expert review"
/>

<Chat title="Xem kết quả" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**Trường hợp: *Tam Thể* được viết lại theo 20 phong cách văn học**
20 sub-agent "nhà văn" sáng tác độc lập theo những phong cách riêng biệt — từ Virginia Woolf đến Borges đến Kafka.

<Chat title="Xem kết quả" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## Đi sâu vào kỹ thuật

**Kiến trúc cốt lõi: Người chỉ huy + Chuyên gia**

- **Bộ điều phối** = Huấn luyện viên/Chỉ huy: Nhìn bao quát toàn cục, đề ra chiến lược
- **Sub-agent** = Cầu thủ: Mỗi cá thể tập trung vào một vai trò cụ thể

**Thiết kế then chốt: Đóng băng cầu thủ, chỉ huấn luyện huấn luyện viên**

Mọi sub-agent đều giữ nguyên năng lực hiện có; chỉ bộ điều phối được cải thiện thông qua học tăng cường. Điều này mang lại trách nhiệm rõ ràng và sự ổn định trong huấn luyện.

**Ngăn chặn "sự lười biếng":**
- **Sụp đổ thành tuần tự**: Bộ điều phối giao hết mọi thứ cho một sub-agent duy nhất
- **Song song giả tạo**: Tạo ra các tác vụ con vô nghĩa để "lừa" các chỉ số

**Giải pháp: Cơ chế thưởng ba chiều**
1. Chất lượng của kết quả cuối cùng
2. Mức độ song song thực sự đạt được
3. Tỷ lệ hoàn thành tác vụ con

**Chỉ số bước then chốt**

Agent Swarm tính toán thời gian của sub-agent chậm nhất ở mỗi giai đoạn. Điều này buộc phải tối ưu hóa quy trình một cách thực chất thay vì chia nhỏ tác vụ một cách mù quáng.

**Context sharding**

Mỗi sub-agent tập trung vào "sổ tay" của riêng mình, ghi lại các chi tiết liên quan một cách độc lập. Chỉ những kết luận then chốt mới được báo cáo lên bộ điều phối — giữ trọn vẹn quá trình suy luận mà không làm quá tải bộ nhớ.

**Kết quả thực tế**

Trên benchmark BrowseComp:
- Độ chính xác: 15,9% (đơn agent) → 33,3%
- Số bước then chốt giảm khoảng 40%

## Các tình huống ứng dụng

K2.6 Agent Swarm [Beta] đặc biệt phù hợp với:
1. **Truy xuất thông tin quy mô lớn**: Thu thập dữ liệu internet khối lượng lớn
2. **Tải về hàng loạt**: Thu thập tệp và tài nguyên quy mô lớn
3. **Đọc trên phạm vi rộng**: Xử lý hơn 100 tài liệu
4. **Viết nội dung dài**: Nội dung vượt quá 100.000 từ
5. **Lập trình phức tạp**: Phát triển frontend, đánh giá mã, tái cấu trúc
6. **Tự động hóa văn phòng**: Tài liệu chuyên nghiệp, bảng tính, bài thuyết trình

**Đọc thêm:**
- [Kimi Agent Swarm: 100 sub-agent ở quy mô lớn](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5: Trí tuệ agentic thị giác​](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6: Đẩy mạnh lập trình mã nguồn mở](https://www.kimi.com/blog/kimi-k2-6)
