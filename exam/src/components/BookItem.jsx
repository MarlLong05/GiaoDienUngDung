import { memo } from 'react'

// Component con hiển thị 1 dòng sách
// TODO (Câu 1): 
// (1) Các props nhận vào: book (đối tượng sách), onView (hàm xử lý xem chi tiết), onDelete (hàm xử lý xóa).
// (2) Nên dùng React.memo vì khi danh sách sách lớn, nếu component cha re-render, các BookItem không đổi sẽ không bị render lại, giúp tối ưu hiệu năng.
function BookItem({ book, onView, onDelete }) {
  const statusMap = {
    read:    { label: 'Đã đọc',   className: 'badge-read' },
    reading: { label: 'Đang đọc', className: 'badge-reading' },
    unread:  { label: 'Chưa đọc', className: 'badge-unread' },
  }
  const currentStatus = (book.status || 'unread').toLowerCase()
  const status = statusMap[currentStatus] || statusMap.unread

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td><span className={`badge ${status.className}`}>{status.label}</span></td>
      <td>
        <button className="btn btn-primary" onClick={onView}>Xem</button>
        <button className="btn btn-danger"  onClick={onDelete}>Xóa</button>
      </td>
    </tr>
  )
}

export default memo(BookItem)
