import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AuthGuard from "./components/AuthGuard";
export default function ShopApp() {
  return (
    <>
      <Nav />

      <Routes>
        <Route index element={<Home />} />

        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />

        <Route
          path="profile"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />

      </Routes>
    </>
  );
}