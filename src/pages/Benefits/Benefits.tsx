import type { ReactNode } from 'react'
import { FaBolt, FaWhatsapp, FaShieldAlt, FaCoins } from 'react-icons/fa'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import BenefitCard from '../../components/BenefitCard/BenefitCard'
import { BenefitsSection, BenefitsGrid } from './Benefits.styled'

interface Benefit {
  id: string
  icon: ReactNode
  title: string
  description: string
}

const BENEFITS: Benefit[] = [
  {
    id: 'instant',
    icon: <FaBolt size={22} />,
    title: 'Activación inmediata',
    description: 'Tu cuenta queda activa en minutos después de confirmar el pago. Sin esperas.',
  },
  {
    id: 'support',
    icon: <FaWhatsapp size={22} />,
    title: 'Soporte por WhatsApp',
    description: 'Atención directa por WhatsApp ante cualquier problema. Rápido y sin vueltas.',
  },
  {
    id: 'nocontract',
    icon: <FaShieldAlt size={22} />,
    title: 'Sin contratos',
    description: 'Paga mes a mes sin compromisos ni permanencias. Cancela cuando quieras.',
  },
  {
    id: 'soles',
    icon: <FaCoins size={22} />,
    title: 'Pago en soles',
    description: 'Sin conversiones ni cargos internacionales. Paga en S/ desde cualquier banco.',
  },
]

function Benefits() {
  return (
    <BenefitsSection>
      <SectionHeader
        badge="Beneficios"
        title="¿Por qué elegir SuperStream?"
        subtitle="Todo lo que necesitas, sin las complicaciones de siempre."
      />

      <BenefitsGrid>
        {BENEFITS.map(({ id, icon, title, description }) => (
          <BenefitCard
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </BenefitsGrid>
    </BenefitsSection>
  )
}

export default Benefits
