# Hướng dẫn thiết lập https (SSL) cho website trên FastPanel

# 1. Cài đặt **https (SSL) miễn phí bằng Let's Encrypt (90 ngày)**

Truy cập Management => SSL certificates

 ![](attachments/8652bf42-fd8b-4fd7-97f1-f8eb65817c03.png)

Chọn **New certificate**

 ![](attachments/6b83eded-60fd-47a9-9beb-51f3a37def7c.png)

Chọn website cần cài đặt, các thông số khác nên để mặc định. Lưu ý: Key length càng dài sẽ càng bảo mật cao, nhưng thời gian xác thực sẽ dài hơn

 ![](attachments/f201c936-1757-43c3-93a6-bf3d89556c5b.png)

Nhập email xác thực và Save

 ![](attachments/07e818ad-c03c-4cc7-a687-7e1a9973c980.png)

Hoàn tất, truy cập trang web để kiểm tra

 ![](attachments/21e21d3e-c2c4-4060-a5d1-8ad1020e0880.png)

 ![](attachments/58e7b308-f817-47da-9b2f-51184148f46a.png)

# 2. Cài đặt **https (SSL) có phí (1 năm)**

Nếu cần các chứng chỉ SSL dài hơn, có thể tham khảo ngay dịch vụ SSL tại Vinahost:

* <https://vinahost.vn/geotrust-ssl/>


* <https://vinahost.vn/sectigo-ssl/>

Sau khi hoàn tất thanh toán và kích hoạt (có thể nhờ đội ngũ kỹ thuật của Vinahost hỗ trợ kích hoạt), tiến hành import chứng chỉ vào FastPanel. Chọn New certificate => Existing

 ![](attachments/0e97d788-3255-4d85-984d-055c5301e959.png)

Ta mở các file mà kỹ thuật Vinahost gửi kèm qua mail bằng Notepad hoặc Notepad++, sau đó dán các phần cần thiết vào:

* File .key – Private Key


* File .crt - Certificate


* Đối với Chain sẽ có hoặc không tùy theo nhà cung cấp SSL, nhưng nếu không rõ có thể liên hệ kỹ thuật Vinahost để được tư vấn và giải đáp.

 ![](attachments/d379f550-f05e-4a03-b887-7fc51ad764ef.png)

Hoàn tất, lúc này đã có thể gán cho website chỉ định theo nhu cầu.

 ![](attachments/a6f978eb-c79d-44dd-9251-181e8b81aedb.png)

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