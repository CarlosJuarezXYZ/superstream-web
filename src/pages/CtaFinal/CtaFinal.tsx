import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import MotionSection from '../../components/MotionSection/MotionSection'
import { itemVariants } from '../../utils/motion'
import { CtaSection, CtaGlow, WaButton } from './CtaFinal.styled'

const WHATSAPP = 'https://wa.me/51943316903'

function CtaFinal() {
  return (
    <CtaSection>
      <CtaGlow />

      <MotionSection>
        <SectionHeader
          badge="Empieza hoy"
          title="¿Listo para activar tu cuenta?"
          subtitle="Escríbenos por WhatsApp y ten acceso en minutos. Sin trámites, sin contratos."
        />

        <WaButton
          as={motion.a}
          variants={itemVariants}
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
          Pedir por WhatsApp
        </WaButton>
      </MotionSection>
    </CtaSection>
  )
}

export default CtaFinal
