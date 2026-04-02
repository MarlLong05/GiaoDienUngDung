import { useCallback, useState } from "react";
import TodoItem from "./TodoItem";
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const onDelete = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }, []);

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(t => (
          <TodoItem key={t.id} todo={t} onDelete={onDelete} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
}