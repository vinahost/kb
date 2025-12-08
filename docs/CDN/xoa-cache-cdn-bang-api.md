# Hướng dẫn xóa cache CDN bằng API CDNetworks

## Giới thiệu

Tài liệu này hướng dẫn cách sử dụng API CDNetworks để xóa cache CDN theo tài liệu chính thức tại: [API Explorer](https://apiexplorer.cdnetworks.com/apiexplorer/sdk?apiId=4515&productType=all_product)
https://apiexplorer.cdnetworks.com/apiexplorer/overview
## Chuẩn bị

### 1. Thông tin xác thực

Bạn cần có cặp khoá **accessKey**  **secretKey** . Trong thông tin kích hoạt dịch vụ đã có hoặc bạn có thể liên hệ Kỹ thuật để hỗ trợ cung cấp hoặc tạo lại

### 2. Tạo request mẫu test xóa cache
Truy cập link sau:
https://apiexplorer.cdnetworks.com/apiexplorer/sdk?apiId=4515&productType=all_product
![](assets/images/xoa-cache-cdn-bang-api/Screenshot_chrome_2025-12-08_14-30-01_1920px-919px.png)

![](assets/images/xoa-cache-cdn-bang-api/Screenshot_chrome_2025-12-08_14-35-43_1920px-919px.png)

### 3. Tải code mẫu
![](assets/images/xoa-cache-cdn-bang-api/Screenshot_chrome_2025-12-08_14-37-14_1920px-919px.png)


### 4. Cài thêm thư viện và thực hiện xoá cache

Sau khi tải về và Upload lên server, thực hiện chạy lệnh `composer install` để cài đặt một số thư viện cần thiết
![](assets/images/xoa-cache-cdn-bang-api/Screenshot_MobaXterm_2025-12-08_15-18-51_1251px-911px.png)

Tiến hành thay thế `{accessKey}` và `{secretKey}` vào trong file Client.php

![](assets/images/xoa-cache-cdn-bang-api/Screenshot_chrome_2025-12-08_15-20-29_1208px-793px.png)
Bây giờ bạn có thể thực hiện xoá cache CDN bằng cách gọi file Client.php để thực hiện
php Client.php hoặc truy cập đường dẫn đến file Client.php trên trình duyệt.

