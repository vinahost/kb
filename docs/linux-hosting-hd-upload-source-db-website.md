# Linux Hosting - Hướng dẫn upload source code, database của website
Khi host một website, chúng ta cần thực hiện các bước chung như sau:
1. Upload source code
2. Import database
3. Liên kết source code với database
## Upload source code
Có 2 cách thông dụng và dễ dàng nhất để upload source code:
- Sử dụng các phần mềm FTP Client (FileZilla, WinSCP)
- Sử dụng chức năng File Manager trong cPanel
### Cách 1: Sử dụng các phần mềm FTP Client
Sau đây là hướng dẫn sử dụng phần mềm FileZilla để upload source code. Các bước thực hiện tương tự đối với phần mềm WinSCP.

**Bước 1: Kết nối đến host**
Mở FileZilla và nhập thông tin vào các trường tương ứng:
- Host: IP của remote host
- Username: username của remote host
- Password: mật khẩu của username
- Port: sử dụng cổng 21 (FTP) hoặc 22 (SFTP)
Có thể xem username, IP ngay trong giao diện cPanel.
![[cpanel/images/username&ip.png]]

Sau khi nhập đầy đủ các trường, nhấn **Quickconnect** để bắt đầu kết nối.
Chọn **OK** nếu có hộp thoại tiếp theo hiện lên.
Nếu kết nối thành công:
- Phần **Status** hiển thị trạng thái *connected* và *successful*
- Phần **Remote site** hiển thị cây thư mục và các thư mục, tệp của remote host
![[ftp_conected.png]]

**Bước 2: Upload source code**
Vào thư mục **public_html** của remote host.
Chú ý, đường dẫn sẽ có dạng: `/home/username/public_html`
![[publichtml_path.png]]

Click vào tệp nén source code, kéo và thả tệp từ phần **Local site** sang **Remote site**. Bên dưới sẽ có tiến trình tải tệp từ local host đến remote host.
![[cpanel/images/drag&drop.png]]
### Cách 2: Sử dụng File Manager trong cPanel
Tìm trên giao diện cPanel hoặc nhập vào ô tìm kiếm và chọn **File Manager**.
![[file_manager.png]]

Vào thư mục **public_html**, click chuột phải vào tệp nén source code và chọn **Extract (Giải nén)**.
![[cpanel/images/extract.png]]

Chọn **Extract Files** để bắt đầu quá trình giải nén.
![[extract_promt.png]]

Sau khi giải nén thành công, vào thư mục vừa giải nén, nhấp **Select All** để chọn tất cả các tệp và thư mục. Tiếp theo, nhấp vào **Move** để chuẩn bị di chuyển chúng đến **public_html**.
![[cpanel/images/select_all_to_move.png]]

Chú ý, đường dẫn phải là thư mục **public_html**. Sau đó, chọn **Move Files** để bắt đầu quá trình di chuyển.
![[cpanel/images/move.png]]

Sau khi quá trình di chuyển hoàn tất, có thể an toàn xoá tệp nén source code và thư mục rỗng (do đã chuyển hết tệp và thư mục ra ngoài).
![[cpanel/images/delete_unneccesary.png]]

Như vậy là chúng ta đã hoàn thành bước upload source code.
## Import database
Thực hiện lần lượt các bước sau để import database:
1. Tạo database
2. Tạo user và gán các quyền cho user
3. Nhập dữ liệu database
### 1. Tạo database
Tìm trên giao diện cPanel hoặc nhập vào ô tìm kiếm và chọn **MySQL Databases**.
![[mysql_db_func.png]]

Nhập tên database và nhấn **Create Database**.
![[create_db.png]]

### 2. Tạo user và gán các quyền cho user
Cũng trong giao diện **MySQL Databases**, kéo xuống phía dưới để tạo user tại phần **MySQL Users - Add New User**.
Nhập username, nhập mật khẩu tuỳ ý hoặc chọn **Password Generator** để tạo mật khẩu mạnh. Chọn **Create User**.
![[create_user.png]]

Trong hộp thoại Password Generator, nhấn **Generate Password** để tạo mật khẩu mạnh. Hãy chắc chắn rằng đã sao chép và lưu lại mật khẩu. Tích vào ***I have copied...*** và nhấn **Use password**.
![[gen_passwd.png]]

Tiếp tục kéo xuống phía dưới. Tại phần **Add User To Database**, chọn đúng User và Database rồi nhấn **Add**.
![[add_user_to_db.png]]

Sau khi nhấn **Add**, ở giao diện tiếp theo, tích vào ***ALL PRIVILEGES*** để gán tất cả các quyền thao tác với database cho user đã chọn. Kéo xuống phía dưới và chọn **Make Changes** để áp dụng thay đổi.
![[grant_privileges.png]]
![[make_changes_privileges.png]]
### 3. Nhập dữ liệu database
Tìm trên giao diện cPanel hoặc nhập vào ô tìm kiếm và chọn **phpMyAdmin**.
![[phpmyadmin_func.png]]

cPanel sẽ chuyển hướng đến giao diện của phpMyAdmin để nhập dữ liệu database.
Chọn đúng database cần nhập dữ liệu (database mà bạn đã tạo ở bước 1), sau đó chọn **Import**.
![[import_db.png]]

Trong giao diện Import, nhấp vào **Browse** để chọn tệp database. Sau đó, kéo xuống dưới và chọn **Import** để bắt đầu quá trình nhập dữ liệu cho database.
![[browse_db_file.png]]
![[cpanel/images/import_button.png]]

Nếu nhập dữ liệu thành công sẽ thấy các bảng trong database hiện trên màn hình khi chọn vào database đó.
![[cpanel/images/import_successfully.png]]
## Liên kết source code với database
Sau khi đã upload source code và import database, để website hoạt động đúng thì chúng ta phải kiểm tra kết nối giữa source code và database. Nếu không, khi truy cập website rất có thể hiển thị lỗi như *Error Establishing a Database Connection* hoặc các thông báo lỗi tương tự.

Đối với WordPress, sửa đổi các giá trị để kết nối database trong tệp `wp-config.php`.
Sử dụng File Manager của cPanel, click chuột phải vào tệp `wp-config.php` và chọn **Edit**. Tiếp tục nhấn **Edit** ở hộp thoại tiếp theo sẽ vào được giao diện chỉnh sửa.
![[edit_wpconfig_file.png]]
![[edit_button.png]]

Lưu ý một số giá trị:
- `DB_NAME`: tên database
- `DB_USER`: tên user
- `DB_PASSWORD`: mật khẩu của user
Nhấn **Save Changes** ở góc phải trên của màn hình để lưu các thay đổi.
![[cpanel/images/edit_wpconfig.png]]

Sau khi hoàn thành tất cả các bước trên, truy cập website để kiểm tra.
![[cpanel/images/website.png]]
## Kết luận
Việc host một website không đòi hỏi quá nhiều thao tác, gồm 3 bước cơ bản:
1. Upload source code
2. Import database
3. Liên kết source code với database
Điểm đáng lưu ý là các giá trị trong tệp `wp-config.php` phải được cấu hình đúng để website có thể hoạt động.
Chúc các bạn thực hiện thành công 😊.