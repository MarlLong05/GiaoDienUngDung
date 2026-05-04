import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBookById } from '../services/bookApi'

function BookDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true)
      try {
        const data = await getBookById(id)
        setBook(data)
      } catch (error) {
        console.error('Lỗi khi fetch chi tiết sách:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])

  if (loading) return <p>Đang tải...</p>
  if (!book) return <p>Không tìm thấy sách</p>

  const statusMap = {
    read: 'Đã đọc',
    reading: 'Đang đọc',
    unread: 'Chưa đọc',
  }
  const displayStatus = statusMap[(book.status || '').toLowerCase()] || 'Chưa rõ'

  return (
    <div className="card">
      <button className="btn btn-warning" onClick={() => navigate(-1)}>← Quay lại</button>

      <h2 style={{ marginTop: 16 }}>{book.title}</h2>
      <hr />
      <div style={{ marginTop: 16, lineHeight: '2' }}>
        <p><b>Tác giả:</b> {book.author}</p>
        <p><b>Thể loại:</b> {book.category || 'Đang cập nhật'}</p>
        <p><b>Trạng thái:</b> <span className="badge badge-info">{displayStatus}</span></p>
        <p><b>Mô tả:</b></p>
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          {book.description || 'Chưa có mô tả cho cuốn sách này.'}
        </p>
      </div>
    </div>
  )
}

export default BookDetailPage
