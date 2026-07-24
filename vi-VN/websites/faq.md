---
title: "Câu hỏi thường gặp về Kimi Websites"
slug: "websites-faq"
order: 3
extract_headings: true
preview: false
preview_content: "Những câu hỏi thường gặp khi sử dụng Kimi Websites."
---

<SeoMeta
  title="Câu hỏi thường gặp về Kimi Websites - Trung tâm trợ giúp Kimi"
  description="Cách xử lý các sự cố thường gặp với Kimi Websites, gồm lỗi xem trước, trang trắng, mất dữ liệu và lỗi xuất bản."
/>

# Câu hỏi thường gặp về Kimi Websites

> Để xem hướng dẫn đầy đủ về các nút trong khung xem trước, chế độ chỉnh sửa, xuất bản và hủy xuất bản, hãy xem [Kimi Websites](/websites/websites-overview). Trang này chỉ đề cập đến những sự cố thường gặp.

## Khung xem trước không tải được hoặc tôi không thấy phiên bản mới nhất?

> Ví dụ: "Website không hiển thị", "Bản xem trước vẫn là phiên bản cũ" hoặc "Tôi không thấy phiên bản đã lưu mới nhất".

Trong hầu hết trường hợp, website đã được tạo và lưu thành công. Lỗi "không thấy" thường nằm ở khung xem trước hoặc phần hiển thị thẻ phiên bản. Nguyên nhân phổ biến nhất là thư mục dự án không đúng. Các trường hợp khác có thể xử lý theo thứ tự sau:

<Callout type="warning">
**Kiểm tra thư mục dự án**: Dự án website phải nằm tại `/mnt/agents/output/app`. Khung xem trước chỉ đọc các phiên bản được lưu từ thư mục này. Nếu Kimi đặt dự án ở nơi khác, chẳng hạn thư mục tạm `/tmp`, phiên bản có thể đã lưu thành công nhưng khung xem trước sẽ không đọc được — hãy yêu cầu Kimi chuyển dự án về đúng thư mục này rồi lưu lại.
</Callout>

1. **Làm mới trang hoặc mở lại cuộc trò chuyện** — đôi khi thẻ phiên bản cần vài giây mới xuất hiện.
2. **Yêu cầu Kimi lưu một phiên bản mới trong cuộc trò chuyện.**
3. **Nếu cuộc trò chuyện quá dài, hãy thử bắt đầu cuộc trò chuyện mới** (xem mục "Cuộc trò chuyện của tôi rất dài — có nên bắt đầu cuộc trò chuyện mới không?" bên dưới).
4. Nếu vẫn không thấy: mã nguồn và phiên bản thường đã được lưu thành công (bạn có thể hỏi Kimi số phiên bản). Đây thường là dao động tạm thời của dịch vụ xem trước — vui lòng thử lại sau. Nếu sự cố kéo dài, hãy nhấp **Phản hồi của người dùng** (biểu tượng phong bì) trong khung xem trước để gửi phản hồi kèm số phiên bản; đội ngũ của chúng tôi sẽ kiểm tra.

## Website bị trắng, màn hình trắng, sập hoặc không phản hồi?

> Ví dụ: "Trang hoàn toàn trắng", "Website trống", "Website bị sập" hoặc "Không có gì hiển thị / nhấp vào không có phản ứng".

- Màn hình trắng hoặc bị sập thường do **lỗi runtime ở front-end** (chẳng hạn thiếu dependency, truy cập trực tiếp một trang con, hoặc một tài nguyên/hình ảnh riêng lẻ tải thất bại). Hãy mô tả triệu chứng cho Kimi trong cuộc trò chuyện (ảnh chụp màn hình sẽ rất hữu ích), Kimi sẽ xác định và sửa lỗi, rồi lưu phiên bản mới.
- Nếu bạn nghi ngờ màn hình trắng do **thiếu tệp**, mỗi phiên bản website đều lưu một snapshot. Hãy yêu cầu Kimi khôi phục từ một phiên bản lịch sử (xem mục "Tệp hoặc thư mục dự án bị thiếu" bên dưới).
- **Tương thích trình duyệt**: Một số trình duyệt chú trọng quyền riêng tư (Brave, một số tiện ích bổ sung của Firefox) có thể chặn việc tải tài nguyên front-end, gây lỗi hiển thị. Hãy thử thêm tên miền Kimi vào danh sách cho phép, tạm thời tắt shield/trình chặn quyền riêng tư, hoặc chuyển sang Chrome / Edge / Safari.

