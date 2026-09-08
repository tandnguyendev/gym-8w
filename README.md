# Sổ Sắt

Sổ tập tạ chạy hoàn toàn trong trình duyệt. Một file `index.html`, không backend,
không tài khoản. Mọi số liệu nằm trong `localStorage` của máy bạn.

- **Tập** — chọn buổi, ghi kg × rep từng set, tự hiện số của buổi trước để so.
- **Nhật ký** — các buổi đã ghi, kèm tổng khối lượng (tạ × rep).
- **Cơ thể** — log cân nặng, BMI, mục tiêu calo/đạm tính theo Mifflin–St Jeor.
- **Chương trình** — sửa/thêm/xoá buổi tập và bài tập tuỳ ý. Xuất/nhập JSON để sao lưu.

Kèm sẵn một giáo án full-body 8 tuần, 3 buổi/tuần, cho người quay lại tập sau
một thời gian chỉ tập bodyweight. Sửa thoải mái — nó chỉ là dữ liệu khởi tạo.

## Chạy local

```
python3 -m http.server 8080
```

## Deploy

Copy `index.html` lên bất kỳ host tĩnh nào.
