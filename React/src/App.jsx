import './App.css'
import Header from './components/Header'
import StudentInf from './components/StudentInf'
import Footer from './components/Footer'
import { useState } from 'react'
function App() {
    const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter App</h1>

      <h2>Giá trị: {count}</h2>

      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}


export default App


