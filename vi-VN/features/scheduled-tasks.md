---
title: "Tác vụ đã lên lịch"
slug: "scheduled-tasks"
order: 5
extract_headings: false
preview: true
preview_content: "Tác vụ đã lên lịch cho phép Kimi tự động chạy một tác vụ cố định vào thời điểm bạn đặt — rất phù hợp cho bản tin hằng ngày, theo dõi hằng tuần và dọn dẹp định kỳ. Có trong Kimi và ứng dụng máy tính Kimi Work."
---

<SeoMeta
  title="Cách sử dụng Tác vụ đã lên lịch của Kimi - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu về tác vụ đã lên lịch của Kimi: để Kimi tự động chạy một tác vụ vào thời điểm đã đặt, theo lịch hằng ngày, hằng tuần, hằng tháng hoặc một lần, có thể đặt ngày hết hạn và kết hợp với Skills cho các công việc phức tạp hơn. Rất phù hợp cho bản tin hằng ngày, theo dõi ngành hằng tuần và dọn dẹp dữ liệu định kỳ. Có trong Kimi và ứng dụng máy tính Kimi Work."
/>

# Tác vụ đã lên lịch

Tác vụ đã lên lịch cho phép Kimi tự động chạy một tác vụ cố định vào thời điểm bạn đặt, để bạn không phải khởi chạy thủ công mỗi lần. Tính năng này rất phù hợp với các công việc lặp lại định kỳ — bản tin hằng ngày, theo dõi ngành hằng tuần, dọn dẹp dữ liệu định kỳ, v.v.

Tác vụ đã lên lịch là một tính năng chung, có trong **Kimi** và **ứng dụng máy tính Kimi Work**.

## Tạo tác vụ đã lên lịch

Có hai cách:

- **Từ điểm vào**: nhấp vào "Tạo tác vụ đã lên lịch" ở thanh bên rồi điền nội dung tác vụ trong hộp thoại;
- **Từ cuộc trò chuyện**: mô tả nhu cầu lên lịch bằng ngôn ngữ tự nhiên, Kimi sẽ tạo tác vụ đã lên lịch cho bạn, tự động soạn tiêu đề, lịch chạy và nội dung tác vụ.

Một tác vụ đã lên lịch bao gồm:

- **Tiêu đề**: tóm tắt tác vụ để bạn dễ tìm trong danh sách tác vụ;
- **Lịch chạy**: hằng ngày, hằng tuần, hằng tháng hoặc không lặp lại (một lần);
- **Ngày hết hạn**: bạn có thể đặt thời điểm tác vụ hết hạn (được chọn mặc định khi tạo);
- **Nội dung tác vụ**: một prompt mô tả việc tác vụ cần làm. Đến thời điểm đã lên lịch, Kimi sẽ chạy prompt cố định này.

## Viết prompt tác vụ hiệu quả

Một prompt tác vụ tốt cần nêu rõ ba điều cùng lúc:

- **Khi nào**: thời điểm chạy (một ngày cụ thể / một giờ mỗi ngày / một ngày trong tuần);
- **Định dạng đầu ra**: bạn muốn kết quả như thế nào (ý chính, bảng, mẫu, số từ, ngôn ngữ);
- **Ràng buộc**: những điều không được làm hoặc bắt buộc phải đáp ứng (ví dụ: trong 200 từ, chỉ dùng tiếng Trung, kèm ghi chú rủi ro, chỉ xuất 3 mục).

**Mẫu chung**: Vào [thời gian], hãy [tác vụ], xuất dưới dạng [định dạng] và tuân theo [ràng buộc].

Dưới đây là một vài ví dụ bạn có thể sao chép và điều chỉnh:

<CodePreview
  files={[
    {
      name: "market-news.txt",
      language: "text",
      content: "Mỗi ngày lúc 9:00, tóm tắt tin tức thị trường mới nhất thành 3 ý chính kèm 1 ghi chú rủi ro, bằng tiếng Trung, trong 200 từ.",
    },
    {
      name: "daily-report-reminder.txt",
      language: "text",
      content: "Sau 1 giờ nữa, nhắc tôi hoàn thành báo cáo công việc hôm nay và đính kèm mẫu báo cáo (cấu trúc bốn phần).",
    },
    {
      name: "bedtime-reminder.txt",
      language: "text",
      content: "Tối nay lúc 22:30, nhắc tôi: tắt máy tính, vệ sinh cá nhân và chuẩn bị đi ngủ. Giữ giọng điệu nhẹ nhàng.",
    },
  ]}
/>

## Quản lý tác vụ đã lên lịch

**Danh sách tác vụ** hiển thị tất cả tác vụ đã lên lịch của bạn (sắp xếp theo thời gian). Trên mỗi thẻ tác vụ, bạn có thể:

- bật hoặc tắt tác vụ;
- thực hiện thêm thao tác: định vị tác vụ, chạy một lần ngay, chỉnh sửa và xóa.

Trong cuộc trò chuyện, tác vụ đã lên lịch xuất hiện dưới dạng **thẻ tác vụ**, hiển thị tiêu đề, tần suất, thời điểm chạy tiếp theo và nội dung — bạn cũng có thể chạy ngay, tạm dừng, chỉnh sửa hoặc xóa.

