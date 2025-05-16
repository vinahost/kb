**Bài viết này sẽ hướng dẫn cách backup workflow N8N. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php.**

## Hướng dẫn cách backup workflow N8N trên Hosting N8N tại VINAHOST  
#### Bước 1: Ta đăng nhập vào N8N

Bạn copy đoạn code dưới đây sau đó tạo workflow rồi paste vào nhé 
```
{ "name": "BACKUP", "nodes": [ { "parameters": { "filters": {}, "requestOptions": {} }, "id": "65fc80cb-60b1-4532-8a4f-e5412bd24820", "name": "n8n", "type": "n8n-nodes-base.n8n", "position": [20, 340], "typeVersion": 1 }, { "parameters": { "options": {} }, "id": "3789df85-ac49-44db-a956-9d8111cbe0bf", "name": "Loop Over Items", "type": "n8n-nodes-base.splitInBatches", "position": [240, 340], "typeVersion": 3 }, { "parameters": { "rule": { "interval": [{ "triggerAtHour": 2 }] } }, "id": "0aee19dc-6a62-460d-8624-e7f96dfbcb3f", "name": "Schedule Trigger", "type": "n8n-nodes-base.scheduleTrigger", "position": [-580, 200], "typeVersion": 1.2 }, { "parameters": { "chatId": "6312104790", "text": " Starting Workflow Backup", "additionalFields": { "appendAttribution": false } }, "type": "n8n-nodes-base.telegram", "typeVersion": 1.2, "position": [-360, 340], "id": "ea58466e-7971-4641-ac9b-1990ba87b512", "name": "Telegram", "webhookId": "cccfe0a1-af40-4532-ac6a-634d1be2e415" }, { "parameters": { "chatId": "", "text": "=✅ Complete backup", "additionalFields": { "appendAttribution": false } }, "type": "n8n-nodes-base.telegram", "typeVersion": 1.2, "position": [680, 180], "id": "47794c25-8ec3-47c8-a098-528d2f03082b", "name": "Completed Notification", "webhookId": "cccfe0a1-af40-4532-ac6a-634d1be2e415" }, { "parameters": { "operation": "write", "fileName": "={{ $('Execute Command').item.json.stdout }}/{{$now.toFormat('yyyy-MM-dd').trim()}}-{{ $('n8n1').first().json.name.replace(/[\\s-]/g, '_') }}.json", "options": {} }, "type": "n8n-nodes-base.readWriteFile", "typeVersion": 1, "position": [920, 360], "id": "345519b4-c379-4582-ad8e-8305178f572b", "name": "Read/Write Files from Disk" }, { "parameters": { "operation": "toJson", "binaryPropertyName": "=data", "options": { "fileName": "={{ $json.name.replace(/[\\s-]/g, '_') }}" } }, "type": "n8n-nodes-base.convertToFile", "typeVersion": 1.1, "position": [720, 360], "id": "b7aa4973-b462-454b-8b42-1ca35949ce23", "name": "Convert to File" }, { "parameters": {}, "type": "n8n-nodes-base.manualTrigger", "typeVersion": 1, "position": [-580, 460], "id": "47542acc-af80-4ec4-8882-a5f956c066cc", "name": "When clicking ‘Test workflow’" }, { "parameters": { "command": "#!/bin/bash\nif [ ! -d \"backup_n8n\" ]; then\n        mkdir backup_n8n\n        cd backup_n8n\n        pwd\nelse\n        cd backup_n8n\n        pwd\nfi\nexit\n\n" }, "type": "n8n-nodes-base.executeCommand", "typeVersion": 1, "position": [-160, 340], "id": "cb220888-0b99-4f03-9cf0-24cbc07a5452", "name": "Execute Command" }, { "parameters": { "operation": "get", "workflowId": { "__rl": true, "value": "={{ $json.id }}", "mode": "id" }, "requestOptions": {} }, "type": "n8n-nodes-base.n8n", "typeVersion": 1, "position": [480, 360], "id": "da61efd1-1018-404c-8bde-6278882790c6", "name": "n8n1" } ], "pinData": {}, "connections": { "n8n": { "main": [[{ "node": "Loop Over Items", "type": "main", "index": 0 }]] }, "Loop Over Items": { "main": [ [{ "node": "Completed Notification", "type": "main", "index": 0 }], [{ "node": "n8n1", "type": "main", "index": 0 }] ] }, "Schedule Trigger": { "main": [[{ "node": "Telegram", "type": "main", "index": 0 }]] }, "Telegram": { "main": [[{ "node": "Execute Command", "type": "main", "index": 0 }]] }, "Convert to File": { "main": [ [{ "node": "Read/Write Files from Disk", "type": "main", "index": 0 }] ] }, "Read/Write Files from Disk": { "main": [[{ "node": "Loop Over Items", "type": "main", "index": 0 }]] }, "When clicking ‘Test workflow’": { "main": [[{ "node": "Telegram", "type": "main", "index": 0 }]] }, "Execute Command": { "main": [[{ "node": "n8n", "type": "main", "index": 0 }]] }, "n8n1": { "main": [[{ "node": "Convert to File", "type": "main", "index": 0 }]] } }, "active": false, "settings": { "executionOrder": "v1" }, "versionId": "9212d727-8f1c-4ea5-8964-7bc400cf2b5c", "meta": { "templateCredsSetupCompleted": true, "instanceId": "eeffd3494fc444b0b313dd453245891a13a830c0f46ba20431c562c7a18f6563" }, "id": "HD2hZNB7CYuXftGJ", "tags": [] }
```

![image](https://github.com/user-attachments/assets/63f13011-5a4c-4dca-aab6-3562b80f3c8a)

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

#### Bước 3: Ta kiểm tra backup
- Hiện tôi đang có 4 workflow với tên sau:
![image](https://github.com/user-attachments/assets/3840fdb4-e086-45cf-8d54-41434ff958c7)

- Ấn **Test flow** để chạy, thông báo như phía dưới hiện Workflow đã hoạt động và backup rồi
![image](https://github.com/user-attachments/assets/e74d8e18-ce00-4dbc-87f1-f1ac8be67d9a)

- Ta xem tin nhắn ở Telegram với 4 workflow sẽ có 4 tin nhắn backup hoàn tất

![image](https://github.com/user-attachments/assets/3cdac97f-3469-4800-a4a1-3d4c10eef0ed)

- File backup sẽ được lưu trong thư mục của N8N

![image](https://github.com/user-attachments/assets/dc01bb1f-e36d-4d9c-8075-00c5192d6d84)

![image](https://github.com/user-attachments/assets/b1c6c746-61d2-4d2f-9020-7b068cb23d9a)


#### Bước 4: Restore từ các bản backup
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
