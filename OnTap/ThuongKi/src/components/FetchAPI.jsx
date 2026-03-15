import React, { useEffect, useState } from 'react'
const FetchAPI = () => {

    const [id, setId] = useState([]) 
    const [error, setError] = useState(null)
    const url = "https://jsonplaceholder.typicode.com/users"
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {console.log(data) 
            , setId(data)})
        .catch((error) => {setError(error.message)
        })
    }, [])
  return (
    <div>
        <h3>Bai 1</h3>
        {error && <p>Lỗi : {error}</p> }

        {id.map((a) => (
             <div key={a.id}>
                <p> Name: {a.name}</p>
                <p> Email: {a.email}</p>
            </div>
        )
           
        )}      
    </div>
  )
}

export default FetchAPI
