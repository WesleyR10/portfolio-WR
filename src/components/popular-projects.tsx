import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { portfolioProjects } from '@/utils/projects'

export const PopularProjects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const projects = portfolioProjects.slice(0, 5)

  return (
    <div className="bg-[url('/background/Desktop/fundoBoneco.png')] bg-cover py-10">
      <h2 className="mb-10 text-center text-3xl font-semibold text-white">
        Projetos Populares
      </h2>
      <div className="mb-8 flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-[1200px] 2xl:max-w-[1800px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 2xl:basis-1/3">
                <Card className="overflow-hidden rounded-2xl border border-[#CBACF9] bg-gradient-to-r from-[#01083A] to-[#000319]">
                  <CardContent className="flex h-full flex-col items-center justify-between p-6">
                    <div className="relative mb-4 h-[341px] w-full">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 text-blue-400 hover:text-blue-300"
                    >
                      Ver Projeto
                    </Link>
                    <div className="flex space-x-2">
                      {project.techIcons.map((tech, techIndex) => (
                        <tech.icon
                          key={techIndex}
                          className="h-6 w-6 text-white"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
            <CarouselItem className="pl-4 md:basis-1/2 2xl:basis-1/3">
              <Card className="overflow-hidden rounded-2xl border border-[#CBACF9] bg-gradient-to-r from-[#01083A] to-[#000319]">
                <CardContent className="flex h-full flex-col items-center justify-center p-6">
                  <div className="mb-4 flex h-[443px] w-full flex-col items-center justify-center">
                    <h3 className="mb-4 text-2xl font-semibold text-white">
                      Quer ver mais?
                    </h3>
                    <span className="text-center text-white">
                      Veja mais projetos e detalhes de sua construção e
                      funcionalidades.
                    </span>

                    <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <Link href="/projects">Veja todos os projetos</Link>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
