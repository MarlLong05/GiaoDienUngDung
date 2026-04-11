import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Chi tiết sản phẩm {id}</h2>
      <button onClick={() => navigate("/cart")}>
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductDetail;