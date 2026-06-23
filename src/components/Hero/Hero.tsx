import { FaWhatsapp, FaAmazon } from 'react-icons/fa'
import {
  SiNetflix,
  SiHbomax,
  SiCrunchyroll,
  SiParamountplus,
  SiYoutube,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import Badge from '../Badge/Badge'
import {
  HeroSection,
  HeroGlow,
  HeroTitle,
  HeroSub,
  HeroCtas,
  WaButton,
  PlansButton,
  PlatformsRow,
  PlatformChip,
  PlatformDot,
} from './Hero.styled'

const WA_LINK = 'https://wa.me/51943316903'

const PLATFORMS: { name: string; color: string; Icon: IconType | null }[] = [
  { name: 'Netflix',          color: '#e50914', Icon: SiNetflix       },
  { name: 'Disney+',          color: '#113ccf', Icon: null            },
  { name: 'HBO Max',          color: '#b5179e', Icon: SiHbomax        },
  { name: 'Prime Video',      color: '#00a8e0', Icon: FaAmazon        },
  { name: 'Crunchyroll',      color: '#ff6400', Icon: SiCrunchyroll   },
  { name: 'Paramount+',       color: '#0066cc', Icon: SiParamountplus },
  { name: 'YouTube Premium',  color: '#ff0000', Icon: SiYoutube       },
]

function Hero() {
  return (
    <HeroSection>
      <HeroGlow />
      <Badge>⦿ Streaming · IA · IPTV — Todo en un solo lugar</Badge>
      <HeroTitle>
        Todo el entretenimiento<br />en un solo lugar
      </HeroTitle>
      <HeroSub>
        Accede a Netflix, Disney+, HBO Max, ChatGPT Plus, Canva Pro, IPTV y más.
        Activación inmediata, soporte 24/7 y precios imbatibles.
      </HeroSub>
      <HeroCtas>
        <WaButton href={WA_LINK} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={18} />
          Pedir por WhatsApp
        </WaButton>
        <PlansButton>Ver todos los planes →</PlansButton>
      </HeroCtas>
      <PlatformsRow>
        {PLATFORMS.map(({ name, color, Icon }) => (
          <PlatformChip key={name}>
            {Icon
              ? <Icon size={14} color={color} />
              : <PlatformDot $color={color}>●</PlatformDot>
            }
            {name}
          </PlatformChip>
        ))}
      </PlatformsRow>
    </HeroSection>
  )
}

export default Hero
