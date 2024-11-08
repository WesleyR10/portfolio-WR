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
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 50,
        pointerEvents: 'none',
        backgroundColor: 'rgb(177, 243, 252)',
        boxShadow:
          'rgb(177, 243, 252) 0px 0px 20px 10px, rgb(177, 243, 252) 0px 0px 5px 5px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        opacity: 0.75,
      }}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
    />
  )
}
