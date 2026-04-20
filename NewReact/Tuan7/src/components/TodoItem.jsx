import { useRecoilState } from "recoil";
import { todoState } from "../todoState";
import { useState } from "react";

function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoState);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleSave = () => {
    if (!newText.trim()) return;

    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: newText } : t
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="todo-edit">
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Lưu</button>
        </div>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>

          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)}>Sửa</button>
            <button onClick={handleDelete}>Xóa</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;