import axios from 'axios'

// API URL của bạn
export const API_URL = 'https://69f7fcc6dd0c226688ee12fe.mockapi.io/book'

// Câu 2: Fetch danh sách sách
export async function getBooks() {
  const response = await axios.get(API_URL)
  return response.data
}

// Câu 7: Thêm sách mới
export async function addBook(book) {
  const response = await axios.post(API_URL, book)
  return response.data
}

// Câu 8: Xóa sách
export async function deleteBook(id) {
  const response = await axios.delete(`${API_URL}/${id}`)
  return response.data
}

// Câu 5: Lấy chi tiết sách
export async function getBookById(id) {
  try {
    // Thử cách 1: Gọi trực tiếp bằng ID
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    console.warn('Không lấy được trực tiếp theo ID, đang tìm trong danh sách tổng...')
    // Thử cách 2: Lấy toàn bộ danh sách và tìm kiếm local (Dành cho MockAPI lỗi)
    const allBooks = await getBooks()
    return allBooks.find(b => b.id.toString() === id.toString()) || null
  }
}