## Nếu nhấp "Xuất bản" thất bại thì sao?

Cách xử lý tương tự như trên: hãy thử lại sau. Nếu sự cố kéo dài, hãy gửi qua **Phản hồi của người dùng** kèm số phiên bản. Phiên bản đã được lưu thành công và không cần dựng lại từ đầu.

## Liên kết website có hiệu lực trong bao lâu? Có hết hạn không?

Nếu bạn nhấp **Xuất bản** để triển khai website công khai, liên kết được tạo sẽ có hiệu lực vô thời hạn, trừ khi bạn tự nhấp **Hủy xuất bản** để chuyển website về trạng thái riêng tư, hoặc nội dung bị gắn cờ là không phù hợp.

## Nội dung, dữ liệu hoặc bản ghi bị thiếu?

> Ví dụ: "Nội dung trên trang chủ của tôi biến mất", "Kiến thức tôi tải lên cơ sở dữ liệu không còn", "Thông tin tôi đã tải lên bị thiếu" hoặc "AI nói dữ liệu đã mất vĩnh viễn".

Trong hầu hết trường hợp, dữ liệu thực ra chưa bị mất. Hãy kiểm tra theo thứ tự sau:

1. **Trước tiên, xác nhận website có thực sự là "full-stack" hay không**: Chỉ những website full-stack được xây dựng với **năng lực back-end (cơ sở dữ liệu)** mới lưu dữ liệu vào cơ sở dữ liệu đám mây của nền tảng, duy trì qua nhiều lần truy cập và trên nhiều thiết bị. Trên thực tế, nhiều website tự nhận là "full-stack" **cuối cùng lại chỉ có front-end**, dữ liệu chưa bao giờ thực sự đi vào cơ sở dữ liệu — trong trường hợp này, việc làm mới trang hoặc đổi thiết bị đương nhiên sẽ khiến dữ liệu trước đó biến mất. Hãy yêu cầu Kimi xác nhận dự án có back-end và cơ sở dữ liệu thật hay không.
2. **Website thuần front-end**: Dữ liệu chỉ được lưu trong bộ nhớ cục bộ của trình duyệt hiện tại (localStorage). Đổi trình duyệt / thiết bị hoặc xóa dữ liệu trình duyệt sẽ khiến dữ liệu mất đi. Nếu bạn cần lưu dữ liệu lâu dài và dùng được trên nhiều thiết bị, hãy yêu cầu Kimi chuyển sang giải pháp full-stack có cơ sở dữ liệu.
3. **Website đã xác nhận là full-stack**: Dữ liệu được lưu trong cơ sở dữ liệu đám mây do nền tảng quản lý. **Xuất bản phiên bản mới sẽ không xóa dữ liệu hiện có**; nếu website là full-stack nhưng dữ liệu vẫn không hiển thị, đây thường là sự cố tạm thời — hãy làm mới hoặc thử lại sau.
4. **Nếu bạn xác nhận dữ liệu thực sự đã mất**: Hãy nhấp **Phản hồi của người dùng** (biểu tượng phong bì) trong khung xem trước để gửi phản hồi; đội ngũ của chúng tôi sẽ kiểm tra. Lúc này, đừng tiếp tục thao tác lặp lại để tránh ghi đè.

## Tệp hoặc thư mục dự án bị thiếu, hoặc có thông báo "đặt lại môi trường" / "không thể khôi phục"?

