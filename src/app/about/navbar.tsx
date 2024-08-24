'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import NavLink from './navLink'

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/projects', title: 'Projects' },
  { url: '/contact', title: 'Contact' },
]

const menuTopVariant = {
  closed: { rotate: 0 },
  opened: { rotate: 45, backgroundColor: 'rgb(255,255,255)' },
}

const menuCenterVariant = {
  closed: { opacity: 1 },
  opened: { opacity: 0 },
}

const menuBottomVariant = {
  closed: { rotate: 0 },
  opened: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
}

const listVariant = {
  closed: { x: '100vw' },
  opened: {
    x: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
}

const listItemVariant = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-full items-center justify-between bg-blue-100 px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden w-1/3 gap-4 md:flex">
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          className="flex items-center justify-center rounded-md bg-black p-1 text-sm font-semibold transition duration-200 hover:shadow-2xl"
          href="/"
        >
          <span className="mr-1 text-white">Ben</span>
          <span className="flex h-8 w-12 items-center justify-center rounded bg-white text-black">
            <Image src="/logo.png" alt="Logo" width={25} height={25} />
          </span>
        </Link>
      </div>
      <div className="justify-center' hidden w-1/3 items-center gap-4 md:flex">
        <Link
          href="https://github.com/benroz3"
          className="transition duration-200 hover:shadow-2xl"
        >
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ben-rozen"
          className="transition duration-200 hover:shadow-2xl"
        >
          <Image src="/linkedin.png" alt="Linkedin" width={24} height={24} />
        </Link>
        <a
          className="group relative inline-block"
          href="/Ben_Rozen_Resume.pdf"
          download={true}
        >
          <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"></span>
            <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative">
              <div className="flex flex-row">
                <span>Resume</span>
                <Image src="/pdf.png" alt="PDF Icon" width={20} height={20} />
              </div>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <div className="md:hidden">
        <button
          className="relative z-50 flex h-8 w-10 flex-col justify-between"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={menuTopVariant}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
          <motion.div
            variants={menuCenterVariant}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-10 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={menuBottomVariant}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-4xl text-white"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariant} key={link.url}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
