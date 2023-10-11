title: "Hướng dẫn xử lý lỗi cài SSL trên Directadmin nhưng không nhận"
date: "2023-09-30"
coverImage: "![Alt text](images/Cài-SSL-Let's-Encrypt-không-nhận-banner.png)"
---

Bài viết này sẽ hướng dẫn mọi người cách  **Hướng dẫn xử lý lỗi cài SSL trên Directadmin nhưng không nhận**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ [**VinaHost**](https://blog.vinahost.vn/) qua Hotline **1900 6046 ext.3**, email về **support@vinahost.vn** hoặc chat với VinaHost qua livechat **[https://livechat.vinahost.vn/chat.php](https://livechat.vinahost.vn/chat.php)**.

# Hướng dẫn xử lý lỗi cài SSL trên Directadmin nhưng không nhận


Thường chúng ta sẽ gặp các lỗi như cài SSL không được hoặc cài SSL báo thành công nhưng khi check thì SSL vẫn không nhận.

Trường hợp 1: Cài SSL gặp lỗi
Sau khi click vào việc cài SSL thì ra về lỗi:
![Alt text](images/Cài-SSL-Let's-Encrypt-không-nhận-01.png)
Thì ở đây do chúng ta chưa trỏ tên miền này về IP hosting

Trường hợp 2: Là lỗi do SSL let'encrypt bị lỗi
 Ở trường hợp này chúng ta cần SSH vào VPS và thao tác các lệnh sau:
cd /usr/local/directadmin/custombuild

./build lego

 ![Alt text](images/Cài-SSL-Let's-Encrypt-không-nhận-02.png)

 ![Alt text](images/Cài-SSL-Let's-Encrypt-không-nhận-03.png)

 ./build letsencrypt

 ![Alt text](images/Cài-SSL-Let's-Encrypt-không-nhận-04.png)

 touch /root/.zerossl

 ![Alt text](images/Cài-SSL-Let's-Encrypt-không-nhận-05.png)

 Sau đó chúng ta quay lại giao diện Directadmin và gen lại SSL

 Trường hợp 3: Cài SSL báo thành công nhưng khi kiểm tra thì vẫn chưa nhận SSL

 Ở đây sau khi cài báo thành công
 ![Alt text](images/Cài-SSL-Let's-Encrypt-không-nhận-06.png)

 Nhưng khi kiểm tra bằng tools hoặc trên website thì SSL vẫn chưa cập nhật.

 ![Alt text](images/Cài-SSL-Let's-Encrypt-không-nhận-07.png)

 Thì khi đó chúng ta cần vào VPS dùng lệnh sau để cập nhật SSL:

 systemctl reload nginx

 Sau khi chạy lệnh này hệ thống trả về lỗi thì chúng ta cần thao tác 2 lệnh sau:
 cd /usr/local/directadmin/custombuild
 ./build nginx_apache

 Sau khi hoàn thành quá trình build nginx_apache.

 Chúng ta quay lại giao diện Directadmin để gen lại SSL.

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
 