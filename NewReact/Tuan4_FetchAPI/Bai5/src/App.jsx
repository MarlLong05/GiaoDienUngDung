import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [doto, setDoto] = useState([])
  const [search, setSearch] = useState("")
  const [title, setTitle] = useState("") 
  const url = "https://jsonplaceholder.typicode.com/posts"

useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setDoto(data.filter(a=> a.title.toLowerCase().includes(search.toLowerCase()))))
   .catch(error => console.log("Loi:", error));

}, [search])


const addData = async () =>{
  const res = await fetch(url, {
    method: "POST", 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify({title: title, comp: false})
  })

  const MangB = await res.json()
  setDoto(prev => [...prev,MangB])
  setTitle("")
}


const deleData = async (id) =>{
  await fetch(`${url}/${id}`, {
    method: "DELETE"
  })  
  setDoto(prev => prev.filter(a => a.id !== id)) ;

  
}
  return (
    <div>
      <input type="text" placeholder='search' onChange={(e)=> setSearch(e.target.value)} />
      <input type="text" value={title} placeholder='title' onChange={(e) => setTitle(e.target.value)} />

      <button onClick={addData}>Them moi</button>
    
    {doto.map(a => (
      <div key={a.id}>
        {a.title}
        <button onClick={()=> deleData(a.id)}>Xoa</button>
      </div>
    )
      
    )}
    
    
    </div>
  )
}

export default App
