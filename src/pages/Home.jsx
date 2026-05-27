import { useNavigate } from 'react-router-dom'
import OrcaLogo from '../components/OrcaLogo'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'radial-gradient(ellipse at 50% 0%, #38bdf8 0%, #0891b2 30%, #0c5070 60%, #0c2340 100%)' }}>
      {/* Hero section */}
      <div className="flex flex-col items-center pt-16 pb-10 px-6">
        <div className="mb-2">
          <OrcaLogo size={110} dark={false} />
        </div>
        <h1 className="text-4xl font-bold text-white tracking-tight mt-2">ORCA</h1>
        <p className="text-white/80 text-sm mt-1 tracking-wide">Oceanic Reference Catalogue for Awareness</p>
        <p className="text-white/60 text-xs mt-1">Your gateway to the ocean</p>
        <div className="w-full max-w-sm mt-8">
          <SearchBar />
        </div>
      </div>

      {/* Kingdom cards */}
      <div className="flex-1 rounded-t-3xl px-5 pt-8 pb-10" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
        <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4 text-center">Explore by Kingdom</p>
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <KingdomCard
            title="Animal Kingdom"
            subtitle="Fish, sharks, mammals, reptiles, invertebrates & coral"
            emoji="🐠"
            colors={{ from: '#0891b2', to: '#0e7490', shadow: '#0891b2' }}
            onClick={() => navigate('/kingdom/animal')}
          />
          <KingdomCard
            title="Plant Kingdom"
            subtitle="Seagrasses, mangroves, kelp & algae"
            emoji="🌿"
            colors={{ from: '#059669', to: '#047857', shadow: '#059669' }}
            onClick={() => navigate('/kingdom/plant')}
          />
        </div>
        <div className="mt-10 text-center">
          <p className="text-xs text-white/30">Built by Maahi — Marine and Beyond</p>
          <p className="text-xs text-white/30">ORCA v1.0</p>
        </div>
      </div>
    </div>
  )
}

function KingdomCard({ title, subtitle, emoji, colors, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-3xl p-6 text-left active:scale-95 transition-all"
      style={{
        background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
        boxShadow: `0 8px 32px ${colors.shadow}60`,
        border: '1px solid rgba(255,255,255,0.15)'
      }}
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <h2 className="text-white font-bold text-lg">{title}</h2>
      <p className="text-white/70 text-sm mt-1 leading-relaxed">{subtitle}</p>
      <div className="flex items-center gap-1 mt-4">
        <span className="text-white/80 text-xs font-medium">Explore</span>
        <svg className="w-3 h-3 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </button>
  )
}