import { GlareCard } from '@/components/aceternity/glare-card'

import { skillsData } from './data'

export function GlareCardDemo() {
  return (
    <div className="flex w-full justify-center text-center text-white">
      <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillsData.map((skill, index) => (
          <GlareCard
            key={index}
            className="flex w-full flex-col items-center justify-center gap-1 p-1 xs:gap-3"
          >
            <span
              className="absolute top-10 text-cyan-500 transition-transform duration-300 hover:scale-110"
              aria-hidden="true"
            >
              {skill.icon}
            </span>
            <h3
              className="font-bold text-white xs:text-lg md:text-xl"
              aria-label={skill.title}
            >
              {skill.title}
            </h3>
            <p
              className="p-1 text-sm antialiased xs:p-2 xs:text-base"
              aria-label={skill.description}
            >
              {skill.description}
            </p>
          </GlareCard>
        ))}
      </div>
    </div>
  )
}
