import { useEffect, useRef } from 'react'
import { GraduationCap } from 'lucide-react'

const languages = [
  { name:'Kabyle', level:'Mother Tongue', pct:100, color:'from-violet-500 to-purple-400' },
  { name:'Arabic', level:'Native', pct:100, color:'from-sky-500 to-cyan-400' },
  { name:'English', level:'Fluent', pct:88, color:'from-emerald-500 to-teal-400' },
  { name:'French', level:'Intermediate', pct:60, color:'from-amber-500 to-orange-400' },
  { name:'German', level:'Beginner', pct:20, color:'from-rose-500 to-pink-400' },
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

export default function Education() {
  const ref = useReveal()
  return (
    <section id="education" className="px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-emerald-600 bottom-0 right-10 opacity-[0.07]" />

      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase gradient-text-2">Education & Languages</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-foreground mb-16">Background</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education card */}
          <div className="bento-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-sky-400 opacity-60" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
              style={{background:'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(14,165,233,0.2))',border:'1px solid rgba(124,58,237,0.3)'}}>
              <GraduationCap className="w-7 h-7 text-violet-400" strokeWidth={2} />
            </div>
            <h3 className="font-extrabold text-lg text-foreground leading-tight mb-1">
              B.Sc. Information Systems &amp; Software Engineering
            </h3>
            <p className="text-muted-foreground text-sm mb-1">University of Science and Technology of Oran</p>
            <p className="text-muted-foreground text-sm">Mohamed Boudiaf — USTOMB, Algeria</p>
            <div className="mt-5 pt-5 border-t border-white/6 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Full-Time</span>
              <span className="gradient-text font-bold text-sm">2023 – 2026</span>
            </div>
          </div>

          {/* Languages card */}
          <div className="bento-card p-8">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">Languages</p>
            <div className="space-y-5">
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm text-foreground">{lang.name}</span>
                    <span className="text-xs text-muted-foreground font-medium">{lang.level}</span>
                  </div>
                  <div className="h-1.5 bg-white/6 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000`}
                      style={{ width:`${lang.pct}%`, transitionDelay:`${i*100}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
