import { FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import { CtaSection, CtaGlow, WaButton } from './CtaFinal.styled'

const WHATSAPP = 'https://wa.me/51943316903'

function CtaFinal() {
  return (
    <CtaSection>
      <CtaGlow />

      <SectionHeader
        badge="Empieza hoy"
        title="¿Listo para activar tu cuenta?"
        subtitle="Escríbenos por WhatsApp y ten acceso en minutos. Sin trámites, sin contratos."
      />

      <WaButton href={WHATSAPP} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={20} />
        Pedir por WhatsApp
      </WaButton>
    </CtaSection>
  )
}

export default CtaFinal
