import { useRecoilValue } from "recoil";
import { countState } from "../counterState";

function CounterDisplay() {
  const count = useRecoilValue(countState);

  return <h2>Count: {count}</h2>;
}

export default CounterDisplay;