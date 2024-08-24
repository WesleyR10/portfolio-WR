import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseListener = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseListener)

    return () => window.removeEventListener('mousemove', mouseListener)
  }, [])

  return (
    <motion.div
      animate={{ x: position.x + 10, y: position.y + 10 }}
      className="fixed z-50 h-12 w-12 rounded-full border border-white"
    />
  )
}
