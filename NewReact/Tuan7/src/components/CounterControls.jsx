import { useRecoilState } from "recoil";
import { countState } from "../counterState";

function CounterControls() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}

export default CounterControls;