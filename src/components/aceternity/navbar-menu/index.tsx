'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  href: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <Link href={href}>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
      </Link>
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-4 rounded-full border border-[#CBACF9] bg-transparent p-4 shadow-input"
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-white dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-white dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-200"
    >
      {children}
    </Link>
  )
}
