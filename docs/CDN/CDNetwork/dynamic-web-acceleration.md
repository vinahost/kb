# Hướng dẫn cấu hình dịch vụ CDNetworks
---

## 1. Hướng dẫn cấu hình dịch vụ CDNetworks - Tăng tốc web động (Dynamic Web Acceleration)

### 1.1. Bắt đầu từ khi mua dịch vụ và Đăng nhập vào Customer Portal

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

### 1.2. Tổng quan giao diện

Sau khi đăng nhập thành công, bạn sẽ được đưa đến trang tổng quan (Dashboard) của Customer Portal. Tại đây, bạn có thể xem nhanh tình trạng dịch vụ, dữ liệu thống kê cơ bản và truy cập vào các phần quản lý dịch vụ cụ thể.

* Ví dụ về Dashboard.

[Hình ảnh minh họa Dashboard của CDNetworks Portal, với các menu chính như Services, Reports, Billing, v.v.]

---

### 1.3. Cấu hình dịch vụ Dynamic Web Acceleration

Dịch vụ này phù hợp để tăng tốc các trang web có nội dung thay đổi thường xuyên, chẳng hạn như website thương mại điện tử, cổng thông tin, hoặc các ứng dụng web động.

Trong trường hợp này, bạn muốn tăng tốc cho **tên miền gốc (root domain)** với **Origin là IP Host**.

1.  **Chọn dịch vụ:**
    * Từ menu chính, điều hướng đến **Services > CDN > Create New Service**.
    * Chọn **Dynamic Web Acceleration**.

    ```
    # [Hình ảnh minh họa việc chọn Dynamic Web Acceleration từ danh sách dịch vụ]
    ```

2.  **Nhập thông tin cơ bản:**
    * **Service Name:** Đặt tên dễ nhớ cho dịch vụ của bạn (ví dụ: `MyRootDomain_DWA`).
    * **Domain:** Nhập tên miền gốc của bạn (ví dụ: `yourrootdomain.com`).
    * **Origin Type:** Chọn **IP Address**.
    * **Origin IP Address:** Nhập địa chỉ IP của máy chủ gốc của bạn (ví dụ: `192.168.1.100`).

    ```
    # [Hình ảnh minh họa form điền thông tin cơ bản cho Dynamic Web Acceleration]
    ```

3.  **Cấu hình nâng cao (tùy chọn):**
    * **HTTP/HTTPS:** Bạn có thể cấu hình hỗ trợ HTTPS tại đây bằng cách tải lên chứng chỉ SSL của mình hoặc sử dụng chứng chỉ do CDNetworks cung cấp.
    * **Cache Policy:** Đối với Dynamic Web Acceleration, chính sách cache thường được cấu hình cẩn thận để đảm bảo nội dung động được cập nhật. Bạn có thể định nghĩa các quy tắc loại trừ cache cho các đường dẫn cụ thể nếu cần.

    !!! info "Lưu ý về Cache Policy"
        Đối với nội dung động, khuyến nghị nên cấu hình cache phù hợp để tránh cache những nội dung không nên hoặc quá hạn. Bạn có thể sử dụng các tiêu đề HTTP như `Cache-Control` trên máy chủ gốc để kiểm soát hành vi cache.

    ```
    # [Hình ảnh minh họa khu vực cấu hình HTTPS và Cache Policy (nếu có thể hiển thị)]
    ```

4.  **Xem lại và tạo dịch vụ:**
    * Kiểm tra lại tất cả các cấu hình đã nhập.
    * Nhấp vào nút **Create Service** (hoặc tương tự).

---

### 1.4. Cập nhật DNS cho Dynamic Web Acceleration

Sau khi dịch vụ được tạo thành công, CDNetworks sẽ cung cấp cho bạn một **CNAME Record** (hoặc A Record đối với tên miền gốc). Bạn cần cập nhật bản ghi DNS của tên miền gốc của mình để trỏ về CDNetworks.

1.  **Lấy CNAME Record:**
    * Trên trang chi tiết dịch vụ của bạn trong Customer Portal, bạn sẽ thấy thông tin **CNAME Record** (ví dụ: `yourrootdomain.com.cdnetworks.net`).

    ```
    # [Hình ảnh minh họa vị trí hiển thị CNAME Record trong trang chi tiết dịch vụ]
    ```

2.  **Cập nhật tại nhà cung cấp DNS của bạn:**
    * Đăng nhập vào trang quản lý DNS của nhà cung cấp tên miền của bạn (ví dụ: GoDaddy, Cloudflare, VNPT, PA Vietnam...).
    * Tìm phần quản lý bản ghi DNS (DNS Records).
    * **Tạo hoặc chỉnh sửa bản ghi:**
        * **Đối với tên miền gốc (root domain):**
            * Nếu nhà cung cấp DNS của bạn hỗ trợ **"Flattening CNAME"** hoặc **"ANAME"**, hãy tạo bản ghi CNAME cho `@` (hoặc tên miền gốc) và trỏ tới CNAME của CDNetworks.
            * Nếu không hỗ trợ, bạn sẽ cần tạo bản ghi A và trỏ tới địa chỉ IP của CDNetworks. Liên hệ hỗ trợ của CDNetworks để lấy IP phù hợp.
        * Lưu các thay đổi.

    ```
    # [Hình ảnh minh họa giao diện cập nhật DNS (ví dụ: Cloudflare hoặc GoDaddy), chỉ mũi tên vào vị trí tạo CNAME hoặc A Record]
    ```

    !!! warning "Quan trọng"
        Thời gian lan truyền DNS (DNS propagation) có thể mất từ vài phút đến 48 giờ. Trong thời gian này, trang web của bạn có thể vẫn truy cập qua máy chủ gốc hoặc gặp sự cố truy cập tạm thời.

---

### :octicons-lightbulb-24: Luôn kiểm tra và theo dõi :octicons-lightbulb-24:

Sau khi cấu hình, điều quan trọng là bạn cần kiểm tra lại các dịch vụ của mình và theo dõi hiệu suất thông qua phần báo cáo và thống kê của CDNetworks Customer Portal.

* **Reports:** Cung cấp thông tin chi tiết về băng thông, lượt truy cập, lưu lượng truy cập theo khu vực địa lý, v.v.
* **Logs:** Giúp bạn gỡ lỗi nếu có vấn đề phát sinh.

Hy vọng hướng dẫn này sẽ giúp bạn dễ dàng cấu hình dịch vụ Dynamic Web Acceleration của CDNetworks. Nếu có bất kỳ thắc mắc hay cần hỗ trợ thêm, đừng ngần ngại liên hệ với đội ngũ hỗ trợ của chúng tôi nhé!

---