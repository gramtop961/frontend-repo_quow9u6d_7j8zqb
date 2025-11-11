import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-sky-50 ring-1 ring-black/5">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-black/10 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          AI-powered insights for Saudi markets
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
          Understand numbers. Instantly.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Compare companies and sectors with clear ratios and AI that explains what matters — no jargon, no confusion.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button onClick={onPrimary} className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition-colors">
            Ask the AI
          </button>
          <button onClick={onSecondary} className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow ring-1 ring-black/10 hover:bg-slate-50 transition-colors">
            Compare ratios
          </button>
        </div>
      </div>
    </section>
  )
}
