---
title: "Tích hợp công cụ"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Tích hợp công cụ - Trung tâm trợ giúp Kimi"
  description="Ngoài việc tích hợp với IDE, Kimi Code CLI còn có thể tích hợp với nhiều công cụ khác để nâng cao quy trình làm việc trên terminal của bạn."
/>

# Tích hợp công cụ

<Callout type="info">
Ngoài việc tích hợp với IDE, Kimi Code CLI còn có thể tích hợp với nhiều công cụ khác để nâng cao quy trình làm việc trên terminal của bạn.
</Callout>

## Plugin Zsh

[zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli) là một plugin Zsh giúp bạn nhanh chóng chuyển sang Kimi Code CLI ngay từ shell.

### Cài đặt qua Oh My Zsh

Nếu bạn dùng Oh My Zsh, hãy làm theo các bước sau để cài đặt:

1. Sao chép kho lưu trữ vào thư mục plugin tùy chỉnh của Oh My Zsh:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. Thêm `kimi-cli` vào danh sách plugin trong `~/.zshrc`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Tải lại cấu hình:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Cách dùng

Sau khi cài đặt, hãy nhấn **Ctrl-X** trong terminal để nhanh chóng chuyển sang Kimi Code CLI mà không cần gõ thủ công lệnh `kimi`.
