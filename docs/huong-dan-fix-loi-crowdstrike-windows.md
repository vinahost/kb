# Giải pháp tạm thời cho vấn đề màn hình xanh ( BSOD ) sau khi cập nhật CrowdStrike trên ngày 19 tháng 7 năm 2024

## Mô tả vấn đề

Vào ngày 19 tháng 7 năm 2024, lúc 12:30 GMT, **Alibaba Cloud** đã phát hiện ra các phiên bản **ECS** chạy hệ thống **Windows** bị khởi động lại bất thường. Sau khi điều tra, vấn đề này do một bản cập nhật tự động của phần mềm - **Falcon Sensor**, thuộc sở hữu của công ty bảo mật bên thứ ba - **CrowdStrike**. Cho đến khi công ty phát hành một giải pháp chính thức, một giải pháp tạm thời để giảm thiểu sự cố hệ thống là đổi tên (**rename**) thư mục chứa phần mềm này.

**Lưu ý quan trọng**: vui lòng lưu ý rằng giải pháp tạm thời này có thể làm phần mềm bảo mật **CrowdStrike** không hoạt động, ảnh hưởng đến bảo mật của phiên bản và các tính năng phụ khác. Chúng tôi khuyến nghị bạn nên hoàn thành đánh giá rủi ro trước khi tiến hành.

**Bước 1:** Tại Instance **Windows** trên **Alibaba Cloud**, kết nối qua **vnc**. Trong màn hình sau, nhấn **F8** để vào **Start-up Setting**.
    
![Truy cập vào Recovery / Start-up Setting](https://yqintl.alicdn.com/9ba9837664a077eff3709d00ba6ac6968ea1a8ca.png)

**Bước 2:** Chọn **4) Enable Safe Mode**.

