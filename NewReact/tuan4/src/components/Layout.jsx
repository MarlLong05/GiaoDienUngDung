import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;