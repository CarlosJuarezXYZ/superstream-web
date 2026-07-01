import type { ReactNode } from 'react'
import { SiOpenai, SiCanva } from 'react-icons/si'
import { FaRobot } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import PlatformCard from '../../components/PlatformCard/PlatformCard'
import MotionSection from '../../components/MotionSection/MotionSection'
import { itemVariants } from '../../utils/motion'
import { AIServicesSection, AIServicesGrid } from './AIServices.styled'

interface AIService {
  id: string
  name: string
  price: number
  iconBg: string
  icon: ReactNode
}

const AI_SERVICES: AIService[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    price: 18,
    iconBg: '#10a37f',
    icon: <SiOpenai size={26} color="white" />,
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    price: 12,
    iconBg: '#7d2ae8',
    icon: <SiCanva size={26} color="white" />,
  },
  {
    id: 'grok',
    name: 'Super Grok',
    price: 18,
    iconBg: '#1a1a1a',
    icon: <FaRobot size={24} color="white" />,
  },
]

function AIServices() {
  return (
    <AIServicesSection>
      <MotionSection>
        <SectionHeader
          badge="Herramientas de IA"
          title="Inteligencia Artificial al alcance"
          subtitle="Las mejores herramientas de IA, sin pagar precios internacionales."
        />

        <AIServicesGrid>
          {AI_SERVICES.map(({ id, name, price, iconBg, icon }) => (
            <motion.div key={id} variants={itemVariants}>
              <PlatformCard
                name={name}
                price={price}
                iconBg={iconBg}
                icon={icon}
                accentColor="#34d399"
              />
            </motion.div>
          ))}
        </AIServicesGrid>
      </MotionSection>
    </AIServicesSection>
  )
}

export default AIServices
