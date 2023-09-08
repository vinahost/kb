---
title: "Một Số Lệnh Cơ Bản Kiểm Tra Server Khi Bị DDoS"
date: "2023-02-09"
categories: 
  - "chu-de-khac"
coverImage: "mot-so-lenh-co-ban-kiem-tra-server-khi-bi-ddos-2.jpg"
---

Bài viết này sẽ giới thiệu bạn **Một Số Lệnh Cơ Bản Kiểm Tra Server Khi Bị DDoS**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext.3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat [https://livechat.vinahost.vn/chat.php](https://livechat.vinahost.vn/chat.php).

## 1\. Giới thiệu chung về DDoS

Tấn công từ chối dịch vụ phân tán (DDoS – Distributed Denial Of Service) là kiểu tấn công làm cho hệ thống máy tính hay hệ thống mạng quá tải, không thể cung

cấp dịch vụ hoặc phải dừng hoạt động. Trong các cuộc tấn công DDoS, máy chủ dịch vụ sẽ bị “ngập” bởi hàng loạt các lệnh truy cập từ lượng kết nối khổng lồ.

Khi số lệnh truy cập quá lớn, máy chủ sẽ quá tải và không còn khả năng xử lý các yêu cầu. Hậu quả là người dùng không thể truy cập vào các dịch vụ trên các trang web bị tấn công DDoS.

Để kiểm tra tình trạng máy chủ, bạn có thể sử dụng các Lệnh Cơ Bản Kiểm Tra Server Khi Bị DDoS như hướng dẫn dưới đây.

 

## 2\. Các câu lệnh cơ bản kiểm tra Server khi bị DDoS

![Một Số Lệnh Cơ Bản Kiểm Tra Server Khi Bị DDoS ](images/mot-so-lenh-co-ban-kiem-tra-server-khi-bi-ddos-1.jpg)

_Một Số Lệnh Cơ Bản Kiểm Tra Server Khi Bị DDoS_

Dưới đây là một vài câu lệnh cơ bản để kiểm tra Server khi thấy Server có dấu hiệu bị tấn công DDos

- Đếm lượng connection vào Port 80:

netstat -n | grep :80 |wc –l

- Kiểm tra số lượng connection đang ở trạng thái SYN\_RECV:

netstat -n | grep :80 | grep SYN\_RECV|wc –l

- Hiển thị tất cả các IP đang kết nối và số lượng kết nối từ mỗi IP:

netstat -an|grep :80 |awk '{print $5}'|cut -d":" -f1|sort|uniq -c|sort –rn

- Nếu muốn kiểm tra IP nào mở nhiều SYN thì thêm vào:

netstat -an|grep :80|grep SYN |awk '{print $5}'|cut -d":" -f1|sort|uniq -c|sort –rn

- Đối với server có nhiều IP, để kiểm tra IP nào đang bị tấn công:

netstat -plan | grep :80 | awk '{print $4}'| cut -d: -f1 |sort |uniq –c

- Hiển thị tất cả các IP đang kết nối và số lượng kết nối từ mỗi IP:

netstat -an | grep ':80' | awk '{print $5}' | sed s/'::ffff:'// | cut -d":" -f1 | sort | uniq –c

- Hiển thị số lượng kết nối mỗi loại

netstat -an | grep :80 | awk '{print $6}' | sort | uniq -c 61 ESTABLISHED

13 FIN\_WAIT1

17 FIN\_WAIT2

1 LISTEN

25 SYN\_RECV

298 TIME\_WAIT

- Hiển thị tất cả các IP đang kết nối và số lượng kết nối từ mỗi IP

watch "netstat -an | grep ':80' | awk '{print \\$5}' | sed s/'::ffff:'// | cut -d\\":\\" -f1 | sort

| uniq -c”

watch "netstat -an | grep :80 | awk '{print \\$6}' | sort | uniq -c"

Chúc bạn thực hiện các câu lệnh cơ bản kiểm tra Server khi bị DDoS thành công!

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://kb.vinahost.vn/)**
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
