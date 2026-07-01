import { motion } from 'framer-motion'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import TermCard from '../../components/TermCard/TermCard'
import MotionSection from '../../components/MotionSection/MotionSection'
import { itemVariants } from '../../utils/motion'
import { TermsSection, TermsGrid } from './Terms.styled'

interface Term {
  id: string
  number: string
  category: string
  rules: string[]
}

const TERMS: Term[] = [
  {
    id: 'uso',
    number: '01',
    category: 'Uso de la cuenta',
    rules: [
      'No compartir credenciales fuera del grupo acordado.',
      'Máximo 2 dispositivos simultáneos por cuenta.',
      'No cambiar la contraseña de la cuenta.',
      'No modificar el perfil asignado.',
    ],
  },
  {
    id: 'pagos',
    number: '02',
    category: 'Pagos y renovación',
    rules: [
      'El pago es mensual y debe realizarse por adelantado.',
      'Sin reembolsos una vez activado el servicio.',
      'La cuenta se suspende automáticamente al vencer el plazo.',
      'Renovación disponible por WhatsApp.',
    ],
  },
  {
    id: 'soporte',
    number: '03',
    category: 'Soporte',
    rules: [
      'Los problemas se reportan exclusivamente por WhatsApp.',
      'Tiempo de respuesta: hasta 24 horas hábiles.',
      'No se garantiza disponibilidad 100% del servicio.',
      'Interrupciones por mantenimiento del proveedor no aplican reembolso.',
    ],
  },
]

function Terms() {
  return (
    <TermsSection id="terms">
      <MotionSection>
        <SectionHeader
          badge="Términos"
          title="Condiciones del servicio"
          subtitle="Lee las condiciones antes de contratar. Sin letra pequeña."
        />

        <TermsGrid>
          {TERMS.map(({ id, number, category, rules }) => (
            <motion.div key={id} variants={itemVariants}>
              <TermCard
                number={number}
                category={category}
                rules={rules}
              />
            </motion.div>
          ))}
        </TermsGrid>
      </MotionSection>
    </TermsSection>
  )
}

export default Terms
