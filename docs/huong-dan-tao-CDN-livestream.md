
**Bài viết này sẽ hướng dẫn cách tạo tài khoản CDN Livestream Broadcast. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php.**


# Hướng dẫn cách tạo tài khoản CDN Livestream Broadcast

Trong hướng dẫn này mình sẽ hướng dẫn tạo CDN Livestream Broadcast khi đăng ký dịch vụ tại VinaHost.

**CDN Livestream Broadcast** (Content Delivery Network cho phát sóng trực tiếp) là một hệ thống giúp truyền tải nội dung video livestream đến nhiều người xem trên toàn thế giới một cách nhanh chóng, ổn định và hiệu quả.

Trong cấu hình sẽ có hai loại:
- **RTMP** (Real-Time Messaging Protocol)
- **HTTP** (thường là HLS hoặc MPEG-DASH)

Trong hướng dẫn này, mình sẽ hướng dẫn các bạn cấu hình **RTMP**. Cấu hình HTTP sẽ gần như tương tự.

---

## Bước 1: Đăng nhập vào giao diện https://login.cdnetwork.com

Bạn thực hiện đăng nhập vào portal được VinaHost cung cấp khi đăng ký dịch vụ thành công.

---

## Bước 2: Vào phần Product chọn **Media Acceleration Live Broadcast**

![image](https://github.com/user-attachments/assets/7bd3c8c5-edad-43c3-b295-74e18b900673)

---

## Bước 3: Vào phần Configuration chọn **RTMP Livestream**

![image](https://github.com/user-attachments/assets/eaaeadb2-a888-499a-af10-6e133f9ef809)

---

## Bước 4: Chọn **Create New Domain**

![image](https://github.com/user-attachments/assets/0e631211-bfad-468a-a431-f7a7f6f13876)

---

## Bước 5: Điền các thông tin cần thiết

- **Contract-item** và **Customized Control Group**: chọn thông số mặc định theo tài khoản.

![image](https://github.com/user-attachments/assets/72d8e520-c77d-4728-ba81-4c1e4a4a4e3a)
![image](https://github.com/user-attachments/assets/64896479-a521-46c9-a323-5d2999147d4a)

**Live streaming mode** có 2 lựa chọn:

- **Pull stream**: CDN sẽ chủ động lấy luồng livestream từ máy chủ gốc (origin server).
  - Bạn phát livestream đến một server gốc như Wowza, Nginx-RTMP, SRS...
- **Push and pull streams**: 
  - Bạn có thể push trực tiếp luồng từ phần mềm như OBS lên CDN.
  - Đồng thời, CDN cũng có thể pull stream từ origin server.

**Application Name**: nhập tên app của bạn (bất kỳ).  
Sau đó nhấn **Submit** và **Deploy**.

![image](https://github.com/user-attachments/assets/6f777d7e-09a0-4e9a-862e-59f8f79528f9)
![image](https://github.com/user-attachments/assets/332181bc-0c82-4cc6-92c6-e4b479d30de5)
![image](https://github.com/user-attachments/assets/1cf7e417-7b75-48d9-bcaf-47c21aa8a360)

---

## Bước 6: Trỏ các record DNS CNAME

Trỏ theo hướng dẫn như hình trên.  
Nếu nameserver của bạn thuộc VinaHost quản lý, bạn có thể tham khảo hướng dẫn sau để cấu hình bảng ghi:

👉 [Hướng dẫn sử dụng DNS Manager tại VinaHost](https://blog.vinahost.vn/huong-dan-su-dung-dns-manager-va-quan-ly-ten-mien-tai-vinahost/)

---

## Bước 7: Cấu hình **Anti-Hostlinking**

**Basic Anti Hostlinking**: dùng để giới hạn IP được phép push video.

- Vào **Edit** của domain dùng để push lên server:

![image](https://github.com/user-attachments/assets/e6a2556b-733d-41d4-8f59-fe7aabf04306)

- Vào phần **Anti-Hostlinking** ➔ chọn **Basic Anti-Hostlinking** ➔ **Modify**:

![image](https://github.com/user-attachments/assets/00dd1d1f-27f5-4e87-ad5d-d2e47b55827e)

- Trong config, chọn Allow IP WAN của bạn:
  - Bạn có thể kiểm tra IP bằng cách truy cập: https://whatismyipaddress.com/

- Sau khi điền IP, nhấn **OK**:

![image](https://github.com/user-attachments/assets/212ad40f-0ae1-4c0c-975f-577ddb89b296)

- Ấn **Next**:

![image](https://github.com/user-attachments/assets/41376a6a-6bb3-455c-b264-3c04e9026fe2)

- Chọn **Deploy Now**:

![image](https://github.com/user-attachments/assets/1593c265-61d6-4e99-9c62-2defeac87ef1)

- Chờ trạng thái đổi sang **Enable**:

![image](https://github.com/user-attachments/assets/74714898-9cf5-4ce4-a5fc-6b32ace21fde)

---

## Bước 8: Kiểm tra livestream

**Test bằng OBS**:
- Nhập server theo format: protocol://domain/app_name/stream
  - Ở `stream`, bạn tự tạo tên luồng bất kỳ để push video.

- Sau đó nhấn **Apply** và **OK**:

![image](https://github.com/user-attachments/assets/cdf65524-9592-41f8-9171-ea0c054bba5f)

**Phát bằng Chrome**:

![image](https://github.com/user-attachments/assets/4a2ca3ed-6334-44f3-abd4-8bf2cbb052b5)

**Kiểm tra bằng VLC**:
- Mở VLC ➔ chọn **Open Network Stream**:

![image](https://github.com/user-attachments/assets/89d27d29-0ff6-4a8f-ab0f-69c7639adc92)

- Nhập đường dẫn Pull Stream (domain đã cấu hình):

![image](https://github.com/user-attachments/assets/97abdcca-c773-4c1b-878d-097d1c8f7ffb)

**Kết quả**:

- Trên OBS:

![image](https://github.com/user-attachments/assets/f8ef71bc-f337-4fec-9db4-d6e7e4cf5dca)

- Trên VLC:

![image](https://github.com/user-attachments/assets/8f3fc9c1-f0ce-4440-84dd-5c67fad9c8c4)

---

***Chúc bạn thành công!!!!***
  



> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **\>> [SERVER](https://vinahost.vn/thue-may-chu-rieng/) – [COLOCATION](https://vinahost.vn/colocation.html) – [CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**<br>
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**<br>
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**<br>
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**<br>
> **\>> [WEBSITE](http://vinawebsite.vn/)**<br>
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**
