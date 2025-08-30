---
title: "Cài đặt mô-đun Nginx `ngx_http_acme_module`"
author: "Trần Quốc Khánh"
date: "2025-08-30"
categories:
  - "nginx"
  - "ssl"
  - "letsencrypt"
  - "acme"
---

!!! info
    Bài viết này sẽ hướng dẫn bạn **hướng dẫn cài đặt mô-đun Nginx `ngx_http_acme_module`**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext.3**, gửi email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc [bấm vào đây](https://livechat.vinahost.vn/chat.php) để chat trực tuyến.

## Thực hiện

Cập nhật và tải các gói cần thiết:

```bash
cd ~
apt update -y && apt install -y \
    build-essential git curl wget unzip pkg-config \
    libssl-dev zlib1g-dev libpcre3-dev \
    clang libclang-dev llvm-dev cmake \
    make autoconf automake libtool
```

Tải mã nguồn Nginx (yêu cầu >=1.26.0) và mô-đun `ngx_http_acme_module`:

```bash
# Kiểm tra phiên bản Nginx với lệnh `nginx -v`
# https://nginx.org/en/download.html
wget http://nginx.org/download/nginx-1.28.0.tar.gz
tar -zxvf nginx-1.28.0.tar.gz

git clone https://github.com/nginx/nginx-acme.git
```

Biên dịch mô-đun `ngx_http_acme_module`:

```bash
cd nginx-1.28.0/
eval ./configure $(nginx -V 2>&1 | sed -n "s/^configure arguments: //p") \
    --add-dynamic-module=../nginx-acme

make modules
```

Tải mô-đun vừa biên dịch vào Nginx:

```bash
cp objs/ngx_http_acme_module.so /usr/lib/nginx/modules/

echo "load_module modules/ngx_http_acme_module.so;" \
    > /etc/nginx/modules-enabled/50-mod-http-acme.conf

grep -q "include /etc/nginx/modules-enabled/\*\.conf;" /etc/nginx/nginx.conf \
    || sed -i '/^events /i include /etc/nginx/modules-enabled/*.conf;\n' /etc/nginx/nginx.conf
```

Áp dụng các thay đổi:

```bash
nginx -t && nginx -s reload
# Đầu ra mong đợi:
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful
```

## Kết luận

VinaHost đã hướng dẫn xong cách **cài đặt mô-đun Nginx `ngx_http_acme_module`**. Mô-đun này sẽ giúp Nginx thực hiện xác minh, cấp phát và gia hạn chứng chỉ tự động mà không cần Certbot.

Sau khi cài đặt và bật mô-đun `ngx_http_acme_module`, các bạn có thể cấu hình Nginx để sử dụng với Let's Encrypt theo hướng dẫn [tại đây](https://kb.vinahost.vn/nginx-native-support-acme/).

Chúc các bạn thực hiện thành công! 🍻

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **\>> [SERVER](https://vinahost.vn/thue-may-chu-rieng/) – [COLOCATION](https://vinahost.vn/colocation.html) – [CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**  
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**  
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**  
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**  
> **\>> [WEBSITE](http://vinawebsite.vn/)**  
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**
