import { useState, useEffect } from 'react'

const links = [
  { id:'hero', label:'Home' },
  { id:'experience', label:'Experience' },
  { id:'skills', label:'Skills' },
  { id:'projects', label:'Projects' },
  { id:'education', label:'Education' },
  { id:'contact', label:'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs: IntersectionObserver[] = []
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(id) }, { threshold: 0.4 })
      o.observe(el)
      obs.push(o)
    })
    return () => obs.forEach(o => o.disconnect())
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop floating pill */}
      <header className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-500 ${scrolled ? 'scale-100' : 'scale-100'}`}>
        <nav className="nav-pill rounded-full px-2 py-2 flex items-center gap-1">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === id
                  ? 'bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-lg shadow-violet-500/25'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 nav-pill border-b border-white/5 px-5 py-3.5 flex items-center justify-between">
        <span className="gradient-text-2 font-bold text-sm">Islam Ait Khodja</span>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-muted-foreground hover:text-foreground p-1.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed top-[57px] left-0 right-0 z-40 nav-pill border-b border-white/5 py-3 px-5">
          {links.map(({ id, label }) => (
            <button key={id} onClick={() => go(id)}
              className={`w-full text-left py-2.5 text-sm font-medium transition-colors ${active===id ? 'text-violet-400' : 'text-muted-foreground'}`}>
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
