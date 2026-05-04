import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import BookListPage from './pages/BookListPage.jsx'
import BookDetailPage from './pages/BookDetailPage.jsx'
import AddBookPage from './pages/AddBookPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

import { useRecoilState } from 'recoil'
import { userState } from './store/atoms'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useEffect } from 'react'

function App() {
  const [user, setUser] = useRecoilState(userState)
  const [savedUser, setSavedUser] = useLocalStorage('user', null)

  // Khôi phục user từ localStorage vào Recoil khi mount
  useEffect(() => {
    if (savedUser && !user) {
      setUser(savedUser)
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    setSavedUser(null)
  }

  // Component bảo vệ Route
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <>
      <nav className="navbar">
        <h1>📚 My Book Library</h1>
        <div>
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/books">Danh sách sách</NavLink>
          <NavLink to="/add">Thêm sách</NavLink>
          {!user ? (
            <NavLink to="/login">Đăng nhập</NavLink>
          ) : (
            <>
              <span style={{ color: 'white', marginRight: 10 }}>Xin chào, {user.username}</span>
              <button className="btn btn-danger" onClick={handleLogout} style={{ padding: '4px 8px' }}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookListPage />} />
          <Route 
            path="/books/:id" 
            element={
              <ProtectedRoute>
                <BookDetailPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/add" 
            element={
              <ProtectedRoute>
                <AddBookPage />
              </ProtectedRoute>
            } 
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
