# Hướng dẫn backup và restore website trên FastPanel

Bài viết này sẽ giới thiệu về **Hướng dẫn backup và restore website trên FastPanel** và lợi ích của nó. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext. 3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat <https://livechat.vinahost.vn/chat.php>

# 1. Khởi tạo tài khoản (vị trí) backup local và phương pháp backup full

 ![](attachments/05a0796c-4dc7-4626-99be-230feb5c1be0.png)

Đầu tiên, truy cập Management => Backup copies

 ![](attachments/7ed67bd9-159f-43fc-8d67-fec5e39910b6.png)

Chọn New account

 ![](attachments/efcf521a-1a66-402e-a9b1-94f5abfdc48f.png)

Có nhiều tùy chọn để lưu trữ các file backup, ta sẽ bắt đầu với ví dụ local trước. Nhập thông tin => Save

 ![](attachments/2a125dc0-3ee3-41f8-a850-4af24f6f6a9e.png)


Sau khi hoàn tất tạo tài khoản backup, ta sẽ di chuyển quan tab Plans

 ![](attachments/f86a2904-2320-4b04-b24d-30f275eb9182.png)

Chọn New plan

 ![](attachments/8cf579a8-e6e4-4686-becd-6c4f627ea96d.png)

Ta tiến hành cấu hình với các thông số cần lưu ý như sau:

**Account:** tài khoản backup đã tạo ở trên

**Backup copies limit:** Số lượng backup lưu trữ\n**Sites**: Website cần backup

**Databases:** Database cần backup

