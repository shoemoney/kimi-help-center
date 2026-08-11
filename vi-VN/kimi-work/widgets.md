---
title: "Widgets"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Widgets trong Kimi Work - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu về Widgets trong Kimi Work: các trang tương tác do mô hình tạo ra ngay trong một cuộc trò chuyện. Gắn một widget task để tạo live widget tự động cập nhật, và lưu widget vào Dashboard của bạn."
/>

# Widgets

Widget là một trang tương tác do mô hình tạo ra và hiển thị ngay trong một cuộc trò chuyện. Bạn không cần đưa ra chỉ dẫn rõ ràng về đầu ra — mô hình sẽ tạo widget khi phù hợp với tình huống (ví dụ: hiển thị bản đồ, soạn email, sắp xếp công thức nấu ăn hoặc trực quan hóa dữ liệu), giúp bạn hiểu câu trả lời nhanh hơn và trực quan hơn.

Widget có thể kết nối với dữ liệu cục bộ hoặc plugin bên ngoài để cập nhật liên tục, và có thể được lưu vào [Dashboard](/kimi-work/dashboard) để xem và quản lý lâu dài.

## Tạo một Widget

1. Mô tả nhu cầu của bạn bằng ngôn ngữ tự nhiên trong một cuộc trò chuyện, ví dụ:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tạo cho tôi một widget tổng hợp tin tức công nghệ Mỹ hằng ngày, cập nhật lúc 9 giờ sáng mỗi ngày",
    },
  ]}
/>

2. Trong quá trình tạo, bạn có thể theo dõi trang widget dần hình thành từng bước;
3. Sau khi tạo xong, widget đã sẵn sàng để tương tác ngay trong cuộc trò chuyện.

## Widget Task và Live Widget

- **Widget Task**: một tác vụ tự động chạy khi đáp ứng điều kiện cụ thể — có thể được kích hoạt theo lịch hoặc theo sự kiện.
- **Live Widget**: một widget được gắn với một widget task, có nội dung tự động cập nhật sau mỗi lần tác vụ chạy. Ví dụ, khi widget "Bản tin công nghệ Mỹ hằng ngày" được gắn với một tác vụ chạy vào mỗi buổi sáng, nội dung của nó sẽ tự động làm mới mỗi ngày.

<Callout type="info">
Số lượng widget task được chạy đồng thời có giới hạn và tùy theo gói. Khi đạt đến giới hạn, hãy tạm dừng một số tác vụ từ trang Dashboard trước khi tạo tác vụ mới.
</Callout>

## Lưu vào Dashboard

Sau khi widget được tạo, di chuột lên widget và chọn "Save to Dashboard" để lưu nó vào một dashboard. Một widget có thể tồn tại đồng thời trong nhiều dashboard.

Trong Dashboard, bạn cũng có thể xem tác vụ được gắn với một live widget, bật hoặc tắt tác vụ đó, và kiểm tra 10 lần chạy gần nhất. Xem [Dashboard](/kimi-work/dashboard).
