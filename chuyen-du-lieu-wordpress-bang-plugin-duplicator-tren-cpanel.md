---
title: "Chuyển Dữ Liệu WordPress Bằng Plugin Duplicator Trên Cpanel"
date: "2022-09-25"
categories: 
  - "chu-de-khac"
coverImage: "chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel.jpg"
---

Trong bài viết này mình sẽ hướng dẫn bạn thực hiện chuyển dữ liệu 1 trang web Wordpress từ nơi khác về Hosting mới hoặc nhân bản một trang web Wordpress bằng plugin **Duplicator – WordPress Migration Plugin.** Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php.

## **Bước 1: Cài Plugin Duplicator và thiết lập sao lưu**

Ta tiến hành cài Plugin Duplicator từ thư viện Plugin WordPress

![WordPress](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463.jpg)

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-1.jpg)

Sau khi cài đặt xong, bạn click vào Duplicator => Create New để tạo bản sao mới

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-2.jpg)

Bạn để mặc định và click Next để tiếp tục sang bước tiếp theo

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-3.jpg)

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-4.jpg)

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-5.jpg)

Sau khi click Next Plugin sẽ scan site của bạn

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-6.jpg)

Plugin sẽ thông báo Scan hoàn tất và list ra danh sách như dưới, bạn click Build để bắt đầu tạo bản sao

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-7.jpg)

Quá trình build sẽ diễn ra và thông báo khi hoàn tất. Tùy thuộc vào dung lượng và quyết định thời giạn tạo bản sao nhanh hay chậm.

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-8.jpg)

Sau khi tạo xong sẽ có 2 file bên dưới bao gồm

- File installer.php
- File bản sao có định dạng là date\_sitename\_..zip

Bạn tiến hành download về máy tính để tiến hành cho bước 2.

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-9.jpg)

## **Bước 2: Tiến hành Restore cho WordPress**

**Lưu ý: Bạn cần trỏ chính xác domain về IP máy chủ hosting/vps thì mới restore được nhé!**

Ở bước này sẽ thực hiện bung file mà bạn đã tạo ở bước 1.

Trước tiên bạn cần upload file 2 này lên hosting, đưa vào website bạn cần thực hiện.

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-10.jpg)

Bước tiếp theo bạn tạo 1 database rỗng mới hoàn toàn tại phần MySQL Databases. Nhập tên database và nhấn Create Database để tạo một database mới.

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-11.jpg)

Tiếp theo ta sẽ tạo user và add user đó vào database vừa tạo.

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-12.jpg)

Ta tích chọn All Privileges và nhấn make changes

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-13.jpg)

Sau khi đã tạo hoàn tất bạn truy cập vào website của bạn. Ở đây mình cài cho website là phamninh.cf mình sẽ truy cập [**https://phamninh.cf/installer.php**](https://phamninh.cf/installer.php) trên trình duyệt.

Chọn kiểu cài đặt: Restore một site hay tất cả site

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-14.jpg)

Tại mục Setup bạn điền như sau:

- Hosts: localhost
- Database: Nhập vào tên database rỗng đã tạo trước đó
- User: Nhập vào tên user đã tạo trước đó
- Password: Nhập vào pasword database đã tạo trước đó

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-15.jpg)

Nhấn OK để bắt đầu tiến hành restore

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-16.jpg)

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-463-17.jpg)

Giao diện khi thông báo đã cài đặt thành công.Lưu ý, bạn nên xóa file installer.php trên hosting đi nhé, hoặc tích vào Auto delete installer file để tránh rủi ro bảo mật.

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-19.png)

Chúng ta bắt đầu truy cập vào Admin Login theo thông tin như ban đầu.

Giao diện như dưới đây là đã Restore thành công rồi nhé!

![](images/chuyen-du-lieu-wordpress-bang-plugin-duplicator-tren-cpanel-20.png)

Chúc bạn thực hiện thành công!

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://kb.vinahost.vn/)**
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
