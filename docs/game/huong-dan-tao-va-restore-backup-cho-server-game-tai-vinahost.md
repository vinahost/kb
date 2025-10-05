# Hướng dẫn tạo và restore backup cho Server Game tại Vinahost

Bài viết này sẽ giới thiệu về **Hướng dẫn tạo và restore backup cho Server Game tại Vinahost** và lợi ích của nó. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext. 3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat <https://livechat.vinahost.vn/chat.php>

### 1. Tạo backup

Sau khi đăng nhập vào panel quản lý server tại Vinahost, chọn mục **Backups**

 ![](attachments/458941a0-d6eb-482a-83a1-1b5356141a27.png)

Ta đặt tên cho file backup này. Ở phần **Ignored Files & Directories**, nhập những file muốn bỏ qua, không lưu vào file backup. Để trống nếu muốn backup toàn bộ

 ![](attachments/b4fb536a-4e7c-4300-915b-de5a8560767b.png)

Quá trình backup đã diễn ra

 ![](attachments/de8d72a5-3796-4d23-bcab-712ca74adb77.png)

### 2. Restore backup

Để tiến hành restore backup ta quay lại tab **Backups** và chọn vào file backup cần restore

 ![](attachments/5dc02d17-c005-42bd-92a3-8af5cc34b470.png " =1248x277")

Tích vào `Delete all files before restoring backup` nếu muốn xóa hết các file rồi mới restore (chỉ áp dụng nếu file backup ở mục một không loại trừ bất kỳ file/thư mục nào)

 ![](attachments/b15c4c0e-b7c4-4b27-922b-94fae91daa47.png)

Quá trình restore đã được bắt đầu, trong khoảng thời gian này server sẽ bị tạm dừng và bạn sẽ không thể bắt đầu các thao tác khác cho đến khi nó hoàn tất.

 ![](attachments/2d8c0b9c-49d4-481b-8c78-7b57cb92cfa2.png " =1247x346")

Sau khi hoàn tất restore, chúng ta sẽ tiến hành khởi động server lên

 ![](attachments/aa06ec95-fd72-418c-a016-fb3b77e8f485.png)

 ![](attachments/292943e6-d9a1-49c4-971e-748fb4e8dc7b.png)

**Chúc bạn thực hiện thành công!**

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **>>** **[SERVER](https://vinahost.vn/thue-may-chu-rieng/)** **–** **[COLOCATION](https://vinahost.vn/colocation.html)** – **[CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**
>
> **>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**
>
> **>> [HOSTING](https://vinahost.vn/wordpress-hosting)**
>
> **>> [EMAIL](https://vinahost.vn/email-hosting)**
>
> **>> [WEBSITE](http://vinawebsite.vn/)**
>
> **>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**