# Hướng dẫn cấu hình dịch vụ Content Acceleration (CA) - Tăng tốc nội dung tĩnh

Tài liệu này hướng dẫn bạn cách tối ưu hóa tốc độ tải nội dung tĩnh cho website của mình bằng dịch vụ CDNetworks Content Acceleration (CA).

# Chuẩn bị

- Domain chính cho trang web: ví dụ `design.nin.id.vn`
- Subdomain cho CDN: ví dụ `static.nin.id.vn`

# Cấu hình
## **Bước 1:** Truy cập dịch vụ 

``` markdown-tree 
 Home
	 Products
		 Web Performance
			 Content Acceleration
```

![](assets/images/content-acceleration/content-acceleration.jpg)

## **Bước 2**: Thêm subdomain mới

**Domain Information**: 
- **Contract-item:** Thông tin định danh của hợp đồng đang sử dụng.
- **Domain Type:** Lựa chọn loại tên miền phù hợp (Domain hoặc Alias of Existing Domain).
- **Customized Control Group:** Chính là ID Username của bạn trong hệ thống.
- **Domain:** Subdomain được sử dụng để kết nối với CDN (ví dụ: `cdn.example.com`).
- **Back-to-Origin IP/Domain:** Địa chỉ IP hoặc domain của máy chủ gốc nơi dữ liệu thực tế được lưu trữ.

**Acceleration Configuration**:
- **Cấu hình có sẵn**: 
	-- **Copy settings from an existing domain** tích chọn nếu muốn sao chép cấu hình đã cấu hĩnh sẵn cho domain đã có trước đó. 
	**The Reference Domain**: Chọn cấu hình của domain cần sao chép
- **Cấu hình mới**: 
	-- Customized settings** tích chọn cho tên miền mới hoặc muốn tuỳ chỉnh thêm cấu hình

![](assets/images/content-acceleration/Domain-Information.jpg)

![](assets/images/content-acceleration/Acceleration-Configuration.jpg)

## **Bước 3**: Trỏ record DNS

![](assets/images/content-acceleration/tro_record_dns_cname.jpg)

![](assets/images/content-acceleration/tro-record-dns-tren-CF.png)

## **Bước 4**: Kiểm tra phân giải DNS

Truy cập trang DNSChecker để kiểm tra phân giải 
https://dnschecker.org/#CNAME/static.nin.id.vn

![](assets/images/content-acceleration/kiem-tra-phan-giai-dns.jpg)

## **Bước 5**: Cài đặt chứng chỉ SSL

![](assets/images/content-acceleration/truy-cap-Certificate-MGMT.jpg)


![](assets/images/content-acceleration/One-Click%20Certificate%20Application.jpg)

Ở đây mình sẽ ấn chọn **One-Click Certificate Application**

![](assets/images/content-acceleration/15h-05'_2025-06-18.jpg)![](assets/images/content-acceleration/15h-09'_2025-06-18.jpg)

**Bây giờ hãy hay lại trang quản lý dịch vụ Content Acceleration để Deploy chứng chỉ SSL đó cho Subdomain thêm ở bước 2**

![](assets/images/content-acceleration/15h-11'_2025-06-18.jpg)

![](assets/images/content-acceleration/15h-16'_2025-06-18.jpg)![](assets/images/content-acceleration/15h-28'_2025-06-18.jpg)

Lưu ý thêm, Nếu trang web của bạn đang sử dụng Shared Hosting và chỉ cho phép truy cập bằng Domain thì cần cấu hình khai báo thêm **Back-to-Origin Request Host** là domain trang web của bạn
![](assets/images/content-acceleration/16h-17'_2025-06-18.jpg)

## Bước 6: Cấu hình CDN trên trang web và kiểm thử

Link hình ảnh gốc: https://design.nin.id.vn/wp-content/uploads/2023/02/bang-hieu-ten-cong-ty-dep.jpg

Kiểm thử thời gian thông qua Postman

=== "Chưa cấu hình CDN"
![](assets/images/content-acceleration/16h-05'_2025-06-18.jpg)

=== "Lần đầu CDN chưa cache"	![](assets/images/content-acceleration/15h-58'_2025-06-18.jpg)

=== "Lần tiếp theo CDN đã có cache"	![](assets/images/content-acceleration/15h-59'_2025-06-18.jpg)


