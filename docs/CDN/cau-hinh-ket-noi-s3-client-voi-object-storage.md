# HƯỚNG DẪN CÀI ĐẶT VÀ KẾT NỐI S3 CLIENT (S3 BROWSER) ĐẾN OBJECT STORAGE

Tài liệu này hướng dẫn bạn cách cài đặt phần mềm S3 Browser và thiết lập kết nối từ S3 client đến hệ thống Object Storage thông qua giao thức S3. Sau khi kết nối thành công, người dùng có thể quản lý dữ liệu như tải lên, tải xuống và xem các bucket/object.

---
## 1. Mục tiêu

Sau khi hoàn thành hướng dẫn, bạn có thể:
- Cài đặt thành công phần mềm S3 Browser
- Kết nối đến Object Storage bằng Access Key và Secret Key
- Truy cập và quản lý dữ liệu trên Object Storage

---
## 2. Chuẩn bị

Trước khi thực hiện, cần chuẩn bị các thông tin sau:
- Phần mềm S3 Browser (tải tại: [https://s3browser.com/download.aspx](https://s3browser.com/download.aspx))
- Thông tin kết nối Object Storage:
	- **RegionName**
    - **Endpoint** (Service URL)
    ![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_chrome_2025-12-28_21-24-08_1920px-919px.png)
    - **Access Key và Secret Key** (Nếu bạn chưa có thông tin này thì liên hệ lại với Hỗ trợ kỹ thuật để được cấp)


---

## 3. Các bước thực hiện

### Bước 1: Tải và cài đặt S3 Browser

1. Truy cập trang tải phần mềm: [https://s3browser.com/download.aspx](https://s3browser.com/download.aspx)
2. Chọn phiên bản phù hợp. (Khuyến nghị nên cài bản MSI Installer)
3. Tải file cài đặt về máy
4. Chạy file cài đặt và thực hiện các bước theo hướng dẫn trên màn hình
5. Hoàn tất quá trình cài đặt

---

### Bước 2: Khởi động S3 Browser

1. Mở ứng dụng S3 Browser
2. Cửa sổ quản lý tài khoản sẽ xuất hiện
3. Chọn “Add new account” để tạo kết nối mới
![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_21-31-43_1262px-952px.png)

---

### Bước 3: Cấu hình kết nối Object Storage

Nhập các thông tin kết nối như sau:
![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_21-48-22_1010px-762px.png)
![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_21-54-12_717px-780px.png)

Nhấn Close để đóng cửa sổ và nhấn Add new Account để kết nối
Nếu kết nối thành công, danh sách bucket sẽ được hiển thị
Trường hợp không kết nối được, cần kiểm tra lại Access Key, Secret Key và Endpoint URL.

![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_21-56-39_1010px-762px.png)

---

## 4. Thao tác cơ bản

### Upload dữ liệu

1. Chọn bucket cần upload dữ liệu
2. Chọn Upload
3. Chọn file hoặc thư mục từ máy tính
4. Chờ quá trình upload hoàn tất
![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_21-57-13_1010px-762px.png)
![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_21-58-36_1010px-762px.png)

### Download dữ liệu

1. Chọn file hoặc thư mục cần tải
2. Chọn Download
3. Chọn thư mục lưu trữ trên máy tính

![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_22-13-38_1010px-762px.png)
![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_22-14-32_1010px-762px.png)
![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_22-15-01_1010px-762px.png)
### Một số thao tác khác

![](assets/images/cau-hinh-ket-noi-s3-client-voi-object-storage/Screenshot_s3browser-ui_2025-12-28_22-05-55_1010px-762px.png)

---
## 5. Lưu ý

- Không chia sẻ Access Key và Secret Key cho người không có thẩm quyền
- Kiểm tra chính xác Endpoint trước khi kết nối
- Liên hệ bộ phận kỹ thuật nếu gặp lỗi trong quá trình sử dụng