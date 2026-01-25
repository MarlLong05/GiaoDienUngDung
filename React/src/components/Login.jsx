import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='container'>
        <form action="" className='form'>
            <h2>Login Form</h2>
            <input type="text" placeholder="Username" /> <br />
            <input type="password" placeholder="Password" /> <br />
            <button className='btn-submit' type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login