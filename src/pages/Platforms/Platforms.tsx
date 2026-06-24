import type { ReactNode } from 'react'
import {
  SiNetflix,
  SiHbomax,
  SiCrunchyroll,
  SiParamountplus,
  SiYoutube,
} from 'react-icons/si'
import { FaAmazon, FaTv } from 'react-icons/fa'
import Badge from '../../components/Badge/Badge'
import PlatformCard from '../../components/PlatformCard/PlatformCard'
import {
  PlatformsSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  PlatformsGrid,
} from './Platforms.styled'

interface Platform {
  id: string
  name: string
  price: number
  iconBg: string
  icon: ReactNode
}

const PLATFORMS: Platform[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    price: 18,
    iconBg: '#e50914',
    icon: <SiNetflix size={26} color="white" />,
  },
  {
    id: 'disney',
    name: 'Disney+',
    price: 10,
    iconBg: '#113ccf',
    icon: <span style={{ color: 'white', fontWeight: 900, fontSize: 13 }}>D+</span>,
  },
  {
    id: 'hbo',
    name: 'HBO Max',
    price: 10,
    iconBg: '#b5179e',
    icon: <SiHbomax size={22} color="white" />,
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
    iconBg: '#ff0000',
    icon: <SiYoutube size={26} color="white" />,
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
    <PlatformsSection>
      <SectionHeader>
        <Badge>Plataformas Streaming</Badge>
        <SectionTitle>Todas tus plataformas favoritas</SectionTitle>
        <SectionSubtitle>Sin complicaciones. Un pago, acceso inmediato.</SectionSubtitle>
      </SectionHeader>

      <PlatformsGrid>
        {PLATFORMS.map(({ id, name, price, iconBg, icon }) => (
          <PlatformCard
            key={id}
            name={name}
            price={price}
            iconBg={iconBg}
            icon={icon}
          />
        ))}
      </PlatformsGrid>
    </PlatformsSection>
  )
}

export default Platforms
