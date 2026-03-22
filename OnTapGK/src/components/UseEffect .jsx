import React, { useEffect, useState } from 'react'

const UseEffect  = () => {
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const id = setInterval (()=>{
            setTime(new Date())
        }, 1000) 

        return () => clearInterval(id) 

    }, [])
  return (

    <div>
         <h2>Thoi gian hien tai</h2>
         <div>
            {time.toLocaleTimeString()} <br />
            {time.toLocaleDateString()}
         </div>
    </div>
  )
}

export default UseEffect 
