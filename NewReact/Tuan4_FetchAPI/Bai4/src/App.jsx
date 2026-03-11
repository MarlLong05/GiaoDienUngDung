import React, { useEffect, useState } from 'react'

const App = () => {
   const [goc, setGoc] =  useState([])
   const [sauLoc, setSauLoc] = useState([])
   const [sreach , setSreach] = useState("")

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {setGoc(data); setSauLoc(data)})
    
  }, [])

  const handleSreach = (e) =>{ 
      const value = e.target.value
      setSreach(value)

      const kq = goc.filter((a) =>
        a.title.toLowerCase().includes(value.toLowerCase())
      )
      setSauLoc(kq)
    }
    
  return (
    <div>
      <input type="text" value={sreach} onChange={handleSreach} />
      {sauLoc.map((a) =>(
        <div key={a.id}>
          KQ :{a.title}
        </div>
      ))}
      
    </div>
  )
}

export default App
