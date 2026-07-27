---
title: "Số dư và mức sử dụng"
slug: "api-balance-and-usage"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Số dư và mức sử dụng - Kimi Help Center"
  description="Kimi API cung cấp nhiều cách để xem số dư tài khoản và chi tiết sử dụng, giúp bạn theo dõi mức tiêu thụ và chi phí."
/>

# Số dư và mức sử dụng

Kimi API cung cấp nhiều cách để xem số dư tài khoản và chi tiết sử dụng, giúp bạn theo dõi mức tiêu thụ và chi phí.

## Bảng điều khiển console

Đăng nhập vào [platform.kimi.ai](https://platform.kimi.ai) và mở trang **fee-detail** (chi tiết thanh toán) trong console để xem:

- Số dư tài khoản hiện tại
- Phân tích mức sử dụng hằng ngày
- Mức sử dụng và chi phí theo từng model
- Xu hướng chi tiêu trong quá khứ

<Callout type="info">
Thông tin thanh toán hằng ngày được cập nhật trước **7:00 sáng ngày hôm sau**. Dữ liệu sử dụng theo thời gian thực có thể có độ trễ nhẹ.
</Callout>

> **Lưu ý**: Thông tin thanh toán hằng ngày được cập nhật trước **7:00 sáng ngày hôm sau**. Dữ liệu sử dụng theo thời gian thực có thể có độ trễ nhẹ.

## API Token Estimation

Trước khi gửi yêu cầu, bạn có thể dùng API Token Estimation để ước tính lượt gọi sẽ tiêu thụ bao nhiêu token — hữu ích cho việc kiểm soát chi phí.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Truyền cùng định dạng `messages` như trong yêu cầu Chat Completion, API sẽ trả về số lượng token ước tính.

## API truy vấn số dư

Truy vấn trực tiếp số dư tài khoản hiện tại của bạn qua API:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Thêm API Key của bạn vào header yêu cầu để lấy số dư khả dụng.

## Mẹo giám sát mức sử dụng

<Callout type="tip">
**Khuyến nghị**:
- Kiểm tra trang fee-detail thường xuyên để theo dõi xu hướng chi tiêu
- Tích hợp API truy vấn số dư và thiết lập ngưỡng cảnh báo số dư
- Dùng API Token Estimation trước các lượt gọi quan trọng để ước tính chi phí
</Callout>
