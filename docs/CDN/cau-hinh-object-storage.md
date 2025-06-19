# Hướng dẫn cấu hình dịch vụ Object Storage

### 🎯 Mục tiêu:
Lưu và phân phối file tĩnh như: ảnh, video bài giảng, PDF, MP3...
### 🔧 Cấu hình cần thiết:

| Mục                 | Giá trị                                               |
| ------------------- | ----------------------------------------------------- |
| **Bucket name**     | `sachgiaokhoa-baigiang` _(hoặc tuỳ chọn)_             |
| **CDN Domain (OS)** | `media.sachgiaokhoa.site`                             |
| **CNAME record**    | `media.sachgiaokhoa.site` → trỏ về CDN URL của bucket |

# Cấu hình  
=== "**Bước 1**"  
	**Tạo Bucket trong Object Storage**  
	![](assets/images/cau-hinh-object-storage/1.jpg)
	![](assets/images/cau-hinh-object-storage/3.jpg)![](assets/images/cau-hinh-object-storage/4.jpg)
	![](assets/images/cau-hinh-object-storage/5.jpg)
=== "**Bước 2**"  
	**Tạo thư mục và tải video lên Bucket**  
	![](assets/images/cau-hinh-object-storage/6.jpg)
	![](assets/images/cau-hinh-object-storage/7.jpg)
	![](assets/images/cau-hinh-object-storage/8.jpg)
	![](assets/images/cau-hinh-object-storage/9.jpg)
=== "**Bước 3 (Tuỳ chọn thêm)**"  
	**Tạo tên miền tuỳ chỉnh cho Bucket**  
	![](assets/images/cau-hinh-object-storage/10.jpg)
	![](assets/images/cau-hinh-object-storage/11.jpg)
	**Trỏ record DNS**  
	![](assets/images/cau-hinh-object-storage/12.jpg)
	![](assets/images/cau-hinh-object-storage/13.jpg)
	![](assets/images/cau-hinh-object-storage/14.jpg)
	![](assets/images/cau-hinh-object-storage/15.jpg)
		
