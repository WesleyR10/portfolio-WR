'use client'

import { LampContainer } from '@/components/aceternity/lamp'
import { DockerSvg } from '@/components/svg_animation/docker'
import { GitSvg } from '@/components/svg_animation/git'
import { JavascriptSvg } from '@/components/svg_animation/javascript'
import { MongoDbSvg } from '@/components/svg_animation/mongodb'
import { NestjsSvg } from '@/components/svg_animation/nestjs'
import { NextJsSvg } from '@/components/svg_animation/nextjs'
import { NodeJsSvg } from '@/components/svg_animation/nodejs'
import { PostgresqlSvg } from '@/components/svg_animation/postgresql'
import { ReactSvg } from '@/components/svg_animation/react'
import { TailwindSvg } from '@/components/svg_animation/tailwind'

interface SvgProps {
  onSvgClick: (desc: {
    title: string
    description: string
    softSkills: string
    color: string | undefined
  }) => void
}

const technologies = [
  {
    Component: JavascriptSvg,
    title: 'JavaScript',
    description:
      'JavaScript é uma linguagem de programação usada para criar interatividade em sites.',
    softSkills: 'Lógica de Programação, Criatividade',
    color: 'rgba(255, 223, 0, 1)',
  },
  {
    Component: GitSvg,
    title: 'Git',
    description: 'Git é um sistema de controle de versão distribuído.',
    softSkills: 'Colaboração, Organização',
    color: 'rgb(240,80,51)',
  },
  {
    Component: ReactSvg,
    title: 'React',
    description:
      'React é uma biblioteca JavaScript para construir interfaces de usuário.',
    softSkills: 'Componentização, Reutilização de Código',
    color: 'rgb(97,218,251)',
  },
  {
    Component: NextJsSvg,
    title: 'Next.js',
    description: 'Next.js é um framework React para produção.',
    softSkills: 'Desempenho, SEO',
    color: 'rgb(207,207,207)',
  },
  {
    Component: TailwindSvg,
    title: 'Tailwind CSS',
    description: 'Tailwind CSS é um framework CSS utilitário.',
    softSkills: 'Design Responsivo, Produtividade',
    color: 'rgb(56,189,248)',
  },
  {
    Component: MongoDbSvg,
    title: 'MongoDB',
    description: 'MongoDB é um banco de dados NoSQL orientado a documentos.',
    softSkills: 'Modelagem de Dados, Escalabilidade',
    color: 'rgb(102,187,106)',
  },
  {
    Component: PostgresqlSvg,
    title: 'PostgreSQL',
    description:
      'PostgreSQL é um sistema de gerenciamento de banco de relacional.',
    softSkills: 'Integridade de Dados, Consultas Complexas',
    color: 'rgb(49,99,140)',
  },
  {
    Component: NodeJsSvg,
    title: 'Node.js',
    description: 'Node.js é um ambiente de execução JavaScript server-side.',
    softSkills: 'Desenvolvimento Backend, Escalabilidade',
    color: 'rgb(102,187,106)',
  },
  {
    Component: NestjsSvg,
    title: 'NestJS',
    description:
      'NestJS é um framework Node.js para construir aplicativos do lado do servidor.',
    softSkills: 'Arquitetura, Modularidade',
    color: 'rgb(224,35,78)',
  },
  {
    Component: DockerSvg,
    title: 'Docker',
    description:
      'Docker é uma plataforma para desenvolver, enviar e executar aplicativos em contêineres.',
    softSkills: 'DevOps, Automação',
    color: 'rgb(0,123,255)',
  },
]

export const Svg = ({ onSvgClick }: SvgProps) => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-4 p-8 md:grid-cols-3 lg:grid-cols-4">
      {technologies.map(
        ({ Component, title, description, softSkills, color }) => (
          <Component
            key={title}
            className="h-20 w-20"
            onClick={() =>
              onSvgClick({ title, description, softSkills, color })
            }
          />
        )
      )}
    </div>
  )
}
