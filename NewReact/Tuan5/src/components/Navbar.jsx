import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  )
}

export default Navbar