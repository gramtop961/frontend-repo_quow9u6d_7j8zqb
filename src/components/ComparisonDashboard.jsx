import React from 'react'

const Stat = ({ label, value, delta }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="text-xs text-slate-500">{label}</div>
    <div className="mt-1 flex items-baseline gap-2">
      <div className="text-xl font-semibold text-slate-900">{value}</div>
      {delta && (
        <span className={`text-xs font-medium ${delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
          {delta > 0 ? '+' : ''}{delta}% vs sector
        </span>
      )}
    </div>
  </div>
)

const PlaceholderChart = ({ title }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mb-2 text-sm font-medium text-slate-700">{title}</div>
    <div className="h-40 w-full rounded-md bg-gradient-to-br from-sky-50 to-indigo-50 grid grid-cols-12 items-end gap-1 p-2">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="bg-sky-400/60 rounded" style={{ height: `${20 + (i % 6) * 12}%` }} />
      ))}
    </div>
  </div>
)

export default function ComparisonDashboard() {
  const stats = [
    { label: 'ROE', value: '18.4%', delta: 5.2 },
    { label: 'Net Margin', value: '12.1%', delta: -1.3 },
    { label: 'Debt/Equity', value: '0.42x', delta: 8.0 },
    { label: 'P/E', value: '16.3x', delta: -10.2 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Stat key={i} {...s} />
        ))}
      </div>
      <div className="lg:col-span-1 grid grid-cols-1 gap-4">
        <PlaceholderChart title="Revenue vs Sector (YoY)" />
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PlaceholderChart title="Margins (%)" />
        <PlaceholderChart title="Valuation Multiples" />
      </div>
    </div>
  )
}
