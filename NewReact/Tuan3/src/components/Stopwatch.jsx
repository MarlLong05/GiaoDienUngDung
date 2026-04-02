import { useRef, useState } from "react";
export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const inputRef = useRef();

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    pause();
    setTime(0);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>{time} ms</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>

      <input ref={inputRef} placeholder="Lap name" />
      <button onClick={focusInput}>Add Lap</button>
    </div>
  );
}