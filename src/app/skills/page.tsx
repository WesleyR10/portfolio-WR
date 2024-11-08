'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import { CustomCursor } from '@/components/cursor'
import { GlareCardDemo } from '@/components/skill-cards/glare-card'
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
      <div className="flex min-h-screen flex-col justify-between bg-[url('/background/Desktop/fundoBoneco.png')] bg-cover">
        <div className="flex-1">
          <div className="my-5 flex items-center justify-center gap-5">
            <Label htmlFor="technology" className="text-white">
              Tecnologias
            </Label>
            <Switch onCheckedChange={handleSwitchChange} />
            <Label htmlFor="soft-skills" className="text-white">
              Soft Skills
            </Label>
          </div>
          <div className="mb-8">
            {softSkills ? (
              <GlareCardDemo />
            ) : (
              <Svg onSvgClick={handleSvgClick} />
            )}
          </div>

          {!softSkills && description && (
            <div className="mx-auto mt-16 w-full max-w-3xl px-4 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl"
                style={{
                  boxShadow: `0 0 20px ${description.color}20`,
                }}
              >
                <div className="relative z-10">
                  <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-white">
                    {description.title}
                  </h2>
                  <p className="mb-4 text-justify leading-relaxed text-white/90">
                    {description.description}
                  </p>
                  <p className="text-justify leading-relaxed text-white/90">
                    <strong className="text-white">Soft Skills:</strong>{' '}
                    {description.softSkills}
                  </p>
                </div>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at center, ${description.color}30 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            </div>
          )}
        </div>

        {/* LampContainer comentado temporariamente
        {!softSkills && description && (
          <LampContainer color={description.color}>
            <div className="text-white">
              <h2 className="mb-4 text-center text-2xl font-bold tracking-tight">
                {description.title}
              </h2>
              <p className="mb-4 text-justify leading-relaxed text-white/90">
                {description.description}
              </p>
              <p className="text-justify leading-relaxed text-white/90">
                <strong className="text-white">Soft Skills:</strong> {description.softSkills}
              </p>
            </div>
          </LampContainer>
        )} */}
      </div>
    </>
  )
}
