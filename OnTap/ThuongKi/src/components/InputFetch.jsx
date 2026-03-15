import React, { useEffect, useState } from 'react'

const InputFetch = () => {
    const [id, setId] = useState("")
    const [datas, setData] = useState([])
    const [error, setErr] = useState(null) 
    const url = `https://jsonplaceholder.typicode.com/users/${id}`

    useEffect(()=>{
        const dataFetch = async () =>{
            if(!id){   
                setData([])
                return
            } 
            try{
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
            }catch(error){
                setErr(error)
            }     
        }
         dataFetch()       
    },[id])
  return (
    <div>
        <h1>Bai 3</h1>
        <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))} />
        {error && <p>Loi {error.message}</p> }
        {datas && <p>Name: {datas.name} <p>Phone: {datas.phone}</p></p> }
    </div>
  )
}

export default InputFetch
