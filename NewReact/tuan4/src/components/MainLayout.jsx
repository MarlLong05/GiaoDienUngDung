import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <nav>
        <Link to="user">User</Link> |{" "}
        <Link to="guest">Guest</Link> |{" "}
        <Link to="product">Product</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}