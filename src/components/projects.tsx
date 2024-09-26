'use client'
import { CircleCheck } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

import DockerIcon from '/public/icons/docker.svg'
import FastifyIcon from '/public/icons/fastify.svg'
import HonoIcon from '/public/icons/hono.svg'
import JestIcon from '/public/icons/jest.svg'
import NextjsIcon from '/public/icons/nextjs.svg'
import NodeIcon from '/public/icons/node.svg'
import OpenaiIcon from '/public/icons/openAi.svg'
import PrismaIcon from '/public/icons/prisma.svg'
import ReactIcon from '/public/icons/react.svg'
import ReactHookFormIcon from '/public/icons/react-hook-form.svg'
import StripeIcon from '/public/icons/stripe.svg'
import TailwindIcon from '/public/icons/tailwind.svg'
import TypescriptIcon from '/public/icons/typescript.svg'
import ZodIcon from '/public/icons/zod.svg'
import financeWr from '/public/projects/finance-wr.png'
import fuzzie from '/public/projects/fuzzie.png'
import intelliGuide from '/public/projects/intelli-guide.jpeg'
import meetflow from '/public/projects/meetflow.jpg'
import nextjsSaasRbac from '/public/projects/Next-Saas.png'
import uploadia from '/public/projects/NLW_IA.png'
import pizzaShop from '/public/projects/pizza-shop.png'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import Card from '@/components/Card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface TechIcon {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  alt: string
}

interface ProjectResult {
  title: string
}

interface PortfolioProject {
  company: string
  year: string
  title: string
  results: ProjectResult[]
  link: string
  image?: string | StaticImageData
  techIcons: TechIcon[]
}

