---
title: "Hướng dẫn upload source code và database lên VPS sử dụng Directadmin"
date: "2023-12-25"
categories: 
  - "directadmin"
coverImage: "huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-banner.png"
---

Bài viết này sẽ hướng dẫn bạn cách **Hướng dẫn upload source code và database lên VPS sử dụng Directadmin** Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext. 3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat [https://livechat.vinahost.vn/chat.php](https://livechat.vinahost.vn/chat.php).

# Hướng dẫn tạo user và domain trên Directadmin

**Bước 1** Login vào giao diện Directadmin

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-02.png)

**Bước 2** Chọn **Access Level Reseller** ==> Chọn mục **Account Manager** ==> Chọn **Add New User** 

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-02.png)
**Bước 3** Điền các thông tin cần thiết như: Username, E-mail, Password và Domain cần tạo

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-03.png)

Chọn **Submit** để tạo user và domain

# Login vào Directadmin bằng Username và Domain

**Bước 1** Truy cập vào địa chỉ IP đang sử dụng Directadmin có cấu trúc như sau: http://IP:2222.

Nhập thông tin username và password muốn login vào

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-04.png)


# Upload Source Lên Directadmin

Sau khi login vào user và domain vừa tạo ta tiến hành upload source để có thể deploy website ta thao tác theo các bước sau

**Bước 1** Chọn **System Info & Files** ==> Chọn **File Manager** ==> Chọn thư mục **public_html**

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-05.png)

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-06.png)

**Bước 2** Xóa tất cả các file cũ bên trong **public_html** để upload source code mới vào.
![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-07.png)

**Bước 3** Chọn **Upload File** để upload source code của mình lên

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-08.png)

**Bước 4** Sau khi upload source code lên ta đưa con trỏ chuột vào file nén. Sau đó chọn **Extract** để giải nén source code

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-09.png)

Sau khi hoàn thành quá trình upload source code ta thực hiện bước tiếp theo đó là **Tạo và Import Database**

# Tạo và Import Database trên Directadmin

**Bước 1** Chọn vào mục **Account Manager** ==> Chọn mục **MySQL Management**

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-10.png)

**Bước 2** Chọn **Create New Database** để tạo database mới

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-11.png)

**Bước 3** Điền thông tin và Password mà mình muốn tạo.

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-12.png)

Chọn **Create Database** để khởi tạo.

**Bước 4** Sau khi tạo Database hoàn thành. Chúng ta sẽ truy cập vào **PhpMyAdmin** để Import Database.

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-13.png)

**Bước 5** Login vào phpMyAdmin bằng tài khoản đã tạo trước đó.

Sau đó ta thao tác như sau: Chọn vào **chọn vào bảng database mà ta muốn Import database lên** ==> Chọn **Nhập** ==> Chọn **Chọn Tệp** để Import Database. Sau đó chọn **Nhập** để thực hiện.

![Alt text](images/huong-dan-upload-source-code-va-database-len-VPS-dung-Directadmin-14.png)


Chúc bạn thực hiện thành công!

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
> 
> **\>>** [**SERVER**](https://vinahost.vn/thue-may-chu-rieng/) **–** [**COLOCATION**](https://vinahost.vn/colocation.html) – [**CDN**](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)
> 
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**
> 
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**
> 
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**
> 
> **\>> [WEBSITE](http://vinawebsite.vn/)**
> 
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**