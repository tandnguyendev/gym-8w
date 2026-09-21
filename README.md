# Sổ Sắt

Sổ tập tạ chạy hoàn toàn trong trình duyệt. Một file `index.html`, không backend,
không tài khoản. Mọi số liệu nằm trong `localStorage` của máy bạn.

- **Tập** — mở là vào thẳng buổi hôm nay (tự chọn A hay B theo buổi gần nhất).
  Mỗi lần một bài, có thanh tiến độ và dãy chấm để biết đang ở đâu. Tạ và rep điền
  sẵn từ set trước, chỉnh bằng nút −/+, bấm một nút là xong set. Đồng hồ nghỉ tự
  chạy sau mỗi set và rung báo khi hết. Bấm vào set đã ghi để sửa, bấm × để xoá.
  Mỗi bài có ảnh minh hoạ hai khung (tư thế bắt đầu → kết thúc); tự mở sẵn ở
  bài bạn chưa từng tập.
  Phòng đông, máy bận: bấm một bài thay thế ngay dưới tên bài (Bench → đẩy ngực
  tạ tay, Xà → Lat Pulldown…). Bài thay thế có lịch sử tạ riêng nên không làm
  lệch gợi ý của bài chính; buổi sau tự về lại bài chính.
- **Nhật ký** — các buổi đã ghi, kèm tổng khối lượng (tạ × rep).
- **Tôi** — cân nặng, BMI, mục tiêu calo/đạm (Mifflin–St Jeor), trình sửa chương
  trình, xuất/nhập JSON.

Kèm sẵn một giáo án **đẩy / kéo / chân** cho người từng tập tạ vài năm rồi
nghỉ, mục tiêu tăng cân tăng cơ. Ba buổi xoay vòng, hợp với 5–6 buổi/tuần: mỗi
buổi chỉ quanh một hai khu của phòng tập nên đỡ phải đi tới lui chờ máy. Mức tạ
khởi điểm đặt ở khoảng 65% mức cũ; khối lượng dồn về đùi trước vì đó thường là
nhóm bị bỏ khi tập kiểu chia nhóm cơ. Sửa thoải mái — nó chỉ là dữ liệu khởi
tạo.

Vì không có PT đi kèm, app tự lo mấy việc PT hay nhắc:

- **Tăng tạ** — buổi trước đạt số rep cao nhất ở mọi set thì hôm nay tự gợi ý
  tăng một bước tạ.
- **Khởi động** — danh sách khởi động chung ở bài đầu, và set khởi động tính
  sẵn theo mức tạ chính cho Squat, Bench, Deadlift, OHP.
- **Bài chính / bài phụ** — bài phụ có viền đứt và nhãn "Phụ". Nút *Ẩn bài
  phụ* ở thanh trên chỉ giữ lại bài chính cho ngày mệt hay phòng đông; xong
  bài chính thì app báo để bạn chọn làm tiếp hay về. Đổi nhãn trong tab Tôi →
  Chương trình.
- **Nhịp tăng cân** — trong tab Tôi, so các lần cân cách nhau 1–3 tuần và báo
  nên ăn thêm, giữ nguyên hay bớt.

Chương trình có `progVersion`: khi bản mặc định đổi, app tự thay vào nếu bạn
chưa ghi buổi nào; đã tập rồi thì xếp lại các bài theo bản mới nhưng giữ id,
mức tạ và nhật ký của từng bài (khoá nhật ký được đổi theo buổi mới, bài trùng
tên dư ra thì giữ lại và gắn nhãn phụ).

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
