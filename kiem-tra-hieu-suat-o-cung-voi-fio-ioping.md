# Kiểm tra hiệu suất ổ cứng với Fio và IOPing

Ngay khi nhận được **server** mới, công việc đầu tiên chúng ta cần làm ngay đó là kiểm tra lại các thông số phần cứng, **network** coi có đúng như những gì nhà cung cấp đưa ra hay không.

Trong bài viết này, mình sẽ đi sâu hơn về việc kiểm tra tốc độ đọc ghi của ổ cứng. Đây là trong số các yếu tố vô cùng quan trọng ảnh hưởng đến toàn bộ hiệu suất hoạt động của hệ thống.

Hiện trên thị trường có 2 loại ổ cứng là **HDD** truyền thống và **SSD**. **SSD** thì cho tốc độ đọc ghi nhanh hơn rất nhiều so với ổ **HDD**. Tuy nhiên, không phải cứ **server** dùng **HDD** thì cho hiệu năng hoạt động kém, cũng như ổ **SSD** thì tốt hơn.

Thông thường, chúng ta thực hiện việc **test** thông qua lệnh `dd`, ghi một **file** dữ liệu xuống ổ cứng. Lệnh này rất phổ biến vì được cài đặt mặc định trên hầu hết các phiên bản **OS** của **Linux** và hiển thị thông tin trực quan, dễ hiểu.

    dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync

Tuy vậy, cách kiểm tra này thực sự chưa hiệu quả và có nhiều vấn đề:

- Câu lệnh thực hiện hoạt động đơn nhiệm và việc ghi tuần tự. Nếu bạn vận hành **web** và **database server** trên **VPS** hoặc **dedicated server** thì con số này là vô nghĩa bởi phần lớn các ứng dụng không thực hiện việc ghi tuần tự mà đọc ghi ngẫu nhiên liên tục.

- Việc ghi dữ liệu xuống hệ thống có thể bị ảnh hưởng bởi việc lưu cache trên **server**. Một số nhà cung cấp còn tối ưu được kết quả trả về.

- Câu lệnh thực hiện việc đo lường trong một khoảng thời gian rất ngắn (vài giây). Khoảng thời gian **test** này không đủ để đi đến một kết luận nhất quán.

- Câu lệnh này chỉ kiểm tra tốc độ ghi của ổ cứng, chưa kiểm tra tốc độ đọc trong khi phần lớn các **website** số lượng đọc (truy cập, đọc tin tức) sẽ nhiều hơn ghi (viết, chỉnh sửa tin tức).

Như vậy, để kiểm tra hiệu suất ổ cứng của **server** lệnh `dd` không phải là câu lệnh tốt nhất và bao quát được tất cả các thông tin.

Do vậy, trong bài viết này, mình sẽ giới thiệu phương pháp kiểm tra hiệu suất ổ cứng chính xác hơn qua thông số **IOPS** và **Latency** bằng công cụ `Fio` và `IOPing`.

- Bao nhiêu thao tác có thể thực hiện trong cùng một thời gian: **IOPS (Input/Output Operations per Second)** thể hiện tốc độ *đọc/ghi* trên ổ cứng trong một giây. **IOPS** càng cao thì càng nhiều thao tác có thể thực hiện đồng thời một lúc, tốc độ xử lý càng nhanh.

- Bao lâu để bắt đầu thực hiện một **data transfer**: **Latency** (đơn vị ms) là độ trễ, khoảng thời gian ổ cứng bắt đầu thực hiện một **data transfer**. Thông số này càng thấp thì càng tốt.

## Đo lường IOPS với Fio

**FIO** là công cụ đo lường **IOPS** phổ biến hiện nay trên hệ thống **Linux**. Để cài đặt trên **CentOS** hoặc **Ubuntu**, bạn hãy chạy lệnh bên dưới:

    # yum install -y epel-release && yum install -y fio || ( apt-get update && apt-get install -y fio )

Quá trình test **IOPS** trên **server** sẽ kiểm tra với các thông số cụ thể sau:

- Tác vụ ngẫu nhiên: Random write, random read và kết hợp cả hai. Ví dụ, đối với database, khi truy cập hệ thống sẽ đọc dữ liệu từ mọi nơi thuộc ổ cứng, được hiểu là truy cập ngẫu nhiên(random read).

