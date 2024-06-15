# Hướng dẫn chuyển dữ liệu từ S3 Storage bất kỳ sang Alibaba Cloud S3 Storage tại Việt Nam (EOS) - Alibaba Cloud Community

Hướng dẫn chuyển dữ liệu từ S3 Storage bất kỳ sang Alibaba Cloud S3 Storage tại Việt Nam (EOS)
-----------------------------------------------------------------------------------------------------------

Hướng dẫn chuyển dữ liệu từ S3 Storage bất kỳ sang Alibaba Cloud S3 Storage tại Việt Nam (EOS)

_By Grace, Alibaba Cloud Solutions Architect of Vietnam_

Giới thiệu
----------

Việc di chuyển dữ liệu giữa các nền tảng lưu trữ khác nhau thường là một thách thức lớn, đòi hỏi phải có giải pháp đảm bảo an toàn, tính toàn vẹn của dữ liệu và tối ưu hóa chi phí. Alibaba Cloud cung cấp một công cụ mạnh mẽ mang tên OSSImport kết hợp với S3 Storage tại Việt Nam của Alibaba Cloud (gọi là EOS), đây là một giải pháp toàn diện giúp bạn xây dựng hệ thống lưu trữ tại Việt Nam một cách dễ dàng.

OSSImport là một công cụ được thiết kế đặc biệt để giúp bạn dễ dàng chuyển đổi và quản lý dữ liệu từ các nền tảng lưu trữ S3 khác sang Alibaba Cloud thông qua dòng lệnh (command line). Trong bài viết này, chúng tôi sẽ hướng dẫn bạn cách chuyển dữ liệu từ bất kỳ dịch vụ S3 Storage nào sang Alibaba Cloud S3 Storage tại Việt Nam một cách dễ dàng và hiệu quả.

Kịch bản bài blog này
---------------------

Trong bài lab này, chúng tôi có dữ liệu được đặt tại một storage S3 bên ngoài, sau đó thực hiện di chuyển dữ liệu đó sang S3 Storage của Alibaba Cloud đặt tại Việt Nam (EOS).  
![Picture1](https://yqintl.alicdn.com/23e26dfe60eda00f534f0be7d2080fa5e548e250.png "Picture1")

Hướng dẫn chuyển dữ liệu từ S3 Storage bất kỳ sang Alibaba Cloud S3 Storage tại Việt Nam
-----------------------------------------------------------------------------------------------------

Chuẩn bị: Một máy ảo (hoặc máy local) sử dụng hệ điều hành Linux, vì bạn sẽ thao tác nhiều với dòng lệnh.

Trong bài hướng dẫn này, chúng tôi sử dụng máy ảo ENS đặt tại Việt Nam của Alibaba Cloud để đảm bảo tốc độ truy cập đến storage S3 cùng ở tại Việt Nam là nhanh nhất. Hệ điều hành được sử dụng là CentOS.

Đầu tiên, sau khi tạo một máy ảo, chúng tôi kết nối vào máy ảo để sử dụng (bạn có thể kết nối bằng SSH hoặc trực tiếp trên console Alibaba Cloud).

Đầu tiên, chạy lệnh sau để tải Java.

```
$ sudo yum install java

```


Chạy lệnh sau để kiểm tra xem Java đã có trong máy hay chưa:

```
$ java -version

```


Mẫu kết quả:  
![Picture25](https://yqintl.alicdn.com/561df179b146c9997bfb01738cbb05c5e530629b.png "Picture25")

![Picture26](https://yqintl.alicdn.com/c57edbcada31ce465b87a8903b90bbf13eb6c3bd.png "Picture26")

Kế tiếp, chạy lệnh sau để tải công cụ ossimport từ Alibaba Cloud:

```
$ wget https://gosspublic.alicdn.com/ossimport/international/standalone/ossimport-2.3.7.zip

```


Sau khi hoàn tất, bạn có thể kiểm tra xem ossimport đã có trên máy chưa bằng lệnh

```
$ ls
```


![Picture27](https://yqintl.alicdn.com/b6203dd297d222cf76af9c465cd2de9c331c822a.png "Picture27")

File được tải về là file zip, chúng ta cần tải unzip để có thể giải nén từ Terminal.  
Chạy lệnh sau để tải unzip (nếu bạn đã có unzip, bạn có thể bỏ qua bước này).

```
$ sudo yum install unzip 

```


![Picture28](https://yqintl.alicdn.com/4ba0c30d682fce0c99e4b0a9eb8678fc339bbc6e.png "Picture28")

Sau đó, chạy lệnh sau để giải nén file ossimport.

```
$ unzip ossimport-2.3.7.zip

```


Cấu trúc file ossimport sau khi giải nén sẽ hiển thị như hình trên.  
Để cấu hình cho task di chuyển dữ liệu, di chuyển vào thư mục conf.  
Mở file local\_job.cfg, cấu hình các thông tin sau:  
Bạn có thể cấu hình theo như nhu cầu cá nhân, hoặc làm theo gợi ý của chúng tôi:

##### DataSourcesettings

**srcType**\=s3  
**srcAccessKey**\= (AccessKey của S3 nguồn)  
**srcSecretKey**\=(SecretKey của S3 nguồn)  
**srcDomain**\= (endpoint của S3, không bao gồm tên bucket)  
**srcBucket**\= (tên bucket)

##### Destinationsettings

**destAccessKey**\=(AccessKey của EOS)  
**destSecretKey**\=(SecretKey của EOS)  
**destDomain**\=[http://eos.aliyuncs.com](http://eos.aliyuncs.com/)  
**destBucket**\=(tên bucket EOS)

Max object count per task.  
**taskObjectCountLimit**\=10000 (số file tối đa cho 1 task)

Max file size (in bytes) limits per task. Default size is 1G.  
**taskObjectSizeLimit**\=100000000 (kích thước file tối đa cho 1 task, tính bằng bytes)

The file larger than this value uses multipart upload; otherwise, use simple upload. Set this value greater than 1 MB. Examples of valid values are 50m, 1024m, and 5g.  
**multipartUploadThreshold=50m** (kích thước lớn nhất của 1 file được upload 1 lần, nếu lớn hơn số này, file sẽ được upload thành nhiều phần).

The part size of multipart upload. This value must be greater than 100 KB. The default value is 50 MB. Examples of valid values are 500k, 50m, and 2g.  
**multipartUploadPartSize=1g** (size mỗi lần upload, trong trường hợp file bị điều hướng sang upload nhiều phần).

![Picture30](https://yqintl.alicdn.com/e48d9aac0f2e6f8d7aaf3bbb3ca37b9b3640516a.png "Picture30")  
_Mẫu file local\_job.cfg_

Giữ các phần còn lại ở giá trị mặc định. Sau khi hoàn tất, lưu file lại.

Sau khi khởi tạo task di chuyển dữ liệu, bạn có thể xem thông tin trong Terminal (nơi chạy các lệnh phía trên) hoặc xem tại bucket EOS, dữ liệu sẽ được di chuyển vào và các thông số về lượng dữ liệu, băng thông sẽ được cập nhật.

![Picture31](https://yqintl.alicdn.com/57e528e6860e30a96d0b9a291b85b38a2ad52ebf.png "Picture31")

![Picture32](https://yqintl.alicdn.com/0746c0f35e503b320219947b395dc4863c41c1d0.png "Picture32")

Chúc bạn thực hiện thành công!

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