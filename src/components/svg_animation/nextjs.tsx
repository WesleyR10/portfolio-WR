import { motion } from 'framer-motion'
import { type SVGProps } from 'react'

interface NextJsSvgProps extends SVGProps<SVGSVGElement> {}

export const NextJsSvg = ({ className, ...rest }: NextJsSvgProps) => {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`group ${className} hover:drop-shadow-[4px_4px_20px_rgb(207,207,207)] hover:filter`}
      {...rest}
    >
      <motion.path
        fill="#1E293B"
        strokeWidth={0.5}
        stroke="#CFCFCF"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 3 }}
        className="group-hover:stroke-[rgb(207,207,207)]"
        d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
      />
    </svg>
  )
}
