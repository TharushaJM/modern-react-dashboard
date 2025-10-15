import React from 'react'

export default function SummaryCard({ title, value }) {
  return (
    <div className="card summary-card">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
    </div>
  )
}
