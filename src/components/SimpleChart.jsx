import React from 'react'

export default function SimpleChart() {
  const data = [20, 35, 25, 40, 55, 50, 65]
  const w = 400, h = 120, pad = 8
  const max = Math.max(...data)
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * (w - pad * 2) + pad
    const y = h - ((d / max) * (h - pad * 2)) - pad
    return `${x},${y}`
  }).join(' ')

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="sparkline">
      <polyline points={points} fill="none" strokeWidth="3" strokeOpacity="0.9" />
      {data.map((d, i) => {
        const x = (i / (data.length - 1)) * (w - pad * 2) + pad
        const y = h - ((d / max) * (h - pad * 2)) - pad
        return <circle key={i} cx={x} cy={y} r={3} />
      })}
    </svg>
  )
}
