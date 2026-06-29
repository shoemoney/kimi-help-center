---
title: "Sử dụng Skills trong Kimi Code"
slug: "use-skills-in-code"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Sử dụng Skills trong Kimi Code - Trung tâm Trợ giúp Kimi"
  description="Tìm hiểu cách tạo và gọi Skills trong Kimi Code CLI để chuẩn hóa quy ước lập trình của nhóm và tự động hóa quy trình phát triển."
  ogType="article"
/>

# Sử dụng Skills trong Kimi Code

Kimi Code là trợ lý lập trình AI được thiết kế riêng cho lập trình viên, chạy trực tiếp trong terminal hoặc trình soạn thảo để hỗ trợ viết code, sửa lỗi và tạo tài liệu. Kimi Code hỗ trợ cung cấp hướng dẫn dựa trên tri thức thông qua tệp `SKILL.md`. Sau khi đọc, AI sẽ tuân theo các tiêu chuẩn được định nghĩa bên trong. Phù hợp để định nghĩa phong cách code, quy trình làm việc và các phương pháp tốt nhất.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Gọi skills bằng lệnh gạch chéo"
/>

## Gọi Skills

Kimi Code CLI cho phép bạn gọi Skills bằng lệnh gạch chéo:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Ví dụ, khi nhập `/skill:git-commits`, Kimi Code sẽ đọc nội dung `SKILL.md` tương ứng và gửi nó dưới dạng chỉ thị cho Agent.

Bạn cũng có thể bổ sung mô tả thêm sau lệnh gạch chéo, phần này sẽ được nối vào cuối chỉ thị Skill:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

Đối với các cuộc trò chuyện thông thường, bạn không cần gọi thủ công—Agent sẽ tự động xác định dựa trên ngữ cảnh xem có cần đọc nội dung Skill hay không.

## Tạo Skill đầu tiên của bạn

Việc tạo một Skill chỉ cần hai bước: Tạo một thư mục con trong thư mục Skills, sau đó tạo tệp `SKILL.md` bên trong.

Vị trí lưu trữ được khuyến nghị (áp dụng cho mọi dự án):

<CodePreview
  files={[
    {
      name: "Cấu trúc thư mục",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` sử dụng YAML Frontmatter để định nghĩa siêu dữ liệu, theo sau là Markdown cho các quy chuẩn cốt lõi:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Cả `name` và `description` trong Frontmatter đều là trường tùy chọn. Nếu bỏ trống, tên thư mục sẽ được dùng làm giá trị mặc định.

### Ví dụ

Nhóm của bạn yêu cầu thông điệp commit phải tuân theo định dạng Conventional Commits, nhưng việc phải giải thích lặp đi lặp lại thật phiền phức. Bằng cách viết nó thành một Skill, sau này bạn chỉ cần một lệnh duy nhất để gọi.

**Bước 1: Tạo tệp Skill**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**Bước 2: Sau khi hoàn tất các thay đổi code, gọi Skill**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code sẽ đọc các tiêu chuẩn của bạn, kết hợp với mô tả tác vụ và trực tiếp xuất ra một thông điệp commit đúng định dạng mà bạn không cần lặp lại bất kỳ yêu cầu định dạng nào.

## Flow Skills: Định nghĩa quy trình nhiều bước

Trong khi Skills thông thường cung cấp các tiêu chuẩn tĩnh, **Flow Skills** có thể định nghĩa các quy trình tự động gồm nhiều bước.

Đặt `type: flow` trong Frontmatter và nhúng một lưu đồ theo định dạng Mermaid hoặc D2 để tạo một Flow Skill.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Thực thi bằng lệnh `/flow:<name>`. Agent sẽ bắt đầu từ nút `BEGIN` và tự động hoàn thành tuần tự từng bước cho đến khi đạt `END`.

## Cơ chế tải Skill

Kimi Code CLI tìm kiếm và tải Skills theo thứ tự ưu tiên sau (kết quả khớp đầu tiên được ưu tiên):

1. **Skills tích hợp sẵn**: Được cài đặt cùng gói phần mềm, cung cấp các năng lực cơ bản.
2. **Skills cấp người dùng**: Lưu trong thư mục chính, áp dụng cho mọi dự án.
3. **Skills cấp dự án**: Lưu trong thư mục dự án, chỉ áp dụng cho dự án đó.

Bạn cũng có thể chỉ định thủ công các thư mục Skills bổ sung bằng tham số `--skills-dir`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
Kimi Code CLI bao gồm hai Skills tích hợp sẵn hữu ích: `kimi-cli-help` (trả lời các câu hỏi về cách sử dụng CLI) và `skill-creator` (hướng dẫn bạn tạo Skills mới). Nhập `/skill:skill-creator` để bắt đầu.
</Callout>

Để xem đầy đủ các tùy chọn cấu hình và giải thích tham số, vui lòng tham khảo [Tài liệu Skills của Kimi Code CLI](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).
