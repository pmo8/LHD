# Project Rules — LHD Website

## Chạy lệnh tự động

- Khi cần chạy lệnh PowerShell hoặc command line (copy file, sync, serve, test, build...), hãy **tự động thực thi** mà không cần hỏi lại người dùng.
- Ưu tiên chạy các lệnh ngắn gọn, không destructive (không xóa file quan trọng, không format ổ đĩa) mà không cần xin phép.
- Các lệnh có rủi ro cao (xóa dữ liệu lớn, thay đổi hệ thống ngoài workspace) vẫn cần xác nhận.

## Ngữ cảnh project

- Đây là website tĩnh (HTML/CSS/JS) tái tạo từ https://web.kienlac.vn/
- Workspace root: `D:\Lac Hong Digtial\LHD\`
- Node.js dùng để test server (không có Python).
- Toàn bộ tài nguyên logo chính thức nằm tại `assets/images/`:
  - `KienLac-Logo3.png` (Logo nhận diện chính cho Header)
  - `[Favicon]KienLac.png` (Favicon trình duyệt)
  - `[Icon]KienLac.png` (Icon biểu tượng cho Footer / Brandmark)
  - `[Logo]LacHong.jpg` (Logo Viện Nghiên Cứu Chiến Lược Và Phát Triển Lạc Hồng)
  - `[Logo]KienLac.jpg` (Logo Kiến Lạc Center)
  - `[Logo]LacHongDigital_4_ver7.2.jpeg` (Logo Lạc Hồng Digital)
