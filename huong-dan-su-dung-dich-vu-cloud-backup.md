---
title: "Hướng dẫn sử dụng dịch vụ Cloud Backup tại VinaHost"
date: "2023-01-30"
categories: 
  - "cloud-vinahost"
coverImage: "cloud-server-1.jpg"
---

Bài viết này sẽ hướng dẫn bạn cách **sử dụng dịch vụ Cloud Backup tại VinaHost**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext.3, email về support@vinahost.vn hoặc chat với VinaHost qua livechat https://livechat.vinahost.vn/chat.php**.

Quý khách có thể tham khảo thêm hướng dẫn sử dụng Cloud Backup **[tại đây](https://uploadwhmcs.vinahost.vn/storage/440/20230116-134425-Huong-dan-su-dung-Cloudbackup-Vinahost.pdf)**.

## I. Hướng dẫn sử dụng dịch vụ Cloud Backup tại VinaHost

Giới thiệu Cloud Backup VinaHost

**_Cloud Backup_** _là dịch vụ **sao lưu và khôi phục dữ liệu** trên nền tảng **Cloud**, bảo vệ hơn **20+ nền tảng** với công nghệ bảo mật **chống Ransomware bằng AI**, đảm bảo **an toàn dữ liệu tuyệt đối** với bất kỳ hệ thống, môi trường nào. Sử dụng dịch vụ Cloud Backup giúp khách hàng tránh khỏi rủi ro về dữ liệu, tiết kiệm chi phí và hạn chế tối đa nguy cơ tổn thất do downtime._

- Cơ chế sao lưu – khôi phục **tức thì**.
- Chủ động ngăn chặn tấn công **Ransomware** nhờ **AI**.
- Quản lý tập trung mọi dạng dữ liệu với kiến trúc **Hybrid Cloud**.
- Tương thích hơn **20** nền tảng vật lý, ảo hóa, đám mây, di động.
- Bảo vệ toàn diện cho **MS Office 365, G-Suite**.
- Giao diện **web-based** trực quan và **Dashboards** tùy chỉnh.

## II. Chi phí và giá cả

Hiện tại VinaHost đang cung cấp các gói như sau:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-1.png)

Với Agent là số lượng máy chủ tối đa được sử dụng backup, ví dụ Agent: 1 thì chỉ có một máy chủ được sử dụng backup trong cùng một thời điểm.

## III. Hướng dẫn sử dụng Cloud Backup

Vì dịch vụ cloud backup hỗ trợ lên tới 20 nền tảng khác nhau nên Vinahost sẽ chỉ hướng dẫn backup máy chủ Windows và Linux của mình bằng Cloud Backup.

### **1\. Hướng dẫn tạo Agent CloudBackup Linux**

Để cài đặt được Acronis Backup modules vào Linux kernel, máy chủ Linux của bạn cần những packages sau đây:

- The GNU Compiler Collection (GCC) compiler system.
- The Make tool.
- The Perl interpreter.
- The libelf-dev, libelf-devel, or elfutils-libelf

Làm thế nào để biết máy chủ Linux của mình đã cài đặt chưa?

Bước 1: Chạy lệnh này để kiểm tra kernel version: **_cat /proc/version_**

Bước 2: Tiếp tục chạy lệnh sau để kiểm tra make và gcc compiler đã cài đặt hay chưa: **_make -v_** **_gcc –v_** Sau đó so sánh phiên bản sau khi nhập lệnh “**gcc -v**” với “**cat /etc/proc/version**” có bằng nhau hay chưa, nếu chưa trùng thì các bạn cập nhật lên cho trùng nhé.

![](images/huong-dan-su-dung-dich-vu-cloud-backup-2.png)

Bước 3: Kiểm tra các gói cài đặt phù hợp cho building kernel đã được cài đặt hay chưa: Ở Red Hat Enterprise Linux, CentOS, và Fedora, chạy lệnh sau: **_yum list installed | grep kernel-devel_**

Ở Ubuntu, chạy lệnh sau: **_dpkg –get-selections | grep linux-headers_ _dpkg –get-selections | grep linux-image_**

Bảng dưới đây là cách cài đặt các gói cần thiết nếu như máy chủ của ta chưa cài đặt cho cloudbackup dựa theo Linux distribution của mình đang dùng:

