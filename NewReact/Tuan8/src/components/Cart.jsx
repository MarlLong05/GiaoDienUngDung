import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../recoil/cartState";
import CartItem from "./CartItem";

function Cart() {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div className="card">
      <h2 className="title">Giỏ hàng</h2>

      {cart.length === 0 && <p>Chưa có sản phẩm</p>}

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="total">Tổng: {total}$</div>
    </div>
  );
}

export default Cart;