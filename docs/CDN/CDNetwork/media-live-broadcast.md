## 4. Hướng dẫn cấu hình dịch vụ CDNetworks - Media Live Broadcast (Truyền phát trực tiếp)

### 4.1. Bắt đầu từ khi mua dịch vụ và Đăng nhập vào Customer Portal

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

### 4.2. Tổng quan giao diện

Sau khi đăng nhập thành công, bạn sẽ được đưa đến trang tổng quan (Dashboard) của Customer Portal. Tại đây, bạn có thể xem nhanh tình trạng dịch vụ, dữ liệu thống kê cơ bản và truy cập vào các phần quản lý dịch vụ cụ thể.

* Ví dụ về Dashboard.

[Hình ảnh minh họa Dashboard của CDNetworks Portal, với các menu chính như Services, Reports, Billing, v.v.]

---

### 4.3. Cấu hình dịch vụ Media Live Broadcast (Truyền phát trực tiếp)

Dịch vụ này được thiết kế để phân phối nội dung truyền phát trực tiếp (live stream) với độ trễ thấp và chất lượng cao, hỗ trợ các giao thức như RTMP và HTTP Live Stream (HLS/DASH).

1.  **Chọn dịch vụ:**
    * Từ menu chính, điều hướng đến **Services > CDN > Create New Service**.
    * Chọn **Media Live Broadcast**.

    ```
    # [Hình ảnh minh họa việc chọn Media Live Broadcast]
    ```

2.  **Nhập thông tin cơ bản:**
    * **Service Name:** Đặt tên dịch vụ (ví dụ: `MyLiveStream`).
    * **Domain:** Nhập tên miền phụ của bạn (ví dụ: `live.yourrootdomain.com`).
    * **Origin Type:** Chọn loại Origin phù hợp với nguồn phát trực tiếp của bạn (thường là **IP Address** của máy chủ Encode/Stream Server hoặc **Domain Name**).
    * **Origin Hostname/IP Address:** Nhập địa chỉ Hostname hoặc IP của nguồn phát trực tiếp.

    ```
    # [Hình ảnh minh họa form điền thông tin cơ bản cho Media Live Broadcast]
    ```

3.  **Cấu hình Live Stream (Quan trọng):**
    * **Ingest Protocol:** Chọn giao thức nạp dữ liệu từ nguồn của bạn.
        * **RTMP (Real-Time Messaging Protocol):** Thường được sử dụng để đẩy luồng từ các phần mềm encoder (OBS, Wirecast, v.v.).
        * **HTTP Push:** Cho phép đẩy luồng qua HTTP.
    * **Output Protocol:** Chọn giao thức phân phối đến người xem.
        * **HLS (HTTP Live Streaming):** Phổ biến cho các thiết bị di động và trình duyệt.
        * **DASH (Dynamic Adaptive Streaming over HTTP):** Một tiêu chuẩn quốc tế cho adaptive streaming.
        * **RTMP (Playback):** Nếu bạn muốn người xem truy cập luồng trực tiếp qua RTMP.
    * **Transcoding (tùy chọn):** Nếu bạn muốn CDNetworks chuyển mã luồng thành nhiều chất lượng khác nhau (ví dụ: 1080p, 720p, 480p) để phù hợp với băng thông của người xem, bạn có thể cấu hình tại đây.
    * **Security:** Cấu hình bảo vệ nội dung như Token Authentication, IP Whitelisting/Blacklisting để kiểm soát quyền truy cập.

    ```
    # [Hình ảnh minh họa khu vực cấu hình Ingest/Output Protocols, Transcoding và Security cho Live Broadcast]
    ```

4.  **Xem lại và tạo dịch vụ:**
    * Kiểm tra lại cấu hình.
    * Nhấp vào nút **Create Service**.

---

### 4.4. Cấu hình Encoder và URL Stream cho Media Live Broadcast

Sau khi dịch vụ Live Broadcast được tạo, CDNetworks sẽ cung cấp cho bạn:

1.  **Ingest URL (RTMP Push URL):** Đây là địa chỉ mà phần mềm encoder của bạn sẽ đẩy luồng trực tiếp lên CDNetworks.
    * Ví dụ: `rtmp://push.live.yourrootdomain.com/app/stream_key`
2.  **Playback URL (HLS/DASH/RTMP Playback):** Đây là địa chỉ mà người xem của bạn sẽ sử dụng để truy cập luồng trực tiếp.
    * Ví dụ (HLS): `https://live.yourrootdomain.com/app/stream_key/playlist.m3u8`

    ```
    # [Hình ảnh minh họa vị trí hiển thị Ingest URL và Playback URL trong trang chi tiết dịch vụ Live Broadcast]
    ```

---

### 4.5. Cập nhật DNS cho Media Live Broadcast

Bạn cần tạo bản ghi CNAME cho tên miền phụ Live Broadcast của mình.

1.  **Lấy CNAME Record:**
    * Trên trang chi tiết dịch vụ Live Broadcast, bạn sẽ thấy CNAME Record (ví dụ: `live.yourrootdomain.com.cdnetworks.net`).

2.  **Cập nhật tại nhà cung cấp DNS của bạn:**
    * Đăng nhập vào trang quản lý DNS.
    * Tạo bản ghi CNAME:
        * **Host/Name:** `live`
        * **Value/Target:** CNAME Record từ CDNetworks.
    * Lưu các thay đổi.

    ```
    # [Hình ảnh minh họa cập nhật CNAME cho tên miền phụ Live Broadcast]
    ```

---

### 4.6. Bắt đầu truyền phát

1.  **Cấu hình phần mềm Encoder:**
    * Mở phần mềm encoder của bạn (ví dụ: OBS Studio).
    * Trong cài đặt Stream, chọn **Custom** hoặc **RTMP**.
    * **Server:** Nhập phần Server của Ingest URL (ví dụ: `rtmp://push.live.yourrootdomain.com/app`).
    * **Stream Key:** Nhập phần Stream Key (ví dụ: `stream_key`).
    * Bắt đầu truyền phát.

    ```
    # [Hình ảnh minh họa cài đặt Stream trong OBS Studio]
    ```

2.  **Kiểm tra luồng trực tiếp:**
    * Sử dụng Playback URL đã được cung cấp để kiểm tra luồng trên trình duyệt hoặc trình phát video hỗ trợ HLS/DASH.

---

### :octicons-lightbulb-24: Luôn kiểm tra và theo dõi :octicons-lightbulb-24:

Sau khi cấu hình, điều quan trọng là bạn cần kiểm tra lại các dịch vụ của mình và theo dõi hiệu suất thông qua phần báo cáo và thống kê của CDNetworks Customer Portal.

* **Reports:** Cung cấp thông tin chi tiết về băng thông, lượt truy cập, lưu lượng truy cập theo khu vực địa lý, v.v.
* **Logs:** Giúp bạn gỡ lỗi nếu có vấn đề phát sinh.