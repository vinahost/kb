# Hướng dẫn cấu hình dịch vụ Content Acceleration (CA) với Object Storage

Tài liệu này hướng dẫn bạn cách tối ưu hóa tốc độ tải nội dung tĩnh cho website của mình bằng dịch vụ CDNetworks Content Acceleration (CA) với Object Storage

# Chuẩn bị  

- Domain chính: ví dụ `sachgiaokhoa.site`  
- Domain CDN: ví dụ `static.sachgiaokhoa.site`  

# Cấu hình  
== "Bước 1"  
	**Tạo Bucket trong Object Storage**  
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/2.jpg)![](assets/images/cau-hinh-content-acceleration-voi-object-storage/3.jpg)![](assets/images/cau-hinh-content-acceleration-voi-object-storage/4.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/5.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/6.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/7.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/8.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/9.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/10.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/11.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/12.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/13.jpg)
== "Bước 2"  
	**Tạo Domain mới trong Content Acceleration**  
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/14.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/15.jpg)
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/16.jpg)
== "Bước 3"  
	**Trỏ record DNS**  
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/17.jpg)
		Trỏ record DNS trong trang DNS Manager  
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/18.jpg)
		Kiểm tra phân giải DNS
		![](assets/images/cau-hinh-content-acceleration-voi-object-storage/19.jpg)
== "Bước 4"  
	**Cài đặt chứng chỉ SSL**  
	Sau khi DNS đã phân giải thành công, thì tiến hành cài đặt chứng chỉ SSL  
	![](assets/images/cau-hinh-content-acceleration-voi-object-storage/20.jpg)
	Tiến hành oder một chứng chỉ SSL mới  
	![](assets/images/cau-hinh-content-acceleration-voi-object-storage/21.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-object-storage/22.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-object-storage/23.jpg)
	![](assets/images/cau-hinh-content-acceleration-voi-object-storage/24.jpg)
	Truy cập lại trang dịch vụ Content Acceleration để kiểm tra  
	![](assets/images/cau-hinh-content-acceleration-voi-object-storage/25.jpg)
== "Bước 5"  
	**Cấu hình CDN lên trang web và kiểm thử**  
	Kiểm thử thông qua Postman https://web.postman.co/  
	