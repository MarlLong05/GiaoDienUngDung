import React, { useState } from 'react'
const Form = () => {
   const [user, upstate] = useState({
        name: "", 
        email: "", 
        age: ""
    })

    const handleChange = (e) =>{ 
        const {name, value} = e.target ; 

        upstate({
            ...user, 
            [name]: value
        })
    }
  return (
    <div>
        <h2>Nhap Thong tin</h2>
        <input type="text" name="name" className='in-name' placeholder='Nhap ten' value={user.name} onChange={handleChange}/>
        <input type="text" name="email" className='in-email' placeholder='Nhập email' value={user.email} onChange={handleChange}/>
        <input type="text" name='age' className='in-age' placeholder='Nhập tuổi ' value={user.age} onChange={handleChange}/>
        <h2>Hiện Thi Thông Tin</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
    </div> )
}

export default Form



