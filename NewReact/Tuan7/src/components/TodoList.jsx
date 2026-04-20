import { useRecoilValue } from "recoil";
import { todoState } from "../todoState";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useRecoilValue(todoState);

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>Chưa có todo</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;