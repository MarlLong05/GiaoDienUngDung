import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {

  const [text, setText] = useState("");

  const handleAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhap todo..."
      />

      <button onClick={handleAdd}>
        Add
      </button>

    </div>
  );
};

export default TodoInput;