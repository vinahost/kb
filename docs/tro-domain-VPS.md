Bài viết này sẽ hướng dẫn cách trỏ bảng tên miền về VPS khi đăng kí dịch vụ tại VINAHOST. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php.
## Hướng dẫn cách trỏ bảng tên miền về VPS khi đăng kí dịch vụ tại VINAHOST
### Bước 1: truy cập vào trang quản lí dịch vụ của bạn tại vinahost
Địa chỉ: https://secure.vinahost.vn/ac/index.php?rp=/login  

![1](https://github.com/user-attachments/assets/0fac7e41-9f31-44d1-aac8-7dfc169e7422)

### Bước 2: Chọn Bảng điều khiển sau đó ấn vào tên miền

![image](https://github.com/user-attachments/assets/f556bcba-48bf-471e-8625-641403561891)

### Bước 3: Ấn vào dấu ba chấm bên phải sao đó chọn quản lí DNS

![image](https://github.com/user-attachments/assets/8dae6085-344e-48b8-a491-6331c94af22d)

### Bước 4: Nhấn vào Add record

![image](https://github.com/user-attachments/assets/e72cf728-c075-4190-a62b-ce52bedae391)

### Bước 5: Tab Add New Record hiện ra

Các thông số:  
**Name**: là tên của sub domain hiện tại. Ví dụ domain của tôi hiện tại là nguyenhv.id.vn và tôi muốn tạo subdomain n8n.nguyenhv.id.vn thì phần name tôi sẽ nhập là n8n  
*Nếu bạn muốn tạo bảng ghi cho domain chính bạn ghi là @*  
**Type**: Là loại bảng ghi (các bản ghi phổ biến là A, CNAME, MX, TXT). Chọn type A

![image](https://github.com/user-attachments/assets/17fcd1fb-fe16-414d-b47d-6763f5f7e895)

![image](https://github.com/user-attachments/assets/789f472b-fb34-4b04-8fd6-ebdb78facd1f)

![image](https://github.com/user-attachments/assets/af89da28-9eaa-4fba-8d4d-2a3a43badf5b)

Ở phần RDATA: bạn điền địa chỉ Ipv4 máy chủ của bạn  
Khi đăng kí dịch vụ tại VPS tại VINAHOST. Các thông tin dịch vụ sẽ được gửi về địa chỉ email đăng kí trang secure của bạn. Bạn kiểm tra email sẽ thấy các thông số này. Bạn copy địa chỉ này  

![image](https://github.com/user-attachments/assets/4a05490b-45ec-4000-9907-f6745a1da28e)

Sau đó ấn Add record

![image](https://github.com/user-attachments/assets/5c0ec60c-7854-43a7-b80d-dcff71b32b30)

Sau khi ấn Add record màn hình sẽ hiển thị bảng ghi của bạn 

![image](https://github.com/user-attachments/assets/3ddb9886-5293-4d31-a5b1-69f20ec1f291)

### Bước 5: Kiểm tra

Để kiểm tra bạn mở terminal trên Window (Nhấn phím Window + R gõ cmd) trên MAC (Command + Space > Gõ Terminal). Sau đó ấn **ping domain_cua_ban**  
Kết quả sẽ trả về IP mà bạn đã cấu hình trước đó 
![image](https://github.com/user-attachments/assets/7935969c-37f2-4960-8b86-e8d3b091dc56)

Nếu như ra IP khác với IP bạn đã cấu hình thì có thể các bảng ghi chưa được cập nhật (chờ một khoản thời gian để các bảng ghi đồng bộ trên hệ thống) hoặc máy bạn dính cache DNS bạn gõ lệnh **ipconfig /flushdns**

![image](https://github.com/user-attachments/assets/1d740b85-7b3d-4e12-ad13-2fb08c1c019c)

Cảm ơn bạn đã đăng kí dịch vụ tại vinahost và chúc bạn thực hiện thành công

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **\>> [SERVER](https://vinahost.vn/thue-may-chu-rieng/) – [COLOCATION](https://vinahost.vn/colocation.html) – [CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**<br>
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**<br>
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**<br>
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**<br>
> **\>> [WEBSITE](http://vinawebsite.vn/)**<br>
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**











