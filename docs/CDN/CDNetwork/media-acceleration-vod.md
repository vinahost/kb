## 3. Hướng dẫn cấu hình dịch vụ CDNetworks - Media Acceleration VoD (Video on Demand)

### 3.1. Bắt đầu từ khi mua dịch vụ và Đăng nhập vào Customer Portal

Khi bạn mua dịch vụ của CDNetworks, hệ thống sẽ tự động tạo một tài khoản và cung cấp cho bạn thông tin đăng nhập vào **Cổng quản lý khách hàng (Customer Portal)** của chúng tôi. Đây là nơi bạn sẽ thực hiện mọi cấu hình cho các dịch vụ của mình.

1.  **Truy cập đường dẫn:** Bạn sẽ nhận được đường dẫn truy cập cổng quản lý qua email. Thông thường sẽ là một đường dẫn có dạng `https://portal.cdnetworks.com` hoặc tương tự.
2.  **Nhập thông tin đăng nhập:** Sử dụng **Username** và **Password** đã được cung cấp.

    ```
    # Ví dụ về giao diện đăng nhập
    # Bạn sẽ thấy trường Username và Password
    # [Hình ảnh minh họa giao diện đăng nhập CDNetworks Portal]
    ```

    !!! tip "Mẹo nhỏ"
        Hãy lưu trữ thông tin đăng nhập này ở nơi an toàn để tránh mất mát. Nếu quên mật khẩu, bạn có thể sử dụng chức năng "Forgot Password".

### 3.2. Tổng quan giao diện

Sau khi đăng nhập thành công, bạn sẽ được đưa đến trang tổng quan (Dashboard) của Customer Portal. Tại đây, bạn có thể xem nhanh tình trạng dịch vụ, dữ liệu thống kê cơ bản và truy cập vào các phần quản lý dịch vụ cụ thể.

* Ví dụ về Dashboard.

[Hình ảnh minh họa Dashboard của CDNetworks Portal, với các menu chính như Services, Reports, Billing, v.v.]

---

### 3.3. Cấu hình dịch vụ Media Acceleration VoD (Video on Demand)

Dịch vụ này được tối ưu hóa để phân phối video theo yêu cầu (VoD), đảm bảo chất lượng phát lại cao và giảm thời gian tải ban đầu.

Bạn có thể sử dụng **Storage CDNetworks** hoặc **Storage Ngoài (External Storage)** làm nguồn.

#### 3.3.1. Trường hợp 1: Origin là Storage CDNetworks

1.  **Chọn dịch vụ:**
    * Từ menu chính, điều hướng đến **Services > CDN > Create New Service**.
    * Chọn **Media Acceleration VoD**.

    ```
    # [Hình ảnh minh họa việc chọn Media Acceleration VoD]
    ```

2.  **Nhập thông tin cơ bản:**
    * **Service Name:** Đặt tên dịch vụ (ví dụ: `MyVoD_CDNS`).
    * **Domain:** Nhập tên miền phụ của bạn (ví dụ: `vod.yourrootdomain.com`).
    * **Origin Type:** Chọn **CDNetworks Storage**.
    * Hệ thống sẽ tự động tạo một kho lưu trữ cho bạn hoặc bạn có thể chọn một kho lưu trữ đã có. Ghi lại **Storage URL** hoặc **Storage Bucket Name**.

    ```
    # [Hình ảnh minh họa form điền thông tin và chọn CDNetworks Storage làm Origin]
    ```

3.  **Upload nội dung lên CDNetworks Storage:**
    * Truy cập phần quản lý Storage trong Customer Portal (thường là **Storage > Object Storage**).
    * Chọn kho lưu trữ của bạn và tải lên các tệp video.
    * Bạn có thể sử dụng giao thức FTP/SFTP hoặc công cụ quản lý file trực tiếp qua giao diện web.

    ```
    # [Hình ảnh minh họa giao diện quản lý Object Storage và hành động upload file]
    ```

    !!! success "Mẹo về quản lý Storage"
        Tổ chức các tệp video của bạn thành các thư mục để dễ quản lý. Ví dụ: `/movies/movie1.mp4`, `/series/ep1.mp4`.

