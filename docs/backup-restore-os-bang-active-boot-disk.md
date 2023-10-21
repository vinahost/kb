---
title: "Hướng Dẫn Backup Và Restore OS Bằng Active Boot Disk"
date: "2022-11-10"
categories: 
  - "hosting"
  - "server"
coverImage: "Active-Boot-Disk-22.png"
---

Bài viết này sẽ hướng dẫn bạn cách **Backup Và Restore OS Bằng Active Boot Disk**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php**.

**Active@ Boot Disk** là hệ điều hành hoạt động trên **USB/CD/DVD/(LiveCD)**, bao gồm các công cụ được hỗ trợ người sử dụng khi **Windows** gặp sự cố. Các công cụ này có thể cho phép thay đổi mật khẩu người dùng **Windows**, xóa/khôi phục dữ liệu, khôi phục các **partition** của đĩa v/v…

Sau khi boot được vào **Active Boot Disk**

![Active Boot Disk](images/Active-Boot-Disk-1.png)

**Active@ Disk Image** là một phần mềm dùng để sao chép một bản sao chính xác của bất kỳ ổ đĩa máy tính (**HDD, SSD, USB, CD, DVD, Blu-ray, vv**) và lưu nó vào một thư mục. Các **Disk Image** có thể được sử dụng để sao lưu, nâng cấp máy tính hoặc các mục đích sao chép đĩa. Trong trường hợp mất máy tính, một hình ảnh sao lưu có thể được sử dụng để khôi phục hệ thống máy tính của bạn hoặc tìm và khôi phục bất kỳ tập tin cần thiết bên trong một hình ảnh.

Để sao lưu lại hay khôi phục lại những ổ đĩa cứng, USB, DVD, … thì phải cài đặt phần mềm **Active Disk Image** trên máy tính chạy hệ điều hành **Windows** trước hoặc tạo **USB Boot** như hướng dẫn bên dưới.

## 1\. Hướng dẫn Backup hệ điều hành bằng Active Boot Disk

**Bước 1:** Mở phần mềm Active Disk Image

![Active Boot Disk](images/Active-Boot-Disk-2.png)

**Bước 2:** Chọn Disk to Image

![Active Boot Disk](images/Active-Boot-Disk-3.png)

**Bước 3:** Chọn Full Backup và Next

![Active Boot Disk](images/Active-Boot-Disk-4.png)

**Bước 4:** Chọn Disk 0 (nơi chứa hệ điều hành) và Next

![Active Boot Disk](images/Active-Boot-Disk-5.png)

**Bước 5:** Chọn nơi lưu trữ file Backup

![Active Boot Disk](images/Active-Boot-Disk-6.png)

**Bước 6:** Giữ nguyên các cấu hình mặc định và Next.

![Active Boot Disk](images/Active-Boot-Disk-7.png)

Cài đặt **password** và mã hóa cho bản **backup** nếu muốn ở phần **Password protection**

**Bước 7:** Chọn No và Next

![Active Boot Disk](images/Active-Boot-Disk-8.png)

**Bước 8:** Kiểm tra lại các cấu hình trước và Next

![Active Boot Disk](images/Active-Boot-Disk-9.png)

Tiến hành quá trình tạo bản **backup**

![Active Boot Disk](images/Active-Boot-Disk-10.png)

Vậy là đã tạo file **backup** hoàn tất trong `51s`

![Active Boot Disk](images/Active-Boot-Disk-11.png)

Kiểm tra lại file **backup** đã có trong đường dẫn đã chọn ở **Bước 5** chưa

![Active Boot Disk](images/Active-Boot-Disk-12.png)

## 2\. Hướng dẫn Restore hệ điều hành bằng Active Boot Disk

**Bước 1**: Mở phần mềm lên và chọn Image to Disk

![Active Boot Disk](images/Active-Boot-Disk-13.png)

**Bước 2:** Chọn file backup đã tạo và Next

![Active Boot Disk](images/Active-Boot-Disk-14.png)

**Bước 3:** Chọn các mục cần restore và Next

![Active Boot Disk](images/Active-Boot-Disk-15.png)

**Bước 4:** Chọn nơi restore hệ điều hành mới và Next

![Active Boot Disk](images/Active-Boot-Disk-16.png)

**Bước 5:** Chọn Yes để xóa hết dữ liệu trong phân vùng restore và Next

![Active Boot Disk](images/Active-Boot-Disk-17.png)

**Bước 6:** Chọn No và Next

![Active Boot Disk](images/Active-Boot-Disk-18.png)

**Bước 7:** Kiểm tra lại các cấu hình và Next

![Active Boot Disk](images/Active-Boot-Disk-19.png)

**Bước 8:** Tiến hành restore hệ điều hành

![Active Boot Disk](images/Active-Boot-Disk-20.png)

Quá trình **restore** đã hoàn tất trong `2m16s`

![Active Boot Disk](images/Active-Boot-Disk-21.png)

**Reboot** và truy cập vào hệ điều hành

![Active Boot Disk](images/Active-Boot-Disk-22.png)

Chúc bạn thực hiện **Backup** Và **Restore OS** Bằng **Active Boot Disk** thành công!

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
