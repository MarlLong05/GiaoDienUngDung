import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { booksState } from '../store/atoms'

function HomePage() {
  const books = useRecoilValue(booksState)

  // Giải thích: useMemo phù hợp vì việc tính toán thống kê từ mảng books có thể tốn tài nguyên nếu mảng lớn. 
  // Nó giúp tránh tính toán lại mỗi khi HomePage re-render trừ khi danh sách books thay đổi.
  const stats = useMemo(() => {
    return {
      total: books.length,
      read: books.filter(b => b.status === 'read').length,
      reading: books.filter(b => b.status === 'reading').length,
      unread: books.filter(b => b.status === 'unread').length
    }
  }, [books])

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>📊 Thống kê tủ sách</h2>

      <div className="stats">
        <div className="stat-box">
          <div className="num">{stats.total}</div>
          <div>Tổng số sách</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#27ae60' }}>{stats.read}</div>
          <div>Đã đọc xong</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#f39c12' }}>{stats.reading}</div>
          <div>Đang đọc</div>
        </div>
        <div className="stat-box">
          <div className="num" style={{ color: '#95a5a6' }}>{stats.unread}</div>
          <div>Chưa đọc</div>
        </div>
      </div>

      <div className="card">
        <h3>Chào mừng đến với thư viện cá nhân của bạn!</h3>
        <p style={{ marginTop: 8 }}>
          Vào mục <b>Danh sách sách</b> để xem, tìm kiếm và lọc sách theo trạng thái đọc.
          Dùng mục <b>Thêm sách</b> để đưa sách mới vào tủ sách của bạn.
        </p>
      </div>
    </div>
  )
}

export default HomePage
