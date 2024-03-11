## Tổng quan về tính năng Sitejet Builder trên cPanelTổng quan về tính năng Sitejet Builder trên cPanel
[Sitejet Builder](https://cpanel.net/sitejet-builder) là một công cụ tạo website trực tuyến, giúp bạn có thể tạo một website đẹp, nhiều chức năng mà không cần có kiến thức về thiết kế hay lập trình. Sitejet Builder cung cấp một loạt các tính năng và công cụ giúp bạn dễ dàng tạo và tùy chỉnh website của mình, bao gồm:

### Bước 1: Truy cập vào Sitejet Builder trong cPanel
Để bắt đầu, hãy đăng nhập vào cpanel của bạn và chọn Sitejet Builder.
Bạn sẽ tìm thấy tính năng này ở cột menu bên trái hoặc trong mục Domains

![Sitejet Builder](image/sitejet-cpanel.png)


Lưu ý:
Khi bạn xuất bản một trang web Sitejet, hệ thống sẽ xóa tất cả các tệp và thư mục con khỏi thư mục gốc của tên miền đã chọn bao gồm tệp .htaccess và bất kỳ thư mục con nào.

Bạn có thể xem và quản lý thư mục gốc của têm miền trong giao diện Domains của cPanel (cPanel » Home » Domains).

### Bước 2: Thêm tên miền để sử dụng Sitejet Builder

Nếu bạn chỉ có duy nhất 1 domain và chưa cài đặt trang web nào thì Sitejet Builder sẽ chuyển hướng đến Sitejet Websites/Choose Template.Giả sử bạn đã có một tên miền với một trang web trên đó, bạn sẽ cần phải tạo một tên miền mới cho trang web sitejet. Chọn Create A New Domain(1) để tạo domain mới

![Sitejet Builder](image/sitejet-cpanel-1.png)

Sau khi chọn **Build With Sitejet** bạn sẽ được đưa vào trang chọn mẫu. Ở đây có rất nhiều mẫu theo chủ đề và lĩnh vực. Bạn có thể tìm kiếm mẫu ở **Cột bên trái**, sau đó chọn **View** để xem trước. Nếu mẫu phù hợp bạn hãy chọn **Choose** để cài đặt vào tên miền.

![Sitejet Websites/Choose Template](image/sitejet-cpanel-2.png)

Khi click vào chế độ View sẽ chuyển sang giao diện xem trước nếu thấu phù hợp bạn có thể click vào choose để chọn mẫu này.  Trong phần view phía trên sẽ có các chế độ xem: Desktop, Table và Mobile.

![View](image/sitejet-cpanel-3.png)

### Thiết kế lại giao diện
Khi bạn lựa chọn giao diện thì sẽ chuyển hướng sang trang cms.sitehub.io của Sitejet  để thao tác chỉnh sửa. Việc chỉnh sữa thì thao tác trực tiếp . Ví dụ muốn đổi lại logo của trang web thì bạn click và upload logo mới lên website. Bài viết này chỉ demo qua 1 vài thao tác thiết kế, điều chỉnh lại giao diện bạn chọn.

![cms.sitehub.io](image/sitejet-cpanel-4.png)

Sau khi thiết kế xong bạn click vào Publish để đẩy web lên hosting của bạn.

![Publish](image/sitejet-cpanel-5.png)

Tiếp theo là bạn đợi Sitejet cài đặt website lên hosting

![Publish](image/sitejet-cpanel-6.png)

Và bây giờ truy cập vào website để xem kết quả

![Publish](image/sitejet-cpanel-7.png)




### Các tuỳ chỉnh sau thiết kế

Nếu bạn muốn thay đổi lại Page trên bạn hãy truy cập vào lại Sitejet Builder. Tại đây sẽ có 3 hành đồng cho bạn lựa chọn.

- Details: Xem chi tiết website
- Change Template: Thay đổi một mẫu mới
- Edit Site: Chỉnh sửa lại website

![Publish](image/sitejet-cpanel-8.png)

Sitejet Builder là một công cụ tạo website trực tuyến giúp bạn dễ dàng tạo một website đẹp và chuyên nghiệp mà không cần có kiến thức về thiết kế hay lập trình. Sitejet Builder cung cấp một loạt các tính năng và công cụ, bao gồm:

- Mẫu thiết kế đẹp mắt và chuyên nghiệp
- Trình chỉnh sửa kéo và thả dễ sử dụng
- Hệ thống quản lý nội dung mạnh mẽ
- Tính năng tối ưu hóa công cụ tìm kiếm

### "Bạn không thể tạo một trang web Sitejet": Làm thế nào để giải quyết vấn đề này

Bạn có thể thấy một tên miền được liệt kê trong giao diện Sitejet Builder không cho phép bạn tạo một trang web, hiển thị thông báo này bên dưới "Bạn không thể tạo trang web Sitejet hiện tại". Nó có thể là một trong những lý do sau đây:

- Thư mục gốc đang được chia sẻ(dùng chung) với tên miền khác

    Bạn không thể sử dụng thư mục gốc được chia sẻ với Sitejet. Để khắc phục sự cố này, hãy thực hiện một trong các thao tác sau:
    - Sử dụng Tên miền chính.
    - Tạo một tên miền mới.
    - Xóa tên miền phụ đang dùng chung thư mục gốc hoặc đổi vị trí thư mục gốc của tên miền phụ.
- Trang web chuyển hướng
    Tương tự, bạn không thể sử dụng một trang web được chuyển hướng với Sitejet. Để giải quyết vấn đề này, hãy thực hiện các bước sau:

    - Điều hướng đến giao diện Chuyển hướng (cPanel » Home » Domains » Redirects).
    - Điều hướng đến Chuyển hướng hiện tại. Tìm miền được chuyển hướng mong muốn và nhấp vào Xóa. Một hộp xác nhận sẽ xuất hiện.
    - Nhấp vào Xóa chuyển hướng. Một thông báo thành công sẽ xuất hiện.