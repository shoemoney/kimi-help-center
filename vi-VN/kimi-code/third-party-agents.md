---
title: "Sử dụng cùng các coding agent của bên thứ ba"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Sử dụng cùng các coding agent của bên thứ ba - Trung tâm trợ giúp Kimi"
  description="Quyền lợi Kimi Code có thể dùng được với Claude Code và Roo Code, giúp bạn tận hưởng năng lực AI của Kimi ngay trong công cụ lập trình yêu thích."
/>

# Sử dụng cùng các coding agent của bên thứ ba

Quyền lợi Kimi Code có thể dùng được với Claude Code và Roo Code, giúp bạn tận hưởng năng lực AI của Kimi ngay trong công cụ lập trình yêu thích.

## Điều kiện cần

- Một gói thành viên Kimi đang hoạt động và đã bật quyền lợi Kimi Code.
- Một API Key (được tạo trong [Kimi Console](https://www.kimi.com/code)).

## Sử dụng cùng Claude Code

[Claude Code](https://code.claude.com/docs/en/overview) là trợ lý lập trình dòng lệnh do Anthropic phát triển.

### Các bước cấu hình

Sau khi cài đặt, đừng khởi động Claude ngay. Trước tiên hãy chạy script sau trong terminal để bỏ qua luồng đăng nhập mặc định của Anthropic:

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      content: "node --eval \"\n// enable third party model support and fast mode\nconst claudeJsonFilePath = path.join(os.homedir(), '.claude.json');\nif (fs.existsSync(claudeJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeJsonFilePath, 'utf-8'));\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ ...content, penguinModeOrgEnabled: true, hasCompletedOnboarding: true }, null, 2), 'utf-8');\n} else {\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ penguinModeOrgEnabled: true, hasCompletedOnboarding: true }), 'utf-8');\n}\n\n// delete old model id\nconst claudeSettingsJsonFilePath = path.join(os.homedir(), '.claude', 'settings.json');\nif (fs.existsSync(claudeSettingsJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeSettingsJsonFilePath, 'utf-8'));\n    if (typeof content === 'object' && typeof content.env === 'object') {\n        for (const element of [\n            'ANTHROPIC_MODEL',\n            'ANTHROPIC_SMALL_FAST_MODEL',\n            'CLAUDE_CODE_SUBAGENT_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME',\n        ]) {\n            delete content.env[element];\n        }\n        fs.writeFileSync(claudeSettingsJsonFilePath, JSON.stringify(content, null, 2), 'utf-8');\n    }\n}\n\"",
    },
  ]}
/>

Sau đó, thiết lập các biến môi trường và khởi động:

1. Thiết lập các biến môi trường:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Khởi chạy Claude Code với mô hình `kimi-for-coding`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> Trong Claude Code, bạn có thể nhấn **Tab** để chuyển sang mô hình Kimi K2 Thinking.

> Nếu gặp lỗi 400 do các lệnh gọi `tool_search` gây ra, bạn có thể tạm thời khắc phục bằng cách đặt biến môi trường `ENABLE_TOOL_SEARCH=false`.

### Chuyển sang HighSpeed

HighSpeed cho tốc độ đầu ra khoảng 5–6× so với Standard với **mức tiêu thụ tín dụng khoảng 3×**, và cần gói [Allegretto](https://www.kimi.com/membership/pricing) trở lên. Có hai cách bật trong Claude Code:

- **Cách 1: lệnh `/fast on`** — sau khi khởi động Claude Code, gõ `/fast on`; kết quả `⚡ Fast mode ON` xác nhận đã bật.
- **Cách 2: lệnh `/config`** — gõ `/config` để mở bảng cấu hình, rồi bật **Fast mode** (và **Thinking mode**) trong tab **Config**.

## Sử dụng cùng Roo Code

[Roo Code](https://github.com/RooCodeInc/Roo-Code) là một tiện ích lập trình AI dành cho VS Code.

### Cài đặt Roo Code

1. Tìm **Roo Code** trong VS Code Extensions Marketplace rồi cài đặt.
2. Sau khi cài xong, biểu tượng Roo Code sẽ xuất hiện trên thanh hoạt động; nếu không thấy, hãy khởi động lại VS Code.

### Cấu hình mô hình Kimi Code

1. Mở bảng điều khiển Roo Code và vào trang **Settings**.
2. Tại mục **Providers**, chọn **OpenAI Compatible** và điền các thông tin sau:

   | Thiết lập | Giá trị |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | API Key của bạn |
   | Model | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. Lưu cấu hình là bạn đã sẵn sàng.

## Lưu ý quan trọng

- Quyền lợi Kimi Code chỉ được hỗ trợ trên **Kimi Code CLI**, **Claude Code** và **Roo Code**.
- Việc dùng API Key của bạn với những nền tảng hoặc công cụ chưa được cấp phép có thể bị xem là vi phạm và dẫn đến việc bị hạn chế quyền truy cập.
- Nếu có thắc mắc, hãy xem trang [Quyền lợi](/kimi-code/benefits) hoặc liên hệ bộ phận hỗ trợ Kimi.
