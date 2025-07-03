# Hướng dẫn tạo database trên FastPanel

Bài viết này sẽ giới thiệu về **Hướng dẫn tạo database trên FastPanel** và lợi ích của nó. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext. 3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat <https://livechat.vinahost.vn/chat.php>

# 1. Khởi tạo

Đầu tiên, ta truy cập FastPanel và chọn Management => Databases

 ![](attachments/b827ff42-14e1-419e-9a21-bf6575b22f1a.png)

Chọn New database để tiến hành tạo database

 ![](attachments/8445ecc2-8c01-4df4-a581-7faf4fe6a531.png)

Ta sẽ điền các thông tin liên quan gồm:

**Name:** Tên Database

**Character Set:** Bộ ký tự (nên để mặc định)

**Owner:** User sở hữu database (hay còn gọi là user database, có thể thay đổi sau)

**Website:** Website cần gán database

**User:** Lựa chọn tạo mới

**Login:** Database user

**Password:** Mật khẩu của Database user

**Confirm the password:** Xác nhận lại mật khẩu

 ![](attachments/e2e4cd7e-daae-482e-b591-d65393b9ae78.png)

Note lại các thông tin đặc biệt quan trọng gồm **Name, Login** và **Password**, sau đó chọn Save để tiến hành tạo

 ![](attachments/4c469a43-987f-4e34-b4d8-7d94ecaa7c38.png)

# 2. Quản lý và các thao tác cơ bản

## a. Import/Export bằng giao diện phpMyAdmin

Chọn Open phpMyAdmin hoặc nút mũi tên chéo để mở thẳng trang quản lý cho database chỉ định

 ![](attachments/3b3c1d63-d09b-4833-902d-323ea0bb1fb2.png)

Chọn đúng database cần thao tác

 ![](attachments/e41592c8-b4b9-4554-be0e-2b494d4025ca.png)

Chọn Import nếu ta cần nhập dataabse

 ![](attachments/75eceba5-2dae-48db-a253-b17ea6f6ec32.png)

Các định dạng cơ bản hỗ trợ gồm:

* \*.sql
* \*.sql.zip
* \*.sql.gzip

 ![](attachments/68f092b8-8b26-4b11-b109-e0ae114e4d40.png)

Kéo xuống dưới cùng => Import

 ![](attachments/28dc94fd-0393-429b-9151-b69a8e48fb1e.png)

Hoàn tất import, thời gian thực thi sẽ dựa theo kích thước của file database

 ![](attachments/b612198f-4bda-4d8c-8264-6b0f91ba4c89.png)

Đối với Export, ta chọn database và qua tab Export

 ![](attachments/f7d5bbb4-e1d0-4e95-a096-812087c6a929.png)

Chọn định dạng mong muốn => Export

 ![](attachments/d1b774a3-0186-4061-89a0-90eae1be9fe1.png)

Trình duyệt sẽ tiến hành tải file về máy tính đang sử dụng

 ![](attachments/d0a24fe7-db57-4bf4-9b5e-a3d157499763.png)

## b. Import/Export bằng giao diện FastPanel

Chọn vào nút 3 chấm của database cần thao tác => Upload SQL-dump

 ![](attachments/719ba1a7-5576-4448-b835-bb0d1799f6b4.png)

 ![](attachments/5e8c1fc9-6d26-4ca7-8e3f-92a448eb2224.png)

Hoàn tất import

 ![](attachments/a45fc0d4-4569-4d3c-acc2-dcd72399bf4b.png)

Đối với Export, ta sẽ chọn Create SQL dump via dump để tạo file trước nếu chưa có tùy chọn Download SQL dump

 ![](attachments/ef9a35bc-51a2-43bd-887e-b2d245768806.png)

Sau đó chọn Download SQL dump để tải file .sql về máy

 ![](attachments/72238672-29a2-4e73-906d-6534537e7498.png)

Hoàn tất

 ![](attachments/d0a24fe7-db57-4bf4-9b5e-a3d157499763.png)

# 3. Chỉnh sửa thông tin cơ bản database

**LƯU Ý**: 1 số bước không thể hoàn tác, cần hết sức cẩn thận khi thực hiện

Chọn Edit database nếu ta cần gán lại user sở hữu database và website

 ![](attachments/22a373e2-05e5-4ff1-a464-7e1cc0b98b27.png)

 ![](attachments/6676df4b-846b-4283-8250-67bc2f8ea9da.png)

Các thao tác liên quan đến user database, ta chọn User Management

 ![](attachments/46192fc7-87e5-493b-a503-9baf44962c14.png)

Có 3 thao tác cơ bản gồm:

* Edit: Thay đổi mật khẩu hoặc cho phép user kết nối từ xa vào database

 ![](attachments/3603a66b-129d-4900-a3e4-3f19dfc5b772.png)

 ![](attachments/d1bc6e83-ccbd-4bd0-89eb-af2535ab0d94.png)


* Unbind: Gỡ liên kết user khỏi 1 database (vui lòng cẩn thận khi thao tác nếu không nắm rõ)

 ![](attachments/7c4aa0d9-bc92-4b2d-9b16-8408e1d7b1ec.png)

 ![](attachments/076a8737-a4e2-4fc0-95da-a42ced4421e4.png)

* Delete user: Xóa user

 ![](attachments/7088420d-2866-421f-b058-685958742f94.png)

# 4. Kết nối từ xa vào database

Đầu tiên, cần đảm bảo user của database có quyền kết nối từ xa (xem lại mục 3)

 ![](attachments/9c70ee9f-a2e4-4c18-80e5-16802f580532.png)

Tiếp theo, ta sẽ cần cho phép MySQL lắng nghe kết nối từ mọi nguồn (0.0.0.0). Truy cập Database servers

 ![](attachments/ec9baae3-ec6d-4b53-b9cb-e8fb0baf0b4a.png)

Chọn Config Variables

 ![](attachments/5955cff0-1183-4492-8ddb-f6e288a83cc1.png)

Nhập bind ở thanh tìm kiếm và Enter, ta sẽ thấy MySQL đang lắng nghe localhost (127.0.0.1). Cần chỉnh thành 0.0.0.0 để kết nối từ xa

 ![](attachments/5d1538ee-0db8-43cd-8ef9-e3012a5f0687.png)

 ![](attachments/f7c50193-c862-4c21-bdde-86306734a784.png)

Chọn Save để lưu thông số

 ![](attachments/44a114a7-9b1c-4a86-8b02-d57d51c7889d.png)

Thông tin kết nối sẽ bao gồm:

* Tên database
* User database:
* Password:
* Host: Địa chỉ IP của VPS

 ![Trong hình là ví dụ dùng HeliSQL để kết nối](attachments/67e879e5-5428-46bf-bf97-7bb883c20817.png)

 ![](attachments/e472cea1-2584-463b-8a5a-7f3817d2ef05.png)

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