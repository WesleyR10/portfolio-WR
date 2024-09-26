import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className="pointer-events-none fixed z-50 h-5 w-5 rounded-full opacity-75"
      style={{
        backgroundColor: 'rgb(177, 243, 252)',
        boxShadow:
          'rgb(177, 243, 252) 0px 0px 20px 10px, rgb(177, 243, 252) 0px 0px 5px 5px',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}
