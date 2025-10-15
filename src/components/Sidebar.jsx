import React from 'react'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">MyDash</div>
      <nav>
        <a className="nav-item active">Overview</a>
        <a className="nav-item">Metrics</a>
        <a className="nav-item">Users</a>
        <a className="nav-item">Settings</a>
      </nav>
    </aside>
  )
}
