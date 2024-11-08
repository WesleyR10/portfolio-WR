'use client'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import Card from '@/components/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { portfolioProjects } from '@/utils/projects'

import { CustomCursor } from './cursor'

export const ProjectsSection = () => {
  const [maxStack, setMaxStack] = useState(3)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobile(false)
        setMaxStack(3)
      } else if (window.innerWidth >= 1024) {
        setIsMobile(false)
        setMaxStack(2)
      } else {
        setIsMobile(true)
        setMaxStack(0)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <CustomCursor />
      <section
        className="bg-[url('/background/Desktop/fundoBoneco.png')] bg-cover py-20 lg:py-28"
        id="projects"
      >
        <div className="container">
          <h2 className="mt-6 text-center font-serif text-3xl text-white md:text-5xl">
            Projetos em destaque
          </h2>
          <p className="mx-auto my-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
            Veja como transformei ideias em experiências digitais envolventes
          </p>
          <div className="mt-10 flex flex-col gap-20 md:mt-20">
            {portfolioProjects.map((project, index) => (
              <Card
                key={project.title}
                className="sticky min-h-[795px] px-8 pb-0 pt-8 lg:min-h-[770px] lg:px-16 lg:pt-16"
                style={{
                  top: isMobile
                    ? '16px'
                    : `calc(16px + ${Math.min(index, maxStack) * 30}px)`,
                }}
              >
                <div
                  className={`${project.image ? 'lg:grid lg:grid-cols-2 lg:gap-16' : 'flex flex-col items-center'}`}
                >
                  <div
                    className={`${project.image ? 'lg:pb-12' : 'pb-16 text-center'}`}
                  >
                    <div className="inline-flex gap-2 bg-black bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="mt-2 font-serif tracking-widest md:text-4xl lg:mt-5">
                      {project.title}
                    </h3>
                    <hr className="mt-2 border-t-2 border-white/5 lg:mt-5" />
                    <ul className="mt-2 flex flex-col gap-1 lg:mt-4 lg:gap-4">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="mt-2 flex items-center gap-2 text-sm text-white/50 md:text-base lg:mt-5"
                        >
                          <CircleCheck className="flex-shrink-0" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 font-semibold text-gray-950 md:w-auto lg:mt-8 lg:h-12 lg:px-6">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-6" />
                      </button>
                    </a>
                    <ul
                      className={`mt-2 flex lg:mt-8 ${project.image ? 'justify-end' : 'justify-center'}`}
                    >
                      {project?.techIcons?.map((icon, index) => (
                        <li key={index}>
                          {icon.icon ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div>
                                    {React.createElement(icon.icon, {
                                      className: 'size-6 lg:size-8 mr-2',
                                    })}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <span>{icon.alt}</span>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ) : (
                            <span>Imagem não encontrada</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.image && (
                    <div className="">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="-mb-4 mt-4 rounded-xl md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{ objectFit: 'contain', maxWidth: '100%' }}
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
