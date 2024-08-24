import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function MenuNavbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/hire-me', label: 'Hire me' },
  ]

  return (
    <div className="flex space-x-4 rounded-full bg-gray-500 p-4">
      {links.map((link, i) => (
        <Link key={link.href} href={link.href}>
          <span
            className={cn(
              `rounded px-3 py-2 text-white`,
              pathname === link.href ? 'rounded-full border border-white' : ''
            )}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
