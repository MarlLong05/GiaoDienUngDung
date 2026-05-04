import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { booksState } from '../store/atoms'
import { addBook } from '../services/bookApi'

const initialState = {
  title: '',
  author: '',
  category: '',
  status: 'read', // Mặc định là 'read' (Khớp với ví dụ của bạn)
  error: '',
}

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value, error: '' }
    case 'SET_ERROR':
      return { ...state, error: action.error }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

function AddBookPage() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const setBooks = useSetRecoilState(booksState)
  const navigate = useNavigate()

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!state.title || !state.author) {
      dispatch({ type: 'SET_ERROR', error: 'Tên sách và Tác giả không được để trống!' })
      return
    }
    try {
      // Gửi dữ liệu lên API
      const newBook = await addBook({
        title: state.title,
        author: state.author,
        category: state.category,
        status: state.status, // Sẽ gửi 'read', 'reading' hoặc 'unread'
        description: '' 
      })
      
      // Cập nhật Recoil để giao diện làm mới
      setBooks(prev => [...prev, newBook])
      
      alert('Thêm sách thành công!')
      dispatch({ type: 'RESET' })
      navigate('/books')
    } catch (error) {
      console.error(error)
      dispatch({ type: 'SET_ERROR', error: 'Lỗi khi thêm sách lên server!' })
    }
  }

  return (
    <div className="card">
      <h2 style={{ marginBottom: 16 }}>➕ Thêm sách mới</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên sách *</label>
          <input name="title" value={state.title} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Tác giả *</label>
          <input name="author" value={state.author} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Thể loại</label>
          <input name="category" value={state.category} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Trạng thái</label>
          <select name="status" value={state.status} onChange={handleChange}>
            <option value="read">Đã đọc</option>
            <option value="reading">Đang đọc</option>
            <option value="unread">Chưa đọc</option>
          </select>
        </div>

        {state.error && (
          <p style={{ color: 'red', marginBottom: 10 }}>⚠ {state.error}</p>
        )}

        <button type="submit" className="btn btn-success">Thêm sách</button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Làm mới
        </button>
      </form>
    </div>
  )
}

export default AddBookPage
