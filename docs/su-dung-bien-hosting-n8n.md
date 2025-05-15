Bài viết này sẽ hướng dẫn cách sử dụng biến N8N trên Hosting N8N tại Vinahost. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php  
# Hướng Dẫn sử dụng biến N8N trên Hosting N8N tại Vinahost

## Bước 1: Truy cập vào quản lý app N8N

![image](https://github.com/user-attachments/assets/5ea97112-e649-4f6b-9374-a565e7b98e2d)

## Bước 2: Thêm biến 

1. Chọn **Thêm** sau đó ấn **Quản lý biến .ENV** 

![image](https://github.com/user-attachments/assets/a955841c-abd4-4b1a-8186-b128e0dce539)


2. Bạn chọn thêm mới sau đó tạo biến nhé
- Ở đây mình tạo biến có tên biến **MESS** và giá trị là **Đây là giá trị để test biến** sau đó ấn **Cập nhật**  
**Lưu ý** Quý khách nên backup workflow trước để tránh trường hợp xảy ra lỗi không mất dữ liệu nhé: https://kb.vinahost.vn/backup-workflow-n8n.md

![image](https://github.com/user-attachments/assets/bd69d46b-aeb3-4932-9a63-7b45ee17b552)


## Bước 3: Thiết lập workflow  
-  Sau đó để kiểm tra mình tạo một node đơn giản như sau: nhắn tin với bot trên messeger và phản hồi lại thông tin biến mà tôi đã gán trước đó
-  Ta truy cập vào n8n sau đó thêm các node telegram và edit field vào workflow

![image](https://github.com/user-attachments/assets/83810cb6-4fae-4105-ae27-8eebe5442477)

1. Ta truy cập và node Trigger nhận message telegram
- Ở phần credential telegram nếu bạn không biết có thể xem lại hướng dẫn: https://kb.vinahost.vn/ket-noi-telegram-voi-n8n/

![image](https://github.com/user-attachments/assets/63679a8b-e601-4d1a-b639-a457f95a8e3e)


2. Ở Node  **Edit Field** bạn ấn **Add Field** sau đó gõ tên bến vào nhé

![image](https://github.com/user-attachments/assets/f1aca0d2-7d5f-424e-ab90-8de65012367f)

- Nếu có thông báo này xuất hiện **[ERROR: Not accessible via UI, please run node]**. Bạn cũng đừng quá lo lắng vì Biến môi trường chỉ được load khi bạn chạy thực tế (run flow), chứ không hiển thị trước trong UI thôi

3. Ở node Telegram **Send message**
Bạn nhập **Chat ID** vào (có thể tham khảo tại: https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id)
Sau đó ấn **Execute previous node** để lấy test từ **Edit field**

![image](https://github.com/user-attachments/assets/458f01e6-d206-488e-842d-4b26b370244e)

![image](https://github.com/user-attachments/assets/1c4f97b9-bea8-4cdd-b006-c0c901e722bf)

- Bạn kéo **mess** vào ô **test**

![image](https://github.com/user-attachments/assets/6164ee88-58d5-4787-980e-92545889e94d)



## Bước 4 Kiểm tra

Bạn ấn Test workflow 
![image](https://github.com/user-attachments/assets/dd21b946-53ee-49db-99c0-09c913404d48)

Kết quả sẽ xuất hiện ra biến đã gán ở bước 2

![image](https://github.com/user-attachments/assets/4b4d58ec-b2b6-4995-a4e3-34f9c578a4c3)


Chúc bạn thành công!!!
> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **\>> [SERVER](https://vinahost.vn/thue-may-chu-rieng/) – [COLOCATION](https://vinahost.vn/colocation.html) – [CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**<br>
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**<br>
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**<br>
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**<br>
> **\>> [WEBSITE](http://vinawebsite.vn/)**<br>
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**<br>