- Block size 4KB là con số lý tưởng nhất đồng thời là blocksize thấp nhất của hệ thống. Cụ thể, đối với các hệ thống database, source code hay phần lớn các hệ thống khác, lượng dữ liệu truy xuất là rất nhỏ nhưng số lần yêu cầu truy xuất lại rất nhiều. Để có thể hình dung, mỗi lần user đọc 1 bài viết trên website của bạn là 1 lần truy xuất (read) database với 1 lượng dữ liệu rất nhỏ, tuy vậy số lần đọc (gọi) dữ liệu lại là rất nhiều.

- Đa nhiệm: Nếu website của bạn có lượng truy cập cao thì có thể sẽ phải phục vụ tất cả cùng một lúc. Chúng ta sẽ đo lường bằng cách mô phỏng nhiều truy cập vào ổ đĩa cùng lúc.

###  Kiểm tra đồng thời random read & random write

Nếu đơn giản bạn chỉ muốn so sánh hiệu suất đĩa giữa các nhà cung cấp thì nên sử dụng case test sau:

Tạo 1 file 4GB, thực hiện việc đọc/ghi đồng thời với **blocksize 4KB** theo tỉ lệ `75% – 25%` (tức 3 đọc/1 ghi) và thực hiện đồng thời 64 tác vụ một lúc. Tỉ lệ `3:1` rất phổ biến và xấp xỉ với các dạng **database** hiện nay.

    fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=vinahost --filename=vinahostrandom --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75

Đây là kết quả sau khi hệ thống chạy hoàn tất:

    vinahost: (g=0): rw=randrw, bs=4K-4K/4K-4K/4K-4K, ioengine=libaio, iodepth=64
    fio-2.0.13
    Starting 1 process
    Jobs: 1 (f=1): [m] [100.0% done] [126.3M/42981K/0K /s] [32.4K/10.8K/0  iops] [eta 00m:00s]
    vinahost: (groupid=0, jobs=1): err= 0: pid=1372: Mon May 29 04:00:15 2017
    read : io=3072.9MB, bw=124228KB/s, iops=31057 , runt= 25329msec
    write: io=1023.2MB, bw=41365KB/s, iops=10341 , runt= 25329msec
    cpu          : usr=10.10%, sys=39.53%, ctx=32710, majf=0, minf=20
    IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=0.1%, >=64=100.0%
        submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
        complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.1%, >=64=0.0%
        issued    : total=r=786643/w=261933/d=0, short=r=0/w=0/d=0

    Run status group 0 (all jobs):
    READ: io=3072.9MB, aggrb=124228KB/s, minb=124228KB/s, maxb=124228KB/s, mint=25329msec, maxt=25329msec
    WRITE: io=1023.2MB, aggrb=41364KB/s, minb=41364KB/s, maxb=41364KB/s, mint=25329msec, maxt=25329msec

    Disk stats (read/write):
    vda: ios=780554/260043, merge=0/3, ticks=1065572/252824, in_queue=1317905, util=99.50%

Có thể thấy, **server test** có thể thực hiện đồng thời `31,057` tác vụ đọc và `10,341` tác vụ ghi mỗi giây.

Thông thường, trong tình trạng tải nhẹ, **server** sử dụng ổ cứng **SSD** có thể đạt `40,000` đọc và `10,000` ghi còn sử dụng **non-SSD** đạt `500` đọc và `200` ghi.

### Kiểm tra random read

    fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=vinahost --filename=vinahostread --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75

Đây là kết quả sau khi hệ thống chạy hoàn tất:

    vinahost: (g=0): rw=randread, bs=4K-4K/4K-4K/4K-4K, ioengine=libaio, iodepth=64
    fio-2.0.13
    Starting 1 process
    Jobs: 1 (f=1): [r] [100.0% done] [206.6M/0K/0K /s] [52.9K/0 /0  iops] [eta 00m:00s]
    vinahost: (groupid=0, jobs=1): err= 0: pid=1389: Mon May 29 04:02:56 2017
    read : io=4096.0MB, bw=184543KB/s, iops=46135 , runt= 22728msec
    cpu          : usr=9.20%, sys=41.14%, ctx=38468, majf=0, minf=84
    IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=0.1%, >=64=100.0%
        submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
        complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.1%, >=64=0.0%
        issued    : total=r=1048576/w=0/d=0, short=r=0/w=0/d=0

    Run status group 0 (all jobs):
    READ: io=4096.0MB, aggrb=184543KB/s, minb=184543KB/s, maxb=184543KB/s, mint=22728msec, maxt=22728msec

    Disk stats (read/write):
    vda: ios=1045872/17, merge=0/1, ticks=1223667/31, in_queue=1223244, util=99.54%

