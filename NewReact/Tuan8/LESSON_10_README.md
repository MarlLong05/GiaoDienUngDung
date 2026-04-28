# Bài 10: Mini App - Tổng Hợp Kiến Trúc Hoàn Chỉnh

## 🎯 Mục Tiêu

Xây dựng app quản lý sản phẩm với kiến trúc React hoàn chỉnh:

- ✅ **Auth Context** - Đăng nhập/Đăng xuất + Token
- ✅ **Product Context** - Fetch & quản lý sản phẩm
- ✅ **Cart Context** - Giỏ hàng global
- ✅ **UI Context** - Loading, Error, Notification global

## 📁 Cấu Trúc File

```
src/
├── state/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ProductContext.jsx
│   │   ├── CartContext.jsx
│   │   └── UIContext.jsx (LoadingContext, ErrorContext, NotificationContext)
│   ├── authState.jsx
│   ├── productState.jsx
│   ├── cartState.jsx
│   ├── uiState.jsx
│   ├── useAuth.jsx
│   ├── useProduct.jsx
│   ├── useCart.jsx
│   └── useUI.jsx (useLoading, useError, useNotification)
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   ├── ProductListComponent.jsx
│   ├── LoadingOverlay.jsx
│   ├── ErrorDisplay.jsx
│   ├── NotificationContainer.jsx
│   ├── Auth.css
│   ├── UI.css
│   └── ProductList.css
├── utils/
│   └── apiUtils.js
└── App.jsx
```

## 🏗️ Architecture Overview

```
App
├── AuthProvider
│   └── UIProvider (Loading, Error, Notification)
│       ├── LoadingOverlay
│       ├── ErrorDisplay
│       ├── NotificationContainer
│       └── AppContent
│           ├── Login/Register (nếu chưa auth)
│           └── Main App (nếu đã auth)
│               ├── ProductProvider
│               │   └── CartProvider
│                   ├── Profile
│                   └── ProductListComponent
```

## 🔑 Core Features

### 1. **AuthContext** - User Authentication

```javascript
const { user, token, isAuthenticated, login, register, logout } = useAuth();
```

- Global user state
- Token management + localStorage
- Login/Register/Logout functions

### 2. **ProductContext** - Product Management

```javascript
const { products, isLoading, error, refetch } = useProduct();
```

- Fetch products từ API
- Global products state
- Loading & error handling

### 3. **CartContext** - Shopping Cart

```javascript
const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice } =
  useCart();
```

- Add/Remove products từ giỏ
- Update quantity
- Calculate total price

### 4. **UIContext** - Global UI State

```javascript
const { showLoading, hideLoading } = useLoading();
const { showError, hideError } = useError();
const { addNotification } = useNotification();
```

- **Loading** - Modal spinner với message
- **Error** - Banner hiển thị lỗi
- **Notification** - Toast notifications (success, error, info, warning)

## 🧪 Flow Demo

### 1. **Login**

- Nhập username/password
- Token được lưu vào localStorage
- App hiển thị main content

### 2. **Fetch Products**

- ProductProvider auto fetch từ JSONPlaceholder
- Loading spinner hiển thị trong khi fetch
- Products grid render khi fetch xong

### 3. **Add to Cart**

- Click "Thêm Giỏ" trên sản phẩm
- Success notification hiển thị
- Product được thêm vào cart state

### 4. **Logout**

- Click "Đăng Xuất"
- Token xóa khỏi localStorage
- Quay lại Login screen

## 🚀 Test Steps

1. **Truy cập**: http://localhost:5176/
2. **Đăng nhập**: Username bất kỳ + password
3. **Xem sản phẩm**: Grid hiển thị 12 sản phẩm
4. **Thêm giỏ**: Click "Thêm Giỏ" → notification success
5. **Reload**: F5 → vẫn login (token restore)
6. **Logout**: Click "Đăng Xuất" → quay lại login

## 💡 Key Points

### Context Separation

- **AuthContext** - User & token
- **ProductContext** - Product list
- **CartContext** - Shopping cart state
- **UIContext** - Loading, Error, Notification

Mỗi context độc lập, dễ scale & test

### API Integration

```javascript
import { apiGet, apiPost } from "./utils/apiUtils";

// Tự động thêm Authorization header
const users = await apiGet("https://api.example.com/users");
const newPost = await apiPost("https://api.example.com/posts", data);
```

### Global UI State

```javascript
// Loading
const { showLoading, hideLoading } = useLoading();
showLoading("Đang tải...");
hideLoading();

// Error
const { showError } = useError();
showError("Có lỗi xảy ra!");

// Notification
const { addNotification } = useNotification();
addNotification("✅ Thành công!", "success", 2000);
```

## 🎨 Styling

- **Login/Register**: Gradient background, centered form
- **Products Grid**: Responsive grid (250px min width)
- **Notifications**: Top-right toast
- **Loading**: Center overlay spinner
- **Error**: Top banner

## 📦 Mock Data

Products được convert từ JSONPlaceholder posts:

- ID: từ post.id
- Name: "Product X"
- Title: từ post.title
- Price: random 10-110
- Category: Electronics/Clothing/Books (rotate)
- Image: Placeholder từ via.placeholder.com

## 🔄 State Management Flow

```
User Login
  ↓
AuthProvider updates user & token
  ↓
AppContent renders (ProductProvider + CartProvider)
  ↓
ProductProvider fetch products
  ↓
UI: LoadingOverlay show
  ↓
Products loaded → LoadingOverlay hide
  ↓
User click "Thêm Giỏ"
  ↓
CartProvider addToCart
  ↓
NotificationContainer show success
```

## 🛠️ Mở Rộng

1. **Real API**: Thay JSONPlaceholder URLs bằng API thực tế
2. **Database**: Lưu cart vào backend
3. **Payment**: Thêm checkout flow
4. **User Profile**: Fetch user data từ API
5. **Search/Filter**: Filter products bằng category
6. **Pagination**: Paginate products list

## 📝 Summary

Bài 10 là **full-stack React architecture demo** với:

- ✅ Multiple contexts (Auth, Product, Cart, UI)
- ✅ API integration với token injection
- ✅ Global state management
- ✅ Error/Loading/Notification handling
- ✅ Real-world app structure

**Ready to deploy! 🚀**
