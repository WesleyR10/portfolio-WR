import { GlareCard } from '@/components/aceternity/glare-card'

import { skillsData } from './data'

export function GlareCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-5 pb-24 pl-4 pr-4 pt-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((skill, index) => (
        <GlareCard
          key={index}
          className="relative flex flex-col items-center justify-center gap-3 p-3"
        >
          <span
            className="text-cyan-500 transition-transform duration-300 hover:scale-110 md:absolute md:top-12"
            aria-hidden="true"
          >
            {skill.icon}
          </span>
          <h3 className="text-xl font-bold text-white" aria-label={skill.title}>
            {skill.title}
          </h3>
          <p className="antialiased md:text-lg" aria-label={skill.description}>
            {skill.description}
          </p>
        </GlareCard>
      ))}
    </div>
  )
}
