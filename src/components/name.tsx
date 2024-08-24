import { motion } from 'framer-motion'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
}

export function Name() {
  return (
    <div className="flex h-[50px] w-[50px] place-content-center overflow-hidden rounded-[30px] bg-[rgba(255,255,255,0.2)]">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="stroke-linejoin-round stroke-linecap-round w-[56%] overflow-visible stroke-white stroke-[2]"
      >
        <motion.path
          d="M10 10 H 90 V 90 H 10 L 10 10" // Substitua por seu caminho SVG extraído
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
  )
}
