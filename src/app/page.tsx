'use client'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa'
import { MdDownload } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import { SiLeetcode } from 'react-icons/si'
import { useMediaQuery } from 'react-responsive'

import Cube from '@/components/3D/cube'
import Developer, { DeveloperInstructions } from '@/components/3D/Developer'
import HeroCamera from '@/components/3D/Hero-camera'
import CanvasLoader from '@/components/3D/Loading'
import ReactLogo from '@/components/3D/React-logo'
import Rings from '@/components/3D/Rings'
import Target from '@/components/3D/Target'
import { TextHoverEffect } from '@/components/aceternity/text-hover'
import { EducationSection } from '@/components/education'
import { HeroSection } from '@/components/hero-section'
import { Navbar } from '@/components/menu-navbar'
import {
  calculateSizes,
  personalData,
  WorkExperience,
  workExperiences,
} from '@/constants'

export default function Home() {
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <div className="bg-slate-600">
      <HeroSection personalData={personalData} />

      <div className="flex">
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="relative col-span-1 rounded-lg border border-black-300">
            <DeveloperInstructions />
            <Canvas className="rounded-lg border border-black-300">
              <Suspense fallback={<CanvasLoader />}>
                <Leva hidden />
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <HeroCamera isMobile={isMobile}>
                  <Developer
                    scale={sizes.deskScale}
                    position={sizes.deskPosition}
                    rotation={[0.1, -Math.PI, 0]}
                  />
                </HeroCamera>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>
          </div>

          <div className="col-span-2 rounded-lg border border-black-300">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {workExperiences.map((item: WorkExperience) => (
                <div
                  key={item.id}
                  className="group grid cursor-pointer grid-cols-[auto_1fr] items-start gap-5 rounded-lg px-2.5 transition-all duration-500 ease-in-out hover:bg-black-300 sm:px-5"
                >
                  <div className="flex h-full flex-col items-center justify-start py-2">
                    <div className="h-16 w-16 rounded-3xl bg-slate-500 p-2">
                      <Image
                        className="h-full w-full rounded-3xl object-contain"
                        width={64}
                        height={64}
                        src={item.icon}
                        alt={`${item.name} logo`}
                      />
                    </div>

                    <div className="mt-4 h-full w-0.5 flex-1 bg-black-300 group-last:hidden group-hover:bg-black-500" />
                  </div>

                  <div className="px-2.5 py-5 sm:p-5">
                    <p className="text-white-800 font-bold">{item.name}</p>
                    <p className="mb-5 text-sm">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="transition-all duration-500 ease-in-out group-hover:text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <EducationSection />
    </div>
  )
}
