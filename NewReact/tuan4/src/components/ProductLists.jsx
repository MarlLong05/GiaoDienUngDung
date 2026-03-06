import { Link } from "react-router-dom";

export default function ProductLists() {
  return (
    <div>
      <h2>Product Lists</h2>

      <ul>
        <li><Link to="/products/banhtrung">Bánh Chưng</Link></li>
        <li><Link to="/products/nuocngot">Nước ngọt </Link></li>
        <li><Link to="/products/hatdua">Hạt dưa</Link></li>
      </ul>
    </div>
  );
}