## Chạy tác vụ và thông báo

- Đến thời điểm đã lên lịch, Kimi sẽ chạy prompt cố định được đặt trong tác vụ;
- Mỗi lần chạy sẽ tạo một thông báo được đánh dấu là chưa đọc; bạn có thể xem kết quả của từng lần chạy và chuyển đến cuộc trò chuyện tương ứng;
- Trạng thái đã đọc được đồng bộ giữa web và thiết bị di động;
- Sau khi tác vụ chạy, bạn có thể **chọn một model để tiếp tục hỏi nối tiếp** trong cuộc trò chuyện kết quả, và nhập "/" để **gọi plugin và Skills**.

## Kết hợp với Skills

Tác vụ đã lên lịch có thể kết hợp với **Skills** để xử lý công việc phức tạp hơn — đặc biệt là **Skills tài chính** của Kimi (dữ liệu thị trường, phân tích báo cáo lợi nhuận, v.v.).

Trước khi dùng, hãy **cài đặt và kiểm thử Skill trước**, xác nhận Skill hoạt động như mong muốn, rồi mới đưa vào tác vụ đã lên lịch.

## Hết hạn

Khi bạn tạo tác vụ, ngày hết hạn được chọn mặc định để tránh các tác vụ cũ tồn đọng. Thời hạn mặc định là:

- Hằng ngày: +7 ngày;
- Hằng tuần: +1 tháng;
- Hằng tháng: +3 tháng.

<Callout type="info">
Các tác vụ đã lên lịch chạy cục bộ trong ứng dụng máy tính Kimi Work không chịu các quy tắc hết hạn ở trên; tác vụ cục bộ chạy theo chu kỳ khi ứng dụng đang mở, và các lần kích hoạt bị bỏ lỡ khi ứng dụng đóng sẽ không được chạy bù sau đó.
</Callout>

## Quota và gói dịch vụ

Tác vụ đã lên lịch giới hạn số **tác vụ có thể hoạt động đồng thời** (không giới hạn số tác vụ bạn tạo). Số tác vụ hoạt động được tăng theo gói thành viên của bạn:

| Gói | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Tác vụ đã lên lịch | 2 | 6 | 15 | 20 | 25 |

- Khi bạn đã đạt giới hạn tác vụ hoạt động và tạo thêm tác vụ mới, tác vụ mới sẽ được **lưu ở trạng thái không hoạt động**, kèm nhắc nhở nâng cấp hoặc tắt bớt một số tác vụ;
- Nếu giới hạn tác vụ hoạt động của bạn giảm xuống (hạ cấp gói hoặc quyền lợi hết hạn), các tác vụ vượt giới hạn sẽ tự động bị tạm dừng.

Để xem quota mới nhất, hãy tham khảo [trang gói thành viên](/membership/membership-pricing).

<Callout type="tip">
**Mẹo**: Trước khi lên lịch cho một tác vụ, hãy thử nội dung đó một lần trong cuộc trò chuyện thông thường, hoặc dùng "Chạy một lần ngay" để kiểm tra — bảo đảm cách diễn đạt rõ ràng và kết quả đúng như bạn mong đợi trước khi phụ thuộc vào lịch chạy. Nếu tác vụ phụ thuộc vào một Skill, hãy cài đặt và kiểm thử Skill đó trước.
</Callout>

## Câu hỏi thường gặp

### Có giới hạn số lượng tác vụ đã lên lịch mà tôi có thể tạo không?
Không giới hạn số lượng tác vụ bạn tạo, nhưng số tác vụ có thể **hoạt động đồng thời** sẽ tùy theo gói của bạn. Khi vượt giới hạn hoạt động, tác vụ mới sẽ được lưu ở trạng thái không hoạt động; bạn có thể nâng cấp hoặc tắt bớt một số tác vụ để kích hoạt tác vụ đó.

### Tôi có cần để máy tính hoặc ứng dụng luôn mở để tác vụ chạy không?
Các tác vụ đã lên lịch tạo trong Kimi chạy trên cloud — bạn không cần mở client. Các tác vụ chạy cục bộ trong ứng dụng máy tính Kimi Work yêu cầu ứng dụng phải đang mở; các lần kích hoạt bị bỏ lỡ khi ứng dụng đóng sẽ không được chạy bù sau đó.

### Tôi có thể chọn model khi tác vụ đã lên lịch chạy không?
Khi tạo tác vụ, có hai chế độ: **tạo thủ công** và **tạo qua trò chuyện**. Tạo thủ công mặc định dùng model K2.6 để tạo tác vụ đã lên lịch; với tạo qua trò chuyện, bạn có thể đổi model sau khi bắt đầu cuộc trò chuyện mới, rồi nhập prompt để tạo tác vụ. Sau khi tác vụ chạy, một cuộc trò chuyện kết quả sẽ được tạo, tại đó bạn có thể đổi model để tiếp tục hỏi nối tiếp, và nhập "/" để gọi plugin và Skills.

### Nếu tôi chạm giới hạn tác vụ hoạt động thì sao?
Hãy tắt những tác vụ không còn cần thiết, hoặc nâng cấp gói để có giới hạn hoạt động cao hơn. Xem [trang gói thành viên](/membership/membership-pricing) để biết chi tiết.
