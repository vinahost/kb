# Hướng dẫn cấu hình dịch vụ Media Acceleration với Object Storage

Tài liệu này hướng dẫn bạn cách tăng tốc phân phối video theo yêu cầu (VoD) trên website **`sachgiaokhoa.site`** thông qua dịch vụ **Media Acceleration****, sử dụng nguồn video từ **Object Storage**.

---
## 🎯 Mục tiêu:

Tối ưu việc truyền tải nội dung media (video) từ Object Storage tới người dùng cuối bằng cách:
- Phân phối nội dung qua các edge PoPs toàn cầu của CDNetworks.
- Tăng tốc phát video với cơ chế cache và định tuyến thông minh.
- Hỗ trợ các định dạng phát video phổ biến như HLS, MP4 Progressive, MPEG-DASH.
- Tương thích tốt với mọi thiết bị và hệ điều hành.
---

## 🔧 Cấu hình cần thiết:

| Mục                    | Giá trị                                                         |
| ---------------------- | --------------------------------------------------------------- |
| **CDN Domain (Media)** | `media.sachgiaokhoa.site` _(subdomain riêng cho media)_         |
| **Origin Type**        | Object Storage                                                  |
| **CNAME record**       | `media.sachgiaokhoa.site` → trỏ về `media-acceleration.cdn.net` |

---

## 📌 Cách cấu hình:

=== "**Bước 1**"  
	**Tạo Bucket mới**
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/1.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/3.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/4.jpg)
	**Tạo Folder trong Bucket**
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/6.jpg)
	**Upload File lên Bucket**
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/7.jpg)
	**Kiểm tra xem trước File**
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/8.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/9.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/23.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/24.jpg)
=== "**Bước 2**"  
	**Thêm domain trong dịch vụ Media Acceleration**  
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/10.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/11.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/16.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/12.jpg)
=== "**Bước 3**"  
	**Trỏ record DNS**
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/13.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/14.jpg)
	**Kiểm tra phân giải DNS**
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/15.jpg)
=== "**Bước 4**"  
	**Cài đặt chứng chỉ SSL**
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/17.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/18.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/19.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/20.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/21.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/22.jpg)
=== "**Bước 5**"  
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/25.jpg)
	![](assets/images/huong-dan-cau-hinh-media-acceleration-voi-object-storage/11h-09'_2025-06-23.jpg)
