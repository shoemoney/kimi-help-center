---
title: "Tổng quan về Kimi Claw"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Triển khai và quản lý trợ lý AI Kimi Claw của riêng bạn trên đám mây chỉ với thiết lập một chạm."
---

<SeoMeta
  title="Tổng quan về Kimi Claw - Trung tâm trợ giúp Kimi"
  description="Triển khai và quản lý trợ lý AI Kimi Claw của riêng bạn trên đám mây chỉ với thiết lập một chạm."
/>

# Tổng quan sản phẩm

<Callout type="info">
**Kimi Claw** là một trợ lý AI mang cá tính riêng và bộ nhớ dài hạn được lưu giữ bền bỉ. Với Kimi Claw, bạn có thể tạo, triển khai và trò chuyện với phiên bản OpenClaw của riêng mình ngay trong Kimi.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Triển khai lên đám mây chỉ với một chạm

Bạn chưa có OpenClaw? Hãy truy cập [kimi.com/bot](https://kimi.com/bot) để tạo một cái. Kimi sẽ triển khai nó lên đám mây giúp bạn — không cần mua máy chủ, không cần thiết lập dòng lệnh.

<Callout type="warning">

- Triển khai một chạm yêu cầu gói **Allegretto trở lên**. [Các gói thành viên](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi tự động cấu hình **mô hình Kimi K2.6**, liên kết **quyền lợi tín dụng thành viên Kimi** của bạn và bật Kimi Web Search — không cần cấu hình API riêng.
- Nếu muốn chuyển sang **mô hình Kimi K3**, bạn có thể điều chỉnh cấu hình mô hình trong cài đặt Kimi Claw, hoặc tham khảo hướng dẫn cấu hình nâng cao.
- Kimi Claw có thể được triển khai trực tiếp lên Telegram và các nền tảng trò chuyện khác.

## Bắt đầu

1. Đăng nhập tại [kimi.com/bot](https://kimi.com/bot)
2. Nhấp **Create** để khởi tạo một Kimi Claw mới
3. Chờ quá trình thiết lập tự động hoàn tất (thường mất vài phút)
4. Tùy chỉnh tên và cá tính cho Kimi Claw của bạn
5. Trong **Settings → Chat Channels**, kết nối các nền tảng bạn muốn dùng (ví dụ: Telegram)

## Liên kết một OpenClaw hiện có

Nếu bạn đã tự lưu trữ một phiên bản OpenClaw, bạn có thể kết nối nó với Kimi bằng cách cài đặt plugin Kimi:

1. Truy cập [kimi.com/bot](https://kimi.com/bot) và chọn **Link Existing OpenClaw**
2. Làm theo hướng dẫn để cài đặt plugin trên thiết bị OpenClaw của bạn
3. Sau khi kết nối, bạn có thể trò chuyện với OpenClaw của mình thông qua Kimi

<a id="switch-to-k3"></a>
## Chuyển sang mô hình Kimi K3

Kimi Claw mặc định sử dụng mô hình Kimi K2.6. Nếu bạn muốn sử dụng Kimi K3, có thể chạy lệnh sau để tự động sửa đổi cấu hình OpenClaw cục bộ.

```bash
# 1. Back up the current config
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. Add the k3 model and switch the default model (example uses jq)
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. Restart OpenClaw
openclaw gateway restart

# 4. Verify
session_status
```

Sau khi thực hiện, vui lòng xác nhận trong kết quả `session_status` rằng `model` hiển thị là `kimi-coding/k3`, và giới hạn `context` là `1.0m`.

<Callout type="warning">
Đường dẫn tệp cấu hình có thể khác nhau tùy theo cách cài đặt, vui lòng thay thế `/root/.openclaw/openclaw.json` theo thực tế của bạn. Nhớ sao lưu trước khi sửa đổi.
</Callout>
