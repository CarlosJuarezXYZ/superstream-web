import type { ReactNode } from 'react'
import {
  SiNetflix,
  SiHbomax,
  SiCrunchyroll,
  SiParamountplus,
  SiYoutube,
} from 'react-icons/si'
import { FaAmazon, FaTv } from 'react-icons/fa'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import PlatformCard from '../../components/PlatformCard/PlatformCard'
import { PlatformsSection, PlatformsGrid } from './Platforms.styled'
import { motion } from 'framer-motion'
import { itemVariants } from '../../utils/motion'
import MotionSection from '../../components/MotionSection/MotionSection'
import disneyLogo from '../../assets/disney.jpg'

interface Platform {
  id: string
  name: string
  price: number
  iconBg: string
  icon: ReactNode
  logo?:string
}

const PLATFORMS: Platform[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    price: 18,
    iconBg: "",
    icon: <SiNetflix size={36} color="#e50914" />,
  },
  {
    id: 'disney',
    name: 'Disney+',
    price: 10,
    iconBg: "",
    icon: "",
    logo: disneyLogo
  },
  {
    id: 'hbo',
    name: 'HBO Max',
    price: 10,
    iconBg: '#b5179e',
    icon: <SiHbomax size={36} color="white" />,
  },
  {
    id: 'prime',
    name: 'Prime Video',
    price: 10,
    iconBg: '#00a8e0',
    icon: <FaAmazon size={24} color="white" />,
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    price: 8,
    iconBg: '#ff6400',
    icon: <SiCrunchyroll size={26} color="white" />,
  },
  {
    id: 'paramount',
    name: 'Paramount+',
    price: 10,
    iconBg: '#0066cc',
    icon: <SiParamountplus size={26} color="white" />,
  },
  {
    id: 'yt-premium',
    name: 'YouTube Premium',
    price: 10,
    iconBg: "",
    icon: <SiYoutube size={42} color="#ff0000" />,
  },
  {
    id: 'yt-tv',
    name: 'YouTube TV',
    price: 12,
    iconBg: '#cc0000',
    icon: <FaTv size={22} color="white" />,
  },
]

function Platforms() {
  return (
    <PlatformsSection id="products">
      <MotionSection>
        <SectionHeader
          badge="Plataformas Streaming"
          title="Todas tus plataformas favoritas"
          subtitle="Sin complicaciones. acceso inmediato."
        />

        <PlatformsGrid>
          {PLATFORMS.map(({ id, name, price, iconBg, icon,logo }) => (
            <motion.div
              key={id}
              variants={itemVariants}
            >
              <PlatformCard
                name={name}
                price={price}
                iconBg={iconBg}
                icon={icon}
                logo={logo}
              />
            </motion.div>
          ))}
        </PlatformsGrid>
      </MotionSection>
    </PlatformsSection>
  )
}

export default Platforms
