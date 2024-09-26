'use client'

import { useState } from 'react'

import { LampContainer } from '@/components/aceternity/lamp'
import { CustomCursor } from '@/components/cursor'
import { GlareCardDemo } from '@/components/skill-cards/glare-card'
import { MeteorsDemo } from '@/components/skill-cards/meteors'
import { Svg } from '@/components/svg_animation'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

interface Description {
  title: string
  description: string
  softSkills: string
  color?: string
}

export default function Skills() {
  const [description, setDescription] = useState<Description | null>(null)
  const [softSkills, setSoftSkills] = useState(false)

  const handleSvgClick = (desc: Description) => {
    setDescription(desc)
  }

  const handleSwitchChange = () => {
    setSoftSkills(!softSkills)
  }

  console.log('softSkills', softSkills)
  return (
    <>
      <CustomCursor />
      <div className="flex min-h-screen flex-col justify-between bg-[#1E293B]">
        <div>
          <div className="mb-5 flex items-center justify-center gap-5">
            <Label htmlFor="technology" className="text-white">
              Tecnologias
            </Label>
            <Switch onCheckedChange={handleSwitchChange} />
            <Label htmlFor="soft-skills" className="text-white">
              Soft Skills
            </Label>
          </div>
          {softSkills ? <GlareCardDemo /> : <Svg onSvgClick={handleSvgClick} />}
        </div>
        {!softSkills && description && (
          <LampContainer color={description.color}>
            <div className="px-4 text-center text-white">
              <h2 className="text-2xl font-bold">{description.title}</h2>
              <p className="mt-2 text-justify">{description.description}</p>
              <p className="mt-2 text-justify">
                <strong>Soft Skills:</strong> {description.softSkills}
              </p>
            </div>
          </LampContainer>
        )}
      </div>
    </>
  )
}
