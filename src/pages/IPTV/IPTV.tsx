import type { ReactNode } from 'react'
import { FaTv, FaSatelliteDish, FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import PlatformCard from '../../components/PlatformCard/PlatformCard'
import MotionSection from '../../components/MotionSection/MotionSection'
import { hoverCard, itemVariants } from '../../utils/motion'
import { IPTVSection, IPTVGrid } from './IPTV.styled'
import flujoTv from '../../assets/flujo-tv.png'
import magisTv from '../../assets/magis-tv.png'
import iptvLogo from '../../assets/iptv.jpg'

interface IPTVService {
  id: string
  name: string
  price: number
  iconBg: string
  icon: ReactNode
  logo?: string
}

const IPTV_SERVICES: IPTVService[] = [
  {
    id: 'magis',
    name: 'Magis TV',
    price: 15,
    iconBg: '',
    icon: "",
    logo: magisTv,
  },
  {
    id: 'iptv',
    name: 'IPTV',
    price: 15,
    iconBg: '',
    icon: "",
    logo: iptvLogo,
  },
  {
    id: 'flujo',
    name: 'Flujo TV',
    price: 15,
    iconBg: '',
    icon: "",
    logo: flujoTv,
  },
]

function IPTV() {
  return (
    <IPTVSection>
      <MotionSection>
        <SectionHeader
          badge="IPTV"
          title="Televisión en vivo sin antena"
          subtitle="Canales nacionales e internacionales en cualquier dispositivo."
        />

        <IPTVGrid>
          {IPTV_SERVICES.map(({ id, name, price, iconBg, icon,logo }) => (
            <motion.div key={id} variants={itemVariants} whileHover={hoverCard}>
              <PlatformCard
                name={name}
                price={price}
                iconBg={iconBg}
                icon={icon}
                accentColor="#f59e0b"
                logo={logo}
              />
            </motion.div>
          ))}
        </IPTVGrid>
      </MotionSection>
    </IPTVSection>
  )
}

export default IPTV