4.  **Xem lại và tạo dịch vụ:**
    * Kiểm tra lại cấu hình.
    * Nhấp vào nút **Create Service**.

#### 3.3.2. Trường hợp 2: Origin là Storage Ngoài (External Storage)

1.  **Chọn dịch vụ:**
    * Tương tự như trên, chọn **Media Acceleration VoD**.

2.  **Nhập thông tin cơ bản:**
    * **Service Name:** Đặt tên dịch vụ (ví dụ: `MyVoD_ExternalStorage`).
    * **Domain:** Nhập tên miền phụ của bạn (ví dụ: `vod.yourrootdomain.com`).
    * **Origin Type:** Chọn **External Storage** (hoặc **IP Address** nếu là máy chủ riêng).
    * **Origin Hostname/IP Address:** Nhập địa chỉ Hostname hoặc IP của kho lưu trữ ngoài của bạn (ví dụ: `your-s3-bucket.s3.amazonaws.com` hoặc `192.168.1.102`).
    * Nếu là S3 hoặc GCS, bạn có thể cần cung cấp thêm thông tin xác thực.

    ```
    # [Hình ảnh minh họa form điền thông tin và chọn External Storage làm Origin]
    ```

3.  **Cấu hình nâng cao (Quan trọng cho VoD):**
    * **Cache Policy:** Cấu hình cache phù hợp để các tệp video được lưu trữ hiệu quả trên CDN.
    * **Range Requests:** Đảm bảo tính năng này được bật để hỗ trợ phát video theo luồng (streaming) và tua video nhanh chóng.
    * **Security Features:** Cấu hình bảo vệ nội dung như Token Authentication, URL Signing để ngăn chặn truy cập trái phép.

    ```
    # [Hình ảnh minh họa khu vực cấu hình Range Requests và Security Features cho VoD]
    ```

4.  **Xem lại và tạo dịch vụ:**
    * Kiểm tra lại cấu hình.
    * Nhấp vào nút **Create Service**.

---

### 3.4. Cập nhật DNS cho Media Acceleration VoD

Bạn cần tạo bản ghi CNAME cho tên miền phụ VoD của mình.

1.  **Lấy CNAME Record:**
    * Trên trang chi tiết dịch vụ VoD, bạn sẽ thấy CNAME Record (ví dụ: `vod.yourrootdomain.com.cdnetworks.net`).

2.  **Cập nhật tại nhà cung cấp DNS của bạn:**
    * Đăng nhập vào trang quản lý DNS.
    * Tạo bản ghi CNAME:
        * **Host/Name:** `vod`
        * **Value/Target:** CNAME Record từ CDNetworks.
    * Lưu các thay đổi.

    ```
    # [Hình ảnh minh họa cập nhật CNAME cho tên miền phụ VoD]
    ```

---

### :octicons-lightbulb-24: Luôn kiểm tra và theo dõi :octicons-lightbulb-24:

Sau khi cấu hình, điều quan trọng là bạn cần kiểm tra lại các dịch vụ của mình và theo dõi hiệu suất thông qua phần báo cáo và thống kê của CDNetworks Customer Portal.

* **Reports:** Cung cấp thông tin chi tiết về băng thông, lượt truy cập, lưu lượng truy cập theo khu vực địa lý, v.v.
* **Logs:** Giúp bạn gỡ lỗi nếu có vấn đề phát sinh.

Hy vọng hướng dẫn này sẽ giúp bạn dễ dàng cấu hình dịch vụ Media Acceleration VoD của CDNetworks. Nếu có bất kỳ thắc mắc hay cần hỗ trợ thêm, đừng ngần ngại liên hệ với đội ngũ hỗ trợ của chúng tôi nhé!

---