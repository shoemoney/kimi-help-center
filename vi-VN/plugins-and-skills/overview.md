---
title: "Plugin Kimi là gì?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Kết nối các công cụ bên ngoài với Kimi để Kimi có thể sử dụng các ứng dụng và dịch vụ nhằm hoàn thành tác vụ. Sau khi cài đặt plugin, Kimi có thể gọi các năng lực của bên thứ ba — như dữ liệu tài chính, phần mềm văn phòng và công cụ thiết kế — để giúp bạn hoàn thành công việc."
---

<SeoMeta
  title="Plugin Kimi là gì? Cách cài đặt và sử dụng - Trung tâm trợ giúp Kimi"
  description="Tìm hiểu về plugin Kimi: kết nối các dịch vụ bên ngoài như dữ liệu tài chính, phần mềm văn phòng và công cụ thiết kế với Kimi, và gọi trực tiếp trong khi hoàn thành tác vụ. Bao gồm các trường hợp có thể dùng plugin, cài đặt và ủy quyền, cách gọi plugin, danh mục plugin và mức tiêu hao credit."
/>

# Plugin Kimi là gì?

Plugin kết nối các công cụ bên ngoài với Kimi để Kimi có thể sử dụng các ứng dụng và dịch vụ nhằm hoàn thành tác vụ. Sau khi bạn cài đặt một plugin, Kimi có thể trực tiếp gọi năng lực tương ứng của bên thứ ba trong quá trình hoàn thành tác vụ — ví dụ: truy vấn dữ liệu tài chính, thao tác phần mềm văn phòng hoặc sử dụng công cụ thiết kế. Bạn có thể chủ động yêu cầu sử dụng một plugin cụ thể, và Kimi cũng sẽ tự động gọi plugin khi phù hợp.

## Thế nào là một plugin Kimi?

Plugin Kimi tuân theo [định nghĩa plugin của Kimi Code](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) và có thể bao gồm một hoặc nhiều thành phần sau:

| Thành phần | Vai trò |
| --- | --- |
| Skills | Cung cấp kiến thức, các bước và hướng dẫn sử dụng cần thiết để hoàn thành tác vụ |
| MCP | Kết nối phần mềm, dịch vụ, cơ sở dữ liệu hoặc API bên ngoài |
| Agents | Ủy giao các tác vụ phức tạp cho các sub-agent chuyên biệt |
| Hooks | Tự động chạy các hành động được định nghĩa trước khi một sự kiện cụ thể xảy ra |
| Commands | Cung cấp các điểm truy cập dạng lệnh rõ ràng, có thể tái sử dụng |
| System Prompt | Thêm chỉ thị hệ thống cho Agent chính trong thời gian plugin được bật |

Trải nghiệm Kimi trên web hiện hỗ trợ MCP và Skills trong plugin. Kimi Work và Kimi Code tuân theo đầy đủ định nghĩa plugin ở trên và hỗ trợ các tổ hợp thành phần plugin hoàn chỉnh hơn.

**Ví dụ:**

- **Notion Plugin** = Notion MCP + Skill hướng dẫn sử dụng
- **Plugin nghiên cứu tài chính** = nhiều MCP tài chính + nhiều Skill phân tích + một Agent tùy chỉnh

## Bạn có thể sử dụng plugin ở đâu

Bạn có thể sử dụng plugin khi chuyển mô hình sang **K3** hoặc **K3 Swarm**, cũng như trong các trường hợp **Deep Research, Websites và PPT**.

Bạn cũng có thể sử dụng plugin trong **ứng dụng desktop Kimi Work**; danh sách plugin tích hợp sẵn trên desktop có tại [Trung tâm plugin Kimi Work](/kimi-work/plugin-center).

<Callout type="info">
Plugin chưa được hỗ trợ trong các cuộc trò chuyện Kimi Claw hoặc Kimi Plus.
</Callout>

## Cài đặt plugin

