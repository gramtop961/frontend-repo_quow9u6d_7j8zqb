import React, { useMemo, useState } from 'react'
import Hero from './components/Hero'
import Layout from './components/Layout'
import AISidebar from './components/AISidebar'
import AIInsights from './components/AIInsights'
import ComparisonDashboard from './components/ComparisonDashboard'

function App() {
  const [view, setView] = useState('ai')
  const [query, setQuery] = useState('SABIC profitability vs sector')
  const [loading, setLoading] = useState(false)
  const [insights, setInsights] = useState({ bullets: [], summary: '', tags: [] })

  const placeholderInsights = useMemo(() => ({
    summary:
      'SABIC shows resilient profitability with above-sector ROE driven by asset efficiency. Margins compressed slightly due to input costs, but leverage remains conservative, supporting stable cash flows.',
    bullets: [
      'ROE at 18.4% vs sector 13.2% — quality of earnings remains solid.',
      'Operating margin trend flat YoY; pricing pressures offset by cost controls.',
      'Debt/Equity at 0.42x provides headroom for growth without balance sheet risk.',
      'Valuation trades near sector median; upside tied to margin normalization.',
    ],
    tags: ['Profitability', 'Margins', 'Leverage', 'Valuation'],
  }), [])

  const askAI = async () => {
    setLoading(true)
    // For this design contest, we simulate an AI response with a short delay
    await new Promise((r) => setTimeout(r, 800))
    setInsights(placeholderInsights)
    setLoading(false)
  }

  return (
    <Layout onNavigate={setView}>
      <div className="space-y-8">
        <Hero onPrimary={() => setView('ai')} onSecondary={() => setView('compare')} />

        {view === 'ai' ? (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm min-h-[320px]">
              <AISidebar query={query} setQuery={setQuery} onAsk={askAI} loading={loading} />
            </div>

            <div className="lg:col-span-2 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm min-h-[320px]">
              <AIInsights title="AI analysis" bullets={(insights.bullets.length ? insights.bullets : placeholderInsights.bullets)} summary={(insights.summary || placeholderInsights.summary)} tags={(insights.tags.length ? insights.tags : placeholderInsights.tags)} />
            </div>
          </section>
        ) : (
          <section className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-4 sm:p-6">
            <ComparisonDashboard />
          </section>
        )}
      </div>
    </Layout>
  )
}

export default App