<table width="100%"><tbody><tr><td width="15%"><strong>Linux distribution</strong></td><td width="14%"><strong>Package names</strong></td><td width="70%"><strong>How to install</strong></td></tr><tr><td width="15%">Red Hat Enterprise Linux</td><td width="14%"><strong>kernel-devel gcc make</strong></td><td width="70%">The setup program will download and install the packages automatically</td></tr><tr><td width="15%">CentOS</td><td width="14%"><strong>kernel-devel gcc make</strong></td><td width="70%">The setup program will download and install the packages automatically.</td></tr><tr><td width="15%">Fedora</td><td width="14%"><strong>kernel-devel gcc make</strong></td><td width="70%"><em>yum install kernel-</em>&nbsp;<em>devel-`</em>&nbsp;<em>uname&nbsp;-r` yum install gcc-4.5.1 yum install make</em></td></tr><tr><td width="15%">Ubuntu</td><td width="14%"><strong>linux</strong>&nbsp;<strong>-headers</strong> <strong>linux</strong>&nbsp;<strong>-image</strong> <strong>gcc</strong> <strong>make</strong></td><td width="70%"><em>sudo</em>&nbsp;<em>apt-get update</em> <em>sudo</em>&nbsp;<em>apt-get&nbsp;installlinux</em>&nbsp;<em>-headers-`uname</em>&nbsp;<em>-r`</em> <em>sudo</em>&nbsp;<em>apt-get&nbsp;installlinux</em>&nbsp;<em>-image-`uname</em>&nbsp;<em>-r`</em> <em>sudo</em>&nbsp;<em>apt-get install gcc-4.6</em> <em>sudo</em>&nbsp;<em>apt-get install make</em></td></tr></tbody></table>

Bước 4: Cài đặt gói RPM để chạy file .bin cho CloudBackup:

- **s_udo yum install rpm_(Red Hat based distributions)**
- **_sudo apt-get install rpm_****(Debian based distributions)**
- **_sudo zypper install rpm_****(Suse based distributions)**
- **_sudo yast install rpm_****(Suse based distributions****)**

**Sau khi đã kiểm tra xong chúng ta tới bước tiếp theo là làm cho trang cloudbackup của quý khách nhận diện được máy chủ của mình**

Bước 5: Tiến hành đăng nhập vào trang web CloudBackup:

Hiện tại trang web sử dụng CloudBackup sẽ là: [**https://cloudbackup.vinahost.vn/ui/**](https://cloudbackup.vinahost.vn/ui/) với tài khoản mật khẩu mình sẽ được cấp qua mail sau khi đã thanh toán chi phí dịch vụ.

![](images/huong-dan-su-dung-dich-vu-cloud-backup-3.png)

Bước 6: Khi ta đăng nhập thành công sẽ có giao diện như sau và chọn vào mục “Devices”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-4.png)

Bước 7: Chọn **“Add”:**

![](images/huong-dan-su-dung-dich-vu-cloud-backup-5.png)

Bước 8: Chọn “**Linux**”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-6.png)

Bước 9: Sau khi tiến hành tải file có đuôi .bin xong, chúng ta dung FTP để kết nối đến máy chủ Linux của chúng ta và **_thư mục đặt file .bin do quý khách tự chọn_**:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-7.png)

Bước 10: Kết nối vào máy chủ Linux của bạn và nhập những lệnh sau cho thư mục .bin của mình, ở đây Vinahost để file ở /root/:

_**chmod 755 /duong/dan/den/file/cua/ban/filecuaban.bin**_ **_( làm cho file được thực thi)_**

_**/duong/dan/den/file/cua/ban/filecuaban.bin (Vd: /root/filecuaban.bin)**_

Bước 11: Tích chọn “**Agent for Linux**” và bấm “**Next**”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-8.png)

Bước 12: Chúng ta tiếp tục làm theo hướng dẫn hiện trên màn hình và cuối cùng ta sẽ được kết quả như hình này và chọn “**Show register info**”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-9.png)

Bước 13: Khi chọn vào “Show registration info” ta sẽ được một **mã đăng ký** như sau:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-10.png)

Bước 14: Truy cập lại trang cloudbackup của mình và bấm “**Add**”, tìm dòng “**Registration via Code**” và nhấn “**Register**”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-11-1536x730-1.png)

Bước 15: Nhập mã ta có ở bước 13 vào và bấm “**Check code**” và đợi quá trình cài đặt diễn ra:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-12-1536x732-1.png)

Bước 16: Khi cài đặt thành công ta sẽ có một máy chủ của mình như hình:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-13-1536x720-1.png)

_Như vậy là thành công!_

### **2\. Hướng dẫn tạo Agent CloudBackup Windows**

Ở phần Windows ta sẽ thấy có hai dạng một là “Workstation” hai là “Server”, nếu bạn chưa rõ nên chọn mục nào giữa hai mục này thì bạn vui long truy cập vào đây: [https://www.diffen.com/difference/Server\_vs\_Workstation](https://www.diffen.com/difference/Server_vs_Workstation) để tìm kiếm sự khác biệt nhé!

Về cách cài đặt giữa Server và Workstation căn bản sẽ không có nhiều khác biệt, sau đây chúng ta sẽ tiến hành cài đặt trên Windows!

![](images/huong-dan-su-dung-dich-vu-cloud-backup-14.png)

Bước 1: Sau khi chọn vào “Windows” ta sẽ tải về một file có đuôi .exe:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-15.png)

Bước 2: Để hạn chế tối đa lỗi, bạn vui long chạy file đó bằng quyền Administrator của mình:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-16.png)

Bước 3: Chọn “Install” và đợi quá trình cài đặt diễn ra:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-17.png)

Bước 4: Khi cài đặt xong ta chọn mục “Show registration info”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-18.png)

