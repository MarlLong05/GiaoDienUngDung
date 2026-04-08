import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem("user", "true") 
    navigate("/profile")
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  )
}

export default Login