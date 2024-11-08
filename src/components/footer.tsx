'use client'

import Link from 'next/link'
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer className="bg-[url('/background/Desktop/rodapé.png')] bg-cover">
      <div className="container mx-auto px-4 py-6">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 pb-4">
          <Link
            href="https://github.com/WesleyR10"
            target="_blank"
            className="text-white transition-all duration-300 hover:scale-125"
          >
            <BsGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/wesley-ribas-4996ba173/"
            target="_blank"
            className="text-white transition-all duration-300 hover:scale-125"
          >
            <BsLinkedin size={24} />
          </Link>
          <Link
            href="https://wa.me/5531973219539"
            target="_blank"
            className="text-white transition-all duration-300 hover:scale-125"
          >
            <BsWhatsapp size={24} />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-white">
          <p>Copyright © 2024 Wesley Ribas</p>
          <p>
            em parceria com{' '}
            <a
              href="https://www.linkedin.com/in/camila-marques-ux-ui-design/"
              target="_blank"
              className="underline"
            >
              CM
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
