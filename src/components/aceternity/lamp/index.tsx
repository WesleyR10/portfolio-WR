'use client'
import { motion } from 'framer-motion'
import React from 'react'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'
import { cn } from '@/lib/utils'

export const LampContainer = ({
  children,
  className,
  color,
}: {
  children: React.ReactNode
  className?: string
  color?: string
}) => {
  const isLargeScreen = useIsLargeScreen()

  return (
    <div
      className={cn(
        'relative z-0 flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-[#1E293B] transition-colors duration-500 md:min-h-[75vh]',
        className
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 items-center justify-center px-5 md:px-0 lg:w-[60%]">
        <motion.div
          initial={{ opacity: 0.5, width: '10rem' }}
          whileInView={{ opacity: 1, width: 'calc(100% - 40px)' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: isLargeScreen
              ? `conic-gradient(from 210deg at center top, ${color} 50%, transparent 70%)`
              : `conic-gradient(from 70deg at center top, ${color} 10%, transparent)`,
          }}
          className="absolute inset-auto right-1/2 h-28 w-[calc(100%-40px)] overflow-visible text-white md:h-56 lg:right-[20%] lg:h-40"
        >
          <div className="absolute bottom-0 left-0 z-20 h-20 w-[100%] bg-[#1E293B] [mask-image:linear-gradient(to_top,white,transparent)] md:h-40 lg:h-28" />
          <div className="absolute bottom-0 left-0 z-20 h-[100%] w-20 bg-[#1E293B] [mask-image:linear-gradient(to_right,white,transparent)] md:w-40 lg:w-28" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '10rem' }}
          whileInView={{ opacity: 1, width: 'calc(100% - 40px)' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: isLargeScreen
              ? `conic-gradient(from 200deg at center top, ${color} 100%, transparent 70%)`
              : `conic-gradient(from 290deg at center top, ${color} 100%, transparent 70%)`,
          }}
          className="absolute inset-auto left-1/2 h-28 w-[calc(100%-40px)] text-white md:h-56 lg:left-[20%] lg:h-40"
        >
          <div className="absolute bottom-0 right-0 z-20 h-[100%] w-20 bg-[#1E293B] [mask-image:linear-gradient(to_left,white,transparent)] md:w-40 lg:w-28" />
          <div className="absolute bottom-0 right-0 z-20 h-20 w-[100%] bg-[#1E293B] [mask-image:linear-gradient(to_top,white,transparent)] md:h-40 lg:h-28" />
        </motion.div>
        <div className="absolute top-1/2 h-24 w-[calc(100%-40px)] translate-y-6 scale-x-150 bg-[#1E293B] blur-2xl md:h-48 md:translate-y-12 lg:top-[30%] lg:translate-y-8"></div>
        <div className="absolute top-1/2 z-50 h-24 w-[calc(100%-40px)] bg-transparent opacity-10 backdrop-blur-md md:h-48 lg:top-[30%] lg:h-32"></div>
        <div
          className="h-18 absolute inset-auto z-50 w-[calc(100%-40px)] -translate-y-1/2 rounded-full opacity-50 blur-3xl md:h-36"
          style={{ backgroundColor: color }}
        ></div>
        <motion.div
          initial={{ width: '4rem' }}
          whileInView={{ width: 'calc(100% - 40px)' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="h-18 absolute inset-auto z-30 w-[calc(100%-40px)] -translate-y-[3rem] rounded-full blur-2xl md:-translate-y-[4rem] lg:-translate-y-[2rem]"
          style={{ backgroundColor: color }}
        ></motion.div>{' '}
        {/* lg:h-24 */}
        <motion.div
          initial={{ width: '10rem' }}
          whileInView={{ width: 'calc(100% - 40px)' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-50 w-[calc(100%-40px)] -translate-y-[3.5rem] md:-translate-y-[5rem] lg:-translate-y-[3rem]"
          style={{ backgroundColor: color }}
        ></motion.div>
        <div className="h-22 absolute inset-auto z-40 w-[calc(100%-40px)] -translate-y-[6.25rem] bg-[#1E293B] md:hidden md:h-44 md:-translate-y-[8rem] lg:h-32 lg:-translate-y-[5rem]"></div>
      </div>

      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5 md:-translate-y-72">
        {children}
      </div>
    </div>
  )
}
