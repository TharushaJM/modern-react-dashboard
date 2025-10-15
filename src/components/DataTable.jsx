import React from 'react'

const rows = [
  { id: 1, name: 'Aisha', email: 'aisha@gmail.com', date: '2025-10-10' },
  { id: 2, name: 'Bimal', email: 'bimal@gmail.com', date: '2025-10-12' },
  { id: 3, name: 'Chan', email: 'chandima@gmail.com', date: '2025-10-13' }
]

export default function DataTable() {
  return (
    <table className="data-table">
      <thead>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Joined</th></tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.id}>
            <td>{r.id}</td><td>{r.name}</td><td>{r.email}</td><td>{r.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
