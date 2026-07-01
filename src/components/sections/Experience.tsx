import { useEffect, useRef } from 'react'

const experiences = [
  {
    title: 'HR Lead',
    period: 'Aug – Oct 2025',
    tag: 'Leadership',
    color: 'from-violet-500 to-purple-400',
    tagStyle: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    bullets: [
      'Led the Human Resources team; coordinated all member activities.',
      'Managed full recruitment cycle: sourcing, onboarding, and engagement.',
      'Organized technical & community events across departments.',
      'Monitored task progress and ensured timely project delivery.',
    ],
  },
  {
    title: 'Core Team Member — Human Resources',
    period: 'Oct 2024 – Aug 2025',
    tag: 'Community',
    color: 'from-sky-500 to-cyan-400',
    tagStyle: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    bullets: [
      'Planned and organized community events and technical workshops.',
      'Assisted in recruiting, onboarding, and supporting new members.',
      'Collaborated with cross-functional teams on multiple initiatives.',
      'Maintained team documentation and internal processes.',
    ],
  },
  {
    title: 'Event Organizer & Team Lead',
    period: 'Ongoing',
    tag: 'Events',
    color: 'from-emerald-500 to-teal-400',
    tagStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    bullets: [
      'Led multidisciplinary teams for large-scale technology events.',
      'Coordinated logistics, volunteer management, and cross-team comms.',
      'Liaised with sponsors, speakers, and external partners.',
      'Managed planning timelines, task delegation, and on-site ops.',
    ],
    chips: ['Oraduino 2025', 'Oranovia 2025', 'Huawei ICT Promotion 2024'],
  },
  {
    title: 'Freelance Technical Project Specialist',
    period: 'Ongoing',
    tag: 'Freelance',
    color: 'from-amber-500 to-orange-400',
    tagStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    bullets: [
      'Planned and managed digital & technical projects end-to-end.',
      'Coordinated clients, designers, and developers for timely execution.',
      'Defined project scope, timelines, and measurable deliverables.',
      'Maintained quality standards and client satisfaction throughout.',
    ],
  },
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

export default function Experience() {
  const ref = useReveal()
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-20 py-24 relative">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase gradient-text-2">Experience</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-foreground mb-16">Professional History</h2>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-card p-6 md:p-8 relative overflow-hidden group">
              {/* Gradient left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color} rounded-l-xl opacity-70 group-hover:opacity-100 transition-opacity`} />

              <div className="flex flex-wrap items-start gap-3 mb-4 pl-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-foreground leading-tight">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5 font-medium">{exp.period}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${exp.tagStyle} shrink-0`}>{exp.tag}</span>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pl-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r shrink-0" style={{background:'linear-gradient(135deg,#a78bfa,#38bdf8)'}} />
                    {b}
                  </li>
                ))}
              </ul>

              {exp.chips && (
                <div className="flex flex-wrap gap-2 mt-5 pl-2 pt-4 border-t border-white/5">
                  {exp.chips.map(c => (
                    <span key={c} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/8 text-muted-foreground font-medium">{c}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
