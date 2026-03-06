import React from "react";

const TodoItem = ({ todo, index, deleteTodo }) => {

  return (
    <li>

      {todo}

      <button onClick={() => deleteTodo(index)}>
        X
      </button>

    </li>
  );
};

export default TodoItem;