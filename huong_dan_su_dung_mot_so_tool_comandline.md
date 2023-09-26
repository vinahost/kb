# Hướng dẫn sử dụng một số tool comand line trên một số Server Hosting của Vinahost

## DNS
Phạm vi: Tool này có thể sử dụng trên các Email Hosting : E, E2, EVDC
Mục đích:
  - Setup bộ record cho Email Hosting
  - Trỏ/cập nhật lại record Email Hosting (DKIM, SPF, MX, A)
  - Trỏ record bằng lệnh đối với các tên miền có nameserver thuộc ns3,ns4
  - Liệt kê các record

Hướng dẫn sử dụng:
```bash
# Hiển thị tuỳ chọn Help
vnds -h

#Set up record Email Hosting:
vdns -d example.vn -s EVDC

#Get list record:
vdns -d example.vn -t ALL

#Add A record:
vdns -d example.vn -a nintech.example.vn -t A -c 123.123.123.123

#Add CNAME record:
vdns -d example.vn -a nintech.example.vn -t CNAME -c example.vn.

#Add TXT record:
vdns -d example.vn -a example.vn -t TXT -c '\"this is a text\"'

#Add MX records:
vdns -d example.vn -a example.vn -t MX -p 5 -c mail.example.vn.

#Delete record:
vdns -d example.vn -r nintech.example.vn -t A
```

## Tool kiểm tra kết nối đến Sendgrid hoặc SMTP20
Phạm vi: Tool này có thể sử dụng trên các Email Hosting : E, E2, EVDC
Mục đích: 
    - Kiểm tra kết nối từ các Email Hosting đến Sendgrid hoặc SMTP20.
    - Kiểm tra hiệu lực của API key

Hướng dẫn sử dụng:
SendGrid
```bash
# Hiển thị tuỳ chọn Help
sendgrid -h

OPTIONS:
-s: Subject
-r: Recipient
-c: Content

# gửi mail
sendgrid -s 'Kiem tra API SendGrid' -r ninhpq@vinahost.vn -c 'Day la email kiem tra api cua SendGrid'
```

SMTP2GO
```bash
# Hiển thị tuỳ chọn Help
smtp2go -h


OPTIONS:
-s: Subject
-r: Recipient
-c: Content
-t: Tracking
-l: Limit

#Sent mail:
  smtp2go -s 'Kiem tra API SMTP2GO' -r ninhpq@vinahost.vn -c 'Day la email kiem tra api cua SMTP2GO'

#Tracking mail:
  smtp2go -t ninhpq@vinahost.vn -l 1

```

## Tool kiểm tra kết nối đến Sendgrid hoặc SMTP20


 