Có thể thấy, **server test** có thể thực hiện `46,135` lần đọc trong 1 giây. Thông thường, ổ cứng **SSD** có thể thực hiện `50,000` lần đọc trong 1 giây trong khi ổ cứng **non-SSD** là xấp xỉ `2000`.

### Kiểm tra random write

    fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=vinahost --filename=vinahostwrite

Đây là kết quả sau khi hệ thống chạy hoàn tất:

    vinahost: (g=0): rw=randwrite, bs=4K-4K/4K-4K/4K-4K, ioengine=libaio, iodepth=64
    fio-2.0.13
    Starting 1 process
    Jobs: 1 (f=1): [w] [100.0% done] [0K/172.9M/0K /s] [0 /44.3K/0  iops] [eta 00m:00s]
    vinahost: (groupid=0, jobs=1): err= 0: pid=1392: Mon May 29 04:10:04 2017
    write: io=4096.0MB, bw=160431KB/s, iops=40107 , runt= 26144msec
    cpu          : usr=9.95%, sys=42.59%, ctx=40104, majf=0, minf=20
    IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=0.1%, >=64=100.0%
        submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
        complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.1%, >=64=0.0%
        issued    : total=r=0/w=1048576/d=0, short=r=0/w=0/d=0

    Run status group 0 (all jobs):
    WRITE: io=4096.0MB, aggrb=160430KB/s, minb=160430KB/s, maxb=160430KB/s, mint=26144msec, maxt=26144msec

    Disk stats (read/write):
    vda: ios=0/1037912, merge=0/1, ticks=0/1422525, in_queue=1422105, util=99.45%

Có thể thấy, **server test** có thể thực hiện `40,107` lần ghi trong 1 giây. Thông thường, ổ cứng **SSD** có thể thực hiện `50,000` lần ghi trong 1 giây trong khi ổ cứng **non-SSD** là xấp xỉ `2000`.

## Đo lường độ trễ Latency với IOPing

Cuối cùng, chúng ta tiến hành kiểm tra hiệu suất ổ cứng thông qua việc kiểm tra độ trễ **Latency** của từng **request** độc lập bằng công cụ `IOPing`. Cài đặt:

    yum install -y epel-release && yum install -y ioping || ( apt-get update && apt-get install -y ioping )

Cài đặt xong, bạn kiểm tra độ trễ của từng **request** với lệnh sau (test 10 request):

    ioping -c 10 .

Kết quả:

    4 KiB <<< . (ext4 /dev/vda1): request=1 time=297.7 us (warmup)
    4 KiB <<< . (ext4 /dev/vda1): request=2 time=415.5 us
    4 KiB <<< . (ext4 /dev/vda1): request=3 time=545.6 us
    4 KiB <<< . (ext4 /dev/vda1): request=4 time=487.4 us
    4 KiB <<< . (ext4 /dev/vda1): request=5 time=503.8 us
    4 KiB <<< . (ext4 /dev/vda1): request=6 time=514.6 us
    4 KiB <<< . (ext4 /dev/vda1): request=7 time=523.8 us
    4 KiB <<< . (ext4 /dev/vda1): request=8 time=480.5 us
    4 KiB <<< . (ext4 /dev/vda1): request=9 time=622.4 us (slow)
    4 KiB <<< . (ext4 /dev/vda1): request=10 time=421.0 us (fast)

    --- . (ext4 /dev/vda1) ioping statistics ---
    9 requests completed in 4.51 ms, 36 KiB read, 1.99 k iops, 7.79 MiB/s
    generated 10 requests in 9.00 s, 40 KiB, 1 iops, 4.44 KiB/s
    min/avg/max/mdev = 415.5 us / 501.6 us/ 622.4 us / 59.4 us

Có thể thấy, **server test** có độ trễ trung bình `501.6 us = 0.5016 ms`. Đối với các hệ thống hoạt động ổn định, thông số dao động dưới `1.0 ms` là được.

Như vậy, với bài hướng dẫn này, hy vọng giúp các bạn có thêm công cụ để kiểm tra và đo lường hiệu suất ổ cứng **server** của mình.

Chúc quý khách thực hiện thành công!

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