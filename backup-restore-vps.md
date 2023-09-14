---
title: "Hướng Dẫn Cách Tự Sao Lưu Và Khôi Phục VPS"
date: "2019-03-12"
coverImage: "backkup-e1602812936539.jpg"
---

Bài viết này sẽ hướng dẫn bạn bạn **tự sao lưu và khôi phục VPS trong trường hợp cần thiết**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php.

Đối với dịch vụ **ProSSD** do **VinaHost** cung cấp, ngoài việc sử dụng phần cứng có cấu hình cao và ổ cứng dùng hoàn toàn bằng **SSD** thì giao diện quản lý còn có nhiều chức năng giúp bạn thực hiện hầu hết các tác vụ mong muốn.

Mặc định các gói **ProSSD** được **VinaHost** tự động sao lưu - **backup** - định kỳ hàng tuần vào ngày cuối tuần và lưu trữ tối đa **3 bản sao lưu - backup**, tức là lưu các bản sao **lưu - backup - khoảng 3 tuần**. Trong trường hợp bạn muốn **sao lưu - backup - ngay VPS** mà không cần chờ tới ngày sao lưu - backup - định kỳ thì hãy thực hiện các hướng dẫn bên dưới để tự thực hiện tạo **sao lưu - backup - cho VPS**.

**Lưu ý**: Khi bạn tự **sao lưu - backup - VPS** bằng tay mà không chờ tới thời gian **sao lưu - backup - định kỳ** của hệ thống thì cũng chỉ lưu được **tối đa 3 bản sao lưu - backup**, các **bản sao lưu - backup - định kỳ** do hệ thống tạo ra trước đó sẽ được thay bằng các **bản sao lưu - backup** - do bạn tạo ra.

## **1\. Các bước thực hiện sao lưu - backup - VPS**

\- Bước 1: Truy cập vào gói dịch vụ **ProSSD** đang sử dụng tại **VinaHost** bằng cách vào link [https://secure.vinahost.vn/ac/clientarea.php](https://secure.vinahost.vn/ac/clientarea.php) >> chọn "Services" và chọn tiếp gói dịch vụ **ProSSD** mà Quý khách muốn thực hiện sao lưu **VPS**. 

\- Bước 2: Tiến hành sao lưu **VPS** bằng cách chọn chức năng "**Backups**" trong mục "**Additional Tools**".

![Hướng Dẫn Cách Tự Sao Lưu Và Khôi Phục VPS](images/ce1a577430-vinahost-huong-dan-tu-sao-luu-va-khoi-phuc-vps-1.png)

Tiếp theo trong cửa số quản lý các bản sao lưu - backup - chọn chức năng "**New Backup**" để tạo một bản sao lưu mới cho VPS như hình bên dưới. Trong quá trình sao lưu VPS thì VPS vẫn hoạt động bình thường, không bị gián đoạn truy cập.

![Hướng Dẫn Cách Tự Sao Lưu Và Khôi Phục VPS](images/e0fecf7270-vinahost-huong-dan-tu-sao-luu-va-khoi-phuc-vps-2.png)

Các tuỳ chọn "**Compression Type**" và "**Backup Mode**", bạn vui lòng chọn như hình bên dưới:  
\+ Compression Type: chọn Gzip  
\+ Backup Mode: chọn snapshot, chế độ này giúp việc tạo bản sao lưu VPS không ảnh hưởng tới hoạt động của VPS, VPS vẫn hoạt động khi thực hiện tạo bản sao lưu

![Hướng Dẫn Cách Tự Sao Lưu Và Khôi Phục VPS](images/d69b9826d3-vinahost-huong-dan-tu-sao-luu-va-khoi-phuc-vps-3.png)

Sau khi thực hiện tạo bản sao lưu VPS, bạn vui lòng chờ khoảng **15 - 30 phút** để hệ thống tạo bản sao lưu.

## 2\. Các bước thực hiện khôi phục - restore - VPS

Ở bước trên bạn đã tạo được bản sao lưu cho VPS. Trong trường hợp bạn muốn khôi phục lại VPS từ các bản sao lưu trước đó, bạn thực hiện các bước sau để thực hiện khôi phục VPS.

\- Bước 1: Truy cập vào gói dịch vụ ProSSD đang sử dụng tại VinaHost bằng cách vào link[https://secure.vinahost.vn/ac/clientarea.php](https://secure.vinahost.vn/ac/clientarea.php) >> chọn "**Services**" và chọn tiếp gói dịch vụ ProSSD mà bạn muốn thực hiện sao lưu VPS.  

\- Bước 2: Tiến hành khôi phục lại VPS bằng cách chọn chức năng "**Backups**" trong mục "**Additional Tools**".

![Hướng Dẫn Cách Tự Sao Lưu Và Khôi Phục VPS](images/262174662f-vinahost-huong-dan-tu-sao-luu-va-khoi-phuc-vps-4.png)

Tiếp theo bạn cần chọn bản sao lưu trước đó dùng để khôi phục VPS và chọn chức năng "**Restore**" như hình bên dưới (biểu tượng hình tròn có mũi tên).

![Hướng Dẫn Cách Tự Sao Lưu Và Khôi Phục VPS](images/6defbc72da-vinahost-huong-dan-tu-sao-luu-va-khoi-phuc-vps-5.png)

Trong cửa sổ mới, bạn đọc kỹ thông tin và nhấn chọn nút "**Restore**" để tiến hành khôi phục lại VPS.

Lưu ý: Khi restore thì toàn bộ dữ liệu trên VPS hiện tại của bạn sẽ bị xóa và không thể khôi phục lại.

![Hướng Dẫn Cách Tự Sao Lưu Và Khôi Phục VPS](images/03a8152151-vinahost-huong-dan-tu-sao-luu-va-khoi-phuc-vps-6.png)

Bạn cần chờ **15 - 30 phút** để hệ thống thực hiện khôi phục dữ liệu. Để theo dõi trạng thái VPS, bạn có thể xem tại mục "**Status**" như video bên dưới.

<iframe title="YouTube video player" src="https://www.youtube.com/embed/ztSFidFQ0us" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Chúc quý khách thực hiện thành công!

> **THAM KHẢO CÁC DỊCH VỤ TẠI VINAHOST**
> 
> **\>>** [**SERVER**](https://vinahost.vn/thue-may-chu-rieng/) **–** [**COLOCATION**](https://vinahost.vn/colocation.html) – [**CDN**](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)
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
