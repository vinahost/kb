**Bài viết này sẽ hướng dẫn cách backup workflow N8N. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php.**

## Hướng dẫn cách backup workflow N8N trên Hosting N8N tại VINAHOST  
#### Bước 1: Ta đăng nhập vào N8N
Import Workflow có sẵn tại vinahost


#### Bước 2: Thiết lập xác thực kết nối các node 

1. Chọn node Telegram
  **Create new credential** nếu bạn chưa biết các xác thực với telegram có thể xem hướng dẫn tại: https://kb.vinahost.vn/ket-noi-telegram-voi-n8n/  
   Ở node Telegram thứ 2 cần chatid bạn xem và tham khảo hướng dẫn này để lấy chatID của bot nhé: https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id  
   
2. Chọn Node N8N
- Trước tiên ta tạo API của N8N để tiến hành kết nối vào **setting** chọn **n8n API** sao đó ấn **Create a API Key**
![image](https://github.com/user-attachments/assets/0b23a4ae-cbb5-4a27-b09c-ae8b23e0350d)
- Sau đó đặt nhãn cho API rồi tiến hành **Save**
![image](https://github.com/user-attachments/assets/a3098776-54a7-4a91-a9e3-466ce6758a20)
- Bạn copy API nhé, nó chỉ hiển thị một lần duy nhất
![image](https://github.com/user-attachments/assets/d730eb03-1738-4723-8c7e-d5088771602b)
- Bạn vào node N8N sau đó điền các thông tin sau  
  Bạn điều API Key  
  Và thay đổi URL thành https://your_domain/api/v1  
  Sau đó **Save** lại  
  ![image](https://github.com/user-attachments/assets/7103ed19-456d-47b6-91b8-da77a8057ebe)
  


#### Bước 3: Ta tiến hành kiểm tra kết nối bằng **Test Step**

![image](https://github.com/user-attachments/assets/6d50065a-e510-48b4-9af2-5988385a7a54)
![image](https://github.com/user-attachments/assets/de9808e3-e118-415d-9f4f-702533f3f2b1)

Viết tin nhắn với **bot telegram**

![image](https://github.com/user-attachments/assets/caff0f28-19be-43ed-af6f-7d6c093d6062)

Nếu kể qua hiện thị nội dung của văn bản test là chúng ta đã cấu hình chính xác

![image](https://github.com/user-attachments/assets/f220efe6-446e-4c0b-9f57-2b569112d76e)

### Chúc bạn thành công với những workflow tiếp theo



> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **\>> [SERVER](https://vinahost.vn/thue-may-chu-rieng/) – [COLOCATION](https://vinahost.vn/colocation.html) – [CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**<br>
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**<br>
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**<br>
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**<br>
> **\>> [WEBSITE](http://vinawebsite.vn/)**<br>
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**
