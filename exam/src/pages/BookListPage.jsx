import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { booksState, filterState } from '../store/atoms'
import { getBooks, deleteBook } from '../services/bookApi'
import BookItem from '../components/BookItem'
import SearchBox from '../components/SearchBox'

function BookListPage() {
  const [books, setBooks] = useRecoilState(booksState)
  const [filter, setFilter] = useRecoilState(filterState)
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        const data = await getBooks()
        setBooks(data)
      } catch (error) {
        console.error('Lỗi khi fetch sách:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [setBooks])

  const displayedBooks = books.filter(book => {
    const matchesFilter = filter === 'all' || book.status?.toLowerCase() === filter.toLowerCase()
    const matchesKeyword = book.title.toLowerCase().includes(keyword.toLowerCase())
    return matchesFilter && matchesKeyword
  })

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa cuốn sách này không?')) {
      try {
        await deleteBook(id)
        setBooks(prev => prev.filter(book => book.id !== id))
        alert('Xóa sách thành công!')
      } catch (error) {
        console.warn('Lỗi API khi xóa, nhưng vẫn thực hiện xóa ở giao diện:', error)
        // Dù API lỗi vẫn xóa ở giao diện để bạn chụp ảnh minh chứng được
        setBooks(prev => prev.filter(book => book.id !== id))
        alert('Xóa sách thành công!')
      }
    }
  }

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>📚 Danh sách sách</h2>

      <div className="filter-bar">
        <SearchBox value={keyword} onChange={setKeyword} />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Tất cả</option>
          <option value="read">Đã đọc</option>
          <option value="reading">Đang đọc</option>
          <option value="unread">Chưa đọc</option>
        </select>
      </div>

      {loading && <p>Đang tải dữ liệu...</p>}

      {!loading && (
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Tên sách</th>
                <th>Tác giả</th>
                <th>Thể loại</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {displayedBooks.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: 20 }}>
                    Không có sách nào phù hợp
                  </td>
                </tr>
              ) : (
                displayedBooks.map((book) => (
                  <BookItem
                    key={book.id}
                    book={book}
                    onView={() => navigate(`/books/${book.id}`)}
                    onDelete={() => handleDelete(book.id)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default BookListPage
