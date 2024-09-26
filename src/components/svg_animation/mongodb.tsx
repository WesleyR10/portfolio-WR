import { motion } from 'framer-motion'
import { type SVGProps } from 'react'

interface MongoDbSvgProps extends SVGProps<SVGSVGElement> {}

export const MongoDbSvg = ({ className, ...rest }: MongoDbSvgProps) => {
  return (
    <svg
      viewBox="0 0 50 50"
      className={`group ${className} hover:drop-shadow-[4px_4px_20px_rgb(102,187,106)] hover:filter`}
      {...rest}
    >
      <motion.path
        fill="#1E293B"
        strokeWidth={0.5}
        stroke="rgba(255, 255, 255, 1)"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 3 }}
        className="group-hover:stroke-[rgb(102,187,106)]"
        d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z M23 28H25V36H23z M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
      />
    </svg>
  )
}
