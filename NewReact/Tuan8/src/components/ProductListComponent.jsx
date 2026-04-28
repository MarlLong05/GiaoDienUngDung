import { useProduct } from '../state/useProduct';
import { useCart } from '../state/useCart';
import { useNotification } from '../state/useUI';
import './ProductList.css';

export default function ProductListComponent() {
  const { products, isLoading, error } = useProduct();
  const { addToCart } = useCart();
  const { addNotification } = useNotification();

  const handleAddToCart = (product) => {
    addToCart(product);
    addNotification(`✅ Thêm "${product.name}" vào giỏ!`, 'success', 2000);
  };

  if (isLoading) {
    return <div className="products-loading">Đang tải sản phẩm...</div>;
  }

  if (error) {
    return <div className="products-error">Lỗi: {error}</div>;
  }

  return (
    <div className="products-section">
      <h2>Danh Sách Sản Phẩm ({products.length})</h2>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-description">{product.title}</p>
              
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className="btn-add-to-cart"
                >
                  {product.inStock ? 'Thêm Giỏ' : 'Hết Hàng'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
