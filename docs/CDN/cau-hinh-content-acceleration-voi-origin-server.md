## Hướng dẫn cấu hình dịch vụ Content Acceleration (CA) với Origin Server

Tài liệu này hướng dẫn bạn cách tối ưu hóa tốc độ tải nội dung tĩnh cho website của mình bằng dịch vụ CDNetworks Content Acceleration (CA) với Origin Server
## 🎯 Mục tiêu:
Tăng tốc nội dung tĩnh của website `sachgiaokhoa.site` như HTML, CSS, JS, ảnh...
## 🔧 Cấu hình cần thiết:

| Mục                 | Giá trị                                                        |
| ------------------- | -------------------------------------------------------------- |
| **CDN Domain (CA)** | `static.sachgiaokhoa.site` _(subdomain dành cho CDN)_          |
| **Origin URL**      | `https://sachgiaokhoa.site`                                    |
| **CNAME record**    | `static.sachgiaokhoa.site` → trỏ về `CA edge hostname` của CDN |
## 📌 Cách cấu hình:

=== "**Bước 1**"  
	**Tạo Domain mới trong Content Acceleration**  
		![](assets/images/cau-hinh-content-acceleration-voi-origin-server/14.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-origin-server/15.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-origin-server/16.jpg)
=== "**Bước 2**"  
	**Trỏ record DNS**  
		![](assets/images/cau-hinh-content-acceleration-voi-origin-server/17.jpg)
		Trỏ record DNS trong trang DNS Manager  
		![](assets/images/cau-hinh-content-acceleration-voi-origin-server/18.jpg)
		Kiểm tra phân giải DNS
		![](assets/images/cau-hinh-content-acceleration-voi-origin-server/19.jpg)
=== "**Bước 3**"  
	**Cài đặt chứng chỉ SSL**  
	Sau khi DNS đã phân giải thành công, thì tiến hành cài đặt chứng chỉ SSL  
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/20.jpg)
	Tiến hành oder một chứng chỉ SSL mới  
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/21.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/22.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/23.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/24.jpg)
	Truy cập lại trang dịch vụ Content Acceleration để kiểm tra  
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/25.jpg)
=== "**Bước 4**"  
	**Cấu hình CDN lên trang web**  
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/26.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/27.jpg)
=== "**Bước 5**"  
	Truy cập trang web và nhấn F12 để kiểm tra các file tĩnh đã nhận domain CDN hay chưa và  cách nhận biết cách đã HIT hoặc MISS  
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/28.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/29.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-origin-server/30.jpg)