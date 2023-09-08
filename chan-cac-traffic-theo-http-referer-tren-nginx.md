---
title: "Hướng Dẫn Chặn Các Traffic Theo Http Referer Trên Nginx"
date: "2023-02-10"
categories: 
  - "chu-de-khac"
coverImage: "chan-cac-traffic-theo-http-refer-tren-nginx-0.jpeg"
---

Bài viết này sẽ hướng dẫn bạn thực hiện **Chặn Các Traffic Theo Http Referer Trên Nginx**. Nếu bạn cần hỗ trợ, xin vui lòng liên hệ VinaHost qua **Hotline 1900 6046 ext.3**, email về [support@vinahost.vn](mailto:support@vinahost.vn) hoặc chat với VinaHost qua livechat [https://livechat.vinahost.vn/chat.php](https://livechat.vinahost.vn/chat.php).

## 1\. HTTP Referer

Http Referer là một trường trong HTTP Header. Nó cho phép request gửi đến server là đến từ website nào (Nghĩa là người dùng không nhập URL từ trình duyệt, mà gửi request khi nhấn vào link URL từ một trang web khác).

Ví dụ khi người dùng đang ở 1 website nào đó (someone.site) và trong trang đó có đường dẫn đến website của mình (mysite.site), khi người dùng nhấn vào đường link, 1 request sẽ được gửi đến webser của ta, với trường referer là someone.site.

Điều này tạo thuận lợi khi ta muốn thống kê lưu lượng traffic, ghi log, phân loại và nhiều mục đích khác,….

Tham khảo thêm về cách tấn công sử dụng Http Referer: http://mixedbit.org/referer.html

![Http Referer](image/../images/chan-cac-traffic-theo-http-refer-tren-nginx-1.jpeg)

## 2\. Một số lệnh trong Nginx

### 2.1. Map

Map là 1 context trong nginx, giúp giảm bớt sự phức tạp khi sử dụng if, gần giống với switch case trong các ngôn ngữ khác.

Cú pháp của map như sau: map $bien\_so\_sanh $bien\_ket\_qua

{

    Giá-trị-so-sánh-1   giá-trị-kết-quả-1;

…

}

Nghĩa là giá trị trong $bien\_so\_sanh khớp với giá trị nào trong danh sách các giá trị so sánh bên dưới thì $bien\_ket\_qua sẽ có giá trị tương ứng với giá-trị-kết-quả đó.

Điều này tương đương với viết nhiều dòng if kiểu:

If( $bien\_so\_sanh = Giá-trị-so-sánh-1) { set $bien\_ket\_qua  giá-trị-kết-quả-1;}

### 2.2. Deny, Allow

Chặn hoặc cho phép IP, dãy IP truy cập đến webserver.

Ví dụ:

<table><tbody><tr><td width="963"><pre>location / {
 &nbsp;&nbsp; deny&nbsp; 192.168.1.1;
 &nbsp;&nbsp; allow 192.168.1.0/24;
 &nbsp;&nbsp; allow 10.1.1.0/16;
 &nbsp;&nbsp; allow 2001:0db8::/32;
 &nbsp;&nbsp; deny&nbsp; all;
}</pre></td></tr></tbody></table>

### 2.3. valid\_referers

Được sử dụng trong server context hoặc location context. Nó chỉ ra những refer nào hợp lệ, nếu refer là hợp lệ, thì biến **$invalid\_referer** là chuỗi rỗng, ngược lại, nó là **1.**

valid\_referers none blocked server\_names  \*.example.com example.\* [www.example.org/galleries/](http://www.example.org/galleries/)  ~\\.google\\.;

trong đó **none** là những request không có trường refer, **blocked** là những request bị dectected bởi firewall hay proxy, còn lại là các server name (các site cụ thể) **ký tự \*** đại diện cho nhiều ký tự, **\*.example** là domain kết thúc bằng example, exam\* là domain có exam và kết thúc bằng bất kỳ chuỗi gì. **~ báo hiệu chuỗi sau nó là một regex** và cần so sánh trường refer với regex đó (lưu ý là chuỗi domain ban đầu sau http://).

### 2.4. http header request trong nginx

<table style="width: 100%;"><tbody><tr><td style="width: 29.5455%;" width="481">Biến</td><td style="width: 69.3939%;" width="482">Ý nghĩa</td></tr><tr><td style="width: 29.5455%;" width="481">$http_host</td><td style="width: 69.3939%;" width="482">Giá trị trong trường host trong http header request.</td></tr><tr><td style="width: 29.5455%;" width="481">$http_user_agent</td><td style="width: 69.3939%;" width="482">Giá trị trong trường user-agent trong http header request.</td></tr><tr><td style="width: 29.5455%;" width="481">$http_referer</td><td style="width: 69.3939%;" width="482">Giá trị trong trường referer trong http header request. Full đường dẫn, ví dụ từ trang https://danit.name.vn /testproxy bấm vào link dẫn đến <a href="https://danit.name.vn">https://danit.name.vn</a> thì biến có giá trị là: <a href="https://danit.name.vn/testproxy">https://danit.name.vn/testproxy</a>.</td></tr><tr><td style="width: 29.5455%;" width="481">$http_x_forwarded_for</td><td style="width: 69.3939%;" width="482">Giá trị trường X-Forwarded-For trong header, hiển thị IP thực sự của khách hàng nếu khách hàng đứng sau 1 proxy</td></tr><tr><td style="width: 29.5455%;" width="481">$http_cookie</td><td style="width: 69.3939%;" width="482">Giá trị của trường Cookie trong header, chứa dữ liệu lưu trong cookie được gửi bởi khách hàng.</td></tr></tbody></table>

3\. Regex trong Nginx

### 3.1.So sánh chuỗi trong location context

Trong location có các modifier hay các cách so sánh chuỗi như:

<table style="width: 100%;"><tbody><tr><td style="width: 9.84852%;" width="129">Loại</td><td style="width: 11.3637%;" width="196">Ký hiệu</td><td style="width: 20.3029%;" width="252">Ví dụ</td><td style="width: 56.8182%;" width="274">Match</td></tr><tr><td style="width: 9.84852%;" width="129">Prefix</td><td style="width: 11.3637%;" width="196">None</td><td style="width: 20.3029%;" width="252">/root</td><td style="width: 56.8182%;" width="274">Các mẫu bắt đầu bằng /root đều được chấp nhận, với nhiều case thì case nào khớp nhiều nhất sẽ được chọn</td></tr><tr><td style="width: 9.84852%;" width="129">Regex</td><td style="width: 11.3637%;" width="196">~</td><td style="width: 20.3029%;" width="252">~ \.(gif|jpg|jpeg)$</td><td style="width: 56.8182%;" width="274">Các chuỗi khớp với regex đã viết.</td></tr><tr><td style="width: 9.84852%;" width="129">Regex</td><td style="width: 11.3637%;" width="196">~*</td><td style="width: 20.3029%;" width="252">~* \.(gif|jpg|jpeg)$</td><td style="width: 56.8182%;" width="274">Các chuỗi khớp với regex đã viết. nhưng không phân biệt hoa thường</td></tr><tr><td style="width: 9.84852%;" width="129"></td><td style="width: 11.3637%;" width="196">^~</td><td style="width: 20.3029%;" width="252"></td><td style="width: 56.8182%;" width="274">Kiểm tra theo kiểu Prefix. Và việc xử lý iên quan đến thứ tự kiểm tra của nginx</td></tr></tbody></table>

Thứ tự so sánh và lựa chọn location: Nginx sẽ so chuỗi đầu vào (uri) nào khớp với prefix dài nhất, ví dụ có 2 location là **“/”** và **“/root”,** thì với **uri “/root/mysite”,** location **“/root”** sẽ được chọn do khớp nhiều hơn.

Nhưng chưa dừng lại, Nginx sẽ **tiếp tục tìm** kiếm các location **có  regex**, nó sẽ so sánh uri với các regex theo thứ tự **từ trên xuống dưới** trong khai báo của file config, khớp với cái nào đầu tiên nó sẽ chọn location đó.

Nếu không có nó sẽ quay lại, lấy **prefix dài nhất đã chọn ban đầu**.

Nhưng nếu ở location **“/root”** sử dụng **modifier ^~** thì nó sẽ chọn luôn location này mà không kiểm tra các location regex khác nữa.

### 3.2. Tổng quan Regex

Regex hay Regular Expression (biểu thức chính quy) các quy tắc để viết ra các mẫu (pattern) cho việc tìm kiếm và thay thế các chuỗi.

Ví dụ, ta có thể viết 1 regex về mẫu của địa chỉ IP (gồm 4 số cách nhau bởi dấu chấm, giá trị không quá 255). Và dùng mẫu này để kiểm tra chuỗi nhập vào có phải là IP hoặc tìm các địa chỉ IP trong file.

Các cú pháp và quy định của regex:

<table style="width: 100%;"><tbody><tr><td style="width: 12.1212%;" width="184">Ký hiệu</td><td style="width: 17.5758%;" width="199">Ví dụ</td><td style="width: 68.9394%;" width="581">Ý nghĩa</td></tr><tr><td style="width: 12.1212%;" width="184">^</td><td style="width: 17.5758%;" width="199">^The</td><td style="width: 68.9394%;" width="581">Các chuỗi nào bắt đầu bằng The thì match</td></tr><tr><td style="width: 12.1212%;" width="184">$</td><td style="width: 17.5758%;" width="199">End$</td><td style="width: 68.9394%;" width="581">Chuỗi có từ End ở cuối câu thì match.</td></tr><tr><td style="width: 12.1212%;" width="184">^ $</td><td style="width: 17.5758%;" width="199">^The End$</td><td style="width: 68.9394%;" width="581">Match với chuỗi “The End”</td></tr><tr><td style="width: 12.1212%;" width="184">Khới chuỗi</td><td style="width: 17.5758%;" width="199">/end/</td><td style="width: 68.9394%;" width="581">Khớp với từ end ở bất cứ vị trí nào.</td></tr><tr><td style="width: 12.1212%;" width="184">*</td><td style="width: 17.5758%;" width="199">abc*</td><td style="width: 68.9394%;" width="581">Chuỗi có từ ab, không có hoặc có 1 hay nhiều chữ c đằng sau thì match (ab,abc,abcc,…)</td></tr><tr><td style="width: 12.1212%;" width="184">+</td><td style="width: 17.5758%;" width="199">abc+</td><td style="width: 68.9394%;" width="581">Chuỗi có ab, và có từ 1 đến nhiều chữ c đằng sau (abc,abcc,…)</td></tr><tr><td style="width: 12.1212%;" width="184">{}</td><td style="width: 17.5758%;" width="199">abc{2}</td><td style="width: 68.9394%;" width="581">Chuỗi ab, có 2 chữ c đằng sau match: abcc</td></tr><tr><td style="width: 12.1212%;" width="184">{,}</td><td style="width: 17.5758%;" width="199">Abc{2,}</td><td style="width: 68.9394%;" width="581">Chuỗi ab có từ 2 chữ c đằng sau: abcc,abccc.</td></tr><tr><td style="width: 12.1212%;" width="184">()</td><td style="width: 17.5758%;" width="199">a(bc)*</td><td style="width: 68.9394%;" width="581">Chuỗi a, không có hoặc có 1 hay nhiều chuỗi bc đằng sau.</td></tr><tr><td style="width: 12.1212%;" width="184">?</td><td style="width: 17.5758%;" width="199">abc?</td><td style="width: 68.9394%;" width="581">Chuỗi ab có 1 hoặc không có ký tự c đằng sau.</td></tr><tr><td style="width: 12.1212%;" width="184">| []</td><td style="width: 17.5758%;" width="199">a(b|c) hay a[bc]</td><td style="width: 68.9394%;" width="581">Chuỗi a có thêm chữ b hoặc chữ c đằng sau (ab, ac,abc)</td></tr><tr><td style="width: 12.1212%;" width="184">\d</td><td style="width: 17.5758%;" width="199">\d</td><td style="width: 68.9394%;" width="581">Khớp với 1 ký tự số bất kỳ: 1</td></tr><tr><td style="width: 12.1212%;" width="184">\w</td><td style="width: 17.5758%;" width="199">\w</td><td style="width: 68.9394%;" width="581">Khớp với 1 ký tự chữ, số hoặc _</td></tr><tr><td style="width: 12.1212%;" width="184">\s</td><td style="width: 17.5758%;" width="199">\s</td><td style="width: 68.9394%;" width="581">Khớp với ký tự khoảng trắng (và tab)</td></tr><tr><td style="width: 12.1212%;" width="184">\D, \W, \S</td><td style="width: 17.5758%;" width="199"></td><td style="width: 68.9394%;" width="581">Phủ định của \d, \w, \s</td></tr><tr><td style="width: 12.1212%;" width="184">[^]</td><td style="width: 17.5758%;" width="199">[^a]</td><td style="width: 68.9394%;" width="581">Chuỗi không có ký tự a,</td></tr><tr><td style="width: 12.1212%;" width="184">.</td><td style="width: 17.5758%;" width="199"></td><td style="width: 68.9394%;" width="581">Đại diễn cho bất kỳ ký tự nào,</td></tr></tbody></table>

Cờ (flag) trong regex:

Có một số loại cờ trong regex là g (global – tìm tất cả các chuỗi khớp với mấu, nếu không có cờ này, regex chỉ tìm chuỗi đầu tiên khớp với mẫu), cờ m (multiline chỉ rằng ^ là bắt đầu dòng, và $ là kết thúc dòng, không thì ^ là đầu chuỗi, và $ là kết thúc chuỗi.), cờ I (insensitive chỉ việc không phân biệt hoa thường, nếu chuỗi ab khớp thì chuỗi Ab cũng khớp).

Ký hiệu chỉ phạm vi: \[<phạm vi>\], bên trong cặp \[\] là một phạm vi, mà ký tự nào khớp với 1 trong các giá trị của phạm vi thì match, ví dụ \[abc\], chuỗi nào có ký tự a, hoặc b, hoặc c thì match, cũng có thể viết \[a-c\]. Kiểm tra chuỗi có phải là chuỗi Hex: \[a-fA-F0-9\]\*.

### 3.3. Một số ví dụ Regex

<table><tbody><tr><td width="481">Ví dụ</td><td width="482">Giải thích</td></tr><tr><td width="481">/[0-9]+/</td><td width="482">Tìm chuỗi có 1 hoặc nhiều ký tự số (0-9) có dấu + phía sau, nếu không có các ký tự số lượng, chỉ kiểm tra 1 ký tự duy nhất.</td></tr><tr><td width="481">/^[0-9]+$/</td><td width="482">Tìm chuỗi toàn là số.</td></tr><tr><td width="481">/[a-z]+/</td><td width="482">Match các chuỗi thường.</td></tr><tr><td width="481">/^[a-z]+$/</td><td width="482">Match các chuỗi từ đầu đến cuối là chữ thường</td></tr><tr><td width="481">/^[^a-z]/</td><td width="482">Match các chuỗi không chứa chữ thường.</td></tr><tr><td width="481">/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/</td><td width="482">Kiểm tra chuỗi có phải là địa chỉ email không.</td></tr></tbody></table>

**Hướng dẫn về Kiểm tra chuỗi nhập vào có phải email hay không:**

\=> Bắt đầu bằng chữ, có 5 đến 32 ký tự (chữ cái số và dấu \_) trước @, hơn 2 ký tự sau @ và một vài nhóm ký tự cách nhau bởi dấu .

\-> Bắt đầu bằng chữ: ^\[a-z\]

\-> Có 5 – đến 32 ký tự trước @: ^\[a-z\]**\[a-z0-9\]\\\_\\.\]{5,32}**@

\-> Tên miền có thể có cấp 1 hoặc cấp 2 ( .com.vn hay .com) ^\[a-z\]\[a-z0-9\]\\\_\\.\]{5,32}@\[a-z0-9{2,}**(\\.\[a-z0-9\]{2,4}){1,2}$/**

## 4\. Chặn lưu lượng HTTP referer trong NGINX

### 4.1. Sử dụng valid\_referers

Có thể sử dụng valid\_referers trong location context để ngăn chặn lưu lượng HTTP referer như sau:

<table><tbody><tr><td width="963"><pre>location / {
<div></div>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; index index.php;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; valid_referers none blocked danit.name.vn;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if ($invalid_referer) {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return&nbsp;&nbsp; 403;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</pre>}</td></tr></tbody></table>

Đọc thêm về valid\_refers trong mục 2.c. Những gì liệt kê phía sau từ khóa valid\_referers sẽ làm cho giá trị biến $invalid\_referer là 0, giả http request gửi tới, trong header có trường referer là: [https://danit.name.vn/testproxy](https://danit.name.vn/testproxy) thì phần https:// bị bỏ đi, danit.name.vn/testproxy sẽ được lấy để so với các phần trong danh sách phía sau valid\_referes ở đây  danit.name.vn/testproxy khớp với danit.name.vn nên invalid\_referer là 0, không bị block, nếu là một tên miền khác, thì kết quả nhận đc là 403. Valid\_referers cũng có regex và ký tự đại diện \*.

### 4.2. Dùng map, http\_refer và redirect

Có thể sử dụng map, http\_refer và redirect để ngăn chặn lưu lượng HTTP referer như sau

<table><tbody><tr><td width="963"><pre>map $http_referer $block{
<div></div>
 &nbsp;&nbsp;&nbsp; default 0;
 &nbsp;&nbsp;&nbsp;&nbsp; '' 0;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://danit.name.vn/testproxy&nbsp; 1;
}</pre></td></tr></tbody></table>

Tạo **map context** ở http context, với **biến so sánh** là $http\_referer, biến này là biến hệ thống của nginx, chứa trường referer của http header (full đường dẫn bao gồm cả https://....). Và biến kết quả là biến block, block bằng 1 thì là block domain đó.

Ý tưởng là ta sẽ kiểm tra nếu $http\_referer nằm trong danh sách bị chặn, thì biến $block sẽ có giá trị là 1, khi đó trong server context hoặc location context ta đặt lệnh sau, sẽ chặn được lưu lượng Http Referer mong muốn:

<table><tbody><tr><td width="963"><pre>if ($block){ return 403;}</pre></td></tr></tbody></table>

Có thể tách danh sách blacklist thành file và include vào file config chính. Lưu ý trong file hoặc cấu hình map cần có default và ‘’ chỉ rằng header không có trường referer.

Tạo file blacklist như sau:

<table><tbody><tr><td width="963"><pre>default 0;
‘’ 0;
~testproxy$ 1;</pre></td></tr></tbody></table>

Sau đó trong phần cấu hình map đổi thành:

<table><tbody><tr><td width="963"><pre>map $http_referer $block{
 &nbsp;&nbsp; include blacklist;&nbsp;&nbsp;&nbsp;&nbsp;
}</pre></td></tr></tbody></table>

Lưu ý: reload lại nginx sau mỗi lần cập nhật

<table><tbody><tr><td width="963">default 0;<div></div>‘’ 0; # refer rỗng thì không block<div></div>~testproxy$ 1; # Regex match với referer có đuôi là testproxy sẽ bị block.<div></div>~[0-9]$ 1; # Regex match với referer có đuôi là số sẽ bị block.<div></div>~^[0-9]; #Regex match với refer bắt đầu bằng số.<div></div><a href="https://danit.name.vn/testproxy%201">https://danit.name.vn/testproxy 1</a>; refer giống với này sẽ bị block.</td></tr></tbody></table>

File cấu hình để ngăn chặn lưu lượng HTTP referer cuối cùng như sau:

<table><tbody><tr><td width="963"><pre>user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
events {
 &nbsp;&nbsp; worker_connections 1024;
}</pre><pre>http {
 &nbsp;&nbsp; include&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /etc/nginx/mime.types;
 &nbsp;&nbsp; default_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; application/octet-stream;
 &nbsp;&nbsp; map $http_referer $block{
 &nbsp;&nbsp;&nbsp;&nbsp; include referBlock.ls;
&nbsp;&nbsp;&nbsp; }</pre><pre>&nbsp;&nbsp;&nbsp; server {</pre><pre> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; server_name&nbsp; danit.name.vn wwww.danit.name.vn;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /usr/share/nginx/html;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; root /var/www/html/public_html;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #index index.php;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; error_page 404 /404.html;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; location = /404.html {</pre>}<pre> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error_page 500 502 503 504 /50x.html;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; location = /50x.html {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }
<div></div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; location ~ \.php$ {
<div></div>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;#root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; html;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #fastcgi_pass&nbsp;&nbsp; 127.0.0.1:9000;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #fastcgi_index&nbsp; index.php;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #fastcgi_param&nbsp; SCRIPT_FILENAME&nbsp; /scripts$fastcgi_script_name;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #include&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fastcgi_params;</pre><pre> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; try_files $uri =404;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fastcgi_pass unix:/run/php-fpm/www.sock;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fastcgi_index&nbsp;&nbsp; index.php;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; include fastcgi_params;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; include fastcgi.conf;
<div></div>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; location /testproxy {</pre><pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; proxy_pass http://localhost:8000;
<div></div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }
<div></div>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; location / {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; index index.php;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if ($block){ return 403;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</pre><pre> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; listen [::]:443 ssl ipv6only=on; # managed by Certbot
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; listen 443 ssl; # managed by Certbot
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ssl_certificate /etc/letsencrypt/live/danit.name.vn/fullchain.pem; # managed by Certbot
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ssl_certificate_key /etc/letsencrypt/live/danit.name.vn/privkey.pem; # managed by Certbot
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot</pre><pre>}
<div></div>
 &nbsp;&nbsp; server {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if ($host = danit.name.vn) {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return 301 https://$host$request_uri;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; } # managed by Certbot
<div></div>
</pre><pre> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; listen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 80;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; listen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [::]:80;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; server_name&nbsp; danit.name.vn wwww.danit.name.vn;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return 404; # managed by Certbot
<div></div>
&nbsp;&nbsp;&nbsp; }
<div></div>
}</pre></td></tr></tbody></table>

Chúc bạn thực hiện **Chặn Các Traffic Theo Http Referer Trên Nginx** thành công!

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
