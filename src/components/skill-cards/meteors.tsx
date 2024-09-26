import React from 'react'

import { Meteors } from '@/components/aceternity/meteors-card'

import { skillsData } from './data'

export function MeteorsDemo() {
  return (
    <div className="grid grid-cols-1 gap-5 pb-24 pl-10 pr-10 pt-3 md:grid-cols-4">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="relative flex h-96 w-72 flex-col items-center justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-12 shadow-xl"
        >
          <span className="hover:text-blue-500">{skill.icon}</span>
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            {skill.title}
          </h1>
          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            {skill.description}
          </p>
          <Meteors number={20} />
        </div>
      ))}
    </div>
  )
}
