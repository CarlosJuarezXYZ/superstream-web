import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '../../utils/motion'

interface MotionSectionProps {
  children: ReactNode
}

function MotionSection({ children }: MotionSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.35 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

export default MotionSection
