import { useEffect, useRef } from 'react'
import {
  Atom, Hexagon, Zap, Database, Wind, GitBranch, Terminal,
  Shield, Cloud, Network, Brain,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const techStack: { name: string; Icon: LucideIcon; color: string }[] = [
  { name:'React.js', Icon: Atom, color:'text-sky-400' },
  { name:'Node.js', Icon: Hexagon, color:'text-emerald-400' },
  { name:'Express.js', Icon: Zap, color:'text-yellow-400' },
  { name:'MySQL', Icon: Database, color:'text-blue-400' },
  { name:'Tailwind CSS', Icon: Wind, color:'text-cyan-400' },
  { name:'Git', Icon: GitBranch, color:'text-orange-400' },
  { name:'Linux', Icon: Terminal, color:'text-violet-400' },
]

const technical = [
  'Software Development','Web Development','Database Management',
  'Version Control','Linux Sysadmin','IT Support',
  'System Analysis & Design','Business Process Analysis','Workflow Design',
  'RBAC / Role-Permission Management','AI Fundamentals','Cybersecurity Fundamentals',
  'Networking Fundamentals','Requirements Gathering','Org Hierarchy Design',
]

const leadership = [
  'Team Leadership','Project Management','Team Coordination',
  'Community Management','Event Planning','Workshop Organization',
  'Technical Documentation','Problem Solving','Critical Thinking',
  'Communication','Time Management','Adaptability',
]

const interests: { name: string; Icon: LucideIcon; color: string }[] = [
  { name:'Cybersecurity', Icon: Shield, color:'text-violet-400' },
  { name:'Cloud Computing', Icon: Cloud, color:'text-sky-400' },
  { name:'Networking', Icon: Network, color:'text-emerald-400' },
  { name:'Artificial Intelligence', Icon: Brain, color:'text-cyan-400' },
]

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.disconnect() }
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-violet-700 -top-20 right-0 opacity-[0.07]" />

      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase gradient-text-2">Skills</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-foreground mb-16">Capabilities</h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

          {/* Tech Stack — spans 2 cols */}
          <div className="bento-card md:col-span-2 p-6">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map(({ name, Icon, color }) => (
                <div key={name} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group cursor-default">
                  <Icon className={`w-4 h-4 shrink-0 ${color}`} strokeWidth={2} />
                  <span className={`text-sm font-semibold ${color}`}>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bento-card p-6" style={{background:'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(14,165,233,0.08) 100%)'}}>
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Interests</p>
            <div className="space-y-3">
              {interests.map(({ name, Icon, color }) => (
                <div key={name} className="flex items-center gap-3 group">
                  <Icon className={`w-5 h-5 shrink-0 ${color}`} strokeWidth={2} />
                  <span className="text-sm font-semibold text-foreground group-hover:gradient-text transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bento-card p-6 md:col-span-2">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Technical Skills</p>
            <div className="flex flex-wrap gap-2">
              {technical.map(s => (
                <span key={s} className="skill-tag text-sm font-medium px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground">{s}</span>
              ))}
            </div>
          </div>

          {/* Leadership skills */}
          <div className="bento-card p-6">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Leadership</p>
            <div className="space-y-2">
              {leadership.map(s => (
                <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default group">
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-violet-400 to-sky-400 shrink-0 group-hover:scale-150 transition-transform" />
                  {s}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