Bước 5: Copy đoạn mã theo hình:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-19.png)

Bước 6: Tiến hành add vào trang cloudbackup vinahost:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-20.png)

![](images/huong-dan-su-dung-dich-vu-cloud-backup-21-1536x728-1.png)

Bước 7: Sau đó ta sẽ thấy xuất hiện thêm một máy như hình:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-22-1536x726-1.png)

### **3\. Hướng dẫn tạo Backup plan sao lưu dữ liệu cho máy chủ của mình**

Sau khi hoàn tất thêm máy chủ của mình vào trang cloudbackup, chúng ta tiếp tục tiến hành tạo các backup plan cho máy của mình. Về cơ bản thì việc tạo các plans giữa Windows và Linux sẽ hoàn toàn giống hệt nhau.

Cloud Backup Vinahost sẽ chia backup làm hai dạng

- Backup toàn bộ máy của mình.
- Backup theo từng file, từng thư mục,…
- Backup theo disk/volumes.

#### **3.1. Hướng dẫn backup toàn bộ máy của mình**

- Để backup toàn bộ máy, bạn chọn một hoặc nhiều máy cần backup, ở ví dụ của mình sẽ là “LAPTOP-MUES5NPD”.
- Chọn “Create plan”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-23.png)

- Ta sẽ hiện một bảng như sau:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-24.png)

- Mục “What to backup” chọn Entire machine
- Mục “Application backup”: Cho phép khôi phục dữ liệu một số dịch vụ thường dùng mà không cần khôi phục cả ổ đĩa.

Những mục còn lại thì trang cloudbackup đã thể hiện khá rõ ý nên mình sẽ bỏ qua mục giải thích. Sau khi cấu hình thông số ta chọn “Create”

- Tiến hành thêm plan vừa tạo vào máy mình chọn như sau:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-25-1536x860-1.png)

![](images/huong-dan-su-dung-dich-vu-cloud-backup-26.png)

#### **3.2. Hướng dẫn backup theo files hoặc thư mục**:

Với cách này thì không khác gì cách mình backup toàn bộ máy của mình như cách trên, điểm khác biệt duy nhất đó là ở mục “What to backup” ta chọn “Files/Folder”. Các bạn làm theo mũi tên nhé.

![](images/huong-dan-su-dung-dich-vu-cloud-backup-27.png)

![](images/huong-dan-su-dung-dich-vu-cloud-backup-28.png)

Ở đây ví dụ mình sẽ backup thư mục Exe với các file trong đó.

![](images/huong-dan-su-dung-dich-vu-cloud-backup-29.png)

Ta tích vào ô kế bên thư mục sau đó bấm Done ở cuối góc phải:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-30.png)

**Cách thêm plan cũng tương tự như cách trên mình đã có nói rồi, mình sẽ hướng dẫn cách backup còn lại.**

## **IV. Hướng dẫn khôi phục dữ liệu**

Sau khi ta đã tạo ra các bản backup cho riêng mình thì tiếp theo ta sẽ khôi phục lại dữ liệu cho máy chủ của mình!

### **1\. Hướng dẫn khôi phục toàn bộ máy của mình**

Để làm được bước này, bảo đảm trên tài khoản cloudbackup của mình đã có bản backup từ trước!

 **Thay vì chọn “Protect” ta sẽ chọn mục “Recovery”:**

![](images/huong-dan-su-dung-dich-vu-cloud-backup-31-1536x748-1.png)

Ta sẽ thấy có các bản backup đã tạo từ trước, ta chú ý mục “Backup plan” là tên bản backup của mình đã đặt từ trước mà chọn cho đúng để khôi phục lại dữ liệu của mình:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-32.png)

Sau đó ta bấm “RECOVER” chọn “Entire machine”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-33.png)

Sau đó ta đợi một lát trang web tải một số mục cần thiết và chọn “START RECOVERY”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-34.png)

### **2\. Hướng dẫn khôi phục theo files/ folders**

Các bước làm cũng tương tự như ở trên, ở đây mình có tạo một plan “Files/ Folder” cho nên mình sẽ chọn plan này hoặc các bạn có thể khôi phục files folders của mình từ plan backup toàn bộ máy của mình:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-35.png)

Sau đó ta chọn các thư mục hoặc các tệp tin cần khôi phục, ở mình sẽ chọn tất cả các tệp tin cũng như folder mình đã chỉ định backup từ trước và chọn “Recover”:

![](images/huong-dan-su-dung-dich-vu-cloud-backup-36.png)

**Sau đó chúng ta đợi hệ thống khôi phục lại cho minh là xong!**

### **3\. Một số lưu ý**

Khi backup toàn bộ máy của mình các bạn chú ý đến dung lượng của gói dịch vụ của mình nhé vì dung lượng sẽ khá là cao!

Khi backup/ restore trên Windows các bạn để ý phần mềm “Cyber Protect” đã được bật.

Đảm bảo đã whitelist “Cyber Protect” trên Windows ở các phần mềm diệt virus để tránh không cài đặt được.

Chúc bạn thành công!

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
