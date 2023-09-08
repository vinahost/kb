---
title: "Hướng Dẫn Tạo VM Instance Trên vCloud VinaHost"
date: "2023-02-11"
categories: 
  - "cloud-vinahost"
coverImage: "tao-vm-instance-tren-vcloud-vinahost-0.png"
---

Bài viết này sẽ hướng dẫn bạn **Tạo VM Instance Trên vCloud VinaHost**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext.3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat [https://livechat.vinahost.vn/chat.php](https://livechat.vinahost.vn/chat.php).

## Hướng Dẫn Tạo VM Instance Trên vCloud VinaHost

<iframe title="YouTube video player" src="https://www.youtube.com/embed/Zto_qmrP_xo" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**\>>> [Nên chọn Email Hosting hay Email Server?](https://blog.vinahost.vn/su-khac-nhau-giua-email-hosting-va-email-server/)** **1\.** **Sau khi login vào hệ thông chọn VM Instance sau đó chọn Create VM Instance**

![](images/tao-vm-instance-tren-vcloud-vinahost-1.png)

**2\.** **Tiếp theo cần điền đầy đủ thông tin như sau:**

![](images/tao-vm-instance-tren-vcloud-vinahost-2.png)

**3\.** **Tiếp theo cần chọn các cấu hình VM và OS Image cho VM**

![](images/tao-vm-instance-tren-vcloud-vinahost-3.png)

_Ở đây có sẵn một số cấu hình và Image như sau:_

![](images/tao-vm-instance-tren-vcloud-vinahost-4.png)

![](images/tao-vm-instance-tren-vcloud-vinahost-5.png)

**4\.** **Sau khi đã chọn xong cấu hình như thì chọn vào ô Next**

![](images/tao-vm-instance-tren-vcloud-vinahost-6.png)

**5\. Tiếp theo cần cần cấu hình một số thông số về net work và vDrive**

_Ở đây sẽ có thể chọn 1 trong 3 loại như sau_

- _VPC network (Virtual Private Cloud)_
- _Public Network_
- _Flat Network_

![](images/tao-vm-instance-tren-vcloud-vinahost-7.png)

_Ở đây chọn VPC và sử dụng VPC-Vinahost_

![](images/tao-vm-instance-tren-vcloud-vinahost-8.png)

**6\.** **Sau khi chọn network thì có thể chọn ô Assign IP để có thể tự đặt IP tính cho VM sau đó nhấn Next**

![](images/tao-vm-instance-tren-vcloud-vinahost-9.png)

**7\.** **Tại đây sẽ tiến hành đặt password để có thể SSH/Remote vào VPS**

_Ở đây do đang sử dụng VM với OS là CentOS nên sẽ là chọn xác thực thông qua SSH public key và Password._

![](images/tao-vm-instance-tren-vcloud-vinahost-10.png)

_Nếu cài đặt VM với OS là windown thì sẽ được đặt pass cho Administrator._

![](images/tao-vm-instance-tren-vcloud-vinahost-11.png)

**8\.** **Sau khi đã điền đầy đủ password thì có thể tiếp tục click vào Next để xem lại cấu hình**

![](images/tao-vm-instance-tren-vcloud-vinahost-12.png)

**9\.** **Nhấn OK để có tiến hành cài đặt**

![](images/tao-vm-instance-tren-vcloud-vinahost-13.png)

**10\.** **Sau khi cài đặt hoàn tất thì thông tin của VM sẽ hiện ra**

![](images/tao-vm-instance-tren-vcloud-vinahost-14.png)

**11\.** **Tiến hành kiểm tra cấu hình của VM**

Trên màn hình thông tin của VPS click vào Launch Console để kiểm tra VM.

Sau khi truy cập thì sẽ được yêu cầu nhập pass, hãy nhập password đã đặt cho VNC ở bước trước.

![](images/tao-vm-instance-tren-vcloud-vinahost-15.png)

- Đối với VM windown

Để kiểm tra mạng IP có thể vào CMD và gõ các lệnh sau:

- Ipconfig để xem IP
- Ping 8.8.8.8 và ping google.com để check tình trạng kết nối internet

![](images/tao-vm-instance-tren-vcloud-vinahost-16.png)

Bật Task manager lên để kiểm tra RAM và CPU:

![](images/tao-vm-instance-tren-vcloud-vinahost-17.png)

Check bộ nhớ của VM:

![](images/tao-vm-instance-tren-vcloud-vinahost-18.png)

- Đối với VM Linux

Sau khi đã nhập pass VNC sau đó có thể đăng nhập thông qua pass root đã đặt

![](images/tao-vm-instance-tren-vcloud-vinahost-19.png)

- Kiểm tra ổ cứng bằng lệnh df –ha

![](images/tao-vm-instance-tren-vcloud-vinahost-20.png)

- Kiểm tra RAM bằng lệnh free –m

![](images/tao-vm-instance-tren-vcloud-vinahost-21.png)

- Kiểm tra cấu hình OS core bằng lscpu

![vCloud](images/tao-vm-instance-tren-vcloud-vinahost-22.png)

Chúc bạn Tạo VM Instance Trên vCloud VinaHost thành công!

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
