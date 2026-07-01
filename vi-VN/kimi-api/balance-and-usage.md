---
title: "Số dư & mức sử dụng"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Số dư & mức sử dụng - Trung tâm trợ giúp Kimi"
  description="Kimi API cung cấp nhiều cách để xem số dư tài khoản và chi tiết mức sử dụng, giúp bạn theo dõi mức tiêu thụ và chi phí."
/>

# Số dư & mức sử dụng

Kimi API cung cấp nhiều cách để xem số dư tài khoản và chi tiết mức sử dụng, giúp bạn theo dõi mức tiêu thụ và chi phí.

## Bảng điều khiển trên console

Đăng nhập vào [platform.moonshot.ai](https://platform.moonshot.ai) và truy cập trang **fee-detail** (chi tiết thanh toán) trong console để xem:

- Số dư tài khoản hiện tại
- Phân tích mức sử dụng theo ngày
- Mức sử dụng và chi phí theo từng mô hình
- Xu hướng chi tiêu trong quá khứ

<Callout type="info">
Dữ liệu thanh toán hằng ngày được cập nhật trước **7:00 sáng ngày hôm sau**. Dữ liệu sử dụng theo thời gian thực có thể có độ trễ nhỏ.
</Callout>

> **Lưu ý**: Dữ liệu thanh toán hằng ngày được cập nhật trước **7:00 sáng ngày hôm sau**. Dữ liệu sử dụng theo thời gian thực có thể có độ trễ nhỏ.

## API ước tính token

Trước khi gửi yêu cầu, bạn có thể dùng Token Estimation API để ước tính số token mà lệnh gọi sẽ tiêu tốn — rất hữu ích cho việc kiểm soát chi phí.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Truyền vào định dạng `messages` giống như một yêu cầu Chat Completion, và API sẽ trả về số token ước tính.

## API truy vấn số dư

Truy vấn số dư tài khoản hiện tại trực tiếp qua API:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Đưa API Key của bạn vào header của yêu cầu để lấy số dư khả dụng.

## Mẹo theo dõi mức sử dụng

<Callout type="tip">
**Thực hành tốt nhất**:
- Kiểm tra trang fee-detail thường xuyên để theo dõi xu hướng chi tiêu
- Tích hợp Balance Query API và thiết lập ngưỡng cảnh báo số dư
- Dùng Token Estimation API trước các lệnh gọi quan trọng để ước tính chi phí
</Callout>
