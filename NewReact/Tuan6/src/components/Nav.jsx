import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ padding: 10, background: "#ddd" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Nav;