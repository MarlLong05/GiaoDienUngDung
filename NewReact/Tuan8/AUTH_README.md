# Bài 9: Auth + API + Token Management (Integrated với Bài 8)

## 🎯 Mục tiêu

- Xây dựng hệ thống authentication với global state
- Quản lý token và lưu vào localStorage
- API calls với automatic token injection
- Login/Register/Logout flow

## 📁 Cấu trúc file

```
src/
├── state/
│   ├── context/
│   │   ├── AuthContext.jsx      (Context for auth)
│   │   ├── CartContext.jsx
│   │   └── UserContext.jsx
│   ├── authState.jsx            (AuthProvider, login/logout/register logic)
│   ├── useAuth.jsx              (Custom hook)
│   ├── cartState.jsx
│   ├── useCart.jsx
│   ├── userState.jsx
│   └── useUsers.jsx
├── components/
│   ├── Login.jsx                (Login form)
│   ├── Register.jsx             (Register form)
│   ├── Profile.jsx              (User profile + logout button)
│   ├── Auth.css                 (Styling for auth forms)
│   └── ... (other components)
├── utils/
│   └── apiUtils.js              (Fetch wrapper with token injection)
└── App.jsx                       (Modified to show Login or App based on auth)
```

## 🔐 Features

### 1. AuthContext & AuthProvider

- Global state: `user`, `token`, `isLoading`, `error`
- Methods: `login()`, `register()`, `logout()`
- Persists token to localStorage
- Loads token from localStorage on app start

### 2. Login/Register Flow

```javascript
// Login
const { login } = useAuth();
await login("username", "password");
// - Token được lưu vào localStorage
// - User info được lưu vào state
// - App tự động render main content

// Register
const { register } = useAuth();
await register("username", "email", "password");

// Logout
const { logout } = useAuth();
logout();
// - Token và user info xóa khỏi localStorage
// - App quay lại Login screen
```

### 3. API Utils with Token Injection

```javascript
import { apiGet, apiPost, apiPut, apiDelete } from "./utils/apiUtils";

// Tất cả requests tự động thêm Authorization header
const users = await apiGet("https://api.example.com/users");
// Header: Authorization: Bearer <token>

const newPost = await apiPost("https://api.example.com/posts", {
  title: "New Post",
  body: "Content",
});
```

### 4. Protected Routes

- Nếu chưa login → hiển thị Login/Register form
- Nếu đã login → hiển thị app content (Cart, UserList, etc.)
- Token tự động thêm vào mọi API calls

## 🧪 Test Auth Flow

### Bước 1: Truy cập http://localhost:5175/

### Bước 2: Thử Login

- Nhập username: `john`
- Nhập password: `123456`
- Click "Đăng Nhập"
- ✅ Nếu thành công → app hiển thị main content + Profile card

### Bước 3: Kiểm tra localStorage

- Mở DevTools (F12)
- Vào tab "Application" → "Local Storage"
- Xem `auth_token` và `auth_user` đã được lưu

### Bước 4: Thử Logout

- Click "Đăng Xuất" ở Profile card
- ✅ App quay lại Login form
- ✅ localStorage xóa token

### Bước 5: Thử Register

- Click "Đăng Ký" ở trang Login
- Nhập: username, email, password
- Click "Đăng Ký"
- ✅ Nếu thành công → app hiển thị main content

### Bước 6: Reload page

- F5 hoặc Ctrl+R
- ✅ App vẫn hiển thị nội dung (token được load từ localStorage)
- ✅ User info được restore từ localStorage

## 🚀 Mở rộng

### Dùng API thực

Thay đổi authState.jsx để gọi server thực tế:

```javascript
const response = await fetch("https://api.example.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password }),
});

const data = await response.json();
const token = data.token;
const user = data.user;
```

### Axios wrapper

Thay fetch bằng axios (có interceptor tự động thêm token):

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Token Refresh

Khi token hết hạn → tự động gọi refresh endpoint để lấy token mới

### Role-based Access

Kiểm tra `user.role` để show/hide features

## 📝 Notes

- Hiện tại dùng mock API (không có server thực)
- Token là chuỗi mock: `token_username_timestamp`
- Để dùng server thực, sửa function `login()` và `register()` trong authState.jsx
- API utils sẵn sàng để dùng với server thực (chỉ cần thay đổi URLs)

## 🎨 Styling

- Auth forms: gradient background, centered layout
- Profile card: hiển thị user info và logout button
- Responsive design với max-width 400px-500px

---

**Ready to test! 🚀**
