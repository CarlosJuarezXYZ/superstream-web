import { FaBolt, FaCoins, FaWhatsapp } from 'react-icons/fa'
import {
  FooterWrapper,
  LogoWrapper,
  LogoIcon,
  LogoText,
  TrustBadges,
  TrustBadge,
  TrustIcon,
  Copyright,
} from './Footer.styled'

const TRUST_BADGES = [
  { id: 'instant', icon: <FaBolt size={11} />, label: 'Activación inmediata' },
  { id: 'soles', icon: <FaCoins size={11} />, label: 'Pago en soles' },
  { id: 'support', icon: <FaWhatsapp size={11} />, label: 'Soporte por WhatsApp' },
]

function Footer() {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <LogoIcon>
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path d="M2 2L14 9L2 16V2Z" fill="white" />
          </svg>
        </LogoIcon>
        <LogoText>
          <span>Super</span>
          <span>Stream</span>
        </LogoText>
      </LogoWrapper>

      <TrustBadges>
        {TRUST_BADGES.map(({ id, icon, label }) => (
          <TrustBadge key={id}>
            <TrustIcon>{icon}</TrustIcon>
            {label}
          </TrustBadge>
        ))}
      </TrustBadges>

      <Copyright>© {new Date().getFullYear()} SuperStream. Todos los derechos reservados.</Copyright>
    </FooterWrapper>
  )
}

export default Footer