> Ví dụ: "Thư mục dự án website của tôi biến mất và không thể khôi phục", "Tệp bị thiếu" hoặc "Thông báo đặt lại môi trường".

- Mỗi phiên bản website đều **lưu một snapshot**, nên mã nguồn thường có thể được khôi phục từ các phiên bản lịch sử. Hãy yêu cầu Kimi liệt kê các phiên bản lịch sử và rollback / khôi phục về một phiên bản cụ thể.
- Nếu sự cố xảy ra trong một **cuộc trò chuyện rất dài** (đặc biệt khi bạn đã đổi mô hình giữa chừng), chúng tôi khuyên bạn nên bắt đầu cuộc trò chuyện mới (xem mục tiếp theo).
- Nếu vẫn không thể khôi phục, hãy nhấp **Phản hồi của người dùng** để gửi phản hồi; đội ngũ của chúng tôi sẽ kiểm tra.

## Cuộc trò chuyện của tôi rất dài — có nên bắt đầu cuộc trò chuyện mới không?

Nếu một cuộc trò chuyện đã kéo dài lâu, trải qua nhiều phiên bản, hoặc bạn đã đổi mô hình giữa chừng (chẳng hạn K2.6 → K3), các năng lực hiện tại có thể không phải phiên bản mới nhất, dẫn đến mất ngữ cảnh hoặc bất thường về tệp. **Chúng tôi khuyên bạn nên bắt đầu cuộc trò chuyện mới** để có được năng lực xây dựng và bàn giao mới nhất. Các website đã xuất bản và phiên bản lịch sử không bị ảnh hưởng, vẫn có thể truy cập bình thường.

## Tôi có thể tự triển khai sau khi xuất mã nguồn không?

Bạn có thể tải xuống toàn bộ mã nguồn dự án và triển khai lên máy chủ riêng, nhưng hai mục sau do nền tảng Kimi cung cấp và **sẽ không đi kèm khi di chuyển mã nguồn**:

- **Đăng nhập tài khoản Kimi**: Đây là năng lực đăng nhập do nền tảng cung cấp, không thể dùng trực tiếp sau khi rời nền tảng Kimi. Nếu bạn cần đăng nhập khi tự triển khai, hãy yêu cầu Kimi xây dựng hệ thống đăng nhập bằng tên người dùng/mật khẩu dựa trên cơ sở dữ liệu của riêng bạn.
- **Cơ sở dữ liệu do nền tảng quản lý**: Dữ liệu của website full-stack được lưu trong cơ sở dữ liệu đám mây mà nền tảng cấp riêng cho website đó. Mã nguồn xuất ra không bao gồm dữ liệu này, cũng không tự động kết nối với cơ sở dữ liệu riêng của bạn. Tự triển khai đồng nghĩa với việc bạn cần thiết lập cơ sở dữ liệu riêng và di chuyển dữ liệu.

Nếu bạn chỉ muốn trang web có thể truy cập công khai, chỉ cần dùng tính năng **Chia sẻ → Xuất bản** của nền tảng. Không cần tự thiết lập máy chủ — đăng nhập tài khoản Kimi và dữ liệu đám mây vẫn sẽ hoạt động bình thường.

## Website được tạo không đúng yêu cầu của tôi?

- Trong cuộc trò chuyện, hãy chỉ rõ phần nào chưa đúng: ví dụ màu sắc, bố cục, văn bản, module tính năng, bảng dữ liệu, v.v.
- Bạn có thể tải lên ảnh tham khảo, trang web mẫu hoặc mô tả bằng văn bản chi tiết hơn để Agent chỉnh sửa theo tài liệu tham khảo.
- Nếu sau nhiều lần chỉnh sửa bạn vẫn chưa hài lòng, hãy thử bắt đầu cuộc trò chuyện mới với phần mô tả yêu cầu có cấu trúc rõ ràng hơn.

