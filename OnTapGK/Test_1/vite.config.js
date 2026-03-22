import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // Thêm dòng này để xử lý các vấn đề về thư viện React
    deps: {
      inline: [/react/],
    },
  },
})