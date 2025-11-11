import React from 'react'

export default function AIInsights({ title = 'AI Insights', bullets = [], summary = '', tags = [] }) {
  return (
    <div className="h-full w-full p-4 sm:p-6 overflow-auto">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {summary && (
          <p className="text-sm leading-6 text-slate-700 bg-slate-50 rounded-lg p-3">
            {summary}
          </p>
        )}
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm text-slate-800 flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((t, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
