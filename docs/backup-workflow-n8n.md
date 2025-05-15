**Bài viết này sẽ hướng dẫn cách backup workflow N8N. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php.**

## Hướng dẫn cách backup workflow N8N trên Hosting N8N tại VINAHOST  
#### Bước 1: Ta đăng nhập vào N8N

Import Workflow có sẵn tại vinahost
![image](https://github.com/user-attachments/assets/b3ed3710-03cd-4bb8-8204-2bcecfcd00a3)

#### Bước 2: Thiết lập xác thực kết nối các node 

1. Chọn node Telegram  
**Create new credential** nếu bạn chưa biết các xác thực với telegram có thể xem hướng dẫn tại: https://kb.vinahost.vn/ket-noi-telegram-voi-n8n/   
Telegram cần chatid bạn xem và tham khảo hướng dẫn này để lấy chatID của bot nhé: https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id  
![image](https://github.com/user-attachments/assets/68aa59d5-9a8f-43d5-a786-348befc25822)

2. Chọn Node N8N
- Trước tiên ta tạo API của N8N để tiến hành kết nối vào **setting** chọn **n8n API** sao đó ấn **Create a API Key**
![image](https://github.com/user-attachments/assets/0b23a4ae-cbb5-4a27-b09c-ae8b23e0350d)
- Sau đó đặt nhãn cho API rồi tiến hành **Save**
![image](https://github.com/user-attachments/assets/a3098776-54a7-4a91-a9e3-466ce6758a20)
- Bạn copy API nhé, nó chỉ hiển thị một lần duy nhất
![image](https://github.com/user-attachments/assets/d730eb03-1738-4723-8c7e-d5088771602b)
- Bạn vào node N8N sau đó điền các thông tin sau: điền API Key, thay đổi URL thành *https://your_domain/api/v1* sau đó **Save** lại  
![image](https://github.com/user-attachments/assets/7103ed19-456d-47b6-91b8-da77a8057ebe)

#### Bước 4: Ta kiểm tra backup
- Hiện tôi đang có 4 workflow với tên sau:
![image](https://github.com/user-attachments/assets/3840fdb4-e086-45cf-8d54-41434ff958c7)

- Ấn **Test flow** để chạy, thông báo như phía dưới hiện Workflow đã hoạt động và backup rồi
![image](https://github.com/user-attachments/assets/e74d8e18-ce00-4dbc-87f1-f1ac8be67d9a)

- Ta xem tin nhắn ở Telegram với 4 workflow sẽ có 4 tin nhắn backup hoàn tất

![image](https://github.com/user-attachments/assets/3cdac97f-3469-4800-a4a1-3d4c10eef0ed)

- File backup sẽ được lưu trong thư mục của N8N

![image](https://github.com/user-attachments/assets/dc01bb1f-e36d-4d9c-8075-00c5192d6d84)

![image](https://github.com/user-attachments/assets/b1c6c746-61d2-4d2f-9020-7b068cb23d9a)


#### Bước 5: Restore từ các bản backup
- Bạn tải các bản backup về máy, sau đó dùng notepad để xóa dấu ngoặc [] nhé. Sau đó ấn Ctrl + s để lưu lại
![image](https://github.com/user-attachments/assets/e8e38839-4f6c-4fff-909a-d2732a74549a)


![image](https://github.com/user-attachments/assets/53822e73-774f-4abf-a9f5-3418a87cddd9)

- Ta tiến hành import như bình thường

![image](https://github.com/user-attachments/assets/cea4b36d-f199-45c7-9beb-486214459ebe)

![image](https://github.com/user-attachments/assets/adbf4d99-da56-4a49-b8d6-ad1e99c24cef)





### Lưu ý
- Các bản backup sẽ được ghi đè nếu bạn backup trong ngày. Nếu bạn muốn lưu từng bản backup trong ngày xin vui lòng tải các bản backup hiện tại về máy sau đó tiến hành backup  
- Ngoài ra  ở node Trigger Schedule bạn vui lòng tự cài đặt thời gian để workflow hoạt động nhé




> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **\>> [SERVER](https://vinahost.vn/thue-may-chu-rieng/) – [COLOCATION](https://vinahost.vn/colocation.html) – [CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**<br>
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**<br>
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**<br>
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**<br>
> **\>> [WEBSITE](http://vinawebsite.vn/)**<br>
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**
