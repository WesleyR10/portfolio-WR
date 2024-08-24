'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { MenuNavbar } from '@/components/menu-navbar'
import { Name } from '@/components/name'

export function Header() {
  return (
    <div className="fixed left-1/2 top-10 z-50 flex w-full -translate-x-1/2 transform items-center justify-center">
      <div className="flex w-full items-center justify-between rounded-lg bg-red-500 px-4">
        <div>
          <Name />
        </div>
        <div>
          <MenuNavbar />
        </div>
        <div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/linkedIn-white.svg"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
