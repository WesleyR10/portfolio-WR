'use client'

import { motion, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import BrainSvg from '@/app/about/brainSvg'

const About = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className="h-screen"
    >
      <div ref={containerRef} className="h-full overflow-scroll overflow-x-hidden lg:flex">
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:gap-32 md:p-12 lg:w-2/3 lg:gap-48 lg:p-20 lg:pr-0 xl:gap-64 xl:p-48">
          <div className="flex flex-col justify-center gap-12">
            <h1 className="text-2xl font-bold">Biografia</h1>
            <p className="text-lg">
              Meu nome é Wesley, Eu sou um Desenvolvedor Full Stack focado em criar
              soluçôes eficientes e escaláveis. Possuo habilidades sólidas em tecnologias modernas
              e estou constantemente em busca de novos desafios para expandir meu
              conhecimento e agregar valor aos projetos nos quais estou envolvidos. Sou motivado
              por aprender e aplicar novas tecnologias para melhorar a produtividade e qualidade
              do desenvolvimento.
            </p>
            <span className="italic pb-10">
              The bad news is time flies. The good news is you are the pilot.
              <p className="font-bold">— Michael Altshuler</p>
            </span>
          </div>
        </div>
        <div className="sticky top-0 z-30 hidden lg:block lg:w-1/3">
          <BrainSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default About
