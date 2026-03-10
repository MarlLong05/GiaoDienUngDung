import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
    const [todos, setTodo] = useState([])
    const [title, setTitle] = useState("")

    useEffect(() =>{
        fetch("http://localhost:3000/todos")
        .then(res => res.json())
        .then(data => setTodo(data))
    }, [])

    const addTodo = async ()  =>{

      const res = await fetch("http://localhost:3000/todos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
          title: title,
          completed: false
        })
      })

      const newTodo = await res.json()

      setTodo([...todos, newTodo])
      setTitle("")
    }

    const deleteTodo = async (id) => {

      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE"
      })

      setTodo(todos.filter(todo => todo.id !== id))
    }

  return (
    <>
      <div>
        <h2>Bai so 5 ve fetch API</h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTodo}>ADD Todo</button>

        {todos.map(todo => (
          <div key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}

      </div>
    </>
  )
}

export default App