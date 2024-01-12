
!!! info 
	Bài viết này sẽ hướng dẫn bạn cách ****cấu hình bảo mật cổng 25 trên Zimbra****
	Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext. 3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat [https://livechat.vinahost.vn](https://livechat.vinahost.vn)


## Tổng quan

Bài viết hôm nay mĩnh sẽ hướng dẫn các bạn ccấu hình bảo mật cổng 25 trên Zimbra đối với một số khách hàng sử dụng email server là Zimbra

## Một số vấn đề về bảo mật liên quan cổng 25 của Zimbra

Mặc định các MTA trong các dịch vụ Mail sẽ liên hệ với nhau thông qua port 25 hoặc 465/587. Tuy nhiên đa số cac MTA vẫn gửi nhận mail thông qua port 25.

Trong Zimbra mặc định tính năng xác thực SASL có thể bật trên giao diện Web tuy nhiên nó chỉ áp đụng được với Port 465 và 587 hoặc khi gửi email đến địa chỉ bên ngoài.

Mặc định các mail gửi nội bộ trong một server thông qua port 25 sẽ không xác thực. Đây là một lỗ hỏng nghiêm trọng có thể dễ dàng khai thác khi hacker chỉ cần tra cứu MX record của domains đó và biết được tên miền là có thể tấn công giả mạo.

Ví dụ như sau :

Đầu tiên hacker sẽ telnet đến port 25 của email server bằng lệnh sau:
```telnet mail.dan.id.vn 25```

![[images/zimbra1.png]]

Sau đó gửi một gói tin ehlo với thông tin hostname của mailserver
```ehlo dan.id.vn```
![[images/zimbra2.png]]
Sau khi đã nhận được kết nối đến MTA nhập mail from để tiến hành gửi mail thông qua email đó.
```mail from: admin@dan.id.vn```
![[images/zimbra3.png]]
Sau đó là rcpt to để chỉ định mail sẽ nhận.
```rcpt to: danht@dan.id.vn```
![[images/zimbra4.png]]

Sau khi đã kết nối có thể tiếp tục gửi tín hiệu data để bắt đầu nhập nội dung mail và dấu "." để kết thúc và bắt đầu gửi mail.

![[images/zimbra5.png]]

Khi user danht@dan.id.vn kiểm tra mail sẽ nhận được mail như sau: 
![[images/zimbra6.png]]

Phương thức tấn công này rất nguy hiểm nó có thể giả mạo được cả những mail không tồn tại mà chỉ cần biết được thông tin domains và địa chỉ để kết nối đến mail server.

Phương pháp chặn port thông thường sẽ gây ảnh hưởng đến MTA dẫn đến không nhận được hay không gửi được mail ra ngoài.

Do vậy cần cấu hình lại trên Zimbra để yêu cầu xác thực khi sử dụng port 25 để gửi mail.

## Các bước thực hiện cấu hình xác thực thông qua port 25.

**Bước 1: Update zimbraMtaSmtpdRejectUnlistedRecipient và zimbraMtaSmtpdRejectUnlistedSender**
Thiết lập chặn người gửi và người nhận không được liệt kê trong Zimbra và khởi động lại dịch vụ Zimbra MTA (Mail Transfer Agent)

```
zmprov mcf zimbraMtaSmtpdRejectUnlistedRecipient yes
zmprov mcf zimbraMtaSmtpdRejectUnlistedSender yes
zmmtactl restart
zmconfigdctl restart
```
![[images/zimbra7.png]]

**Bước 2: Set up zimbraMtaSmtpdSenderLoginMaps portion**
Thiết lập "zimbraMtaSmtpdSenderLoginMaps" và "zimbraMtaSmtpdSenderRestrictions"
```
zmprov mcf zimbraMtaSmtpdSenderLoginMaps  proxy:ldap:/opt/zimbra/conf/ldap-slm.cf +zimbraMtaSmtpdSenderRestrictions reject_authenticated_sender_login_mismatch

```
![[images/zimbra8.png]]

**Bước 3: Edit file smtpd_sender_restrictions**
Điều chỉnh file smtpd_sender_restrictions để thêm yêu cầu cho phần xác thực :
```vi /opt/zimbra/conf/zmconfigd/smtpd_sender_restrictions.cf ```
Thêm dòng sau vào sau câu ```permit_mynetworks``` : ```reject_sender_login_mismatch```

![[images/zimbra9.png]]

Sau cùng restart lại Zimbra để các cấu hình được nhận.

!!! note
    Lưu ý: khi cấu hình Zimbra cần restart lại Zimbra  có thể ảnh hưởng đến quá trình gửi mail của server. Cần chọn thời gian thích hợp và backup trước khi tiến hành thao tác.


Đến đây kiểm tra lại bằng cách kết nối đến port 25 và gửi mail sẽ nhận kết quả bị từ chối như sau: 
![[images/zimbra10.png]]

Chúc các bạn thực hiện thành công!

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

