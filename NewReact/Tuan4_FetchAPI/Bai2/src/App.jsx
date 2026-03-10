import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [datas, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setErr]  =useState(null)

  useEffect(()=>{   
    setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {setData(data); setLoading(false)})
      .catch(error =>{
        setErr(error)
        setLoading(false)
      })
    },1000)
      
  },[])

  return (
    <>
    <div>
          <h2 className='DanhSach'>Danh Sach List</h2>
            {loading ? <p>Loading</p> : 
                    error ?  <p>{error.message}</p> : 
                    datas.map(a => (
                      <p key={a.id}> Name: {a.name}
                                    Email: {a.email}
                      </p>
                    ))
             }


    </div>
      
    </>
  )
}

export default App