- **Điểm truy cập**: dùng nút **+** trong ô nhập liệu hoặc gõ "/"; trên di động, dùng nút **+** trong ô nhập liệu hoặc "/".
- Tìm kiếm hoặc duyệt trong chợ plugin, mở trang chi tiết của plugin rồi nhấp cài đặt.
- Một số plugin yêu cầu **ủy quyền OAuth** (bạn sẽ được chuyển đến trang đăng nhập của bên thứ ba; sau khi ủy quyền thành công là có thể sử dụng); một số plugin được **cài đặt sẵn**, không cần cài đặt thủ công.
- **Plugin chỉ dành cho doanh nghiệp**: người dùng không thuộc bản doanh nghiệp vẫn có thể nhìn thấy, nhưng nút "Cài đặt" bị mờ, không thể cài đặt.
- Bạn không thể cài đặt hoặc sử dụng plugin khi chưa đăng nhập.

## Sử dụng plugin

- Sau khi cài đặt, gõ "/" trong ô nhập liệu hoặc nhấp **+** → Plugin, rồi chọn plugin để gọi; bạn có thể **gọi nhiều plugin cùng lúc**.
- Bạn cũng có thể chỉ cần mô tả nhu cầu (ví dụ: "tra cứu công ty này trên Tianyancha"), Kimi sẽ tự động chọn plugin phù hợp.
- Khi Kimi gọi công cụ của plugin, nó sẽ hiển thị "Đang sử dụng plugin xx" trong phản hồi.

## Danh mục và danh sách plugin

Chợ plugin được tổ chức theo các danh mục dưới đây. Các plugin bạn thực tế nhìn thấy sẽ khác nhau tùy theo **khu vực (nội địa / quốc tế)** và **phiên bản ứng dụng**, và một số plugin xuất hiện ở nhiều danh mục.

- **Tài chính**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, IMF (International Monetary Fund) Database, Stripe, Tianyancha
- **Năng suất**: Notion, Baidu Netdisk
- **Phát triển**: GitHub, Supabase, Neon, Cloudflare
- **Sáng tạo**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **Chung**: Vivify

## Dữ liệu và quyền

- Khi bạn chọn hoặc yêu cầu rõ ràng sử dụng một plugin, Kimi ưu tiên các công cụ mà plugin đó cung cấp và tạo câu trả lời dựa trên kết quả các công cụ đó trả về; sau khi kết nối plugin, Kimi sẽ truy cập nội dung liên quan trong phạm vi bạn ủy quyền.
- Nếu plugin do bên thứ ba cung cấp, quy tắc xử lý dữ liệu của nó do công ty đó tự đặt ra, và dữ liệu chịu sự điều chỉnh của điều khoản dịch vụ cùng chính sách quyền riêng tư của họ — bạn nên xem xét kỹ trước khi ủy quyền.
- Bạn có thể **gỡ cài đặt plugin hoặc thu hồi ủy quyền bất cứ lúc nào**. Sau khi gỡ cài đặt, ủy quyền OAuth liên quan sẽ bị thu hồi; để sử dụng lại plugin, bạn cần cài đặt và ủy quyền lại.

## Câu hỏi thường gặp

### Sử dụng plugin có tiêu hao credit thành viên của tôi không?
Một số plugin có. Khi Kimi gọi công cụ hoặc dịch vụ của plugin để hoàn thành tác vụ, credit sẽ bị tiêu hao dựa trên mức sử dụng thực tế; các plugin không có chi phí gọi sẽ không phát sinh thêm phí.

### Tôi có thể sử dụng nhiều plugin cùng lúc không?
Có. Bạn có thể gọi nhiều plugin cùng lúc thông qua "/" hoặc **+**.

### Tại sao tôi không nhìn thấy một plugin nào đó?
Các plugin khả dụng sẽ khác nhau tùy theo khu vực (nội địa / quốc tế) và phiên bản ứng dụng; ngoài ra, một số plugin chỉ dành cho người dùng cá nhân hoặc doanh nghiệp.

### Tôi có thể sử dụng plugin từ ChatGPT, Claude hoặc các nền tảng khác không?
Có. Xem [Cách tạo plugin cá nhân](/plugins-and-skills/create): cung cấp các tệp plugin hiện có hoặc liên kết dự án từ nền tảng khác cho Plugin Builder, rồi làm theo hướng dẫn để chuyển đổi thành plugin Kimi.
