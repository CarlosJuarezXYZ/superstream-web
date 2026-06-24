import SectionHeader from '../../components/SectionHeader/SectionHeader'
import PricingCard from '../../components/PricingCard/PricingCard'
import { PricingSection, PricingGrid } from './Pricing.styled'

const WHATSAPP = 'https://wa.me/51943316903'

interface Plan {
  id: string
  name: string
  price: number
  features: string[]
  featured?: boolean
}

const PLANS: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: 25,
    features: [
      '1 plataforma a elegir',
      'Cuenta compartida',
      'Activación inmediata',
      'Soporte por WhatsApp',
    ],
  },
  {
    id: 'combo',
    name: 'Combo',
    price: 45,
    featured: true,
    features: [
      'Todas las plataformas streaming',
      'ChatGPT Plus + Canva Pro',
      'Cuenta compartida',
      'Activación inmediata',
      'Soporte prioritario',
    ],
  },
  {
    id: 'iptv',
    name: 'IPTV',
    price: 30,
    features: [
      'Magis TV + IPTV + Flujo TV',
      '+8,000 canales en vivo',
      'Cuenta compartida',
      'Activación inmediata',
      'Soporte por WhatsApp',
    ],
  },
]

function Pricing() {
  return (
    <PricingSection>
      <SectionHeader
        badge="Precios"
        title="Planes para todos"
        subtitle="Sin pagos internacionales. Sin complicaciones. Un solo pago mensual."
      />

      <PricingGrid>
        {PLANS.map(({ id, name, price, features, featured }) => (
          <PricingCard
            key={id}
            name={name}
            price={price}
            features={features}
            featured={featured}
            whatsappHref={WHATSAPP}
          />
        ))}
      </PricingGrid>
    </PricingSection>
  )
}

export default Pricing
