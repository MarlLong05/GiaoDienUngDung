import React from "react";

function TodoItem({ todo, onDelete, onToggle }) {
  console.log("render item", todo.id);

  return (
    <li>
      <span onClick={() => onToggle(todo.id)}>
        {todo.done ? "Đúng" : "Sai"} {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
}

export default React.memo(TodoItem);