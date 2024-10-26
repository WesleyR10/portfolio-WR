import { BsPersonWorkspace } from 'react-icons/bs'

import lottieFile from '/public/lottie/study.json'
import { educations } from '@/utils/educations'

import AnimationLottie from './helper/animation-lottie'

export const EducationSection = () => {
  return (
    <div
      id="education"
      className="relative bg-[#000319] z-50 "
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mx-4">
          <div className="flex items-start justify-center">
            <div className="h-3/4 w-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div className="flex flex-col gap-6 my-auto">
            {educations.map((education) => (
              <div className="relative text-white" key={education.id}>
                <div className="flex justify-center">
                  <p className="text-xs text-[#16f2b3] sm:text-sm mb-2 mr-[22px]">
                    {education.duration}
                  </p>
                </div>
                <div className="flex items-center gap-x-8 px-3 py-5 border border-[#CBACF9] rounded-xl max-w-[600px]">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