const portfolioProjects: PortfolioProject[] = [
  {
    company: 'Finance WR',
    year: '2024',
    title: 'Finance-Wr',
    results: [
      {
        title:
          'Gerenciamento de Contas: Os usuários podem adicionar e gerenciar várias contas',
      },
      {
        title:
          'Resumo Financeiro: O aplicativo fornece um resumo financeiro para ajudar os usuários a entenderem melhor sua situação financeira.',
      },
      {
        title:
          'Filtro de Data: Os usuários podem filtrar transações por datas específicas para uma análise mais detalhada.',
      },
    ],
    link: 'https://finance-wr.vercel.app/',
    image: financeWr,
    techIcons: [
      {
        icon: NextjsIcon,
        alt: 'Nextjs',
      },
      {
        icon: ZodIcon,
        alt: 'Zod',
      },
      {
        icon: TypescriptIcon,
        alt: 'Typescript',
      },
      {
        icon: HonoIcon,
        alt: 'Hono',
      },
    ],
  },
  {
    company: 'IntelliGuide',
    year: '2024',
    title: 'IntelliGuide',
    results: [
      {
        title:
          'Quizzes Interativos: Participe de quizzes interativos e desafiadores para testar e aprimorar seus conhecimentos.',
      },
      {
        title:
          'Envio de Email: Utilizamos o Nodemailer para envio de emails, facilitando a comunicação com os usuários da plataforma.',
      },
      {
        title:
          'Autenticação Completa: Implementamos autenticação segura utilizando NextAuth.js, permitindo login com Google e GitHub.',
      },
      {
        title:
          'Autenticação Completa: Implementamos autenticação segura utilizando NextAuth.js, permitindo login com Google e GitHub.',
      },
    ],
    link: 'https://intelli-guide-pi.vercel.app',
    image: intelliGuide,
    techIcons: [
      {
        icon: NextjsIcon,
        alt: 'Nextjs',
      },
      {
        icon: PrismaIcon,
        alt: 'Prisma',
      },
      {
        icon: StripeIcon,
        alt: 'Stripe',
      },
      {
        icon: TailwindIcon,
        alt: 'Tailwind',
      },
      {
        icon: ZodIcon,
        alt: 'Zod',
      },
      {
        icon: TypescriptIcon,
        alt: 'Typescript',
      },
    ],
  },
  {
    company: 'MeetFlow',
    year: '2024',
    title: 'MeetFlow',
    results: [
      {
        title:
          'Agende serviços facilmente com MeetFlow, escolhendo horários e profissionais disponíveis em poucos cliques.',
      },
      {
        title:
          'Integração com Google: Para autenticação de usuários e sincronização com o Google Agenda.',
      },
      {
        title:
          'Integração com Cloudflare: Para um gerenciamento eficiente e seguro de imagens.',
      },
      {
        title:
          'Dashboard do Profissional: Gerencie serviços, disponibilidade e agendamentos de forma eficiente através do dashboard.',
      },
    ],
    link: 'www.meetflow.tech',
    image: meetflow,
    techIcons: [
      {
        icon: ReactIcon,
        alt: 'React',
      },
      {
        icon: TailwindIcon,
        alt: 'Tailwind',
      },
      {
        icon: PrismaIcon,
        alt: 'Prisma',
      },
      {
        icon: TypescriptIcon,
        alt: 'Typescript',
      },
    ],
  },
  {
    company: 'Fuzzie-WR',
    year: '2024',
    title: 'Fuzzie-WR',
    results: [
      {
        title:
          'Conexão com Google Drive: Integre facilmente o Google Drive à sua conta Fuzzie para acessar e gerenciar arquivos diretamente na plataforma.',
      },
      {
        title:
          'Conexão com Google Drive: Integre facilmente o Google Drive à sua conta Fuzzie para acessar e gerenciar arquivos diretamente na plataforma.',
      },
      {
        title:
          'Criação de Fluxos de Automação: Desenvolva sequências de ações que são acionadas por eventos específicos, permitindo a automação de tarefas complexas.',
      },
      {
        title:
          'Construtor de Nós de Arrastar e Soltar: Crie fluxos de automação arrastando e soltando elementos em uma tela infinita.',
      },
    ],
    link: 'https://github.com/WesleyR10/Fuzzie-WR',
    image: fuzzie,
    techIcons: [
      {
        icon: NextjsIcon,
        alt: 'Nextjs',
      },
      {
        icon: PrismaIcon,
        alt: 'Prisma',
      },
      {
        icon: TailwindIcon,
        alt: 'Tailwind',
      },
      {
        icon: ZodIcon,
        alt: 'Zod',
      },
      {
        icon: StripeIcon,
        alt: 'Stripe',
      },
      {
        icon: TypescriptIcon,
        alt: 'Typescript',
      },
    ],
  },
  {
    company: 'UploadIA',
    year: '2024',
    title: 'UploadIA',
    results: [
      {
        title:
          'Geração de títulos: Crie títulos atraentes e otimizados para SEO automaticamente.',
      },
      {
        title:
          'Criação de descrições: Produza descrições detalhadas e envolventes para seus vídeos.',
      },
      {
        title:
          'Otimização para plataformas: Adapte seu conteúdo para diferentes plataformas de vídeo online.',
      },
      {
        title:
          'Interface intuitiva: Simplifique o processo de criação de conteúdo com uma ferramenta fácil de usar.',
      },
    ],
    link: 'https://github.com/WesleyR10/Pizza.shop',
    image: uploadia,
    techIcons: [
      {
        icon: ReactIcon,
        alt: 'React',
      },
      {
        icon: TailwindIcon,
        alt: 'Tailwind',
      },
      {
        icon: OpenaiIcon,
        alt: 'OpenAi',
      },
      {
        icon: NodeIcon,
        alt: 'Node',
      },
      {
        icon: TypescriptIcon,
        alt: 'Typescript',
      },
    ],
  },
  {
    company: 'Next.js SaaS + RBAC',
    year: '2024',
    title: 'Multi-tenant SaaS Boilerplate',
    results: [
      {
        title:
          'Autenticação: Suporta email/senha, GitHub e recuperação de senha.',
      },
      {
        title:
          'Organizações: Crie, gerencie e transfira a propriedade de organizações.',
      },
      {
        title:
          'RBAC: Implementa Controle de Acesso Baseado em Funções com permissões granulares.',
      },
      {
        title:
          'Permissões: Utiliza CASL para implementar um sistema flexível de autorização.',
      },
    ],
    link: 'https://github.com/YourUsername/nextjs-saas-rbac',
    image: nextjsSaasRbac,
    techIcons: [
      {
        icon: NextjsIcon,
        alt: 'Next.js',
      },
      {
        icon: TypescriptIcon,
        alt: 'TypeScript',
      },
      {
        icon: PrismaIcon,
        alt: 'Prisma',
      },
      {
        icon: TailwindIcon,
        alt: 'Tailwind CSS',
      },
      {
        icon: FastifyIcon,
        alt: 'Fastify',
      },
      {
        icon: ZodIcon,
        alt: 'Zod',
      },
    ],
  },
  {
    company: 'Measure-Shopper-Api',
    year: '2024',
    title: 'Measure-Shopper-Api',
    results: [
      {
        title:
          'Leitura de Medidores: Utiliza IA para interpretar fotos de medidores de água e gás.',
      },
      {
        title:
          'Integração com Google Gemini: Aproveita a API do Google Gemini para processamento de imagens.',
      },
      {
        title:
          'Arquitetura DDD: Implementa Domain-Driven Design para uma estrutura modular e organizada.',
      },
      {
        title:
          'Testes Automatizados: Inclui testes unitários e E2E para garantir a qualidade do código.',
      },
    ],
    link: 'https://github.com/WesleyR10/Measure-Shopper-Api',
    techIcons: [
      {
        icon: NodeIcon,
        alt: 'Node.js',
      },
      {
        icon: TypescriptIcon,
        alt: 'TypeScript',
      },
      {
        icon: FastifyIcon,
        alt: 'Fastify',
      },
      {
        icon: PrismaIcon,
        alt: 'Prisma',
      },
      {
        icon: DockerIcon,
        alt: 'Docker',
      },
      {
        icon: JestIcon,
        alt: 'Jest',
      },
    ],
  },
  {
    company: 'Pizza Shop',
    year: '2024',
    title: 'Pizza Shop',
    results: [
      {
        title:
          'Gerenciamento de pedidos: visualizar pedidos, marcar como entregue, etc.',
      },
      {
        title: 'Tema toggle: alternar entre temas dark, light e system.',
      },
      {
        title: 'Testes unitários e e2e para o frontend.',
      },
    ],
    link: 'https://github.com/WesleyR10/Pizza.shop',
    image: pizzaShop,
    techIcons: [
      {
        icon: ReactIcon,
        alt: 'React',
      },
      {
        icon: TailwindIcon,
        alt: 'Tailwind',
      },
      {
        icon: ZodIcon,
        alt: 'Zod',
      },
      {
        icon: ReactHookFormIcon,
        alt: 'React Hook Form',
      },
      {
        icon: TypescriptIcon,
        alt: 'Typescript',
      },
    ],
  },
]

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
