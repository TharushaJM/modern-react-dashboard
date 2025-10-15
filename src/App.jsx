import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import SummaryCard from './components/SummaryCard'
import SimpleChart from './components/SimpleChart'
import DataTable from './components/DataTable'

export default function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-frame">
        <Topbar />
        <main className="content-grid">
          <section className="summary-row">
            <SummaryCard title="Active Users" value="1,234" />
            <SummaryCard title="Errors" value="7" />
            <SummaryCard title="Uptime" value="99.98%" />
          </section>

          <section className="charts-row">
            <div className="card chart-card">
              <h3>Traffic (last 7 days)</h3>
              <SimpleChart />
            </div>

            <div className="card table-card">
              <h3>Recent Signups</h3>
              <DataTable />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
