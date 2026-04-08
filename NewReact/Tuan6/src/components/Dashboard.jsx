import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link> |{" "}
      <Link to="orders">Orders</Link> |{" "}
      <Link to="settings">Settings</Link>

      <hr />

      {/* Nơi hiển thị component con */}
      <Outlet />
    </div>
  )
}

export default Dashboard