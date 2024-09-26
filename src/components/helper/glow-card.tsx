'use client'
import { useEffect } from 'react'
import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  identifier: string
}

const GlowCard = ({ children, identifier }: GlowCardProps) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`)
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`)

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    }

    const UPDATE = (event: { x: number; y: number } | undefined) => {
      Array.from(CARDS).forEach((CARD) => {
        const CARD_BOUNDS = CARD.getBoundingClientRect()

        if (
          event &&
          event.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          ;(CARD as HTMLElement).style.setProperty('--active', '1')
        } else {
          ;(CARD as HTMLElement).style.setProperty(
            '--active',
            CONFIG.opacity.toString()
          )
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ]

        let ANGLE =
          (Math.atan2(
            (event?.y ?? 0) - CARD_CENTER[1],
            (event?.x ?? 0) - CARD_CENTER[0]
          ) *
            180) /
          Math.PI

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE
        ;(CARD as HTMLElement).style.setProperty(
          '--start',
          (ANGLE + 90).toString()
        )
      })
    }

    document.body.addEventListener('pointermove', UPDATE)

    const RESTYLE = () => {
      if (CONTAINER) {
        ;(CONTAINER as HTMLElement).style.setProperty(
          '--gap',
          CONFIG.gap.toString()
        )
        ;(CONTAINER as HTMLElement).style.setProperty(
          '--blur',
          CONFIG.blur.toString()
        )
        ;(CONTAINER as HTMLElement).style.setProperty(
          '--spread',
          CONFIG.spread.toString()
        )
        ;(CONTAINER as HTMLElement).style.setProperty(
          '--direction',
          CONFIG.vertical ? 'column' : 'row'
        )
      }
    }

    RESTYLE()
    UPDATE(undefined)

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', UPDATE)
    }
  }, [identifier])

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} relative h-fit w-full cursor-pointer rounded-xl border border-[#2a2e5a] bg-[#101123] text-gray-200 transition-all duration-300 hover:border-transparent`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  )
}

export default GlowCard
