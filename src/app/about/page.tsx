'use client'

import { motion, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import BrainSvg from '@/app/about/brainSvg'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next',
  'TypeScript',
  'Redux',
  'ExpressJS',
  'Axios',
  'MongoDB',
  'PostgreSQL',
  'Git & GitHub',
  'Docker',
]

const jobs = [
  {
    role: 'Fullstack Developer',
    skills: 'JavaScript, Java, MySQL, git & Docker',
    desc: 'My focus was on developing, maintaining and troubleshooting cellular location systems.',
    duration: 'Jan 2024 - Present',
    company: 'MTRX, Rayzone Group',
  },
  {
    role: 'Military Officer',
    skills: 'React, Next, Redux, TypeScript',
    desc: "Took part in my unit's website development team. Experienced in leading, planning, training, and evaluating soldiers.",
    duration: 'Dec 2018 - Jun 2023',
    company: 'IDF',
  },
]

const About = () => {
  const containerRef = useRef(null)

  const skillRef = useRef(null)
  const experienceRef = useRef(null)

  const isSkillRefInView = useInView(skillRef, { margin: '-100px' })
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <div ref={containerRef} className="h-full overflow-scroll lg:flex">
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:gap-32 md:p-12 lg:w-2/3 lg:gap-48 lg:p-20 lg:pr-0 xl:gap-64 xl:p-48">
          <div className="flex flex-col justify-center gap-12">
            <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
            <p className="text-lg">
              My name is Ben, I am a fullstack developer specialized with
              designing, developing, and maintaining web applications. Dedicated
              to delivering high-quality solutions that enhance user experiences
              and drive business success.
            </p>
            <span className="italic">
              The bad news is time flies. The good news is you are the pilot.
              <p className="font-bold">— Michael Altshuler</p>
            </span>
            <div></div>
            <div className="self-end">
              <Image
                src="/signature.png"
                alt="Signature"
                width={300}
                height={100}
              />
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div ref={skillRef} className="flex flex-col justify-center gap-12">
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="cursor-pointer rounded bg-black p-2 text-sm text-white shadow-lg transition duration-200 hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div
            ref={experienceRef}
            className="flex flex-col justify-center gap-12 pb-48"
          >
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {jobs.map((job, index) => (
                <div key={job.desc} className="flex h-64 justify-between">
                  <div className="w-1/3">
                    {index % 2 === 0 && (
                      <div>
                        <div className="rounded-lg bg-white p-3 font-semibold">
                          {job.role}
                        </div>
                        <div className="p-3 text-sm font-semibold">
                          {job.skills}
                        </div>
                        <div className="p-3 text-sm italic">{job.desc}</div>
                        <div className="p-3 text-sm font-semibold text-red-400">
                          {job.duration}
                        </div>
                        <div className="w-fit rounded bg-white p-1 text-sm font-semibold">
                          {job.company}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex w-1/6 justify-center">
                    <div className="relative h-full w-1 rounded bg-gray-600">
                      <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    {index % 2 === 1 && (
                      <div>
                        <div className="rounded-lg bg-white p-3 font-semibold">
                          {job.role}
                        </div>
                        <div className="p-3 text-sm font-semibold">
                          {job.skills}
                        </div>
                        <div className="p-3 text-sm italic">{job.desc}</div>
                        <div className="p-3 text-sm font-semibold text-red-400">
                          {job.duration}
                        </div>
                        <div className="w-fit rounded bg-white p-1 text-sm font-semibold">
                          {job.company}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
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
