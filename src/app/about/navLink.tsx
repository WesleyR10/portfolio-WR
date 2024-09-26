'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  link: {
    url: string
    title: string
  }
}

const NavLink = (props: Props) => {
  const pathname = usePathname()

  return (
    <Link
      className={`${pathname === props.link.url ? 'bg-black text-white hover:shadow-xl' : 'hover:text-gray-500'} rounded p-1 transition duration-100`}
      href={props.link.url}
    >
      {props.link.title}
    </Link>
  )
}

export default NavLink
