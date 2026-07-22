---
title: "Tính năng và giới hạn của Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Tính năng và giới hạn của Agent

<SeoMeta
  title="Tính năng và giới hạn của Agent - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu năng lực, mẹo sử dụng, giới hạn và các thực hành tốt nhất để Kimi Agent cho kết quả tối ưu."
/>

<Callout type="info">
**Kimi Agent** là trợ lý AI có thể tự động thực hiện các tác vụ phức tạp thông qua lập luận nhiều bước và tích hợp công cụ. Hướng dẫn này trình bày các thực hành tốt nhất, giới hạn và câu hỏi thường gặp để bạn tận dụng tối đa chế độ Agent.
</Callout>

## Mẹo sử dụng

**(1) Trước khi gửi tác vụ**

Hãy nêu rõ thông tin nền và các ràng buộc — bối cảnh dự án, trường hợp sử dụng và yêu cầu đặc biệt — để Kimi hiểu chính xác hơn ý định của bạn.

**(2) Trong khi thực thi**

Kimi Agent chạy bất đồng bộ trong nền. Nếu trang web có vẻ bị đơ hoặc dừng lại, **đừng nhấp vào "Dừng"** — thao tác này sẽ ngắt quá trình thực thi tác vụ. Bạn có thể rời khỏi trang; tác vụ vẫn tiếp tục chạy trong nền và bạn sẽ nhận được thông báo khi hoàn tất. Với những tác vụ dự kiến mất nhiều thời gian (ví dụ: Agent Swarm), vui lòng kiên nhẫn chờ.

**(3) Trường hợp liên quan đến website**

Agent có thể tạo nội dung full-stack, bao gồm giao diện frontend, dịch vụ backend và logic lưu trữ bền vững. Nếu một dự án không chạy như mong đợi, nguyên nhân thường liên quan đến việc khởi động sandbox, khởi tạo cơ sở dữ liệu, cấu hình xác thực hoặc thiếu thao tác publish. Agent tiêu chuẩn chạy trên cloud và không thể truy cập trực tiếp tệp cục bộ hoặc hệ thống intranet của doanh nghiệp. Để truy cập tệp cục bộ hoặc intranet, hãy dùng Kimi Claw.

<Callout type="tip">
**Cần truy cập tệp cục bộ?** Hãy dùng Kimi Claw để truy cập an toàn vào tệp cục bộ và hệ thống intranet của doanh nghiệp. Tìm hiểu thêm trong [tài liệu Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Hội thoại nhiều lượt và điều chỉnh tác vụ**
Qua nhiều vòng trao đổi và chỉnh sửa, Agent có thể "quên" một số chi tiết ban đầu. Tốt nhất là xác lập trước khung tác vụ và các điểm then chốt, sau đó điều chỉnh dần từng bước.

**(5) Chia nhỏ tác vụ lớn**
Với các tác vụ lớn và phức tạp, hãy chia thành 2–3 giai đoạn rồi gửi cho Kimi theo từng đợt, hoặc dùng Agent Swarm.

**(6) Giới hạn đầu ra tệp**
Ở chế độ Agent tiêu chuẩn, thông thường mỗi tác vụ chỉ có thể xuất một tệp (ví dụ: một tài liệu hoặc bảng tính). Nếu cần nhiều tệp (ví dụ: cả một tệp Word và một PPT), hãy dùng Agent Swarm.

**(7) Giới hạn ngữ cảnh và cân bằng đầu ra**
Do giới hạn ngữ cảnh 256K ký tự của các mô hình ngôn ngữ lớn (khoảng 40.000–50.000 chữ Trung Quốc / ~100.000 từ tiếng Anh), khi xử lý khối lượng tệp lớn, bạn cần cân bằng giữa lượng đầu vào và đầu ra.

<Callout type="warning">
**Lưu ý về giới hạn ngữ cảnh**: Agent dùng cửa sổ ngữ cảnh 256K ký tự. Để có kết quả tối ưu, hãy cung cấp ngữ cảnh ngắn gọn và tránh tải lên quá nhiều tệp không cần thiết.
</Callout>

## Lưu ý quan trọng

<Callout type="warning">
**Mức dùng credit**: Các tác vụ Agent tiêu thụ credit từ pool dùng chung. Kimi Code cũng dùng pool chung này nhưng có rate limit riêng theo 5 giờ / tuần, chỉ áp dụng cho Kimi Code. Mỗi tác vụ Agent thường tiêu thụ 1 đơn vị credit. Để biết chi tiết credit theo từng hạng thành viên, xem [Credit & thanh toán](/agent/quota-and-billing).

- 60–720 tác vụ Agent/tháng tùy theo gói của bạn
</Callout>

- **Thời gian thực thi**: Ở chế độ Agent, một tác vụ đơn lẻ thường mất 5–20 phút. Tác vụ Agent Swarm có thể lâu hơn. Bạn có thể rời khỏi trang — chỉ cần đừng nhấp vào Dừng để ngắt tác vụ.
- **Mức dùng credit**: Các tác vụ Agent tiêu thụ credit từ pool dùng chung, mà Kimi Code cũng sử dụng (Kimi Code có rate limit riêng theo 5 giờ / tuần).
- **Tác vụ đơn giản**: Với hỏi đáp đơn giản, nên dùng chế độ chat tiêu chuẩn để nhận phản hồi nhanh hơn.

<Callout type="warning">
**Tuân thủ nội dung**: Các tính năng Agent chịu sự điều chỉnh của [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). Hệ thống không hỗ trợ tạo nội dung bị cấm; việc gửi nội dung bị cấm có thể dẫn đến tạm ngừng dịch vụ.
</Callout>

## Câu hỏi thường gặp

**H: Agent có thể làm gì?**

Agent đáp ứng các nhu cầu sau thông qua nhiều lần gọi công cụ:
- **Tạo và biên tập văn bản**: Tạo bài viết, báo cáo, tài liệu, v.v. với hỗ trợ nhiều phong cách viết và định dạng khác nhau.
- **Phát triển web**: Xây dựng giao diện và dịch vụ cho dự án full-stack, hỗ trợ thiết kế giao diện ứng dụng, tích hợp backend, lưu trữ dữ liệu bền vững và trực quan hóa dữ liệu.
- **Tạo slide**: Công cụ PPT chuyên dụng trên nền web để tạo bài thuyết trình hoàn chỉnh.
- **Hỗ trợ lập trình**: Viết mã và gỡ lỗi trên nhiều ngôn ngữ lập trình.

**H: Vì sao website do Agent xây dựng không hoạt động?**

Một dự án hoàn chỉnh thường gồm ba phần: giao diện frontend, dịch vụ backend và lưu trữ dữ liệu. Agent có thể tạo nội dung dự án full-stack trên cả ba lớp này. Nếu dự án của bạn không chạy như mong đợi, nguyên nhân thường liên quan đến việc khởi động sandbox, khởi tạo cơ sở dữ liệu, cấu hình xác thực hoặc thiếu thao tác publish.

**H: Agent có thể bàn giao những gì?**

- Các tệp thực thi tác vụ hoàn chỉnh
- Bản xem trước dự án đã triển khai và các phiên bản đã publish
- Tệp nén Zip có thể tải xuống (nằm trong `/mnt/okcomputer/output/`)

**H: Độ dài ngữ cảnh của Agent là bao nhiêu?**

Agent dùng độ dài ngữ cảnh **256K ký tự** (khoảng 40.000–50.000 chữ Trung Quốc / ~100.000 từ tiếng Anh).

**H: credit của Agent được tính như thế nào?**

Tất cả tính năng thành viên, bao gồm Kimi Code, đều dùng chung một pool credit. Mỗi tác vụ Agent thường được tính là một đơn vị credit.
