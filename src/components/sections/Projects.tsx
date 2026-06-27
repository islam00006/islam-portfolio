import { useEffect, useRef } from 'react'
import { School, Layers, ShieldCheck, BarChart3, Users, CalendarDays } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

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

const highlights: { Icon: LucideIcon; title: string; desc: string; color: string }[] = [
  { Icon: Layers, title:'Integrated Modules', desc:'Connected features for daily operations, staff workflows, and reporting', color:'text-violet-400' },
  { Icon: ShieldCheck, title:'Role-Based Access', desc:'Secure permissions tailored to administrators, educators, and staff', color:'text-sky-400' },
  { Icon: Users, title:'Profile Management', desc:'Centralized records for children, parents, and team members', color:'text-emerald-400' },
  { Icon: CalendarDays, title:'Planning & Coordination', desc:'Scheduling tools for events, activities, and operational planning', color:'text-cyan-400' },
  { Icon: BarChart3, title:'Analytics Dashboard', desc:'Insights into attendance, performance, and key operational metrics', color:'text-amber-400' },
]

export default function Projects() {
  const ref = useReveal()
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-sky-600 top-0 -left-40 opacity-[0.06]" />

      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase gradient-text-2">Projects</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-foreground mb-16">Built Work</h2>

        {/* Featured project card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/8 group"
          style={{background:'linear-gradient(145deg, rgba(124,58,237,0.06) 0%, rgba(14,165,233,0.06) 100%)'}}>
          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-400" />

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <School className="w-6 h-6 text-violet-400 shrink-0" strokeWidth={2} />
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 tracking-wider">Academic EoSP — 2026</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">Kindergarten Management System</h3>
                <p className="text-muted-foreground mt-1.5 font-medium">Full-Stack Developer & Project Lead</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              A multi-user web application for comprehensive childcare management, developed as an end-of-study project (EoSP).
              Built with a modular architecture, integrated modules, and role-based access control for distinct user roles.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {highlights.map(({ Icon, title, desc, color }) => (
                <div key={title} className="flex gap-3 p-4 rounded-xl bg-white/3 border border-white/6 hover:border-violet-500/25 hover:bg-violet-500/5 transition-all group/feat">
                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${color}`} strokeWidth={2} />
                  <div>
                    <p className="text-sm font-bold text-foreground">{title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/6">
              {['React.js','Node.js','Express.js','MySQL','Tailwind CSS','REST API','RBAC'].map(t => (
                <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground hover:border-sky-500/30 transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
