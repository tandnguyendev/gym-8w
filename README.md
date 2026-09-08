# Sổ Sắt

Sổ tập tạ chạy hoàn toàn trong trình duyệt. Một file `index.html`, không backend,
không tài khoản. Mọi số liệu nằm trong `localStorage` của máy bạn.

- **Tập** — mở là vào thẳng buổi hôm nay (tự chọn A hay B theo buổi gần nhất).
  Mỗi lần một bài, có thanh tiến độ và dãy chấm để biết đang ở đâu. Tạ và rep điền
  sẵn từ set trước, chỉnh bằng nút −/+, bấm một nút là xong set. Đồng hồ nghỉ tự
  chạy sau mỗi set và rung báo khi hết.
  Mỗi bài có ảnh minh hoạ hai khung (tư thế bắt đầu → kết thúc); tự mở sẵn ở
  bài bạn chưa từng tập.
- **Nhật ký** — các buổi đã ghi, kèm tổng khối lượng (tạ × rep).
- **Tôi** — cân nặng, BMI, mục tiêu calo/đạm (Mifflin–St Jeor), trình sửa chương
  trình, xuất/nhập JSON.

Kèm sẵn một giáo án full-body 8 tuần, 3 buổi/tuần, cho người quay lại tập sau
một thời gian chỉ tập bodyweight. Sửa thoải mái — nó chỉ là dữ liệu khởi tạo.

## Cài lên điện thoại

Mở link bằng trình duyệt trên điện thoại rồi thêm vào màn hình chính:

- **iPhone / Safari** — nút Chia sẻ → *Thêm vào MH chính*
- **Android / Chrome** — menu ⋮ → *Cài ứng dụng*, hoặc bấm nút trong tab Tôi

Mở từ icon sẽ chạy toàn màn hình (không thanh địa chỉ) và dùng được cả khi mất
mạng — service worker lưu sẵn trang, icon và font.

## Chạy local

```
python3 -m http.server 8080
```

## Deploy

Copy `index.html` lên bất kỳ host tĩnh nào.

## Nguồn ảnh

Ảnh động tác trong `img/` lấy từ [free-exercise-db](https://github.com/yuhonas/free-exercise-db),
giấy phép **Unlicense** (phạm vi công cộng). Đã thu nhỏ còn 400px và nén để
service worker lưu được cho chế độ offline.
