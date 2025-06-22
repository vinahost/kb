# Hướng dẫn cấu hình dịch vụ Dynamic Web Acceleration (DWA) với Origin Server

Tài liệu này hướng dẫn bạn cách tăng tốc tải nội dung động cho website của mình bằng dịch vụ **CDNetworks Dynamic Web Acceleration (DWA)**

---

## 🎯 Mục tiêu:

Tăng tốc toàn diện nội dung tĩnh và động cho website `sachgiaokhoa.site` bằng cách:
- Tối ưu kết nối TCP và sử dụng connection pooling để giảm độ trễ.
- Caching thông minh và nén nội dung tĩnh.
- Phân tách nội dung động – tĩnh để tăng hiệu suất.
- Hỗ trợ giao thức hiện đại như HTTP/2, QUIC, TLS 1.3.

---

## 🔧 Cấu hình cần thiết:

| Mục                  | Giá trị                                                  |
| -------------------- | -------------------------------------------------------- |
| **CDN Domain (DWA)** | `sachgiaokhoa.site` _(sử dụng chính root domain)_        |
| **Origin URL**       | `https://sachgiaokhoa.site`                              |
| **CNAME record**     | `sachgiaokhoa.site` → trỏ về `DWA edge hostname` của CDN |

---

## 📌 Cách cấu hình:

=== "**Bước 1**"  
	**Tạo Domain mới trong Dynamic Web Acceleration (DWA)**
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/1.jpg)
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/2.jpg)
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/3.jpg)
=== "**Bước 2**"
	**Trỏ record DNS**
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/4.jpg)
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/5.jpg)
	**Kiểm tra phân giải DNS**
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/6.jpg)
=== "**Bước 3**"
	**Cài đặt chứng chỉ SSL**
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/8.jpg)
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/9.jpg)
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/10.jpg)
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/11.jpg)
=== "**Bước 4**"
	**Truy cập và kiểm tra lại trang web đã cache qua CDN hay chưa**
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/12.jpg)![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/13.jpg)
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/14.jpg)
	![](assets/images/huong-dan-cau-hinh-dynamic-web-acceleration-dwa-voi-origin-server/15.jpg)