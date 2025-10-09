---
title: "Hướng dẫn khởi động lại dịch vụ VPS"
date: "2025-09-30"
categories:
    - "vps"
---

!!! info "Liên hệ"

    Nếu bạn cần hỗ trợ, xin vui lòng liên hệ hotline **1900 6046 nhánh 3**, hoặc gửi email đến [**support@vinahost.vn**](mailto:support@vinahost.vn), hoặc chat trực tiếp với chúng tôi tại [**đây**](https://livechat.vinahost.vn/chat.php).

## Bạn cần *restart* hay *reboot*?

Trong nhiều trường hợp, "restart" và "reboot" đều có nghĩa là khởi động lại VPS, nhưng thực chất chúng khác nhau, đặc biệt khi bạn vừa nâng cấp tài nguyên (RAM, CPU, dung lượng lưu trữ).

- **Restart (soft reboot)**: chỉ khởi động lại hệ điều hành bên trong VPS. Tương tự như khi bạn chọn nút Restart trên Windows. Do đó, VPS không nhận cấu hình tài nguyên mới.
- **Reboot (hard reboot)**: tắt hẳn VPS rồi bật lại, lúc này hệ thống sẽ áp dụng cấu hình tài nguyên mới. Giống như khi bạn chọn nút Shutdown trên Windows, máy sẽ tắt nguồn hẳn. Lúc này bạn có thể gắn thêm RAM rồi mới bật lại nguồn chẳng hạn.

Vì vậy, nếu chỉ cần khởi động lại hệ điều hành thì *restart*, còn khi nâng cấp tài nguyên VPS thì cần *reboot* để áp dụng.

## Thực hiện

### Bước 1. Truy cập bảng điều khiển VPS

Đăng nhập vào [trang khách hàng VinaHost](https://secure.vinahost.vn/ac/index.php?rp=/login). Trong phần **Dịch vụ**, nhấp vào VPS cần thao tác rồi cuộn xuống cuối trang. Bảng điều khiển sẽ tự động được hiển thị sau khoảng 2 giây.

!!! tip "Mẹo"

    Nếu bảng điều khiển không hiển thị, vui lòng gửi yêu cầu hỗ trợ.

![Chọn VPS cần khởi động lại](../images/khoi-dong-lai-vps-01.png)

### Bước 2. Khởi động lại VPS

#### Nếu bạn muốn restart

Trong bảng điều khiển VPS, chọn nút **Restart** như ảnh bên dưới.

![Restart VPS](../images/khoi-dong-lai-vps-02.png)

#### Nếu bạn muốn reboot

Trong bảng điều khiển VPS, chọn nút **Poweroff** :material-power:{ title="poweroff" } như ảnh bên dưới.

![Poweroff VPS](../images/khoi-dong-lai-vps-03.png)

Đợi VPS tắt hẳn thì nhấn nút **Start** :material-play:{ title="start" } để bật lại.

![Poweroff VPS](../images/khoi-dong-lai-vps-04.png)

---

VinaHost chúc bạn thực hiện thành công! 🍻

> **THAM KHẢO CÁC DỊCH VỤ TẠI [VINAHOST](https://vinahost.vn/)**
>
> **\>> [SERVER](https://vinahost.vn/thue-may-chu-rieng/) – [COLOCATION](https://vinahost.vn/colocation.html) – [CDN](https://vinahost.vn/dich-vu-cdn-chuyen-nghiep)**  
> **\>> [CLOUD](https://vinahost.vn/cloud-server-gia-re/) – [VPS](https://vinahost.vn/vps-ssd-chuyen-nghiep/)**  
> **\>> [HOSTING](https://vinahost.vn/wordpress-hosting)**  
> **\>> [EMAIL](https://vinahost.vn/email-hosting)**  
> **\>> [WEBSITE](http://vinawebsite.vn/)**  
> **\>> [TÊN MIỀN](https://vinahost.vn/ten-mien-gia-re/)**
