import { useRecoilState } from "recoil";
import { cartState } from "../recoil/cartState";
import { addToCart } from "../state/cart";

function ProductItem({ product }) {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAdd = () => {
    setCart(addToCart(cart, product));
  };

  return (
    <div className="product-item">
      <div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price}$</div>
      </div>

      <button className="btn" onClick={handleAdd}>
        Thêm
      </button>
    </div>
  );
}

export default ProductItem;