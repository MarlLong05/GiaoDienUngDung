import { useState, useEffect } from 'react'

// TODO (Câu 4): SV hoàn thiện custom hook useLocalStorage
// Hook này đồng bộ state với localStorage theo key
// Yêu cầu:
//   - Khi khởi tạo: đọc giá trị từ localStorage, nếu không có thì dùng initialValue
//   - Khi setValue: cập nhật state và ghi vào localStorage
//   - Trả về [value, setValue] giống useState
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
