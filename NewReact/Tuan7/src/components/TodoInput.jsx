import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../todoState";

function TodoInput() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useRecoilState(todoState);

  const handleAdd = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div className="todo-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
}

export default TodoInput;