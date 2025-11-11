import React from 'react'

export default function AISidebar({ query, setQuery, onAsk, loading }) {
  return (
    <div className="h-full w-full p-4 sm:p-6">
      <div className="space-y-3">
        <label className="block text-xs font-medium text-slate-500">Ask about a company or sector</label>
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., SABIC vs sector margins"
            className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            onClick={onAsk}
            disabled={loading || !query}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Ask'}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
          <button className="rounded-md border border-slate-200 px-2 py-2 text-left hover:bg-slate-50">Profitability</button>
          <button className="rounded-md border border-slate-200 px-2 py-2 text-left hover:bg-slate-50">Leverage</button>
          <button className="rounded-md border border-slate-200 px-2 py-2 text-left hover:bg-slate-50">Valuation</button>
          <button className="rounded-md border border-slate-200 px-2 py-2 text-left hover:bg-slate-50">Efficiency</button>
        </div>
      </div>
    </div>
  )
}
