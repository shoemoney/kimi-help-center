---
title: "Câu hỏi thường gặp khi tạo kỹ năng"
slug: "create-custom-skills-faq"
order: 9
extract_headings: true
preview: false
---

<SeoMeta
  title="Câu hỏi thường gặp khi tạo kỹ năng - Trung tâm trợ giúp Kimi"
  description="Những câu hỏi thường gặp khi tạo Kimi Skills, bao gồm tải tài liệu lên, sử dụng token, giới hạn tần suất, đặt tên kỹ năng và xử lý lỗi khi tạo."
/>

# Câu hỏi thường gặp (FAQ) về kỹ năng

## Vì sao nút "Tạo kỹ năng" bị vô hiệu hóa?

Điều này có thể xảy ra vì những lý do sau:
1. Tệp tải lên hoặc phần mô tả kỹ năng chưa đầy đủ.
2. Định dạng hoặc số lượng tệp không đáp ứng yêu cầu.
3. Hệ thống phát hiện quota của tài khoản bạn đã cạn.

## Việc tạo Skills tiêu hao quota như thế nào?

Tạo một kỹ năng sẽ tiêu hao **token** của bạn, có thể lấy từ lượt tìm kiếm được tặng hoặc từ quota thành viên chính thức.

**Thứ tự trừ**:
1. Ưu tiên dùng lượt tìm kiếm được tặng trước.
2. Nếu không còn lượt tìm kiếm được tặng, hệ thống sẽ dùng quota thành viên.

<Callout type="info">
Nếu quá trình tạo thất bại, sẽ không trừ token. Token chỉ bị tiêu hao khi tạo thành công.
</Callout>

## Có giới hạn về số lượng hoặc tần suất tạo không?

Có. Để đảm bảo hệ thống ổn định và sử dụng công bằng, có những giới hạn sau:

1. **Giới hạn concurrency**: Tối đa **3 tác vụ** (Đang tạo + Thất bại) có thể chạy song song. Nếu chạm giới hạn này, bạn sẽ nhận được thông báo thử lại sau một thời gian.
2. **Giới hạn hàng ngày**: Mỗi người dùng có thể thực hiện tối đa **10 lần chuyển đổi "Tài liệu văn phòng thành kỹ năng"** mỗi ngày (bao gồm cả lần thử lại). Vượt quá giới hạn này sẽ hiển thị thông báo toast.

## Tôi nên làm gì khi tạo kỹ năng thất bại?

* Bạn có thể chọn **Thử lại** hoặc **Xóa** thẻ kỹ năng bị lỗi.
* Những lần thử thất bại không tiêu hao quota.
* Phần mô tả kỹ năng ban đầu sẽ hiển thị trên thẻ bị lỗi để giúp bạn phân biệt các tác vụ khác nhau.

## Yêu cầu đặt tên cho kỹ năng mới là gì?

Tên kỹ năng mới phải tuân theo các quy tắc sau:
1. **Không được trùng với kỹ năng hiện có**: Bao gồm cả kỹ năng chính thức và bất kỳ kỹ năng nào bạn đã thêm.
   - Ví dụ, nếu bạn đã có kỹ năng A, B và C, việc tạo kỹ năng mới tên A sẽ yêu cầu đổi tên để tránh xung đột.
2. **Độ dài ký tự**: Tối đa 25 ký tự.
3. **Ký tự được phép**: Chỉ chữ thường tiếng Anh, dấu gạch nối `-` và dấu gạch dưới `_`.

<Callout type="info">
Tuân thủ các quy tắc này giúp kỹ năng của bạn được thêm thành công và tránh nhầm lẫn với những kỹ năng hiện có.
</Callout>

## Nếu tên kỹ năng bị báo là "đã được sử dụng" thì sao?

Khi tạo kỹ năng mới, hệ thống sẽ kiểm tra xem tên bạn nhập có trùng với kỹ năng hiện có hay không, bao gồm cả kỹ năng chính thức và những kỹ năng bạn đã thêm.
Nếu phát hiện xung đột, một cửa sổ bật lên sẽ hiện ra với nội dung:
> Tên kỹ năng `/skill-name` đã được sử dụng. Vui lòng đổi tên để tránh nhầm lẫn.

Lúc này, bạn có thể nhập một tên kỹ năng mới rồi nhấn **Đổi tên và thêm**, hoặc nhấn **Hủy** để bỏ việc tạo.

## Nếu tôi không giải quyết xung đột tên thì sao?

Hệ thống không cho phép thêm các kỹ năng có tên trùng nhau. Nếu bạn không giải quyết xung đột tên, bạn sẽ không thể hoàn tất việc tạo kỹ năng.
