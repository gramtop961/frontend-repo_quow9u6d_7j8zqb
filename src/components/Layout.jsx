import React from 'react'

export default function Layout({ children, onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center text-xs font-bold">SF</div>
            <span className="font-semibold text-slate-900">Smart Finance</span>
          </div>
          <nav className="flex items-center gap-2">
            <button onClick={() => onNavigate('ai')} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100">AI Analysis</button>
            <button onClick={() => onNavigate('compare')} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100">Comparison</button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        {children}
      </main>
      <footer className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500">
        Numbers only. No investment advice.
      </footer>
    </div>
  )
}
