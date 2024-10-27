import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import { Navbar } from '@/components/menu-navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio Wesley Ribas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="bg-[url('/background/Desktop/Menu.png')] bg-cover bg-left">
          <div className="flex px-8 py-4">
            <div className="flex h-14 justify-center pl-2">
              <Image
                src="/WR.png"
                alt="Logo Wesley Ribas"
                width={138}
                height={76}
              />
            </div>
            <Navbar className="top-4" />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