## Sau khi tạo, tôi còn có thể chỉnh sửa nội dung, liên kết hoặc kiểu dáng của website không?

Có. Trong cuộc trò chuyện ban đầu, hãy tiếp tục cho Agent biết bạn muốn chỉnh sửa gì, ví dụ:

- "Đổi tiêu đề trang chủ thành XXX"
- "Đổi liên kết của nút 'Liên hệ với chúng tôi' thành https://xxx"
- "Chuyển toàn bộ sang giao diện tối"

Sau khi chỉnh sửa, Agent sẽ tạo lại và triển khai một liên kết mới.

## Làm thế nào để thêm back-end, cơ sở dữ liệu hoặc chức năng đăng nhập cho website?

- Trong yêu cầu xây dựng website, hãy nhấn mạnh rằng bạn muốn một trang web full-stack có cơ sở dữ liệu và chức năng đăng nhập.
- Hoặc bạn có thể để Agent tạo trang front-end trước, sau đó xuất mã nguồn và giao cho lập trình viên phát triển tiếp.

## Tôi có thể tải mã nguồn website hoặc xuất sang GitHub không?

Phiên bản hiện tại hỗ trợ tải tất cả tệp về máy. Trong cuộc trò chuyện, hãy mở "Tất cả tệp" rồi nhấp nút tải xuống.

## Việc tạo/chỉnh sửa website tiêu tốn bao nhiêu credit?

Tạo website là một tác vụ phức tạp, thường tiêu tốn khá nhiều token/credit, tùy thuộc vào:

- Số lượng trang và độ phức tạp
- Có bao gồm hình ảnh, bảng và logic tương tác hay không
- Số lần chỉnh sửa lặp lại

Chúng tôi khuyên bạn nên mô tả yêu cầu càng rõ càng tốt để giảm việc thử sai. Nếu chưa hài lòng với kết quả, bạn có thể giải thích tình huống trong phản hồi.

## Tạo website rất chậm, cứ phải xếp hàng, hoặc terminal bị lỗi?

- Vào giờ cao điểm (ban ngày và buổi tối các ngày trong tuần) có thể xảy ra tình trạng xếp hàng. Chúng tôi khuyên bạn nên sử dụng vào giờ thấp điểm.
- Nếu tác vụ bị kẹt quá 10 phút, trước tiên hãy thử làm mới trang web.
- Với website phức tạp, chúng tôi khuyên bạn nên chia nhỏ thành các tác vụ: bắt đầu từ trang chủ, rồi dần thêm trang con và tính năng.

## Kimi Websites phù hợp với những trường hợp nào? Không phù hợp với trường hợp nào?

**Phù hợp với:**

- Trang cá nhân/portfolio, landing page sự kiện, trang giới thiệu sản phẩm, trang công cụ đơn giản, nguyên mẫu game nhỏ
- Kiểm chứng nhanh ý tưởng thiết kế và tạo demo tương tác
- Website cần cơ sở dữ liệu back-end đơn giản và hệ thống người dùng

**Không phù hợp với:**

- Website phức tạp có hệ thống thanh toán
- Môi trường production chính thức cần concurrency cao và độ sẵn sàng cao
- Website kinh doanh cần hosting ổn định lâu dài với tên miền tùy chỉnh

---

Nếu các cách trên không giải quyết được vấn đề, vui lòng gửi qua nút **Phản hồi của người dùng** ở góc dưới bên phải của web/app Kimi, hoặc [liên hệ bộ phận hỗ trợ khách hàng](/others/contact-support). Chúng tôi khuyên bạn đính kèm:

- Liên kết website nơi xảy ra sự cố
- Trình duyệt và hệ điều hành bạn đang sử dụng
- Ảnh chụp màn hình hoặc nội dung thông báo lỗi
- Thời gian ước chừng của cuộc trò chuyện ban đầu

Chúng tôi sẽ tiếp tục tối ưu năng lực tạo website dựa trên phản hồi của bạn.
