import { useNavigate } from "react-router-dom";

const data = [
  { id: 1, name: "Áo" },
  { id: 2, name: "Quần" },
];

function Products() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Products</h2>
      {data.map((p) => (
        <div key={p.id}>
          <p>{p.name}</p>
          <button onClick={() => navigate(`/products/${p.id}`)}>
            Xem
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;