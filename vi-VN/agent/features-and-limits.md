---
title: "Tính năng & giới hạn của Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Tính năng & giới hạn của Agent

<SeoMeta
  title="Agent Features \u0026 Limitations - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu về khả năng, mẹo sử dụng, giới hạn và các phương pháp tối ưu của Kimi Agent để đạt kết quả tốt nhất."
/>

<Callout type="info">
**Kimi Agent** là trợ lý vận hành bằng AI, tự động thực hiện những tác vụ phức tạp thông qua khả năng suy luận nhiều bước và tích hợp công cụ. Hướng dẫn này trình bày các phương pháp tối ưu, giới hạn cùng những câu hỏi thường gặp để giúp bạn tận dụng tối đa chế độ Agent.
</Callout>

## Mẹo sử dụng

**(1) Trước khi gửi tác vụ**

Hãy nêu rõ thông tin nền tảng và các ràng buộc — bối cảnh dự án, trường hợp sử dụng và yêu cầu đặc thù — để Kimi nắm bắt ý định của bạn chính xác hơn.

**(2) Trong quá trình thực thi**

Kimi Agent chạy bất đồng bộ ở chế độ nền. Nếu trang web trông như bị treo hoặc đứng yên, **đừng nhấn "Dừng"** — thao tác này sẽ gián đoạn việc thực thi tác vụ. Bạn có thể rời khỏi trang; tác vụ vẫn tiếp tục chạy ở nền và bạn sẽ nhận được thông báo khi nó hoàn tất. Với những tác vụ dự kiến mất nhiều thời gian (ví dụ K2.6 Agent Swarm [Beta]), vui lòng kiên nhẫn chờ đợi.

**(3) Tình huống xây dựng website**

Agent có thể tạo nội dung full-stack, bao gồm giao diện frontend, dịch vụ backend và logic lưu trữ bền vững. Nếu một dự án không chạy như mong đợi, vấn đề thường liên quan đến việc khởi động sandbox, khởi tạo cơ sở dữ liệu, cấu hình xác thực hoặc thiếu thao tác xuất bản. Agent tiêu chuẩn chạy trên đám mây và không thể truy cập trực tiếp tệp cục bộ hay hệ thống mạng nội bộ doanh nghiệp. Để truy cập tệp cục bộ hoặc mạng nội bộ, hãy dùng Kimi Claw.

