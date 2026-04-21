import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Áo dài trắng", price: 200 },
  { id: 2, name: "Áo dài đỏ", price: 300 },
  { id: 3, name: "Áo dài xanh", price: 250 }
];

function ProductList() {
  return (
    <div className="card">
      <h2 className="title">Sản phẩm</h2>
      {products.map(p => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;