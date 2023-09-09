# Hướng dẫn sử dụng Cache Control trên CDN Vinahost

## Đăng nhập

Đăng nhập vào **portal** của bạn.

Vào **products** chọn **CDN** và **click** vào **domains** muốn cài đặt **Cache Control** 

![Cache Control trên CDN](images/Aspose.Words.61559600-2ad4-431b-a0d7-51e6531be11b.001.png)

## Cấu hình Cache

Vào mục “**Cache Control**” để `set cache` cho **CDN**

**Cache** là những nội dung sẽ được lưu lại trên **CDN** hình ảnh, video, gif,… để giúp khách hàng xem, tải xuống nhanh hơn. Tuỳ thuộc vào website và mục tiêu cần cài đặt **cache** thì sẽ có những cách **cache** khác nhau, vấn đề này đòi hỏi phải hiểu rõ hệ thống website trước khi cấu hình **cache**. Dưới đây là một ví dụ để **cache** các hình ảnh tĩnh trên một site **wordpress**, quý khách có thể tham khảo để cấu hình chuẩn cho **website** mình.

**Lưu ý: Áp dụng cho các dịch vụ File Download và Tăng tốc website.**

Tổng quan giao diện sẽ trông như sau: 

![Cache Control trên CDN](images/Aspose.Words.61559600-2ad4-431b-a0d7-51e6531be11b.002.png)s

## Giải thích một số thông số

- **Policy Name:** Tên của Rule Cache control
- **Match Type:** sẽ chọn Prefix hoặc Regex tuỳ vào mục đích sử dụng mà sẽ cài đặt Prefix hay Regex. Ở đây mình sẽ chọn prefix.

### Prefix (Tiền tố)

- Định nghĩa: Trong ngữ cảnh của URL, Prefix là một chuỗi ký tự hoặc một phần của URL path xuất hiện trước các thành phần khác của đường dẫn.

- Sử dụng: Prefix thường được sử dụng để xác định nhóm các URL có chung tiền tố và thực hiện xử lý hoặc định tuyến tương ứng với nhóm đó. Nó giúp phân loại và xử lý các yêu cầu dựa trên các nhóm URL tương tự.

### Regex (Regular Expression):

- Định nghĩa: Regex là một chuỗi các ký tự đặc biệt định nghĩa một mẫu tìm kiếm trong văn bản.

- Sử dụng: Trong ngữ cảnh của URL, Regex thường được sử dụng để tìm kiếm, so khớp và trích xuất các phần của URL dựa trên các mẫu cụ thể. Regex cho phép bạn thực hiện các hoạt động như kiểm tra tính hợp lệ của URL, tìm kiếm và trích xuất thông tin từ URL path, thay thế các phần của URL, và nhiều tác vụ xử lý khác liên quan đến URL.

## Ví dụ

### Ví dụ về **Prefix**:

URL: https://www.vina-host.com/products/hosting/Linux

Prefix: "/products"

Các URL có prefix "/products" có thể là:

https://www.vina-host.com/products/hosting/windown

<https://www.vina-host.com/products/vps/cheap>

### Ví dụ về **Regex**

Ví dụ, chúng ta muốn tìm kiếm và trích xuất **subcategory** và ID từ URL trên bằng regex.

Regex pattern: /products/([a-zA-Z]+)/(\d+)

## Giải thích

/products/: Tiền tố cố định trong URL path.

([a-zA-Z]+): Một nhóm con bắt buộc chứa các ký tự chữ cái (viết thường hoặc viết hoa). Đại diện cho một phần subcategory trong URL.

/: Dấu gạch chéo cố định.

(\d+): Một nhóm con bắt buộc chứa một chuỗi số. Đại diện cho một phần ID trong URL.
- ## **URL Path (\*)**
`  `Đây sẽ là URL mà CDN sẽ lấy cache. Trong ví dụ trên có thể sử dụng /products để có thể cache tất cả trong /products hoặc /products/\*.png để cache các file png theo đúng URL. Ở đây do ví dụ là site Word Press nên sẽ cache trong thư mục content/uploads nơi chứa nhiều ảnh.

![Cache Control trên CDN](images/Aspose.Words.61559600-2ad4-431b-a0d7-51e6531be11b.003.png)

- **TTL:**  thời gian tính bằng giây để lưu trử cache. Mặc định sẽ là TTL cache của server origin

- **Allowed Referrer:**  Danh sách các tên miền cụ thể hoặc hậu tố tên miền được phân tách bằng dấu phẩy. Nếu tiêu đề Người giới thiệu của yêu cầu của khách hàng không khớp với bất kỳ tên miền cụ thể hoặc hậu tố tên miền nào trong danh sách thì yêu cầu sẽ bị chặn bằng một Phản hồi từ chối quyền HTTP 403. Hậu tố khớp với SNI/H của bạn bất kỳ tên miền nào có cùng phần cuối, ví dụ: ".example.com" sẽ khớp với cả "www.example.com" và "subdomain.example.com", trong khi "example.com" sẽ chỉ khớp chính xác với "example.com".

- **Priority:** Mức độ ưu tiên giữa các rules cache với nhau mặc định sẽ là cao nhất

- **Enable X Cache:**  Khi được bật tất cả response phải hồi từ edge sẽ có X-Cache trong header với giá trị là HIT form da01.xxxx( thông tin của cụm POP CDN đã hit) điều này cho biết CDN đã cache chưa.

- **Never Cache:** Không cache nội dung này kể cả Origin server có hiển thị ở dạng có thể cache.

- **Disable Auto Gzip:** tắt tính năng auto Gzipping. Mặc định Gzipping sẽ được thêm vào Apect-Endcoding : gzip  cho tất cả các yêu cầu gửi về Origin và cũng sẽ tự động nén/giải nén tất cả nội dung cần thiết cho các loại MIME hợp lý.


- **Ignore Origin Server No Cache**: Tuỳ chọn này sẽ bỏ qua các header không có cache được gửi lên từ origin. Các header bị bỏ qua là  : Cache-Control , Authorizaticon , Set-Cookie, Exprires và Pragma

- **Ignore Client No Cache:** Tính năng này sẽ bỏ qua các header không có cache từ máy khách.

- **Ignore Query String:** Tính năng này sẽ bỏ qua bất kì chuỗi truy vấn URL nào khi lưu một object vào cache.

- **Response Header**: Chọn các hoạt động cho các header được phản hồi từ máy origin.

Có thể thêm vào **header** một giá trị nào đó hoặc thay thế ghi đè lên **header**.

Cũng có thể xoá hoàn toàn **header reponse** và phải hồi theo **value name**.

Sau khi đã chọn tất cả thì có thể chọn **save** để **set rule cache control**.

![Cache Control trên CDN](images/Aspose.Words.61559600-2ad4-431b-a0d7-51e6531be11b.004.png)

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
> 
> **\>>** [**SERVER**](https://vinahost.vn/thue-may-chu-rieng/) **–** [**COLOCATION**](https://vinahost.vn/colocation.html) – [**CDN**](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)
> 
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**
> 
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**
> 
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**
> 
> **\>> [WEBSITE](http://vinawebsite.vn/)**
> 
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**