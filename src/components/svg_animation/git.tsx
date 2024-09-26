import { motion } from 'framer-motion'
import { type SVGProps } from 'react'

interface GitSvgProps extends SVGProps<SVGSVGElement> {}

export const GitSvg = ({ className, ...rest }: GitSvgProps) => {
  return (
    <svg
      viewBox="0 0 50 50"
      className={`group ${className} hover:drop-shadow-[4px_4px_20px_rgb(240,80,51)] hover:filter`}
      {...rest}
    >
      <motion.path
        fill="#1E293B"
        strokeWidth={0.5}
        stroke="rgba(255, 255, 255, 1)"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.4, duration: 3 }}
        className="group-hover:stroke-[rgb(240,80,51)]"
        d="M 9 7 L 12 41 L 26 45 L 40 41 C 41 29.667 42 18.333 43 7 L 9 7 z M 11.183594 9 L 40.816406 9 L 38.128906 39.455078 L 26 42.919922 L 13.871094 39.455078 L 11.183594 9 z M 18.550781 15 L 17.589844 27 L 30.580078 27 L 30.169922 32 L 26 32.619141 L 21.880859 32 L 21.699219 30 L 17.839844 30 L 18.230469 35 L 25.990234 37 L 33.759766 35 L 34.75 23 L 22.089844 23 L 22.410156 19 L 30.769531 19 L 31 21 L 34.699219 21 L 34 15 L 18.550781 15 z"
      />
    </svg>
  )
}
