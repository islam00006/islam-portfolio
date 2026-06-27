import { Briefcase, Users, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Leadership' },
  { value: '4+', label: 'Major events led' },
  { value: '5', label: 'Languages spoken' },
  { value: '2026', label: 'BSc graduation' },
]

const roles: { label: string; Icon: LucideIcon; pill: string; icon: string; glow: string }[] = [
  {
    label: 'Technical Project Manager',
    Icon: Briefcase,
    pill: 'border-violet-500/35 bg-violet-500/10 text-violet-300',
    icon: 'text-violet-400 bg-violet-500/20',
    glow: 'hover:shadow-violet-500/20',
  },
  {
    label: 'Community & Operations Manager',
    Icon: Users,
    pill: 'border-sky-500/35 bg-sky-500/10 text-sky-300',
    icon: 'text-sky-400 bg-sky-500/20',
    glow: 'hover:shadow-sky-500/20',
  },
  {
    label: 'Cybersecurity, Cloud & Networking Enthusiast',
    Icon: Shield,
    pill: 'border-emerald-500/35 bg-emerald-500/10 text-emerald-300',
    icon: 'text-emerald-400 bg-emerald-500/20',
    glow: 'hover:shadow-emerald-500/20',
  },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16 overflow-hidden">
      {/* Animated background orbs */}
      <div className="orb w-[600px] h-[600px] bg-violet-600 -top-40 -left-40" />
      <div className="orb orb-2 w-[500px] h-[500px] bg-sky-500 -bottom-40 right-0" />
      <div className="orb w-[300px] h-[300px] bg-emerald-500 top-1/2 left-1/2" style={{opacity:0.08}} />

      <div className="relative z-10 max-w-4xl">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 badge-pulse inline-block" />
          Open to Opportunities
        </div>

        {/* Name */}
        <h1 className="font-extrabold leading-tight tracking-tight mb-4 animate-fade-up-1">
          <span className="block text-5xl sm:text-7xl lg:text-8xl text-white pb-1">Islam</span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl gradient-text pb-2">Ait Khodja</span>
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-4 animate-fade-up-2">
          Information Systems & Software Engineering Graduate
        </p>

        <div className="flex flex-wrap gap-2.5 mb-6 animate-fade-up-2">
          {roles.map(({ label, Icon, pill, icon, glow }) => (
            <span
              key={label}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${pill} ${glow}`}
            >
              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full shrink-0 ${icon}`}>
                <Icon className="w-3.5 h-3.5" strokeWidth={2.25} />
              </span>
              {label}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-fade-up-3" style={{color:'rgba(148,163,184,0.9)'}}>
          Bridging engineering precision with people leadership. Passionate about
          Cybersecurity, Cloud Computing, Networking, and AI. Based in{' '}
          <span className="text-foreground font-medium">Oran, Algeria</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14 animate-fade-up-4">
          <a href="mailto:islamaitkhdoja@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-sky-500 text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-200 hover:-translate-y-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Get in Touch
          </a>
          <a href="https://github.com/islam00006" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-foreground font-semibold text-sm hover:bg-white/10 hover:border-violet-500/40 transition-all duration-200 hover:-translate-y-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/islam-ait-khodja-379a1023a/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-foreground font-semibold text-sm hover:bg-white/10 hover:border-sky-500/40 transition-all duration-200 hover:-translate-y-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up-4">
          {stats.map(s => (
            <div key={s.label} className="glass rounded-xl px-4 py-4 text-center">
              <div className="gradient-text font-extrabold text-2xl sm:text-3xl leading-none mb-1">{s.value}</div>
              <div className="text-muted-foreground text-xs font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
