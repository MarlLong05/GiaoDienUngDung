import React, { useEffect, useState } from 'react'
const Loading = () => {

         const [datas, setData]  = useState([])
        const [loading, setLoading] = useState(true)
         const [error, setErr] = useState(null) 
         const url =  "https://jsonplaceholder.typicode.com/users"


         useEffect(()=>{
            const dataFecth = async () => {
                try {
                    const res = await fetch(url) ; 
                    const data = await res.json() ; 
                    setData(data)
                }catch(error){ 
                     setErr(error)
                } finally{
                    setLoading(false)
                }
            }
            dataFecth()
         },[])
  return (
    <div>
        <h2>Bai 2</h2>
        {loading ? <p>Loading</p> : 
            error ? <p>{error.message}</p> : 
                datas.map((e) => (
                    <div key={e.id}>Name: {e.name}</div>
                )) }
      
    </div>
  )
}

export default Loading



























// import React, { useEffect, useState } from 'react'

// const Loading = () => {

//     const [datas, setData]  = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setErr] = useState(null) 
//     const url =  "https://jsonplaceholder.typicode.com/users"


//     useEffect(()=>{
//         fetch(url)
//         .then(res => res.json())
//         .then(data => {setData(data) ; setLoading(false)})
//         .catch((error) => {setErr(error);  setLoading(false)})
//     }, [])
//     return (

//     <div>
//         <h1>Bai so 2</h1>
        
//         {loading ? <p>Loading</p> : 
//             error ? <p>{error.message}</p> : 
//                 datas.map((a)=> (
//                     <div key={a.id}>
//                         Name: {a.name}
//                         Email: {a.email}
//                     </div>
//                 )) }
      
//     </div>
//   )
// }

// export default Loading
