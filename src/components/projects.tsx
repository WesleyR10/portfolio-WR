'use client'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import Card from '@/components/Card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { portfolioProjects } from '@/utils/projects'

export const ProjectsSection = () => {
  return (
    <section className="bg-gray-800 py-20 lg:py-28" id="projects">
      <div className="container">
        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
          Projetos em destaque
        </h2>
        <p className="mx-auto my-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
          Veja como transformei ideias em experiências digitais envolventes
        </p>
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div
                className={`${project.image ? 'lg:grid lg:grid-cols-2 lg:gap-16' : 'flex flex-col items-center'}`}
              >
                <div
                  className={`${project.image ? 'lg:pb-16' : 'pb-16 text-center'}`}
                >
                  <div className="inline-flex gap-2 bg-black bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif tracking-widest md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                  <ul className="mt-4 flex flex-col gap-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="mt-4 flex items-center gap-2 text-sm text-white/50 md:mt-5 md:text-base"
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
                    <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-6" />
                    </button>
                  </a>
                  <ul
                    className={`mt-8 flex ${project.image ? 'justify-end' : 'justify-center'}`}
                  >
                    {project?.techIcons?.map((icon, index) => (
                      <li key={index}>
                        {icon.icon ? (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div>
                                  {React.createElement(icon.icon, {
                                    className: 'size-8 mr-2',
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
                      className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none lg:rounded-xl"
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
  )
}
