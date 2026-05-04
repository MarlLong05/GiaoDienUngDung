import { atom } from 'recoil'

// TODO (Câu 3): SV sử dụng atom này cho danh sách sách
export const booksState = atom({
  key: 'booksState',
  default: [],
})

export const userState = atom({
  key: 'userState',
  default: null,
})

export const filterState = atom({
  key: 'filterState',
  default: 'all',
})
