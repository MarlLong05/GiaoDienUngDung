import React, { useState } from 'react'

const Input = () => {
    const[name, setName] = useState("")

    const xuly = (a) => {
        setName(a.target.value)
    }
  return (
    <div>
        <h2>Ten sau khi nhap : {name}</h2>
        <input type="text" onChange={xuly} placeholder='Nhap Ten cua ban vao day'/>
    </div>
  )
}

export default Input