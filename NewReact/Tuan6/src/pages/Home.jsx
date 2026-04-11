import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1> Welcome to My Shop</h1>
      <p>
        Đây là website bán hàng mini sử dụng React Router V6. 
        Bạn có thể xem sản phẩm, thêm vào giỏ hàng và trải nghiệm flow mua hàng.
      </p>

      <button onClick={() => navigate("/products")}>
        Xem sản phẩm ngay
      </button>

      <hr />

      <h2> Sản phẩm nổi bật</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Áo thun</h4>
          <p>Giá: 100k</p>
          <button onClick={() => navigate("/products/1")}>
            Xem chi tiết
          </button>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Quần jean</h4>
          <p>Giá: 200k</p>
          <button onClick={() => navigate("/products/2")}>
            Xem chi tiết
          </button>
        </div>

         <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Quần jean</h4>
          <p>Giá: 200k</p>
          <button onClick={() => navigate("/products/2")}>
            Xem chi tiết
          </button>
        </div>


         <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Quần jean</h4>
          <p>Giá: 200k</p>
          <button onClick={() => navigate("/products/2")}>
            Xem chi tiết
          </button>
        </div>


         <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Quần jean</h4>
          <p>Giá: 200k</p>
          <button onClick={() => navigate("/products/2")}>
            Xem chi tiết
          </button>
        </div>


         <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Quần jean</h4>
          <p>Giá: 200k</p>
          <button onClick={() => navigate("/products/2")}>
            Xem chi tiết
          </button>
        </div>


         <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Quần jean</h4>
          <p>Giá: 200k</p>
          <button onClick={() => navigate("/products/2")}>
            Xem chi tiết
          </button>
        </div>

         <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Quần jean</h4>
          <p>Giá: 200k</p>
          <button onClick={() => navigate("/products/2")}>
            Xem chi tiết
          </button>
        </div>
      </div>
      

      <hr />

      <h2> Cách sử dụng</h2>
      <ul>
        <li>Vào trang Products để xem danh sách</li>
        <li>Click sản phẩm để xem chi tiết</li>
        <li>Thêm vào giỏ hàng</li>
        <li>Vào Cart để checkout</li>
        <li>Login để xem Profile</li>
      </ul>

      <hr />

      <h3>Bạn đã sẵn sàng mua sắm chưa? </h3>
      <button onClick={() => navigate("/products")}>
        Bắt đầu ngay
      </button>
    </div>
  );
}

export default Home;