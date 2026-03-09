
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [names, setName] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {console.log(data); 
      setName(data)},) 
    
    }, [])
    

  return (
    <><div>
      <h2 className='DanhSach'>Danh Sach List</h2>
      {names.map(a =>( <p key={a.id}>Name: {a.name} and Email: {a.email}</p>
     ))}
    </div>
      
    </>
  )
}

export default App
