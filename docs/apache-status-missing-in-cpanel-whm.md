---
title: "Apache status missing in cPanel WHM"
date: "2021-08-28"
coverImage: "Apache-1.png"
---

Bài viết sau sẽ giúp bạn khắc phục lỗi **Apache status missing in cPanel WHM**. Nguyên nhân xuất phát từ lỗi **directive server-status** trong file cấu hình **httpd.conf** của **Apache**. Các bước thực hiện như sau:

B1. Sửa file **httpd.conf**

        vi /usr/local/apache/conf/httpd.conf

B2. Tìm và **comment out** (hoặc thêm vào nếu không tồn tại) đoạn mã sau:

        <Location /server-status>

        SetHandler server-status

        Order deny,allow

        Deny from all

        Allow from 127.0.0.1

</Location> Vậy là việc fix lỗi đã hoàn tất chỉ với hai bước đơn giản, chúc các bạn thành công!

> **THAM KHẢO CÁC DỊCH VỤ TẠI VINAHOST:**
> 
> **\>>** [**SERVER**](https://vinahost.vn/server.php) **-** [**COLOCATION**](https://vinahost.vn/colocation.html) - [**CDN**](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)
> 
> **\>> [CLOUD](https://vinahost.vn/cloud-server.html) - [VPS](https://vinahost.vn/vps.html)**
> 
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**
> 
> **\>> [EMAIL](https://vinahost.vn/email-hosting.html)**
> 
> **\>> [WEBSITE](http://vinawebsite.vn/)**
> 
> **\>> [TÊN MIỀN](https://vinahost.vn/bang-gia-ten-mien.html)**
> 
> **\>>** [**SSL**](https://vinahost.vn/geotrust-ssl.html)