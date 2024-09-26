import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa'
import { MdDownload } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import { SiLeetcode } from 'react-icons/si'

import { BackgroundBeamsWithCollision } from '@/components/aceternity/background-beams-with-collision'

interface PersonalData {
  name: string
  designation: string
  github: string
  linkedIn: string
  resume: string
}

export const HeroSection: React.FC<{ personalData: PersonalData }> = ({
  personalData,
}) => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="relative flex flex-col items-center justify-between overflow-hidden py-4 lg:py-12">
        <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:order-1 lg:pt-10">
            <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              Olá, <br />
              Eu sou <span className="text-pink-500">{personalData.name}</span>
              {` , um `}
              <span className="text-[#16f2b3]">{personalData.designation}</span>
              .
            </h1>

            <div className="my-12 flex items-center gap-5">
              <Link
                href={personalData.github}
                target="_blank"
                className="text-pink-500 transition-all duration-300 hover:scale-125"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="text-pink-500 transition-all duration-300 hover:scale-125"
              >
                <BsLinkedin size={30} />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              >
                <button className="flex items-center gap-1 rounded-full border-none bg-[#0d1224] px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold">
                  <span>Contate-me</span>
                  <RiContactsFill size={16} />
                </button>
              </Link>

              <Link
                className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-8 md:py-4 md:text-sm md:font-semibold"
                role="button"
                target="_blank"
                href={personalData.resume}
              >
                <span>Obter Currículo</span>
                <MdDownload size={16} />
              </Link>
            </div>
          </div>
          <div className="relative order-1 rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] lg:order-2">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 py-5 lg:px-8">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">programador</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 mr-2 text-white lg:ml-8">nome:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">{personalData.name}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 mr-2 lg:ml-8">
                  <span className="text-white">habilidades:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NextJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Redux</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Express</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NodeJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">PostgreSQL</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MongoDB</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Docker</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Prisma</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">TailwindCSS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Typescript</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">TypeOrm</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">React Native</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Kubernetes</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NestJs</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 mr-2 text-white lg:ml-8">
                    trabalhadorDedicado:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 mr-2 text-white lg:ml-8">
                    aprendizadoRápido:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 mr-2 text-white lg:ml-8">
                    resolvedorDeProblemas:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 mr-2 text-green-400 lg:ml-8">
                    contratável:
                  </span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-8 mr-2 text-orange-400 lg:ml-16">
                    return
                  </span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                  <span className="mr-2 text-white">trabalhadorDedicado</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                  <span className="mr-2 text-white">resolvedorDeProblemas</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                  <span className="mr-2 text-white">habilidades.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div>
                  <span className="ml-8 mr-2 text-gray-400 lg:ml-16">{`);`}</span>
                </div>
                <div>
                  <span className="ml-4 text-gray-400 lg:ml-8">{`};`}</span>
                </div>
                <div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  )
}
