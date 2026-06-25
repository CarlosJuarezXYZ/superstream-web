import type { ReactNode } from 'react'
import { FaTv, FaSatelliteDish, FaPlay } from 'react-icons/fa'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import PlatformCard from '../../components/PlatformCard/PlatformCard'
import { IPTVSection, IPTVGrid } from './IPTV.styled'

interface IPTVService {
  id: string
  name: string
  price: number
  iconBg: string
  icon: ReactNode
}

const IPTV_SERVICES: IPTVService[] = [
  {
    id: 'magis',
    name: 'Magis TV',
    price: 15,
    iconBg: '#e63946',
    icon: <FaTv size={24} color="white" />,
  },
  {
    id: 'iptv',
    name: 'IPTV',
    price: 15,
    iconBg: '#f59e0b',
    icon: <FaSatelliteDish size={24} color="white" />,
  },
  {
    id: 'flujo',
    name: 'Flujo TV',
    price: 15,
    iconBg: '#0ea5e9',
    icon: <FaPlay size={22} color="white" />,
  },
]

function IPTV() {
  return (
    <IPTVSection>
      <SectionHeader
        badge="IPTV"
        title="Televisión en vivo sin antena"
        subtitle="Canales nacionales e internacionales en cualquier dispositivo."
      />

      <IPTVGrid>
        {IPTV_SERVICES.map(({ id, name, price, iconBg, icon }) => (
          <PlatformCard
            key={id}
            name={name}
            price={price}
            iconBg={iconBg}
            icon={icon}
            accentColor="#f59e0b"
          />
        ))}
      </IPTVGrid>
    </IPTVSection>
  )
}

export default IPTV