![Enable Safe Mode](https://yqintl.alicdn.com/83fc1a054d649ef1574abd357e6cec1a1ace3046.png)

**Bước 3:** **Login** với user có quyền **Administrator**

**Lưu ý** nếu hệ thống tự động đăng nhập với tài khoản không phải **Administrator**, vui lòng đăng xuất và quay lại màn hình đăng nhập, nhập **Administrator** và mật khẩu để đăng nhập.

![Đăng nhập với tài khoản Administrator](https://yqintl.alicdn.com/bed51bd922bf343a2d740aa64f25a3ee94c416e2.png)

**Bước 4:** Kiểm tra ổ đĩa hệ thống và đổi tên (**rename**) thư mục `Windows\system32\drivers\CrowdStrike` dưới ổ đĩa hệ thống thành ***CrowdStrike.bak*** ( thông thường là ổ đĩa C )

**Bước 5:** Khởi động lại hệ thống **Windows** và truy cập lại bình thường

## How to fix BSOD error after CrowdStrike Update?

Steps to get back into your **Windows PC or Server** after the **CrowdStrike Update**:

**Step 1:** **Boot Windows** into **Safe Mode** or the **Windows Recovery Environment**

**Step 2:** Navigate to the `C:\Windows\system32\drivers\CrowdStrike` directory
**Step 3**: Locate the file matching “**C-00000291*.sys**”, and **rename **or **delete** it.
**Step 4:** **Boot** the host **normally**.

## Cách khắc phục lỗi BSOD sau khi cập nhật CrowdStrike đối với hàng loạt máy tính sử dụng GPO

### 1\. Tạo một PowerShell Script để xóa driver gây lỗi BSOD

Bạn cần viết một script **PowerShell** có tên là `CrowdStrikeFix.ps1`. Script này sẽ tìm và xóa file driver **CrowdStrike** gây ra lỗi **BSOD (Blue Screen of Death)** và sau đó khôi phục lại cài đặt boot bình thường. Nội dung của script như sau:

```

# CrowdStrikeFix.ps1
# Script này xóa file driver CrowdStrike gây lỗi BSOD và khôi phục lại Safe Mode

$filePath = "C:\\Windows\\System32\\drivers\\C-00000291*.sys" # Đường dẫn tới file driver cần xóa
$files = Get-ChildItem -Path $filePath -ErrorAction SilentlyContinue # Lấy danh sách các file phù hợp

foreach ($file in $files) { # Lặp qua từng file tìm được
    try {
        Remove-Item -Path $file.FullName -Force # Thử xóa file
        Write-Output "Deleted: $($file.FullName)" # Ghi ra thông báo đã xóa thành công
    } catch {
        Write-Output "Failed to delete: $($file.FullName)" # Ghi ra thông báo nếu xóa thất bại
    }
}

# Khôi phục lại boot Safe Mode sau khi sửa lỗi
bcdedit /deletevalue {current} safeboot

```

### 2\. Tạo một Group Policy Object (GPO) để chạy script này trong Safe Mode

#### a. Tạo một GPO mới

1. Mở **Group Policy Management Console (GPMC)**.
2. Nhấp chuột phải vào O**rganizational Unit (OU)** phù hợp và chọn "**Create a GPO in this domain, and Link it here...**".
3. Đặt tên cho GPO, ví dụ như "**CrowdStrike Fix Safe Mode**".

#### b. Chỉnh sửa GPO

1. Nhấp chuột phải vào GPO mới và chọn "**Edit**".
2. Điều hướng đến **Computer Configuration -> Policies -> Windows Settings -> Scripts (Startup/Shutdown)**.
3. Nhấp đúp vào "**Startup**", sau đó nhấp vào "**Add**".
4. Trong trường Script Name, duyệt đến vị trí bạn đã lưu `CrowdStrikeFix.ps1` và chọn nó.
5. Nhấp "**OK**" để đóng tất cả các hộp thoại.

### 3\. Tạo một PowerShell Script khác để buộc máy tính boot vào Safe Mode

Bạn cần một script khác có tên là `ForceSafeMode.ps1` để buộc máy tính boot vào **Safe Mode**. Nội dung của script này như sau:

```
# ForceSafeMode.ps1
# Script này buộc máy tính boot vào Safe Mode

bcdedit /set {current} safeboot minimal
Restart-Computer
```

### 4\. Tạo một GPO để áp dụng script này

#### a. Tạo một GPO mới

1. Mở **Group Policy Management Console (GPMC)**.
2. Nhấp chuột phải vào **Organizational Unit (OU)** phù hợp và chọn "**Create a GPO in this domain, and Link it here...**".
3. Đặt tên cho GPO, ví dụ như "**Force Safe Mode**".

#### b. Chỉnh sửa GPO

1. Nhấp chuột phải vào GPO mới và chọn "**Edit**".
2. Điều hướng đến **Computer Configuration -> Policies -> Windows Settings -> Scripts (Startup/Shutdown)**.
3. Nhấp đúp vào "**Startup**", sau đó nhấp vào "**Add**".
4. Trong trường Script Name, duyệt đến vị trí bạn đã lưu `ForceSafeMode.ps1` và chọn nó.
5. Nhấp "**OK**" để đóng tất cả các hộp thoại.

### 5\. Áp dụng các GPO

1. Đảm bảo rằng GPO "**Force Safe Mode**" được áp dụng cho các máy tính bị ảnh hưởng trước tiên.
2. Khi máy tính boot vào **Safe Mode**, script `CrowdStrikeFix.ps1` sẽ được thực thi.
3. Sau khi vấn đề được khắc phục, script sẽ khôi phục lại cài đặt boot về chế độ bình thường.

**Quan trọng** Alibaba Cloud sẽ tiếp tục giám sát tiến độ của sự cố này, bạn cũng có thể cập nhật thông tin mới nhất qua trang web chính thức của CrowdStrike. Nếu bạn gặp bất kỳ vấn đề nào trong quá trình hoặc cần hỗ trợ thêm, bạn có thể liên hệ với chúng tôi bất cứ lúc nào bằng cách gửi [**Ticket tại Support and Services**](https://smartservice.console.aliyun.com/) trên hệ thống Alibaba Cloud

**Tham khảo**

- [关于7月19日Windows系统蓝屏问题的临时解决方案](https://cn.aliyun.com/noticelist/articleid/1074613632.html?from_alibabacloud=)

- [Temporary solution for the July 19th Windows blue screen problem](https://www.alibabacloud.com/help/en/ecs/temporary-solution-to-the-windows-blue-screen-error-that-occurred-on-july-19-2024/)

- [Automated Workaround in Safe Mode using Group Policy](https://gist.github.com/whichbuffer/7830c73711589dcf9e7a5217797ca617)
