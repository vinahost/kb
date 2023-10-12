---
title: "Hướng dẫn sửa lỗi Approval trên Office 365"
date: "2023-10-13"
categories: 
  - "Microsoft 365"
coverImage: "Huong-dan-sua-loi-approval-tren-office-365-banner.png"
---
Bài viết này sẽ hướng dẫn bạn cách **Hướng dẫn sửa lỗi Apporval trên Office 365**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext.3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat [https://livechat.vinahost.vn/chat.php](https://livechat.vinahost.vn/chat.php).

<b>Lỗi: Something went wrong. Wait a bit, then try again.</b>

![Alt text](/images/Huong-dan-sua-loi-approval-tren-office-365-01.png)

Bước 1: Truy cập vào **Power Platform Admin Center** bằng đường dẫn sau:
https://admin.powerplatform.microsoft.com

![Alt text](/images/Huong-dan-sua-loi-approval-tren-office-365-02.png)

Bước 2: Chọn mục **Environments** trên thanh công cụ như ảnh minh họa:

![Alt text](/images/Huong-dan-sua-loi-approval-tren-office-365-03.png)

Bước 3: Chọn vào tài khoản ==> Chọn mục **Detailed view**

![Alt text](/images/Huong-dan-sua-loi-approval-tren-office-365-04.png)

Bước 4: Tại mục **Access** ==> chọn mục **Sercurity roles** ==> chọn **See all** để có thể show ra các tính năng:

![Alt text](/images/Huong-dan-sua-loi-approval-tren-office-365-05.png)

Bước 5: Tìm kiếm **asyncoperation “System Job”** thay đổi **Permission** từ **Read** thành **Organization**

![Alt text](/images/Huong-dan-sua-loi-approval-tren-office-365-06.png)

Sau khi hoàn thành các bước trên chúng ta trở lại user để test tính năng gửi file bằng Approvall.

Chúc các bạn thành công! 

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