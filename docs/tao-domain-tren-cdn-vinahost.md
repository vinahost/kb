# Hướng Dẫn Tạo Domain CDN Tại VINAHOST

### Bước 1: Đăng nhập hệ thống quản lý CDN
Truy cập vào trang quản lý CDN được cung cấp khi đăng ký dịch vụ tại VINAHOST.
![image](https://github.com/user-attachments/assets/73d11ae4-2657-4fd2-acbe-5b45899cc285)

### Bước 2: Truy cập Media Acceleration
Tại menu **Media Delivery**, chọn **Media Acceleration**.
![image](https://github.com/user-attachments/assets/54f5396e-62a0-422c-9d1b-46d9968cef9e)

### Bước 3: Tạo mới domain CDN
Trong giao diện **Configuration**, chọn **Create new domain**.
![image](https://github.com/user-attachments/assets/0efe54bf-cb58-4019-b47c-54a44c71d60a)

### Bước 4: Cấu hình thông tin domain

Tại tab **Domain Information**:

- **Contract-Item**: Chọn hợp đồng (Contract-Item) có sẵn.
![image](https://github.com/user-attachments/assets/64fae013-f049-45ab-9c59-2ec97aea95a5)

- **Customize Control Group**: Chọn ID login của tài khoản bạn đang sử dụng.
![image](https://github.com/user-attachments/assets/1b8b6152-7042-4057-9357-c9943145d4a7)

#### Thiết lập domain:
- **Back-to-Origin IP/Domain**: Chọn **Own Origin**
  1.Nhập tên miền (domain) bạn muốn cấu hình CDN.  
  2.Nhập IP hoặc domain của máy chủ gốc (**Origin Server**).
- **Acceleration Configuration**: Chọn **Custom Setting**.
![image](https://github.com/user-attachments/assets/fbf05e67-7659-4741-a1ec-4cee45eaa3b5)


Sau đó nhấn **Submit** để hoàn tất bước cấu hình.

> ✅ Sau khi cấu hình thành công, bạn có thể:
> - Nhấn **Return to configuration** để quay lại màn hình cấu hình.
> - Hoặc chọn các tùy chọn khác để thêm mới hoặc chỉnh sửa domain hiện tại.
![image](https://github.com/user-attachments/assets/269bfb6c-acef-4aa6-9e5a-2ff567ecf1c5)


### Bước 5: Kiểm tra trạng thái domain

- Sau khi tạo, trạng thái domain sẽ là **Deploying**.
- Nếu cần triển khai gấp, bạn có thể liên hệ bộ phận kỹ thuật qua email: [support@vinahost.vn](mailto:support@vinahost.vn) để được hỗ trợ.
![image](https://github.com/user-attachments/assets/83eb8b8a-10ca-4d08-8516-cf5a5d5d1a2d)


> 🔄 Khi triển khai hoàn tất, trạng thái sẽ chuyển sang **Enable**.
![image](https://github.com/user-attachments/assets/f3c22088-19dd-497c-a4cc-406faf3f005b)

### Bước 6: Tạo bản ghi CNAME cho tên miền CDN

- Truy cập hệ thống quản lý DNS và tạo **bản ghi CNAME** cho domain CDN.
- Nếu bạn đã đăng ký tên miền tại Vinahost, có thể tham khảo hướng dẫn chi tiết tại:
  [https://blog.vinahost.vn/huong-dan-su-dung-dns-manager-va-quan-ly-ten-mien-tai-vinahost/](https://blog.vinahost.vn/huong-dan-su-dung-dns-manager-va-quan-ly-ten-mien-tai-vinahost/)
![image](https://github.com/user-attachments/assets/03bd506e-f254-4bd6-a4e4-d8942782be0d)

### Bước 7: Kiểm tra hoạt động CDN

Truy cập domain đã cấu hình CDN để kiểm tra hoạt động và đảm bảo nội dung được phân phối thông qua CDN.



---

> 📝 **Lưu ý:** Hướng dẫn này dành cho khách hàng sử dụng dịch vụ CDN của VINAHOST. Nếu có bất kỳ khó khăn nào, vui lòng liên hệ bộ phận kỹ thuật để được trợ giúp nhanh chóng.



