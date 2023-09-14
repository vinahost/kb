---
title: "Thủ thuật WordPress"
date: "2020-09-14"
coverImage: "wrp-e1600051647938.png"
---

## Hướng dẫn cách bảo vệ bài viết WordPress

Khi đặt mật khẩu, chỉ những người có mật khẩu mới đọc được bài viết.

**Các bước thực hiện như sau:**

**Bước 1**: Đăng nhập vào trang quản trị WordPress.  
**Bước 2**: Ở mục Dashboard chọn Post và chọn Add New.  
**Bước 3**: Soạn thảo nội dung bài viết cần bảo vệ.  
**Bước 4**: Tại bảng tùy chọn Publish mục Visibility chọn Edit sẽ hiển thị các tùy chọn hiển thị bài đăng.

![Hướng dẫn cách bảo vệ bài viết WordPress](images/113453ba4c-vinahost-bao-ve-bai-viet-wordpress-1.png)

**Bước 5**: Chọn Password protected.  
**Bước 6**: Nhập mật khẩu vào text box.  
**Bước 7**: Chọn OK và click Publish.

Video tham khảo:

<iframe title="YouTube video player" src="https://www.youtube.com/embed/Xhm2wHyMMVQ" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Vậy là bài viết của bạn đã được bảo vệ chỉ những ai có mật khẩu mới có thể xem được.  

## Hướng dẫn thay đổi mật khẩu WordPress

Thông thường nếu quên mật khẩu, bạn có thể sử dụng chức năng **Reset** mật khẩu thông qua **e-mail** của **WordPress**. Nhưng trong trường hợp **email** bạn đặt không chính xác hoặc **email** không thể sử dụng, bạn có thể thực hiện truy vấn **SQL** trên **database** để thực hiện cập nhật lại mật khẩu. 

**Các bước thực hiện như sau:**

**Bước 1**: Đăng nhập vào cPanel.  
**Bước 2**: Tại mục Database Management bên trái bạn chọn phpMyAdmin.  
**Bước 3**: Trong cửa sổ bên trái sẽ có danh sách các database trên hosting của bạn, bạn chọn vào database website WordPress.

![Hướng dẫn bảo vệ WordPress khỏi spam comment](images/4004a2f9fd-vinahost-bao-ve-wordpress-khoi-spam-comment-1.png)

**Bước 4**: Tại Menu phía trên bạn chọn SQL.  
**Bước 5**: Copy và dán đoạn truy vấn SQL sau vào text box.

UPDATE \`wp\_users\` SET \`user\_pass\` = MD5( '_NEW\_PASSWORD_' ) WHERE \`wp\_users\`.\`user\_login\` = "_ADMIN\_USERNAME_";

Thay đổi NEW\_PASSWORD bằng mật khẩu mới và ADMIN\_USERNAME bằng tên user quản trị.

![Hướng dẫn bảo vệ WordPress khỏi spam comment](images/70ecc6b889-vinahost-bao-ve-wordpress-khoi-spam-comment-2-1024x369.png)

Chọn **Go** sau khi nhập hoàn tất sẽ cập nhật lại **database** với mật khẩu mới.

Bây giờ bạn có thể đăng nhập vào trang quản trị **WordPress** bằng thông tin mật khẩu mới. Các bạn có thể xem thêm video hướng dẫn sau:

<iframe title="YouTube video player" src="https://www.youtube.com/embed/gmQSvSy5FcY" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Chúc bạn thành công!

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://blog.vinahost.vn/)**
> 
> **\>>** [**SERVER**](https://vinahost.vn/thue-may-chu-rieng/) **–** [**COLOCATION**](https://vinahost.vn/colocation.html) – [**CDN**](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)
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
> 
> **\>> [SSL](https://vinahost.vn/geotrust-ssl) – [LICENSE](https://vinahost.vn/bang-gia-license)**