<Callout type="tip">
**Cần truy cập tệp cục bộ?** Hãy dùng Kimi Claw để truy cập an toàn vào tệp cục bộ và hệ thống mạng nội bộ doanh nghiệp. Tìm hiểu thêm trong [tài liệu Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Hội thoại nhiều lượt và điều chỉnh tác vụ**
Qua nhiều lượt trao đổi và chỉnh sửa, Agent có thể "quên" một số chi tiết ban đầu. Tốt nhất là bạn nên thiết lập khung tác vụ cùng các điểm cốt lõi trước, rồi mới điều chỉnh dần.

**(5) Phân rã tác vụ lớn**
Với những tác vụ lớn và phức tạp, hãy chia thành 2–3 giai đoạn rồi gửi cho Kimi theo từng đợt, hoặc dùng K2.6 Agent Swarm [Beta].

**(6) Giới hạn về tệp đầu ra**
Ở chế độ Agent tiêu chuẩn, thông thường mỗi tác vụ chỉ xuất được một tệp (ví dụ một tài liệu hoặc một bảng tính). Để tạo nhiều tệp (chẳng hạn vừa tài liệu Word vừa PPT), hãy dùng K2.6 Agent Swarm [Beta].

**(7) Giới hạn ngữ cảnh và cân đối đầu ra**
Do các mô hình ngôn ngữ lớn có giới hạn ngữ cảnh 256K ký tự (khoảng 40.000–50.000 ký tự tiếng Trung / khoảng 100.000 từ tiếng Anh), việc xử lý lượng tệp lớn đòi hỏi phải cân đối giữa khối lượng đầu vào và đầu ra.

<Callout type="warning">
**Lưu ý về giới hạn ngữ cảnh**: Agent sử dụng cửa sổ ngữ cảnh 256K ký tự. Để đạt kết quả tốt nhất, hãy cung cấp ngữ cảnh ngắn gọn và tránh nhồi nhét các tệp không cần thiết.
</Callout>

## Lưu ý quan trọng

<Callout type="warning">
**Mức sử dụng quota**: Các tác vụ Agent tiêu thụ quota từ kho dùng chung (các tính năng thành viên khác). Kimi Code dùng một kho quota riêng. Mỗi tác vụ Agent thường tiêu thụ 1 đơn vị quota. Để biết thông tin quota chi tiết theo từng hạng thành viên, xem [Quota & thanh toán](/agent/quota-and-billing).
Gói miễn phí: 6 tác vụ Agent/tháng
Gói trả phí: 60–720 tác vụ Agent/tháng tùy theo gói của bạn
</Callout>

- **Thời gian thực thi**: Ở chế độ Agent, một tác vụ thường mất 5–20 phút. Các tác vụ K2.6 Agent Swarm [Beta] có thể lâu hơn. Bạn có thể rời khỏi trang — chỉ cần đừng nhấn Dừng để gián đoạn tác vụ.
- **Mức sử dụng quota**: Các tác vụ Agent tiêu thụ quota từ kho dùng chung. Kimi Code dùng một kho quota riêng. 
- **Tác vụ đơn giản**: Với các câu hỏi đáp đơn giản, nên dùng chế độ trò chuyện tiêu chuẩn để được phản hồi nhanh hơn.

<Callout type="warning">
**Tuân thủ nội dung**: Các tính năng Agent tuân theo [Kimi User Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). Việc tạo nội dung bị cấm không được hỗ trợ; gửi nội dung bị cấm có thể dẫn đến việc đình chỉ dịch vụ.
</Callout>

## Câu hỏi thường gặp

**Q: Agent có thể làm gì?**

Agent đáp ứng các nhu cầu sau thông qua việc gọi nhiều công cụ:
- **Tạo & chỉnh sửa văn bản**: Tạo bài viết, báo cáo, tài liệu, v.v. với hỗ trợ nhiều phong cách và định dạng viết khác nhau.
- **Phát triển web**: Xây dựng giao diện và dịch vụ dự án full-stack, hỗ trợ thiết kế giao diện ứng dụng, tích hợp backend, lưu trữ dữ liệu bền vững và trực quan hóa dữ liệu.
- **Tạo slide**: Công cụ PPT chuyên dụng trên nền web để tạo bài thuyết trình hoàn chỉnh.
- **Hỗ trợ lập trình**: Viết và gỡ lỗi mã trên nhiều ngôn ngữ lập trình.

**Q: Vì sao website do Agent xây dựng không hoạt động?**

Một dự án hoàn chỉnh thường gồm ba phần: giao diện frontend, dịch vụ backend và lưu trữ dữ liệu. Agent có thể tạo nội dung dự án full-stack trên cả ba lớp này. Nếu dự án của bạn không chạy như mong đợi, vấn đề thường liên quan đến việc khởi động sandbox, khởi tạo cơ sở dữ liệu, cấu hình xác thực hoặc thiếu thao tác xuất bản.

**Q: Sản phẩm bàn giao của Agent gồm những gì?**

- Các tệp thực thi tác vụ hoàn chỉnh
- Bản xem trước dự án đã triển khai và các phiên bản đã xuất bản
- Tệp lưu trữ Zip có thể tải xuống (nằm tại `/mnt/okcomputer/output/`)

**Q: Độ dài ngữ cảnh của Agent là bao nhiêu?**

Agent sử dụng độ dài ngữ cảnh **256K ký tự** (khoảng 40.000–50.000 ký tự tiếng Trung / khoảng 100.000 từ tiếng Anh).

**Q: Quota của Agent được tính như thế nào?**

Agent, PPT và các tính năng thành viên khác dùng chung một kho quota. Kimi Code dùng một kho quota riêng. Mỗi tác vụ Agent thường được tính là một đơn vị quota. Xem quota hiện tại và mức sử dụng của bạn tại [Membership Credits](https://www.kimi.com/membership-credits).
