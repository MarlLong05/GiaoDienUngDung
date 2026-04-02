import { useReducer } from "react";

const initialState = {
  status: "idle",
  data: [],
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case "Bắt Đầu":
      return { ...state, status: "loading" };
    case "Thành Công":
      return { status: "success", data: action.payload, error: null };
    case "Lỗi":
      return { status: "error", data: [], error: action.payload };
    default:
      return state;
  }
}

export default function FetchUsers() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "Bắt Đầu" });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch({ type: "Thành Công", payload: data });
    } catch (err) {
      dispatch({ type: "Lỗi", payload: err.message });
    }
  };

  return (
    <div>
      <button onClick={fetchUsers}>Fetch</button>

      {state.status === "loading" && <p>Loading...</p>}
      {state.status === "error" && (
        <>
          <p>Error: {state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      )}
      {state.status === "success" && (
        <ul>
          {state.data.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
      )}
    </div>
  );
}