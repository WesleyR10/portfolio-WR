'use client'

import { motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'

import BrainSvg from '@/app/about/brainSvg'
import { CustomCursor } from '@/components/cursor'

const About = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <>
      <CustomCursor />

      <motion.div
        initial={{ y: '-200vh' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}
        className="h-screen"
      >
        <div
          ref={containerRef}
          className="h-full overflow-y-auto overflow-x-hidden bg-[url('/background/Desktop/fundoBoneco.png')] bg-cover lg:flex"
        >
          <div className="relative flex flex-col gap-16 p-4 sm:p-8 md:gap-24 md:p-12 lg:w-2/3 lg:gap-32 lg:p-20 lg:pr-0 xl:gap-40 xl:px-48 xl:py-24">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="inline-flex gap-2 bg-black bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-lg font-bold uppercase tracking-widest text-transparent lg:text-2xl">
                Biografia
              </h1>
              <p className="text-base text-white md:text-lg">
                Meu nome é Wesley, Eu sou um Desenvolvedor Full Stack focado em
                criar soluçôes eficientes e escaláveis. Possuo habilidades
                sólidas em tecnologias modernas e estou constantemente em busca
                de novos desafios para expandir meu conhecimento e agregar valor
                aos projetos nos quais estou envolvidos. Sou motivado por
                aprender e aplicar novas tecnologias para melhorar a
                produtividade e qualidade do desenvolvimento.
              </p>

              <h2 className="inline-flex gap-2 bg-black bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-lg font-bold uppercase tracking-widest text-transparent lg:text-2xl">
                Objetivo de Carreira
              </h2>
              <p className="text-base text-white md:text-lg">
                Meu objetivo é me tornar um Desenvolvedor Full Cycle, dominando
                todas as etapas do desenvolvimento de software. Com dedicação e
                paixão, pretendo, em um futuro não tão distante, me tornar um
                empreendedor na área, liderando projetos inovadores e
                impactantes.
              </p>

              <h2 className="inline-flex gap-2 bg-black bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-lg font-bold uppercase tracking-widest text-transparent lg:text-2xl">
                Principais Competências
              </h2>
              <ul className="list-inside list-disc space-y-2 text-base text-white md:text-lg">
                <li>Linguagens: JavaScript, TypeScript</li>
                <li>
                  Front-end: React.js, Next.js, SASS, Bootstrap,
                  Styled-Components, Stitches
                </li>
                <li>Mobile: React Native</li>
                <li>Back-end: Node.js, Nest.js</li>
                <li>
                  Design de Software: Princípios SOLID, DDD, Arquitetura
                  Hexagonal
                </li>
                <li>
                  Banco de Dados e ORM: MongoDB, PostgreSQL, Sequelize, Prisma,
                  TypeORM
                </li>
                <li>Ferramentas: Git, Docker, Kubernetes</li>
              </ul>
              <h2 className="inline-flex gap-2 bg-black bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-lg font-bold uppercase tracking-widest text-transparent lg:text-2xl">
                Certificados
              </h2>
              <p className="text-base text-white md:text-lg">
                Tenho diversos certificados que comprovam minha expertise e
                dedicação contínua ao aprendizado. Para uma lista completa,
                entre em contato ou acesse meu perfil no LinkedIn.
              </p>

              <div className="italic text-white">
                The bad news is time flies. The good news is you are the pilot.
                <p className="font-bold">— Michael Altshuler</p>
              </div>
            </div>

            <div className="mb-16">Seja feliz</div>
          </div>
          <div className="sticky top-0 z-30 hidden lg:block lg:w-1/3">
            <BrainSvg scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default About
