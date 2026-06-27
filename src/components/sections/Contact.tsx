import { useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.065 2.065 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

type ContactIcon = LucideIcon | typeof LinkedInIcon | typeof GitHubIcon

const links: { label: string; val: string; href: string; color: string; Icon: ContactIcon }[] = [
  { label:'Email', val:'islamaitkhdoja@gmail.com', href:'mailto:islamaitkhdoja@gmail.com', color:'from-violet-500 to-purple-500', Icon: Mail },
  { label:'LinkedIn', val:'Islam Ait Khodja', href:'https://www.linkedin.com/in/islam-ait-khodja-379a1023a/', color:'from-blue-500 to-sky-400', Icon: LinkedInIcon },
  { label:'GitHub', val:'islam00006', href:'https://github.com/islam00006', color:'from-slate-400 to-gray-300', Icon: GitHubIcon },
]

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return ref
}

function ContactLink({ label, val, href, color, Icon, className = '' }: typeof links[number] & { className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className={`group flex items-center gap-4 p-5 rounded-2xl bento-card ${className}`}>
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
        <Icon className="w-5 h-5" {...(Icon === Mail ? { strokeWidth: 2 } : {})} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-foreground truncate group-hover:gradient-text transition-all">{val}</p>
      </div>
      <svg className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
    </a>
  )
}

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-24 pb-32 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-violet-700 -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.1]" />

      <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase gradient-text-2">Contact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Let's Connect</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto leading-relaxed">
          Open to software engineering, project management, and technical leadership opportunities.
        </p>

        <div className="flex flex-col gap-4 text-left mb-12 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {links.slice(0, 2).map(l => (
              <ContactLink key={l.label} {...l} />
            ))}
          </div>
          <div className="flex justify-center">
            <ContactLink {...links[2]} className="w-full sm:w-[calc(50%-0.5rem)]" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-400 badge-pulse inline-block" />
          Based in <span className="text-foreground font-semibold ml-1 mr-1">Oran, Algeria</span> · Available for remote & on-site roles
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-muted-foreground mt-16 opacity-40">
        © 2025 Islam Ait Khodja · Information Systems & Software Engineering Graduate
      </p>
    </section>
  )
}
