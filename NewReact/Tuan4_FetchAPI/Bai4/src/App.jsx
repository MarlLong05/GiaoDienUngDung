
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

    const [goc, setGoc] = useState([])
    const [locGoc, setLocGoc]  = useState([])
    const [sreach, setSreach]  = useState("")


    useEffect(() =>{

      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setGoc(data)
        setLocGoc(data) 
      })
    }, [])

    const handle  = (e) => {
      const value = e.target.value 
      setSreach(value) 

      const kq = goc.filter(a => a.title.toLowerCase().includes(value.toLowerCase()))
      setLocGoc(kq)
    }


  return (
    <>
      <input type="text" onChange={handle} value={sreach} /> 
      {locGoc.map(a => {
        return(
          <div>
          <p key={a.id}> {a.title}</p>
        </div>
        )
      })}
    </>
  )
}

export default App
