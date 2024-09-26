import { BsPersonWorkspace } from 'react-icons/bs'

import lottieFile from '/public/lottie/study.json'

import AnimationLottie from './helper/animation-lottie'

export const EducationSection = () => {
  const educations = [
    {
      id: 1,
      title: 'Análise e Desenvolvimento de Sistemas',
      duration: '2024 - Cursando',
      institution: 'Uninter, Brazil',
    },
    {
      id: 2,
      title: 'Higher Secondary Certificate',
      duration: '2018 - 2020',
      institution: 'SMPU College, India',
    },
    {
      id: 3,
      title: 'Secondary School Certificate',
      duration: '2008 - 2018',
      institution: 'Guru Nanak Public School, India',
    },
  ]

  return (
    <div
      id="education"
      className="relative z-50 my-12 border-t border-[#25213b] lg:my-24"
    >
      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            Formação
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-start justify-center">
            <div className="h-3/4 w-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <div key={education.id}>
                  <div className="relative p-3 text-white">
                    <div className="flex justify-center">
                      <p className="text-xs text-[#16f2b3] sm:text-sm">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="mb-2 text-base font-medium uppercase sm:text-xl">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
