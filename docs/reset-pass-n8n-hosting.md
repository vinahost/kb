Bài viết này sẽ hướng dẫn cách reset password khi đăng kí dịch vụ Hosting N8N tại Vinahost. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php  
# Hướng Dẫn Reset Password Dịch Vụ Hosting N8N tại VinaHost

## Bước 1: Truy cập vào quản lý app N8N

Xác định và **copy đường dẫn thư mục gốc của ứng dụng N8N**

![image](https://github.com/user-attachments/assets/5ea97112-e649-4f6b-9374-a565e7b98e2d)
![image](https://github.com/user-attachments/assets/61e3cf7f-fc0b-42fe-8e09-fbc2959ce33c)


## Bước 2: Reset Password

1. Truy cập **Terminal** (bạn tìm bằng từ khóa `terminal`).

![image](https://github.com/user-attachments/assets/480d4042-da38-4533-a171-b9dc421583e4)

2. Gõ các lệnh sau, thay `{paste đường dẫn}` bằng đường dẫn đã copy ở Bước 1:

```
cd {paste đường dẫn}
```
```
export N8N_USER_FOLDER=$PWD
export N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
n8n user-management:reset
```

Sau đó màn hình sẽ hiển thị như sau 

![image](https://github.com/user-attachments/assets/76be0b85-80f7-48a6-9f46-02b0a7c9af3a)


Ta stop start lại N8N

![image](https://github.com/user-attachments/assets/1f4f1219-0341-48fc-8161-3623042fe22c)

![image](https://github.com/user-attachments/assets/6c2675f5-e9f7-4ca1-ac46-c39c7add581a)

![image](https://github.com/user-attachments/assets/f0890cd8-d03d-4f1e-a18c-0be5f2e3a49e)

## Bước 3: Kiểm tra 
Ta truy cập lại trang N8N

![image](https://github.com/user-attachments/assets/16386a96-37b8-47cb-8aa3-f35f87288ef7)

Kết quả

![image](https://github.com/user-attachments/assets/4e0272e0-3deb-4d81-ac62-4b4a9cc2311b)


> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **\>> [SERVER](https://vinahost.vn/thue-may-chu-rieng/) – [COLOCATION](https://vinahost.vn/colocation.html) – [CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**<br>
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**<br>
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**<br>
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**<br>
> **\>> [WEBSITE](http://vinawebsite.vn/)**<br>
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**<br>









