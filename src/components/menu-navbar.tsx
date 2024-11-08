'use client'

import { Code2, FolderGit2, Home, Mail, Menu, User, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const routes = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Skills', path: '/skills', icon: Code2 },
  { name: 'Projetos', path: '/projects', icon: FolderGit2 },
  { name: 'About', path: '/about', icon: User },
]

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleLinkClick = (routeName: string) => {
    setActive(routeName)
    setIsSheetOpen(false) // Fecha o Sheet
  }

  return (
    <div className={cn('flex h-full w-full justify-end', className)}>
      <nav className="hidden items-center justify-center space-x-4 rounded-full border border-[#CBACF9] bg-transparent p-4 shadow-input md:flex">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              'text-sm font-medium transition-colors hover:opacity-[0.9]',
              active === route.name ? 'text-white' : 'text-white'
            )}
            onClick={() => handleLinkClick(route.name)}
          >
            {route.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-transparent hover:opacity-70 [&_svg]:!h-8 [&_svg]:!w-8"
          >
            <Menu />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] border-none bg-[#000319]"
        >
          <nav className="mt-8 flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-[0.9]',
                  active === route.name ? 'text-white' : 'text-white'
                )}
                onClick={() => handleLinkClick(route.name)}
              >
                {route.icon && <route.icon className="h-5 w-5 text-white" />}
                {route.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