**Start time:** Thời điểm chạy backup, chọn template cấu hình sẵn hoặc có thể tự tinh chỉnh, tham khảo thêm tại [đây](https://vinahost.vn/crontab-la-gi/)

 ![](attachments/b220c2ff-2f50-40ca-9e45-179f659d224f.png)

Hoàn tất, có thể bấm Run now để kiểm tra khả năng backup

 ![](attachments/e3c4e337-dd05-4e40-a1c2-8f6dffd26136.png)

Thành quả

 ![](attachments/ac3fd36f-7855-4888-990f-f5742b858a66.png)

# 2. Restore website/database từ backup

Đầu tiên, truy cập danh sách các bản copy hiện có

 ![](attachments/03212063-6e10-435c-b5de-fdf3ffa28805.png)

Chọn vào bản copy muốn restore

 ![](attachments/9ce22050-c7b0-4387-bf8b-9307fc9704fd.png)

Xác nhận (lưu ý và kiểm tra kỹ lưỡng trước khi thực hiện)

 ![](attachments/8a9318fd-c918-4d4a-be9d-7ce3031c8657.png)

Hoàn tất

 ![](attachments/cdbfac7d-d1b8-4f24-9036-a7923f862b26.png)

LƯU Ý:

* Website khi backup sẽ có định dạng \*.tar.gz
* Database sẽ có dạng \*.sql.gz

# 3. Cấu hình tài khoản (vị trí) backup bằng SCP/FTP và Google Drive

## a. SCP

Giao thức sao chép an toàn (SCP) là phương tiện truyền tệp máy tính an toàn giữa máy chủ cục bộ và máy chủ từ xa hoặc giữa hai máy chủ từ xa. Có thể hiểu cách thức này sẽ lưu trữ backup vào một VPS/server khác phòng VPS/server hiện tại down mà không thể phục hồi

Cần chuẩn bị một VPS mở port 22 (hoặc port dùng cho việc SSH) gồm user/password, tham khảo ngay VPS giá rẻ, toàn quyền quản trị tại VPS: <https://vinahost.vn/thue-vps-gia-re/>

Chọn New account ![](attachments/efcf521a-1a66-402e-a9b1-94f5abfdc48f.png)Nhập các thông tin của VPS đã được cấp gồm username, password và địa chỉ IP

 ![](attachments/91b87301-e90d-44b8-a17f-d4cd89c786cd.png)

 ![](attachments/50e55b39-955a-4e77-b9c4-d4fcaa459840.png)

Hoàn tất quá trình kết nối VPS khác làm nơi lưu trữ backup

 ![](attachments/aee3dd11-0b81-49e6-b5f0-22d7dd58bf6c.png)

Sau đó ta có thể chỉnh sửa lại plan cũ hoặc tạo mới để sử dụng vị trí lưu trữ backup (xem lại bước 1)

 ![](attachments/ad10d883-69bf-4575-9453-7388e3475c8e.png)

## b. FTP

Ta cũng có thể sử dụng tài khoản FTP để làm nơi lưu trữ dữ liệu

 ![](attachments/615d5896-5b60-4e4d-a3e6-bdaf08f36bd8.png)

 ![](attachments/076e3ab3-bcb3-4805-846b-513d6dd6486e.png " =722x325")

Hoàn tất cấu hình

 ![](attachments/f1f427b6-4eb7-4d9c-9310-ed50b92fe7a2.png)

## c. Google Drive

Ta cũng thể tận dụng 15GB của mỗi tài khoản Google làm nơi lưu trữ backup, sao chép lại đoạn mã và nhấn Link to enter the confirmation code để tiến hành

 ![](attachments/5fb332ec-195c-4bca-b85c-8081b9375515.png)

Dán mã vào và chọn Tiếp tục

 ![](attachments/97f5640f-a063-41e4-b2c2-48a920b98dc0.png)

Chọn tài khoản Google muốn kết nối

 ![](attachments/55a56a57-17f3-4a3c-88ef-9f449c754b06.png)

Kiểm tra quyền và chọn tiếp tục

 ![](attachments/67dd2827-3ef7-4866-9af2-c2bc1623c1cf.png " =1460x766")

Hoàn tất, quay về FastPanel và chọn Save

 ![](attachments/30ea8959-322b-4772-8dff-771dbceeae9e.png)

 ![](attachments/2e03c103-322a-4204-b105-5f74081ac12c.png)

 ![](attachments/df599143-975c-4818-a401-14a5016cb177.png)

Lúc này, ta đã có thể nắm được cách tạo các vị trí lưu trữ backup khác nhau tùy thuộc vào nhu cầu.

 ![](attachments/9fdfb0e2-4a3a-4280-bb6d-ba4a97b409b5.png)

# 4. Phương pháp backup khác biệt (differential)

Backup khác biệt chỉ sao lưu dữ liệu đã thay đổi kể từ lần sao lưu đầy đủ cuối cùng. Điều này có nghĩa là mỗi bản sao lưu khác biệt sẽ lớn hơn so với bản sao lưu trước đó, vì nó sẽ bao gồm tất cả các thay đổi đã được thực hiện kể từ lần sao lưu đầy đủ gần nhất.

 ![](attachments/f3093082-9596-4a4f-8389-b9d79662789c.png)

Ở tab Differential plan, chọn New plan

 ![](attachments/b3b8054d-f810-4fe3-9bc5-fdfcb9682e9c.png)

Chế độ backup này cho phép ta chỉ định user hoặc toàn bộ (có loại trừ). Ở bài hướng dẫn này ta sẽ tập trung vào một user chỉ định

Nhập thông số cần thiết, chú ý:

* **Full:**  Bản backup đầy đủ
* **Partial:** Các bản backup chỉ lưu lại những gì thay đổi so với bản backup đầy đủ
* **Schedule**: Lịch backup, tham khảo lại mục 1

 ![](attachments/36e13e54-d40f-4092-9927-e300511884a5.png)

Tiếp theo là chọn user, database cũng như các file cần loại trừ

* Exclude mail: Loại trừ các tệp liên quan đến mail


* Exclude logs: Loại trừ các tệp liên quan đến logs

 ![](attachments/0dcbecfb-daa2-4f02-8970-791e2accb8b2.png)

Tiếp theo là phương thức nén backup gồm

#### Công nghệ:

* **Gzip**: Phổ biến, nén tốt, ít tốn tài nguyên – phù hợp dùng chung.
* **ZSTD**: Nén nhanh hơn, file nhỏ hơn Gzip nhưng tốn tài nguyên hơn.

#### Cấp độ:

* **Best Speed**: Nén nhanh nhưng khiến file lớn hơn.
* **Best Compression**: Nén tối đa, tiết kiệm dung lượng nhưng tốn CPU/RAM.

Sau đó là Mã hóa, dùng để bảo vệ các bản backup. Có thể bỏ qua nếu không cần thiết

 ![](attachments/c80d932c-31ea-4efb-ba34-4614f03ca54b.png)

Hoàn tất, chạy Run now để thử nghiệm

 ![](attachments/240b6dbd-7b97-4e95-a0b6-c0c1b31547e4.png)

Kiểm tra có thể thấy dung lượng của các bản backup là khác nhau ở phương pháp backup này

 ![](attachments/5a15bf70-eff5-4ca6-8640-b037a88859c9.png)

Tham khảo thêm về các phương pháp backup tại: <https://vinahost.vn/backup-la-gi/>

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