import { useRecoilState } from "recoil";
import { cartState } from "../recoil/cartState";
import { increaseItem, decreaseItem } from "../state/cart";

function CartItem({ item }) {
  const [cart, setCart] = useRecoilState(cartState);

  const increase = () => {
    setCart(increaseItem(cart, item.id));
  };

  const decrease = () => {
    setCart(decreaseItem(cart, item.id));
  };

  return (
    <div className="cart-item">
      <span>{item.name}</span>

      <div className="quantity">
        <button className="qty-btn" onClick={decrease}>-</button>
        <span>{item.quantity}</span>
        <button className="qty-btn" onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default CartItem;